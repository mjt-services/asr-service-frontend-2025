import { Messages } from "@mjt-engine/message";
import type { Env } from "./Env";

import { asrTranscribeListener } from "./asr/asrTranscribeListener";
import type { AsrConnectionMap } from "@mjt-services/asr-common-2025";
import { assertValue } from "@mjt-engine/assert";

export const initConnection = async (env: Env) => {
  const url = assertValue(env.NATS_URL);
  console.log("NATS_URL", url);

  await Messages.createConnection<AsrConnectionMap, Env>({
    subscribers: {
      "asr.transcribe": asrTranscribeListener,
    },
    options: { log: console.log },
    server: [url],
    token: env.NATS_AUTH_TOKEN,
    env,
  });
  console.log("initConnection: init complete");
};
