import * as React from "react";

export const handleDocumentClick = (e: MouseEvent,refBurger: React.RefObject<HTMLLIElement | null>,refListMenu: React.RefObject<HTMLUListElement | null>) => {
    const target = e.target as Node;
    if (
        refBurger.current &&
        !refBurger.current.contains(target)
    ) {
        refListMenu.current?.classList.add("hidden-menu");
    }
};

export  const REGIONS =["Haifa","Tel-aviv","Akko"];
// export enum REGIONS{
//     HAIFA = 'Haifa',
//     TELAVIV = 'Tel-avai',
// }
export const Frequency=["Day","Week","Month","For work"];
