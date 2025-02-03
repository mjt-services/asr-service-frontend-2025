import { Messages } from "@mjt-engine/message";
import type { Env } from "./Env";

import { asrTranscribeListener } from "./asr/asrTranscribeListener";
import type { AsrConnectionMap } from "@mjt-services/asr-common-2025";
import { assertValue } from "@mjt-engine/assert";
import { getEnv } from "./getEnv";
import type { TunnelConnectionMap } from "@mjt-services/tunnel-common-2025";

export const initConnection = async () => {
  const env = getEnv();
  const url = assertValue(env.NATS_URL);
  console.log("NATS_URL", url);

  return await Messages.createConnection<
    AsrConnectionMap & TunnelConnectionMap,
    Env
  >({
    subscribers: {
      "asr.transcribe": asrTranscribeListener,
    },
    options: { log: console.log },
    server: [url],
    token: env.NATS_AUTH_TOKEN,
    env,
  });
};
