const hoy=new Date();
import { proyectoss } from "../index";



export function recopilarNotas(proyectoss){
   return proyectoss.flatMap(notas => notas.nota_list_);
}





export function compararFechaLimite(allNotas){
   

 allNotas.sort((a, b) => a.fecha_MilSeg - b.fecha_MilSeg)
console.log(allNotas)

//=> Tue Jan 01 2030 00:00:00
}








function mostrarTareasProx(){
    
}