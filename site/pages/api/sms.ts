import type { NextApiRequest, NextApiResponse } from "next";
import * as twilio from "twilio";
export default (req: NextApiRequest, res: NextApiResponse) => {
  const twiml = new twilio.twiml.MessagingResponse();

  //TODO: Request OpenAI here
  twiml.message("Yo this is ChadGPT what up");
  res.status(200).setHeader("Content-Type", "text/xml").send(twiml.toString());
};
