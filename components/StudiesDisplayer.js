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
        color: 'white'
    },
    detailsContainer: {
        width: '50%',
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
                    expandIcon={<ExpandMoreIcon className={classes.icon} />}
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
                        <Typography>
                            Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                            carrière dans le développement web.
                        </Typography>
                    </div>
                    <div className={classes.detailsContainer}>
                        <HeaderTypography variant={"h3"}>
                            Des compétences acquises
                        </HeaderTypography>
                        <Typography>
                            Liste des compétences ...
                        </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.icon} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <div>
                        <Typography className={classes.heading}>Licence 3 Informatique</Typography>
                        <Typography className={classes.secondaryHeading}>Septembre 2018 - Juillet 2019</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Détails Licence
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.icon} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <div>
                        <Typography className={classes.heading}>DUT Informatique</Typography>
                        <Typography className={classes.secondaryHeading}>Septembre 2015 - Juillet 2017</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Détails DUT
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.
                        Un stage de 6 mois me permettant de valider mon parcours et d'entamer une
                        carrière dans le développement web.

                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}