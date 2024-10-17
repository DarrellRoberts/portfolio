import React from "react";
import SkillTemplate from "../SkillTemplate";
import { backendJson } from "./backendJson";

export default function FrontendList() {
  return (
    <>
      {backendJson.map((skill, i) => (
        <SkillTemplate
        key={i}
          title={skill.title}
          src={skill.src}
          width={skill.width ?? "65"}
          height={skill.height ?? "65"}
        />
      ))}
    </>
  );
}
