import React from 'react';
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
        flexGrow: 1,
        flexShrink: 0,
    },
    icon: {
        color: 'white'
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
        padding: theme.spacing(2)
    }
}))(MuiAccordionDetails);

export default function StudiesDisplayer(){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

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
                    <Typography className={classes.heading}>Master Informatique</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Deux dernières années de ma formation, j'ai choisi le parcours GIL (Génie de l'Informatique
                        Logicielle) afin de me spécialiser dans le développement d'applications.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.icon} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Licence 3 Informatique</Typography>
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
                    <Typography className={classes.heading}>DUT Informatique</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Détails DUT
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}