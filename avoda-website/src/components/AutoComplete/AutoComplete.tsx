import React, {useEffect, useRef, useState} from 'react';
import {convertToTitle, regionsValues} from "../../utils/tools.ts";
import "./AutoComplete.css";
import {useAppDispatch, useAppSelector} from "../../state/hooks.ts";
import {requestParamentsSlice} from "../../state/slices/RequestParamentsSlice.ts";

type Props = {
    cities:string[];
    setCities:(cities:string[]) => void;
    nameInp : string
}

const AutoComplete:React.FC<Props> = ({cities,setCities,nameInp}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const {regions}  = useAppSelector(state => state.requestParaments);
    const dispatch = useAppDispatch();
    const {setFieldParaments} = requestParamentsSlice.actions;
    const [text, setText] = useState("");
    const [filtered, setFiltered] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setText(value);
        if (value.trim() === "") {
            setFiltered([]);
            return;
        }
        const result = regionsValues.filter(item =>
            item.value.includes(value)).map(item => item.title);
        setFiltered(result);
    }

    const  handleSelect = (value: string)=> {
        setText("");
        handleSet(value);
        setFiltered([]);
    }

    const handleSet = (value: string) => {
        if(!cities.includes(value)){
            setCities([...cities, value]);
            const values = regionsValues.find(item => item.title === value);

            if(values && !regions.includes(values.value)){
                dispatch(setFieldParaments({field:"regions",value : [...regions,values.value]}))
            }
        }
        //todo handleSubmit
        //todo regions connect to cities

    }
    //todo
    const handleRemove = (city:string) => {

    }

    useEffect(() => {
        console.log(regions.length,cities.length)
        if(regions.length > 0 && cities.length === 0 ){
            const temp:string[] = convertToTitle(regions);
            setCities([...temp]);
            console.log(temp)
            console.log(cities);
        }


    }, []);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setFiltered([]);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="autocomplete-wrapper">
            <label htmlFor="region" className="autocomplete-title title-medium">Region/City</label>

            <input
                className={`autocomplete-input autocomplete-input__regions ${nameInp} `}
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Enter job title"
                id="region"
                name="region"
                autoComplete="off"
            />
            {filtered.length > 0 && (
                <ul className="autocomplete-list" ref={wrapperRef}>
                    {filtered.map(item => (
                        <li key={item} onClick={() => handleSelect(item)} className="autocomplete-item" >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            <ul className="autocomplete-client">
                {cities.map(item => (
                    <li key={item}  className="autocomplete-client-item" >
                        {item}
                        <img onClick={()=>handleRemove(item)} src="../../../public/icons/close.png" className="autocomplete-client-item__img" alt={`remove from your region list ${item}`} loading='lazy' />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AutoComplete;
