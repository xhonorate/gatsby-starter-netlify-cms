import React from 'react'
import PropTypes from 'prop-types'
import { WhitePapersPageTemplate } from '../../templates/white-papers';

const WhitePapersPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
    <WhitePapersPageTemplate
      heading={data.heading}
      subheading={data.subheading || {}}
      title={data.title || {}}
      body={data.body || {}}
    />
    );
  } else {
    return <div>Loading...</div>
  }
}

WhitePapersPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default WhitePapersPreview
