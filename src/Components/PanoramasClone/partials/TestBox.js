import { Pannellum } from "pannellum-react";
import * as React from "react";
import scenesArray from "./ScenesArray";
import Grid from "@material-ui/core/Grid";
import ImageMapper from "react-image-mapper";
import complexImage from "/Users/npoffley001/dev/react_experience/src/Components/PanoramasClone/complex.jpeg";
import CMSImage from "/Users/npoffley001/dev/react_experience/src/Components/PanoramasClone/CMS.png";
import PanoramasClone from "../PanoramasClone";
import randomStreetView from 'random-streetview';
import PanoramasCard from "./PanoramasCard";
import LHCCard from "./LHCCard";
import { Button } from "@material-ui/core";
import StreetView from "./StreetView";
import CMSCard from "./CMSCard";

function TestBox(props) {
  const [location, setLocation] = React.useState([46.9171876, 17.8951832])
  const [currentScene, setCurrentScene] = React.useState(0);
  const [imgCoords, setImgCoords] = React.useState(0);
  const [yaw, setYaw] = React.useState(0);
  const [pitch, setPitch] = React.useState(0);
  const [showMap, setShowMap] = React.useState(false)
  const [sceneImg, setSceneImg] = React.useState(
    scenesArray[currentScene].scenePanoImg
  );
  const [cardToShow, setCardToShow] = React.useState()
  const [imgClicked, setImgClicked] = React.useState(false)

  const panImage = React.useRef(null);

  const googleMapsApiKey = "AIzaSyAki07EJsAjjo2AiAY0d9F9pOr2Nsucxvk";

  const viewButtonClickedHandler = () => {
    setShowMap(true);
  }

  const closeButtonClickedHandler = () => {
    setImgClicked(false);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomCoord() {
    console.log(locations)
    setLocation(locations[getRandomInt(10)])
  }



  const hotspotIcon = (hotSpotDiv) => {
    const image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("width", "30");
    image.setAttribute("height", "30");
    image.setAttribute(
      "src",
      "https://img.icons8.com/material/4ac144/256/camera.png"
    );
    hotSpotDiv.appendChild(image);
  };
  const map = {
    name: "my-map",
    areas: [
      {
        name: "CMS",
        shape: "circle",
        coords: [300, 25, 10],
        preFillColor: "black",
        fillColor: "red"
      },
      {
        name: "8",
        shape: "circle",
        coords: [25, 110, 10],
        preFillColor: "black",
        fillColor: "red"
      },
      {
        name: "9",
        shape: "circle",
        coords: [573, 110, 10],
        preFillColor: "black",
        fillColor: "red"
      },
      {
        name: "10",
        shape: "circle",
        coords: [165, 35, 10],
        preFillColor: "black",
        fillColor: "red"
      },
      {
        name: "28",
        shape: "circle",
        coords: [470, 43, 10],
        preFillColor: "black",
        fillColor: "red"
      },
      {
        name: "26",
        shape: "circle",
        coords: [300, 193, 10],
        preFillColor: "black",
        fillColor: "red"
      },
      {
        name: "23",
        shape: "circle",
        coords: [390, 200, 10],
        preFillColor: "black",
        fillColor: "red"
      }
    ]
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div data-aos="fade-center">
            <ImageMapper
              src={
                complexImage
              }
              width={700}
              onImageClick={(evt) =>
                setImgCoords("" + evt.pageX + ", " + evt.pageY)
              }
              onClick={async circle => {
                circle.name==="CMS" ? setCardToShow('CMS') : setCardToShow('LHC')
                setImgClicked(true);
                let data = await randomStreetView.getRandomLocations(1);
                setLocation(data[0])
              }}

              map={map}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
            {showMap ?
              <div style={{ width: '100%', height: '100%' }}>
                <Button variant="outlined" fullWidth size="small" onClick={() => setShowMap(false)}> Close </Button>
                <div style={{ paddingBottom: '3px' }}></div>
                <StreetView lat={location[0]} lng={location[1]} />
              </div>
              :
              imgClicked ? 
              cardToShow==='CMS' ? 
              <div data-aos="fade-center">
              <CMSCard viewButtonClickedHandler={viewButtonClickedHandler} closeButtonClickedHandler={closeButtonClickedHandler} /></div>
              :
              <div data-aos="fade-center">
              <LHCCard viewButtonClickedHandler={viewButtonClickedHandler} closeButtonClickedHandler={closeButtonClickedHandler} /></div>
              : 
              <div data-aos="fade-center">
              <PanoramasCard />
              </div>
            }
        </Grid>
      </Grid>

    </>
  );
}

export default TestBox;