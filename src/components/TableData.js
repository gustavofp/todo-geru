import React from 'react';
import { TableBody, TableCell, TableRow, IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon'

const TableItem = props => {
    const { item, handleEdit, handleRemove } = props;

    const row = Object.keys(item).map( key => {
        return (<TableCell>{ item[key] }</TableCell>);
    });
    row.push(
        <TableCell>
            <IconButton onClick={handleEdit.bind(item.id)}><Icon>edit</Icon></IconButton>
            <IconButton onClick={handleRemove.bind(item.id)}><Icon>close</Icon></IconButton>
        </TableCell>
    );
    return (
        <TableRow>
            { 
                row
             }
        </TableRow>
    )
}


const renderData = (data, handleEdit, handleRemove) => {
    return data.map(i => (<TableItem item={i} handleEdit={handleEdit} handleRemove={handleRemove} />))
}

const TableData = (props) => {
    const { data, handleEdit, handleRemove } = props;

    return ( 
        <TableBody>
            { renderData(data, handleEdit, handleRemove) }
        </TableBody>
     );
}
 
export default TableData;