import "./styles.css";
const content= document.querySelector("#content");
import alfilerImg from "./alfiler.png";
import add_notes_ from "./add_notes.svg";
import proyects_ from "./folder_open.svg"
import inbox_ from "./inbox.svg";
import calendar_ from "./events_.svg";
import settings_noteImg from "./verMas.svg"
import { format } from 'date-fns';
import {guardarEstado} from "./index";
import {proyectoss} from "./index";


const obtener_fecha=new Date();
let fechaActual=format(obtener_fecha,"dd/MMM/yy")


export let newNoteItem;

 let mis_notas_cont;
 let contenedor;


 


export function renderMainContent(){
   
     contenedor=document.createElement("div");
    contenedor.classList.add("cuerpo_cont");

    const title_section=document.createElement("div");
    title_section.classList.add("title_section")

    const title_section_H1=document.createElement("h1");
    title_section_H1.textContent="Mis notas";
     mis_notas_cont=document.createElement("section");
    mis_notas_cont.classList.add("mis_notas_cont")

    contenedor.appendChild(title_section)
    title_section.appendChild(title_section_H1);
 
}


export function renderNote_Box() {
    let obj;
    mis_notas_cont.innerHTML="";
    for (obj of proyectoss[0].nota_list_) {
    // Contenedor principal
const noteBox = document.createElement('div');
noteBox.classList.add('note_box');

// Header de la nota
const header_note_check= document.createElement('div');
header_note_check.classList.add('header_note_check');

const check_button=document.createElement("button");
check_button.classList.add("check_button");

    const headerNote = document.createElement('div');
    headerNote.classList.add('header_note');
    
    // Título
    const titleNote= document.createElement('h1');
    titleNote.classList.add('title_note');
    titleNote.textContent = obj.title;
    
    // Botón fijar
    const fijarNote = document.createElement('button');
    fijarNote.classList.add('fijar_note');
    
    const noteIconFijar = document.createElement('img');
    noteIconFijar.classList.add('noteIcon');
    noteIconFijar.src = alfilerImg;
    noteIconFijar.alt = 'fijar';

    //footer note
    const footerNote=document.createElement("div");
    footerNote.classList.add("footer_note");
    const settings_btn=document.createElement("button");
    settings_btn.classList.add("settings_btn");
    
    const settings_btn_img=document.createElement("img");
  
    settings_btn_img.src=settings_noteImg;
 
    const fechaDate=document.createElement("div")
    fechaDate.classList.add("fecha_note");
    const dateTxT=document.createElement("p")
    dateTxT.textContent=fechaActual;
    

    // settings note ul
  
 const settingsNoteUl= document.createElement("ul");
   
    settingsNoteUl.classList.add("hidden");
    

    settings_btn.addEventListener("click", () => {
        settingsNoteUl.classList.toggle("settings_note_ul"); // Cambia solo para este elemento
      })

 
    


    const edit=document.createElement("li");
    edit.textContent="Editar"
    const recordatorio=document.createElement("li");
    recordatorio.textContent="Recordatorio"
    const estilos=document.createElement("li");
    estilos.textContent="Estilos"
    const eliminar=document.createElement("li");
    eliminar.textContent="Eliminar"
    
    // Cuerpo de la nota
    const textNote = document.createElement('div');
    textNote.classList.add('text_note');
    
    const textNoteP = document.createElement('p');
    textNoteP.innerText=obj.texts;
    
   //ADD EVENTS LISTENERS

   eliminar.addEventListener("click",() => {
    deleteNote_(obj.id);
    renderNote_Box()
})

    //elementos del contenedor principal note_box
    noteBox.appendChild(header_note_check)
    noteBox.appendChild(textNote)
    noteBox.appendChild(footerNote)
    noteBox.appendChild(settingsNoteUl);

  // Añadir imagen al botón y elementos al header
  header_note_check.appendChild(check_button);
  header_note_check.appendChild(headerNote)
  fijarNote.appendChild(noteIconFijar);
  headerNote.appendChild(titleNote);
  headerNote.appendChild(fijarNote);

  // añadir elementos al teext note
  textNote.appendChild(textNoteP);

  // añadir elementos al footer note
    footerNote.appendChild(fechaDate);
    footerNote.appendChild(settings_btn);
    fechaDate.appendChild(dateTxT);
    settings_btn.appendChild(settings_btn_img);

  // añadir elementos al footer note

  settingsNoteUl.appendChild(edit);
  settingsNoteUl.appendChild(recordatorio);
  settingsNoteUl.appendChild(estilos);
  settingsNoteUl.appendChild(eliminar);
  console.log(settingsNoteUl); 
 
  mis_notas_cont.appendChild(noteBox);
  contenedor.appendChild(mis_notas_cont)
  content.appendChild(contenedor);
    }

}


// RENDER ASIDE MENU
export function renderAside_note(){
    // Contenedor principal del menú lateral
const asideMenuCont = document.createElement('aside');
asideMenuCont.classList.add('aside_menu_cont');

// Título del menú lateral
const asideTitle = document.createElement('h2');
asideTitle.classList.add('aside_title');
asideTitle.textContent = 'Martin';

// Lista principal del menú
const asideMenuUl = document.createElement('ul');
asideMenuUl.classList.add('aside_menu_ul');


// Función para crear cada elemento de la lista
function createMenuItem(iconSrc, textContent,claseLi) {
    const listItem = document.createElement('li'); // Elemento de la lista
    listItem.classList.add(claseLi);

    const imgIcon = document.createElement('img'); // Imagen del ícono
    imgIcon.src = iconSrc;
    imgIcon.alt = textContent;

    const menuText = document.createElement('p'); // Texto del ítem
    menuText.textContent = textContent;

    // Añadir la imagen y el texto al elemento de la lista
    listItem.appendChild(imgIcon);
    listItem.appendChild(menuText);

    return listItem;
}



// Crear los elementos del menú
  newNoteItem = createMenuItem(add_notes_, 'Nueva nota',"newNote_Li");
const projectsItem = createMenuItem(proyects_, 'Mis proyectos',"projects_Li");
const calendarItem = createMenuItem(calendar_, 'Calendario',"calendar_Li");
const inboxItem = createMenuItem(inbox_, 'Inbox',"inbox_Li");

// Añadir los elementos al contenedor de la lista
asideMenuUl.appendChild(newNoteItem);
asideMenuUl.appendChild(projectsItem);
asideMenuUl.appendChild(calendarItem);
asideMenuUl.appendChild(inboxItem);

// Añadir el título y la lista al contenedor principal
asideMenuCont.appendChild(asideTitle);
asideMenuCont.appendChild(asideMenuUl);

// Finalmente, añadir el aside al documento (por ejemplo, al body)
document.body.appendChild(asideMenuCont);

}

// BORRAR NOTA
export function deleteNote_(id) {
    const index = proyectoss[0].nota_list_.findIndex(item => item.id === id);
    if (index !== -1) {
        proyectoss[0].nota_list_.splice(index, 1);
    }
proyectoss[0].contadorId--;
    guardarEstado()
}

/* 
 nota para implmentar 
 -crear una clase que tome los datos de los input como atributos y comvertielos en un arrays
  y empujarlos a una lista de arrays que contenga todas las demas notas y despues renderizar note_box
  -modificar el render note par comvertirla en un bucre for que recorra todos los arrays de la lista de arrays
  y renderizarlos uno por uno
  -al estar la nota renderizada dentro de un array se eliminara si se remueve de la lista
  -al remover un array se volvera a renderizar el note_box para actualizar cambios



*/

/* 
 nota para implmentar 
 
 -f


*/