import { Popover } from 'antd'
import React from 'react';

type Props = {
    title: string,
    src: string,
    width: string,
    height: string
}

export default function SkillTemplate({title, src, width, height}: Props) {
  return (
    <Popover title={title}>
    <div className="flex flex-col items-center justify-center">
      <img
        src={src}
        width={width}
        height={height}
        alt={title}
      />
    </div>
  </Popover>
  )
}
