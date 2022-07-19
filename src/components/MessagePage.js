import React from 'react';

const MessagePage = ({gameId}) => {
    return (
        <>
            <h2>Messages of game {gameId}</h2>
            <div className="list-group">
                <div className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex">
                            <h5 className="mb-1">Author Name</h5>
                            <small className="text-muted">(email)</small>
                        </div>
                        <small>Message sent time</small>
                    </div>
                    <p className="mb-1">Message content</p>
                </div>
                <div className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex">
                            <h5 className="mb-1">Author Name</h5>
                            <small className="text-muted">(email)</small>
                        </div>
                        <small>Message sent time</small>
                    </div>
                    <p className="mb-1">Message content</p>
                </div>
                <div className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex">
                            <h5 className="mb-1">Author Name</h5>
                            <small className="text-muted">(email)</small>
                        </div>
                        <small>Message sent time</small>
                    </div>
                    <p className="mb-1">Message content</p>
                </div>
            </div>
        </>
    );
};

export default MessagePage;