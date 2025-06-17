import ItemCard from "@components/Item/ItemCard"
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"
import { Box } from "@mui/material"
import Stack from "@mui/material/Stack"
import * as constants from "@utils/constants"
import PropTypes from "prop-types"
import "./Academic.css"

export default function Academic({ academicList }) {
  return (
    <Box>
      <Stack
        direction={"row"}
        spacing={2}
        display={"flex"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <SchoolOutlinedIcon sx={{ fontSize: constants.fontIconMain }} />
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Formación académica</h2>
      </Stack>
      <Stack className="academic--content" gap={2}>
        {academicList.map((academic) => (
          <ItemCard key={academic.id} listContent={academic} />
        ))}
      </Stack>
    </Box>
  )
}

Academic.defaultProps = {
  academicList: [],
}

Academic.propTypes = {
  academicList: PropTypes.array,
}
