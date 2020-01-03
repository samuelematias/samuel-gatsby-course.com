import React from "react"

import Post from "../Post"

const Hit = ({ hit }) => (
  <Post
    slug={hit.fields.slug}
    background={hit.background}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
  />
)

export default Hit
