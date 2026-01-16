// Personalizamos el separador del ejercicio 03
console.log("%cEjercicio 03: Funciones ",style_console);

// 1.  Funciones Procedurales, funciones vacías (VOID) o funciones que no retornan un valor

function saludar()
{
    console.log("Bienvenid@, al Sistema de Bienes Raíces");
}

console.warn("1. Funciones Procedurales");
saludar();


// 2. Funciones Procedurales, con parámetros de entrada , es decir que reciben datos para funcionar

function saludarUsuario(nombreUsuario, generoUsuario)
{
    if(generoUsuario=="H")
        console.log(`Bienvenido ${nombreUsuario} al Sistema de Bienes Raíces`);
    else if(generoUsuario== "M")
        console.log(`Bienvenida ${nombreUsuario} al Sistema de Bienes Raíces`);
    else
    console.log(`Bienvenid@ ${nombreUsuario} al Sistema de Bienes Raíces`);
}

console.warn("2. Funciones Procedurales con parámetros de entrada")
//Test 1: 
console.log("nombreUsuario = Marco, generoUsuario= H ")
saludarUsuario("Marco", "H");
//Test 2: 
console.log("nombreUsuario = Estela, generoUsuario= M ")
saludarUsuario("Estela", "M");
//Test 3: 
console.log("nombreUsuario = Jan , generoUsuario= null ")
saludarUsuario("Jan", null);

// 3. Funciones que retornan un valor pero que no reciben parámetros (datos de entrada)

function fechaActual()
{
    const fecha= new Date()   //milisegundos
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX
}

console.warn("3. Funciones que retornan un valor, pero no tienen parámetros de entrada")
let hoy =  fechaActual();
console.log(fechaActual);
console.log(typeof(fechaActual));
console.log(hoy);

// 4. Funciones que retornan un valor y reciben parámetros (datos de entrada)

function login(username, password)
{
    let userValidation = false;

    if(username==="admin" && password=="12345")
    {
        userValidation = true;
        console.log("Bienvenido usuario admin");
    }
    else if (username==="admin" && password!="12345")
    {
        userValitation = false;
        console.log("Error con la constraseña del admin");
    }
    else if(username!="admin" && password=="12345")
    {
        userValidation=false;
        console.log("Error el usuario no existe");   
    }
    else if(username!="admin" && password!="12345")
    {
        userValidation=false;
        console.log("Por favor verifica el usuario y la contraseña estan incorrectos.")
    }
    return userValidation;
}

console.warn("4. Funciones que retornan un dato y reciben parámetros de entrada")
var loginStatus;

//Test 1  - Usuario y Contraseña correctos
console.log("Test 1 - usuario: admin , password: 12345")
loginStatus = login("admin","12345");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente.": "Hubo un error en el login del usuario admin." }`);

//Test 2  - Usuario correcto y Contraseña incorrecto
console.log("Test 2 - usuario: admin , password: 1234567890")
loginStatus = login("admin","1234567890");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente.": "Hubo un error en el login del usuario admin." }`);

//Test 3  - Usuario incorrecto y Contraseña correcto
console.log("Test 3 - usuario: administrador , password: 12345")
loginStatus = login("administrador","12345");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente.": "Hubo un error en el login del usuario admin." }`);

//Test 4  - Usuario y Contraseña incorrectos
console.log("Test 4 - usuario: marcor , password: abcde")
loginStatus = login("marcor","abcde");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente.": "Hubo un error en el login del usuario admin." }`);