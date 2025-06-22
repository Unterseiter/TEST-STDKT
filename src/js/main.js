import '../styles/main.scss';
import { initLenis } from './modules/lenis';
import { initHeader } from './modules/header';
import { initMaps } from './modules/maps';
import { initForm } from './modules/form';
import { initHeadSection } from './modules/headSection';
import { initPopularSlider } from './modules/popular';
import { initHitsSlider } from './modules/hits';
import { initRecipesSlider } from './modules/recipes';

document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initHeader();
  initMaps();
  initForm();
  initHeadSection();
  initPopularSlider();
  initHitsSlider();
  initRecipesSlider();
});