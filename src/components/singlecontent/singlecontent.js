import React from 'react'
import {img_300, unavailable} from "../config/config"
import "./singlecontent.css"

const SingleContent = (
    {
        id,
        poster,
        title,
        date,
        media_type,
        vote_average,
    }) => {
  return (
    <div>
   <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  )
}

export default SingleContent
