document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('dynamic-text');
    const imageElement = document.querySelector('.mao');
    const circleElements = document.querySelectorAll('.circulos div');
  
    // Verifica se os elementos foram encontrados
    if (!textElement || !imageElement || circleElements.length < 3) {
      console.error("Alguns elementos não foram encontrados!");
      return;
    }
  
    // Dados de alternância
    const data = [
      {
        text: `
          <span class="text-wrapper">Faça </span>
          <span class="span">download</span>
          <span class="text-wrapper">
            da app Viriatos Scouting. Registe e acompanhe a evolução dos novos talentos do Académico de
            Viseu. Tudo na palma da sua mão!
          </span>
        `,
        imageSrc: 'img/mao.png',
        circleColors: ['#ffd201', '#ffffff', '#ffffff']
      },
      {
        text: `
          <span class="text-wrapper">TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE 
          TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE </span>
          
        `,
        imageSrc: 'img/telele-1.png',
        circleColors: ['#ffffff', '#ffd201', '#ffffff']
      }
    ];
  
    let currentIndex = 0;
    let isScrolling = false;
  
    // Troca de conteúdo com animação
    function changeContent(index) {
      // Alterar texto com fade
      applyFadeAnimation(textElement, () => {
        textElement.innerHTML = data[index].text;
      });
  
      // Alterar imagem com fade
      applyFadeAnimation(imageElement, () => {
        imageElement.src = data[index].imageSrc;
      });
  
      // Alterar cores dos círculos
      circleElements.forEach((circle, i) => {
        circle.style.backgroundColor = data[index].circleColors[i];
      });
    }
  
    // Função para aplicar fade com callback
    function applyFadeAnimation(element, callback) {
      element.classList.add('fade-out');
      setTimeout(() => {
        callback();
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
        setTimeout(() => {
          element.classList.remove('fade-in');
        }, 500); // Remove fade-in após a transição
      }, 500); // Tempo do fade-out
    }
  
    // Listener de scroll
    window.addEventListener('wheel', (event) => {
      if (isScrolling) return;
  
      isScrolling = true;
      if (event.deltaY > 0) {
        // Scroll para baixo
        currentIndex = (currentIndex + 1) % data.length;
      } else if (event.deltaY < 0) {
        // Scroll para cima
        currentIndex = (currentIndex - 1 + data.length) % data.length;
      }
      changeContent(currentIndex);
  
      setTimeout(() => {
        isScrolling = false;
      }, 500);
    });
  });
  