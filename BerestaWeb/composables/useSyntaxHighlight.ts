import {ref, watch, onMounted} from "vue";
import type {Ref} from "vue";

export function useSyntaxHighlight(code: Ref<string>, selectedWord: Ref<string>)
{
    const highlighted = ref("");

    const KEYWORDS = new Set([
        "let","enum","if","else","while","repeat","for","foreach","in",
        "function","return","public","private","continue","break",
        "switch","case","default","macros","true","false","and","or","not"
    ]);

    const patterns = [
        {regex: /\b\d+(\.\d+)?\b/g, cls: "number"},
        {regex: /\b(let|enum|if|else|while|repeat|for|foreach|in|function|return|public|private|continue|break|switch|case|default|macros|true|false|and|or|not)\b/g, cls: "keyword"},
        {regex: /\b(console_print|random|random_range|int_random|int_random_range|abs|pow|sqr|sqrt|frac|mean|median|power|ln|log2|log10|logn|clamp|lerp|choose_from|sin|cos|tan|arcsin|arccos|arctan|arctan2|dsin|dcos|dtan|darcsin|darccos|darctan|darctan2|point_direction|point_distance|lengthdir_x|lengthdir_y|matrix_set|matrix_get|matrix_build|matrix_identity|matrix_multiply|matrix_inverse|matrix_transform_vertex|array_length|array_set|array_push|array_pop|array_insert|array_delete|array_index_of|array_contains|array_concat|array_slice|array_reverse|array_join|array_resize|array_fill|array_sort|array_shuffle|array_last|make_arr|calculate|sum|sum_positive)\b/g, cls: "builtin"},
        {regex: /\b[A-Z][A-Za-z_]*\.[A-Za-z_]+\b/g, cls: "enum"},
    ];

    function escapeHtml(text: string)
    {
        return text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    }

    function safeWordHighlight(html: string, word: string)
    {
        if(!word || KEYWORDS.has(word)) {return html;}
        
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const rx = new RegExp(`\\b${escaped}\\b`, "g");
        
        const parts = html.split(/(<[^>]+>)/g);
        for(let i = 0; i < parts.length; i += 1)
        {
            if(parts[i].startsWith("<")) {continue;}
            parts[i] = parts[i].replace(rx, m => `<span class="token-highlight">${m}</span>`);
        }
        return parts.join("");
    }
    
    function highlight(text: string): string
    {
        let s = escapeHtml(text);
        const strings: string[] = [];
        const comments: string[] = [];
        s = s.replace(/\/\/[^\n]*|\/\*[\s\S]*?\*\//g, m =>
        {
            const i = comments.push(m) - 1;
            return `__COMMENT_${i}__`;
        });
        s = s.replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, m =>
        {
            const i = strings.push(m) - 1;
            return `__STRING_${i}__`;
        });
        
        for(const {regex, cls} of patterns)
        {
            s = s.replace(regex, m => `<span class="token-${cls}">${m}</span>`);
        }
        
        s = s.replace(/__STRING_(\d+)__/g, (_, i) => `<span class="token-string">${strings[+i]}</span>`);
        s = s.replace(/__COMMENT_(\d+)__/g, (_, i) => `<span class="token-comment">${comments[+i]}</span>`);
        
        s = safeWordHighlight(s, selectedWord.value?.trim() || "");
        
        return s;
    }

    onMounted(() =>
    {
        watch([code, selectedWord], ([new_code]) =>
        {
            highlighted.value = highlight(new_code);
        }, {immediate: true}); 
    });

    return {highlighted};
}
