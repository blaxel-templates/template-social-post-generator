# Blaxel Social Post Generator

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="200"/>
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.0-blue.svg)](https://www.typescriptlang.org/)
[![Blaxel CLI](https://img.shields.io/badge/Blaxel-CLI-blue.svg)](https://github.com/blaxel-ai/toolkit)

</div>

A powerful agent template for automated social media post generation. This template provides a product-ready foundation for creating engaging, contextual social media content by processing URLs or themes as input.

## 📋 Table of Contents

- [⚙️ Features](#️-features)
- [🚀 Quick Start](#-quick-start)
- [🔌 Prerequisites](#-prerequisites)
- [🛠️ Installation](#️-installation)
- [🔧 Usage](#-usage)
  - [Run Locally](#run-locally)
- [🚢 Deployment](#-deployment)
- [📁 Project Structure](#-project-structure)
- [🎨 Customization](#-customization)
- [🧠 How it Works](#-how-it-works)
- [📝 Examples](#-examples)
- [⚠️ Troubleshooting](#️-troubleshooting)
- [🤝 Contributing](#-contributing)
- [🛟 Support](#-support)
- [📄 License](#-license)

## ⚙️ Features

- Generate engaging social media posts from URLs or themes
- Web crawling capability for URL-based content
- Customizable output format
- Easy local development and deployment
- Built-in integration with Blaxel platform

## 🚀 Quick Start

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

## 🔌 Prerequisites

- **Node.js:** v18 or later
- **Blaxel CLI:** Install globally:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh | BINDIR=$HOME/.local/bin sh
  ```
- **Blaxel login:** Login to Blaxel platform
  ```bash
  bl login YOUR-WORKSPACE
  ```

## 🛠️ Installation

Install project dependencies:

```bash
npm install
```

## 🔧 Usage

### Run Locally

Start the server with hot reload and run the agent locally:

```bash
bl serve --hotreload
blaxel run my-agent --local
```

Example prompts to try:

```
Create a LinkedIn post about AI in healthcare
Generate a Twitter thread about climate change based on this URL: https://climate.nasa.gov/
Write an Instagram caption for a new product launch in the tech industry
```

## 🚢 Deployment

### From Local Repository

```bash
blaxel deploy
```

### From GitHub

1. Fork this repository
2. Visit [app.blaxel.ai](https://app.blaxel.ai)
3. Create a new agent and select "Import from GitHub"
4. Connect and select your forked repository

## 📁 Project Structure

```bash
src/
  agent.ts           # Agent entry point
  prompt.txt         # Main prompt template
  functions/         # Custom function definitions
  webcrawl.ts        # Web crawling functionality
documents/           # Sample documents for knowledge base
.blaxel/             # Blaxel configuration files
index.ts             # Main application entry point
tsconfig.json        # TypeScript configuration
package.json         # Project dependencies and scripts
```

## 🎨 Customization

To customize the agent for your needs, focus on:

- Modifying `src/prompt.txt` to adjust the post generation style
- Extending `src/functions/` with additional capabilities
- Updating `src/agent.ts` to add new features or modify the processing flow

## 🧠 How it Works

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

## 📝 Examples

### Example 1: LinkedIn Post from a Theme

```
User: Create a LinkedIn post about AI in healthcare

Agent:

🏥 #AIinHealthcare: Transforming Patient Care

Artificial intelligence is revolutionizing healthcare in ways we couldn't imagine just a decade ago. From predictive analytics that identify at-risk patients before symptoms appear to AI-assisted surgeries with precision beyond human capability, the impact is profound.

Three key developments I'm particularly excited about:

1️⃣ Diagnostic accuracy: AI systems now detect certain cancers from medical imaging with 99% accuracy, often spotting patterns invisible to even experienced radiologists.

2️⃣ Personalized treatment: Machine learning algorithms analyze thousands of successful treatment protocols to recommend personalized approaches based on a patient's unique genetic makeup.

3️⃣ Administrative efficiency: AI is reducing paperwork by 70% in leading hospitals, giving medical professionals more time with patients.

The future isn't about replacing healthcare workers—it's about augmenting their capabilities and letting them focus on the human elements of care that machines can never replicate.

What AI healthcare applications are you most excited about? Share your thoughts below!

#HealthTech #FutureOfMedicine #ArtificialIntelligence
```

### Example 2: Twitter Thread from a URL

```
User: Generate a Twitter thread about climate change based on this URL: https://climate.nasa.gov/

Agent:

🧵 THREAD: NASA's Climate Research - What You Need to Know

1/ Just reviewed the latest data from @NASA's climate research. The evidence is overwhelming: Earth's climate is changing at unprecedented rates due to human activity. Global temperature has risen 1.1°C since pre-industrial times.

2/ NASA's satellites show alarming trends: Arctic sea ice is declining at 13.1% per decade. Greenland and Antarctica lost 427 billion tons of ice annually between 2002-2020. This isn't normal variability—it's human-caused change.

3/ Sea levels have risen 8-9 inches since 1880, with the rate accelerating to 3.7mm/year. NASA projections suggest another 1-4 feet by 2100, threatening coastal communities worldwide.

4/ Carbon dioxide levels are at 417ppm—higher than any point in the last 800,000 years. The primary source? Burning fossil fuels. This CO2 traps heat, disrupting Earth's energy balance.

5/ But NASA's research also shows hope: Renewable energy costs have plummeted 70-90% in the last decade. Electric vehicle adoption is accelerating. We have the technology to address this crisis.

6/ NASA scientists are clear: We need to reach net-zero emissions by 2050 to avoid the worst impacts. Every fraction of a degree matters for future generations.

7/ Follow @NASAClimate for the latest research and data. Our actions today will determine Earth's climate for centuries to come. The science is clear—now we need action. 

(End thread)
```

## ⚠️ Troubleshooting

### Common Issues

1. **Authentication Problems**:
   - Ensure you're properly logged in with `bl login YOUR-WORKSPACE`
   - Check your authentication tokens in `~/.blaxel/config`

2. **Web Crawling Issues**:
   - Some websites block crawlers or require specific headers
   - Try using `--disable-headless` flag for websites with JavaScript rendering

3. **Deployment Errors**:
   - Verify your `.blaxel` configuration files are correctly formatted
   - Ensure all dependencies are properly listed in package.json

### Getting Help

If you encounter issues not covered here, please:
- Check the [Blaxel documentation](https://docs.blaxel.ai)
- Open an issue on GitHub with detailed reproduction steps
- Contact support at support@blaxel.ai

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please ensure your code follows the project's style guidelines and includes appropriate tests.

## 🛟 Support

If you need help with this template:

- Visit [Blaxel Documentation](https://docs.blaxel.ai)
- Join our [Discord community](https://discord.gg/blaxel)
- Email us at support@blaxel.ai

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.