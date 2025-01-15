import type { ConnectionListener } from "@mjt-engine/message";
import type { AsrConnectionMap } from "@mjt-services/asr-common-2025";
import { sendAsrNonStreamingResponse } from "./sendAsrNonStreamingStreamingResponse";

export const asrTranscribeListener: ConnectionListener<
  AsrConnectionMap,
  "asr.transcribe"
> = async (props) => {
  try {
    const { audio, ...rest } = props.detail.body;


    return sendAsrNonStreamingResponse(props);
  } catch (error) {
    console.log("textgenGenerateListener error", error);
  }
};
