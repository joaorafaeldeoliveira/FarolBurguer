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
    start: 'top 80%',
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

gsap.to('.moto-overlay-text', {
  opacity: 0,
  scrollTrigger: {
    trigger: ".moto-cinematic",
    start: "center center",
    end: "bottom center",
    scrub: true
  }
});

// Adicione uma transição suave para a próxima seção
gsap.from('.nossos-hamburgueres', {
  backgroundColor: '#000',
  scrollTrigger: {
    trigger: '.nossos-hamburgueres',
    start: 'top 90%',
    end: 'top 50%',
    scrub: 0.5
  }
});

 const canvas = document.getElementById("hero-scroll");

if (canvas) {
  const context = canvas.getContext("2d");
  const container = canvas.parentElement;

  const frameCount = 140;
  const images = [];
  const imageState = { frame: 0 };

  const currentFrame = index =>
    `./frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`;

  // Configuração inicial para 1280x720
  canvas.width = 1280;
  canvas.height = 720;

  // Pré-load das imagens
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  // Função para redimensionar o canvas mantendo aspect ratio 16:9
  function resizeCanvas() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Aspect ratio do vídeo (16:9)
    const videoAspect = 16 / 9;
    
    // Calcula dimensões para preencher a tela mantendo o aspect ratio
    let width = containerWidth;
    let height = containerWidth / videoAspect;
    
    if (height < containerHeight) {
      height = containerHeight;
      width = containerHeight * videoAspect;
    }
    
    // Centraliza o canvas
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.left = `${(containerWidth - width) / 2}px`;
    canvas.style.top = `${(containerHeight - height) / 2}px`;
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    if (images[imageState.frame] && images[imageState.frame].complete) {
      // Desenha a imagem centralizada e escalada
      const img = images[imageState.frame];
      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      
      const x = (canvas.width - img.naturalWidth * scale) / 2;
      const y = (canvas.height - img.naturalHeight * scale) / 2;
      
      context.drawImage(
        img, 
        x, y, 
        img.naturalWidth * scale, 
        img.naturalHeight * scale
      );
    }
  }

  images[0].onload = () => {
    resizeCanvas();
    render();
  };

  // GSAP animation com ScrollTrigger
  const scrollTween = gsap.to(imageState, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: ".moto-cinematic",
      start: "top top",
      end: "+=100%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      onUpdate: () => {
        render();
        // Fade out do texto conforme o scroll
        const progress = scrollTween.scrollTrigger.progress;
        const textOpacity = 1 - (progress * 1.5);
        document.querySelector('.moto-overlay-text').style.opacity = 
          Math.max(0, textOpacity);
      }
    }
  });

  // Event listeners para resize
  window.addEventListener("resize", () => {
    resizeCanvas();
    render();
    ScrollTrigger.refresh();
  });

  // Inicializa quando a página carrega
  window.addEventListener("load", () => {
    resizeCanvas();
    render();
    ScrollTrigger.refresh();
  });

  
}

 gsap.to('.moto-overlay-text', {
    opacity: 0,
    scrollTrigger: {
      trigger: ".moto-cinematic",
      start: "center center",
      end: "bottom center",
      scrub: true
    }
  });
  
  // 3. Adicione uma transição de cor no próprio canvas
  gsap.to(canvas, {
    opacity: 0,
    scrollTrigger: {
      trigger: ".moto-cinematic",
      start: "bottom 30%",
      end: "bottom top",
      scrub: true
    }
  });


// 4. Animação para a seção de cardápio aparecer suavemente
gsap.from('.nossos-hamburgueres', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.nossos-hamburgueres',
    start: 'top 90%',
    end: 'top 70%',
    scrub: 1,
    toggleActions: "play none none reverse"
  }
});