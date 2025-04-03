import { logger } from "@blaxel/sdk";
import { tool } from "ai";
import axios from "axios";
//@ts-ignore
import TurndownService from "turndown";
import z from "zod";

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
export const webcrawl = tool({
  description: "Crawl a website and return the content in markdown format",
  parameters: z.object({
    url: z.string().describe("The URL of the website to crawl"),
  }),
  execute: async (args: { url: string }) => {
    try {
      logger.info(`Entering webCrawl with url ${args.url}`);
      const response = await axios.get(args.url);
  
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
  },
})

