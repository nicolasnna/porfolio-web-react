import Timeline from "@mui/lab/Timeline"
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import ItemCard from "@components/Item/ItemCard"
import PropTypes from "prop-types"
import "./TimelineExperience.css"

export default function TimelineExperience({ experienceList }) {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        mt: 2,
        mx: 6,
      }}
      className="timeline"
    >
      {experienceList.map((experience) => (
        <TimelineItem key={experience.id}>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              ml: 2,
              px: 0,
              py: 1,
            }}
          >
            <ItemCard listContent={experience} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

TimelineExperience.propTypes = {
  experienceList: PropTypes.array,
}
