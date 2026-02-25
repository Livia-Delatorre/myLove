(function() {
    // ---------- months from jul 2025 to feb 2026 ----------
    const months = [
        {
            name: "Nossa história",
            paragraphs: [
                "Meu amor por você não pode ser resumido apenas em palavras, mas aqui vai uma breve representação dos meus sentimentos.",
                "Com amor, Lívia.",
    
            ]
        },
        {
            name: "1° mês - julho 2025",
            paragraphs: [
                "31/07",
                "Escrevo esta carta com dentes que nunca param de crescer. Cada palavra é uma nova fileira, afiada. Guardo segredos de naufrágios, mas não os conto a ninguém. Talvez um dia um mergulhador encontre esta garrafa – ou melhor, esta velha âncora enferrujada onde costumo arranhar recados.",
                "Os golfinhos me chamam de 'sombra torta'. Gosto disso. Julho é longo, mas a lua cheia ilumina caminhos de plâncton. Amanhã sigo para o norte."
            ]
        },
        {
            name: "agosto 2025",
            paragraphs: [
                "Agosto, e as águas ficam turvas de tanto movimento. Barcos de pesca riscam o horizonte como arranhões no céu. Evito redes, mas uma cicatriz nova enfeita meu flanco – orgulho de quem escapa. Hoje conheci uma tartaruga centenária que falava de correntes que levam a ilhas esquecidas.",
                "Sabe, há um recife ali onde os corais crescem em forma de dentes. Nadei por entre eles e ouvi canções que os navios afundados cantam quando a pressão aumenta. Agosto é mês de tufões, mas por enquanto a calmaria reina. Estou guardando cada raio de sol na pele áspera.",
                "À noite, quando os pescadores recolhem as linhas, encosto o focinho no casco de um barco abandonado. Escrevo estas linhas imaginando que um dia alguém as leia enquanto o vento assobia como concha."
            ]
        },
        {
            name: "setembro 2025",
            paragraphs: [
                "Setembro chega com cheiro de tempestade distante. Nadei até uma fossa hoje – escura, fria, tão funda que a luz não ousa visitar. Lá embaixo vi lulas brilhantes e um peixe-diabo que me encarou como se eu fosse intruso. Talvez seja.",
                "Um tubarão-baleia passou por mim e me contou sobre plânctons dourados que só aparecem na primavera do hemisfério sul. Fiquei pensando: será que algum dia terei coragem de cruzar o equador? As cartas que escrevo são meu lastro, mantêm-me próximo do fundo, mas o coração quer superfície.",
                "As gaivotas levaram um pedaço de barbatana que perdi numa briga. Disseram que vão fazer um ninho com ele. De certa forma, serei parte do céu."
            ]
        },
        {
            name: "outubro 2025",
            paragraphs: [
                "Outubro, e os ventos mudaram. Sinto vibrações diferentes na água – talvez seja a aproximação de grandes migrações. Encontrei um cardume de atuns apressados, murmurando sobre 'águas quentes demais'. Até os peixes reclamam do tempo.",
                "Mergulhei perto de um navio naufragado na década de 20. O casco virou recife, moreias espreitam das vigias. Uma garrafa intacta boiava na cabine do capitão. Enfiei a mensagem que escrevi em julho dentro dela. Quem sabe um dia...",
                "Hoje sonhei que tinha asas. Acordei com uma arraia pairando sobre mim. Ela sorriu (será que arraias sorriem?) e disse: 'até os tubarões sonham, irmão'. E eu acreditei."
            ]
        },
        {
            name: "novembro 2025",
            paragraphs: [
                "Novembro traz águas cristalinas. Dá para ver o fundo mesmo a cinquenta metros. Andei seguindo um grupo de tubarões-martelo – eles me aceitaram por algumas braçadas. Conversamos sobre ruídos de hélices, sobre como o oceano encolhe com tanto barulho.",
                "Escrevo perto de uma fonte hidrotermal. A água ferve ao redor, mas camarões cegos dançam na borda. Que lição: vida onde parece impossível. Levo comigo um pouco desse calor nas escamas.",
                "Lua cheia outra vez. Dizem que tubarões enxergam pouco, mas eu vejo o reflexo prateado no dorso das ondas. É como se o mar quisesse me mostrar que ainda há beleza mesmo na escuridão."
            ]
        },
        {
            name: "dezembro 2025",
            paragraphs: [
                "Dezembro! Águas agitadas, verão no auge. Os recifes estão cheios de peixes-palhaço se escondendo. Encontrei um polvo que mudava de cor enquanto me contava fofocas das profundezas – 'sabe o camarão que roubou a anêmona? Pois então...'",
                "Nadei para águas mais rasas e vi crianças brincando na praia. Lembrei que meus ancestrais temiam humanos. Mas hoje, sob a luz do sol, só sinto curiosidade. Deixo que me vejam, apenas a barbatana, como um ponto de interrogação.",
                "No fundo, deposito conchas coloridas em círculo. Meu presente de fim de ano para o mar. Um caranguejo levou uma delas, agradeceu com os olhos. Dezembro é mês de dar, até para um solitário caçador."
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
    let currentIndex = 0; // 0-based, 0 = julho

    const monthTitleEl = document.getElementById('monthTitle');
    const letterContentEl = document.getElementById('letterContent');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');

    // ---------- helper: render current month's text ----------
    function renderMonth(index) {
        const monthData = months[index];
        monthTitleEl.textContent = monthData.name;

        // build paragraphs html
        let htmlStr = '';
        monthData.paragraphs.forEach(p => {
            htmlStr += `<p>${p}</p>`;
        });
        letterContentEl.innerHTML = htmlStr;

        // update indicator
        pageIndicator.textContent = `${index+1} / ${months.length}`;

        // disable prev/next if at boundaries
        prevBtn.disabled = (index === 0);
        nextBtn.disabled = (index === months.length - 1);
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

    // ---------- initial render (julho 2025) ----------
    renderMonth(0);
})();