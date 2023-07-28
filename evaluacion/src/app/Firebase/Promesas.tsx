import { Formulario } from "../Interface/IFormulario"
import {collection, addDoc,getDocs, updateDoc, doc, deleteDoc} from "firebase/firestore"
import { db } from "./FirebaseApp"

/* Accion para agregar los datos a la base de datos remota(reactfire) , que estaran en la coleccion "formulario"  dentro de un documento con un _id
dado por Firebase */
export const registrarFormulario = async(f:Formulario)=>{
    
    const docRef = await addDoc(collection(db, "formulario"), f)

}
/* querySnapshot recupera datos que concidan con los criterios especificados */
/* método data( Este método devuelve un objeto representa los campos y sus valores almacenados en el documento */
export const obtenerFormularios= async()=>{
    const querySnapshot = await getDocs(collection(db, "formulario"));
    console.log(querySnapshot)
    var formulario:Formulario[] = []
    querySnapshot.forEach((doc)=>{
        console.log(doc.id)
        console.log(doc.data())
        var f:Formulario = {
            nombre:doc.data().nombre,
            apellido:doc.data().apellido,
            genero:doc.data().genero,
            direccion:doc.data().id,
            numero: doc.data().numero,
            region: doc.data().region,
            comuna: doc.data().comuna,
            correo: doc.data().correo,
            telefono: doc.data().telefono,
            asunto: doc.data().asunto,
            contenido: doc.data().contenido
        } 
        formulario.push(f)
    })
    return formulario
}

export const actualizarFormulario = async(idFormulario: string,f:Formulario) =>{
    const docRef = doc(db, "formulario", idFormulario);

    await updateDoc(docRef, {...f});
}

export const EliminarFormulario =async (idFormulario:string) => {
    await deleteDoc(doc(db, "formulario", idFormulario))
}
