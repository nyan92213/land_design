import Carousel from "react-bootstrap/Carousel";
import genplan from "../../resources/img/genplan.png";
import dendroplan from "../../resources/img/dendroplan.png";
import geodezy from "../../resources/img/geodezy.png";
import { useState } from "react";
import "./styles.css";

// let screenLog = document.querySelector("#screen-log");
// document.addEventListener("mousemove", logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }

function MainCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    switch (index) {
      case 2:
        console.log(index);
        break;
      case 0:
        console.log(index);
        break;
      case 1:
        console.log(index);
        break;
      default:
        console.log("default");
    }

    setIndex(selectedIndex);
  };

  return (
    <div style={{ width: "900px" }}>
      <Carousel
        variant="dark"
        fade
        className="d-block"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={genplan} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dendroplan} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={geodezy} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainCarousel;
