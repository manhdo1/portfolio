import React from "react";
import "./style.css";



const Skill = ({color,img,text}) => {
 
  return (
    <>
      <div className="container ">
        <div className="card bounce-in-top">
          <div className="percent" style={{borderColor: `${color}`}}>
            <img src={img} alt="img" />
          </div>
            <b className="text text-focus-in">{text}</b>
        </div>
      </div>
    </>
  );
};
export default Skill;
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