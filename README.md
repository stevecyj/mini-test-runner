# mini-test-runner

## error message

### glob

* `pnpm i glob`

```
import glob from "glob";
       ^^^^
SyntaxError: The requested module 'glob' does not provide an export named 'default'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:190:5)
 ```

改成 `import { glob } from "glob";`
