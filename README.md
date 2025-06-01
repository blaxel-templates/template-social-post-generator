# Blaxel Agent - Template Social Post Generator

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="200"/>
</p>

<div align="center">
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js ≥18](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.0-blue.svg)](https://www.typescriptlang.org/)
[![Blaxel CLI](https://img.shields.io/badge/Blaxel-CLI-blue.svg)](https://github.com/blaxel-ai/toolkit)
</div>

A powerful agent template for automated social media post generation. This template provides a product-ready foundation for creating engaging, contextual social media content by processing URLs or themes as input.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Run Locally](#run-locally)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [How it works](#how-it-works)
- [Contribution](#contribution)
- [License](#license)

## Features

- Generate engaging social media posts from URLs or themes
- Web crawling capability for URL-based content
- Customizable output format
- Easy local development and deployment
- Built-in integration with Blaxel platform

## Quick Start

```bash
# Clone the repository
git clone https://github.com/blaxel-templates/template-social-post-generator.git
cd template-social-post-generator

# Install dependencies
npm install

# Start the development server with hot reloading
bl serve --hotreload

# Run the agent locally
blaxel run my-agent --local
```

## Prerequisites

- Node.js ≥18
- Blaxel CLI: install globally
  ```bash
  curl -fsSL https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh | BINDIR=$HOME/.local/bin sh
  ```
- Blaxel login
  ```bash
  bl login YOUR-WORKSPACE
  ```

## Installation

Install project dependencies:

```bash
npm install
```

## Usage

### Run Locally

Start the server with hot reload and run the agent locally:

```bash
bl serve --hotreload
blaxel run my-agent --local
```

## Deployment

### From Local Repository

```bash
blaxel deploy
```

### From GitHub

1. Fork this repository
2. Visit [app.blaxel.ai](https://app.blaxel.ai)
3. Create a new agent and select "Import from GitHub"
4. Connect and select your forked repository

## Project Structure

```bash
src/
  agent.ts          # Agent entry point
  prompt.txt        # Main prompt template
  functions/        # Custom function definitions
  webcrawl.ts       # Web crawling functionality
documents/         # Sample documents for knowledge base
.blaxel/           # Blaxel configuration files
index.ts           # Main application entry point
tsconfig.json      # TypeScript configuration
package.json       # Project dependencies and scripts
```

## Customization

To customize the agent for your needs, focus on:

- Modifying `src/prompt.txt` to adjust the post generation style
- Extending `src/functions/` with additional capabilities
- Updating `src/agent.ts` to add new features or modify the processing flow

## How it works

The agent processes inputs through a sophisticated pipeline to generate engaging social media posts:

1. **Input Processing**
   - For URLs: Uses the `webcrawl` function to extract content directly from web pages
   - For themes: Leverages `blaxel-search` to gather relevant, up-to-date information
2. **Content Generation**
   - Analyzes gathered content using advanced language models
   - Structures posts following best practices for social media engagement
3. **Custom Functions**
   - `webcrawl`: Extracts text content, metadata, and key information from web pages
   - `blaxel-search`: Performs semantic web searches to gather contextual information
4. **Execution Flow**
   - **Input Processing** -> **Post Generation** -> **Output** formatted for publishing

## Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
