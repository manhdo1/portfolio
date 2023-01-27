import React from "react";
import "./style.css";

// import Htmlcss from "../../assets/image/coding.png";
// import { Levels } from "./level";

const Skills = ({color,img,text}) => {
  // console.log(img);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="percent" style={{borderColor: `${color.lv4}`}}>
            <img src={img.HCJ} alt="img" />
          </div>
            <b className="text">{text.hcj}</b>
        </div>
      </div>
    </>
  );
};
export default Skills;
// 1 - Fundamental Awareness (basic knowledge)
// 2 - Novice (limited experience)
// 3 - Intermediate (practical application)
// 4 - Advanced (applied theory)
// 5 - Expert (recognized authority)
//   - Nhận thức cơ bản (kiến thức cơ bản)
// 2 - Người mới (kinh nghiệm hạn chế)
// 3 - Trung cấp (ứng dụng thực tế)
// 4 - Nâng cao (lý thuyết ứng dụng)
// 5 - Chuyên gia (cơ quan được công nhận)