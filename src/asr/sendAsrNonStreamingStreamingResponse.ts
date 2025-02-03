import type { ConnectionListener } from "@mjt-engine/message";
import type { AsrConnectionMap } from "@mjt-services/asr-common-2025";
import type { Env } from "../Env";
import { postWhisperAudioBytes } from "./postWhisperAudioBytes";
import { resolveAsrBackendUrl } from "./resolveAsrBackendUrl";
export const sendAsrNonStreamingResponse: ConnectionListener<
  AsrConnectionMap,
  "asr.transcribe",
  Env
> = async ({ signal, detail, headers, send, sendError, env }) => {
  const { body } = detail;
  const { audio, ...rest } = body;
  const url = await resolveAsrBackendUrl(env);
  const response = await postWhisperAudioBytes({
    signal,
    audio,
    params: rest,
    url,
  });
  send(response);
};
