(function() {
    // ---------- months from jul 2025 to feb 2026 ----------
    const months = [
        {
            name: "Introdução",
            paragraphs: [
                "Meu amor por você não pode ser resumido apenas em palavras, mas aqui vai uma breve representação dos meus sentimentos.",
                "Com amor, Lívia.",
    
            ]
        },
        {
            name: "julho 2025",
            paragraphs: [
                "31/07",
                "Eu nunca fui alguém de acreditar em destino, até porque os caminhos são traçados de escolhas e não algo pré-determinado, mas, muitas coisas estão fora do nosso controle. Nesse dia, aconteceu algo fora do meu alcance, a luz caiu e o RU fechou mais cedo. Irônico como algo tão fútil e irrelevante pode levar a um efeito borboleta, pois naquele dia, essa queda de luz, me deu a ideia de ir conhecer um lugar novo, mas não foi só um espaço novo que eu conheci.",
                "Aquela tarde, eu me sentei a mesa, tímida, as vezes te observava de canto. Você mostrou o campus, e a “varanda”, o céu limpo meio estrelado. Você me deu um toque de mão falando do palmeiras, e eu sabia que a gente ia acabar se falando mais, mas só não sabia de que forma.",
                "O grupo de RPG, além do amor ao Palmeiras, nos uniu mais ainda, e assim, surgiu uma amizade."
            ]
        },
        {
            name: "agosto 2025",
            paragraphs: [
                "11/08",
                "Tudo mudou para mim esse dia, a gente já tinha tido poucas interações até então, mas logo que te vi, entrando no elefante branco, de blusa preta e tranças, o seu rostinho sério, algo mudou. Você encostou na parede ao lado do sofá, e disse que já viram escorpião saindo do sofá, sinceramente, eu estava tão hipnotizada com você que mal prestei atenção.",
                "Algo mudou totalmente, o desejo de te ter era evidente, como uma chama que se acendeu, só não sabia qual era a extensão desse desejo.",
                "22/08",
                "Oficialmente nossa primeira foto junto, mesmo que em grupo. Foi o dia da apresentação dos banners de BCN. Achei fofinho que você ficou entre as minhas pernas, eu fiquei toda “bingus bongos”. (Também te chamei para o churras alguns dias antes, na intenção de bitocas)",
                "Passou dessa data, a gente começou a se falar praticamente todo dia, eu só não sabia se você já imaginava que eu era uma loba com segundas intenções. (Já sabia né? Até te mandei link de blend)"
            ]
        },
        {
            name: "setembro 2025",
            paragraphs: [
                "04/09",
                "Aqui as coisas já estavam quentes, eu acho, mas foi nesse dia em que falei abertamente que queria te pegar (Ok eu estava bêbada na tia da pinga, mas só pensava em você o tempo todo, ninguém aguentava mais eu falando de você ) Todo mundo já sabia, incluindo você, mas tudo bem, pois eu sabia que o sr. também já queria.",
                "06/09 - Inicio",
                "O dia do churrasco, quando ficamos pela primeira vez. Foi tão gratificante, o beijo, a gente de casal, e eu só conseguia olhar para você, e ficar ao seu lado. Tentei ser loba, meio que falhei porque cai na sua frente, e não sei como ainda aceitou ficar comigo.",
                "Você havia falado que após o churrasco a gente ia fingir que nada aconteceu, mas era impossível para mim, pois eu já tinha caído na sua tentação e queria mais, queria você por inteiro.",
                "12/09",
                "Foi um dia de confirmações para mim. O sol acordou tão brilhante, e eu estava ansiosa para te ver. Como sempre, eu atrasei quase uma hora, mas logo que te encontrei eu tive a confirmação de que era amor. Seu cabelo estava cheio de flores roxinhas e eu não falei nada, só admirei, enquanto meu coração palpitava forte. Você é o homem mais lindo que eu já pousei meu olhar sobre.",
                "O dia do parque foi maravilhoso no geral, o momento em que fiquei deitada em você, conversando, olhando as nuvens. Eu te dei o bolinho de azuki sabendo que você gostava. Foi tudo muito bom. Os sentimentos afloraram ainda mais, e eu só pensava em ter você ao meu lado."
            ]
        },
        {
            name: "outubro 2025",
            paragraphs: [
                "12/10",
                "Primeira vez que você veio em casa. Combinamos de fazer bolo (formigueiro), e eu não sabia que minha família ia estar lá, então conheceu meus avós e minha tia de tabela. Infelizmente alguém criticou muito o bolo que ficou bonito sim, e muito bom (minha vó gostou), e a gente tirou aquela foto maravilhosa de você sendo lobo.",
                "O mês de outubro não foi muito fácil no geral, mas eu sou eternamente grata por ter você ao meu lado. Me ajudou a ter forças para enfrentar os sentimentos ruins e seguir em frente.",
                "24/10",
                "Te convidei em casa quando ninguém estava. Foi um dia mais “íntimo”, mas um marco importante na nossa relação. Tudo foi muito bom aquele dia, me senti conectada com você, e o coitado nervoso. Mas nunca esquecerei esse dia maravilhoso. (descobri que o neném não era neném)",
                "30/10",
                "Eu juro que não esperava a surpresa que vocês fizeram para mim esse dia, eu fiquei muito feliz de compartilhar mais um momento importante com você, levo com muito carinho."
            ]
        },
        {
            name: "novembro 2025",
            paragraphs: [
                "08/11",
                "Primeira vez que fui pra SBC te ver. Foi assustador, fui pelo pior caminho possível, com pouca bateria, e tive que invadir sua casa de tabela. Conheci sua vó e sua irmã pelo menos. Mas foi bom o dia, fomos no parque e eu trouxe uma toalhinha de piquenique, amo os momentos de parque e natureza com você (Mesmo que em SBC), e a noite jantamos com seus amigos, foi um dia bem especial para mim. Amo todos os dias com você meu amor.",
                "21/11",
                "Mais um dia em SBC que a gente foi no parque, tomou vinho, e alguém derrubou vinho na minha saia. Tivemos que ir para sua casa, e se empolgamos (bastante) na sala, e vazamos para o shopping depois como se nada tivesse acontecido. Tenho uma foto sua que amo muito de você segurando uma pelúcia de tubarão, e foi desse dia que tive a ideia do presente de Natal.",
                "Eu sempre relembro esse dia. Ponto importante."
            ]
        },
        {
            name: "dezembro 2025",
            paragraphs: [
                "09/12",
                "Não sei nem como começar a descrever esse dia. A gente já havia falado sobre oficializar nossa relação (Você queria uma data performática), mas eu já imginava que a ansiedade ia falar mais alto. Foi nesse dia que nos encontramos na UFABC, fomos pegar um copão (Na chuva, como sempre), alguém trouxe banana desitrada (Sabendo que eu amo banana) e sentamos juntos naquela escada meio horrível, e você puxou a caixinha vermelha (Sem olhar pra mim) e fez o pedido. Fui a mulher mais feliz do mundo naquele dia.",
                "13/12",
                "Date oficial no Sukiya, como namoradinhos, e você experimentou minha cultura ai, disse que gostou pelo menos (Tenho um vídeo que eu gosto muito de você chacoalhando as batatas do sukiya) e servimos muito de aliança em sbc.Você veio em casa logo no dia seguinte e eu fiz penteados em você, tiramos fotinhos combinando com as duas bolinhas de cabelo, e eu te amava cada dia mais.",
                "31/12",
                "Ano novo com a minha familía e primeira vez que passava com alguém romanticamente. Fiquei muito ansiosa para te entregar o presente de Natal que não era nada conveniente, mas veio de coração (uma pelúcia de 1 metro de tubarão kk), e amei passar essa data tão especial com você, não poderia ter sido melhor. Fiquei muito feliz de ver você interagindo com a minha familía e a gente se beijando meia noite. Logo depois, passamos um tempo conversando de pijama, e também tive o privilégio de acordar com você (mesmo que não do meu lado)",
                "Te ver recém acordado só me provou que você é a pessoa mais linda do universo de qualquer maneira (lip lip)"
            ]
        },
        {
            name: "janeiro 2026",
            paragraphs: [
                "Janeiro escaldante. A correnteza trouxe águas mornas demais, sinto que preciso ir mais fundo. Lá embaixo encontro paz e escuridão. Um peixe-lanterna iluminou estas linhas enquanto eu as arranhava num osso de baleia (papel é difícil de achar por aqui).",
                "Cruzei com um mergulhador hoje – olhamos um para o outro por um longo minuto. A bolha que ele soltou subiu e estourou como um pensamento. Será que ele entendeu que eu só queria dizer 'olá, tudo bem?'.",
                "Ano novo, vida nova? Talvez. Mas continuo o mesmo tubarão de sempre: cicatrizes, dentes novos e um arquivo de cartas espalhadas pelo oceano. Janeiro me lembra que ainda faltam muitos meses."
            ]
        },
        {
            name: "fevereiro 2026",
            paragraphs: [
                "Fevereiro, último mês desta carta mensal. O mar está mais frio de repente, ou talvez seja a sensação de despedida. Nadei até o recife onde tudo começou em julho. As esponjas-do-mar cresceram, ouriços ocuparam espaços.",
                "Um grupo de tubarões-lixa jovens me perguntou sobre o mundo além. Contei sobre as cartas, sobre as palavras que escrevi mês a mês. Eles prometeram continuar a tradição – rabiscar histórias em cascos de tartaruga, em madeira à deriva.",
                "Guardo comigo todas as correntes que cruzei. De julho a fevereiro, o oceano girou e eu continuei. Agora, enquanto a maré puxa para longe, deixo este último registro: tubarões também escrevem cartas. E elas boiam, pesadas de verdade, à espera."
            ]
        }
    ];

       // ---------- state ----------
    let currentIndex = 0; // começa no primeiro mês

    // Elementos DOM
    const monthTitleEl = document.getElementById('monthTitle');
    const letterContentEl = document.getElementById('letterContent');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');

    // Verifica se os elementos existem (segurança)
    if (!monthTitleEl || !letterContentEl || !prevBtn || !nextBtn || !pageIndicator) {
        console.error('Elementos não encontrados! Verifique os IDs no HTML.');
        return;
    }

    // ---------- função principal para renderizar mês ----------
    function renderMonth(index) {
        // Verifica se o índice é válido
        if (index < 0 || index >= months.length) {
            console.error('Índice inválido:', index);
            return;
        }

        const monthData = months[index];
        
        // Atualiza título
        monthTitleEl.textContent = monthData.name;

        // Constrói os parágrafos
        let htmlStr = '';
        monthData.paragraphs.forEach(p => {
            htmlStr += `<p>${p}</p>`;
        });
        letterContentEl.innerHTML = htmlStr;

        // Atualiza indicador de página (agora dinâmico!)
        pageIndicator.textContent = `${index + 1} / ${months.length}`;

        // Habilita/desabilita botões conforme posição
        prevBtn.disabled = (index === 0);
        nextBtn.disabled = (index === months.length - 1);

        // 🔥 Rola suavemente para o topo
        try {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } catch (e) {
            // Fallback para navegadores antigos
            window.scrollTo(0, 0);
        }
    }

    // ---------- event listeners ----------
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderMonth(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < months.length - 1) {
            currentIndex++;
            renderMonth(currentIndex);
        }
    });

    // ---------- inicializa com o primeiro mês ----------
    renderMonth(0);

    // ---------- (opcional) suporte a teclas do teclado ----------
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            prevBtn.click();
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            nextBtn.click();
        }
    });

})();
    
