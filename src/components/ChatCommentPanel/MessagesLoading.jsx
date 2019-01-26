import React from 'react';

const MessageLoading = () => {
  return (
    <React.Fragment>
      <div className="skeleton">
        <div className="skeleton__avatar"></div>
        <div className="skeleton__author"></div>
        <div className="skeleton__details"></div>
      </div>
    </React.Fragment>
  )
}

export default MessageLoading;