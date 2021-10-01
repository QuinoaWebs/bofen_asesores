const d = document;
// let salirF;
// console.log(salirF)
// let salirP;
// console.log(salirP)


//=====================JS PARA FORMULARIO DIRECCCIONES=============//


function insertarDatosDirecciones(e) {


    const nombreD = d.getElementById('nombreD').value
    // const contrasenaD = d.getElementById('contrasenaD').value
    // const dniD = d.getElementById('dniD').value
    // const telefonoD = d.getElementById('telefonoD').value
    const direccionD = d.getElementById('direccionD').value

    const datosD = {

        nombreD,
        // contrasenaD,
        // dniD,
        // telefonoD,
        direccionD
    }


    if (localStorage.getItem('direcciones') == null) {

        let direcciones = []
        direcciones.push(datosD)
        localStorage.setItem('direcciones', JSON.stringify(direcciones))

    } else {

        let direcciones = JSON.parse(localStorage.getItem('direcciones'))
        direcciones.push(datosD)
        localStorage.setItem('direcciones', JSON.stringify(direcciones))

    }

    pintarDatosDirecciones()
    document.getElementById('form-direcciones').reset()
    e.preventDefault()

    //Accion de ir la agenda direcciones - recuerda


}





function eliminarD(nombre) {

    let datos = JSON.parse(localStorage.getItem('direcciones'))


    datos.forEach(el => {



        if (el.nombreD == nombre) {


            let restoDatos = datos.filter((i) => i !== el)

            localStorage.setItem('direcciones', JSON.stringify(restoDatos))
            pintarDatosDirecciones()

        }

    });







}




function editarDatosD(nombre) {



    let datos = JSON.parse(localStorage.getItem('direcciones'))


    datos.forEach(el => {


        if (el.nombreD === nombre) {

            d.getElementById('nombreD').value = el.nombreD
            // d.getElementById('contrasenaD').value = el.contrasenaD
            // d.getElementById('dniD').value = el.dniD
            // d.getElementById('telefonoD').value = el.telefonoD
            d.getElementById('direccionD').value = el.direccionD


        }

    })

   

        
    eliminarD(nombre)

    //Accion de subir al formulario - recuerda






}


function pintarDatosDirecciones() {


    if(localStorage.getItem('direcciones') == null){

        alert('No existe ninguna agenda. Crea la tuya....')
    }else{

    let datos = Array.from(JSON.parse(localStorage.getItem('direcciones')))
        // console.log(datos)
    const tablaDirecciones = d.getElementById('tabla-direcciones')
        // console.log(tablaDirecciones)
    tablaDirecciones.innerHTML = ''


    datos.forEach(el => {


        let nombreD = el.nombreD
        // let contrasenaD = el.contrasenaD
        // let dniD = el.dniD
        // let telefonoD = el.telefonoD
        let direccionD = el.direccionD

        tablaDirecciones.innerHTML += `
        
        <tr>
        
        <td style=''>${nombreD}</td>
        <td style=''>${direccionD}</td>
        
        <td><button class='borrarDatosDirecciones' id='borrarDatos'>Delete</button></td>
        
        <td><button class='editarDatosDirecciones' id='editarDatos'>Edit</button></td>
        
        </tr>
        
        `


    })

  
    }


}




//=================================JS FORMULARIO TELEFONOS========================//



function insertarDatosTelefonos(e) {


    const nombreT = d.getElementById('nombreT').value
    // const contrasenaT = d.getElementById('contrasenaT').value
    // const dniT = d.getElementById('dniT').value
    const telefonoT = d.getElementById('telefonoT').value
    // const direccionT = d.getElementById('direccionT').value




    const datosT = {

        nombreT,
        // contrasenaT,
        // dniT,
        telefonoT
        // direccionT
    }


    if (localStorage.getItem('telefonos') == null) {

        let telefonos = []
        telefonos.push(datosT)
        localStorage.setItem('telefonos', JSON.stringify(telefonos))

    } else {

        let telefonos = JSON.parse(localStorage.getItem('telefonos'))
        telefonos.push(datosT)
        localStorage.setItem('telefonos', JSON.stringify(telefonos))

    }

    pintarDatosTelefonos()
    document.getElementById('form-telefonos').reset()
    e.preventDefault()

    //Accion de ir la agenda direcciones - recuerda


}


