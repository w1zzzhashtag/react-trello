



import React from "react"
import ContentLoader from "react-content-loader"

const ImgTodoPlaceholder = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={180}
    viewBox="0 0 300 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="00" ry="00" width="300" height="180" />
  </ContentLoader>
)

export default ImgTodoPlaceholder