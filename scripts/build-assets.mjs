import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const assetDir = resolve(root, 'assets');
mkdirSync(assetDir, { recursive: true });
// The original photograph is embedded unchanged. No remote fonts, scripts or images.
const photo = readFileSync(resolve(assetDir, 'david-henrique.jpeg')).toString('base64');

const header = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="432" viewBox="0 0 1200 432" role="img" aria-labelledby="title description">
  <title id="title">David Henrique — Pexe171</title>
  <desc id="description">Desenvolvedor em Manaus. Da interface à API, do navegador ao Android. Fotografia pessoal e áreas de trabalho.</desc>
  <style>
    .mono { font-family: 'Cascadia Code', Consolas, 'Liberation Mono', monospace; }
    .sans { font-family: 'Segoe UI', Arial, Helvetica, sans-serif; }
    .rule { transform-origin: 48px 376px; animation: draw 1.1s cubic-bezier(.16,1,.3,1) both; }
    .accent { animation: arrive .7s .15s cubic-bezier(.16,1,.3,1) both; }
    .signal { animation: signal 4s ease-in-out 1; }
    @keyframes draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes arrive { from { opacity: .4; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes signal { 0%,100% { opacity: 1; } 30%,65% { opacity: .35; } 45%,80% { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) { .rule,.accent,.signal { animation: none; } }
  </style>
  <rect width="1200" height="432" rx="8" fill="#17191e"/>
  <path d="M8 0H6V432H8" stroke="#f28072" stroke-width="6"/>
  <path d="M48 51H74" stroke="#f28072" stroke-width="3"/>
  <text x="90" y="58" class="mono" font-size="19" letter-spacing="1.5" fill="#f5f0e8">PEXE171</text>
  <text x="1152" y="58" text-anchor="end" class="mono" font-size="16" letter-spacing="1.2" fill="#c4c1bc">DESENVOLVEDOR DE SOFTWARE</text>
  <text x="44" y="167" class="sans" font-size="98" font-weight="750" letter-spacing="-5" fill="#f5f0e8">David</text>
  <text x="44" y="262" class="sans accent" font-size="98" font-weight="750" letter-spacing="-5" fill="#f28072">Henrique.</text>
  <text x="48" y="311" class="sans" font-size="25" fill="#dedcd6">Da interface à API.</text>
  <text x="48" y="344" class="sans" font-size="25" fill="#dedcd6">Do navegador ao Android.</text>
  <image x="742" y="99" width="410" height="230.625" href="data:image/jpeg;base64,${photo}"/>
  <g fill="none" stroke="#f28072" stroke-width="2">
    <path d="M734 122V91H765 M1129 91H1160V122 M734 307V338H765 M1129 338H1160V307"/>
  </g>
  <circle class="signal" cx="746" cy="357" r="4" fill="#f28072"/>
  <text x="762" y="363" class="mono" font-size="17" letter-spacing="1" fill="#c4c1bc">MANAUS, AMAZONAS · BRASIL</text>
  <path d="M48 383H1152" stroke="#3b3c41"/>
  <path class="rule" d="M48 383H1152" stroke="#f28072"/>
  <g class="sans" font-size="21" fill="#dedcd6">
    <text x="48" y="417">Web &amp; APIs</text>
    <text x="374" y="417">Android</text>
    <text x="654" y="417">Automação</text>
    <text x="1003" y="417">Visão &amp; jogos</text>
  </g>
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

const headerMobile = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="460" viewBox="0 0 640 460" role="img" aria-labelledby="title description">
  <title id="title">David Henrique — Pexe171</title>
  <desc id="description">Desenvolvedor em Manaus. Fotografia pessoal, web, Android, automação e visão computacional em uma composição compacta para celular.</desc>
  ${header.match(/<style>[\s\S]*?<\/style>/)[0]}
  <style>.rule { transform-origin: 32px 366px; }</style>
  <rect width="640" height="460" rx="8" fill="#17191e"/>
  <path d="M8 0H6V460H8" stroke="#f28072" stroke-width="6"/>
  <path d="M32 38H54" stroke="#f28072" stroke-width="3"/>
  <text x="68" y="46" class="mono" font-size="24" letter-spacing="1" fill="#dedcd6">PEXE171 / DESENVOLVEDOR</text>
  <text x="27" y="118" class="sans accent" font-size="65" font-weight="750" letter-spacing="-3" fill="#f28072">David Henrique.</text>
  <image x="32" y="155" width="304" height="171" href="data:image/jpeg;base64,${photo}"/>
  <g fill="none" stroke="#f28072" stroke-width="2">
    <path d="M25 175V148H52 M316 148H343V175 M25 306V333H52 M316 333H343V306"/>
  </g>
  <g class="sans" font-size="29" fill="#f5f0e8">
    <text x="376" y="184">Web &amp; APIs</text>
    <text x="376" y="229">Android</text>
    <text x="376" y="274">Automação</text>
    <text x="376" y="319">Visão &amp; jogos</text>
  </g>
  <path class="rule" d="M32 366H608" stroke="#f28072"/>
  <circle class="signal" cx="37" cy="403" r="4" fill="#f28072"/>
  <text x="53" y="412" class="sans" font-size="28" fill="#dedcd6">Manaus, Amazonas · Brasil</text>
  <text x="32" y="446" class="sans" font-size="23" fill="#c4c1bc">Da interface à API. Do navegador ao Android.</text>
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
