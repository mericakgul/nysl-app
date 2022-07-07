import {Table} from "../components/Table";
import '../components/Schedule.css';
import {tableData} from "../data/tableData";
import {useLocation, useNavigate} from "react-router-dom";
import {getHeaderTitles} from "../data/headerTitles";
import TableHeaderCell from "../components/TableHeaderCell";
import TableBody from "../components/TableBody";
import TableRow from "../components/TableRow";
import {TableHeader} from "../components/TableHeader";
import TableRowCell from "../components/TableRowCell";

const Schedule = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const allMonths = tableData.games.map(({date}) => date.split("/")[0]); // This line gets each month value from the games
    const monthNumbers = [...new Set(allMonths)]; // This line removes the duplicated month values to find how many unique months there are. It is like ['09', '10']
    const pathName = location.pathname.split('/')[1]; // The first element of the array is null since pathname starts with / and the first element is the part before first / which is empty.

    const gamePropertiesWithoutId = Object.keys(tableData.games[0])   // In this line we create an array only with the property names like [id, date, times, teams, location]
        .filter(propertyName => propertyName !== "id")     // In this line we filter the property names other than id to be able to use them in table header and to fetch the values from the data object. So now we have [date, teams, times, location]
    //  .map(columnTitle => columnTitle.charAt(0).toUpperCase() + columnTitle.slice(1));  // Making the first letters of the column titles upper case.
                                                                                            //  But we do not need this anymore since we keep the titles in headerTitles file. It'll stay here for study purposes for later.
                                                                                            //  gamePropertiesWithoutId = ['Date', 'Teams', 'Times', 'Location']
    const tableHeaderCells = (monthNumber) => getHeaderTitles(pathName, monthNumber)
        .map(title => <TableHeaderCell key={title} scope='col'>{title}</TableHeaderCell>);

    const games = (monthNumber) => tableData.games.filter(game => game.date.match(monthNumber));
    const locationName = (game) => tableData.locations.find(location => location.id === game['location'])['name']; // This line returning the full name of the location of the game for each row.
    const tableRowCells = (game) => gamePropertiesWithoutId.map(title => <TableRowCell key={title}>{title === 'location' ? locationName(game) : game[title]}</TableRowCell>); // This is the line returning the data for each cell

    return (
        <div>
            <h2>Fall Schedule</h2>
            {
                monthNumbers.map(monthNumber => {
                        return <Table key={monthNumber} className='table table-striped table-hover'>
                                    <TableHeader>
                                        <TableRow navigateTo={() => void 0}>
                                            {tableHeaderCells(monthNumber)}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {games(monthNumber).map(game =>
                                            <TableRow key={game.id} navigateTo={() => navigate(`/gamePage/${game.id}`)}>
                                                {tableRowCells(game)}
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                    }
                )
            }
        </div>
    );
};

// This is called default export
export default Schedule;

//Note: In this project children prob and nested components have been used but for a better performance AG Grid React could have been used as well.
// Here is the website for the future study purposes https://www.ag-grid.com/react-data-grid/getting-started/
// AG Grid's approach is basically creating methods in which has html tags not tiny components as I have in this project and calling these methods which are creating necessary html tags.
// Calling tiny components is a bit slower than AG Grid's approach. Below is an example of AG Grid
/*import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);

    const [columnDefs] = useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ])

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
};

render(<App />, document.getElementById('root'));*/