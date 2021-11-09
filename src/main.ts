const html = document.querySelector('html') as HTMLElement,
  sections = document.getElementsByTagName('section'),
  onScroll = () => {
    for (const section of sections) section.classList.remove('focus');
    sections[Math.round((html.scrollTop / html.scrollHeight) * 4)].classList.add('focus');
  };

window.addEventListener('scroll', onScroll);
onScroll();
