import LayersAccordion from "../layersAccordion/layersAccordion";
import DescriptionAccordion from "../descriptionAccordion/descriptionAccordion";

import "./mainWindow.css";

function MainWindow() {
  return (
    <div className="accordion-wrapper">
      <LayersAccordion />
      <DescriptionAccordion />
    </div>
  );
}

export default MainWindow;
