"use client"

export default function FlexBody({ content }: { content: any }) {
  return (
    <div
      className={`w-full break-words px-4 py-2 ${
        "text-[" + content.color + "]"
      } ${"text-" + content.align} ${"text-" + content.type} ${
        content.bold == "true" ? "font-bold" : "font-normal"
      }`}>
      {content.text}
      {content.seperator && <hr className='mt-2'></hr>}
    </div>
  )
}
