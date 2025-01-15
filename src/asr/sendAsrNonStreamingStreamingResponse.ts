import { Asserts } from "@mjt-engine/assert";
import type { ConnectionListener } from "@mjt-engine/message";
import type { AsrConnectionMap } from "@mjt-services/asr-common-2025";
import type { Env } from "../Env";
import { postWhisperAudioBytes } from "./postWhisperAudioBytes";
export const sendAsrNonStreamingResponse: ConnectionListener<
  AsrConnectionMap,
  "asr.transcribe",
  Env
> = async ({ signal, detail, headers, send, sendError, env }) => {
  const { body } = detail;
  const { audio, ...rest } = body;
  const response = await postWhisperAudioBytes({
    signal,
    audio,
    params: rest,
    url: Asserts.assertValue(env.ASR_BACKEND_URL),
  });
  send(response);
};
