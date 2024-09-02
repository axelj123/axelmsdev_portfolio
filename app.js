/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  // app.js
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

  // Inicializa partículas
  loadParticles();

  // Cambia entre modo oscuro y claro
  document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    
    // Cambia el color de las partículas dependiendo del modo
    particleColor = document.body.classList.contains('light-mode') ? "#000000" : "#ffffff"; // Negro para claro, blanco para oscuro

    // Destruye partículas existentes y reinicia con el nuevo color
    if (window.pJSDom && window.pJSDom.length) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }

    loadParticles();
  });
});
document.addEventListener('DOMContentLoaded', function () {
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
