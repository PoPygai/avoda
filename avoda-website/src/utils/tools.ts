import * as React from "react";
import {RequestParaments, ValuesInputRequests} from "./types.ts";
import {requestParamentsSlice} from "../state/slices/RequestParamentsSlice.ts";
import {AppDispatch} from "../state/store.ts";

export const handleDocumentClick = (e: MouseEvent,refBurger: React.RefObject<HTMLLIElement | null>,refListMenu: React.RefObject<HTMLUListElement | null>) => {
    const target = e.target as Node;
    if (
        refBurger.current &&
        !refBurger.current.contains(target)
    ) {
        refListMenu.current?.classList.add("hidden-menu");
    }
};

export const formatToValue = (cities:string[]) =>{
    if (!cities.length) return [""]
    return cities
        .map(city => regionsValues.find(item => item.title === city)?.value)
        .filter((value): value is string => Boolean(value));
}




export const regionsValues:ValuesInputRequests[] = [
    { title: "Haifa", value: "haifa" },
    { title: "Tel-aviv", value: "tel-aviv" },
    { title: "Akko", value: "akko" }
]
export const frequencyValues:ValuesInputRequests[] = [
    { title: "Day", value: "day" },
    { title: "Week", value: "week" },
    { title: "Month", value: "month" },
    { title: "For work", value: "work" },
]
export const experienceValues:ValuesInputRequests[] = [
    { title: "No experience", value: "no_experience" },
    { title: "0–1 year", value: "junior" },
    { title: "1–3 years", value: "middle" },
    { title: "3+ years", value: "senior" },
    { title: "Don’t care", value: "any" },
]
export const employmentValues:ValuesInputRequests[] = [
    { title: "Full-time employment", value: "fulltime" },
    { title: "Private employment", value: "employment-private" },
    { title: "Part-time employment", value: "part-time" },
]


export const  handleChangeArray = (e: React.ChangeEvent<HTMLInputElement>, arrayValue: string[],value:string,field:keyof RequestParaments,dispatch:AppDispatch) => {
    const {setFieldParaments} = requestParamentsSlice.actions
    const checked = e.target.checked;

    if (checked) {
        if (!arrayValue.includes(value)) {
            dispatch(setFieldParaments({field, value: [...arrayValue, value]}));
        }
    } else {
        dispatch(setFieldParaments({ field, value: arrayValue.filter(el => el !== value) }));
    }
}


