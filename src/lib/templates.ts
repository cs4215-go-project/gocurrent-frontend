export const templates: any = {
    'Calculator': 'package main\n\nfunc main() {\n\tprintln(42 + 2 * 56)\n\tprintln(42 > 56)\n}\n',
    'If-Else': 'package main\n\nfunc main() {\n\tif 42 > 56 {\n\t\tprintln(42)\n\t} else {\n\t\tprintln(56)\n\t}\n}\n',
    'Loops': 'package main\n\nfunc main() {\n\tfor i := 0; i < 5; i++ {\n\t\tprintln(i)\n\t}\n}\n',
    'Functions': 'package main\n\nfunc add(a int, b int) int {\n\treturn a + b\n}\n\nfunc main() {\n\tprintln(add(42, 56))\n}\n',
};