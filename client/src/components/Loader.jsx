import { useState, useEffect, useRef } from "react";

export default function Loader({ onLoadComplete }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRefLeft = useRef(null);
  const videoRefRight = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        onLoadComplete?.();
      }, 1000);
    }, 8000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  // Sync videos
  useEffect(() => {
    const left = videoRefLeft.current;
    const right = videoRefRight.current;
    if (!left || !right) return;

    const syncVideos = () => {
      if (Math.abs(left.currentTime - right.currentTime) > 0.05) {
        right.currentTime = left.currentTime;
      }
    };
    left.addEventListener("timeupdate", syncVideos);
    return () => left.removeEventListener("timeupdate", syncVideos);
  }, []);

  // Play audio on first user interaction (Chrome/mobile safe)
  useEffect(() => {
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play().catch(() => {});
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 1) {
          vol += 0.02;
          audioRef.current.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 50);
    }
    document.removeEventListener("click", playAudio);
  };
  document.addEventListener("click", playAudio, { once: true });
}, []);


  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* LEFT HALF */}
      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
          isAnimating ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
        }}
      >
        <video
          ref={videoRefLeft}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        >
          <source src="/images/Loader2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* RIGHT HALF */}
      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
          isAnimating ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
        }}
      >
        <video
          ref={videoRefRight}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        >
          <source src="/images/Loader2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* AUDIO */}
      <audio ref={audioRef} src="/images/LoaderAudio.mp3" />
    </div>
  );
}
