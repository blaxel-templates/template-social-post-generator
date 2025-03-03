import { getDefaultThread, wrapAgent } from "@blaxel/sdk";
import { HumanMessage } from "@langchain/core/messages";
import { CompiledGraph } from "@langchain/langgraph";
import { FastifyRequest } from "fastify";
import { v4 as uuidv4 } from "uuid";
import { prompt } from "./prompt";
type InputType = {
  inputs: string | null;
  input: string | null;
};

type AgentType = {
  agent: CompiledGraph<any, any, any, any, any, any>;
};

/*
  This is the entrypoint for the social media post generation agent.

  Features:
  - Processes user input to generate social media content
  - Integrates with blaxel-search and webCrawl custom function for content research

  Input handling:
  - Accepts input via 'inputs' or 'input' field in request body
  - The input can be an URL or a theme for the post

  Response:
  - Returns the last message content from the agent's response
  - Content is limited to 400 characters and follows social media best practices
*/
const req = async (request: FastifyRequest, args: AgentType) => {
  const { agent } = args;
  const body = (await request.body) as InputType;
  const thread_id = getDefaultThread(request) || uuidv4();
  const input = body.inputs || body.input || "";
  const responses: any[] = [];

  const stream = await agent.stream(
    { messages: [new HumanMessage(input)] },
    { configurable: { thread_id } }
  );

  for await (const chunk of stream) {
    responses.push(chunk);
  }
  const content = responses[responses.length - 1];
  return content.agent.messages[content.agent.messages.length - 1].content;
};

export const agent = wrapAgent(req, {
  agent: {
    metadata: {
      name: "socialpost",
    },
    spec: {
      model: "sandbox-openai",
      description: "",
      runtime: {
        envs: [
          {
            name: "SAMPLE",
            value: "VALUE",
          },
        ],
      },
      prompt,
    },
  },
  remoteFunctions: ["blaxel-search"],
});
