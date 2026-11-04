
const stages=[
['Filtrasi','Saringan pertama di glomerulus. Tekanan darah mendorong air dan zat kecil melewati endotel berfenestra, membran basal, serta celah podosit ke ruang Bowman.','Darah → ruang Bowman',['H₂O','Na⁺ / K⁺ / Cl⁻','Glukosa','Asam amino','Urea','Kreatinin'],'Sel darah dan sebagian besar protein tetap di sirkulasi. Arteriol eferen membawa darah menuju kapiler peritubular dan vasa recta.'],
['Reabsorpsi','Tubulus proksimal mengambil kembali sebagian besar air dan natrium serta hampir seluruh glukosa dan asam amino yang tersaring pada keadaan normal. Zat melintasi epitel ke interstisium, lalu ke kapiler.','Lumen tubulus → darah',['H₂O','Na⁺','HCO₃⁻','Glukosa','Asam amino'],'Lengkung Henle: desenden permeabel terhadap air; asenden tebal mereabsorpsi Na⁺, K⁺, Cl⁻ dan relatif impermeabel terhadap air. Gradien medula membantu pemekatan urin.'],
['Sekresi tubular','Zat tertentu dipindahkan dari darah/interstisium ke lumen tubulus. Sekresi terjadi di tubulus proksimal serta segmen distal, membantu eliminasi zat dan keseimbangan asam–basa.','Darah → lumen tubulus',['H⁺','K⁺ (teregulasi)','NH₄⁺','Anion/kation organik','Sebagian obat'],'Sekresi bukan ekskresi. Sekresi K⁺ terutama di nefron distal dipengaruhi aldosteron; H⁺ disekresikan antara lain oleh sel interkalasi. Proses berlangsung bersamaan dengan reabsorpsi.'],
['Pemekatan urin','Tubulus distal dan duktus kolektivus menyetel komposisi akhir urin. ADH meningkatkan permeabilitas air pada sel prinsipal duktus kolektivus melalui aquaporin-2.','Duktus kolektivus → interstisium → darah',['H₂O (ADH)','Na⁺ (aldosteron)','Urea (daur ulang medula)'],'ADH tinggi → lebih banyak air kembali → urin lebih pekat. Urea dapat direabsorpsi dan didaur ulang; kreatinin terutama difiltrasi dengan sedikit sekresi.'],
['Transport urin','Urin dari duktus kolektivus mengalir melalui duktus papilaris di papila renalis, kaliks minor, kaliks mayor, pelvis renalis, lalu ureter kanan dan kiri.','Ginjal → ureter → vesika',['Air','Urea','Kreatinin','Elektrolit berlebih'],'Kontraksi peristaltik ureter mengangkut urin. Urin tidak mengalir melalui vena renalis; vena membawa darah kembali ke sirkulasi.'],
['Penyimpanan','Urin ditampung di vesika urinaria. Otot detrusor relatif relaks saat pengisian, sementara mekanisme penutupan uretra dan sfingter membantu mempertahankan kontinensia.','Ureter → vesika urinaria',['H₂O','Urea','Kreatinin','Ion terlarut'],'Vesika bukan tempat filtrasi. Regangan dinding memicu sinyal saraf rasa ingin berkemih; waktu miksi dipengaruhi kendali otak.'],
['Miksi & ekskresi','Saat berkemih, koordinasi saraf mengontraksikan detrusor dan merelaksasikan saluran keluar serta sfingter uretra eksternal. Urin melewati uretra dan meatus menuju luar tubuh.','Vesika → uretra → luar tubuh',['Air','Urea','Kreatinin','Kelebihan ion','Metabolit obat'],'Ekskresi adalah hasil akhir eliminasi zat lewat urin; miksi adalah tindakan mengosongkan vesika. Uretra berbeda panjang dan lintasannya menurut jenis kelamin.']];
// One shared visual definition drives particles, controls, legend and stage chips.
// Shapes are educational symbols, not molecular structures or relative sizes.
const molecules={
Air:{color:'#20bcf2',colorName:'Biru',shape:'Tetes',formula:'H₂O',icon:'<path d="M0 -8C-2 -4-6 0-6 3a6 6 0 0 0 12 0C6 0 2-4 0-8Z"/>',route:'both',info:'Difiltrasi, lalu sebagian besar direabsorpsi. Reabsorpsi akhir air dipengaruhi ADH; sisanya keluar bersama urin.'},
Glukosa:{color:'#ff9b21',colorName:'Jingga',shape:'Heksagon',formula:'C₆H₁₂O₆',icon:'<path d="M-7 0-3.5-6h7L7 0 3.5 6h-7Z"/>',route:'reabsorb',info:'Difiltrasi lalu hampir seluruhnya direabsorpsi di tubulus proksimal pada keadaan normal.'},
Natrium:{color:'#32dc7c',colorName:'Hijau',shape:'Lingkaran',formula:'Na⁺',icon:'<circle r="6"/>',route:'both',info:'Difiltrasi dan direabsorpsi di berbagai segmen. Sebagian diekskresikan sesuai kebutuhan keseimbangan natrium.'},
Kalium:{color:'#ff63bc',colorName:'Magenta',shape:'Segitiga',formula:'K⁺',icon:'<path d="M0-7 7 6H-7Z"/>',route:'potassium',info:'Difiltrasi dan banyak direabsorpsi; sekresi K⁺ yang teratur terutama berlangsung di nefron distal.'},
Klorida:{color:'#11d8c8',colorName:'Toska',shape:'Persegi',formula:'Cl⁻',icon:'<rect x="-6" y="-6" width="12" height="12"/>',route:'both',info:'Difiltrasi dan direabsorpsi bersama transport elektrolit di tubulus; sebagian tetap dalam urin.'},
'Asam amino':{color:'#f2d248',colorName:'Emas',shape:'Belah ketupat',formula:'AA',icon:'<path d="M0-8 6 0 0 8-6 0Z"/>',route:'reabsorb',info:'Kelompok molekul yang difiltrasi dan hampir seluruhnya direabsorpsi di tubulus proksimal pada keadaan normal.'},
Bikarbonat:{color:'#639cff',colorName:'Biru kobalt',shape:'Pentagon',formula:'HCO₃⁻',icon:'<path d="M0-7 7-2 4 6H-4L-7-2Z"/>',route:'reabsorb',info:'Sebagian besar bikarbonat terfiltrasi dipulihkan melalui proses reabsorpsi, terutama di tubulus proksimal.'},
Urea:{color:'#db9763',colorName:'Cokelat',shape:'Kapsul',formula:'CO(NH₂)₂',icon:'<rect x="-8" y="-4" width="16" height="8" rx="4"/>',route:'both',info:'Difiltrasi, sebagian direabsorpsi dan didaur ulang di medula. Sebagian akhirnya diekskresikan.'},
Kreatinin:{color:'#d3d9e2',colorName:'Abu perak',shape:'Bintang',formula:'C₄H₇N₃O',icon:'<path d="M0-8 2.3-2.8 7.6-2.5 3.8 1 4.7 6.5 0 3.8-4.7 6.5-3.8 1-7.6-2.5-2.3-2.8Z"/>',route:'excrete',info:'Difiltrasi dan sedikit disekresikan; umumnya tidak direabsorpsi secara bermakna, kemudian diekskresikan.'},
Protein:{color:'#ff5264',colorName:'Merah',shape:'Tiga lobus',formula:'Protein',icon:'<path d="M0-2C-8-12-13 3-4 5C-5 14 10 12 6 3C15-3 4-12 0-2Z"/>',route:'blood',info:'Sebagian besar protein plasma tetap di darah. Protein kecil yang tersaring umumnya diambil kembali di tubulus proksimal.'},
'Hidrogen':{color:'#ff703c',colorName:'Jingga merah',shape:'Tanda tambah',formula:'H⁺',icon:'<path d="M-2-7H2V-2H7V2H2V7H-2V2H-7V-2H-2Z"/>',route:'secrete',info:'Disekresikan ke lumen tubulus untuk membantu pengaturan keseimbangan asam–basa; prosesnya melibatkan beberapa segmen.'},
Amonium:{color:'#b4d74d',colorName:'Hijau zaitun',shape:'Segitiga terbalik',formula:'NH₄⁺',icon:'<path d="M-7-5H7L0 7Z"/>',route:'secrete',info:'Dihasilkan dan ditangani ginjal dalam ekskresi asam; skema menyoroti sekresi ke lumen dan eliminasi akhirnya.'},
'Obat / metabolit':{color:'#d88bff',colorName:'Ungu anggrek',shape:'Silang',formula:'Obat',icon:'<path d="M-5-8 0-3 5-8 8-5 3 0 8 5 5 8 0 3-5 8-8 5-3 0-8-5Z"/>',route:'secrete',info:'Contoh kelompok zat yang dapat disekresikan. Filtrasi, reabsorpsi, dan ekskresi tiap obat berbeda; jalur ini bersifat ilustratif.'}
};
function marker(name,cssClass='molecule-symbol'){
const m=molecules[name];return `<svg class="${cssClass}" viewBox="-12 -12 24 24" aria-hidden="true"><g fill="${m.color}" stroke="#10171c" stroke-width="1" stroke-linejoin="round">${m.icon}</g></svg>`
}
const moleculeKeys=Object.keys(molecules);
let current=0,playing=false,view='nephron',molecule='Semua',volume=0,last=Date.now();const $=id=>document.getElementById(id);
$('steps').innerHTML=stages.map((s,i)=>`<button class="step" data-i="${i}"><span class="step-marker" aria-hidden="true"></span>${s[0]}</button>`).join('');document.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>select(+b.dataset.i));document.querySelectorAll('[data-stage]').forEach(g=>g.onclick=()=>select(+g.dataset.stage));
$('moleculeButtons').innerHTML=['Semua',...moleculeKeys].map(name=>`<button data-m="${name}" title="${name==='Semua'?'Tampilkan seluruh molekul dan ion':molecules[name].formula+' · '+molecules[name].colorName+' · '+molecules[name].shape}">${name==='Semua'?'<span class="all-mark" aria-hidden="true">∗</span>':marker(name)}<span>${name}</span></button>`).join('');
document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{molecule=b.dataset.m;renderMolecule()});
$('moleculeLegend').innerHTML=moleculeKeys.map(name=>{const m=molecules[name];return `<div class="molecule-legend-row">${marker(name)}<div><strong>${name} <span>${m.formula}</span></strong><p>${m.colorName} · ${m.shape}</p></div></div>`}).join('');
const tubularPath='M281 245C313 245 305 180 334 180S343 280 376 270S381 180 410 200L410 535Q410 600 455 600Q500 600 500 535L500 275C500 235 530 228 550 250S578 287 595 255S609 211 630 225L690 265V620';
const filtrationPath='M45 145H112Q140 145 156 184L176 205Q218 219 247 241L281 245';
const bloodPath='M45 145H112Q140 145 156 184L176 205Q194 220 214 205L231 188Q238 137 273 130H337';
const reabsorbPath='M45 145H112Q140 145 156 184L176 205Q218 219 247 241L281 245C313 245 305 180 334 180S343 280 376 270L348 292L348 331';
const proximalSecretion='M337 130L364 159L376 270Q391 270 393 230Q395 183 410 200L410 535Q410 600 455 600Q500 600 500 535L500 275C500 235 530 228 550 250S578 287 595 255S609 211 630 225L690 265V620';
const distalSecretion='M601 322L582 274Q590 275 595 255T630 225L690 265V620';
function nephronPaths(m){
if(m.route==='blood')return [bloodPath];
if(m.route==='reabsorb')return [reabsorbPath];
if(m.route==='secrete')return [proximalSecretion];
if(m.route==='potassium')return [reabsorbPath,distalSecretion];
if(m.route==='excrete')return [filtrationPath+tubularPath.replace(/^M281 245/,''),proximalSecretion];
return [reabsorbPath,filtrationPath+tubularPath.replace(/^M281 245/,'')]
}
function movingSymbol(name,path,index,small=false){const m=molecules[name];const duration=12+(index%3)*2;return `<g class="molecule-particle" data-molecule="${name}" aria-label="${name} : ${m.colorName}, ${m.shape}" fill="${m.color}" stroke="#10171c" stroke-width="1.4" stroke-linejoin="round"><title>${name} (${m.formula}) — ${m.colorName}, ${m.shape}</title><g transform="scale(${small?0.75:(molecule==='Semua'?0.72:0.95)})">${m.icon}</g><animateMotion dur="${duration}s" begin="-${(index*2.37)%duration}s" repeatCount="indefinite" path="${path}"/></g>`}
function renderMolecule(){
document.querySelectorAll('[data-m]').forEach(b=>{b.classList.toggle('on',b.dataset.m===molecule);b.setAttribute('aria-pressed',String(b.dataset.m===molecule))});
const names=molecule==='Semua'?moleculeKeys:[molecule];
$('moleculeInfo').innerHTML=molecule==='Semua'?'<strong>Semua molekul & ion</strong><p>Setiap zat memiliki warna dan bentuk unik yang sama pada diagram, tombol, dan legenda. Pilih satu zat untuk membaca keterangannya.</p>':`<div class="selected-molecule">${marker(molecule)}<strong>${molecule} · ${molecules[molecule].formula}</strong><span>${molecules[molecule].colorName} · ${molecules[molecule].shape}</span></div><p>${molecules[molecule].info}</p>`;
$('particles').innerHTML=names.flatMap((name,i)=>nephronPaths(molecules[name]).map((path,j)=>movingSymbol(name,path,i*2+j))).join('');
const urineNames=names.filter(name=>['both','excrete','potassium','secrete'].includes(molecules[name].route));
$('organParticles').innerHTML=urineNames.map((name,i)=>movingSymbol(name,(window.advancedReady?labState.voiding:current===6)?'M325 444V516':i%2?'M413 187C397 264 408 318 358 377Q335 405 325 425':'M237 191C254 266 244 318 293 377Q312 405 325 425',i,true)).join('');
if(window.hormoneReady)renderHormoneParticles();syncMotion()
}
function moleculeForChip(label){
if(/^H₂O|^Air$/.test(label))return ['Air'];if(/^Na⁺ \/ K⁺ \/ Cl⁻/.test(label))return ['Natrium','Kalium','Klorida'];
if(/^Na⁺/.test(label))return ['Natrium'];if(/^HCO₃/.test(label))return ['Bikarbonat'];if(/^H⁺/.test(label))return ['Hidrogen'];if(/^K⁺/.test(label))return ['Kalium'];if(/^NH₄/.test(label))return ['Amonium'];if(/obat/i.test(label))return ['Obat / metabolit'];return molecules[label]?[label]:[]
}
function setView(v){view=v;$('nephron').classList.toggle('hidden',v!=='nephron');$('organs').classList.toggle('hidden',v!=='organs');$('nephronTab').classList.toggle('active',v==='nephron');$('organTab').classList.toggle('active',v==='organs');$('viewTitle').textContent=v==='nephron'?'Unit fungsional ginjal':'Sistem urinaria manusia';$('viewSubtitle').textContent=v==='nephron'?'Glomerulus, tubulus, dan sirkulasi renal':'Ginjal, ureter, vesika urinaria, dan uretra';$('nephronTab').setAttribute('aria-pressed',String(v==='nephron'));$('organTab').setAttribute('aria-pressed',String(v==='organs'));$('organFactors').classList.toggle('hidden',v!=='organs')}
function select(i){current=i;last=Date.now();const s=stages[i];$('stageCount').textContent=`${i<4?'Pembentukan urin':'Saluran kemih'}`;$('stageTitle').textContent=s[0];$('stageDescription').textContent=s[1];$('direction').textContent=s[2];$('chips').innerHTML=s[3].map(x=>`<span class="chip">${moleculeForChip(x).map(name=>marker(name)).join('')}${x}</span>`).join('');$('note').textContent=s[4];document.querySelectorAll('[data-i]').forEach(b=>{b.classList.toggle('active',+b.dataset.i===i);b.setAttribute('aria-current',+b.dataset.i===i?'step':'false')});const f=[[120,164,158,146],[296,168,126,125],[512,215,140,88],[674,377,32,180]][i]||[674,620,32,40];['x','y','width','height'].forEach((k,j)=>$('focus').setAttribute(k,f[j]));if(i===6&&!window.advancedReady){volume=0;updateFill()}document.querySelectorAll('#organs [data-stage]').forEach(g=>g.style.opacity=1);renderMolecule()}
function updateFill(){$('fillLabel').textContent=Math.round(volume)+' mL';$('fill').style.width=(volume/600*100)+'%';$('bladderWater').setAttribute('opacity',Math.max(.12,volume/600*.8));$('outflow').style.visibility=current===6?'visible':'hidden';document.querySelector('.fillbar').setAttribute('aria-valuenow',Math.round(volume))}
function syncMotion(){
$('canvas').classList.toggle('paused',!playing);document.querySelector('.vascular-canvas')?.classList.toggle('paused',!playing);document.querySelectorAll('svg').forEach(svg=>{if(typeof svg.pauseAnimations==='function'){if(playing)svg.unpauseAnimations();else svg.pauseAnimations()}});
$('play').textContent=playing?'Jeda animasi':'Mulai animasi';$('play').setAttribute('aria-pressed',String(playing));$('sessionStatus').textContent=playing?'Animasi berjalan':'Siap dieksplorasi';document.querySelector('.session-status').classList.toggle('running',playing)
}
$('play').onclick=()=>{playing=!playing;syncMotion();last=Date.now()};$('next').onclick=()=>select((current+1)%7);$('reset').onclick=()=>{volume=0;updateFill();select(0)};$('nephronTab').onclick=()=>setView('nephron');$('organTab').onclick=()=>setView('organs');$('void').onclick=()=>{select(6);volume=0;updateFill()};$('speed').onchange=()=>{last=Date.now();document.querySelectorAll('.flow').forEach(p=>p.style.animationDuration=Number($('speed').value)/3250+'s')};setInterval(()=>{if(!playing)return;if(!window.advancedReady&&current!==6){volume=Math.min(400,volume+1.8*((window.factorsReady?factorState.production:hormoneState.urineVolume)/50));updateFill()}if(Date.now()-last>+$('speed').value)select((current+1)%7)},150);renderMolecule();select(0);updateFill();

