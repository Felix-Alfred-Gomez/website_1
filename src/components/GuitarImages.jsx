import React from 'react';

const GuitarImages = ({ source, title, caption }) => {
    return (
        <div className="guitar-image-container">
            <img 
                className="guitar-image" 
                src={source} 
                alt={title || 'Guitar image'} 
                style={{ display: 'block', margin: '0 auto' }} 
            />
            <h3 className="guitar-image-title">{title}</h3>
            <p className="guitar-image-caption">{caption}</p>
        </div>
    );
};

export default GuitarImages;