export default function FlexHeader({ content }: { content: any }) {
  return (
    <div
      className={`flex justify-center items-center w-full py-4 px-4 font-semibold text-2xl text-white mb-2 ${
        "bg-[" + content.color + "]"
      }`}>
      <h1 className='text-center break-words'>{content.text}</h1>
    </div>
  )
}
