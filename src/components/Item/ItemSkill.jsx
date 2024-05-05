import './ItemSkill.css'
import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'

export default function ItemSkill({ icon, text }) {
  return (
    <div className='itemSkill'>
      <Stack direction={'row'} display={'flex'} zIndex={10} justifyItems={'center'} alignItems={'center'} padding={'0.1em 0.4em'}>{icon}<h4>{text}</h4></Stack>
    </div>
  )
}

ItemSkill.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string
}