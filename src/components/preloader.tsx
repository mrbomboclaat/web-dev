"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import Loader from "./loader/loader";

export default function Preloader() {
  const path = usePathname();
  const preloaderRef = useRef(null);

  // preloader effect

  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.getElementsByTagName("body")[0];
      //@ts-ignore
      preloaderRef.current.style.display = "block";
      body.classList.add("loading");
      body.classList.remove("loaded");

      setTimeout(() => {
        body.classList.remove("loading");
        body.classList.add("loaded");
      }, 700);

      setTimeout(() => {
        //@ts-ignore
        preloaderRef.current.style.display = "none";
      }, 1500);
    }
  }, [path]);

  return (
    <>
      <div ref={preloaderRef} className="preloader-wrapp">
        <Loader />
      </div>
    </>
  );
}
