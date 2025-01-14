import type { WhisperAsrRequest, WhisperAsrResponse } from "@mjt-services/asr-common-2025";
export declare const postWhisperAudioBytes: ({ audio, url, params, signal, }: {
    audio: ArrayBuffer;
    params?: Omit<WhisperAsrRequest, "audio">;
    url: string;
    signal?: AbortSignal;
}) => Promise<WhisperAsrResponse>;
