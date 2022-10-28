/*
const li1 = document.querySelector(".li-1");
const aHome = document.querySelector(".a-home");

li1.addEventListener('mouseover', removeInactive);
li1.addEventListener('mouseout', removeInactive);

function removeInactive(){
    aHome.classList.toggle('inactive');
}
*/

const iconMenuMobile = document.querySelector(".icon-menu-mobile");
const menuMobile = document.querySelector(".nav-container");
const blackScreen = document.querySelector(".black-screen");
const transferContainer = document.querySelector('.transfer-container');
const divContainer = document.querySelector('.container');
const divTransferencias = document.querySelector('.transferencias');
const nCuenta = document.querySelector('.nCuenta');
const cedula = document.querySelector('.cedula');
const vacio = document.querySelector('.vacio');
const distribuidora = document.querySelector('.distribuidora');
const datosDeTransferencia = document.querySelector('.transferencias');
const botonFiltro = document.querySelector('.filtrobutton');
const filtro = document.querySelector('.verdaderoFiltro');






iconMenuMobile.addEventListener('click', toggleMobileMenu)
blackScreen.addEventListener('click', closedDiv)

function toggleMobileMenu(){
    menuMobile.classList.toggle('active');
    blackScreen.classList.toggle('active');
}

function closedDiv(){
    menuMobile.classList.remove('active');
    blackScreen.classList.remove('active');
}


botonFiltro.addEventListener('click', toggleMostrarFiltro)

function toggleMostrarFiltro(){
    filtro.classList.toggle('active');
}



// lista de transferencias------------------------------------------------------

const transferList = [];

transferList.push({
    tasa:622,
    idi: 30301,
    fecha: "24-09-22",
    hora: "08:59",
    nombre: "mairena villamizar",
    documento: 1098822415,
    banco: "mercantil",
    cuenta: "01051234567891234667",
    pesos: 100000,
    distribuidor: "Mariane"});

    transferList.push({
        tasa:622,
        idi: 30302,
        fecha: "24-09-22",
        hora: "08:59",
        nombre: "Jeremy Perez",
        documento: 1098822415,
        banco: "mercantil",
        cuenta: "01051234567891234667",
        pesos: 10000,
        distribuidor: "Mariane"});

    transferList.push({
        tasa:622,
        idi: 30303,
        fecha: "24-09-22",
        hora: "08:59",
        nombre: "Isabella Villan Villamizar",
        documento: 1098822415,
        banco: "venezuela",
        cuenta: "01021234567891234667",
        pesos: 150000,
        distribuidor: "Mariane villamizar"});

transferList.push({
        tasa:622,
        idi: 30304,
        fecha: "24-09-22",
        hora: "09:50",
        nombre: "darcy",
        documento: 1098822415,
        banco: "banesco",
        cuenta: "01341234567891234667",
        pesos: 80000,
    distribuidor: "Darcy"});

    transferList.push({
        tasa:622,
        idi: 30305,
        fecha: "24-09-22",
        hora: "09:50",
        nombre: "pago movil",
        documento: 1098822415,
        banco: "banesco",
        cuenta: "04120312043",
        pesos: 20000,
    distribuidor: "omar"});



    





    function renderDatos(arr) {

        for (datos of arr){

            const datosDeTransferencia = document.createElement('div');
            datosDeTransferencia.classList.add('transferencias');
            datosDeTransferencia.setAttribute("id", datos.idi);
            

                const idTransferencia = document.createElement('span');
                idTransferencia.innerText = datos.idi;
                
                const fechaTransferencia = document.createElement('span');
                fechaTransferencia.innerHTML = datos.fecha +'<br>'+ datos.hora;
                
                const nombreDistri = document.createElement('div');
                nombreDistri.classList.add('divNombre');

                            const nombreTransferencia = document.createElement('span');
                            nombreTransferencia.innerText = datos.nombre;

                            const documentoTransferencia = document.createElement('span');
                            documentoTransferencia.innerText = datos.documento;

                const bancoDistri = document.createElement('div');
                bancoDistri.classList.add('divBanco');

                            const bancoTransferencia = document.createElement('span');
                            bancoTransferencia.innerText = datos.banco;

                            const cuentaTransferencia = document.createElement('span');
                            cuentaTransferencia.innerText = datos.cuenta;

                const divBolivares = document.createElement('div');
                divBolivares.classList.add('divBolivares');

                            const signoBs = document.createElement('span');
                            signoBs.innerText = "bs";

                            const bsTransferencia = document.createElement('span');
                            bsTransferencia.innerText = (datos.pesos / datos.tasa).toFixed(2);
                
                const divDistri = document.createElement('div');
                divDistri.classList.add('divDistri');

                        const pesosTransferencia = document.createElement('span');
                        pesosTransferencia.innerText = '$ ' + datos.pesos;

                        const distribuidorTransferencia = document.createElement('span');
                        distribuidorTransferencia.innerText = datos.distribuidor;
                
                const detalleTransferencia = document.createElement('div');
                detalleTransferencia.classList.add('detalle');

                        const captureTransferencia = document.createElement('div');
                        captureTransferencia.classList.add('capture-container');

                            const buttoncapture = document.createElement('button');
                            buttoncapture.classList.add('icon-file-picture');

                        const buttondetalle = document.createElement('button');
                        buttondetalle.classList.add('icon-profile');
                        buttondetalle.setAttribute("id", datos.idi);



            datosDeTransferencia.appendChild(idTransferencia);
            datosDeTransferencia.appendChild(fechaTransferencia);
            datosDeTransferencia.appendChild(nombreDistri);
                    nombreDistri.appendChild(nombreTransferencia);
                    nombreDistri.appendChild(documentoTransferencia);
            datosDeTransferencia.appendChild(bancoDistri);
                    bancoDistri.appendChild(bancoTransferencia);
                    bancoDistri.appendChild(cuentaTransferencia);
            datosDeTransferencia.appendChild(divBolivares);
                    divBolivares.appendChild(signoBs);
                    divBolivares.appendChild(bsTransferencia);
            datosDeTransferencia.appendChild(divDistri);
                    divDistri.appendChild(pesosTransferencia);
                    divDistri.appendChild(distribuidorTransferencia);
            datosDeTransferencia.appendChild(detalleTransferencia);
                    detalleTransferencia.appendChild(captureTransferencia);
                        captureTransferencia.appendChild(buttoncapture);
                    detalleTransferencia.appendChild(buttondetalle);

        transferContainer.appendChild(datosDeTransferencia);
         
     

  
        const botonAdm = document.querySelector('.icon-loop2');

        botonAdm.addEventListener('click', agregarClaseAdmin);

                            function agregarClaseAdmin(){
                                datosDeTransferencia.classList.toggle('contAdm');
                                divTransferencias.classList.toggle('contAdm');
                                cedula.classList.toggle('vacio');
                                nCuenta.classList.toggle('vacio');
                                distribuidora.classList.toggle('vacio');
                            }
                        
                            // agregarClaseAdmin()
            
        }
    }
    renderDatos(transferList);

    
