document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.getElementById('menu-toggle');
  const menu=document.getElementById('navbar-menu');
  if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});}
  document.querySelectorAll('a[href^="http"]').forEach(a=>{ if(!a.rel) a.rel='noopener'; });
});
