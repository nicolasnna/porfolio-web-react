import "./Skills.css"
import { Stack } from "@mui/material"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import * as constants from "@utils/constants"
import skillsArray from "@utils/skillsArray"

export default function Skills() {
  return (
    <section className="sectionSkills">
      <Stack
        direction={"row"}
        display={"flex"}
        alignItems={"center"}
        justifyItems={"center"}
        spacing={2}
      >
        <SettingsOutlinedIcon sx={{ fontSize: constants.fontIconMain }} />
        <h1>Tecnologías</h1>
      </Stack>
      <Stack direction={"row"} display={"flex"} flexWrap={"wrap"} gap={2}>
        {skillsArray.map((item) => item.element)}
      </Stack>
    </section>
  )
}
