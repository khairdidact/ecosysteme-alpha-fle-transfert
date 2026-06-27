// menu mobile (burger)
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar-menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true' ? false : true;
        toggle.setAttribute('aria-expanded', expanded);
        menu.classList.toggle('active');
    });
}

// Fermer le menu mobile après un clic sur un lien (mais pas sur les liens qui ont un sous-menu)
const allNavLinks = document.querySelectorAll('.navbar-menu .nav-link');
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Si le lien a un sous-menu, on gère l'ouverture/fermeture séparément
        if (link.getAttribute('aria-haspopup') === 'true') {
            return; // le gestionnaire dédié s'en chargera
        }
        // Sinon, fermer le menu mobile si nécessaire
        if (window.innerWidth <= 768 && menu.classList.contains('active')) {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Gestion des sous-menus accessibles (aria-haspopup)
const parentLinks = document.querySelectorAll('.navbar-menu .nav-link[aria-haspopup="true"]');

function closeAllSubmenus() {
    parentLinks.forEach(link => {
        link.setAttribute('aria-expanded', 'false');
        const parentItem = link.closest('.nav-item');
        if (parentItem) {
            parentItem.classList.remove('submenu-open');
        }
    });
}

parentLinks.forEach(link => {
    const parentItem = link.closest('.nav-item');
    const submenu = parentItem ? parentItem.querySelector('.nav-submenu') : null;

    if (!parentItem || !submenu) return;

    // Fonction pour ouvrir/fermer le sous-menu courant
    function toggleSubmenu(e) {
        // Empêcher la navigation immédiate (le lien peut être utilisé pour ouvrir/fermer le sous-menu)
        e.preventDefault();

        const isExpanded = link.getAttribute('aria-expanded') === 'true';

        // Fermer tous les autres sous-menus
        closeAllSubmenus();

        // Basculer l'état courant
        if (!isExpanded) {
            link.setAttribute('aria-expanded', 'true');
            parentItem.classList.add('submenu-open');
        } else {
            link.setAttribute('aria-expanded', 'false');
            parentItem.classList.remove('submenu-open');
        }
    }

    // Écouteur clic (pour tactile et souris)
    link.addEventListener('click', toggleSubmenu);

    // Écouteur clavier (Enter ou Space) pour conformité WCAG
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // éviter le défilement avec Space
            toggleSubmenu(e);
        }
    });

    // Fermer le sous-menu si on clique ailleurs (optionnel)
    document.addEventListener('click', (e) => {
        if (!parentItem.contains(e.target)) {
            link.setAttribute('aria-expanded', 'false');
            parentItem.classList.remove('submenu-open');
        }
    });

    // Permettre la navigation réelle si on reclique sur le lien quand le sous-menu est déjà ouvert
    link.addEventListener('dblclick', () => {
        // Double-clic = suivre le lien (on peut aussi autoriser un clic simple quand le menu est déjà ouvert)
        const isExpanded = link.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            // On laisse la navigation se faire naturellement (pas de preventDefault ici)
            window.location.href = link.href;
        }
    });
});