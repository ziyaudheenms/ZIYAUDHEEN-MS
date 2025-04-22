"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

export function Promo() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <> 
            <h1 className="text-4xl font-semibold text-white dark:text-white  ">
          <br />
              <span className="text-2xl md:text-[4rem] font-bold mt-1 leading-none bg-clip-text py-4 text-transparent bg-gradient-to-r from-red-600 to-violet-800">
              A digital university platform for students
              </span>
            </h1>
          </>
        }>
        <img
          src={`/recommand.png`}
          alt="hero"
          height={720}
          width={1400}
          className=" rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>
  );
}
