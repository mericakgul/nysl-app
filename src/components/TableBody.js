import React from 'react';
import {useNavigate} from "react-router-dom";
import {tableData} from "../data/tableData";

const columnTitles = Object.keys(tableData.games[0])   // In this line we create an array only with the property names like [id, date, times, teams, location]
    .filter(propertyName => propertyName !== "id")     // In this line we filter the property names other than id to be able to use them in table header and to fetch the values from the data object. So now we have [date, teams, times, location]
    // .map(columnTitle => columnTitle.charAt(0).toUpperCase() + columnTitle.slice(1));  // Making the first letters of the column titles upper case.
// columnTitles = ['Date', 'Teams', 'Times', 'Location']

const TableBody = ({month}) => {
    const navigate = useNavigate();

    const gamesOfMonth =  tableData.games.filter(game => {
        return game.date.match(month);
    });
    console.log("gamesOfMonth", gamesOfMonth);

    return (
        <tbody>
        {
            gamesOfMonth
                .map(game => {
                    const locationName = tableData.locations.filter(location => location.id === game['location'])[0]['name']; // filter methods returns an array with one object because we are looking with id, that's why we get the zeroth element of the array and afterwards name property is fetched.
                    return (
                        <tr key={game.id} onClick={() => navigate(`/games/${game.id}`)}>
                            {
                                columnTitles.map(title => {
                                    return <td key={title}>{title === 'location' ? locationName : game[title]}</td>
                                })
                            }
                        </tr>
                    )
                })
        }
        </tbody>
    );
};

export default TableBody;