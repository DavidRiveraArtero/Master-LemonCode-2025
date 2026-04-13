import { ListMember } from "./list.model";

export const getMemberList = async (org: string): Promise<ListMember[]> => {
  const response = await fetch(`https://api.github.com/orgs/${org}/members`);

  if (!response.ok) {
    switch (response.status.toString()){
      case "404":
        throw new Error("No existe en la lista de miembros")
      case "403":
        throw new Error("Peticion denegada por el servidor")
      default:
        throw new Error("Error desconocido")

    }
  }

  return await response.json();
};
