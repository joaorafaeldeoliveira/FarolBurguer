gsap.registerPlugin(ScrollTrigger);
 gsap.from('.logo', {
   duration: 1,
   y: -50,
   opacity: 0,
   ease: 'power3.out'
 });
 
 gsap.from('.nav-links a', {
   duration: 1,
   y: -30,
   opacity: 0,
   stagger: 0.1,
   delay: 0.3,
   ease: 'power3.out'
 });
 
 gsap.from('.banner-title h1', {
   scrollTrigger: {
     trigger: '.home-banner',
     start: 'top 80%',
   },
   duration: 1.2,
   x: -100,
   opacity: 0,
   ease: 'power3.out'
 });
 
 gsap.from('.banner-title h2', {
   scrollTrigger: {
     trigger: '.home-banner',
     start: 'top 75%',
   },
   duration: 1,
   x: -80,
   opacity: 0,
   delay: 0.3,
   ease: 'power3.out'
 });
 
 gsap.from('.banner-description', {
   scrollTrigger: {
     trigger: '.home-banner',
     start: 'top 70%',
   },
   duration: 1,
   x: -60,
   opacity: 0,
   delay: 0.5,
   ease: 'power3.out'
 });
 
 gsap.from('.banner-image-area', {
   scrollTrigger: {
     trigger: '.home-banner',
     start: 'top 80%',
   },
   duration: 1.5,
   x: 100,
   opacity: 0,
   scale: 0.8,
   ease: 'power3.out'
 });
 

 gsap.from('.banner-text-footer', {
   scrollTrigger: {
     trigger: '.home-banner',
     start: 'top 65%',
   },
   duration: 1,
   y: 30,
   opacity: 0,
   delay: 0.7,
   ease: 'power3.out'
 });
 

 gsap.from('.mais-pedidos h1', {
   scrollTrigger: {
     trigger: '.mais-pedidos',
     start: 'top 85%',
   },
   duration: 1,
   y: 50,
   opacity: 0,
   ease: 'power3.out'
 });
 
 gsap.from('.item-1', {
   scrollTrigger: {
     trigger: '.itens-grid',
     start: 'top 80%',
   },
   duration: 1,
   x: -100,
   opacity: 0,
   ease: 'power3.out'
 });
 
 gsap.from('.item-2', {
   scrollTrigger: {
     trigger: '.itens-grid',
     start: 'top 80%',
   },
   duration: 1,
   x: 100,
   opacity: 0,
   delay: 0.2,
   ease: 'power3.out'
 });
 
 gsap.from('.batata', {
   scrollTrigger: {
     trigger: '.itens-grid',
     start: 'top 75%',
   },
   duration: 1.2,
   y: 100,
   opacity: 0,
   delay: 0.4,
   ease: 'power3.out'
 });
 
 gsap.from('.sobre-nos-banner-image-area', {
   scrollTrigger: {
     trigger: '.sobre-nos-banner',
     start: 'top 85%',
   },
   duration: 1.2,
   x: -100,
   opacity: 0,
   ease: 'power3.out'
 });
 
 gsap.from('.sobre-nos-title h1', {
   scrollTrigger: {
     trigger: '.sobre-nos-banner',
     start: 'top 85%',
   },
   duration: 0.8,
   y: 30,
   opacity: 0,
   ease: 'power3.out'
 });
 
 gsap.from('.sobre-nos-title h2', {
   scrollTrigger: {
     trigger: '.sobre-nos-banner',
     start: 'top 85%',
   },
   duration: 0.8,
   y: 30,
   opacity: 0,
   delay: 0.1,
   ease: 'power3.out'
 });
 
 gsap.from('.sobre-nos-title h3', {
   scrollTrigger: {
     trigger: '.sobre-nos-banner',
     start: 'top 85%',
   },
   duration: 0.8,
   y: 30,
   opacity: 0,
   delay: 0.2,
   ease: 'power3.out'
 });
 
 gsap.from('.sobre-nos-text ',{
   scrollTrigger: {
     trigger: '.sobre-nos-banner',
     start: 'top 80%',
   },
   duration: 1,
   y: 40,
   opacity: 0,
   delay: 0.5,
   ease: 'power3.out'
 });

 gsap.from('.sobre-nos-banner-description', {
    scrollTrigger: {
      trigger: '.sobre-nos-banner',
      start: 'top 80%',
    },
    duration: 1,
    y: 40,
    opacity: 0,
    delay: 0.5,
    ease: 'power3.out'
  });
 
//  gsap.from('.moto h1', {
//    scrollTrigger: {
//      trigger: '.moto',
//      start: 'top 85%',
//    },
//    duration: 1.5,
//    y: 100,
//    opacity: 0,
//    ease: 'power3.out'
//  });
gsap.from('.moto-overlay-text h1', {
  scrollTrigger: {
    trigger: '.moto-cinematic',
    start: 'top 70%',
  },
  duration: 1.2,
  y: 60,
  opacity: 0,
  ease: 'power3.out'
});
 gsap.from('.cardapio-title', {
   scrollTrigger: {
     trigger: '.nossos-hamburgueres',
     start: 'top 90%',
   },
   duration: 1,
   y: 50,
   opacity: 0,
   ease: 'power3.out'
 });
 
 gsap.from('.cardapio-item', {
   scrollTrigger: {
     trigger: '.cardapio',
     start: 'top 85%',
   },
   duration: 0.8,
   y: 60,
   opacity: 0,
   stagger: 0.15,
   ease: 'power3.out'
 });

 gsap.from('footer', {
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 90%',
    },
    duration: 1,
    y: 50,
    opacity: 1, 
    ease: 'power3.out'
  });
 
 gsap.to('.pneu::after', {
   scrollTrigger: {
     trigger: '.pneu',
     start: 'top top',
     end: 'bottom top',
     scrub: true
   },
   backgroundPosition: '0% 20%',
   ease: 'none'
 });

 gsap.to(".moto-cinematic", {
  backgroundColor: "#fff",
  scrollTrigger: {
    trigger: ".moto-cinematic",
    start: "center center",
    end: "bottom center",
    scrub: true
  }
});

 const canvas = document.getElementById("hero-scroll");

if (canvas) {
  const context = canvas.getContext("2d");

  const frameCount = 140;
  const images = [];
  const imageState = { frame: 0 };

  const currentFrame = index =>
    `./frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`;

  // Pré-load
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  images[0].onload = () => {
    canvas.width = images[0].naturalWidth;
    canvas.height = images[0].naturalHeight;
    render();
  };

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[imageState.frame], 0, 0);
  }

  gsap.to(imageState, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: ".moto-cinematic",
      start: "top top",
      end: "+=100%",
      scrub: 1,
      anticipatePin: 1,
      fastScrollEnd: true
    },
    onUpdate: render
  });

  window.addEventListener("resize", render);
}
 
