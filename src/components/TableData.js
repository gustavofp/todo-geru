import React from 'react';
import moment from 'moment';
import { TableBody, TableCell, TableRow, IconButton, Checkbox } from '@material-ui/core';
import Icon from '@material-ui/core/Icon'

const TableItem = props => {
    const { item, handleEdit, handleRemove, handleDone } = props;

    const row = Object.keys(item).map( key => {
        return (<TableCell>{ item[key] }</TableCell>);
    });
    row.push(
        <TableCell>
            <IconButton onClick={(e) => handleEdit(item)}><Icon>edit</Icon></IconButton>
            <IconButton onClick={(e) => handleRemove(item.id)}><Icon>close</Icon></IconButton>
        </TableCell>
    );
    return (
        <TableRow>
            <TableCell>{ item.id }</TableCell>
            <TableCell>{ item.description }</TableCell>
            <TableCell>{ moment(item.when).format("DD/MM/YYYY HH:MM") }</TableCell>
            <TableCell>{ moment(item.prediction).format("DD/MM/YYYY HH:MM") }</TableCell>
            <TableCell>{ moment(item.rememberMeWhen).format("DD/MM/YYYY HH:MM") }</TableCell>
            <TableCell>{ moment.unix(item.createdAt).format("DD/MM/YYYY") }</TableCell>
            <TableCell>
                <Checkbox checked={item.done} onChange={(e) => handleDone(item)} value="checkedA" />
            </TableCell>
            <TableCell>
                <IconButton onClick={(e) => handleEdit(item)}><Icon>edit</Icon></IconButton>
                <IconButton onClick={(e) => handleRemove(item.id)}><Icon>close</Icon></IconButton>
            </TableCell>
        </TableRow>
    )
}


const renderData = (data, handleEdit, handleRemove, handleDone) => {
    return data.map(i => (<TableItem item={i} handleEdit={handleEdit} handleRemove={handleRemove} handleDone={handleDone} />))
}

const TableData = (props) => {
    const { data, handleEdit, handleRemove, handleDone } = props;

    return ( 
        <TableBody>
            { renderData(data, handleEdit, handleRemove, handleDone) }
        </TableBody>
     );
}
 
export default TableData;