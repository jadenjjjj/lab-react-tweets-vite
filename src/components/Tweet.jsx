import React from 'react';
import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';
import Message from './Message';
import Actions from './Acrion';

function Tweet(props) {
  const { name, image, handle } = props.tweet.user;
  const { timestamp, message } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={ image } />
      <div className="body">
        <div className="top">
          
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

