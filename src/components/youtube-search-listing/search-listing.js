import React from "react";
import { Link } from "react-router-dom";
import DecodedEntity from './decoded-entity';
import { distanceToBottom } from '../../utils/dom';
import _ from 'lodash';

export default function ({ videos, onFiniteScroll }) {

  React.useEffect(() => {
    // purely to emit events when hitting the bootom of the page
    document.addEventListener('scroll', _.debounce(() => {
      // check if the page is scrolled to the bottom
      if (distanceToBottom() < 50) {
        onFiniteScroll();
      }
    }, 100));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    videos && <ul className="list-group list-group-flush col-md-8 mb-3">
      {videos.map(v => (
        <li className="list-group-item app-yt-item" key={v.etag}>
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
                <Link to={`/dictation/${v.id.videoId}`}>
                  <DecodedEntity>{v.snippet.title}</DecodedEntity>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}