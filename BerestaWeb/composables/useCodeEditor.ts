import {ref, onMounted, nextTick} from "vue"
import {useBerestaApi} from "./useBerestaApi"
import {loadFile} from "~/services/fileLoader"
import {useMinimap} from "./useMinimap"

export function useCodeEditor()
{
    const code = ref("");
    const result = ref<any>(null);
    const lineCount = ref(1);
    const activeLine = ref(1);
    const selectedWord = ref("");

    const codeEditor = ref<HTMLTextAreaElement | null>(null);
    const minimapEl = ref<HTMLElement | null>(null);
    const lineNumbers = ref<HTMLElement | null>(null);
    const highlightEl = ref<HTMLElement | null>(null);
    const syntaxEl = ref<HTMLElement | null>(null);
    
    function syncScroll()
    {
        const editor = codeEditor.value;
        if(!editor) {return;}
        
        if(lineNumbers.value && editor) {lineNumbers.value.scrollTop = editor.scrollTop;}

        if(highlightEl.value && editor)
        {
            highlightEl.value.scrollTop = editor.scrollTop;
            highlightEl.value.scrollLeft = editor.scrollLeft;
        }
        
        if(syntaxEl.value && editor)
        {
            syntaxEl.value.style.transform = `translate(${-editor.scrollLeft}px, ${-editor.scrollTop}px)`;
        }

        if(minimapEl.value && editor.value)
        {
            const ratio = minimapEl.value.scrollHeight / editor.scrollHeight;
            minimapEl.value.scrollTop = editor.scrollTop * ratio;
        }
    }
    
    function updateSelectedWord()
    {
        const el = codeEditor.value;
        if(!el) {return;}
        
        const {selectionStart, selectionEnd} = el;
        
        if(selectionStart === selectionEnd)
        {
            const text = code.value;
            const left = text.slice(0, selectionStart);
            const right = text.slice(selectionStart);
            const leftWord = left.match(/[A-Za-z_0-9]+$/)?.[0] || "";
            const rightWord = right.match(/^[A-Za-z_0-9]+/)?.[0] || "";
            selectedWord.value = leftWord + rightWord;
        }
        else {selectedWord.value = code.value.slice(selectionStart, selectionEnd);}
        
        if(!selectedWord.value.trim() || selectedWord.value.length < 2) {selectedWord.value = "";}
    }

    function onInput()
    {
        updateLineCount();
        updateActiveLine();
        requestAnimationFrame(() => syncScroll());
    }

    function onKeyDown()
    {
        requestAnimationFrame(() =>
        {
            updateActiveLine();
            syncScroll();
        });
    }

    function onKeyUp()
    {
        requestAnimationFrame(() =>
        {
            updateActiveLine();
            updateSelectedWord();
            syncScroll();
        });
    }

    function onClick()
    {
        requestAnimationFrame(() =>
        {
            updateActiveLine();
            updateSelectedWord();
        });
    }

    function updateLineCount() {lineCount.value = code.value.split("\n").length;}

    function updateActiveLine()
    {
        if(!codeEditor.value) {return;}

        const text = code.value.slice(0, codeEditor.value.selectionStart);
        const lines = text.split(/\r?\n/);

        activeLine.value = lines.length;
    }

    function insertTab()
    {
        if(!codeEditor.value) {return;}

        const el = codeEditor.value;
        const start = el.selectionStart;
        const end = el.selectionEnd;
        const tab = "    ";

        code.value = code.value.substring(0, start) + tab + code.value.substring(end);

        requestAnimationFrame(() =>
        {
            el.selectionStart = el.selectionEnd = start + tab.length;
            updateActiveLine();
        });
    }
    
    const {onMouseDown: onMinimapMouseDown} = useMinimap({codeEditor, minimapEl, syncScroll})
    
    async function runCode()
    {
        try           {result.value = await useBerestaApi(code.value);}
        catch(e: any) {result.value = {stdout: "", stderr: e.message, success: false};}
    }

    onMounted(async () =>
    {
        code.value = await loadFile("/files/main.beresta");

        await nextTick();

        const el = codeEditor.value!;
        el.focus({preventScroll: true});
        el.setSelectionRange(0, 0);
        el.scrollTop = 0;

        updateLineCount();
        updateActiveLine();
        syncScroll();

        requestAnimationFrame(() =>
        {
            el.dispatchEvent(new Event("input"));
            updateLineCount();
            updateActiveLine();
            syncScroll();
        });
    });
    
    return {
        code, result, lineCount, activeLine, selectedWord, lineNumbers, highlightEl, minimapEl, codeEditor, syntaxEl,
        onInput, onKeyDown, onKeyUp, onClick, insertTab, onMinimapMouseDown, syncScroll, runCode
    }
}