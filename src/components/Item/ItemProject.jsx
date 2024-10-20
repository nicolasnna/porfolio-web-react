import "./ItemProject.css"
import skillsArray from "@utils/skillsArray"
import Stack from "@mui/material/Stack"
import Github from "@icons/Github"
import Link from "@icons/Link"

export default function ItemProject({ project }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(255, 255, 255, 0.1)",
        padding: "3%",
        borderRadius: "20px",
        margin: "2em 0",
      }}
    >
      <div className="itemProject">
        <a href={project.url} target="_blank">
          <img src={project.img} />
        </a>
        <div className="contentProject">
          <Stack
            display={"flex"}
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
            alignItems={"center"}
          >
            <h1>{project.title}</h1>
            <a href={project.url} target="_blank">
              <Github width="2em" height="2em" />
            </a>
            {project.deployUrl && (
              <a href={project.deployUrl} target="_blank">
                <Link width="2.5em" />
              </a>
            )}
          </Stack>
          <Stack gap={1.5}>
            {project.description.map((content, key) => (
              <p key={key} style={{ fontSize: "1.12em" }}>
                {content}
              </p>
            ))}
          </Stack>
          <Stack display="flex" direction="row" flexWrap="wrap" gap={2}>
            {project.skills.map(
              (skill) =>
                skillsArray.find((element) => element.name == skill).element
            )}
          </Stack>
        </div>
      </div>
    </div>
  )
}
