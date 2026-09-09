import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const assetDir = resolve(root, 'assets');
mkdirSync(assetDir, { recursive: true });
// The original photograph is embedded unchanged. No remote fonts, scripts or images.
const photo = readFileSync(resolve(assetDir, 'david-henrique.jpeg')).toString('base64');

const header = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="438" viewBox="0 0 1200 438" role="img" aria-labelledby="title description">
  <title id="title">David Henrique — Pexe171</title>
  <desc id="description">Desenvolvedor de software em Manaus. Web, Android, automação e visão computacional. Foto pessoal. Animação de entrada breve, respeitando redução de movimento.</desc>
  <defs>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="#fff" stroke-opacity=".035"/>
    </pattern>
  </defs>
  <style>
    .mono { font-family: 'Cascadia Code', Consolas, 'Liberation Mono', monospace; }
    .sans { font-family: 'Segoe UI', Arial, Helvetica, sans-serif; }
    .rule { transform-origin: 52px 389px; animation: draw 1.1s cubic-bezier(.16,1,.3,1) both; }
    .accent { animation: arrive .7s .15s cubic-bezier(.16,1,.3,1) both; }
    .signal { animation: signal 4s ease-in-out 1; }
    @keyframes draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes arrive { from { opacity: .4; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes signal { 0%,100% { opacity: 1; } 30%,65% { opacity: .35; } 45%,80% { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) { .rule,.accent,.signal { animation: none; } }
  </style>
  <rect width="1200" height="438" rx="8" fill="#17191e"/>
  <rect width="1200" height="438" rx="8" fill="url(#grid)"/>
  <path d="M52 56H74" stroke="#f28072" stroke-width="3"/>
  <text x="89" y="61" class="mono" font-size="15" letter-spacing="2" fill="#dedcd6">PEXE171 / SOFTWARE DEVELOPER</text>
  <text x="52" y="172" class="sans" font-size="92" font-weight="750" letter-spacing="-5" fill="#f5f0e8">David</text>
  <text x="48" y="265" class="sans accent" font-size="92" font-weight="750" letter-spacing="-5" fill="#f28072">Henrique.</text>
  <text x="54" y="312" class="sans" font-size="20" fill="#c4c1bc">Web, Android, automação</text>
  <text x="54" y="341" class="sans" font-size="20" fill="#c4c1bc">e visão computacional.</text>
  <path d="M667 89V336" stroke="#393b42"/>
  <image x="716" y="87" width="432" height="243" href="data:image/jpeg;base64,${photo}"/>
  <g fill="none" stroke="#f28072" stroke-width="2">
    <path d="M707 111V78H740 M1124 78H1157V111 M707 306V339H740 M1124 339H1157V306"/>
  </g>
  <circle class="signal" cx="723" cy="362" r="4" fill="#f28072"/>
  <text x="740" y="367" class="mono" font-size="13" letter-spacing="2" fill="#c4c1bc">MANAUS, AMAZONAS / BRASIL</text>
  <path d="M52 390H1148" stroke="#3b3c41"/>
  <path class="rule" d="M52 390H1148" stroke="#f28072" stroke-width="2"/>
  <text x="52" y="418" class="mono" font-size="11" letter-spacing="1.5" fill="#b3b0ab">INTERFACES / APIs / CÂMERAS / JOGOS</text>
  <text x="1148" y="418" text-anchor="end" class="mono" font-size="11" letter-spacing="1.5" fill="#b3b0ab">davidhenrique.dev.br</text>
</svg>
`;

const workflow = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="132" viewBox="0 0 1200 132" role="img" aria-labelledby="title description">
  <title id="title">Entender, construir, testar e ajustar</title>
  <desc id="description">Quatro etapas ligadas por uma linha. O traço percorre o fluxo uma vez e se estabiliza. Versão estática quando a redução de movimento está ativa.</desc>
  <style>
    .label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 22px; font-weight: 600; fill: #ece7df; }
    .index { font-family: Consolas, 'Liberation Mono', monospace; font-size: 12px; fill: #b9b4ae; letter-spacing: 1px; }
    .trace { stroke-dasharray: 1; animation: trace 3.8s cubic-bezier(.65,0,.35,1) both; }
    @keyframes trace { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .trace { animation: none; } }
  </style>
  <rect width="1200" height="132" rx="8" fill="#17191e"/>
  <path d="M72 99H1128" fill="none" stroke="#414149" stroke-width="2"/>
  <path class="trace" pathLength="1" d="M72 99H1128" fill="none" stroke="#f28072" stroke-width="2"/>
  <g class="index"><text x="72" y="32">01 / CONTEXTO</text><text x="350" y="32">02 / IMPLEMENTAÇÃO</text><text x="652" y="32">03 / VALIDAÇÃO</text><text x="936" y="32">04 / ITERAÇÃO</text></g>
  <g class="label"><text x="72" y="66">Entender o uso</text><text x="350" y="66">Construir</text><text x="652" y="66">Testar</text><text x="936" y="66">Ajustar</text></g>
  <g fill="#17191e" stroke="#f28072" stroke-width="2"><circle cx="72" cy="99" r="5"/><circle cx="350" cy="99" r="5"/><circle cx="652" cy="99" r="5"/><circle cx="936" cy="99" r="5"/></g>
  <path d="m1119 93 9 6-9 6" fill="none" stroke="#f28072" stroke-width="2"/>
</svg>
`;

const headerMobile = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="588" viewBox="0 0 640 588" role="img" aria-labelledby="title description">
  <title id="title">David Henrique — Pexe171</title>
  <desc id="description">Desenvolvedor em Manaus. Nome, fotografia pessoal e áreas de trabalho em uma composição vertical para celular.</desc>
  ${header.match(/<style>[\s\S]*?<\/style>/)[0]}
  <rect width="640" height="588" rx="8" fill="#17191e"/>
  <path d="M32 35H50" stroke="#f28072" stroke-width="3"/>
  <text x="63" y="41" class="mono" font-size="16" letter-spacing="1.5" fill="#dedcd6">PEXE171 / SOFTWARE DEVELOPER</text>
  <text x="27" y="107" class="sans accent" font-size="64" font-weight="750" letter-spacing="-3" fill="#f28072">David Henrique.</text>
  <image x="32" y="139" width="576" height="324" href="data:image/jpeg;base64,${photo}"/>
  <g fill="none" stroke="#f28072" stroke-width="2"><path d="M25 164V132H56 M584 132H615V164 M25 438V470H56 M584 470H615V438"/></g>
  <circle cx="37" cy="495" r="4" fill="#f28072" class="signal"/>
  <text x="53" y="501" class="mono" font-size="16" letter-spacing="1" fill="#c4c1bc">MANAUS, AMAZONAS / BRASIL</text>
  <text x="32" y="542" class="sans" font-size="22" fill="#f5f0e8">Web, Android, automação e visão computacional.</text>
  <path class="rule" d="M32 568H608" stroke="#f28072" stroke-width="2"/>
</svg>
`;

const workflowMobile = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="304" viewBox="0 0 640 304" role="img" aria-labelledby="title description">
  <title id="title">Entender, construir, testar e ajustar</title>
  <desc id="description">Fluxo em duas linhas: entender o uso, construir, testar e ajustar. O traço se estabiliza após uma execução.</desc>
  ${workflow.match(/<style>[\s\S]*?<\/style>/)[0]}
  <rect width="640" height="304" rx="8" fill="#17191e"/>
  <path d="M40 111H590V262H40" fill="none" stroke="#414149" stroke-width="2"/>
  <path class="trace" pathLength="1" d="M40 111H590V262H40" fill="none" stroke="#f28072" stroke-width="2"/>
  <g class="index" style="font-size:16px"><text x="40" y="40">01 / CONTEXTO</text><text x="352" y="40">02 / IMPLEMENTAÇÃO</text><text x="352" y="192">03 / VALIDAÇÃO</text><text x="40" y="192">04 / ITERAÇÃO</text></g>
  <g class="label" style="font-size:28px"><text x="40" y="80">Entender o uso</text><text x="352" y="80">Construir</text><text x="352" y="232">Testar</text><text x="40" y="232">Ajustar</text></g>
  <g fill="#17191e" stroke="#f28072" stroke-width="2"><circle cx="40" cy="111" r="5"/><circle cx="352" cy="111" r="5"/><circle cx="352" cy="262" r="5"/><circle cx="40" cy="262" r="5"/></g>
  <path d="m251 105 9 6-9 6 M279 256l-9 6 9 6" fill="none" stroke="#f28072" stroke-width="2"/>
</svg>
`;

for (const [name, source] of Object.entries({ header, workflow, 'header-mobile': headerMobile, 'workflow-mobile': workflowMobile })) {
  writeFileSync(resolve(assetDir, `${name}.svg`), source);
}
console.log('Generated four self-contained SVGs with desktop/mobile layouts and reduced-motion support.');
