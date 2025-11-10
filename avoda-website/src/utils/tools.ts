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
