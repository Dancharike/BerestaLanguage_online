import {onBeforeUnmount} from "vue"

export function useMinimap(
    deps: {
        codeEditor: Ref<HTMLTextAreaElement | null>,
        minimapEl: Ref<HTMLElement | null>,
        syncScroll: () => void;
    }
) {
    let is_dragging = false;

    function onMouseDown(e: MouseEvent)
    {
        if(!deps.minimapEl.value || !deps.codeEditor.value) {return;}
        
        is_dragging = true;
        
        scrollTo(e);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(e: MouseEvent) {if(is_dragging) {scrollTo(e);}}

    function onMouseUp()
    {
        is_dragging = false;
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    }

    function scrollTo(e: MouseEvent)
    {
        const minimap = deps.minimapEl.value!, editor = deps.codeEditor.value!;
        const rect = minimap.getBoundingClientRect();
        const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
        const ratio = y / rect.height;
        const target = (editor.scrollHeight - editor.clientHeight) * ratio;
        editor.scrollTop = target;
        deps.syncScroll();
    }

    onBeforeUnmount(() =>
    {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    });

    return {onMouseDown}
}
