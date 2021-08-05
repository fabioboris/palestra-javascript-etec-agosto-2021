import { viruses } from "./viruses";

import "./styles/main.scss";

import Virus1 from "./images/virus1.svg";
import Virus2 from "./images/virus2.svg";

var modelsSection = document.querySelector("#models");
modelsSection.innerHTML += Virus1;
modelsSection.innerHTML += Virus2;

window.addEventListener("load", viruses.init);
