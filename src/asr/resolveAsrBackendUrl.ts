import { isUndefined } from "@mjt-engine/object";
import type { Env } from "../Env";
import { getConnection } from "../getConnection";

let _backendUrl: string | undefined;

export const resolveAsrBackendUrl = async (env: Env) => {
  if (_backendUrl) {
    return _backendUrl;
  }
  const { ASR_BACKEND_URL } = env;
  if (!ASR_BACKEND_URL) {
    throw new Error("ASR_BACKEND_URL is required");
  }
  if (ASR_BACKEND_URL.startsWith("http")) {
    return ASR_BACKEND_URL;
  }
  const con = await getConnection();
  const resp = await con.request({
    subject: "tunnel.resolve",
    request: {
      body: {
        name: ASR_BACKEND_URL,
      },
    },
  });
  const { port } = resp;
  if (isUndefined(port)) {
    throw new Error("No port found");
  }
  _backendUrl = `http://tunnel: ${port}`;
  console.log("_backendUrl", _backendUrl);
  return _backendUrl;
};
