import { createMenuItem ,menuItems} from "./crearMenuItem";
import { push_MenuItem } from "../helpers/doom_Helpers";
import add_notes_ from "../icons/add_notes.svg"
import new_proy from "../icons/create_new_folder.svg";
import proyects_ from "../icons/folder_open.svg";
import calendar_ from "../icons/calendar.svg";
import inbox_  from "../icons/inbox.svg";
import {subMenuProyUl} from "../proyectos"
import { close_Other_Menus } from "../helpers/doom_Helpers";

import { eventHandlers} from "../events/eventHandlers";



push_MenuItem(add_notes_,"Nueva nota","show_Crear_nota",undefined,"nuevaNotaIdBtn");
push_MenuItem( new_proy,'Nuevo proyecto',"renderCreateProject")
push_MenuItem(proyects_,'Mis proyectos','showProjects', subMenuProyUl,"proyIdBtn" )
push_MenuItem( calendar_,'Calendario')
push_MenuItem( inbox_,'Inbox')



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

// Crear los elementos del menú
menuItems.forEach(item => {
    const menuItem = createMenuItem(item.icon, item.text, "aside_Li",item.id);
  
const projectsItem_Div =menuItem.querySelector(".itemContain");
projectsItem_Div.addEventListener("click", eventHandlers[item.action])
    
    if (item.hasSubmenu) {
      
      // ...lógica del submenú (si aplica
      menuItem.appendChild(item.hasSubmenu);
    }

    asideMenuUl.appendChild(menuItem);
  });

// Añadir el título y la lista al contenedor principal
asideMenuCont.appendChild(asideTitle);
asideMenuCont.appendChild(asideMenuUl);

// Finalmente, añadir el aside al documento (por ejemplo, al body)
document.body.appendChild(asideMenuCont);

}



/* buscar una forma de indexaR al codigo
const projectsItem_Div =projectsItem.querySelector(".itemContain");
projectsItem_Div.addEventListener("click",()=>{
  mostrar_elementos("subUl_Id","show")})
*/