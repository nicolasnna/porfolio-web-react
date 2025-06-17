import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined"
import Stack from "@mui/material/Stack"
import TimelineExperience from "./TimelineExperience"
import PropTypes from "prop-types"
import * as constants from "../../utils/constants"
import { Box } from "@mui/material"

export default function Experience({ experienceList }) {
  return (
    <Box>
      <Stack
        direction={"row"}
        spacing={2}
        display={"flex"}
        alignItems={"center"}
        justifyItems={"center"}
        mx={2}
      >
        <BusinessCenterOutlinedIcon sx={{ fontSize: constants.fontIconMain }} />
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Experiencia laboral</h2>
      </Stack>
      <TimelineExperience experienceList={experienceList} />
    </Box>
  )
}

Experience.defaultProps = {
  experienceList: [],
}

Experience.propTypes = {
  experienceList: PropTypes.array,
}
