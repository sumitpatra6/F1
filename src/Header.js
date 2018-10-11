import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';


class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { classes } = this.props;
        return(
            <AppBar style = {{height : '40px', padding : '5px'}}>
                <Typography variant='title' style = {{color : 'white'}} align = 'left'>F1 Wiki</Typography>

            </AppBar>
        )
    }

};


export default Header;