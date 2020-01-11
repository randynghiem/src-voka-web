import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SearchListing = ({ videos }) => {
  return (
    <ul className="list-group col-md-8">
      {videos &&
        videos.map(v => (
          <li className="list-group-item" key={v.etag}>
            <div className="video-list media">
              <div className="media-left mr-4">
                <Link to={`/dictation/${v.id.videoId}`}>
                  <img
                    src={v.snippet.thumbnails.default.url}
                    alt=""
                    className="media-object"
                  />
                </Link>
              </div>
              <div className="media-body">
                <div className="media-heading">
                  <a href={`https://www.youtube.com/embed/${v.id.videoId}`}>
                    {v.snippet.title}
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default connect(
  state => ({
    videos: state.ytSearch.videos
  }),
  null
)(SearchListing);
