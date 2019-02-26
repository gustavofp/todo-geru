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
import { fetchTodos, addTodo, removeTodo, editTodo } from '../actions/todos';

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
            edit: null,
            data: [],
            firstTimeLoading: true,
            changedList: false,
            pagination: {
                page: 0,
                rowsPerPage: 5
            },
            isModalOpen: false,
            headers: ['Description', 'When?', 'Prediction', 'Remember me when?', 'Created At', 'Done', 'Options'],
            items: []
        }
    }

    componentWillMount() {
        this.props.fetchTodos()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.todos.data !== this.props.todos.data) {
            this.setState({ firstTimeLoading: true })
        }
    }

    paginationChanged = (options) => {
        const { page, rowsPerPage } = options;

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

    handleEdit = (item) => {
        this.setState({ isModalOpen: true, edit: item });
    }

    handleDone = (item) => {
        const data = { ...item, done: !item.done};

        this.props.editTodo(data);
    }

    handleRemove = (id) => {
        this.props.removeTodo(id);
    }   

    handleAddTodo = (e) => {
        this.setState({ isModalOpen: true });
    }

    handleFormSubmit = (data) => {
        if (this.state.edit) {
            data.id = this.state.edit.id;
            this.props.editTodo(data);
        } else {
            this.props.addTodo(data);
        }
    }

    handleModalClose = () => {
        this.setState({ isModalOpen: false, edit: null });
        this.props.fetchTodos();
    }

    firstPagination = (data) => {
        this.paginationChanged(this.state.pagination);
    }

    render() {
        const { classes, todos } = this.props;
        const { headers, data, pagination, isModalOpen, firstTimeLoading, edit, changedList } = this.state;
        const { page, rowsPerPage } = pagination; 

        if (todos.data.length === 0) {
            return null
        }

        if (todos.data.length > 0 && firstTimeLoading) {
            this.setState({ firstTimeLoading: false, edit: null })
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
                                handleRemove={this.handleRemove}
                                handleDone={this.handleDone}
                                />
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
                <TodoModal isOpen={isModalOpen} editData={edit} handleClose={this.handleModalClose} handleSubmit={this.handleFormSubmit}  />
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = dispatch => bindActionCreators({ fetchTodos, addTodo, removeTodo, editTodo }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(List));