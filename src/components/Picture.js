import React from 'react';

const Picture = ({imageUrl}) => {
           return imageUrl ?
               (<div>
                    <img src={imageUrl} alt="uploadedImage" style={{height: 150}}/>
                </div>) :
               (<p>Loading...</p>)
};

export default Picture;