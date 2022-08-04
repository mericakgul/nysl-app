import React from 'react';

const Picture = ({children}) => {
    return children ?
        <div className="row">
            {children}
        </div> :
        <p>There is not a picture for this game yet. Go upload and be the first one!</p>
};

export default Picture;