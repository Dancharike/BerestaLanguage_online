import type {InjectionKey, Ref} from "vue";

export interface EditorApi
{
    code: Ref<string>;
    result: Ref<any>;
    lineCount: Ref<number>;
    activeLine: Ref<number>;
    
    selectedWord: Ref<string>;
    
    codeEditor: Ref<HTMLElement | null>;
    minimapEl: Ref<HTMLElement | null>;
    lineNumbers: Ref<HTMLElement | null>;
    highlightEl: Ref<HTMLElement | null>;
    syntaxEl: Ref<HTMLElement | null>;
    
    onInput: () => void;
    onKeyDown: () => void;
    onKeyUp: () => void;
    onClick: () => void;
    insertTab: () => void;
    onMinimapMouseDown: (e: MouseEvent) => void;
    syncScroll: () => void;
    runCode: () => Promise<void>;
}

export const EditorKey: InjectionKey<EditorApi> = Symbol("BerestaEditor");
