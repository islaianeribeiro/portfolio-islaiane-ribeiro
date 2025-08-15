const projects = [
  {
    id: "1",
    nome: "APROARTI - Site Institucional",
    capa: "/images/aproarti/aproarti.png",
    descricaoCurta:
      "Aplicação web em React, Next.js e Tailwind CSS para promover o artesanato de Icó–CE, com design inspirado na cultura local e navegação acessível.",
    introducao:
      "Aplicação web inspirada na associação cultural APROARTI, desenvolvida para promover a arte e o artesanato local de Icó – CE. O projeto oferece uma presença digital moderna e acessível, valorizando os produtos, a história e o impacto cultural da associação.",
    funcionalidades: [
      "Home com apresentação da associação e sua missão.",
      "Seção 'Sobre' com histórico, áreas de atuação e objetivos culturais.",
      "Listagem de produtos artesanais com descrições informativas.",
      "Formulário de contato para artesãos, apoiadores e patrocinadores.",
    ],
    destaquesTecnicos: [
      "Frontend: React.js, Next.js, TypeScript e Tailwind CSS.",
      "Boas práticas: Navegação fluida, componentes reutilizáveis, Git e HTML semântico.",
      "Design: Paleta terrosa e tipografia sem serifa para transmitir autenticidade.",
    ],
    conclusao:
      "Esse projeto foi uma excelente oportunidade de aplicar conhecimentos técnicos em um contexto real e contribuir com uma iniciativa cultural de grande impacto. Pretendo expandi-lo com funcionalidades como login de artesãos e integração com APIs.",
    imagens: [
      "/images/aproarti/aproarti.png",
      "/images/aproarti/aproarti2.png",
      "/images/aproarti/aproarti3.png",
      "/images/aproarti/aproarti4.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/project-aproarti",
  },

  {
    id: "2",
    nome: "Weather Forecast",
    capa: "/images/tempo/tempo.png",
    descricaoCurta:
      "Aplicação em HTML, CSS e JavaScript (Vite) que exibe clima atual e previsão dos próximos dias via OpenWeather API, com layout responsivo e busca por cidade.",
    introducao:
      "Aplicação web interativa de previsão do tempo que consome dados da OpenWeather API, desenvolvida com foco em usabilidade, visual moderno e organização de código. Utiliza HTML, CSS e JavaScript (com Vite) e exibe informações meteorológicas em tempo real.",
    funcionalidades: [
      "Campo de busca para consulta de clima por cidade.",
      "Exibição do clima atual com temperatura, umidade, vento e descrição.",
      "Previsão estendida com ícones representativos para os próximos dias.",
      "Mensagens dinâmicas em caso de erro, como cidade inválida ou campo vazio.",
    ],
    destaquesTecnicos: [
      "Front-End: Vite, JavaScript, HTML e CSS com layout responsivo e animações leves.",
      "Organização: Estrutura em pastas como /api, /utils e /ui para facilitar a manutenção.",
      "API: Consumo da OpenWeather API com segurança da chave via variáveis de ambiente.",
      "Design: Ícones Font Awesome, fontes Poppins e imagens SVG para alertas visuais.",
    ],
    conclusao:
      "Esse projeto foi uma excelente oportunidade para praticar o consumo de APIs, aplicar boas práticas de organização modular e melhorar a experiência do usuário com uma interface leve e funcional.",
    imagens: [
      "/images/tempo/tempo.png",
      "/images/tempo/tempo2.png",
      "/images/tempo/tempo3.png",
      "/images/tempo/tempo4.png",
      "/images/tempo/tempo5.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/weather-forecast",
  },

  {
    id: "3",
    nome: "Pizzaria - Landing page",
    capa: "/images/pizzaria/pizzaria.png",
    descricaoCurta:
      "Página moderna e responsiva em Next.js e Tailwind CSS com cardápio dinâmico, depoimentos interativos e foco em experiência do usuário.",
    introducao:
      "Landing page responsiva e moderna para uma pizzaria fictícia, desenvolvida com o objetivo de praticar habilidades em Next.js, React.js e Tailwind CSS. O foco do projeto foi oferecer uma experiência de usuário fluida e interativa, destacando o cardápio e avaliações de clientes.",
    funcionalidades: [
      "Página inicial com título chamativo, imagem destaque da pizza e navegação para o cardápio ou pedido.",
      "Cardápio dinâmico a partir de um arquivo JSON.",
      "Avaliações de clientes fictícios com interação em JavaScript.",
      "Design responsivo para diversos dispositivos.",
    ],
    destaquesTecnicos: [
      "Frontend: Next.js, React.js, JavaScript e Tailwind CSS, com foco em performance e SEO.",
      "Dados: Uso de JSON para simular o backend.",
      "UI/UX: FontAwesome, layout limpo e atrativo.",
    ],
    conclusao:
      "Esse projeto foi uma ótima oportunidade para consolidar meus conhecimentos em Next.js e Tailwind, além de praticar conceitos de componentização e usabilidade. Pretendo expandi-lo com novas funcionalidades, como integração com API para pedidos online e animações com Framer Motion.",
    imagens: [
      "/images/pizzaria/pizzaria.png",
      "/images/pizzaria/pizzaria2.png",
      "/images/pizzaria/pizzaria3.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/pizzaria-landing-page",
  },

  {
    id: "4",
    nome: "Clone do Spotify",
    capa: "/images/spotify/spotify.png",
    descricaoCurta:
      "Aplicação de streaming em React, Node.js e MongoDB com player funcional, rotas dinâmicas e consumo de API, integrando frontend e backend.",
    introducao:
      "Aplicação web de streaming de música inspirada no Spotify, desenvolvida com tecnologias modernas de frontend e backend. A plataforma oferece uma experiência intuitiva, com funcionalidades dinâmicas de reprodução e navegação entre artistas.",
    funcionalidades: [
      "Página inicial com destaques de artistas e músicas populares.",
      "Player de música com controles de play, pausa, avanço e retrocesso.",
      "Rotas dinâmicas para navegação entre artistas e músicas.",
      "Consumo de API com Axios para integrar frontend e backend.",
    ],
    destaquesTecnicos: [
      "Frontend: React.js, Vite, JavaScript e CSS com foco em interatividade e responsividade.",
      "Backend: Node.js e Express na criação de API RESTful.",
      "Banco de dados: MongoDB para armazenamento de dados musicais.",
      "Integração: Comunicação eficiente entre as camadas com Axios.",
    ],
    conclusao:
      "Esse projeto foi essencial para desenvolver minhas habilidades em aplicações Full Stack, combinando lógica de backend com uma interface moderna. Pretendo continuar evoluindo a aplicação com novas funcionalidades e melhorias na experiência do usuário.",
    imagens: [
      "/images/spotify/spotify.png",
      "/images/spotify/spotify2.png",
      "/images/spotify/spotify3.png",
      "/images/spotify/spotify4.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/ProjetoSpotify",
  },

  {
    id: "5",
    nome: "Lista de Tarefas",
    capa: "/images/lista/lista.png",
    descricaoCurta:
      "Aplicação em HTML, CSS e JavaScript para gerenciar tarefas, com persistência no localStorage e feedback visual interativo.",
    introducao:
      "Aplicação web interativa para gerenciamento de tarefas, desenvolvida com foco em praticar manipulação do DOM, persistência de dados e usabilidade. O projeto permite adicionar, concluir e excluir tarefas de forma simples e dinâmica.",
    funcionalidades: [
      "Armazenamento persistente com localStorage.",
      "Adição e exclusão de tarefas com interface atualizada em tempo real.",
      "Marcação de tarefas concluídas com estilização dinâmica.",
      "Validação para evitar cadastro de tarefas vazias.",
      "Mensagem exibida quando não há tarefas cadastradas.",
    ],
    destaquesTecnicos: [
      "JavaScript: Manipulação do DOM para criar interações dinâmicas.",
      "localStorage: Garantia de persistência dos dados no navegador.",
      "HTML e CSS: Estrutura semântica e responsiva, com um visual simples com foco na funcionalidade.",
    ],
    conclusao:
      "Este projeto foi uma excelente oportunidade para consolidar fundamentos de JavaScript, lógica de programação e boas práticas em aplicações front-end sem uso de frameworks.",
    imagens: [
      "/images/lista/lista.png",
      "/images/lista/lista2.png",
      "/images/lista/lista3.png",
    ],
    linkRepositorio: "https://github.com/islaianeribeiro/todo-list",
  },
];

export default projects;
