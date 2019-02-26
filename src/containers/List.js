import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeader from '../components/TableHeader';
import TableData from '../components/TableData';
import TableFooter from '../components/TableFooter';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TodoModal from '../components/TodoModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchTodos, addTodo } from '../actions/todos';

const styles = (theme) => ({
    paperWrapper: {
        padding: '25px',
    },
    buttonWrapper: {
        flex: 1,
    },
    fab: {
        margin: theme.spacing.unit
    }
});

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            firstTimeLoading: true,
            pagination: {
                page: 0,
                rowsPerPage: 5
            },
            isModalOpen: false,
            headers: ['Id', 'Description', 'When?', 'Prediction', 'Remember me when?', 'Created At', 'Done', 'Options'],
            items: []
        }
    }

    componentWillMount() {
        this.props.fetchTodos()
    }


    paginationChanged = (options) => {
        const { page, rowsPerPage } = options;
        console.log(options);
        const data = this.props.todos.data.slice(page * rowsPerPage,(page + 1) * rowsPerPage)

        this.setState({ data });
    }

    handleChangePage = (e, page) => {
        if (!e) return;
        this.state.pagination.page = page;

        this.paginationChanged(this.state.pagination);
    }

    handleChangeRowsPerPage = (e) => {
        if (!e) return;
        this.state.pagination.rowsPerPage = e.target.value;

        this.paginationChanged(this.state.pagination);
    }

    handleEdit = (e) => {
        this.setState({ isModalOpen: true });
    }

    handleRemove = (id) => {
        
    }

    handleAddTodo = (e) => {
        this.setState({ isModalOpen: true });
    }

    handleFormSubmit = (data) => {
        this.props.addTodo(data);
    }

    firstPagination = (data) => {
        this.paginationChanged(this.state.pagination);
    }

    render() {
        const { classes, todos } = this.props;
        const { headers, data, pagination, isModalOpen, firstTimeLoading} = this.state;
        const { page, rowsPerPage } = pagination; 

        if (todos.data.length === 0) {
            return null
        }

        if (todos.data.length > 0 && firstTimeLoading) {
            this.setState({ firstTimeLoading: false })
            this.paginationChanged(pagination);
        }

        return (
            <div className={classes.paperWrapper}>
                <Paper>
                    <div className={classes.tableWrapper}>
                        <Table>
                            <TableHeader data={headers} title={'Todos'} />
                            <TableData 
                                data={data} 
                                handleEdit={this.handleEdit} 
                                handleRemove={this.handleRemove} />
                        </Table>
                        <TableFooter 
                            handleChangePage={this.handleChangePage} 
                            handleChangeRowsPerPage={this.handleChangeRowsPerPage} 
                            rowsPerPage={rowsPerPage} 
                            length={todos.data.length} 
                            page={page} />
                    </div>
                    <div className={classes.buttonWrapper}>
                        <Fab color="primary" onClick={this.handleAddTodo} aria-label="Add" className={classes.fab}>
                            <AddIcon />
                        </Fab>
                    </div>
                <TodoModal isOpen={isModalOpen} handleSubmit={this.handleFormSubmit}  />
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = dispatch => bindActionCreators({ fetchTodos, addTodo }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(List));