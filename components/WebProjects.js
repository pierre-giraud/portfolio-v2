import React from "react";
import Typography from "@material-ui/core/Typography";
import Carousel from "./Carousel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import StudiesDisplayer from "./StudiesDisplayer";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor: 'rgb(80,80,80)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselContainer: {
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
    },
    title: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        textAlign: 'center',
    },
    perso: {
        width: '100%',
        height: '100%',
    },
}));

export default function WebProjects(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth={false}>
                <div className={classes.title}>
                    <Typography variant={"h1"} component={"h2"}>
                        Projets Web
                    </Typography>
                </div>

                <Grid container justify={"center"} alignItems={"center"}>
                    <Grid item sm={8} md={6}>
                        <Container>
                            <Typography>
                                Description de la partie ...
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item sm={8} md={6}>
                        <Container>
                            <img className={classes.perso} src={"/img/persos/perso_surf.png"} alt={""}/>
                        </Container>
                    </Grid>
                </Grid>

                <div className={classes.carouselContainer}>
                    <Carousel/>
                </div>
            </Container>
        </div>
    )
}