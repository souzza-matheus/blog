# Portfólio — Matheus Souza

Site pessoal com minha trajetória em **implantação de sistemas, integrações ERP (SAP Business One), documentos fiscais eletrônicos** e desenvolvimento.

🔗 **Acesse:** https://souzza-matheus.github.io/blog/

## Seções

- **Sobre** — resumo profissional, destaques e download do currículo
- **Habilidades** — Implantação & Projetos, ERP & Fiscal, Desenvolvimento, Dados & Infra
- **Projetos** — Estokar (WMS), Klipper (agendamento via WhatsApp), GymVision (TCC), Email Sender, IHC Game
- **Experiência e formação**
- **Contato** — formulário que abre o e-mail do visitante já preenchido (sem back-end)

## Tecnologias

React 19 · Create React App · CSS puro (sem framework) · GitHub Pages

## Como editar o conteúdo

Todo o texto do site (perfil, habilidades, projetos, experiências) fica em **`src/data/content.js`**. Para adicionar um projeto, basta incluir um objeto no array `projects` — a imagem é opcional (sem ela, o card mostra um placeholder com a inicial).

## Rodando localmente

```bash
git clone https://github.com/souzza-matheus/blog.git
cd blog
npm install
npm start          # http://localhost:3000
```

## Deploy

```bash
npm run deploy     # gera o build e publica na branch gh-pages
```
