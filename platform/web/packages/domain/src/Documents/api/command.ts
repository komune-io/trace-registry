import {request} from "@smartb/g2-utils";
import { Message } from "components";

export const askQuestion = (message: string, history: Message[]) => {
  const messages = history.map((message) => ({...message, additional_kwargs: {}}))
  return request<string>({
    method: "POST",
    //@ts-ignore
    url: window._env_.aiUrl + "/ask",
    body: JSON.stringify({
      question: message,
      messages
    }),
    returnType: "text"
  })
}
