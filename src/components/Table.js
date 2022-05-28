import React from 'react';
// import {useTable} from "react-table/src";
import './Schedule.css';
import {tableData} from "../data/tableData";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = () => {
    // Find out how many different months are there?
    const allMonths = tableData.games.map(({date}) => date.split("/")[0]); // This line gets each month value from the games
    const months = [...new Set(allMonths)]; // This line removes the duplicated month values to find how many unique months there are.

    return (
        <div>
            {
                months.map(month =>
                    <table key={month} className="table table-striped table-hover table-bordered">
                        <TableHeader month={month}/>
                        <TableBody month={month}/>
                    </table>
                )
            }
        </div>
    );
};

export default Table;

