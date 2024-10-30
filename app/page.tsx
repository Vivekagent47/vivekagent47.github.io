"use client";

import BackgroundSVG from "@/components/hero/BackgroundSVG";
import Loader from "@/components/Loader";
import { cn } from "@/lib/utils";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion, useMotionValue } from "framer-motion";
import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [loading, setLoading] = useState(true);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const isMobile = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }

    return false;
  }, []);

  const svgOpacity = useMotionValue(1);
  const backgroundGradient = useMotionValue(
    "radial-gradient(circle, #111111 0%, #000000 65%)",
  );

  const updateDimensions = useCallback(() => {
    debounce(() => {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      dimensionsRef.current = newDimensions;
      setDimensions(newDimensions);
    }, 200)();
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  return (
    <ReactLenis root>
      <Loader onLoadingComplete={() => setLoading(false)} />

      <div className={cn(loading ? "hidden" : "visible")}>
        <motion.div
          style={{ background: backgroundGradient }}
          className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
        >
          <BackgroundSVG
            width={dimensions.width}
            height={dimensions.height}
            isMobile={isMobile}
            svgOpacity={svgOpacity}
            isLoading={loading}
          />
        </motion.div>
      </div>
    </ReactLenis>
  );
}
