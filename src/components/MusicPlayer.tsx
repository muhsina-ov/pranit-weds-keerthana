import { useEffect, useRef, useState } from "react";
import { VolumeX, Music } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API if not already present
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player("youtube-audio-player", {
          height: "1",
          width: "1",
          videoId: "VatyhN0l4Os",
          playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: "VatyhN0l4Os",
            controls: 0,
            showinfo: 0,
            rel: 0,
            enablejsapi: 1,
            origin: window.location.origin,
          },
          events: {
            onReady: () => {
              setIsReady(true);
            },
            onStateChange: (event: any) => {
              // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              } else if (event.data === 0) {
                // Loop
                playerRef.current?.seekTo(0);
                playerRef.current?.playVideo();
                setIsPlaying(true);
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // Auto-play on first user interaction with the page
    const handleFirstInteraction = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === "function") {
        try {
          playerRef.current.playVideo();
          setIsPlaying(true);
        } catch {
          // browser may block until explicit button click
        }
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch {
      // fallback
    }
  };

  return (
    <>
      {/* Hidden YouTube player container */}
      <div
        ref={containerRef}
        className="pointer-events-none fixed -top-[1000px] left-0 h-1 w-1 opacity-0"
        aria-hidden="true"
      >
        <div id="youtube-audio-player" />
      </div>

      {/* Floating sound control button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={togglePlay}
          type="button"
          aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
          className="group relative flex items-center gap-2.5 rounded-full border border-[#b98a2f]/70 bg-[#3d1212]/90 px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-[#f3de8a] hover:bg-[#521717] active:scale-95"
        >
          {/* Animated Gold Ring pulse */}
          {isPlaying && (
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#b98a2f]/20 opacity-75" />
          )}

          {/* Equalizer animation or muted icon */}
          {isPlaying ? (
            <div className="flex h-4 items-end gap-0.5">
              <span className="h-3 w-1 animate-[bounce_0.8s_ease-in-out_infinite] rounded-full bg-gradient-to-t from-[#c99327] to-[#fde047]" />
              <span className="h-4 w-1 animate-[bounce_1.1s_ease-in-out_infinite_0.2s] rounded-full bg-gradient-to-t from-[#c99327] to-[#fde047]" />
              <span className="h-2 w-1 animate-[bounce_0.9s_ease-in-out_infinite_0.4s] rounded-full bg-gradient-to-t from-[#c99327] to-[#fde047]" />
              <span className="h-3.5 w-1 animate-[bounce_1s_ease-in-out_infinite_0.1s] rounded-full bg-gradient-to-t from-[#c99327] to-[#fde047]" />
            </div>
          ) : (
            <VolumeX className="h-4 w-4 text-[#d9b36a]" />
          )}

          <div className="flex flex-col text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#fef3c7]">
              {isPlaying ? "Music On" : "Play Music"}
            </span>
            <span className="text-[9px] tracking-wider text-[#d9b36a]/80">
              Sita Kalyanam
            </span>
          </div>

          <Music className={`h-3.5 w-3.5 text-[#d9b36a] ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "6s" }} />
        </button>
      </div>
    </>
  );
}
