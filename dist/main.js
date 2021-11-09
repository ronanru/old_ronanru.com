"use strict";
const html = document.querySelector('html'), onScroll = () => {
    const sections = document.getElementsByTagName('section');
    for (const section of sections)
        section.classList.remove('focus');
    sections[Math.round((html.scrollTop / window.innerHeight) * 2 - 0.5)].classList.add('focus');
};
window.addEventListener('scroll', onScroll);
onScroll();
//# sourceMappingURL=main.js.map