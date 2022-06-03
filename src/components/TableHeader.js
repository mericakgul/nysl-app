import React from 'react';

const TableHeader = ({titles}) => {
    return (
        <thead>
        <tr>
            {
                titles.map(title => <th key={title} scope="col">{title}</th>)
            }
        </tr>
        </thead>
    );
};

export default TableHeader;