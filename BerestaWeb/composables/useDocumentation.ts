import {ref, onMounted, nextTick} from "vue";
import {marked} from "marked";

export function useDocumentation()
{
    const docs = ref<any>(null);
    const html = ref("<p>Select an article from the sidebar.</p>");
    const lang = ref(localStorage.getItem("docs_lang") || "en");
    const current_path = ref<string | null>(localStorage.getItem("docs_path"));
    const scroll_positions = new Map<string, number>();
    const contentEl = ref<HTMLElement | null>(null);

    async function loadIndex()
    {
        try
        {
            const res = await fetch(`/documentation/${lang.value}/index.json`);
            docs.value = await res.json();
            localStorage.setItem("docs_lang", lang.value);
            
            if(current_path.value) {await loadFile(current_path.value, false);}
            else                   {html.value = "<p>Select an article from the sidebar.</p>";}
        }
        catch(err)
        {
            html.value = `<p style='color:red'>Failed to load documentation index.</p>`;
        }
    }

    async function loadFile(path: string, save_scroll = true)
    {
        try
        {
            if(save_scroll && current_path.value && contentEl.value)
            {
                const pos = contentEl.value.scrollTop;
                scroll_positions.set(current_path.value, pos);
                sessionStorage.setItem("docs_scroll_" + current_path.value, pos.toString());
            }
            
            current_path.value = path;
            localStorage.setItem("docs_path", path);
            
            const res = await fetch("/" + path);
            const text = await res.text();
            html.value = marked(text);
            
            await nextTick();
            
            if(contentEl.value)
            {
                contentEl.value.scrollTop = 0;
                const saved = scroll_positions.get(path) ?? parseFloat(sessionStorage.getItem("docs_scroll_" + path) || "0");
                
                if(!isNaN(saved) && saved > 0) {contentEl.value.scrollTo({top: saved});}
            }
        }
        catch(err) {html.value = `<p style='color:red'>Failed to load file: ${path}</p>`;}
    }
    
    function attachContentElement(el: HTMLElement)
    {
        contentEl.value = el;
        
        el.addEventListener("scroll", () =>
        {
            if(current_path.value)
            {
                scroll_positions.set(current_path.value, el.scrollTop);
                sessionStorage.setItem("docs_scroll_" + current_path.value, el.scrollTop.toString());
            }
        });
    }
    
    return {docs, html, lang, current_path, loadIndex, loadFile, attachContentElement}
}