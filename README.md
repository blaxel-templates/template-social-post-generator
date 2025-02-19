# Blaxel Agent - Template Social Post Generator

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel"/>
</p>

A powerful agent template for automated social media post generation.  
This template provides a production-ready foundation for creating engaging, contextual social media content by processing URLs or themes as input.  
Perfect for content creators, marketers, and developers looking to automate their social media workflows.

## Table of Contents
- [Features](#features)
- [Example Results](#example-results)
  - [URL-based Post Generation](#url-based-post-generation)
  - [Theme-based Post Generation](#theme-based-post-generation)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
  - [Deployment to Blaxel](#deployment-to-blaxel)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [How it works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Features
- Generate engaging social media posts from URLs or themes
- Web crawling capability for URL-based content
- Customizable output format
- Easy local development and deployment
- Built-in integration with Blaxel platform

## Example Results

### URL-based Post Generation
**Input:** https://blaxel.ai

**Output:** 
🚀 Ready to elevate your AI game? Blaxel is your all-in-one platform for building and deploying generative AI agents! With tools for Python and TypeScript, you can iterate, evaluate, and deploy seamlessly. Enjoy real-time monitoring, secure endpoints, and a user-friendly console. Start for free and explore plans tailored for developers and teams. Don't miss out—[get started today](https://app.blaxel.ai)!

### Theme-based Post Generation
**Input:** MCP Server

**Output:**
🚀 Ready to dive into the world of MCP Servers? The Model Context Protocol (MCP) allows developers to create servers that connect seamlessly with AI tools like Claude for Desktop. In a recent tutorial, you can learn to build a weather server that fetches alerts and forecasts using Python. This is a fantastic way to enhance your applications with real-time data! Check out the full guide and start building today! [Learn more here](https://modelcontextprotocol.io/quickstart/server).

## Getting Started

### Prerequisites
- **Node.js:** v18 or later.
- **Blaxel CLI:** Ensure you have the Blaxel CLI installed. If not, install it globally:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/beamlit/toolkit/main/install.sh | BINDIR=$HOME/.local/bin sh
  ```
- **Blaxel login:** Login to Blaxel platform
  ```bash
    bl login YOUR-WORKSPACE
  ```

### Installation

- **Clone the repository and install the dependencies**:

  ```bash
  git clone https://github.com/beamlit/template-social-post-generator.git
  cd template-social-post-generator
  npm install
  ```

2. Install dependencies and start the server:
```bash
npm install
```


## Running the Server Locally

Start the development server with hot reloading using the Beamlit CLI command:

```bash
bl serve --hotrealod
```
_Note:_ This command starts the server and enables hot reload so that changes to the source code are automatically reflected.

```bash
blaxel run agent my-agent --local --data '{"inputs":"MCP Server"}'
OR
blaxel chat my-agent --local
```

### Deploying to Blaxel

#### Option 1: From Local Repository
```bash
blaxel deploy
```

#### Option 2: From GitHub
1. Fork this repository
2. Visit [app.blaxel.ai](https://app.blaxel.ai)
3. Create a new agent and select "Import from GitHub"
4. Connect and select your forked repository

## Project Structure

Key files and directories:
```
src/
├── agent.ts          # Agent entry point
├── prompt.txt        # Main prompt template
└── functions/        # Custom function definitions
    └── webcrawl.ts   # Web crawling functionality
documents/            # Sample documents for knowledge base
.blaxel/              # Blaxel configuration files
index.ts              # Main application entry point
tsconfig.json         # TypeScript configuration
package.json          # Project dependencies and scripts
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
   - Includes relevant emojis and hashtags when appropriate

3. **Custom Functions**
   - `webcrawl`: Extracts text content, metadata, and key information from web pages
   - `blaxel-search`: Performs semantic web searches to gather contextual information
   - Both functions can be monitored through the Blaxel workspace logs

4. **Execution Flow**
   ```
   Input → Content Gathering → Analysis → Post Generation → Output
   ```

The agent intelligently switches between URL processing and theme-based content generation based on the input type, ensuring optimal results for each use case.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.