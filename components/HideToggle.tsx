"use client";

import React, { useState } from "react";

export default function HideToggle() {
  const [hide, setHide] = useState(false);

  const toggleHide = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHide(!hide);
    const el = e.target as HTMLButtonElement;
    const parentEl = el.parentNode as HTMLElement;

    if (!hide) {
      parentEl.classList.add("web-only", "text-gray-300");
    } else {
      parentEl.classList.remove("web-only", "text-gray-300");
    }
  };

  return (
    <button className="hide-toggle web-only" onClick={toggleHide}>
      {hide ? "[Show]" : "[Hide]"}
    </button>
  );
}
