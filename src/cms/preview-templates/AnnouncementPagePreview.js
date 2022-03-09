import React from 'react'
import PropTypes from 'prop-types'
import { AnnouncementPageTemplate } from '../../templates/announcement-page';

const AnnouncementPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
    <AnnouncementPageTemplate
      heading={data.heading}
      subheading={data.subheading || {}}
      image={data.image || {}}
      file={data.file || {}}
    />
    );
  } else {
    return <div>Loading...</div>
  }
}

AnnouncementPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default AnnouncementPagePreview
