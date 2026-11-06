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
})();
