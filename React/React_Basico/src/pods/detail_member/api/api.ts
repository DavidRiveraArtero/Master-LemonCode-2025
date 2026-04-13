import { Member } from "./member.model"

export const getMember = async(id:string):Promise<Member> => {
    const response = await fetch(`https://api.github.com/users/${id}`)
    
    if(!response.ok){
        switch (response.status.toString()){
            case "404":
                throw new Error("No existe en la lista de miembros")
            case "403":
                throw new Error("Peticion denegada por el servidor")
             default:
                throw new Error("Error desconocido")
        }
    }
    console.log("dentro")
    return response.json()
}