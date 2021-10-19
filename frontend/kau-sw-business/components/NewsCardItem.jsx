import React from 'react'

const NewsCardItem = ({link, title, postdate}) => {
  return (
    <>
      <a href={link}>{title}</a>
      <div>{postdate}</div>
    </>
  )
}

export default NewsCardItem
