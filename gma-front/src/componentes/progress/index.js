"use client";
import { useState } from "react";
import { StylesProgress } from "./styles";

export default function Progress(props) {
  const { level, nextLevel } = props;
  const [progress, setProgress] = useState(20);
  return (
    <StylesProgress>
      <div className="progress-bar">
        <span style={{ width: `${progress}%` }}></span>
      </div>
    </StylesProgress>
  );
}
