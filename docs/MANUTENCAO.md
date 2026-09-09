# Manutenção do perfil

O conteúdo público está em `README.md`. Os resumos foram conferidos em setembro de 2026 usando a listagem autenticada dos repositórios, seus READMEs e, para ferramentas locais, a documentação disponível no workspace.

## Conteúdo

- O catálogo cobre os 16 repositórios de projetos da conta nessa revisão: 9 públicos e 7 privados. O repositório do perfil fica fora da contagem.
- A seção adicional reúne ferramentas locais documentadas. Cópias de terceiros e pastas sem informação suficiente não foram tratadas como projetos autorais.
- Projetos privados recebem nome, descrição funcional e tecnologias. Não colocar aqui credenciais, endereços internos, dados de clientes, arquivos de execução ou links que só funcionam com acesso privado.
- Confirmar o estado atual antes de atualizar uma descrição. Em particular: EasySSH-Ios ainda contém Android/Kotlin; LibrasApp tem limitações de reconhecimento; a animação de avatar do BodyMap360 está no roadmap.
- AgentCaixa não foi incluído: o endereço antigo não estava acessível na revisão.
- As contagens são editoriais, não métricas em tempo real. Atualizar os títulos dos catálogos junto com inclusões, exclusões ou mudanças de visibilidade.

## Identidade e animação

Grafite, texto claro e vermelho coral, com composição de ficha de projeto: nome grande, fotografia pessoal e marcações de enquadramento relacionadas ao trabalho com câmeras. O catálogo usa texto e tabelas nativas do GitHub para manter leitura e links acessíveis.

Os SVGs são autocontidos. A foto fornecida foi incorporada sem alterar o JPEG e exibida na proporção original. Não há scripts, fontes remotas, widgets de estatísticas ou serviços externos de geração de imagens.

As tags `picture` selecionam composições próprias até 600 px: a abertura empilha nome, foto e apresentação; o fluxo de trabalho se reorganiza em duas linhas.

- Entrada: 700 ms, deslocamento de 7 px e desaceleração curta.
- Linha de abertura: 1,1 segundo.
- Sinal e fluxo: uma execução de 4 e 3,8 segundos, respectivamente.
- Todos os efeitos param automaticamente e têm versão estática com `prefers-reduced-motion`.
- O conteúdo final permanece visível mesmo sem suporte à animação; as imagens têm texto alternativo no README.

## Regenerar os gráficos

Com Node.js instalado, executar na raiz do repositório:

```sh
node scripts/build-assets.mjs
```

O script usa apenas módulos nativos e lê `assets/david-henrique.jpeg`. Os SVGs gerados são versionados para que o perfil funcione sem build ou GitHub Actions.

Para alterar títulos, paleta ou movimento, editar `scripts/build-assets.mjs`, regenerar e verificar o README no tema claro, no escuro e em uma tela estreita. A pasta `.preview/` é ignorada pelo Git e pode guardar renderizações locais.
