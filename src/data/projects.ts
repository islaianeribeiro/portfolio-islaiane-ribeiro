const projects = [
  {
    id: "1",
    nome: "APROARTI - Site Institucional",
    descricaoCurta:
      "Site institucional desenvolvido com React, Next.js e Tailwind CSS para promover o artesanato de Icó–CE, com navegação acessível e design responsivo.",

    introducao:
      "Aplicação web desenvolvida com React e Next.js para promover a associação cultural APROARTI, valorizando a arte e o artesanato local de Icó–CE por meio de uma presença digital moderna, acessível e informativa.",

    funcionalidades: [
      "Apresentar a associação e sua missão cultural na página inicial.",
      "Exibir a história, áreas de atuação e objetivos da associação.",
      "Listar produtos artesanais com descrições informativas.",
      "Disponibilizar formulário de contato para artesãos, apoiadores e patrocinadores.",
    ],

    destaquesTecnicos: [
      "Tecnologias: React.js, Next.js, TypeScript e Tailwind CSS.",
      "Boas práticas: componentização, navegação fluida, HTML semântico e versionamento com Git.",
      "Design: paleta terrosa e tipografia sem serifa para reforçar identidade cultural.",
    ],

    conclusao:
      "O projeto possibilitou aplicar conceitos de desenvolvimento front-end em um contexto real, reforçando práticas de organização, acessibilidade e experiência do usuário. Como evolução futura, planejo implementar autenticação de artesãos e integrações com APIs.",

    imagens: [
      "/images/aproarti/aproarti.png",
      "/images/aproarti/aproarti2.png",
      "/images/aproarti/aproarti3.png",
      "/images/aproarti/aproarti4.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/project-aproarti",
    linkDeploy: "https://project-aproarti.vercel.app",
  },

  {
    id: "2",
    nome: "Weather Forecast",
    descricaoCurta:
      "Aplicação desenvolvida com HTML, CSS e JavaScript (Vite) que exibe o clima atual e a previsão dos próximos dias via OpenWeather API, com layout responsivo e busca por cidade.",
    introducao:
      "Aplicação web de previsão do tempo desenvolvida para consumir dados da OpenWeather API, com foco em usabilidade, visual moderno e organização de código. Exibe informações meteorológicas em tempo real utilizando HTML, CSS e JavaScript com Vite.",

    funcionalidades: [
      "Pesquisar condições climáticas por cidade.",
      "Exibir clima atual com temperatura, umidade, velocidade do vento e descrição.",
      "Apresentar previsão estendida para os próximos dias com ícones representativos.",
      "Exibir mensagens dinâmicas de erro para cidade inválida ou campo vazio.",
    ],

    destaquesTecnicos: [
      "Tecnologias: HTML, CSS, JavaScript (ES6+) e Vite.",
      "Organização: separação de responsabilidades em pastas como /api, /utils e /ui.",
      "Integração: consumo da OpenWeather API com chave protegida via variáveis de ambiente.",
      "UI: layout responsivo, animações leves e uso de Font Awesome, Google Fonts e SVGs.",
    ],

    conclusao:
      "O projeto permitiu aprofundar o consumo de APIs REST, a organização modular do código e a construção de interfaces responsivas, reforçando boas práticas no desenvolvimento front-end.",

    imagens: [
      "/images/tempo/tempo.png",
      "/images/tempo/tempo2.png",
      "/images/tempo/tempo3.png",
      "/images/tempo/tempo4.png",
      "/images/tempo/tempo5.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/weather-forecast",
    linkDeploy: "https://weather-forecast-app-islaianeribeiro.vercel.app",
  },

  {
    id: "3",
    nome: "Pizzaria - Landing page",
    descricaoCurta:
      "Landing page responsiva desenvolvida com Next.js e Tailwind CSS, com cardápio dinâmico, seções interativas e foco em experiência do usuário.",
    introducao:
      "Landing page responsiva desenvolvida para uma pizzaria fictícia, com o objetivo de praticar Next.js, React.js e Tailwind CSS. O projeto prioriza uma experiência de usuário fluida, destacando o cardápio e as avaliações de clientes.",

    funcionalidades: [
      "Exibir página inicial com chamada principal, imagem de destaque e navegação para o cardápio.",
      "Listar produtos do cardápio de forma dinâmica a partir de um arquivo JSON.",
      "Apresentar avaliações de clientes fictícios com interações em JavaScript.",
      "Garantir layout totalmente responsivo para diferentes dispositivos.",
    ],

    destaquesTecnicos: [
      "Tecnologias: Next.js, React.js, JavaScript e Tailwind CSS.",
      "Estrutura: componentização e organização do código para facilitar manutenção.",
      "UI/UX: layout limpo, uso de ícones com Font Awesome e foco em usabilidade.",
    ],

    conclusao:
      "O projeto possibilitou consolidar conhecimentos em Next.js e Tailwind CSS, além de reforçar práticas de componentização e experiência do usuário. Como evolução futura, planejo integrar APIs para pedidos online e adicionar animações com Framer Motion.",

    imagens: [
      "/images/pizzaria/pizzaria.png",
      "/images/pizzaria/pizzaria2.png",
      "/images/pizzaria/pizzaria3.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/pizzaria-landing-page",
    linkDeploy: "https://pizzaria-landing-page-alpha.vercel.app",
  },

  {
    id: "4",
    nome: "Clone do Spotify",
    descricaoCurta:
      "Aplicação full stack inspirada no Spotify, desenvolvida com React, Node.js e MongoDB, com player funcional, rotas dinâmicas e integração entre frontend e backend.",
    introducao:
      "Aplicação web de streaming de música inspirada no Spotify, desenvolvida com foco em integração entre frontend e backend. A plataforma oferece navegação dinâmica entre artistas e músicas, além de um player funcional para reprodução de áudio.",

    funcionalidades: [
      "Exibir página inicial com artistas e músicas em destaque.",
      "Reproduzir músicas com player funcional (play, pausa, avanço e retrocesso).",
      "Navegar entre artistas e músicas por meio de rotas dinâmicas.",
      "Consumir dados do backend via API REST utilizando Axios.",
    ],

    destaquesTecnicos: [
      "Frontend: React.js, Vite, JavaScript e CSS com foco em interatividade e responsividade.",
      "Backend: Node.js e Express para criação de API REST.",
      "Banco de dados: MongoDB para armazenamento de artistas e músicas.",
      "Integração: comunicação entre frontend e backend utilizando Axios.",
    ],

    conclusao:
      "O projeto permitiu aplicar conceitos de desenvolvimento Full Stack, integrando lógica de backend com uma interface interativa no frontend. Também reforçou o uso de APIs REST, rotas dinâmicas e organização de dados em aplicações web.",
    imagens: [
      "/images/spotify/spotify.png",
      "/images/spotify/spotify2.png",
      "/images/spotify/spotify3.png",
      "/images/spotify/spotify4.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/ProjetoSpotify",
    linkDeploy: "https://projetospotify.onrender.com",
  },

  {
    id: "5",
    nome: "Lista de Tarefas",
    descricaoCurta:
      "Aplicação em HTML, CSS e JavaScript para gerenciamento de tarefas, com persistência no localStorage e feedback visual ao usuário.",
    introducao:
      "Aplicação web para gerenciamento de tarefas desenvolvida com foco na prática de manipulação do DOM, persistência de dados e usabilidade. Permite criar, concluir e remover tarefas de forma simples e dinâmica.",

    funcionalidades: [
      "Adicionar e remover tarefas com atualização imediata da interface.",
      "Persistir dados no navegador utilizando localStorage.",
      "Marcar tarefas como concluídas com estilização dinâmica.",
      "Validar entradas para evitar o cadastro de tarefas vazias.",
      "Exibir mensagem informativa quando não há tarefas cadastradas.",
    ],

    destaquesTecnicos: [
      "JavaScript: manipulação direta do DOM para interações dinâmicas.",
      "Persistência: uso do localStorage para armazenamento de dados no navegador.",
      "HTML e CSS: estrutura semântica, layout responsivo e foco em funcionalidade.",
    ],

    conclusao:
      "O projeto possibilitou consolidar fundamentos de JavaScript, lógica de programação e boas práticas no desenvolvimento front-end sem o uso de frameworks.",
    imagens: [
      "/images/lista/lista.png",
      "/images/lista/lista2.png",
      "/images/lista/lista3.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/todo-list",
    linkDeploy: "https://lista-de-tarefas-islaianeribeiro.netlify.app",
  },
];

export default projects;
