# Exercise XSD

| Tag | Children | Attributes | Notes |
| --- | --- | --- | --- |
| `a` |  | `href` |  |
| `algorithm` |  |  | DEPRECATED |
| `alt` | `plot, p, pre, b, ul, li, em, strong, h1, h2, h3, i, hr, br, a, table, figure, hidden, ignore, asset, qmath, right, solution, code, div, span, snippet, asciimath` | `class, lang, method, hashkey` |  |
| `answer` | `hide, parsed, text` |  |  |
| `args` |  |  |  |
| `asciimath` |  |  |  |
| `asset` |  | `name` |  |
| `b` | `p` | `class` |  |
| `blacklist` | `token` |  |  |
| `br` |  |  |  |
| `button` |  | `onclick, style` |  |
| `choice` | `alt, figure, text` | `correct, key, order` |  |
| `code` |  |  |  |
| `comment` | `alt` | `hashkey` |  |
| `config` | `func` |  |  |
| `data` | `func` |  |  |
| `difficulty` |  |  |  |
| `div` |  | `id` |  |
| `em` | `p, a` | `class` |  |
| `equality` |  |  |  |
| `exercise` | `exercisename, global, text, question, studentasset, macros, solution, figure, right, ignore, hidden` | `updated, by, exercise_key` |  |
| `exercisename` | `alt` | `hashkey` |  |
| `expression` |  | `label` |  |
| `figure` |  |  |  |
| `func` | `token, args, value, tex` |  |  |
| `funcs` |  |  |  |
| `functions` | `func` |  |  |
| `global` | `blacklist, vars, ops, funcs, oneforms, op, var, hint, func` | `type` |  |
| `h1` |  |  |  |
| `h2` |  |  |  |
| `h3` |  |  |  |
| `hidden` | `any` |  |  |
| `hide` | `answer, hint, solution, text` |  |  |
| `hint` | `hide, hint, image, text, comment, regex` | `label, lang` |  |
| `hr` |  |  |  |
| `html` | `plot, p, pre, b, ul, li, em, strong, h1, h2, h3, i, hr, br, a, table` |  |  |
| `i` |  |  |  |
| `if-not-so` |  |  |  |
| `if-so` |  |  |  |
| `ignore` | `any` |  |  |
| `image` |  | `type, width` |  |
| `import` |  |  |  |
| `instructions` |  |  |  |
| `iscorrect` |  |  |  |
| `isfalse` | `if-so, if-not-so` |  |  |
| `isincorrect` |  |  |  |
| `istrue` | `if-so, if-not-so` | `sufficient` |  |
| `layout` | `func` |  |  |
| `li` | `b, p, button, br, em` |  |  |
| `link` |  | `rel, href` |  |
| `local` | `blacklist, var` |  |  |
| `log` | `logitem` |  |  |
| `logitem` |  | `date` |  |
| `macros` |  |  |  |
| `name` |  |  |  |
| `name7` |  |  |  |
| `notes` |  |  |  |
| `oneforms` |  |  |  |
| `op` |  |  |  |
| `ops` |  |  |  |
| `osolution` | `image` |  |  |
| `p` | `b, em, br, figure, i, p, ul` |  |  |
| `parsed` |  |  |  |
| `plot` | `data, layout, config, vars` |  |  |
| `pre` |  |  |  |
| `qmath` |  |  |  |
| `querypath` |  |  |  |
| `question` | `blacklist, ops, oneforms, funcs, vars, hint, parsed, text, source, var, func, choice, equality, expression, istrue, isfalse, iscorrect, isincorrect, rate, querypath, resources, instructions, wl, import, variables, local, functions, macros, hidden, ignore` | `exposeglobals, points, key, precision, validate, silent, hidden, showerrors, type, mode, function, file, answerbox` |  |
| `rate` |  |  |  |
| `regex` |  | `present` |  |
| `resources` |  |  |  |
| `right` | `plot, p, pre, b, ul, li, em, strong, h1, h2, h3, i, hr, br, a, table, figure` |  |  |
| `script` |  | `src, type, module, nomodule, async, defer, crossorigin, integrity, referrerpolicy` |  |
| `snippet` | `plot, p, pre, b, ul, li, em, strong, h1, h2, h3, i, hr, br, a, table, span, button, div, text, script, style, link` | `id` |  |
| `solution` | `plot, p, pre, b, ul, li, em, strong, h1, h2, h3, i, hr, br, a, table, figure, hint, image, qmath, solution, text, asset` | `label` |  |
| `solutionsheet` |  |  |  |
| `source` |  |  |  |
| `span` |  |  |  |
| `strong` |  |  |  |
| `studentasset` |  |  |  |
| `style` |  |  |  |
| `table` | `tr, thead, tbody` | `class` |  |
| `tbody` | `tr` |  |  |
| `td` | `b, qmath, em` |  |  |
| `tex` |  |  |  |
| `text` | `plot, p, pre, b, ul, li, em, strong, h1, h2, h3, i, hr, br, a, table, alt, figure, hidden, ignore, asset, qmath, right, solution, code, div, span, snippet, asciimath` | `class, hidden, lang, method, hashkey` |  |
| `th` |  |  |  |
| `thead` | `tr` |  |  |
| `thecorrectanswer` |  | `id, lang, question, questionkey` |  |
| `token` |  |  |  |
| `tr` | `td, th` |  |  |
| `ul` | `figure, p, li` |  |  |
| `value` |  |  |  |
| `var` | `token, tex, value` |  |  |
| `variables` | `blacklist, var` |  |  |
| `vars` | `func` |  |  |
| `wl` |  |  |  |

