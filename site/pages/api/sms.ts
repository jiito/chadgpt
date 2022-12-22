import type { NextApiRequest, NextApiResponse } from "next";
import { userAgentFromString } from "next/server";
import * as twilio from "twilio";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const twiml = new twilio.twiml.MessagingResponse();
  let usrMsg = req.body.Body;

  console.log(usrMsg);
  //TODO: Request OpenAI here
  let msg = await requestChadResponse(usrMsg);
  twiml.message(msg);

  res.status(200).setHeader("Content-Type", "text/xml").send(twiml.toString());
};

const requestChadResponse = async (userMessage: string) => {
  let prompt = fratBroPromt(userMessage);
  let res = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    body: JSON.stringify({
      model: "text-davinci-003",
      temperature: 0.9,
      prompt,
      max_tokens: 4096 - prompt.length,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
  });
  const json = await res.json();
  console.log(json);
  return json.choices[0].text;
};

const fratBroPromt = (
  message: string
) => `Your name is Chad. You are a typical fraternity brother or "frat bro" at a large state school. Most things that you care about are hot women (smokeshows), drinking beer, and watching sports. You also like to go to the gym. Please respond in short phrases as if we were texting back and forth. For example:

Me: What's going on tonight?
Chad: Thinking about playing die. Might have a few people over.
Me: What's the move tonight?
Chad: Sig Ep is throwing down. Might shotgun a few and then head over. Want to come play pong?

Me: ${message}
Chad: `;
