import Stack from "@mui/material/Stack"
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined"
import "./AboutMe.css"
import * as constants from "../../utils/constants"

export default function AboutMe() {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Stack
        id="AboutMe"
        direction={"row"}
        display={"flex"}
        alignSelf={"start"}
        justifyItems={"center"}
        spacing={2}
      >
        <PersonSearchOutlinedIcon sx={{ fontSize: constants.fontIconMain }} />
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Sobre mí</h2>
      </Stack>
      <div className="cardAbout">
        <div className="textAbout">
          <p>
            Hola, soy Nicolás Norambuena, desarrollador de software e{" "}
            <strong>Ingeniero Civil en Mecatrónica</strong>. Me especializo en
            diseñar y construir soluciones tecnológicas escalables, combinando
            mi pensamiento analítico con mi experiencia en desarrollo web y
            automatización.
          </p>
          <p>
            Mi trayectoria profesional me ha permitido trabajar en todo el ciclo
            de vida del software. He desarrollado desde sistemas de robótica
            autónoma e IoT —integrando ROS, C++ y microcontroladores— hasta
            plataformas web full-stack orientadas a la optimización de procesos
            empresariales.
          </p>
          <p>
            Actualmente, enfoco mi carrera en el desarrollo de software y la
            infraestructura cloud. Tengo experiencia sólida construyendo y
            consumiendo APIs, automatizando la extracción de datos con Python y
            gestionando despliegues. Además, domino el desarrollo frontend con
            React y TypeScript, lo que me permite entregar soluciones integrales
            de principio a fin.
          </p>
          <p>
            Te invito a explorar mis proyectos y repositorios en mi{" "}
            <a
              href={constants.urlGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="cardPhoto">
          <img
            alt="Nicolas Norambuena"
            width={"250em"}
            height={"100%"}
            src="/photo-me.webp"
          ></img>
        </div>
      </div>
    </Stack>
  )
}
