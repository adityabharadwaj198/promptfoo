# google-aistudio-gemini (Google AI Studio (Gemini) Example)

You can run this example with:

```bash
npx promptfoo@latest init --example google-aistudio-gemini
```

This example demonstrates using Google's Gemini models with promptfoo to evaluate math puzzle solving capabilities.

## Prerequisites

- promptfoo CLI installed (`npm install -g promptfoo` or `brew install promptfoo`)
- Google AI Studio API key set as `GOOGLE_API_KEY`

## Available Models

The example tests across multiple Gemini models:

- **Gemini 2.5 Pro** - Latest stable model with enhanced reasoning, coding, and multimodal understanding
- **Gemini 2.5 Flash** - Latest stable Flash model with enhanced reasoning and thinking capabilities
- **Gemini 2.5 Flash-Lite** - Most cost-efficient and fastest 2.5 model, optimized for high-volume, latency-sensitive tasks
- Gemini 2.0 Flash
- Gemini 2.0 Flash Thinking
- Gemini 1.5 Flash
- Gemini 1.5 Pro - Standard model for complex reasoning, used with both structured JSON output and function calling capabilities

## Running the Eval

1. Get a local copy of the configuration:

```sh
promptfoo init --example google-aistudio-gemini
```

2. Run the example:

```sh
promptfoo eval
```

Afterwards, you can view the results by running `promptfoo view`
