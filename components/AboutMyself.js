import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>({
    root: {
        minHeight: '100vh',
        backgroundColor: 'rgb(28,28,28)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        marginTop: theme.spacing(5)
    }
}));

export default function AboutMyself(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant={"h1"} component={"h2"}>
                    Qui suis-je ?
                </Typography>
            </div>
        </div>
    )
}