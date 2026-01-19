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

export const regionsValues = [
    { title: "Haifa", value: "haifa" },
    { title: "Tel-aviv", value: "tel-aviv" },
    { title: "Akko", value: "akko" }
]
export const frequencyValues = [
    { title: "Day", value: "day" },
    { title: "Week", value: "week" },
    { title: "Month", value: "month" },
    { title: "For work", value: "work" },
]
export const experienceValues = [
    { title: "No experience", value: "no_experience" },
    { title: "0–1 year", value: "junior" },
    { title: "1–3 years", value: "middle" },
    { title: "3+ years", value: "senior" },
    { title: "Don’t care", value: "any" },
]
export const employmentValues = [
    { title: "Full-time employment", value: "fulltime" },
    { title: "Private employment", value: "employment-private" },
    { title: "Part-time employment", value: "part-time" },
]
