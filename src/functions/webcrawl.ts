import { logger, wrapFunction } from "@blaxel/sdk";
import axios from "axios";
//@ts-ignore
import TurndownService from "turndown";

/*
  This tool crawls web pages and converts their content to markdown format.

  Features:
  - Fetches HTML content from the provided URL
  - Removes style and script tags for cleaner output
  - Converts HTML to markdown using TurndownService
  - Truncates output to 10,000 characters
  - Handles errors gracefully with informative messages

  Note: This tool is intended for basic web scraping needs and may not work
  with JavaScript-heavy websites or those requiring authentication.
*/
const webCrawl = async (data: { url: string }) => {
  try {
    logger.info(`Entering webCrawl with url ${data.url}`);
    const response = await axios.get(data.url);

    const cleanedHtml = response.data
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");

    var turndownService = new TurndownService();
    const markdown = turndownService.turndown(cleanedHtml);
    const truncatedMarkdown = markdown.slice(0, 10000);
    logger.info(
      `Webcrawl finished the page with a total content length of ${truncatedMarkdown.length}`
    );
    return truncatedMarkdown;
  } catch (error: any) {
    return `Error fetching content from the URL ${error.message}}`;
  }
};

export default wrapFunction(webCrawl, {
  description: "Crawl a website and return the content in markdown format",
  parameters: [
    {
      name: "url",
      type: "string",
      description: "The URL of the website to crawl",
    },
  ],
});
