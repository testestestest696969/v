"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function DevToolGuard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const debug = params.get("debug");
    if (debug !== "false") {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/disable-devtool@latest"
      strategy="afterInteractive"
      disable-devtool-auto=""
    />
  );
}
