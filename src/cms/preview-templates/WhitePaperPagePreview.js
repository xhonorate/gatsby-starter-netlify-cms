import React from 'react'
import PropTypes from 'prop-types'
import { WhitePaperTemplate } from '../../templates/white-paper';

const WhitePaperPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
    <WhitePaperTemplate
      title={data.title}
      subheading={data.subheading}
      anim={''}
      sections={data.sections || {}}
      relatedPapers={[]}
    />
    );
  } else {
    return <div>Loading...</div>
  }
}

WhitePaperPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default WhitePaperPagePreview
