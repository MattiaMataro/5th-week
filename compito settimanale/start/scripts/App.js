import { FileDoc } from "./FileDoc.js";
import { UserInterface } from "./UserInterface.js";
/*importa le due classi definite negli altri files*/
export class App{
    ui = new UserInterface();
    files = [];

    /* costruttore: i dati sono presi dal file editor.js che contengono gli id dell'html, che istanzia una nuova app e tramite il costruttore assegna i valori all'istanza di UserInterface  */
    constructor(_ui){ 
        this.ui = _ui;

    /*inizializza tinymce, passando il riferimento all html tramite la proprietà dell'oggetto*/
    tinymce.init({
        selector: `#${this.ui.editor}`
        });

    /*assegnare le proprietà dell'oggetto riferendosi al DOM e passando la proprietà dell'oggetto UserInterface come sopra*/
        this.save = document.querySelector(`#${this.ui.save}`);//prende il valore di save dell'oggetto ui (oggetto-classe userInterface)
        this.editor = document.querySelector(`#${this.ui.editor}`); // ==
        this.file = document.querySelector(`#${this.ui.file}`); // ==
        this.title = document.querySelector(`#${this.ui.title}`); // ==
        this.new = document.querySelector(`#${this.ui.new}`); // == 
    // quando nei metodi dovrò usare tinymce.get(this.ui.editor) avrò due metodi .setContent() e .getContent()
    
    /* chiamare il metodo che fa il bind dell'evento click */

   
    /* chiamare il metodo che recupera i dati dal localStorage*/
    }
    /* metodo che fa il bind sul click, attenzione all'uso di this*/
    
    /* metodo che recupera i dati nel localStorage*/
    
    /* metodo che carica l'oggetto file */


    /* altro metodo: se non ci sono file caricati crea un oggetto file e fa il push nell'array */
    /* altrimenti modifica il file assegnando i valori letti dal form*/
    /* salva l'array nel localStorage e chiama la funzione che stampa a video*/

    /* metodo che stampa a video */

 
    build(){
        /*pulisce il form*/
            this.clean();
            /*pulisce il contenitore dei risultati*/
            this.file_list.innerHTML = "";
            /*con il ciclo foreach appende la stringa html nel contenitore in pagina*/
            this.files.forEach((el, index) => {
                this.file_list.innerHTML += (`<li data-id="${index}" class="list-group-item list-group-item-action docs">${el.title}</li>`)
            });
            $(".docs").click(this.loadFile.bind(this));
        }
    clean(){
            this.title.value = "";
            tinymce.get(this.ui.editor).setContent('');
            this.openFile = null;
        }
}