function eliminarT(nombre) {


    let datos = JSON.parse(localStorage.getItem('telefonos'))


    datos.forEach(el => {

        if (el.nombreT == nombre) {

            let restoDatos = datos.filter((i) => i !== el)

            localStorage.setItem('telefonos', JSON.stringify(restoDatos))
            pintarDatosTelefonos()
        }

    });


}


function editarDatosT(nombre) {



    let datos = JSON.parse(localStorage.getItem('telefonos'))


    datos.forEach(el => {


        if (el.nombreT === nombre) {

            d.getElementById('nombreT').value = el.nombreT
            // d.getElementById('contrasenaT').value = el.contrasenaT
            // d.getElementById('dniT').value = el.dniT
            d.getElementById('telefonoT').value = el.telefonoT
            // d.getElementById('direccionT').value = el.direccionT


        }

    })

    eliminarT(nombre)

    //Accion de subir al formulario - recuerda

}

function recuperarDatosTelefonos(e){

    pintarDatosTelefonos()
}



function pintarDatosTelefonos() {


    if(localStorage.getItem('telefonos') == null){

        alert('No existe ninguna agenda. Crea la tuya....')

    }else{


        let datos = Array.from(JSON.parse(localStorage.getItem('telefonos')))
        // console.log(datos)
    const tablaTelefonos = d.getElementById('tabla-telefonos')
        // console.log(tablaDirecciones)
    tablaTelefonos.innerHTML = ''

    for (const dato of datos) {

        let nombreT = dato.nombreT
        // let contrasenaT = dato.contrasenaT
        // let dniT = dato.dniT
        let telefonoT = dato.telefonoT
        // let direccionT = dato.direccionT

        tablaTelefonos.innerHTML += `
        
        <tr>
        
        <td style=''>${nombreT}</td>
        <td style=''>${telefonoT}</td>
     
        
        <td><button class='borrarDatosTelefonos' id='borrarDatos'>Delete</button></td>
        
        <td><button class='editarDatosTelefonos' id='editarDatos'>Edit</button></td>

        <td></td>
        
        </tr>
        
        `

    }


  

    }

}


//=================================JS PARA AGENDA TELEFONOS FRANCIA=================//

function insertarDatosTelefonosFrancia(json) {

    console.log(json)

    json.forEach(el => {
        console.log(el)

        const nombreF = el.nombre
        // const contrasenaF = el.contrasena
        // const dniF = el.dni
        const telefonoF = el.telefono
        // const direccionF = el.direccion


        const datosF = {
            nombreF,
            // contrasenaF,
            // dniF,
            telefonoF
            // direccionF
        }


        console.log(datosF)


        if (sessionStorage.getItem('telefonosFrancia') == null) {

            let telefonosFrancia = []
            telefonosFrancia.push(datosF)
            sessionStorage.setItem('telefonosFrancia', JSON.stringify(telefonosFrancia))
        } else {

            let telefonosFrancia = JSON.parse(sessionStorage.getItem('telefonosFrancia'))
            telefonosFrancia.push(datosF)
            sessionStorage.setItem('telefonosFrancia', JSON.stringify(telefonosFrancia))

        }



    })

    pintarDatosTelefonosFrancia()
    document.getElementById('form-telefonos').reset()
        // e.preventDefault()

    //Accion de ir la agenda direcciones - recuerda

}

function introducirDatosTelefonosFrancia(btnEnviarTelefonos) {

    console.log(btnEnviarTelefonos)

    const nombreF = document.getElementById('nombreT').value
    // const contrasenaF = document.getElementById('contrasenaT').value
    // const dniF = document.getElementById('dniT').value
    const telefonoF = document.getElementById('telefonoT').value
    // const direccionF = document.getElementById('direccionT').value


    const datosIF = {

        nombreF,
        // contrasenaF,
        // dniF,
        telefonoF
        // direccionF
    }


    if (sessionStorage.getItem('telefonosFrancia') == null) {

        let telefonosFrancia = []
        telefonosFrancia.push(datosIF)
        sessionStorage.setItem('telefonosFrancia', JSON.stringify(telefonosFrancia))
    } else {

        let telefonosFrancia = JSON.parse(sessionStorage.getItem('telefonosFrancia'))
        telefonosFrancia.push(datosIF)
        sessionStorage.setItem('telefonosFrancia', JSON.stringify(telefonosFrancia))

    }

    pintarDatosTelefonosFrancia()
    document.getElementById('form-telefonos').reset()

    btnEnviarTelefonos.value = 'Enviar'
        //btnEnviarTelefonos.classList.add('enviar-telefonos')

}


