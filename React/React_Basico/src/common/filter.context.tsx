import React, { PropsWithChildren } from "react"

interface FilterMemberContextModel {
    org:string,
    setOrg:React.Dispatch<React.SetStateAction<string>>
}
export const FilterMemberContext = React.createContext<FilterMemberContextModel>(null)

export const FilterMemberProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [org, setOrg] = React.useState<string>("lemoncode")
    
    return (
        <FilterMemberContext value={{org, setOrg}}>
            {children}
        </FilterMemberContext>
    )
}