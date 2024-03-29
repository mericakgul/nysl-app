import React from 'react';
import MessagesPage from "./MessagesPage";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../utilities/firebase";
import {useLocation, useParams} from "react-router-dom";

// We needed this wrapper component to be able to get pathName and use it in a logic as below.
// If we had called MessagesPage component in App.js file then it wouldn't have been possible to fetch the pathname
// since App.js component is not in <Routes> so it always returns undefined. That's why we created this wrapper component
// for MessagesPage component and put the logic including the pathname here.
const MessagesPageWrapper = () => {
    const [user] = useAuthState(auth);
    const pathName = useLocation().pathname;
    const gameId = useParams().id;
    const messagesPagePathName = pathName.split('/')[3] || ''; // This line is to be able to see if the last part of the message page
                                                                        // which is 'messages' exists out of the whole messages page path which is '/gamePage/:id/messages'
                                                                        // If this part of the path does not exist then we are not calling MessagesPage component because if 'messages' part of the path is not exist then it means user is not on messages page.
    return (
        <>
            {
                user && messagesPagePathName ?
                <MessagesPage gameId={gameId} user={user}/> :
                <h4 className="alert-warning">Please sign in to be able to see the messages and post new ones!</h4>
            }
        </>
    );
};

export default MessagesPageWrapper;