function pintarDatosTelefonosFrancia() {



    let datos = Array.from(JSON.parse(sessionStorage.getItem('telefonosFrancia')))
        //console.log(datos)
    const tablaTelefonos = d.getElementById('tabla-telefonos')
        // console.log(tablaDirecciones)
    tablaTelefonos.innerHTML = ''

    for (let dato of datos) {
        //console.log(dato)
        let nombreF = dato.nombreF
        // let contrasenaF = dato.contrasenaF
        // let dniF = dato.dniF
        let telefonoF = dato.telefonoF
        // let direccionF = dato.direccionF

        tablaTelefonos.innerHTML += `
        
        <tr>
        
        <td style=''>${nombreF}</td>
     
        <td style=''>${telefonoF}</td>
 
        
        <td><button class='borrarDatosTelefonosFrancia' id='borrarDatos'>Delete</button></td>
        
        <td><button class='editarDatosTelefonosFrancia' id='editarDatos'>Edit</button></td>
        
        </tr>
        
        `

    }

}



function eliminarF(nombre) {


    let datos = JSON.parse(sessionStorage.getItem('telefonosFrancia'))


    datos.forEach(el => {

        if (el.nombreF === nombre) {

            let restoDatos = datos.filter((i) => i !== el)

            sessionStorage.setItem('telefonosFrancia', JSON.stringify(restoDatos))
            pintarDatosTelefonosFrancia()
        }

    });





    // if (sessionStorage.getItem('telefonosFrancia') == "[]") {

    //     // console.log(sessionStorage)
    //     const btnFrancia = document.getElementById('agenda-francia')
    //     btnFrancia.removeAttribute('disabled')
    //     btnFrancia.style.textDecoration = 'none'
    //     btnFrancia.style.cursor = 'pointer'
    // }



}


function editarDatosF(nombre) {



    let datos = JSON.parse(sessionStorage.getItem('telefonosFrancia'))


    datos.forEach(el => {


        if (el.nombreF === nombre) {

            eliminarF(nombre)

            d.getElementById('nombreT').value = el.nombreF
            // d.getElementById('contrasenaT').value = el.contrasenaF
            // d.getElementById('dniT').value = el.dniF
            d.getElementById('telefonoT').value = el.telefonoF
            // d.getElementById('direccionT').value = el.direccionF


        }

    })




    const btnEnviarTelefonos = document.getElementById('enviarT')


    btnEnviarTelefonos.value = 'Actualizar'


    btnEnviarTelefonos.addEventListener('click', () => {

        if (btnEnviarTelefonos.value == 'Actualizar') {

            btnEnviarTelefonos.classList.remove('enviar-telefonos')
                //btnEnviarTelefonos.classList.add('actualizar-telefonos-francia')

        }

        introducirDatosTelefonosFrancia(btnEnviarTelefonos)
    })

  

  
}





function insertarAgendaFrancia(e) {

    e.preventDefault()

    if (sessionStorage.getItem('telefonosFrancia') == null){

        fetch('agendaTelefonosFrancia.json')

        .then((res) => {
    
                console.log(res)
                return res.ok ? res.json() : Promise.reject(res)
            })
            .then((json) => {
    
                console.log(json)
    
    
    
                insertarDatosTelefonosFrancia(json)
                    // console.log(telefonosFrancia)
            })
    
    
        .catch((err) => {
    
                console.log('status', err.status, 'recurso', err.statusText)
            })
            .finally()

    }else{

        pintarDatosTelefonosFrancia()

    }
    

}





//=================================JS PARA AGENDA TELEFONOS PORTUGAL================//


