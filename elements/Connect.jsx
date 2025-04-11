"use client"; // Required for Next.js (if using App Router)

import React, { useRef } from "react";

const CopyToClipboard = () => {
  const textRef = useRef(null);

  const copyText = () => {
    if (textRef.current) {
      navigator.clipboard
        .writeText("shajeem229@gmail.com")
        .then(() => {
          alert("Copied to clipboard: " );
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    }
  };

  return (
    <div>
      <input type="text" ref={textRef} defaultValue="shajeem229@gmail.com" />
      <button className="p-[3px] relative  w-full" onClick={copyText}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Copy My Email
        </div>
      </button>
      
    </div>
  );
};

export default CopyToClipboard;
