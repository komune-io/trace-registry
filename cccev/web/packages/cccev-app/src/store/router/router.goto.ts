import { push } from "connected-react-router";
import { stringify } from "qs";

const pushUrl = (url: string) => push(url);

const certificateFiller = (params: Object) => {
  //@ts-ignore
  const request = window._env_.request
  //@ts-ignore
  const framework = window._env_.framework
  return push(`/${stringify({ ...params, request: request, framework: framework }, { addQueryPrefix: true, arrayFormat: 'repeat' })}`)
}

export const goto = {
  push: pushUrl,
  certificateFiller: certificateFiller
};
