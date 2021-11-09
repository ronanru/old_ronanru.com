const html = document.querySelector('html') as HTMLElement,
  onScroll = () => {
    const sections = document.getElementsByTagName('section');
    for (const section of sections) section.classList.remove('focus');
    console.log();

    sections[Math.round((html.scrollTop / html.scrollHeight) * 4)].classList.add('focus');
  };

window.addEventListener('scroll', onScroll);
onScroll();
