"use client"

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material"
import { useEffect, useState } from "react"

export default function DetailForm({
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
  // Data for selector
  const selectType = [
    "header",
    "5xl",
    "4xl",
    "3xl",
    "xxl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs",
    "link",
    "action",
  ]
  const selectAlign = ["start", "center", "end"]
  const selectColor = [
    {
      name: "black",
      hex: "#000000",
    },
    {
      name: "gray",
      hex: "#4b5563",
    },
    {
      name: "red",
      hex: "#dc2626",
    },
    {
      name: "orange",
      hex: "#f97316",
    },
    {
      name: "yellow",
      hex: "#facc15",
    },
    {
      name: "lime",
      hex: "#84cc16",
    },
    {
      name: "green",
      hex: "#22c55e",
    },
    {
      name: "teal",
      hex: "#2dd4bf",
    },
    {
      name: "cyan",
      hex: "#22d3ee",
    },
    {
      name: "blue",
      hex: "#2563eb",
    },
    {
      name: "purple",
      hex: "#9333ea",
    },
    {
      name: "pink",
      hex: "#ec4899",
    },
  ]

  const [text, setText] = useState(contents[focusContentId].text)
  const [type, setType] = useState(contents[focusContentId].type)
  const [align, setAlign] = useState(contents[focusContentId].align)
  const [color, setColor] = useState(contents[focusContentId].color)
  const [seperator, setSeperator] = useState(contents[focusContentId].seperator)
  const [weight, setWeight] = useState(contents[focusContentId].weight)

  useEffect(() => {
    setText(contents[focusContentId].text)
    setType(contents[focusContentId].type)
    setAlign(contents[focusContentId].align)
    setColor(contents[focusContentId].color)
    setSeperator(contents[focusContentId].seperator)
    setWeight(contents[focusContentId].weight)
  }, [focusContentId])

  useEffect(() => {
    const newContent = {
      text: text,
      type: type,
      align: align,
      color: color,
      seperator: seperator,
      weight: weight,
    }
    setContents(
      contents.map((data, index) =>
        index === focusContentId ? newContent : data
      )
    )
  }, [text, type, align, color, seperator, weight])

  return (
    <div className='flex flex-col space-y-5 p-5 h-full'>
      {/* text */}
      <TextField
        id='text'
        label='ข้อความ/ลิ้งค์'
        variant='outlined'
        value={text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value)
        }}
      />

      {/* type */}
      <FormControl fullWidth>
        <InputLabel id='type-lable'>รูปแบบ</InputLabel>
        <Select
          labelId='type-lable'
          id='type'
          label='รูปแบบ'
          value={type}
          onChange={(event: SelectChangeEvent) => {
            setType(event.target.value)
          }}>
          {selectType.map((type) => (
            <MenuItem value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* align */}
      {["header", "link", "action"].includes(type) ? (
        ""
      ) : (
        <FormControl fullWidth>
          <InputLabel id='align-lable'>ตำแหน่ง</InputLabel>
          <Select
            labelId='align-lable'
            id='align'
            label='ตำแหน่ง'
            value={align}
            onChange={(event: SelectChangeEvent) => {
              setAlign(event.target.value)
            }}>
            {selectAlign.map((align) => (
              <MenuItem value={align}>{align}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* color */}
      <FormControl fullWidth>
        <InputLabel id='color-lable'>สีข้อความ/พื้นหลัง</InputLabel>
        <Select
          labelId='color-lable'
          id='color'
          label='สีข้อความ/พื้นหลัง'
          value={color}
          onChange={(event: SelectChangeEvent) => {
            setColor(event.target.value)
          }}>
          {selectColor.map((color) => (
            <MenuItem value={color.hex}>{color.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* seperatoe */}
      {["header"].includes(type) ? (
        ""
      ) : (
        <FormControl fullWidth>
          <InputLabel id='seperator-lable'>เส้นแบ่ง</InputLabel>
          <Select
            labelId='seperator-lable'
            id='seperator'
            label='เส้นแบ่ง'
            value={seperator}
            onChange={(event: SelectChangeEvent) => {
              setSeperator(event.target.value)
            }}>
            <MenuItem value={"true"}>TRUE</MenuItem>
            <MenuItem value={"false"}>FALSE</MenuItem>
          </Select>
        </FormControl>
      )}

      {/* bold */}
      {["header", "link", "action"].includes(type) ? (
        ""
      ) : (
        <FormControl fullWidth>
          <InputLabel id='bold-lable'>ตัวหนา</InputLabel>
          <Select
            labelId='bold-lable'
            id='bold'
            label='ตัวหนา'
            value={weight}
            onChange={(event: SelectChangeEvent) => {
              setWeight(event.target.value)
            }}>
            <MenuItem value={"bold"}>TRUE</MenuItem>
            <MenuItem value={"regular"}>FALSE</MenuItem>
          </Select>
        </FormControl>
      )}
    </div>
  )
}
