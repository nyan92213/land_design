import "./descriptionAccordion.css";
import { useState } from "react";
import clsx from "clsx";

const accordionData = [
  {
    id: "genplan-descr",
    title: "Генеральный план",
    about: "Тут краткое описание того, что происходит на генеральном плане",
    legend: "Легенда с описанием того, что используется на плане",
  },
  {
    id: "dendroplan-descr",
    title: "Дендроплан",
    about: "Тут краткое описание того, что происходит на генеральном плане",
    legend: "Легенда с описанием того, что используется на плане",
  },
  {
    id: "geodezy-descr",
    title: "Геодезия",
    about: "Тут краткое описание того, что происходит на генеральном плане",
    legend: "Легенда с описанием того, что используется на плане",
  },
];

function DescriptionAccordion() {
  const [isActive, setIsActive] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="description-wrapper">
      {accordionData.map((data) => (
        <div key={data.id} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{data.title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div
              className="accordion-about"
              onClick={() => setIsOpened(!isOpened)}
            >
              <div>{data.about}</div>
              <div>{isOpened ? "-" : "+"}</div>
            </div>
          )}
          {isOpened && isActive && (
            <div className="accordion-legend">{data.legend}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DescriptionAccordion;
