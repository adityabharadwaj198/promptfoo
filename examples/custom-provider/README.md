# custom-provider (Custom Provider)

You can run this example with:

```bash
npx promptfoo@latest init --example custom-provider
```

This example uses a custom API provider in `customProvider.js`. It also uses CSV test cases.

Run:

```
promptfoo eval
```

Full command-line equivalent:

```
promptfoo eval --prompts prompts.txt --tests vars.csv --providers openai:chat --output output.json --providers customProvider.js
```
