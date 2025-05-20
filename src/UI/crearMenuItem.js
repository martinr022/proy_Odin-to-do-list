

export function createMenuItem(iconSrc, textContent,claseLi,idLi) {
    const listItem = document.createElement('li'); // Elemento de la lista
    listItem.classList.add(claseLi);
    listItem.id=idLi;
    
  
    const itemContain=document.createElement('div');
   itemContain.classList.add("itemContain")
  
    const imgIcon = document.createElement('img'); // Imagen del ícono
    imgIcon.src = iconSrc;
    imgIcon.alt = textContent;
  
    const menuText = document.createElement('p'); // Texto del ítem
    menuText.textContent = textContent;
    menuText.classList.add("asideLiTxt")
  
    // Añadir la imagen y el texto al elemento de la lista
    itemContain.appendChild(imgIcon);
    itemContain.appendChild(menuText);
    listItem.appendChild(itemContain);
  
    return listItem;
  }


  export const menuItems=[];