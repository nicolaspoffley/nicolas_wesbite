import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import CMS from "/Users/npoffley001/dev/react_experience/src/Components/PanoramasClone/CMS.png";
const CMSCard = props => {
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 1}}>
            <CardMedia
                component="img"
                alt="CMS Image"
                height="140"
                image={CMS}
            />
            <CardContent>
                <Button variant="outlined" fullWidth size="small" onClick={() => props.viewButtonClickedHandler()}>View</Button>
                <div style={{ paddingBottom: '10px' }}></div>
                <Button variant="outlined" fullWidth size="small" onClick={() => props.closeButtonClickedHandler()}>Close</Button>
                <div style={{ paddingBottom: '10px' }}></div>
                <Typography gutterBottom variant="h5" component="div">
                    Compact Muon Solenoid
                </Typography>
                <Typography variant="body2">
                    The Compact Muon Solenoid (CMS) is a general-purpose detector at the Large Hadron Collider (LHC). It has a broad physics programme ranging from studying the Standard Model (including the Higgs boson) to searching for extra dimensions and particles that could make up dark matter. Although it has the same scientific goals as the ATLAS experiment, it uses different technical solutions and a different magnet-system design.
                    The CMS detector is built around a huge solenoid magnet. This takes the form of a cylindrical coil of superconducting cable that generates a field of 4 tesla, about 100,000 times the magnetic field of the Earth. The field is confined by a steel “yoke” that forms the bulk of the detector’s 14,000-tonne weight.
                    An unusual feature of the CMS detector is that instead of being built in-situ like the other giant detectors of the LHC experiments, it was constructed in 15 sections at ground level before being lowered into an underground cavern near Cessy in France and reassembled. The complete detector is 21 metres long, 15 metres wide and 15 metres high.
                    The CMS experiment is one of the largest international scientific collaborations in history, involving 4300 particle physicists, engineers, technicians, students and support staff from 182 institutes in 42 countries (February 2014).
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CMSCard