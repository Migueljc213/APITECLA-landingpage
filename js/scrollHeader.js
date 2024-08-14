export default function scrollHeader() {
    document.addEventListener('DOMContentLoaded', function () {
        const header = document.getElementById('header');
        let lastScrollTop = 0;

        window.addEventListener('scroll', function () {
            let currentScroll = window.scrollY || document.documentElement.scrollTop;
            console.log(window.scrollY)

            if (currentScroll > lastScrollTop) {
                // Rolando para baixo
                header.classList.add('hidden');
            } else {
                // Rolando para cima
                header.classList.remove('hidden');
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, false);
    })
}