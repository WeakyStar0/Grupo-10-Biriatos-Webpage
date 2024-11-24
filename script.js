document.addEventListener('DOMContentLoaded', () => {
    const textElement1 = document.getElementById('dynamic-text');
    const textElement2 = document.getElementById('dynamic-text-2');
    const imageElement = document.querySelector('.mao');
    const circleElements = document.querySelectorAll('.circulos div');

    if (!textElement1 || !textElement2 || !imageElement || circleElements.length < 3) {
        console.error("Alguns elementos não foram encontrados!");
        return;
    }

    const data = [
        {
            text1: `
                <span class="text-wrapper">Faça </span>
                <span class="span">download</span>
                <span class="text-wrapper">
                    da app Viriatos Scouting. Registe e acompanhe a evolução dos novos talentos do Académico de
                    Viseu. Tudo na palma da sua mão!
                </span>
            `,
            text2: ``,
            text1Styles: {
                position: 'absolute',
                width: 'calc(658px * 0.85)',
                top: 'calc(878px * 0.85)',
                left: 'calc(600px * 0.85)',
            },
            text2Styles: null,
            imageSrc: 'img/mao.png',
            circleColors: ['#ffd201', '#ffffff', '#ffffff'],
            showImage: true,
        },
        {
            text1: `
                <span class="text-wrapper-5">Faça download da App</span>
                <span class="text-wrapper">Disponível para dispositivos móveis. A app é fácil de usar e acessível.</span>
            `,
            text2: `
                <span class="text-wrapper-5">Busca fácil de jogadores</span>
                <span class="text-wrapper">A pesquisa é intuitiva e prática. Filtre jogadores por escalão e posição.</span>
            `,
            text1Styles: {
                position: 'absolute',
                width: 'calc(426px * 0.85)',
                top: 'calc(947px * 0.85)',
                left: 'calc(546px * 0.85)',
            },
            text2Styles: {
                position: 'absolute',
                width: 'calc(425px * 0.85)',
                top: 'calc(760px * 0.85)',
                left: 'calc(1001px * 0.85)',
            },
            imageSrc: 'img/telele-1.png',
            circleColors: ['#ffffff', '#ffd201', '#ffffff'],
            showImage: true,
        },
        {
            text1: `
                <span class="text-wrapper">O Viriatos Scouting é uma aplicação dedicada ao apoio no processo de scouting do Académico de Viseu, focando na identificação e acompanhamento de jovens talentos promissores. Criado para dar suporte à formação e ao desenvolvimento de novos jogadores, a app permite que observadores registem dados e acompanhem o progresso de atletas que podem vir a compor o futuro do futebol português.</span>
                
            `,
            text2: ``,
            text1Styles: {
                position: 'absolute',
                width: 'calc(1417px * 0.85)',
                top: 'calc(746px * 0.85)',
                left: 'calc(505px * 0.85)',
            },
            text2Styles: null,
            imageSrc: '',
            circleColors: ['#ffffff', '#ffffff', '#ffd201'],
            showImage: false,
        }
    ];

    let currentIndex = 0;
    let isScrolling = false;

    function changeContent(index) {
        const item = data[index];

        // Atualiza o primeiro texto e seus estilos
        textElement1.innerHTML = item.text1;
        applyStyles(textElement1, item.text1Styles);

        // Atualiza o segundo texto e seus estilos
        if (item.text2) {
            textElement2.innerHTML = item.text2;
            applyStyles(textElement2, item.text2Styles);
            textElement2.style.opacity = '1';
            textElement2.style.display = 'block';
        } else {
            textElement2.style.opacity = '0';
            setTimeout(() => {
                textElement2.style.display = 'none';
            }, 500);
        }

        // Atualiza a imagem
        if (item.showImage) {
            imageElement.src = item.imageSrc;
            imageElement.style.opacity = '1';
        } else {
            imageElement.style.opacity = '0';
        }

        // Atualiza as cores dos círculos
        circleElements.forEach((circle, i) => {
            circle.style.backgroundColor = item.circleColors[i];
        });
    }

    function applyStyles(element, styles) {
        if (styles) {
            Object.assign(element.style, styles);
        } else {
            element.style.cssText = ''; // Remove estilos aplicados anteriormente
        }
    }

    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;

        isScrolling = true;
        const isScrollForward = event.deltaY > 0;

        if (isScrollForward) {
            currentIndex = (currentIndex + 1) % data.length;
        } else {
            currentIndex = (currentIndex - 1 + data.length) % data.length;
        }

        changeContent(currentIndex);

        setTimeout(() => {
            isScrolling = false;
        }, 500);
    });

    // Inicializa o conteúdo com o primeiro estado
    changeContent(0);
});
