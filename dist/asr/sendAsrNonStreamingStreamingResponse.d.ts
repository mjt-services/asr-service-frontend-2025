import type { ConnectionListener } from "@mjt-engine/message";
import type { AsrConnectionMap } from "@mjt-services/asr-common-2025";
import type { Env } from "../Env";
export declare const sendAsrNonStreamingResponse: ConnectionListener<AsrConnectionMap, "asr.transcribe", Env>;
