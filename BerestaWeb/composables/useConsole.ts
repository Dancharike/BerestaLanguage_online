import {ref, onMounted, onBeforeUnmount} from "vue";

export function useConsole()
{
    const show_console = ref(true);
    const console_height = ref(0);
    const editor_height = ref(0);
    const HEADER_HEIGHT = 48;

    function compute_sizes()
    {
        const H = typeof window !== "undefined" ? window.innerHeight : 0;
        
        if(show_console.value)
        {
            console_height.value = Math.max(100, Math.round(H * 0.25));
            editor_height.value = Math.max(0, H - console_height.value - HEADER_HEIGHT);
        }
        else
        {
            console_height.value = 0;
            editor_height.value = Math.max(0, H - HEADER_HEIGHT);
        }
    }

    function toggle_console()
    {
        show_console.value = !show_console.value;
        compute_sizes();
    }

    onMounted(() =>
    {
        compute_sizes();
        window.addEventListener("resize", compute_sizes);
    });

    onBeforeUnmount(() =>
    {
        if(typeof window !== "undefined") {window.removeEventListener("resize", compute_sizes);}
    });

    return {
        show_console,
        console_height,
        editor_height,
        toggle_console,
    };
}
