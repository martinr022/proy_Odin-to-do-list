
import iconProy_Src from "./icons/proyect.svg";
import { renderNote_Box ,vaciarNoteBOX, mis_notas_cont} from "./mis_notas";
import { proyectoss, Proyecto } from "./index";

export const projArray=[];

// captar proyecto actual
export let proyecto_actual=0;

export const subMenuProyUl= document.createElement("ul");
subMenuProyUl.classList.add("subUl");
subMenuProyUl.id="subUl_Id"

export function renderProyectItem(proyectoss) {
    
    subMenuProyUl.innerHTML="";
    for (let proy of proyectoss){ 
    const proyItem = document.createElement('li'); // Elemento de la lista
    proyItem.addEventListener("click",() => seleccioar_Proyecto(proy.id))
    proyItem.classList.add("project_li")
    
    
    const img_proy_Icon = document.createElement('img'); // Imagen del ícono
    img_proy_Icon.src = iconProy_Src;
    img_proy_Icon.alt = proy.nombre;

    const menu_proy_Text = document.createElement('p'); // Texto del ítem
    menu_proy_Text.textContent = proy.nombre;
    menu_proy_Text.classList.add("subMenu_Txt")

    // Añadir la imagen y el texto al elemento de la lista
    proyItem.appendChild(img_proy_Icon);
    proyItem.appendChild(menu_proy_Text);

    subMenuProyUl.appendChild(proyItem);

    console.log(proyItem)
     
    }

    
}



// Crear los elementos del menú

export function seleccioar_Proyecto(id) {
    console.log("Buscando proyecto:", id);
    console.log("Proyectos disponibles:", proyectoss);
    
    const index = proyectoss.findIndex(item => item.id === id);
    
    if (index !== -1) {
        proyecto_actual = index;
        
        renderNote_Box(proyecto_actual);
        
    } else {
        console.error("Proyecto no encontrado");
        // Manejar el error, ej: proyecto_actual = 0 o undefined
    }
    
    console.log("Índice actual:", proyecto_actual);
}
// captar proyecto actual






/* 

-que voy a ha hacer hoy:

voy a crear un ul dentro de proyectos li para añadirle proyectos dinamicamente
 modificando una funcion existente voy a crear un array con cada proywcto nuevo para guardar las notas
 y modificare el render note box para que renderisze el index del proyecto selecionado



*/