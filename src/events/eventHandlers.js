
import { render_crearProy_card } from "../UI/crear_proy";
import {  togglear_elementos } from "../helpers/doom_Helpers";
import { renderProyectItem } from "../proyectos";
import {show_Crear_nota} from "../crear_nota"






export const eventHandlers = {
    show_Crear_nota: () =>show_Crear_nota(),
    renderCreateProject: () => render_crearProy_card(),
    showProjects: () => togglear_elementos("subUl_Id","show"),
    renderProyectItem:() => renderProyectItem() 

    // ...otros handlers
  };

  //ARRAYS CONTROL
