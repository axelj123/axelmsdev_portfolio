document.addEventListener('DOMContentLoaded', function () {
  let particleColor = "#ffffff"; // Color blanco para partículas en modo oscuro por defecto

  function loadParticles() {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: particleColor
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: particleColor,
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }

  // Leer la preferencia del tema desde localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  document.body.classList.toggle('light-mode', savedTheme === 'light');
  particleColor = savedTheme === 'dark' ? "#ffffff" : "#000000";
  // Inicializa partículas con el color del tema guardado
  loadParticles();

  // Cambia entre modo oscuro y claro
  document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    const isLightMode = document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode', !isLightMode);

    // Cambia el color de las partículas dependiendo del modo
    particleColor = isLightMode ? "#000000" : "#ffffff";

    // Destruye partículas existentes y reinicia con el nuevo color
    if (window.pJSDom && window.pJSDom.length) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }

    loadParticles();

    // Guarda la preferencia del tema en localStorage
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  });

  // Configuración del Typewriter
  const typewriter = new Typewriter('#typewriter-text', {
    loop: true, // Hacer que la animación se repita
    delay: 75, // Velocidad de tipeo
  });

  typewriter
    .typeString('Axel Muñoz Silva')
    .pauseFor(1000) // Pausa entre textos
    .deleteAll() // Borra todo el texto
    .typeString('Lima - Perú')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Developer Full Stack')
    .pauseFor(1000)
    .deleteAll()
    .start();
});
