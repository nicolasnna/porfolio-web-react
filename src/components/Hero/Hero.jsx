import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import PropTypes from "prop-types"
import ItemLink from "@components/Item/ItemLink"
import LinkedIn from "@icons/LinkedIn"
import Github from "@icons/Github"
import * as constants from "@utils/constants"
import "./Hero.css"

export default function Hero() {
  return (
    <Stack className="hero" gap={1} my={4}>
      <Stack className="hero--content" spacing={3} gap={3} alignItems="center">
        <Avatar
          alt="Photo Nicolas Norambuena from LinkedIn"
          src={`/icono-me.jpeg`}
          sx={{ width: 130, height: 130 }}
        />
        <Stack alignItems={"baseline"} direction={"column"} spacing={2} mt={4}>
          <h1 style={{ fontSize: "2.2rem", color: "#00FFFF" }}>
            Nicolás Norambuena
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            Desarrollador de <span style={{ color: "#00FFFF" }}>Software</span> con formación en ingeniería mecatrónica y experiencia en desarrollo de sistemas embebidos, robótica y aplicaciones web Full-Stack.
          </p>
        </Stack>
      </Stack>
      <Stack className="hero--links">
        <ItemLink
          icon={<LinkedIn width={"1.5em"} height={"1.5em"} />}
          text={"LinkedIn"}
          url={constants.urlLinkin}
        />
        <ItemLink
          icon={<Github width={"1.5em"} height={"1.5em"} />}
          text={"GitHub"}
          url={constants.urlGithub}
        />
      </Stack>
    </Stack>
  )
}

Hero.propTypes = {}
