// Todo o conteúdo do portfólio fica aqui — para atualizar o site, edite só este arquivo.
import emailImg from '../assets/email.webp';
import ihcImg from '../assets/ihcGame.webp';
import estokarImg from '../assets/estokar-preview.webp';
import klipperImg from '../assets/klipper-preview.webp';
import gymvisionImg from '../assets/gymvision-preview.webp';

export const profile = {
  name: 'Matheus Souza',
  role: 'Consultor de Implantação & Projetos',
  tagline: 'Integrações fiscais, ERP e sistemas que funcionam no dia a dia do cliente.',
  summary:
    'Faço a ponte entre o negócio e a tecnologia: levanto requisitos, implanto sistemas, integro ERPs (SAP Business One) e cuido de rotinas fiscais como NF-e, NFS-e e NFCom — incluindo a adequação à reforma tributária (IBS/CBS). Tenho base sólida em desenvolvimento (Java, Python, C#) e bancos de dados, o que me permite diagnosticar problemas a fundo e conversar de igual para igual com times técnicos e de produto.',
  location: 'Conselheiro Lafaiete, MG · disponível para viagens e mudança',
  email: 'matheus.ramirez019@gmail.com',
  linkedin: 'https://www.linkedin.com/in/matheus-souza-a07200200/',
  github: 'https://github.com/souzza-matheus',
  cv: `${process.env.PUBLIC_URL}/curriculo-matheus-souza.pdf`,
};

export const highlights = [
  { value: '100+', label: 'clientes atendidos em suporte' },
  { value: 'SAP B1', label: 'integrações via Service Layer' },
  { value: 'NF-e · NFS-e · NFCom', label: 'documentos fiscais eletrônicos' },

export const skills = [
  {
    title: 'Implantação & Projetos',
    items: ['Levantamento de requisitos', 'Go-live e operação assistida', 'Scrum', 'Jira', 'Documentação técnica', 'Bizagi (BPMN)'],
  },
  {
    title: 'ERP & Fiscal',
    items: ['SAP Business One', 'Service Layer (OData)', 'NF-e', 'NFS-e', 'NFCom', 'Reforma tributária (IBS/CBS)', 'JasperReports'],
  },
  {
    title: 'Desenvolvimento',
    items: ['Java', 'Spring Boot', 'Python', 'C# / .NET', 'APIs REST', 'RabbitMQ', 'React', 'Node.js'],
  },
  {
    title: 'Dados & Infra',
    items: ['MySQL', 'PostgreSQL', 'PL/SQL', 'MongoDB', 'Power BI', 'Docker', 'JBoss / WildFly', 'Git', 'Postman', 'AWS S3'],
  },
];

export const projects = [
  {
    title: 'Estokar',
    description:
      'WMS (sistema de gestão de armazém) em arquitetura de microserviços com C#, com app de coletor Android e integração com ERP começando pelo SAP Business One. Pensado para ser oferecido como SaaS com implantação.',
    image: estokarImg,
    technologies: ['C#', '.NET', 'Microserviços', 'Android', 'SAP B1'],
    liveLink: 'https://souzza-matheus.github.io/estokar',
    featured: true,
  },
  {
    title: 'Klipper',
    description:
      'Plataforma de agendamento para barbearias direto pelo WhatsApp: o cliente conversa com um bot, escolhe serviço e horário, e o barbeiro gerencia a agenda num painel.',
    image: klipperImg,
    technologies: ['WhatsApp', 'Chatbot', 'Web'],
    liveLink: 'https://souzza-matheus.github.io/klipper-site',
    featured: true,
  },
  {
    title: 'GymVision (TCC)',
    description:
      'Sistema distribuído de análise biomecânica em tempo real com visão computacional, desenvolvido como Trabalho de Conclusão de Curso em Sistemas De Informação no IFMG, com app Android.',
    image: gymvisionImg,
    imageFit: 'contain',
    technologies: ['FastAPI', 'Spring Boot / Kotlin', 'NestJS', 'RabbitMQ', 'Docker', 'Android'],
  },
  {
    title: 'Email Sender',
    description:
      'API de envio de e-mails em Spring Boot com arquitetura limpa, autenticação JWT, rate limit com Redis e integração com provedores SMTP.',
    image: emailImg,
    technologies: ['Java', 'Spring Boot', 'Redis', 'JWT'],
    githubLink: 'https://github.com/souzza-matheus/email-sender',
  },
  {
    title: 'IHC Game',
    description:
      'Jogo de tabuleiro web em que você é um analista de IHC viajando por empresas para resolver problemas de usabilidade em quizzes de múltipla escolha.',
    image: ihcImg,
    technologies: ['React', 'Markdown', 'CSS'],
    githubLink: 'https://github.com/souzza-matheus/ihc-quiz',
    liveLink: 'https://souzza-matheus.github.io/ihc-quiz/',
  },
];

export const experiences = [
  {
    title: 'Consultor de Projetos e Implantação',
    company: 'Adapter Soluções Digitais',
    period: '2025 – 2026',
    description: [
      'Implantação de soluções de faturamento eletrônico e integrações ERP, conduzindo a operação assistida pós go-live (normalmente 30 dias) e o repasse ao time de suporte.',
      'Integrações com SAP Business One via Service Layer (Business Partners, Invoices) e diagnóstico de erros de payload.',
      'Rotinas de emissão de NFCom e NFS-e (Mastersaf DFe) e adequação à reforma tributária (LC 214/2025 — IBS/CBS).',
      'Correções de dados em SQL, depuração de stored procedures MySQL, templates JasperReports e documentação técnica dos projetos.',
    ],
  },
  {
    title: 'Analista de Suporte',
    company: 'Brafel Informática',
    period: 'Dez 2022 – Jun 2025',
    description: [
      'Atendimento a toda a base de mais de 100 clientes, resolvendo incidentes complexos em produção.',
      'Levantamento e análise de requisitos com clientes e produto, traduzindo necessidades de negócio em especificações técnicas.',
      'Desenvolvimento de funcionalidades em aplicação desktop Java.',
      'Gestão e otimização de bancos MySQL: modelagem, tuning de consultas e integridade dos dados.',
    ],
  },
];

export const education = [
  { title: 'Sistemas de Informação', place: 'IFMG — Campus Ouro Branco' },
  { title: 'Google Project Management Certificate'},
];
