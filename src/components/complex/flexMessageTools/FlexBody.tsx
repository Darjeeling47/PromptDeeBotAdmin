"use client"

export default function FlexBody({
  content,
  focusContentId,
  id,
}: {
  content: any
  focusContentId?: number
  id?: number
}) {
  return (
    <div
      className={`w-full break-words px-4 py-1 ${
        "text-[" + content.color + "]"
      } ${"text-" + content.align} ${"text-" + content.type} ${
        content.weight == "bold" ? "font-semibold" : "font-normal"
      } ${id == focusContentId ? "ring-4 ring-blue-300 rounded-xl" : ""}`}>
      {content.text}
      {content.seperator == "true" && <hr className='mt-1'></hr>}
    </div>
  )
}
