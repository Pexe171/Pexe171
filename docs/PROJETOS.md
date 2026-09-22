# Projetos por dentro

[← Voltar ao perfil](../README.md)

Decisões de implementação e tecnologias dos projetos em destaque. As descrições refletem a revisão de setembro de 2026.

### 01 / Ajudante de Delivery

**Operação de restaurante na web e no Android · código privado**

Uma central para acompanhar pedidos, trabalhar o cardápio e consultar o histórico da operação. O painel web se conecta ao iFood, e o aplicativo Android consome a mesma API para levar o atendimento ao celular.

- **Na web:** painel instalável como PWA, pedidos, catálogo, importação de planilhas e propostas assistidas por IA, com aprovação humana antes da execução.
- **No Android:** app nativo em Java, com fila de pedidos, etapas de preparo e despacho, cardápio e sessão protegida pelo Android Keystore.
- **No backend:** autorização por restaurante, processamento de eventos com proteção contra duplicidade, filas e histórico de ações.

`TypeScript` · `Next.js` · `PostgreSQL` · `Prisma` · `Redis / BullMQ` · `Java / Android`

### 02 / CrmPexe & Ligador Leads

**Duas ferramentas para operação comercial · código privado**

O **CrmPexe** reúne contatos, negociações, etapas do funil e conversas em um CRM com espaços de trabalho separados. A operação em tempo real se conecta ao WhatsApp via Evolution, ao Chatwoot e a fluxos de automação com n8n.

O **Ligador Leads** resolve outra parte do trabalho: distribuir leads entre atendentes, controlar os lotes em andamento e evitar que duas pessoas recebam o mesmo lead. O painel acompanha filas, estoque e equipe, com persistência local e automações de apoio.

`TypeScript` · `React` · `NestJS / Express` · `PostgreSQL / SQLite` · `Socket.IO` · `Playwright`

### 03 / [EasySSH](https://github.com/Pexe171/EasySSH)

**Um terminal para levar o servidor no bolso · código público**

Cliente Android para acessar VPS e instâncias AWS EC2 por SSH. Cadastro a máquina, importo a chave e abro um terminal interativo pelo celular. Os perfis e as chaves ficam no aparelho; a conexão vai diretamente ao servidor.

O projeto combina interface em Jetpack Compose, terminal com xterm.js, chaves protegidas pelo Android Keystore e verificação da identidade do servidor na conexão.

`Kotlin` · `Jetpack Compose` · `SSHJ` · `Android Keystore` · `xterm.js`

[Código e documentação ↗](https://github.com/Pexe171/EasySSH) · [Versões para instalar](https://github.com/Pexe171/EasySSH/releases)

### 04 / LibrasApp & LIBRAS Trainer

**Da câmera ao reconhecimento de letras · código público, experimental**

No **[LIBRAS Trainer](https://github.com/Pexe171/libras-trainer)**, coleto amostras da mão, preparo os dados, treino classificadores e comparo os resultados. No **[LibrasApp](https://github.com/Pexe171/LibrasApp)**, exploro o reconhecimento pela câmera do Android e a coleta supervisionada de novas amostras.

O trabalho passa por detecção de landmarks, normalização, separação entre treino e teste e estabilidade da previsão entre frames. São experimentos com letras e poses estáticas; o app tem reconhecimento inicial limitado e ainda não é um tradutor de frases em Libras.

`Python` · `MediaPipe` · `OpenCV` · `scikit-learn` · `Flask` · `Kotlin / CameraX`

### 05 / [TikTok Chaos](https://github.com/Pexe171/ModTikTok)

**A audiência participa do mundo de Minecraft · código público**

Mod que transforma likes, presentes e outras interações de uma LIVE pública do TikTok em ações configuráveis no jogo. As regras são montadas em um painel dentro do Minecraft, com seleção visual de criaturas, itens e efeitos.

Além da integração, trabalhei o que acontece quando chegam muitos eventos ao mesmo tempo: filas limitadas, controle de frequência, proteção contra duplicidade e pausa de emergência. O projeto também tem simulador e overlay local para OBS. A conexão com a LIVE usa uma implementação comunitária, não oficial.

`Java` · `Forge` · `NeoForge` · `Eventos em tempo real` · `OBS`

[Código e documentação ↗](https://github.com/Pexe171/ModTikTok)
