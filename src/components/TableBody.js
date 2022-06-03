import React from 'react';
import TableRow from "./TableRow";


const TableBody = ({games}) => {
    return (
        <tbody>
        {
            games
                .map(game => {
                    return (
                        <TableRow key={game.id} game={game}/>
                    )
                })
        }
        </tbody>
    );
};

export default TableBody;