import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { filterChanged } from '../actions/todos';
import Typography from '@material-ui/core/Typography';

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
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { classes } = this.props;

        return ( 
            <div className={classes.paperWrapper}>
            <Paper>
                <Typography variant='h6'>
                    Filters
                </Typography>
            </Paper>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = dispatch => bindActionCreators({ filterChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Filter));