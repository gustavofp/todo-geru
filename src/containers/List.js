import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import TableHeader from '../components/TableHeader';
import TableData from '../components/TableData';

const styles = {
    paperWrapper: {
        padding: '25px'
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: ['Description', 'When?', 'Prediction', 'Remember me when?', 'Created At', 'Options'],
            items: [
                { description: 'Make Bed', when: '22/10/2019', prediction: '23/10/2019', remember: '10/10/2019', createAt: '09/10/2019'},
                { description: 'Make Bed', when: '22/10/2019', prediction: '23/10/2019', remember: '10/10/2019', createAt: '09/10/2019'},
                { description: 'Make Bed', when: '22/10/2019', prediction: '23/10/2019', remember: '10/10/2019', createAt: '09/10/2019'},
                { description: 'Make Bed', when: '22/10/2019', prediction: '23/10/2019', remember: '10/10/2019', createAt: '09/10/2019'}
            ]
        }
    }
    render() {
        const { classes } = this.props;
        const { headers, items } = this.state;
        return (
            <div className={classes.paperWrapper}>
                <Paper>
                    <div className={classes.tableWrapper}>
                        <Table>
                            <TableHeader data={headers} title={'Todos'} />
                            <TableData data={items} />
                        </Table>
                        <
                    </div>
                </Paper>
            </div>
        );
    }
}

export default (withStyles(styles)(List));