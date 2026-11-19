
// ===================================
// CONFIGURACIÓN DE LA PÁGINA
// ===================================

const profile = {

    name: "AIRY",

    description: "Bienvenido a mi espacio",

    // FOTO DE PERFIL
    picture: "perfil.jpg",

    footer: "© 2026 - Todos los derechos reservados"

};


// ===================================
// CONFIGURACIÓN DE LOS ENLACES
// ===================================

const links = [

    {
        name: "✧˖°Instagram˖ ࣪ ⊹",
        url: "https://www.instagram.com/ari.airynails?lqvp=emhqZXp0c2FsN3Zz&utm_source=qr"
    },

    {
        name: "✧˖°TikTok˖ ࣪ ⊹",
        url: "https://www.tiktok.com/@ary.nails?_r=1&_t=ZS-9BWQJJHUGwr"
    },

    {
        name: "✧˖°WhatsApp˖ ࣪ ⊹",
        url: "https://wa.me/51993709331?text=Holiii%21%20%E2%9C%A7%CB%96%C2%B0%20Quiero%20que%20mis%20u%C3%B1itas%20tambi%C3%A9n%20tengan%20su%20momento%20de%20magia.%20%CB%96%20%E0%A3%AA%20%E2%8A%B9"
    }

];


// ===================================
// MOSTRAR INFORMACIÓN DEL PERFIL
// ===================================

document.getElementById("profile-name").textContent =
    profile.name;

document.getElementById("profile-description").textContent =
    profile.description;

document.getElementById("profile-picture").src =
    profile.picture;

document.getElementById("footer").textContent =
    profile.footer;


// ===================================
// GENERAR BOTONES AUTOMÁTICAMENTE
// ===================================

const linksContainer =
    document.getElementById("links-container");

links.forEach(link => {

    const button = document.createElement("a");

    button.classList.add("link-button");

    button.textContent = link.name;

    button.href = link.url;

    button.target = "_blank";

    button.rel = "noopener noreferrer";

    linksContainer.appendChild(button);

});
