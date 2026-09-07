const slides=[...document.querySelectorAll('.slide')];
const titles=['SIENTE<br><span>EL RITMO</span>','DESCUBRE<br><span>EL PIANO</span>','ENCUENTRA<br><span>TU SONIDO</span>','VIVE<br><span>LA MÚSICA</span>'];
const texts=['Aprende música, desarrolla tu talento y encuentra tu propio sonido.','Convierte tus ideas en música y aprende piano desde cero.','Aprende guitarra y construye tu propio estilo.','Practica, crea y disfruta la música junto a otros músicos.'];
const title=document.getElementById('heroTitle'),text=document.getElementById('heroText'),dots=document.querySelector('.dots');
let current=0,timer;
slides.forEach((_,i)=>{const d=document.createElement('span');d.className='dot'+(i===0?' active':'');d.onclick=()=>show(i);dots.appendChild(d)});
const dotEls=[...document.querySelectorAll('.dot')];
function show(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));dotEls.forEach((d,n)=>d.classList.toggle('active',n===current));title.innerHTML=titles[current];text.textContent=texts[current];reset()}
function reset(){clearInterval(timer);timer=setInterval(()=>show(current+1),4500)}
document.getElementById('next').onclick=()=>show(current+1);
document.getElementById('prev').onclick=()=>show(current-1);
reset();
