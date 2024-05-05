import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import useVisible from '../hooks/useVisible'
import Fab from '@mui/material/Fab'
import Stack from '@mui/material/Stack'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'
import ItemProject from '../components/Item/ItemProject'
import * as constants from '../utils/constants'

const ProjectsPage = () => {
  const visibleState = useVisible('hidden')

  return (
    <div>
      <NavBar />
      <section>
        <Stack direction={'row'} spacing={2} display={'flex'} alignItems={'center'} justifyItems={'center'}>
          <img style={{width: "2em", height: "2.3em"}} src='/favicon.svg'/>
          <h1>Proyectos</h1>
        </Stack>
        {constants.projectList.map((project) => (
          <ItemProject key={project.id} project={project}/>
        ))}
      </section>
      <Fab size='big' 
        sx={{ background:'#6633ee', 
          position:'fixed', 
          bottom: 50, 
          right: 80, 
          visibility: visibleState,
          ":hover": {
            background:'#6633ee',
            opacity: 0.9,
          }}}
          onClick={()=> {
            window.scroll({
              top: 0,
              behavior: 'smooth'
            })
          }}
           >
        <UpIcon sx={{color: '#E0FFFF'}}/>
      </Fab>
      <Footer />
    </div>
  )
}
export default ProjectsPage
