(()=>{
const bauble=c=>`<svg viewBox="0 0 40 52"><rect x="15" y="0" width="10" height="7" fill="#c9a24a"/><circle cx="20" cy="31" r="19" fill="${c}"/><path d="M20 14v34M5 31h30M9 20l22 22M31 20L9 42" stroke="#fff" stroke-width="1.6" opacity=".85"/></svg>`;
const bottle=`<svg viewBox="0 0 30 90"><rect x="11" y="0" width="8" height="6" fill="#c8102e"/><path d="M11 6h8v22c0 8 8 10 8 22v34c0 3-2 5-5 5H8c-3 0-5-2-5-5V50c0-12 8-14 8-22z" fill="#1a3a7a"/><rect x="3" y="48" width="24" height="26" fill="#f2f0eb"/><path d="M15 53v16M7 61h16M9.5 55.5l11 11M20.5 55.5l-11 11" stroke="#1a3a7a" stroke-width="1.5"/></svg>`;
const cap=`<svg viewBox="0 0 40 24"><path d="M2 22 20 2l18 20z" fill="#c8102e"/><rect x="2" y="18" width="36" height="6" fill="#f2f0eb"/><circle cx="20" cy="3" r="3.5" fill="#f2f0eb"/></svg>`;
const star=`<svg viewBox="0 0 40 40"><path d="m20 2 5 12 13 1-10 9 3 13-11-7-11 7 3-13L2 15l13-1z" fill="#e8c872"/></svg>`;
const items=[[bauble('#1a3a7a'),34,38],[bottle,26,70],[cap,36,24],[bauble('#c8102e'),30,52],[star,30,34],[bottle,24,96],[bauble('#1a3a7a'),32,26],[cap,34,58],[bauble('#c8102e'),30,80],[star,28,40],[bottle,26,48],[bauble('#1a3a7a'),34,66]];
const r=document.createElement('div');r.id='jul';r.setAttribute('aria-hidden','true');
items.forEach(([s,w,len],i)=>{const e=document.createElement('div');e.className='str';
e.style.cssText=`left:${(i+.5)*100/items.length}%;--len:${len}px;--w:${w}px;--d:${3+(i%4)*.7}s;animation-delay:-${i*.5}s`;
e.innerHTML=s;r.appendChild(e)});
document.body.appendChild(r);

const h1=document.querySelector('.hero h1');
if(h1){const hat=document.createElement('span');hat.setAttribute('aria-hidden','true');
hat.innerHTML='<svg class="jul-hat" viewBox="0 0 60 50"><path d="M6 40C8 20 22 4 44 6c-6 6-4 14 0 20 4 6 8 10 10 14z" fill="#c8102e"/><rect x="2" y="36" width="54" height="11" rx="5.5" fill="#f2f0eb"/><circle cx="46" cy="7" r="6" fill="#f2f0eb"/></svg>';
h1.insertBefore(hat.firstChild,h1.firstChild)}

if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
const c=document.createElement('canvas');c.id='jul-snow';c.setAttribute('aria-hidden','true');document.body.appendChild(c);
const x=c.getContext('2d');let w,h,f=[],t=0;
const rs=()=>{const d=devicePixelRatio||1;w=innerWidth;h=innerHeight;c.width=w*d;c.height=h*d;x.setTransform(d,0,0,d,0,0);
f=Array.from({length:w<860?45:90},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2.2+.8,s:Math.random()*.8+.4,p:Math.random()*6.28}))};
addEventListener('resize',rs);rs();
(function L(){if(!document.hidden){x.clearRect(0,0,w,h);x.fillStyle='rgba(255,255,255,.85)';t+=.01;
for(const q of f){q.y+=q.s;q.x+=Math.sin(t+q.p)*.4;if(q.y>h+4){q.y=-4;q.x=Math.random()*w}x.beginPath();x.arc(q.x,q.y,q.r,0,6.283);x.fill()}}
requestAnimationFrame(L)})();
}
})();
