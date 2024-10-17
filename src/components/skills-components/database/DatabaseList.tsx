import React from "react";
import SkillTemplate from "../SkillTemplate";
import { databaseJson } from "./databaseJson";

export default function FrontendList() {
  return (
    <>
      {databaseJson.map((skill, i) => (
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
