"use client";

import { useRef } from "react";

import { motion } from "framer-motion";

import { ProjectSlider } from "./sliderProject";
import { projectOptions } from "@/data/projectOptions";
import { useProjectSlider } from "@/hooks/use-slide";

export function Project() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX1, transformX2, transformY } =
    useProjectSlider(containerRef);

  function randomId() {
    return crypto.randomUUID();
  }

  const firstSlider = projectOptions.first.map(({ type, source }) => {
    const id = randomId();
    return <ProjectSlider key={id} type={type} source={source} />;
  });

  const secondSlider = projectOptions.second.map(({ type, source }) => {
    const id = randomId();
    return <ProjectSlider key={id} type={type} source={source} />;
  });

  return (
    <section ref={containerRef} className="relative z-10 mt-14">
      <div className="grid items-center">
        <div className="bg-background">
          <motion.div
            className="mb-10 flex gap-10"
            style={{
              width: "120vw",
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className="mb-10 flex gap-10"
            style={{
              width: "120vw",
              x: transformX2,
            }}
          >
            {secondSlider}
          </motion.div>
        </div>

        <motion.div
          className="w-screen bg-background"
          style={{
            height: transformY,
            borderRadius: "0 0 50% 50%",
          }}
        />
      </div>
    </section>
  );
}
