import React from 'react';
import {tableData} from "../data/tableData";
import {useParams, useLocation} from "react-router-dom";
import TableHeader from "./TableHeader";

const GameTable = () => {
    const id = useParams().id;
    const getGameObjectWithId = tableData.games.filter(game => game.id === id)[0]; // This line will return a game object which has the same id in the param.
    const getLocationObject = tableData.locations.filter(location => location.id === getGameObjectWithId.location)[0];
    console.log('gameWithId', getGameObjectWithId);
    console.log('getLocationObject', getLocationObject);
    const location = useLocation();
    const pathName = location.pathname.split('/')[1]; // The first element of the array is null since pathname starts with / and the first element is the part before first / which is empty.
    console.log('pathName', pathName);
    return (
        <table className="table table-bordered">
            <TableHeader pathName={pathName}/>
            <tbody>
            <tr>
                <td className="date" align="center">{getGameObjectWithId['date']}</td>
                <td align="center">{getGameObjectWithId['teams']}</td>
                <td align="center">{getLocationObject['name']}</td>
                <td align="center">{getGameObjectWithId['time']}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default GameTable;