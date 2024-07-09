import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"

export default function DetailForm() {
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

  return (
    <div className='flex flex-col space-y-5 p-5'>
      {/* text */}
      <TextField id='text' label='ข้อความ' variant='outlined' />

      {/* type */}
      <FormControl fullWidth>
        <InputLabel id='type-lable'>รูปแบบ</InputLabel>
        <Select labelId='type-lable' id='type' label='รูปแบบ'>
          {selectType.map((type) => (
            <MenuItem value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* align */}
      <FormControl fullWidth>
        <InputLabel id='align-lable'>ตำแหน่ง</InputLabel>
        <Select labelId='align-lable' id='align' label='ตำแหน่ง'>
          {selectAlign.map((type) => (
            <MenuItem value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* color */}
      <FormControl fullWidth>
        <InputLabel id='color-lable'>สีข้อความ</InputLabel>
        <Select labelId='color-lable' id='color' label='สีข้อความ'>
          {selectColor.map((type) => (
            <MenuItem value={type.hex}>{type.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* seperatoe */}
      <FormControl fullWidth>
        <InputLabel id='seperator-lable'>เส้นแบ่ง</InputLabel>
        <Select labelId='seperator-lable' id='seperator' label='เส้นแบ่ง'>
          <MenuItem value={"true"}>TRUE</MenuItem>
          <MenuItem value={"false"}>FALSE</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
