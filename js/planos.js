export default function hoverPlanos() {
    window.addEventListener('DOMContentLoaded', (event) => {
        const planos = document.querySelectorAll('.planos');
        planos.forEach((plano) => {
            plano.addEventListener('mouseover', (event) => {
                plano.classList.add('planoAtivo');
            });
            plano.addEventListener('mouseout', (event) => {
                plano.classList.remove('planoAtivo');

            })
        });

    })
};