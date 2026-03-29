import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import Icon from "@/components/ui/icon";

interface HlsPlayerProps {
  url: string;
  channelName: string;
  onClose: () => void;
}

export default function HlsPlayer({ url, channelName, onClose }: HlsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [status, setStatus] = useState<"loading" | "playing" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setStatus("loading");
    setErrorMsg("");

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30,
      });
      hlsRef.current = hls;

      hls.loadSource(url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setStatus("playing");
        video.play().catch(() => {});
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          setStatus("error");
          setErrorMsg("Не удалось подключиться к каналу. Попробуйте позже.");
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.addEventListener("loadedmetadata", () => {
        setStatus("playing");
        video.play().catch(() => {});
      });
      video.addEventListener("error", () => {
        setStatus("error");
        setErrorMsg("Не удалось загрузить поток.");
      });
    } else {
      setStatus("error");
      setErrorMsg("Ваш браузер не поддерживает HLS потоки.");
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [url]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">Прямой эфир</span>
          </div>
          <span className="text-white/20">·</span>
          <span className="font-oswald font-bold text-white text-lg">{channelName}</span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-xl px-3 py-2 text-sm"
        >
          <Icon name="X" size={16} />
          Закрыть
        </button>
      </div>

      {/* Player */}
      <div className="flex-1 flex items-center justify-center relative bg-black">
        {status === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
            <div className="w-10 h-10 border-2 border-[#f59e0b]/30 border-t-[#f59e0b] rounded-full animate-spin" />
            <p className="text-white/50 text-sm">Подключаемся к эфиру...</p>
          </div>
        )}

        {status === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center">
              <Icon name="WifiOff" size={32} className="text-red-400" />
            </div>
            <p className="text-white/60 text-sm text-center max-w-xs">{errorMsg}</p>
            <button
              onClick={() => { setStatus("loading"); }}
              className="bg-[#f59e0b] hover:bg-[#fbbf24] text-black font-bold px-5 py-2 rounded-xl text-sm transition-all"
            >
              Повторить
            </button>
          </div>
        )}

        <video
          ref={videoRef}
          className="w-full h-full max-h-[calc(100vh-80px)] object-contain"
          controls
          playsInline
          style={{ opacity: status === "playing" ? 1 : 0 }}
        />
      </div>
    </div>
  );
}
