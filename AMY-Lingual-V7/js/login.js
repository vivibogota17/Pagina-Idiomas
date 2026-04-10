// Chicas, por ahora dejé nuestras claves quemadas acá para entrar súper rápido sin armar base de datos
const usuarios = { admin: "1234",
    yury: "2026",    
    andrea: "2025",
    martha: "2024"
}

const formLogin = document.getElementById("form-login")

if(formLogin){
formLogin.addEventListener("submit", function(e){

        e.preventDefault();

    const usuario= document.getElementById("usuario").value

    const password =document.getElementById("contrasena").value

    if(usuarios[usuario]===password){
        // Guardo el usuario en sessionStorage para mantener la sesión viva solo en esta pestaña
        sessionStorage.setItem("usuario", usuario);
        window.location.href="index.html"
    }
    else{
        const mensaje = document.getElementById("mensaje")
        mensaje.textContent = "Usuario o contraseña incorrectos."
    }

});
}


const usuarioActivo = sessionStorage.getItem("usuario");
const textoUsuario = document.getElementById("usuarioActivo");

if(usuarioActivo && textoUsuario){
    textoUsuario.textContent = "Hola, " + usuarioActivo;
}
