// ===================================== 
// FORMULARIO DE CONTACTO 
// // ===================================== 

const formularioContacto = 
document.getElementById("formularioContacto"); 

if (formularioContacto) { 
    
    formularioContacto.addEventListener("submit", function(event) { 
        
        event.preventDefault(); 
        
        alert("Mensaje enviado correctamente."); 
        
        formularioContacto.reset(); 
    
    }); 

} 

// =====================================
 // FORMULARIO DE REGISTRO 
// ===================================== 
// const formularioRegistro = 
document.getElementById("formularioRegistro"); 

if (formularioRegistro) { 
    
    formularioRegistro.addEventListener("submit", function(event) { 
        event.preventDefault(); 
        
        const password = 
        document.getElementById("passwordRegistro").value; 
        
        const confirmarPassword = 
        document.getElementById("confirmarPassword").value; 
        
        if (password != confirmarPassword) { 
            
            alert("Las contraseñas no coinciden."); 
            
            return; 
        
        } 
        
        alert("Usuario registrado correctamente."); 
        
        formularioRegistro.reset(); 
    
    }); 

} 

// ===================================== 
//  INICIO DE SESIÓN 
// ===================================== 

const formularioLogin = 
document.getElementById("formularioLogin"); 

if (formularioLogin) { 
    
    formularioLogin.addEventListener("submit", function(event) { 
        
        event.preventDefault(); 
        
        alert("Inicio de sesión realizado correctamente.");
    
    }); 

}