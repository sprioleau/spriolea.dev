/* eslint-disable react/no-danger */

const StructuredData = ({ data }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)

export default StructuredData;