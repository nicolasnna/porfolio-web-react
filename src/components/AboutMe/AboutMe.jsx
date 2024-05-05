import Stack from "@mui/material/Stack";
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined'
import './AboutMe.css'
import * as constants from '../../utils/constants'

export default function AboutMe() {
  return (
    <section>
      <Stack id='AboutMe' direction={'row'} display={'flex'} alignItems={'center'} justifyItems={'center'} spacing={2}>
        <PersonSearchOutlinedIcon sx={{ fontSize: constants.fontIconMain }}/>
        <h1>Sobre mí</h1>
      </Stack>
      <div className='cardAbout'>
        <div className="textAbout">
          <p>
            Me llamo Nicolás Norambuena, soy un <strong>Ingeniero Mecatrónico</strong> recién egresado y nuevo en el desarrollo web. Siempre me ha llamado la atención la programación en la electrónica (orientada a robótica) y en el desarrollo de aplicaciones.
          </p>
          <p>
            Actualmente estoy profundizando en el desarrollo web realizando distintos proyectos propios, los que puedes ver en mi <a href={constants.urlGithub} target="_blank">Github</a>.
          </p>
        </div>
        <div className="cardPhoto">
          <img alt='Photo Nicolas Norambuena' width={'250em'} height={'100%'} src='/photo-me.webp'></img>
        </div>
      </div>
    </section>
  )
}