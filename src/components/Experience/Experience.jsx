import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import { Stack } from '@mui/material'
import TimelineExperience from './TimelineExperience'
import PropTypes from 'prop-types'
import * as constants from '../../utils/constants'

export default function Experience({ experienceList }) {
  return (
    <section className="sectionExperience">
      <Stack direction={'row'} spacing={2} display={'flex'} alignItems={'center'} justifyItems={'center'}>
        <BusinessCenterOutlinedIcon sx={{ fontSize: constants.fontIconMain}}/>
        <h1>
          Experiencia laboral
        </h1>
      </Stack>
      <TimelineExperience experienceList={experienceList}/>
    </section>
  )
}

Experience.defaultProps = {
  experienceList: []
}

Experience.propTypes = {
  experienceList: PropTypes.array,
}
