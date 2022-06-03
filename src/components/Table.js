import React from 'react';
// import {useTable} from "react-table/src";
import './Schedule.css';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({games, titles}) => {
    return (
        <table className="table table-striped table-hover table-bordered">
            <TableHeader titles={titles}/>
            <TableBody games={games}/>
        </table>
    );
};

export default Table;

