export default function FlexButton({ content }: { content: any }) {
  return (
    <div className={`w-full break-words px-2 py-1 text-white`}>
      <div
        className={`rounded-lg text-center py-2 ${
          "bg-[" + content.color + "]"
        }`}>
        {content.type != "link" ? content.text : "กดดูเลย"}
      </div>
      {content.seperator == "true" && <hr className='mt-1'></hr>}
    </div>
  )
}
