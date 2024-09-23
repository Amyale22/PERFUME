var app = new Framework7({
    root: '#app',
    theme: 'md',
    view: {
        pushState: true,
    },
    routes: [
        {
            path: '/home/',
            url: 'index.html',
            name: 'home',
        },
        {
            path: '/producto/',
            url: 'producto.html',
            name: 'producto',
        },
        {
            path: '/elaboracion/',
            url: 'elaboracion.html',
            name: 'elaboracion',
        },
        {
            path: '/contacto/',
            url: 'contacto.html',
            name: 'contacto',
        },
        {
            path: '/sobrenosotros/',
            url: 'Sobrenosotros.html',
            name: 'sobrenosotros',
        },
        {
            path: '/testimonios/',
            url: 'Testimonios.html',
            name: 'testimonios',
        }
    ],
});
