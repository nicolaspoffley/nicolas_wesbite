import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import CMS from "/Users/npoffley001/dev/react_experience/src/Components/PanoramasClone/CMS.png";
const PanoramasCard = () => {
    return (
        <Card sx={{ maxWidth: 345,  boxShadow: 1 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={CMS}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Panoramas Project
                </Typography>
                <Typography variant="body2">
                    The panoramas project aims to provide an immersive visual aid for helping to prepare interventions on the CERN facilities.
                    Our online panorama viewer embodies this mission. Offering an extensive network of 360° panoramic photos, it allows navigating across the CERN facilities and visualizing the installed machines and equipment.
                    This tool, usually integrated with internal tools and accessible only to CERN personnel, is used to document all relevant changes in the machines and a large portion of the technical buildings.
                    In this demo you may visit different areas of the CERN accelerator complex and learn more about their functionality and equipment.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default PanoramasCard