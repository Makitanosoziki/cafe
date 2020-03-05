import '../css/app.css'
import { addNumber  } from './util'

  const mainFigure = document.querySelector('.concept-main-figure');
  const mainFigurePosition = mainFigure.getBoundingClientRect();

  console.log(mainFigurePosition.top);

  if(mainFigurePosition.top === 82) {
    mainFigurePosition.classList.add('on');
  }