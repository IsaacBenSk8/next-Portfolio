'use client'

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  display?: "flex";
  justifyContent?: "center";
}

export default function Reveal({children, width = "fit-content", display, justifyContent}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div ref={ref} style={{position: "relative", display, justifyContent, width, overflow: "hidden"}}
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5}}
      >
        {children}
    </motion.div>
  );
};
