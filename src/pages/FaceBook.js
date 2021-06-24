import React from "react";
import ShareLink from 'react-facebook-share-link';

const FaceBook = () => (
  <div>
    <h1 className="title is-1">This is the Facebook Page</h1>
    <ShareLink link='https://your-site.com/some-page'>
        {link => (
            <a href={link} target='_blank'>Share this on Facebook</a>
        )}
  </ShareLink>
  </div>
);

export default FaceBook;