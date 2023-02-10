import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import LHC from "/Users/npoffley001/dev/react_experience/src/Components/PanoramasClone/LHC.png";
const LHCCard = props => {
    return (
        <Card sx={{ maxWidth: 345,  boxShadow: 1 }}>
            <CardMedia
                component="img"
                alt="LHC Image"
                height="140"
                image={LHC}
            />
            <CardContent>
                <Button variant="outlined" fullWidth size="small" onClick={()=>props.viewButtonClickedHandler()}>View</Button>
                <div style={{paddingBottom:'10px'}}></div>
                <Button variant="outlined" fullWidth size="small" onClick={()=>props.closeButtonClickedHandler()}>Close</Button>
                <div style={{paddingBottom:'10px'}}></div>
                <Typography gutterBottom variant="h5" component="div">
                Large Hadron Collider
                </Typography>
                <Typography variant="body2">
                    The Large Hadron Collider (LHC) is the world’s largest and most powerful particle accelerator. It first started up on 10 September 2008, and remains the latest addition to CERN’s accelerator complex. The LHC consists of a 27-kilometre ring of superconducting magnets with a number of accelerating structures to boost the energy of the particles along the way.
                    Inside the accelerator, two high-energy particle beams travel at close to the speed of light before they are made to collide. The beams travel in opposite directions in separate beam pipes – two tubes kept at ultrahigh vacuum. They are guided around the accelerator ring by a strong magnetic field maintained by superconducting electromagnets. The electromagnets are built from coils of special electric cable that operates in a superconducting state, efficiently conducting electricity without resistance or loss of energy. This requires chilling the magnets to ‑271.3°C – a temperature colder than outer space. For this reason, much of the accelerator is connected to a distribution system of liquid helium, which cools the magnets, as well as to other supply services.
                    Thousands of magnets of different varieties and sizes are used to direct the beams around the accelerator. These include 1232 dipole magnets 15 metres in length which bend the beams, and 392 quadrupole magnets, each 5–7 metres long, which focus the beams. Just prior to collision, another type of magnet is used to "squeeze" the particles closer together to increase the chances of collisions. The particles are so tiny that the task of making them collide is akin to firing two needles 10 kilometres apart with such precision that they meet halfway.
                    All the controls for the accelerator, its services and technical infrastructure are housed under one roof at the CERN Control Centre. From here, the beams inside the LHC are made to collide at four locations around the accelerator ring, corresponding to the positions of four particle detectors – ATLAS, CMS, ALICE and LHCb.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default LHCCard