export default function FlexHeader({
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
      className={`flex justify-center items-center w-full py-4 px-4 font-semibold text-2xl text-white mb-2 ${
        "bg-[" + content.color + "]"
      } ${id == focusContentId ? "ring-4 ring-bule-300" : ""}`}>
      <h1 className='text-center break-words'>{content.text}</h1>
    </div>
  )
}
