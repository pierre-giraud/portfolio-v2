import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from "@material-ui/core/Hidden";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
        },
    },
    appBarButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Portfolio - Pierre Giraud
                    </Typography>
                    <Hidden smDown implementation={"css"}>
                        <Button
                            startIcon={<AttachFileIcon/>}
                            variant={"contained"}
                            color={"secondary"}
                            href={"../CV-Pierre-Giraud.pdf"}
                            target={"_blank"}
                            className={classes.appBarButton}
                        >
                            Mon CV
                        </Button>
                        <Button
                            startIcon={<GitHubIcon/>}
                            variant={"contained"}
                            color={"secondary"}
                            href={"http://github.com/Pierre-Giraud"}
                            target={"_blank"}
                            className={classes.appBarButton}
                        >
                            Github
                        </Button>
                    </Hidden>

                    <Hidden mdUp implementation={"css"}>
                        <IconButton href={"../CV-Pierre-Giraud.pdf"} target={"_blank"}>
                            <AttachFileIcon style={{color: "white"}}/>
                        </IconButton>
                        <IconButton href={"http://github.com/Pierre-Giraud"} target={"_blank"}>
                            <GitHubIcon style={{color: "white"}}/>
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    );
}