export const berestaSyntax = {
    keywords: [
        "let", "enum", "true", "false",
        "if", "else", "while", "repeat", "for", "foreach", "in",
        "public", "private", "function", "return",
        "continue", "break", "switch", "case", "default",
        "macros"
    ],
    
    operators: [
        "\\+", "-", "\\*", "/", "%", "=", "==", "!", "!=",
        "<", ">", "<=", ">=", "and", "or", "!", "not"
    ],
    
    punctuation: [
        "\\(", "\\)", "\\{", "\\}", "\\[", "\\]",
        "\\.", ",", ";", ":", "::"
    ],
    
    builtins: [
        "console_print",
        
        "random", "random_range", "int_random", "int_random_range",
        
        "abs", "pow", "sqr", "sqrt", "frac", "mean", "median", "power",
        "ln", "log2", "log10", "logn", "clamp", "lerp", "choose_from",
        
        "sin", "cos", "tan", "arcsin", "arccos", "arctan", "arctan2",
        "dsin", "dcos", "dtan", "darcsin", "darccos", "darctan", "darctan2",
        
        "point_direction", "point_distance", "lengthdir_x", "lengthdir_y",
        
        "matrix_set", "matrix_get", "matrix_build", "matrix_identity",
        "matrix_multiply", "matrix_inverse", "matrix_transform_vertex",
        
        "array_length", "array_set", "array_push", "array_pop", "array_insert",
        "array_delete", "array_index_of", "array_contains", "array_concat",
        "array_slice", "array_reverse", "array_join", "array_resize",
        "array_fill", "array_sort", "array_shuffle", "array_last",
        
        "make_arr", "calculate", "sum", "sum_positive"
    ],
    
    comments: /\/\/[^\n]*|\/\*[\s\S]*?\*\//g,
    
    numbers: /\b\d+(\.\d+)?\b/g,
    
    strings: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g
};
