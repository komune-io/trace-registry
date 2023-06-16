import {request} from "@smartb/g2-utils";
import { Message } from "components";

export const askQuestion = (message: string, history: Message[]) => {
  const messages = history.map((message) => ({...message, additional_kwargs: {}}))
  return request<string>({
    method: "POST",
    url: "http://162.19.69.14:9999/ask",
    body: JSON.stringify({
      question: message,
      messages
    }),
    returnType: "text"
  })
}
