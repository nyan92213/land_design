import "./layersAccord.css";
import genplan from "../../resources/img/genplan.png";
import dendroplan from "../../resources/img/dendroplan.png";
import geodezy from "../../resources/img/geodezy.png";

import { useState } from "react";
import clsx from "clsx";

const layersArr = [
  { id: "genplan", src: genplan },
  { id: "dendroplan", src: dendroplan },
  { id: "geodezy", src: geodezy },
];

function LayersAccord() {
  const [openedLayerId, setOpenedLayerId] = useState(null);

  const openLayer = (id) => () => {
    if (openedLayerId === id) {
      setOpenedLayerId(null);
    } else {
      setOpenedLayerId(id);
    }
  };

  return (
    <ul>
      {layersArr.map((layer) => (
        <li key={layer.id}>
          <img
            onClick={openLayer(layer.id)}
            className={clsx({
              "opened-layer": openedLayerId === layer.id,
              "compressed-layer": openedLayerId !== layer.id,
            })}
            id={layer.id}
            src={layer.src}
            alt={layer.id}
          />
        </li>
      ))}
    </ul>
  );
}

export default LayersAccord;
