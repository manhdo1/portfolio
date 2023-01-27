import React from "react";
import "./style.css";
const Levels = ({ level, color }) => {
  return (
    <>
      <ul>
        <li>
          <span style={{ background: `${color.lv1}` }}>
            <p></p>
          </span>
          {level.fa}
        </li>
        <li>
          <span style={{ background: `${color.lv2}` }}>
            <p></p>
          </span>
          {level.no}
        </li>
        <li>
          <span style={{ background: `${color.lv3}` }}>
            <p></p>
          </span>
          {level.in}
        </li>
        <li>
          <span style={{ background: `${color.lv4}` }}>
            <p></p>
          </span>
          {level.ad}
        </li>
        <li>
          <span style={{ background: `${color.lv5}` }}>
            <p></p>
          </span>
          {level.ex}
        </li>
      </ul>
    </>
  );
};
export default Levels;
// 1 - Fundamental Awareness (basic knowledge)
// 2 - Novice (limited experience)
// 3 - Intermediate (practical application)
// 4 - Advanced (applied theory)
// 5 - Expert (recognized authority)
