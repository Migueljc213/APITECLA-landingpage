export default function faq() {
    const faqTitulos = document.querySelectorAll('.faq-titulo');
  
    faqTitulos.forEach((titulo) => {
      titulo.addEventListener('click', () => {
        const conteudo = titulo.nextElementSibling;
        const seta = titulo.querySelector('.faq-seta');
  
        conteudo.classList.toggle('ativouFaq');
        seta.classList.toggle('rotate');
      });
    });
  }
  