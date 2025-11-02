import {ref, watch} from "vue"
import type {Ref} from "vue"

export function useSyntaxHighlight(code: Ref<string>)
{
    const highlighted = ref("")

    const patterns = [
        {regex: /\b\d+(\.\d+)?\b/g, cls: "number"},
        {regex: /\b(let|enum|if|else|while|repeat|for|foreach|in|function|return|public|private|continue|break|switch|case|default|macros|true|false|and|or|not)\b/g, cls: "keyword"},
        {regex: /\b(console_print|random|random_range|int_random|int_random_range|abs|pow|sqr|sqrt|frac|mean|median|power|ln|log2|log10|logn|clamp|lerp|choose_from|sin|cos|tan|arcsin|arccos|arctan|arctan2|dsin|dcos|dtan|darcsin|darccos|darctan|darctan2|point_direction|point_distance|lengthdir_x|lengthdir_y|matrix_set|matrix_get|matrix_build|matrix_identity|matrix_multiply|matrix_inverse|matrix_transform_vertex|array_length|array_set|array_push|array_pop|array_insert|array_delete|array_index_of|array_contains|array_concat|array_slice|array_reverse|array_join|array_resize|array_fill|array_sort|array_shuffle|array_last|make_arr|calculate|sum|sum_positive)\b/g, cls: "builtin"},
        {regex: /\b[A-Z][A-Za-z_]*\.[A-Za-z_]+\b/g, cls: "enum"}
    ]

    function highlight(text: string): string
    {
        let escaped = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")

        const strings: string[] = []
        const comments: string[] = []
        
        escaped = escaped.replace(/\/\/[^\n]*|\/\*[\s\S]*?\*\//g, match => {
            const idx = comments.push(match) - 1
            return `__COMMENT_${idx}__`
        })
        
        escaped = escaped.replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, match => {
            const idx = strings.push(match) - 1
            return `__STRING_${idx}__`
        })
        
        for(const {regex, cls} of patterns)
        {
            escaped = escaped.replace(regex, match => `<span class="token-${cls}">${match}</span>`)
        }
        
        escaped = escaped.replace(/__STRING_(\d+)__/g, (_, i) =>
            `<span class="token-string">${strings[+i]}</span>`
        )
        
        escaped = escaped.replace(/__COMMENT_(\d+)__/g, (_, i) =>
            `<span class="token-comment">${comments[+i]}</span>`
        )

        return escaped
    }

    watch(code, new_code =>
    {
        highlighted.value = highlight(new_code)
    }, {immediate: true})

    return {highlighted}
}
