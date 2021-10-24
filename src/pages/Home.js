import React from "react";

export default function Home() {
  return (
    <div className="h-full flex items-center">
      <div className="flex-1">
        <div className="uppercase text-subHeading tracking-h5">
          So, you want to travel to
        </div>
        <div className="uppercase font-bellefair text-bigTitle">space</div>
        <div className="text-lg font-barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
