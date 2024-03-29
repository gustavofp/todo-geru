import React from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    }
};


const Header = props => {
    const { classes } = props;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Got2Do
                </Typography>
            </Toolbar>
        </AppBar>

    );
}

export default withStyles(styles)(Header);