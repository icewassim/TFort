import React from 'react';

const Scam = ({ content }) => {
  return (
    <div key={ content._id }>
      <hr />
      <div> Header: {content.title}</div>
      <div> Content: {content.description}</div>
      <div> Date: {content.date}</div>
      <div> Votes: {content.upVotes - content.downVotes} </div>
    </div>
  );
}

export default Scam;
