import Typography from "@material-ui/core/Typography";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const Description = withStyles((theme) => ({
    root: {
        color: theme.palette.text.secondaryBlack
    }
}))(Typography);

function ProjectDescription({children}){
    return(
        <>
            <Typography gutterBottom variant="h5" component="h2">
                Description
            </Typography>
            <Description gutterBottom variant="body1">
                {children}
            </Description>
        </>
    )
}

export default ProjectDescription;