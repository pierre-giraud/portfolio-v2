import React, {useEffect, useState} from "react";
import Welcome from "../components/Welcome";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Controller, Scene } from 'react-scrollmagic';
import Typography from "@material-ui/core/Typography";
import AboutMyself from "../components/AboutMyself";
import IconButton from "@material-ui/core/IconButton";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import GitHubIcon from "@material-ui/icons/GitHub";
import withStyles from "@material-ui/core/styles/withStyles";
import {atom, RecoilRoot, useRecoilState} from "recoil";

const useShowOnScroll = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const top = window.pageYOffset || document.documentElement.scrollTop;
        setVisible(top > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {window.removeEventListener("scroll", handleScroll);}
    }, []);

    return visible;
};

const useStyles = makeStyles((theme) =>({
    content: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
    },
    wipedContent: {
        //overflow: 'hidden',
    },
    panel: {
       minHeight: '100vh',
    },
    white: {
        backgroundColor: 'white',
        color: 'black'
    },
    floatingContainer: {
        position: 'fixed',
        top: theme.spacing(2),
        right: theme.spacing(3),
        display: 'flex',
        flexDirection: 'row',
        zIndex: 100
    },
}));

const StyledIconButton = withStyles({
    root: {
        backgroundColor: 'white',
        marginLeft: '16px',
        '&:hover': {
            backgroundColor: 'rgb(205,205,205)',
        }
    },
    colorPrimary: {
        color: 'rgb(0,0,0)',
    },
})(IconButton);

function FloatingButtons(){
    const classes = useStyles();

    return (
        <div className={classes.floatingContainer}>
            <StyledIconButton color={"primary"} href={"../CV-Pierre-Giraud.pdf"}>
                <AttachFileIcon/>
            </StyledIconButton>

            <StyledIconButton color={"primary"} href={"http://github.com/Pierre-Giraud"} target={"_blank"}>
                <GitHubIcon/>
            </StyledIconButton>
        </div>
    )
}

const ResponsiveScene = () => {
    const classes = useStyles();

    return (
        <Scene pin duration={0}>
            <div className={classes.panel}>
                <AboutMyself/>
            </div>
        </Scene>
    )
};

export default function Home() {
    //const visible = useShowOnScroll();
    const classes = useStyles();

    return (
        <RecoilRoot>
            <div className={classes.content}>
                <FloatingButtons/>
                <div className={classes.wipedContent}>
                    <Controller globalSceneOptions={{triggerHook: 'onLeave'}}>
                        <Scene pin>
                            <div className={classes.panel}>
                                <Welcome/>
                            </div>
                        </Scene>

                        <Scene pin duration={"1%"}>
                            <div className={classes.panel}>
                                <AboutMyself/>
                            </div>
                        </Scene>

                        <Scene pin>
                            <div className={classes.panel + ' ' + classes.white}>
                                <Typography variant={"h2"} component={"h2"}>
                                    Scène 3
                                </Typography>
                            </div>
                        </Scene>
                        <Scene pin>
                            <div className={classes.panel + ' ' + classes.white}>
                                <Typography variant={"h2"} component={"h2"}>
                                    Scène 4
                                </Typography>
                            </div>
                        </Scene>
                        <Scene pin>
                            <div className={classes.panel + ' ' + classes.white}>
                                <Typography variant={"h2"} component={"h2"}>
                                    Scène 5
                                </Typography>
                            </div>
                        </Scene>
                        <Scene pin>
                            <div className={classes.panel + ' ' + classes.white}>
                                <Typography variant={"h2"} component={"h2"}>
                                    Scène 6
                                </Typography>
                            </div>
                        </Scene>
                    </Controller>
                </div>
            </div>
        </RecoilRoot>
    )
}
