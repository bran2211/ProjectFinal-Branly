const express = require('express');
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// --Configurar el motor de vistas Handlebars
app.set('view engine', 'hbs');

// --Configurar el directorio de vistas (views)
app.set('views', path.join(__dirname, '/views'));

// --Registrar los partials
hbs.registerPartials(path.join(__dirname, '/views/partials'));

// --Configurar contenido estático
app.use(express.static(path.join(__dirname, 'public')));

// --Rutas del portafolio
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Portafolio Digital',
        headerTitle: 'Portafolio Digital'
    });
});

app.get('/sobremi', (req, res) => {
    res.render('sobremi', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Sobre Mí',
        headerTitle: 'Sobre Mí'
    });
});

app.get('/proyecto1', (req, res) => {
    res.render('proyecto1', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 1 - Programa Sistema Operativo',
        headerTitle: 'Manejo Operativo'
    });
});

app.get('/proyecto2', (req, res) => {
    res.render('proyecto2', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 2 - Analizador Léxico',
        headerTitle: 'Analizador Léxico'
    });
});

app.get('/proyecto3', (req, res) => {
    res.render('proyecto3', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 3 - Juego de Memoria',
        headerTitle: 'Juego de Memoria'
    });
});

app.get('/proyecto4', (req, res) => {
    res.render('proyecto4', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 4 - Registro en Pilas y Colas',
        headerTitle: 'Registro en Pilas y Colas'
    });
});

app.get('/proyecto5', (req, res) => {
    res.render('proyecto5', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 5 - Calculadora de Permutaciones',
        headerTitle: 'Calculadora de Permutaciones'
    });
});

app.get('/proyecto6', (req, res) => {
    res.render('proyecto6', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 6 - Brazo Robótico',
        headerTitle: 'Brazo Robótico'
    });
});

app.get('/proyecto7', (req, res) => {
    res.render('proyecto7', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 7 - Cisco Packet Tracer',
        headerTitle: 'Cisco Packet Tracer'
    });
});

app.get('/proyecto8', (req, res) => {
    res.render('proyecto8', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 8 - Raspberry Pi 3',
        headerTitle: 'Raspberry Pi 3'
    });
});

app.get('/proyecto9', (req, res) => {
    res.render('proyecto9', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 9 - Desarrollo Web',
        headerTitle: 'Generador de Tablas de Multiplicar'
    });
});

app.get('/proyecto10', (req, res) => {
    res.render('proyecto10', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 10 - Cálculo de Jubilación',
        headerTitle: 'Cálculo de Jubilación'
    });
});

app.get('/proyecto11', (req, res) => {
    res.render('proyecto11', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 11 - Movimiento MRV',
        headerTitle: 'Movimiento MRV'
    });
});

app.get('/proyecto12', (req, res) => {
    res.render('proyecto12', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Proyecto 12 - Página en Railway',
        headerTitle: 'Página en Railway'
    });
});

// Ruta para páginas no encontradas (404)
app.get('*', (req, res) => {
    res.render('404', {
        nombre: 'Oscar Branly Pixabaj Alva',
        titulo: 'Página no encontrada',
        mensaje: 'Lo sentimos, la página que buscas no existe.'
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Portafolio corriendo en http://localhost:${port}`);
});