// Every clickable anatomical structure is also keyboard-operable.
document.querySelectorAll('[data-stage]').forEach(g=>{g.setAttribute('tabindex','0');g.setAttribute('role','button');g.setAttribute('aria-label','Jelajahi '+stages[+g.dataset.stage][0]);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(+g.dataset.stage)}})});
syncMotion();

// Dimensionless teaching model; it encodes directions, not patient predictions.
const hormoneDefs={
adh:{name:'ADH',full:'Hormon antidiuretik / vasopresin',mechanism:'Mengatur AQP2: makin tinggi, makin besar permeabilitas air di duktus kolektivus.'},
aldo:{name:'Aldosteron',full:'Korteks adrenal',mechanism:'Meningkatkan reabsorpsi Na⁺ serta sekresi K⁺ di nefron distal. Retensi air juga bergantung pada ADH.'},
ang2:{name:'Angiotensin II',full:'Sistem renin–angiotensin',mechanism:'Vasokonstriksi melalui AT₁; pada aktivasi sedang, efek eferen sering lebih kuat. Terhubung ke aliran darah, filtrasi, dan produksi urin pada model terpadu.'},
anp:{name:'ANP',full:'Peptida natriuretik atrium',mechanism:'Mendorong natriuresis dan diuresis, melawan kecenderungan retensi natrium.'}
};
const hormoneValues={adh:50,aldo:50,anp:50,ang2:50};
let hormoneState={water:50,sodium:50,potassium:50,urineVolume:50,concentration:50};
const clampIndex=v=>Math.max(0,Math.min(100,Math.round(v)));
function calculateHormones(h){const a=h.adh-50,l=h.aldo-50,n=h.anp-50;const water=clampIndex(50+.65*a-.12*n+.08*l*h.adh/100);return {water,sodium:clampIndex(50+.65*l-.45*n),potassium:clampIndex(50+.8*l),urineVolume:100-water,concentration:clampIndex(50+.7*a-.08*n)}}
const hormoneLevel=v=>v<35?'Rendah':v>65?'Tinggi':'Sekitar acuan';
function renderHormoneParticles(){
const items=[];const allowed=name=>molecule==='Semua'||molecule===name;
for(const [name,score,path] of [['Air',hormoneState.water,'M690 495H766'],['Natrium',hormoneState.sodium,'M690 555H758'],['Kalium',hormoneState.potassium,'M755 590H690V620']]){
if(!allowed(name))continue;const count=Math.round(score/20);for(let j=0;j<count;j++)items.push(movingSymbol(name,path,j,true))
}
$('hormoneParticles').innerHTML=items.join('');syncMotion()
}
function updateHormones(){
hormoneState=calculateHormones(hormoneValues);
for(const [id,value] of Object.entries(hormoneValues)){
$(id+'Slider').value=value;$(id+'Number').value=value;$(id+'Level').textContent=hormoneLevel(value);$(id+'Slider').setAttribute('aria-valuetext',value+' dari 100, '+hormoneLevel(value));
document.querySelectorAll('[data-hormone="'+id+'"]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.value===value)))
}
const rows=[['Reabsorpsi air',hormoneState.water],['Reabsorpsi Na⁺',hormoneState.sodium],['Sekresi K⁺',hormoneState.potassium],['Volume urin',hormoneState.urineVolume],['Kepekatan urin',hormoneState.concentration]];
$('hormoneResults').innerHTML=rows.map(([name,value])=>`<div class="hormone-result"><div><span>${name}</span><strong>${value}<small> / 100</small></strong></div><div class="response-track"><span style="width:${value}%"></span><i title="Acuan 50"></i></div><p>${value===50?'Sesuai acuan':value>50?'Lebih tinggi dari acuan':'Lebih rendah dari acuan'}</p></div>`).join('');
const volumeText=hormoneState.urineVolume<45?'Volume cenderung berkurang':hormoneState.urineVolume>55?'Volume cenderung bertambah':'Volume mendekati acuan';
const concentrationText=hormoneState.concentration<45?'lebih encer':hormoneState.concentration>55?'lebih pekat':'kepekatan mendekati acuan';
$('urineTrend').textContent=volumeText;$('hormoneSummary').textContent=(hormoneState.concentration>=45&&hormoneState.concentration<=55?'Kepekatan urin mendekati acuan.':'Urin '+concentrationText+'.')+' Aldosteron terutama mengubah penanganan Na⁺ dan K⁺; ADH menentukan kemampuan penghematan air. ANP mendorong pelepasan Na⁺ dan air.';
$('urineSample').style.backgroundColor=`hsl(43 90% ${76-hormoneState.concentration*.43}%)`;$('urineSample').style.height=(34+hormoneState.urineVolume*.6)+'px';
$('hormoneDiagramLabel').textContent='ADH: '+hormoneLevel(hormoneValues.adh).toLowerCase();renderHormoneParticles();if(window.factorsReady)updateFactors();if(window.vascularReady)updateVascular()
}
$('hormoneControls').innerHTML=Object.entries(hormoneDefs).map(([id,h])=>`<div class="hormone-control"><div class="hormone-name"><label for="${id}Slider">${h.name}</label><output id="${id}Level" for="${id}Slider">Sekitar acuan</output></div><p>${h.full}</p><div class="hormone-input"><input type="range" min="0" max="100" step="1" value="50" id="${id}Slider" aria-describedby="${id}Mechanism"><input type="number" min="0" max="100" step="1" value="50" id="${id}Number" aria-label="Kadar relatif ${h.name}"></div><div class="hormone-presets" role="group" aria-label="Pilihan cepat ${h.name}">${[[0,'Rendah'],[50,'Acuan'],[100,'Tinggi']].map(([v,label])=>`<button data-hormone="${id}" data-value="${v}" aria-pressed="${v===50}">${label}</button>`).join('')}</div><p id="${id}Mechanism" class="hormone-mechanism">${h.mechanism}</p></div>`).join('');
for(const id of Object.keys(hormoneDefs)){
$(id+'Slider').addEventListener('input',e=>{hormoneValues[id]=clampIndex(+e.target.value);updateHormones()});
$(id+'Number').addEventListener('input',e=>{if(e.target.value===''||!Number.isFinite(+e.target.value))return;hormoneValues[id]=clampIndex(+e.target.value);updateHormones()});
$(id+'Number').addEventListener('change',e=>{hormoneValues[id]=clampIndex(Number(e.target.value)||0);updateHormones()})
}
document.querySelectorAll('[data-hormone]').forEach(b=>b.onclick=()=>{hormoneValues[b.dataset.hormone]=+b.dataset.value;updateHormones()});
$('resetHormones').onclick=()=>{Object.keys(hormoneValues).forEach(id=>hormoneValues[id]=50);updateHormones()};
window.hormoneReady=true;updateHormones();

// The illustration changes only when the user selects its tab.
setView(view);

const factorDefs={
water:{label:'Asupan air',min:0,max:100,step:1,value:50,unit:' / 100',detail:'Relatif terhadap kebutuhan: lebih banyak air cenderung meningkatkan urin setelah respons tubuh; bukan target liter per hari.'},
temperature:{label:'Suhu tubuh',min:36,max:40,step:.1,value:37,unit:' °C',detail:'Ubah suhu bersama tingkat keringat. Ini bukan pengaturan suhu lingkungan atau model diuresis dingin.'},
sweat:{label:'Kehilangan cairan melalui keringat',min:0,max:100,step:1,value:0,unit:' / 100',detail:'Makin besar kehilangan cairan yang belum diganti, makin besar kecenderungan ginjal menghemat air.'},
sympathetic:{label:'Aktivitas simpatis',min:0,max:100,step:1,value:0,unit:' / 100',detail:'Aktivasi kuat dapat menurunkan aliran darah ginjal dan mendorong retensi Na⁺/air. Pada vesika mendukung penyimpanan.'},
parasympathetic:{label:'Aktivitas parasimpatis vesika',min:0,max:100,step:1,value:0,unit:' / 100',detail:'Mendorong kontraksi detrusor saat koordinasi miksi mengizinkan. Tidak menambah produksi urin secara langsung.'},
diuretic:{label:'Efek diuretik',min:0,max:100,step:1,value:0,unit:' / 100',detail:'Gambaran umum peningkatan ekskresi air/garam; efek nyata tergantung jenis obat, dosis, dan kondisi ginjal.'}
};
const factorValues=Object.fromEntries(Object.entries(factorDefs).map(([id,f])=>[id,f.value]));
let factorState={production:50,concentration:50,voiding:0};
function calculateFactors(f,h){const heatLoss=f.sweat*(1+Math.max(0,f.temperature-37)*.25);return {production:Math.max(1,clampIndex(h.urineVolume+.5*(f.water-50)-.25*heatLoss-.2*f.sympathetic+.3*f.diuretic)),concentration:clampIndex(h.concentration-.35*(f.water-50)+.25*heatLoss),voiding:f.parasympathetic-f.sympathetic,heatLoss}}
function updateFactors(){
factorState=calculateFactors(factorValues,hormoneState);
for(const [id,f] of Object.entries(factorDefs)){$('factor-'+id).value=factorValues[id];$('factor-'+id+'-number').value=factorValues[id];$('factor-'+id+'-value').textContent=(id==='temperature'?factorValues[id].toFixed(1):factorValues[id])+f.unit}
const trend=factorState.production<45?'Cenderung berkurang':factorState.production>55?'Cenderung bertambah':'Mendekati acuan';
$('factorProduction').textContent=trend+' · indeks '+factorState.production+'/100';$('factorProductionText').textContent='Gabungan faktor tubuh dan pengaturan hormon. Kecenderungan kepekatan '+(factorState.concentration>55?'meningkat':factorState.concentration<45?'menurun':'mendekati acuan')+'. Kecepatan pengisian vesika pada animasi mengikuti indeks produksi ini.';$('factorProductionBar').style.width=factorState.production+'%';
const voiding=factorState.voiding>20?'Mendukung pengosongan':factorState.voiding< -20?'Mendukung penyimpanan':'Bergantung koordinasi saraf';$('factorVoiding').textContent=voiding;$('factorVoidingText').textContent='Parasimpatis mengontraksikan detrusor; simpatis mendukung penyimpanan. Miksi juga memerlukan volume kandung kemih dan relaksasi sfingter dengan kendali otak. Gunakan tombol Miksi untuk mengosongkan vesika.';
$('waterDiagram').textContent=factorValues.water<35?'Asupan relatif rendah':factorValues.water>65?'Asupan relatif tinggi':'Asupan sekitar acuan';$('temperatureDiagram').textContent=factorValues.temperature.toFixed(1).replace('.',',')+' °C';$('sweatDiagram').textContent='Keringat: '+(factorValues.sweat>65?'tinggi':factorValues.sweat>30?'sedang':'rendah');$('sympatheticDiagram').textContent='Aktivitas '+(factorValues.sympathetic>65?'tinggi':factorValues.sympathetic>30?'sedang':'rendah');$('parasympatheticDiagram').textContent=factorState.voiding>20?'Miksi didukung':factorState.voiding< -20?'Penyimpanan didukung':'Koordinasi saraf';$('diureticDiagram').textContent=factorValues.diuretic?'Efek relatif '+factorValues.diuretic+'/100':'Tidak aktif';$('organProductionLabel').textContent='Produksi urin: '+trend.toLowerCase();$('organBladderLabel').textContent='Vesika: '+voiding.toLowerCase();if(window.advancedReady)recomputeUnified();
for(const [id,value] of [['waterLink',factorValues.water],['heatLink',factorValues.sweat],['sympKidneyLink',factorValues.sympathetic],['sympBladderLink',factorValues.sympathetic],['paraLink',factorValues.parasympathetic],['diureticLink',factorValues.diuretic]]){$(id).setAttribute('stroke-width',1+value/25);$(id).setAttribute('opacity',.25+.75*value/100)}
}
$('factorControls').innerHTML=Object.entries(factorDefs).map(([id,f])=>`<div class="factor-control"><div><label for="factor-${id}">${f.label}</label><output id="factor-${id}-value"></output></div><div class="hormone-input"><input id="factor-${id}" type="range" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.value}" aria-describedby="factor-${id}-help"><input id="factor-${id}-number" type="number" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.value}" aria-label="Nilai ${f.label}"></div><p id="factor-${id}-help">${f.detail}</p></div>`).join('');
for(const [id,f] of Object.entries(factorDefs))for(const suffix of ['', '-number'])$('factor-'+id+suffix).addEventListener('input',e=>{if(e.target.value===''||!Number.isFinite(+e.target.value))return;factorValues[id]=Math.max(f.min,Math.min(f.max,+e.target.value));updateFactors()});
function resetFactors(){for(const [id,f] of Object.entries(factorDefs))factorValues[id]=f.value;updateFactors()}
$('resetFactors').onclick=resetFactors;
document.querySelectorAll('[data-scenario]').forEach(b=>b.onclick=()=>{resetFactors();const scenarios={water:{water:100},heat:{temperature:39,sweat:90},stress:{sympathetic:90},voiding:{parasympathetic:90}};Object.assign(factorValues,scenarios[b.dataset.scenario]);updateFactors()});
window.factorsReady=true;updateFactors();

function vascularResponse(h){const ang=(h.ang2-50)/50,anp=(h.anp-50)/50,v1=Math.max(0,(h.adh-65)/35);const bound=n=>Math.max(.45,Math.min(1.45,n));return {systemic:bound(1-.28*ang-.18*v1+.18*anp),afferent:bound(1-.12*ang-.13*v1+.22*anp),efferent:bound(1-.32*ang-.1*v1)}}
function vesselContour(x1,x2,y,half){const mid=(x1+x2)/2,base=24;return `M${x1} ${y-base}C${x1+50} ${y-base} ${mid-55} ${y-half} ${mid} ${y-half}S${x2-50} ${y-base} ${x2} ${y-base}V${y+base}C${x2-50} ${y+base} ${mid+55} ${y+half} ${mid} ${y+half}S${x1+50} ${y+base} ${x1} ${y+base}Z`}
function updateVascular(){
const r=vascularResponse(hormoneValues);const label=n=>n<.96?'Menyempit':n>1.04?'Melebar':'Mendekati acuan';
$('systemicLumen').setAttribute('d',vesselContour(40,740,72,24*r.systemic));$('afferentLumen').setAttribute('d',vesselContour(40,300,215,20*r.afferent));$('efferentLumen').setAttribute('d',vesselContour(480,740,215,20*r.efferent));
for(const id of ['systemic','afferent','efferent'])$(id+'Label').textContent=label(r[id]);
$('renalAfferent').setAttribute('stroke-width',18*r.afferent);$('renalEfferent').setAttribute('stroke-width',12*r.efferent);if(window.advancedReady)recomputeUnified();
$('vascularEffects').innerHTML=`<div><strong>Angiotensin II · AT₁</strong><p>${hormoneValues.ang2>65?'Konstriksi eferen lebih menonjol. Aktivasi kuat juga dapat menyempitkan aferen dan menurunkan aliran darah ginjal.':hormoneValues.ang2<35?'Tonus vasokonstriktor Ang II berkurang; lumen cenderung lebih lebar dibanding acuan.':'Tonus sekitar acuan; naikkan kadarnya untuk melihat perbedaan aferen–eferen.'}</p></div><div><strong>ADH · V₁ dan V₂</strong><p>${hormoneValues.adh>65?'Efek V₁ pada otot polos memberi kecenderungan vasokonstriksi pada kadar tinggi.':'Efek vaskular V₁ kecil pada skema ini; efek utama kadar fisiologis adalah pengaturan air melalui V₂.'} V₂ bekerja pada duktus kolektivus.</p></div><div><strong>ANP · relaksasi pembuluh</strong><p>${hormoneValues.anp>65?'Relaksasi sistemik dan dilatasi aferen ditonjolkan; efeknya melawan tonus vasokonstriktor.':hormoneValues.anp<35?'Pengaruh vasodilator ANP berkurang dibanding acuan.':'Efek sekitar acuan; menaikkan ANP memperlebar lumen pada skema.'}</p></div><div><strong>Aldosteron · efek tidak langsung</strong><p>Terutama meningkatkan retensi Na⁺ dan, sesuai ketersediaan air serta ADH, volume ekstraseluler. Slider ini tidak menyempitkan pembuluh secara langsung dalam skema akut.</p></div><div class="vascular-gfr"><strong>Aliran darah dan GFR</strong><p>Konstriksi aferen cenderung menurunkan tekanan filtrasi. Konstriksi eferen sedang dapat mempertahankan tekanan glomerulus walau aliran turun; konstriksi berat dapat menurunkan GFR. Diameter saja tidak menentukan hasil akhir.</p></div>`
}
window.vascularReady=true;updateVascular();
