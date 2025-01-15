import { Bytes } from "@mjt-engine/byte";
import type {
  WhisperAsrRequest,
  WhisperAsrResponse,
} from "@mjt-services/asr-common-2025";

export const postWhisperAudioBytes = async ({
  audio,
  url,
  params,
  signal,
}: {
  audio: ArrayBuffer;
  params?: Omit<WhisperAsrRequest, "audio">;
  url: string;
  signal?: AbortSignal;
}): Promise<WhisperAsrResponse> => {
  console.log("postWhisperAudioBytes: typeof audio", typeof audio);
  console.log("postWhisperAudioBytes: audio.length", audio.byteLength);
  const hash = await Bytes.addressStringOf({ bytes: audio });
  console.log("postWhisperAudioBytes: hash", hash);
  const formData = new FormData();
  formData.append(
    "audio_file",
    new Blob([audio], { type: "audio/wav" }),
    "audio.wav"
  );

  const queryParams = new URLSearchParams(
    Object.entries(params || {}).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {} as Record<string, string>)
  );

  const response = await fetch(`${url}/asr?${queryParams.toString()}`, {
    method: "POST",
    body: formData,
    signal,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (params?.output === "json") {
    return (await response.json()) as WhisperAsrResponse;
  }
  return response.text();
};
