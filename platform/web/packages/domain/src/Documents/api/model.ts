import {request} from "@smartb/g2-utils";

export const askQuestion = (message: string) => {
  return request<string>({
    method: "POST",
    url: "http://162.19.69.14:9999/ask",
    body: JSON.stringify({
      question: message
    }),
    returnType: "text"
  })
}
