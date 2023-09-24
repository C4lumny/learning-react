// import { useState } from "react";

export function Gpt_version({version_number, icon}) {
  return (
    <button className="gpt-buttonVersion">
        <span className="gpt-iconColor">
            {icon}
        </span>
        <span>GPT-{version_number}</span>
    </button>
  );
}
