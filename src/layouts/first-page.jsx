import React from "react";

export default function Auth({children}) {
  return (
    <React.Fragment>
      <div className="h-screen w-screen">
        <div className="grid grid-cols-5 h-full">
          <div className="bg-blue-400 col-span-3"></div>
          <div className="col-span-2 flex justify-center items-center">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
