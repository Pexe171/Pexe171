<p>
  <a href="https://davidhenrique.dev.br/">
    <picture>
      <source media="(max-width: 600px)" srcset="./assets/header-mobile.svg" />
      <img src="./assets/header.svg" width="1200" alt="David Henrique · Pexe171. Desenvolvedor em Manaus, Amazonas. Da interface à API, do navegador ao Android. Conheça meu portfólio." />
    </picture>
  </a>
</p>

# Oi, eu sou o David. Pode chamar de Pexe.

Desenvolvedor em **Manaus, Amazonas**. Crio aplicações web e Android, conecto sistemas e exploro visão computacional. Também transformo ideias em mods de Minecraft.

**[Conheça meu portfólio ↗](https://davidhenrique.dev.br/)** &nbsp; · &nbsp; [Projetos em destaque](#projetos-em-destaque) &nbsp; · &nbsp; [Catálogo completo](#catálogo-de-projetos)

## Projetos em destaque

Três caminhos para conhecer meu código: um app, um experimento com câmera e um mod.

### 01 / [EasySSH](https://github.com/Pexe171/EasySSH)

**Seu servidor, no bolso.** Cliente Android para acessar VPS e instâncias AWS EC2 por SSH. Os perfis e as chaves ficam no aparelho; a conexão vai diretamente ao servidor, com verificação de identidade e proteção pelo Android Keystore.

`Kotlin` · `Jetpack Compose` · `SSHJ` · `xterm.js`

[Explorar o código ↗](https://github.com/Pexe171/EasySSH) &nbsp; · &nbsp; [Ver versões](https://github.com/Pexe171/EasySSH/releases)

### 02 / LibrasApp & LIBRAS Trainer

**Da câmera ao reconhecimento de letras.** Um conjunto de experimentos para coletar amostras da mão, treinar classificadores em Python e explorar o reconhecimento no Android. O foco são letras e poses estáticas; o reconhecimento ainda é limitado e não traduz frases em Libras.

`Python` · `MediaPipe` · `OpenCV` · `scikit-learn` · `Kotlin`

[App Android ↗](https://github.com/Pexe171/LibrasApp) &nbsp; · &nbsp; [Treinamento dos modelos ↗](https://github.com/Pexe171/libras-trainer)

### 03 / [TikTok Chaos](https://github.com/Pexe171/ModTikTok)

**A audiência entra no jogo.** Likes, presentes e interações de uma LIVE viram ações configuráveis no Minecraft. Tem editor visual de regras, controle de eventos, simulador e overlay para OBS. A conexão com o TikTok usa uma implementação comunitária, não oficial.

`Java` · `Forge` · `NeoForge` · `OBS`

[Explorar o código ↗](https://github.com/Pexe171/ModTikTok)

## Sistemas para o dia a dia

Além dos projetos abertos, desenvolvo ferramentas com código privado:

- **Ajudante de Delivery · Web + Android** — pedidos, cardápio e histórico de restaurantes, com integração ao iFood e uma API compartilhada. Next.js, PostgreSQL, filas e Java no Android.
- **CrmPexe** — contatos, funil comercial e conversas em espaços de trabalho separados, com integrações ao Chatwoot, WhatsApp via Evolution e n8n. React, NestJS e PostgreSQL.
- **Ligador Leads** — distribuição de leads entre atendentes, controle de lotes e filas para evitar atribuições duplicadas. TypeScript, React, Express e SQLite.

[Decisões técnicas e detalhes dos projetos →](./docs/PROJETOS.md)

---

## Tecnologias no contexto

| Frente | Ferramentas que uso | Onde aparecem |
| --- | --- | --- |
| **Web e APIs** | TypeScript, JavaScript, React, Next.js, Node.js, NestJS, Express | Delivery, CRM, ferramentas comerciais e galerias |
| **Android** | Kotlin, Java, Jetpack Compose, CameraX, Android Keystore | EasySSH, LibrasApp, Delivery e JuntosNoite |
| **IA e visão** | Python, MediaPipe, OpenCV, scikit-learn, Flask, FastAPI, APIs de LLMs | Treino de classificadores, captura de pose e assistentes |
| **Dados e eventos** | PostgreSQL, Prisma, SQLite, MongoDB, Redis, BullMQ, Socket.IO, Supabase | Persistência, filas, sincronização e operação em tempo real |
| **Jogos e 3D** | Java, Fabric, Forge, NeoForge, Three.js | Mods de Minecraft, portfólio e visualização de assets |
| **Entrega e automação** | Docker, Git, GitHub, Gradle, Playwright, PM2, Cloudflare | Builds, automações, execução e publicação dos projetos |


## Como eu trabalho

Começo pelo fluxo de quem vai usar. Depois construo uma versão funcional, conecto as partes e testo os pontos em que o sistema pode falhar: pedido repetido, conexão perdida, dado incompleto, câmera sem uma boa leitura. A documentação acompanha o projeto para facilitar o próximo ajuste.

<p>
  <picture>
    <source media="(max-width: 600px)" srcset="./assets/workflow-mobile.svg" />
    <img src="./assets/workflow.svg" width="1200" alt="Meu fluxo de trabalho: entender o uso, construir, testar e ajustar com o uso." />
  </picture>
</p>

---

## Catálogo de projetos

Explore os repositórios e os experimentos por categoria. Os projetos em destaque também aparecem aqui.

<details>
<summary><strong>09 repositórios públicos de projetos</strong></summary>

| Projeto | O que você encontra |
| --- | --- |
| [TikTok Chaos](https://github.com/Pexe171/ModTikTok) | Interações de LIVE virando ações no Minecraft, com editor de regras e controle de eventos. Java, Forge e NeoForge. |
| [EasySSH](https://github.com/Pexe171/EasySSH) | Terminal SSH Android com conexão por chave e armazenamento protegido no aparelho. Kotlin e Compose. |
| [LibrasApp](https://github.com/Pexe171/LibrasApp) | Protótipo Android de reconhecimento de letras estáticas e coleta de amostras pela câmera. Kotlin, CameraX e MediaPipe. |
| [LIBRAS Trainer](https://github.com/Pexe171/libras-trainer) | Coleta de dados, treinamento, comparação de modelos e inferência por câmera. Python e scikit-learn. |
| [Amigo Oculto](https://github.com/Pexe171/AmigoOcuto) | Eventos, inscrições, listas de presentes, sorteio e comunicação por e-mail. React, Express e SQLite. |
| [Luna Web](https://github.com/Pexe171/LunaWEbCompleto) | Galeria de arte com autenticação, uploads, registro de autoria e moderação manual. Next.js, Express e MongoDB. |
| [JuntosNoite](https://github.com/Pexe171/JuntosNoite) | MVP de watch party Android com salas e sincronização de reprodução. Kotlin, Compose e Supabase Realtime. |
| [Matador de Mob](https://github.com/Pexe171/MatadorDeMob) | Mod com painel de seleção de mobs e controles de alcance e intervalo de ataque. Java e Fabric. |
| [EasySSH-Ios](https://github.com/Pexe171/EasySSH-Ios) | Repositório adicional do cliente SSH. Apesar do nome, a base disponível ainda é Android/Kotlin. |

</details>

<details>
<summary><strong>07 repositórios privados</strong></summary>

| Projeto | O que desenvolvo |
| --- | --- |
| **Ajudante de Delivery · Web** (`Ajuda-Delivery`) | Central de pedidos e cardápio, integração com iFood e propostas assistidas por IA. Next.js, PostgreSQL, Prisma e filas. |
| **Ajudante de Delivery · Android** (`Ajuda-Delivery-App`) | Cliente nativo para operar pedidos e acompanhar a loja pelo celular, conectado à API do produto. Java e Android Keystore. |
| **CrmPexe** | CRM com múltiplos espaços de trabalho, funil comercial, conversas e automações. React, NestJS, PostgreSQL, Chatwoot e n8n. |
| **Ligador Leads** (`LigadorLeads`) | Distribuição de leads, lotes por atendente, controle de filas e painel operacional. TypeScript, Express, React e SQLite. |
| **BodyMap360** | Pipeline experimental de captura de pose corporal por vídeo, visualização de landmarks e exportação de dados. Python, MediaPipe, OpenCV e FastAPI; avatar 3D no roadmap. |
| **ChatMath** (`ChatMathMod`) | Mod para identificar desafios matemáticos e de palavras no chat do Minecraft, com resolução local, HUD e controles de resposta. Java e Fabric. |
| **Portfólio** (`Portfolio`) | Meu site com apresentação dos projetos e uma experiência 3D com personagem animado. React, TypeScript, Three.js e Cloudflare. [Visitar ↗](https://davidhenrique.dev.br/) |

</details>

<details>
<summary><strong>Além do GitHub · ferramentas e experimentos locais</strong></summary>

Também mantenho projetos locais, em diferentes estágios de desenvolvimento. Alguns já aparecem no meu portfólio; outros são ferramentas de uso próprio e protótipos.

| Projeto | Foco |
| --- | --- |
| **Arquivo Dourado / Wiki Gold and Glory** | Extração e organização de dados de Unity/IL2CPP em uma wiki bilíngue, com busca e visualização 3D. Python, React e Three.js. |
| **Dossiê Fácil** | Organização de documentos por cliente, importação em lote, conversão e junção de PDFs. Extensão Chrome/Edge e helper local em TypeScript. |
| **Central de Bots Telegram** | Painel para operar lojas digitais, catálogos, estoque, pedidos e pagamentos em múltiplos bots. Next.js, NestJS, PostgreSQL e BullMQ. |
| **CurriculoZap** | Leitura de imagens de vagas, preparação de candidaturas e envio de currículo após revisão humana, com perfis e histórico separados. |
| **AUTO CADASTRO** | Aplicativo Windows e extensão para extrair dados de documentos e auxiliar no preenchimento de formulários. Python e OCR; integração com o formulário real ainda depende de validação. |
| **Editor AI** | Experimentos de edição e processamento de vídeo com modelos locais, cache de mídia e renderização acelerada por GPU. |
| **Lives Mailer / JavaDiv** | API de campanhas por e-mail, com agendamento, consentimento, descadastro e histórico. Java, Spring Boot e PostgreSQL. |
| **Lead CRM Desktop** | Gestão local de leads e etapas de atendimento. Base Electron/React com SQLite e uma reimplementação inicial em C++/Qt. |
| **Vaga Automática** | Aplicação de apoio a candidaturas e preparação de conteúdo com IA. React, NestJS, Prisma e SQLite. |
| **Campanhas de e-mail** | Importação de planilhas, mensagens personalizadas, fila persistente e acompanhamento de devoluções e atendimento. |
| **Agente de atendimento** | Assistente de WhatsApp para conversar com clientes e organizar agendamentos. Node.js e integração com modelos de linguagem. |
| **Discord Loja Bot** | Bot para organizar uma loja de produtos digitais e serviços no Discord. Node.js e discord.js. |
| **Browser Session Assist** | Ferramenta local para manter uma sessão de navegador entre execuções e apoiar fluxos com login manual. |

</details>

<sub>Catálogo revisado em setembro de 2026. O repositório Pexe171 hospeda este perfil e não entra na contagem de projetos.</sub>


---

**Quer ver os projetos em ação?** [Visite meu portfólio ↗](https://davidhenrique.dev.br/)

[Todos os repositórios públicos](https://github.com/Pexe171?tab=repositories) &nbsp; · &nbsp; [Voltar aos destaques ↑](#projetos-em-destaque)

<sub>David Henrique · Pexe171 · Manaus, AM</sub>
