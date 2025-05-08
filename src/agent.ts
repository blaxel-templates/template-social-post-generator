import { blModel, blTools } from "@blaxel/vercel";
import { generateText } from "ai";
import fs from "fs";
import { webcrawl } from "./functions/webcrawl";
interface Stream {
  write: (data: string) => void;
  end: () => void;
}

export default async function agent(
  input: string,
  stream: Stream
): Promise<void> {
  const platformTools = await blTools(["blaxel-search"]);
  const model = await blModel("sandbox-openai");

  const system = fs.readFileSync("./src/prompt.md", "utf8");
  const response = await generateText({
    experimental_telemetry: { isEnabled: true },
    model,
    tools: {
      ...platformTools,
      webcrawl,
    },
    system,
    messages: [{ role: "user", content: input }],
    maxSteps: 5,
  });
  stream.write(response.text);
  stream.end();
}
