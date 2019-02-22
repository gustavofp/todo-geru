import React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';

const TableItem = props => {
    const { item } = props;

    return (
        <TableRow>
            { 
                Object.keys(item).map( key => {
                    return (<TableCell>{ item[key] }</TableCell>);
                }) 
             }
        </TableRow>
    )
}


const renderData = data => {
    return data.map(i => (<TableItem item={i} />))
}

const TableData = (props) => {
    const { data } = props;

    return ( 
        <TableBody>
            { renderData(data) }
        </TableBody>
     );
}
 
export default TableData;