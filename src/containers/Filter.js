import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { filterChanged } from '../actions/todos';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox'

const styles = (theme) => ({
    paperWrapper: {
        padding: '25px',
    },
    buttonWrapper: {
        flex: 1,
    },
    fab: {
        margin: theme.spacing.unit
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    title: {
        margin: theme.spacing.unit * 3,
    }
});
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: null,
            when: null,
            rememberMeWhen: null,
            prediction: null,
            done: false
        }
    }

    handleDescriptionChange = (e) => {

        this.props.filterChanged({ ...this.state, description: e.target.value });
    }

    handleWhenChange = (e) => {
        this.setState({ when: e.target.value });

        this.props.filterChanged({ ...this.state, when: e.target.value });
    }

    handleRememberMeWhenChange = (e) => {
        this.setState({ rememberMeWhen: e.target.value });

        this.props.filterChanged({ ...this.state, rememberMeWhen: e.target.value });
    }

    handlePredictionChange = (e) => {
        this.setState({ prediction: e.target.value });

        this.props.filterChanged({ ...this.state, prediction: e.target.value });
    }

    handleDoneChange = (e) => {
        this.setState({ done: !this.state.done })
        this.props.filterChanged({ ...this.state, done: this.state.done });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.paperWrapper}>
                <Paper>
                    <Typography variant='h6' className={classes.title}>
                        Filters
                </Typography>
                    <FormControl className={classes.formControl}>
                        <FormLabel component="legend">Description</FormLabel>
                        <TextField onChange={this.handleDescriptionChange}></TextField>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel component="legend">When?</FormLabel>
                        <TextField
                            id="when"
                            type="datetime-local"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleWhenChange}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel component="legend">Prediction</FormLabel>
                        <TextField
                            id="prediction"
                            type="datetime-local"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handlePredictionChange}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel component="legend">Remember me when?</FormLabel>
                        <TextField
                            id="remember"
                            type="datetime-local"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleRememberMeWhenChange}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel component="legend">Done</FormLabel>
                        <Checkbox
                            checked={this.state.done}
                            onChange={this.handleDoneChange}
                            color="primary"
                        />
                    </FormControl>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = dispatch => bindActionCreators({ filterChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Filter));