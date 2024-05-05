import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Badge from '../Badge/Badge'
import PropTypes from 'prop-types'
import ItemLink from '../Item/ItemLink'
import LinkedIn from '../../icons/LinkedIn'
import Github from '../../icons/Github'
import Gmail from '../../icons/Gmail'
import * as constants from '../../utils/constants'

export default function Hero({ urlAvatar, urlRef }) {
  return (
    <section>
      <Stack direction='row' spacing={3} alignItems='center' mt={8}>
        <Avatar 
          alt="Photo Nicolas Norambuena from LinkedIn"
          src={urlAvatar} 
          sx={{ width: 70, height: 70 }}/>
        <Badge text={constants.textBadge} url={urlRef}/>
      </Stack>
      <Stack alignItems={'baseline'} direction={'column'} spacing={2} mt={4}>
        <h1 style={{fontSize: "xx-large"}}>
            Hola, soy Nicolás Norambuena
        </h1>
        <p style={{fontSize: "1.2em"}}>
          Ingeniero Civil Mecatrónico egresado y nuevo en el Desarrollo Web. De Chile. Apasionado en el desarrollo de tecnología y aplicaciones.
        </p>
      </Stack>
      <div style={{
        margin: "2em 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "2em",
        flexWrap: "wrap"
      }}>
        <ItemLink icon={<LinkedIn width={'1.5em'} height={'1.5em'}/>} text={'LinkedIn'} url={constants.urlLinkin}/>
        <ItemLink icon={<Github width={'1.5em'} height={'1.5em'}/>} text={'GitHub'} url={constants.urlGithub}/>
        <ItemLink icon={<Gmail width={'1.5em'} height={'1.5em'}/>} text={'Gmail'} url={"mailto:nicolas.norambuenaa@gmail.com"}/>
      </div>
    </section>
  )
}

Hero.propTypes = {
  urlAvatar: PropTypes.string,
  urlRef: PropTypes.string
}