function insertarAgendaPortugal(e) {

    e.preventDefault()

    if (sessionStorage.getItem('telefonosPortugal') == null){
        fetch('agendaTelefonosPortugal.json')
        .then((res) => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject(res)
        })

        .then((json) => {

            // console.log(json[0].nombre)
            insertarDatosTelefonosPortugal(json)
        })
        .catch((err) => {
            console.log('status', err.status, 'recurso', err.statusText)

        })
        .finally()


    }else{

        pintarDatosTelefonosPortugal()
    }
  
}


function insertarDatosTelefonosPortugal(json) {

    json.forEach(el => {

        console.log(el)


        const datosP = {

                nombreP: el.nombre,
                // contrasenaP: el.contrasena,
                // dniP: el.dni,
                telefonoP: el.telefono,
                // direccionP: el.direccion
            }
            // console.log(datosP)


        if (sessionStorage.getItem('telefonosPortugal') == null) {

            let telefonosPortugal = []
            telefonosPortugal.push(datosP)
            sessionStorage.setItem('telefonosPortugal', JSON.stringify(telefonosPortugal))

        } else {

            let telefonosPortugal = JSON.parse(sessionStorage.getItem('telefonosPortugal'))
            telefonosPortugal.push(datosP)
            sessionStorage.setItem('telefonosPortugal', JSON.stringify(telefonosPortugal))
        }


    })




    pintarDatosTelefonosPortugal()
    document.getElementById('form-telefonos').reset()
        // e.preventDefault()

    //Accion de ir la agenda direcciones - recuerda
}

function introducirDatosTelefonosPortugal(btnEnviarTelefonos) {

    console.log(btnEnviarTelefonos)

    const nombreP = document.getElementById('nombreT').value
    // const contrasenaP = document.getElementById('contrasenaT').value
    // const dniP = document.getElementById('dniT').value
    const telefonoP = document.getElementById('telefonoT').value
    // const direccionP = document.getElementById('direccionT').value


    const datosIP = {

        nombreP,
        // contrasenaP,
        // dniP,
        telefonoP
        // direccionP
    }


    if (sessionStorage.getItem('telefonosPortugal') == null) {

        let telefonosPortugal = []
        telefonosPortugal.push(datosIP)
        sessionStorage.setItem('telefonosPortugal', JSON.stringify(telefonosPortugal))
    } else {

        let telefonosPortugal = JSON.parse(sessionStorage.getItem('telefonosPortugal'))
        telefonosPortugal.push(datosIP)
        sessionStorage.setItem('telefonosPortugal', JSON.stringify(telefonosPortugal))

    }

    pintarDatosTelefonosPortugal()
    document.getElementById('form-telefonos').reset()

    btnEnviarTelefonos.value = 'Enviar'


}

function pintarDatosTelefonosPortugal() {


    let datos = Array.from(JSON.parse(sessionStorage.getItem('telefonosPortugal')))
        //console.log(datos)
    const tablaTelefonos = d.getElementById('tabla-telefonos')
        // console.log(tablaDirecciones)
    tablaTelefonos.innerHTML = ''

    for (let dato of datos) {
        //console.log(dato)
        let nombreP = dato.nombreP
        // let contrasenaP = dato.contrasenaP
        // let dniP = dato.dniP
        let telefonoP = dato.telefonoP
        // let direccionP = dato.direccionP

        tablaTelefonos.innerHTML += `
        
        <tr>
        
        <td style=''>${nombreP}</td>
      
        <td style=''>${telefonoP}</td>
       
        
        <td><button class='borrarDatosTelefonosPortugal' id='borrarDatos'>Delete</button></td>
        
        <td><button class='editarDatosTelefonosPortugal' id='editarDatos'>Edit</button></td>
        
        </tr>
        
        `

    }



}




function eliminarP(nombre) {


    let datos = JSON.parse(sessionStorage.getItem('telefonosPortugal'))


    datos.forEach(el => {

        if (el.nombreP == nombre) {

            let restoDatos = datos.filter((i) => i !== el)
            sessionStorage.setItem('telefonosPortugal', JSON.stringify(restoDatos))
            pintarDatosTelefonosPortugal()
        }

    });






}


