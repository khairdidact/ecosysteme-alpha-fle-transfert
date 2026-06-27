document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.getElementById('menu-toggle');
  const menu=document.getElementById('navbar-menu');
  if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});}
  document.querySelectorAll('a[href^="http"]').forEach(a=>{ if(!a.rel) a.rel='noopener'; });
});

// Patch responsive non destructif : menu mobile robuste
(function(){
  const toggle=document.getElementById('menu-toggle');
  const menu=document.getElementById('navbar-menu');
  if(!toggle||!menu) return;
  function closeMenu(){menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}
  toggle.addEventListener('click',function(ev){ev.stopPropagation();const open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});
  document.addEventListener('click',function(ev){if(!menu.contains(ev.target)&&!toggle.contains(ev.target)) closeMenu();});
  document.addEventListener('keydown',function(ev){if(ev.key==='Escape') closeMenu();});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});
})();
