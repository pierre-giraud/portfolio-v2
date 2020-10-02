import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Project from "./projects/Project";
import ProjectDescription from "./projects/ProjectDescription";
import ProjectDetails from "./projects/ProjectDetails";
import ProjectTools from "./projects/ProjectTools";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import {projectPortfolioV2Description} from "../utils/strings";

const useStyles = makeStyles((theme) =>({
    arrow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgb(225,225,225)',
        color: theme.palette.secondary.main,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    arrowLeft: {
        left: -theme.spacing(5),
    },
    arrowRight: {
        right: -theme.spacing(5),
    },
    arrowLeftShape: {
        transform: 'translateX(5px)'
    },
    tools: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    avatar: {
        backgroundColor: "white !important"
    }
}));

const PrevArrow = ({onClick}) => {
    const classes = useStyles();

    return (
        <div
            className={classes.arrow + ' ' + classes.arrowLeft}
            onClick={onClick}
        >
            <ArrowBackIosIcon className={classes.arrowLeftShape} fontSize={"large"}/>
        </div>
    )
};

const NextArrow = ({onClick}) => {
    const classes = useStyles();

    return (
        <div
            className={classes.arrow + ' ' + classes.arrowRight}
            onClick={onClick}
        >
            <ArrowForwardIosIcon fontSize={"large"}/>
        </div>
    )
};

export default function Carousel(){
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Project
                        name={"Mon Portfolio - Version 2"}
                        subheader={"Septembre 2020"}
                        image={"../portfoliov2-img.jpg"}
                        imageSubtitle={"Accueil du portfolio"}>
                        <ProjectDescription>{projectPortfolioV2Description}</ProjectDescription>
                        <ProjectDetails context={"Personnel"} team={1} sources={"http://github.com/Pierre-Giraud/portfolio-v2"}/>
                        <ProjectTools>
                            <Chip className={classes.tools} color="primary" label={"React JS"} avatar={<Avatar className={classes.avatar} src="../react-icon.svg" />} />
                            <Chip className={classes.tools} color="primary" label={"Next JS"} avatar={<Avatar className={classes.avatar} src="../nextjs-logo.png" />} />
                            <Chip className={classes.tools} color="primary" label={"Material UI"} avatar={<Avatar className={classes.avatar} src="../material-ui-logo.png" />} />
                            <Chip className={classes.tools} color="primary" label={"Netlify"} avatar={<Avatar className={classes.avatar} src="../netlify-logo.png" />} />
                        </ProjectTools>
                    </Project>
                </div>
                <div>
                    <Typography variant={"h3"}>
                        Test 1
                    </Typography>
                    <Typography variant={"h3"}>
                        Carousel 2
                    </Typography>
                </div>
            </Slider>
        </div>
    )
}