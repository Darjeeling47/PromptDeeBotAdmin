"use client"

import { use, useEffect, useState } from "react"
import FlexHeader from "./FlexHeader"
import FlexBody from "./FlexBody"
import FlexButton from "./FlexButton"

export default function FlexGenerator({
  contents,
  setContents,
  focusContentId,
  setFocusContentId,
}: {
  contents: any[]
  setContents?: Function
  focusContentId?: number
  setFocusContentId?: Function
}) {
  return (
    <div className='flex flex-col rounded-2xl bg-white w-72 overflow-visible h-fit pb-1'>
      {/* Display header as top with the background that full the with the header will be set in contents*/}

      <div className='rounded-t-2xl overflow-clip'>
        {contents
          .filter((content) => content.type === "header")
          .map((content, index) => (
            <FlexHeader
              content={content}
              id={index}
              focusContentId={focusContentId}
            />
          ))}
      </div>

      {/* Display the content that order by user */}
      {contents.map((content, index) => {
        if (content.type === "header") return
        else if (content.type === "link")
          return (
            <FlexButton
              content={content}
              id={index}
              focusContentId={focusContentId}
            />
          )
        else if (content.type === "action")
          return (
            <FlexButton
              content={content}
              id={index}
              focusContentId={focusContentId}
            />
          )
        else
          return (
            <FlexBody
              content={content}
              id={index}
              focusContentId={focusContentId}
            />
          )
      })}
    </div>
  )
}
