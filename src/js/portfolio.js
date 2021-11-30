import { Fancybox } from '@fancyapps/ui';
import { tns } from "tiny-slider/src/tiny-slider"


window.addEventListener('DOMContentLoaded', () => {

	const portfolioSlider = tns({
    container: '.portfolio-slider',
    items: 1,
		"nav": false,
		"arrowKeys": true,
		"mouseDrag": true,
		"speed": 300,
		"controlsContainer": ".portfolio-arrow__wrapper",
		"loop": false,
    responsive: {
      768: {
				items: 3,
      }
    }
  });

});