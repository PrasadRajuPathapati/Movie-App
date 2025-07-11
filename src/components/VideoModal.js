import React from 'react';
import './VideoModal.css';

const VideoModal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="100%"
          height="400"
          src={videoUrl}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default VideoModal;
