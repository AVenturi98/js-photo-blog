/*

CONSEGNA #1

Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

Milestone 2
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata

//-------------
CONSEGNA #2

Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

Milestone 2
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:

Bonus
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

*/

 

/*   // HTML

<div class="col-md-4 col-sm-12">
    <div class="card drop_pos ">
        <img src="./img/pin.svg" class="drop">
        <div class="row g-0">
        <div class="col-md-12 col-lg-4">
            <img src="./img/Screenshot_20221008-042956_Instagram.jpg" class="img-fluid img-thumbnail img-thumbnail card-img-top">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        </div>
    </div>
</div> 

*/

const base_URL = 'https://jsonplaceholder.typicode.com';

const body_URL = '/photos';

const endpoint = base_URL + body_URL; // + ?_limits=6

const elementForAppend = document.querySelector('.cont_append');
const overElement = document.querySelector('.overview');

axios
    .get(endpoint, {
        params: {
            _limit: 6,
        },
    })
    .then( (res) => {

        const photos = res.data;
        console.log(photos);

        elementsPage(elementForAppend, photos, overElement);

    })
    .catch((err) => {
        console.log(err)
    })

    
function elementsPage(append, root, element) {

    root.forEach((photo) => {

        const { title, url } = photo ;
        
        const elementAddHTML = `
            <div class="col-md-4 col-sm-12 carta">
                <div class="card drop_pos h-100">
                    <img src="./img/pin.svg" class="drop">
                    <div class="row g-0">
                    <div class="col-md-12 col-lg-12">
                        <img src="${url}" class="img-fluid img-thumbnail card-img-top">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text">${title}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div> `;

        append.innerHTML += elementAddHTML;
        
        window.addEventListener('click', () => {
            
            element.innerHTML = `
                <img src="" class="img-fluidimg-thumbnail card-img-top" style="width: 500px">
                <button type="button" id="button">Chiudi</button>`;
    
            element.classList.remove('d-none');
    
            window.addEventListener('click', () => {
                element.classList.add('d-none')
            });
        });
    });
    
};






    // const clickButton = (event, root) => {
    //     event.addEventListener('click', () => {
    //         root.classList.add('d-none')
    //     })
    // }

    // root.addEventListener('click', () => {

    //     const newDocument = document.createDocumentFragment();

    //     newDocument.innerHTML = `
    //         <div class="overview"></div>`

    //     elementForAppend.append(newDocument)

    // })

