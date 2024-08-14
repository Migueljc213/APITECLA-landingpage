import initAnimacaoScroll from "./scrollanimacao.js";
import hoverPlanos from "./planos.js";
import faq from "./faq.js";
import scrollSuave from "./scrollsuave.js";
import scrollHeader from "./scrollHeader.js";

document.addEventListener('DOMContentLoaded', () => {
  initAnimacaoScroll();
  hoverPlanos();
  faq();
  scrollSuave();
  scrollHeader()
});