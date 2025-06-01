# Blaxel Agent - Template Social Post Generator

[![npm version][npm-badge]][npm] [![Build Status][build-badge]][actions] [![License][license-badge]][license]

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="150"/>
</p>

A powerful AI agent template for automated social media post generation. Process URLs or themes as input to generate engaging, contextual social media content. Perfect for content creators, marketers, and developers.

## Table of Contents

- [Features](#features)
- [Quickstart](#quickstart)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [CLI](#cli)
  - [API](#api)
- [Example Output](#example-output)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate social media posts from URLs or themes
- Customizable prompt templates and output formats
- CLI and programmatic API
- Easy local development and Blaxel deployment
- Supports real-time monitoring and callbacks

## Quickstart

Install globally and generate a post from a URL:

```bash
npm install -g @blaxel-ai/template-social-post-generator
template-social-post --url https://blaxel.ai --output post.txt
```

Or use in code:

```js
import { generatePost } from '@blaxel-ai/template-social-post-generator';

(async () => {
  const post = await generatePost({
    input: { url: 'https://blaxel.ai' },
    format: 'markdown'
  });
  console.log(post);
})();
```

## Installation

### Prerequisites

- Node.js >= 18 LTS
- npm or yarn

### Local Setup

```bash
git clone https://github.com/blaxel-templates/template-social-post-generator.git
cd template-social-post-generator
npm install
```

## Configuration

Create a `.env` file in the root directory:

```dotenv
BLAXEL_API_KEY=your_blaxel_api_key
```

## Usage

### CLI

```bash
template-social-post \
  --input.url https://blaxel.ai \
  --output ./post.md \
  --format markdown
```

Options:

- `--input.url`   URL to generate post from
- `--input.theme` Theme or topic
- `--format`      Output format: `markdown` | `text`
- `--output`      File path for the generated post

### API

```ts
import { generatePost, Config } from '@blaxel-ai/template-social-post-generator';

const config: Config = {
  apiKey: process.env.BLAXEL_API_KEY,
  input: { theme: 'product launch' },
  format: 'markdown'
};

const post = await generatePost(config);
console.log(post);
```

#### Config Options

| Option       | Type                   | Description                       |
|--------------|------------------------|-----------------------------------|
| `apiKey`     | `string`               | Blaxel API key                    |
| `input.url`  | `string`               | Source URL for content extraction |
| `input.theme`| `string`               | Theme or topic                    |
| `format`     | `'markdown'`\|`'text'` | Output format                    |
| `maxTokens`  | `number`               | (Optional) Maximum tokens to use  |

## Example Output

### URL-based Post

> **Input:** `https://blaxel.ai`

```markdown
Blaxel: Redefining AI-Driven Business Automation

... (post content) ...
```

### Theme-based Post

> **Input:** `New Product Announcement`

```markdown
🚀 Excited to launch our newest product...
```

## Project Structure

```plaintext
├── src/
│   ├── agent.ts          # Agent entry point
│   ├── prompt.ts         # Prompt templates
│   ├── functions/        # Custom agent functions
│   └── webcrawl.ts       # Web crawling utilities
├── docs/                 # Sample docs and examples
├── .env.example          # Environment variables template
├── package.json
└── README.md
```

## Customization

- Edit `src/prompt.ts` to adjust prompt templates
- Add or modify functions in `src/functions/`
- Extend web crawling in `src/webcrawl.ts`

## Testing

```bash
npm test
```

Runs unit tests and checks code quality with ESLint.

## Deployment

### Deploy to Blaxel

```bash
blaxel deploy --local --data '{"inputs":"URL or theme"}'
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. Contributions, issues, and feature requests are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
