import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1,
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: "linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url('/welcomeBgImage.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'grayscale(100%)',
        color: 'white',
    },
    grid1: {
        width: 'fit-content'
    },
    textContainer: {
        '&>*': {
            opacity: 0,
            transform: 'translateX(-3rem)',
        }
    },
    anim: {
        '&>*': {
            opacity: 1,
            transform: 'translateX(0)',
            '&:first-child': {
                transition: 'opacity 1s, transform 1s',
            },
            '&:nth-child(2)': {
                transition: 'opacity 1s 1s, transform 1s 1s',
            },
            '&:last-child': {
                transition: 'opacity 1s 2s, transform 1s 2s',
            }
        },
    },
    persoOrdi: {
        width: '100%',
        height: '100%',
    }
}));

export default function Welcome(){
    const classes = useStyles();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return(
        <>
            <div className={classes.container}>
                <Grid container justify={"center"} alignItems={"center"}>
                    <Grid item sm={8} md={6}>
                        <Container className={classes.grid1}>
                            <div className={`${classes.textContainer} ${visible ? classes.anim : ''}`}>
                                <Typography variant={"h1"} component={"h2"}>
                                    Salut,
                                </Typography>
                                <Typography variant={"h1"} component={"h2"}>
                                    Je suis Pierre Giraud,
                                </Typography>
                                <Typography variant={"h2"} component={"h2"}>
                                    je suis développeur web junior
                                </Typography>
                            </div>
                        </Container>
                    </Grid>
                    <Grid item sm={8} md={6}>
                        <Container>
                            <img className={classes.persoOrdi} src={"/perso_ordi.png"} alt={""}/>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}