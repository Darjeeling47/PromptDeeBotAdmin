export default function FlexButton({
  content,
  focusContentId,
  id,
}: {
  content: any
  focusContentId?: number
  id?: number
}) {
  return (
    <div className={`w-full break-words px-2 py-1 text-white`}>
      <div
        className={`rounded-lg text-center py-2 ${
          "bg-[" + content.color + "]"
        } ${id == focusContentId ? "ring-4 ring-blue-300" : ""}`}>
        {content.type != "link" ? content.text : "กดดูเลย"}
      </div>
      {content.seperator == "true" && <hr className='mt-1'></hr>}
    </div>
  )
}
