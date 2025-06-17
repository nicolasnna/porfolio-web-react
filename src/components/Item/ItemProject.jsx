import "./ItemProject.css"
import skillsArray from "@utils/skillsArray"
import Stack from "@mui/material/Stack"
import Github from "@icons/Github"
import Link from "@icons/Link"
import { Carousel } from "../Carousel/Carousel"

export default function ItemProject({ project }) {
  return (
    <div
      id={project.idRouter}
      style={{
        backgroundColor: "rgb(255, 255, 255, 0.1)",
        padding: "2%",
        borderRadius: "20px",
        margin: "2rem 0",
      }}
    >
      <div className="itemProject">
        {!Array.isArray(project.img) &&
          <img style={{ width: "auto", maxHeight: "400px" }} src={project.img} />
        }
        {Array.isArray(project.img) &&
          <Carousel
            slides={project.img}
            slidesPerView={1}
            spacing={0}
            renderSlide={(image) => (
              <img style={{ width: "auto", maxHeight: "400px" }} src={image} loading="lazy" />
            )}
          />
        }
        <div className="contentProject">
          <Stack
            display={"flex"}
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
            alignItems={"center"}
          >
            <h2>{project.title}</h2>
            {project.url && <a href={project.url} target="_blank">
              <Github width="2em" height="2em" />
            </a>}
            {project.deployUrl && (
              <a href={project.deployUrl} target="_blank" className="linkDemo">
                <Link width="2.5em" />
                <span style={{ fontSize: "1.3rem" }}>Demo</span>
              </a>
            )}
          </Stack>
          <Stack gap={1.5}>
            {project.description.map((content, key) => (
              <p key={key} style={{ fontSize: "1rem" }}>
                {content}
              </p>
            ))}
          </Stack>
          <Stack display="flex" direction="row" flexWrap="wrap" gap={2}>
            {project.skills.map(
              (skill) =>
                skillsArray.find((element) => element.name == skill)?.element
            )}
          </Stack>
        </div>
      </div>
    </div>
  )
}
