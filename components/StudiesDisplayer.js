import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Accordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(30),
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(16),
        },
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(20),
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(14),
        },
        color: theme.palette.text.secondary,
    },
    icon: {
        color: 'white',
    },
    detailsContainer: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }
}));

const AccordionSummary = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        color: 'white',
        minHeight: '100px',
    },
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.light,
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
        '&>*': {
            margin: theme.spacing(1)
        },
    }
}))(MuiAccordionDetails);

const HeaderTypography = withStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1),
    }
}))(Typography);

export default function StudiesDisplayer(){
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon fontSize={"large"} className={classes.icon} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div>
                        <Typography className={classes.heading}>Master Informatique</Typography>
                        <Typography className={classes.secondaryHeading}>Septembre 2019 - Aujourd'hui</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.detailsContainer}>
                        <HeaderTypography variant={"h3"}>
                            A la clé ...
                        </HeaderTypography>
                        <Typography align={"justify"}>
                            Un diplôme BAC + 5 en Informatique, spécialité Génie de l'Informatique Logicielle débouchant
                            ainsi sur un stage de 6 mois me permettant de valider mon parcours et d'entamer une carrière
                            dans le développement web.
                        </Typography>
                    </div>
                    <div className={classes.detailsContainer}>
                        <HeaderTypography variant={"h3"}>
                            Des compétences acquises
                        </HeaderTypography>
                        <Typography align={"justify"}>
                            Ce master est orienté vers l'apprentissage du développement de logiciels complexes. Il se
                            concentre sur ce point en partant de la spécification et la conception jusqu'au développement
                            de logiciels en équipe avec un module important de gestion de projets. De plus, de nombreuses
                            technologies autour des bases de données et du Web sont étudiées.
                        </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon fontSize={"large"} className={classes.icon} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <div>
                        <Typography className={classes.heading}>Licence 3 Informatique</Typography>
                        <Typography className={classes.secondaryHeading}>Septembre 2018 - Juillet 2019</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.detailsContainer}>
                        <HeaderTypography variant={"h3"}>
                            Une licence en poche ...
                        </HeaderTypography>
                        <Typography align={"justify"}>
                            Un diplôme BAC + 3 en Informatique ayant débouché sur un stage de minimum 8 semaines, me
                            permettant de redécouvrir le monde professionnel et d'appliquer mes connaissances vues durant les
                            années passées.
                        </Typography>
                    </div>
                    <div className={classes.detailsContainer}>
                        <HeaderTypography variant={"h3"}>
                            Un stage de 8 semaines
                        </HeaderTypography>
                        <Typography align={"justify"}>
                            J'ai eu l'occasion durant cette année-ci de développer mon premier site web au sein d'une
                            petite entreprise d'impression. Muni du gestionnaire de contenu WordPress, j'ai réalisé une
                            refonte de leur vitrine numérique en leur offrant la possibilité de l'administrer.
                        </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon fontSize={"large"} className={classes.icon} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <div>
                        <Typography className={classes.heading}>DUT Informatique</Typography>
                        <Typography className={classes.secondaryHeading}>Septembre 2015 - Juillet 2017</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.detailsContainer}>
                        <HeaderTypography variant={"h3"}>
                            Premier diplôme post-bac ...
                        </HeaderTypography>
                        <Typography align={"justify"}>
                            Un diplôme BAC + 2 en Informatique m'offrant la possibilité de réaliser mon premier stage dans
                            ce domaine. J'ai pu découvrir les bases de la programmation objet, des gestions de bases de
                            données ainsi que divers algorithmes.
                        </Typography>
                    </div>
                    <div className={classes.detailsContainer}>
                        <HeaderTypography variant={"h3"}>
                            Un stage de 10 semaines
                        </HeaderTypography>
                        <Typography align={"justify"}>
                            Développeur stagiaire, j'ai participé à l'amélioration et au développement de nouvelles
                            fonctionnalités d'un module d'impression au sein d'un progiciel de gestion intégrée. Dirigé
                            et encadré par deux chefs de projets, j'ai appliqué mes connaissances en programmation orientée
                            objet grâce à la technologie Delphi et ai ainsi pu découvrir le développement logiciel.
                        </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}