// Datos de ejemplo para la galería
const galleryImages = [
    {
        src: 'images/gallery/area-social-1.jpg',
        title: 'Área Social Principal',
        description: 'Amplio espacio para reuniones y eventos'
    },
    {
        src: 'images/gallery/piscina.jpg',
        title: 'Piscina',
        description: 'Área de piscina con zona de descanso'
    },
    {
        src: 'images/gallery/gimnasio.jpg',
        title: 'Gimnasio',
        description: 'Gimnasio equipado para residentes'
    },
    {
        src: 'images/gallery/jardin.jpg',
        title: 'Jardines',
        description: 'Áreas verdes y jardines'
    },
    {
        src: 'images/gallery/seguridad.jpg',
        title: 'Seguridad',
        description: 'Sistema de seguridad 24/7'
    },
    {
        src: 'images/gallery/parqueadero.jpg',
        title: 'Parqueadero',
        description: 'Amplio parqueadero para residentes'
    }
];

// Función para cargar la galería
function loadGallery() {
    const galleryContainer = document.getElementById('gallery-container');

    galleryImages.forEach(image => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6';

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.className = 'img-fluid';

        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = `
            <h3>${image.title}</h3>
            <p>${image.description}</p>
        `;

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);
        col.appendChild(galleryItem);
        galleryContainer.appendChild(col);
    });
}

// Función para manejar el formulario de contacto
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Aquí iría la lógica para enviar el formulario
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    loadGallery();
    handleContactForm();
}); 