function editarDatosP(nombre) {



    let datos = JSON.parse(sessionStorage.getItem('telefonosPortugal'))


    datos.forEach(el => {


        if (el.nombreP === nombre) {

            eliminarP(nombre)

            d.getElementById('nombreT').value = el.nombreP
            // d.getElementById('contrasenaT').value = el.contrasenaP
            // d.getElementById('dniT').value = el.dniP
            d.getElementById('telefonoT').value = el.telefonoP
            // d.getElementById('direccionT').value = el.direccionP


        }

    })


    const btnEnviarTelefonos = document.getElementById('enviarT')


    btnEnviarTelefonos.value = 'Actualizar'


    btnEnviarTelefonos.addEventListener('click', () => {

        if (btnEnviarTelefonos.value == 'Actualizar') {

            btnEnviarTelefonos.classList.remove('enviar-telefonos')


        }

        introducirDatosTelefonosPortugal(btnEnviarTelefonos)
    })

    //Accion de subir al formulario - recuerda

}



//=================================INICIALIZADORES================================//


d.addEventListener('click', (e) => {

    console.log('diste click', e.target)
    e.preventDefault()



    if (e.target.classList.contains('enviar-direcciones')) {
        insertarDatosDirecciones(e)
    } else if (e.target.classList.contains('enviar-telefonos')) {


        insertarDatosTelefonos(e)


    } else if (e.target.classList.contains('borrarDatosDirecciones')) {
        let nombre = e.target.parentElement.parentElement.children[0].textContent.toLowerCase()

        eliminarD(nombre)

    } else if (e.target.classList.contains('editarDatosDirecciones')) {
        let nombre = e.target.parentElement.parentElement.children[0].textContent.toLowerCase()

        editarDatosD(nombre)

    } else if (e.target.classList.contains('borrarDatosTelefonos')) {
        let nombre = e.target.parentElement.parentElement.children[0].textContent.toLowerCase()

        eliminarT(nombre)

    } else if (e.target.classList.contains('editarDatosTelefonos')) {
        let nombre = e.target.parentElement.parentElement.children[0].textContent.toLowerCase()

        editarDatosT(nombre)
    } else if (e.target.classList.contains('borrarDatosTelefonosFrancia')) {
        let nombre = e.target.parentElement.parentElement.children[0].textContent.toLowerCase()

        eliminarF(nombre)


    } else if (e.target.classList.contains('editarDatosTelefonosFrancia')) {
        let nombre = e.target.parentElement.parentElement.children[0].textContent.toLowerCase()

        editarDatosF(nombre)



    } else if (e.target.classList.contains('borrarDatosTelefonosPortugal')) {
        let nombre = e.target.parentElement.parentElement.children[0].textContent.toLowerCase()

        eliminarP(nombre)
    } else if (e.target.classList.contains('editarDatosTelefonosPortugal')) {
        let nombre = e.target.parentElement.parentElement.children[0].textContent.toLowerCase()

        editarDatosP(nombre)
    } else if (e.target.classList.contains('agenda-francia')) {

        // let tablaTelefonos = d.getElementById('tabla-telefonos')

        // tablaTelefonos = ''

        //sessionStorage.removeItem('telefonosPortugal')
        insertarAgendaFrancia(e)

    } else if (e.target.classList.contains('agenda-portugal')) {

        // let tablaTelefonos = d.getElementById('tabla-telefonos')

        // tablaTelefonos = ''

        //sessionStorage.removeItem('telefonosFrancia')

        insertarAgendaPortugal(e)

    }else if(e.target.classList.contains('recuperar__agenda__telefonos')){

        // sessionStorage.removeItem('telefonosPortugal')
        // sessionStorage.removeItem('telefonosFrancia')
        pintarDatosTelefonos(e)
        
    }else if(e.target.classList.contains('recuperar__agenda__direcciones')){
        
        pintarDatosDirecciones(e)

    }else if(e.target.classList.contains('cerrar__agenda__telefonos')){

        
        const tablaTelefonos = document.getElementById('tabla-telefonos')

        tablaTelefonos.innerHTML = ''

    }else if(e.target.classList.contains('cerrar__agenda__direcciones')){
        
        const tablaDirecciones = document.getElementById('tabla-direcciones')

        tablaDirecciones.innerHTML = ''
    }

})
//pintarDatosDirecciones()

//pintarDatosTelefonos()