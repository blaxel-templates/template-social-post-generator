# Blaxel Social Post Generator Agent

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="200"/>
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 18+](https://img.shields.io/badge/node-18+-green.svg)](https://nodejs.org/en/download)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![AI SDK](https://img.shields.io/badge/AI_SDK-powered-brightgreen.svg)](https://sdk.vercel.ai/)
[![Blaxel](https://img.shields.io/badge/Blaxel-platform-blue.svg)](https://blaxel.ai/)

</div>

A powerful AI agent that automatically generates engaging social media posts from URLs or themes. This template leverages web crawling capabilities, intelligent content analysis, and semantic search to create professional social media content. Built with TypeScript and the Vercel AI SDK for robust performance and seamless integration with the Blaxel platform.

## 📑 Table of Contents

- [✨ Features](#features)
- [🚀 Quick Start](#quick-start)
- [📋 Prerequisites](#prerequisites)
- [💻 Installation](#installation)
- [🔧 Usage](#usage)
  - [Running Locally](#running-locally)
  - [Testing](#testing)
  - [Deployment](#deployment)
- [📁 Project Structure](#project-structure)
- [❓ Troubleshooting](#troubleshooting)
- [👥 Contributing](#contributing)
- [🆘 Support](#support)
- [📄 License](#license)

## ✨ Features

- Intelligent social media post generation from URLs or themes
- Web crawling capability for extracting content from any website
- Semantic search integration for theme-based content discovery
- Professional social media content formatting with optimal character limits
- Multi-step content processing with tool integration
- Streaming responses for real-time interaction
- TypeScript implementation with robust type safety
- Custom web crawling function with markdown conversion
- Easy deployment and integration with Blaxel platform

## 🚀 Quick Start

For those who want to get up and running quickly:

```bash
# Clone the repository
git clone https://github.com/blaxel-ai/template-social-post-generator.git

# Navigate to the project directory
cd template-social-post-generator

# Install dependencies
npm install

# Start the development server
bl serve --hotreload

# In another terminal, test the agent
bl chat --local social-post-generator
```

## 📋 Prerequisites

- **Node.js:** 18.0 or later
- **[NPM](https://www.npmjs.com/):** Node package manager
- **[Blaxel CLI](https://docs.blaxel.ai/Get-started):** Ensure you have the Blaxel CLI installed. If not, install it globally:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh | BINDIR=/usr/local/bin sudo -E sh
  ```
- **Blaxel login:** Login to Blaxel platform
  ```bash
  bl login YOUR-WORKSPACE
  ```

## 💻 Installation

**Clone the repository and install dependencies:**

```bash
git clone https://github.com/blaxel-ai/template-social-post-generator.git
cd template-social-post-generator
npm install
```

**Verify installation:**

```bash
npm run build
```

This command should complete without errors, confirming that TypeScript compilation and all dependencies are properly configured.

## 🔧 Usage

### Running Locally

Start the development server with hot reloading:

```bash
bl serve --hotreload
```

For production build and run:

```bash
bl serve
```

_Note:_ The development server automatically restarts when you make changes to the source code.

### Testing

You can test your social post generator agent locally:

```bash
# Using the Blaxel CLI chat interface
bl chat --local social-post-generator
```

Example queries you can test:

**URL-based Post Generation:**
```
https://blaxel.ai
```

**Theme-based Post Generation:**
```
MCP Server development
```

```
Latest AI trends in 2024
```

```
TypeScript best practices
```

You can also run it directly with specific input:

```bash
bl run agent social-post-generator --local --data '{"input": "https://example.com"}'
```

### Deployment

When you are ready to deploy your agent:

```bash
bl deploy
```

This command uses your code and the configuration in `blaxel.toml` to deploy your social post generator as an agent on the Blaxel platform.

## 📁 Project Structure

- **src/index.ts** - Main application entry point and Fastify server setup
- **src/agent.ts** - Core agent implementation with AI SDK integration
- **src/prompt.md** - System prompt defining post generation guidelines and constraints
- **src/functions/webcrawl.ts** - Custom web crawling function with markdown conversion
- **blaxel.toml** - Blaxel deployment configuration with search integration
- **package.json** - NPM package configuration with scripts and dependencies
- **tsconfig.json** - TypeScript compiler configuration
- **LICENSE** - MIT license file

## ❓ Troubleshooting

### Common Issues

1. **Blaxel Platform Issues**:
   - Ensure you're logged in to your workspace: `bl login MY-WORKSPACE`
   - Verify models are available: `bl get models`
   - Check that functions exist: `bl get functions`

2. **Web Crawling Issues**:
   - Verify the URL is accessible and not behind authentication
   - Check for rate limiting or anti-bot protections on target websites
   - Ensure the website returns valid HTML content
   - Check network connectivity and firewall restrictions

3. **Content Generation Issues**:
   - Verify the Blaxel search function is working: test with simple queries
   - Check that the system prompt is being loaded correctly
   - Ensure character limits are being respected (400 characters max)
   - Verify that the AI model is responding appropriately

4. **TypeScript and Build Issues**:
   - Make sure you have Node.js 18+
   - Try `npm install` to reinstall dependencies
   - Check for TypeScript compilation errors with `npm run build`
   - Verify all type definitions are properly installed

5. **Dependency Issues**:
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
   - Check for version conflicts in package.json
   - Ensure all peer dependencies are satisfied
   - Try updating dependencies: `npm update`

For more help, please [submit an issue](https://github.com/blaxel-templates/template-social-post-generator/issues) on GitHub.

## 👥 Contributing

Contributions are welcome! Here's how you can contribute:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Submit** a Pull Request

Please make sure to update tests as appropriate and follow the TypeScript code style of the project.

## 🆘 Support

If you need help with this template:

- [Submit an issue](https://github.com/blaxel-templates/template-social-post-generator/issues) for bug reports or feature requests
- Visit the [Blaxel Documentation](https://docs.blaxel.ai) for platform guidance
- Check the [Vercel AI SDK Documentation](https://sdk.vercel.ai/) for framework-specific help
- Review the [TypeScript Documentation](https://www.typescriptlang.org/docs/) for language guidance
- Join our [Discord Community](https://discord.gg/G3NqzUPcHP) for real-time assistance

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.