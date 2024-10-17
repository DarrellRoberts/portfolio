import React from "react";
import SkillTemplate from "../SkillTemplate";
import { toolsJson } from "./toolsJson";

export default function FrontendList() {
  return (
    <>
      {toolsJson.map((skill, i) => (
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
