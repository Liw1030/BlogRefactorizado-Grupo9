const juegosMario = {
    "1985": {
        titulo: "Super Mario Bros",
        descripcion: "El juego que lo empezó todo en la NES. Mario debe rescatar a la princesa Peach del Rey Koopa.",
        imagen: "./Public/1985.jpg"
    },
    "1989": {
        titulo: "Super Mario Land",
        descripcion: "Primer juego de Mario para Game Boy. Introduce a la Princesa Daisy y enemigos nuevos.",
        imagen: "./Public/1989.jpg"
    },
    "1990": {
        titulo: "Las Aventuras de Super Mario 3",
        descripcion: "Incluye trajes como el de mapache y niveles innovadores. Aclamado como uno de los mejores.",
        imagen: "./Public/1990.jpg"
    },
    "1991": {
        titulo: "Super Mario Worl",
        descripcion: "Lanzado para SNES, introduce a Yoshi y un mundo más abierto y colorido.",
        imagen: "./Public/1991.jpg"
    },
    "1992": {
        titulo: "Super Mario Land 2",
        descripcion: "Secuela de Mario Land para Game Boy con nuevos mundos y enemigos.",
        imagen: "./Public/1992.PNG"
    },
    "1996": {
        titulo: "Super Mario 64",
        descripcion: "Revolución en 3D para Mario. Lanzado con la Nintendo 64 y considerado un clásico moderno.",
        imagen: "./Public/1996.jpg"
    },
    "1998": {
        titulo: "Super Mario Bros 2",
        descripcion: "Versión modificada de Doki Doki Panic. Introduce nuevas mecánicas y enemigos.",
        imagen: "./Public/1998.png"
    },
    "2002": {
        titulo: "Super Mario Sun Shine",
        descripcion: "Mario viaja a la Isla Delfino con su nuevo dispositivo FLUDD para limpiar el desastre.",
        imagen: "./Public/2002.jpg"
    },
    "2006": {
        titulo: "New Super Mario Bros",
        descripcion: "Regreso al estilo clásico en 2D con gráficos modernos, para Nintendo DS.",
        imagen: "./Public/2006.png"
    },
    "2007": {
        titulo: "Super Mario Galaxy",
        descripcion: "Aventura espacial con mecánicas de gravedad únicas para Nintendo Wii.",
        imagen: "./Public/2007.png"
    },
    "2009": {
        titulo: "New Super Mario Bro Wii",
        descripcion: "Versión multijugador de estilo clásico para Wii, con power-ups nuevos.",
        imagen: "./Public/2009.png"
    },
    "2010": {
        titulo: "Super Mario Galaxy 2",
        descripcion: "Secuela directa de Galaxy, con más niveles, dificultad ajustada y nuevos elementos.",
        imagen: "./Public/2010.png"
    },
    "2011": {
        titulo: "Super Mario 3D Land",
        descripcion: "Aventura tridimensional para Nintendo 3DS, mezcla de elementos 2D y 3D.",
        imagen: "./Public/2011.png"
    },
    "2012": {
        titulo: "New Super Mario Bros 2",
        descripcion: "Enfocado en la recolección de monedas. Lanzado para Nintendo 3DS.",
        imagen: "./Public/2012.png"
    },
    "20121": {
        titulo: "New Super Mario Bros U",
        descripcion: "Entrega para Wii U con multijugador mejorado y nuevos mundos.",
        imagen: "./Public/20121.png"
    },
    "2013": {
        titulo: "Super Mario 3D World",
        descripcion: "Multijugador cooperativo en 3D, con el traje de gato como novedad.",
        imagen: "./Public/2013.png"
    },
    "2015": {
        titulo: "Super Mario Maker",
        descripcion: "Permite a los jugadores crear y compartir sus propios niveles de Mario.",
        imagen: "./Public/2015.png"
    },
    "2016": {
        titulo: "Super Mario Run",
        descripcion: "Juego móvil de plataformas en el que Mario corre automáticamente.",
        imagen: "./Public/2016.png"
    },
    "2017": {
        titulo: "Super Mario Odissey",
        descripcion: "Mario viaja por el mundo con Cappy en esta aventura de mundo abierto.",
        imagen: "./Public/2017.png"
    },
    "2019": {
        titulo: "Super Mario Bros U Deluxe",
        descripcion: "Versión mejorada para Switch de New Super Mario Bros U.",
        imagen: "./Public/2019.png"
    },
    "20191": {
        titulo: "Super Mario Maker 2",
        descripcion: "Secuela del creador de niveles, con más herramientas y modo historia.",
        imagen: "./Public/20191.png"
    },
    "2020": {
        titulo: "Super Mario 3D All Stars",
        descripcion: "Compilación de Mario 64, Sunshine y Galaxy para Switch.",
        imagen: "./Public/2020.png"
    },
    "2021": {
        titulo: "Super Mario 3D World Bowsers Fury",
        descripcion: "Incluye el juego clásico de Wii U y una expansión de mundo abierto.",
        imagen: "./Public/2021.png"
    },
    "2023": {
        titulo: "Super Mario Bros Wonder",
        descripcion: "Nuevos power-ups y mundos alucinantes. Primer Mario 2D original en años.",
        imagen: "./Public/2023.png"
    }
};

const sonido = new Audio("sonidos/sonido.mp3")
// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".juego-slide");

    slides.forEach(slide => {
        slide.addEventListener("click", () => {
            sonido.currentTime = 0;
            sonido.play()
            const id = slide.id;
            const juego = juegosMario[id];

            if (juego) {
                Swal.fire({

                    title: juego.titulo,
                    text: juego.descripcion,
                    imageUrl: juego.imagen,
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: `Imagen del juego ${juego.titulo}`,
                    confirmButtonText: 'Cerrar',
                    background: '#1e1e1e',
                    color: '#fff'
                });

            } else {
                Swal.fire({
                title: "Información no disponible",
                text: `No hay datos para el año ${id}`,
                icon: "warning",
                confirmButtonText: "OK"
                });
            }
        });
    });
});
