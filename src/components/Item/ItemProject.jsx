import './ItemProject.css'
import skillsArray from '../../utils/skillsArray'
import { Stack } from '@mui/material'
import Github from '../../icons/Github'

export default function ItemProject({ project }) {
  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255, 0.1)", padding: "3%", borderRadius: "20px", margin: "2em 0"}}>
      <div className='itemProject'>
        <img src={project.img}/>
        <div className='contentProject'>
          <Stack display={'flex'} direction={'row'} flexWrap={'wrap'} gap={2}>
            <h1>{project.title}</h1>
            <a href={project.url} target='_blank'><Github width='2em' height='auto'/></a>
          </Stack>
          {project.description.map((content, key) => (
            <p key={key}>{content}</p>
          ))}
          <Stack display='flex' direction='row' flexWrap='wrap' gap={2}>
            {project.skills.map((skill) => (
              skillsArray.find((element) => element.name == skill).element
            ))}
          </Stack>
        </div>
      </div>
    </div>
  )
}