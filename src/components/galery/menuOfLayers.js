import "./styles.css";

import zero from "../../resources/img/0.png";
import one from "../../resources/img/1.png";
import two from "../../resources/img/2.png";
import three from "../../resources/img/3.png";
import four from "../../resources/img/4.png";

function MenuOfLayers() {
  return (
    <div className="layerSelectorWrapper">
      <div className="layerSelector">
        <img src={zero} alt="zero" />
      </div>
      <div className="layerSelector">
        <img src={one} alt="one" />
      </div>
      <div className="layerSelector">
        <img src={two} alt="two" />
      </div>
      <div className="layerSelector">
        <img src={three} alt="three" />
      </div>
      <div className="layerSelector">
        <img src={four} alt="four" />
      </div>
    </div>
  );
}

// пока для конструкции так, потом соберу динамически

export default MenuOfLayers;
