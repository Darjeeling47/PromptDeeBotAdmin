"use client"

export default function StructureList({
  contents,
  setContents,
  focusContentId,
  setFocusContentId,
}: {
  contents: any[]
  setContents: Function
  focusContentId: number
  setFocusContentId: Function
}) {
  const handleAddContent = () => {
    const newContent = {
      text: "content",
      type: "md",
      align: "start",
      color: "#000000",
      seperator: false,
      bold: false,
    }

    setContents([...contents, newContent])
    setFocusContentId(focusContentId + 1)
  }

  const handleRemoveContent = () => {
    if (contents.length <= 1) {
      alert("ไม่สามารถลบได้ ต้องมีกล่องอย่างน้อย 1 กล่องในข้อความ")
      return
    }

    setContents(contents.filter((_, index) => index !== focusContentId))

    if (focusContentId - 1 < 0) {
      setFocusContentId(0)
      return
    } else setFocusContentId(focusContentId - 1)
  }

  const handleOrderContent = (dir: boolean) => {
    // dir true = up
    // dir flase = down

    if (dir) {
      if (focusContentId - 1 < 0) return

      const newContents = [...contents]
      const temp = newContents[focusContentId]
      newContents[focusContentId] = newContents[focusContentId - 1]
      newContents[focusContentId - 1] = temp

      setContents(newContents)
      setFocusContentId(focusContentId - 1)
    } else {
      if (focusContentId + 1 >= contents.length) return

      const newContents = [...contents]
      const temp = newContents[focusContentId]
      newContents[focusContentId] = newContents[focusContentId + 1]
      newContents[focusContentId + 1] = temp

      setContents(newContents)
      setFocusContentId(focusContentId + 1)
    }
  }

  return (
    <div className='flex flex-col w-full p-5 space-y-5 overflow-auto'>
      {/* Nav Bar */}
      <div className='w-full rounded-lg bg-gray-200 flex flex-row justify-between p-3'>
        <div className='flex flex-row space-x-3'>
          <button
            className='rounded-full hover:bg-white transition-all duration-200 w-7 h-7 flex items-center justify-center'
            onClick={() => handleOrderContent(true)}>
            <i className='bi bi-chevron-up'></i>
          </button>
          <button
            className='rounded-full hover:bg-white transition-all duration-200 w-7 h-7 flex items-center justify-center'
            onClick={() => handleOrderContent(false)}>
            <i className='bi bi-chevron-down'></i>
          </button>
        </div>
        <button
          className='rounded-full hover:bg-white transition-all duration-200 w-7 h-7 flex items-center justify-center'
          onClick={handleRemoveContent}>
          <i className='bi bi-trash-fill'></i>
        </button>
      </div>

      {/* List */}
      <div className='w-full space-y-5'>
        {contents.map((content, index) => (
          <div
            className={`rounded-lg ${
              index === focusContentId
                ? "border-2 border-blue-500"
                : "border border-gray-400"
            } p-3 line-clamp-1 flex flex-row justify-between cursor-pointer`}
            onClick={() => setFocusContentId(index)}>
            <div className='w-1/2 overflow-hidden truncate'>{content.text}</div>
            <div>{content.type}</div>
          </div>
        ))}
      </div>

      {/* Add button */}
      <div
        className='w-full rounded-lg border-2 border-dashed border-gray-400 flex flex-row justify-center p-3 hover:bg-gray-200 cursor-pointer transition-all duration-200'
        onClick={handleAddContent}>
        <i className='bi bi-plus text-2xl text-gray-400'></i>
      </div>
    </div>
  )
}
