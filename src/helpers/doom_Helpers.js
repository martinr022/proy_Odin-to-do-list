import { menuItems } from "../UI/crearMenuItem";

import { crear_nota_cont } from "../crear_nota";

export function createElement_doom(element,className){
    const element_Tag=document.createElement(element);
    if(className){ 
        element_Tag.classList.add(className);
    }
    return element_Tag;
}

export function togglear_elementos(nameClass, classToggle ) {

    document.getElementById(nameClass).classList.toggle(classToggle);
  }

export function push_MenuItem(icon,text,action,hasSubmenu,id){
   menuItems.push({
    icon,
    text,
    action,
    hasSubmenu,
    id
   })

}
// Versión definitiva corregida:
export function close_Other_Menus(btnRef, classCont, classRemove) {
    document.addEventListener('click', function(event) {
        const clickedInsideButton = event.target.closest(btnRef);
        const clickedInsideMenu = event.target.closest(classCont);
        
        if (!clickedInsideButton && !clickedInsideMenu) {
            document.querySelectorAll(classCont).forEach(menu => {
                menu.classList.remove(classRemove);
            });
        }
    });
}


export function show_item_Doom(classEventOpen){
    crear_nota_cont.classList.add(classEventOpen)
};


export function hidden_item_Doom(classEventClose){
    crear_nota_cont.classList.remove(classEventClose)
};
