import React, { Component } from 'react';
import moment from 'moment';
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
    modal: {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
      },
  });

class TodoModal extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            description: null,
            when: moment().format('YYYY-MM-DDTHH:mm'),
            rememberMeWhen: moment().format('YYYY-MM-DDTHH:mm'),
            prediction: moment().format('YYYY-MM-DDTHH:mm')
         }
    }

    handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    }

    handleWhenChange = (e) => {
        this.setState({ when: e.target.value });
    }

    handleRememberMeWhenChange = (e) => {
        this.setState({ rememberMeWhen: e.target.value });
    }

    handlePredictionChange = (e) => {
        this.setState({ prediction: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleSubmit(this.state)
    }

    render() { 
        const { isOpen, classes } = this.props;
        const { when, rememberMeWhen, prediction } = this.state
        console.log(when);

        return ( 
            <Modal open={isOpen}>
                <div className={classes.paper}>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl className={classes.formControl}>
                            <FormLabel component="legend">Description</FormLabel>
                            <TextField onChange={this.handleDescriptionChange}></TextField>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <FormLabel component="legend">When?</FormLabel>
                            <TextField
                                id="when"
                                type="datetime-local"
                                defaultValue={when}
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
                                defaultValue={prediction}
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
                                defaultValue={rememberMeWhen}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={this.handleRememberMeWhenChange}
                            />
                        </FormControl>
                        <FormControl style={{ display: 'block' }} className={classes.formControl}>
                            <Button type="submit" color="primary" variant="contained" className={classes.button}>
                                Submit
                            </Button>
                        </FormControl>
                    </form> 
                </div>
            </Modal>
        );
    }
}
 
export default withStyles(styles)(TodoModal);