import "./EditRequest.css";
import { useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";
import {employmentValues, experienceValues, frequencyValues, regionsValues} from "../../utils/tools.ts";
import {useAppDispatch, useAppSelector} from "../../state/hooks.ts";
import {requestParamentsSlice} from "../../state/slices/RequestParamentsSlice.ts";
import {RequestParaments} from "../../utils/types.ts";
const EditRequest = () => {
    // todo make normal arrayCities
    // TODO УЯЗИМОСТИ ТУТ МОГУТ БЫТЬ
    //==================================
    const [text, setText] = useState("");
    const [filtered, setFiltered] = useState<string[]>([]);
    //==============================
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {title,region,salary,employmentType,experience,payoutFrequency} = useAppSelector(state => state.requestParaments);
    const {setAllParaments,setFieldParaments} = requestParamentsSlice.actions
    //==================================


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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


    function handleSelect(value: string) {
        setText(value);
        setFiltered([]);
    }


    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const title = (form.elements.namedItem("title-job") as HTMLInputElement).value;
        //todo  will change to string[]
        const region = (form.elements.namedItem("region") as HTMLInputElement).value;
        const salary = (form.elements.namedItem("salary") as HTMLInputElement).value;
        const salaryNumber = parseInt(salary) || 0;
        const data = new FormData(event.currentTarget);

        const payoutFrequency = data.getAll("frequency").map(v => v.toString());
        const experience = data.getAll("experience").map(v => v.toString());
        const employmentType = data.getAll("employment").map(v => v.toString());


        dispatch(setAllParaments({title,region,salary : salaryNumber,employmentType,experience,payoutFrequency}))

        navigate("/")
    }


    function handleChangeArray(e: React.ChangeEvent<HTMLInputElement>, array: string[],value:string,field:keyof RequestParaments) {
        const checked = e.target.checked;

        if (checked) {
            if (!array.includes(value)) {
                dispatch(setFieldParaments({field, value: [...array, value]}));
            }
        } else {
            dispatch(setFieldParaments({ field, value: array.filter(el => el !== value) }));
        }
    }

    return (
        <div className="wrapper-request">
            <form className="request-form" action="#" onSubmit={(event)=>handleSubmit(event)}>
                <h2 className="request-form__title">Find vacation</h2>

                <label className="request-form__title-job title-medium" htmlFor="title-job">Words which need to find</label>
                <input className="input-edit input-big" type="text" placeholder="title of vacation" id="title-job" defaultValue={title} name="title-job" required/>
                <br/>


                <div className="autocomplete-wrapper">
                    <label htmlFor="region" className="request-form-region__title title-medium">Region/City</label>

                    <input
                        className="input-edit input-big t"
                        type="text"
                        value={text}
                        onChange={handleChange}
                        placeholder="Enter job title"
                        id="region"
                        name="region"
                    />
                    {filtered.length > 0 && (
                        <ul className="autocomplete-list">
                            {filtered.map(item => (
                                <li key={item} onClick={() => handleSelect(item)} className="autocomplete-item" >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>


                <br/>

                <label htmlFor="salary" className="request-form-salary title-medium">Salary</label>
                <input className="request-form-salary__inp input-edit input-big" type="text" defaultValue={salary}  min={0} max={999999} placeholder="salary" id="salary" name="salary"/>

                <div className="request-form-wrapper">
                    <h3 className="request-form-frequency__title title-medium">Payout frequency</h3>
                    <div className="request-container">
                        {
                            frequencyValues.map((value)=>
                                <label className="request-form-frequency request-form-label" key={value.value}>
                                    <input type="checkbox" className="request-form-frequency__inp " name="frequency"
                                           onChange={(e)=>handleChangeArray(e,payoutFrequency,value.value,"payoutFrequency")}
                                           value={value.value}  checked={payoutFrequency.includes(value.value) } />{value.title}
                                </label>
                            )
                        }
                    </div>
                </div>
                <div className="request-form-wrapper">
                    <h3 className="request-form-experience__title title-medium">Required work experience</h3>
                    <div className="request-container">
                        {
                            experienceValues.map((value)=>
                                <label className="request-form-experience request-form-label" key={value.value}>
                                    <input type="checkbox" className="request-form-experience__inp " name="experience"
                                           onChange={(e)=>handleChangeArray(e,experience,value.value,"experience")}
                                           value={value.value} checked={experience.includes(value.value)}/>{value.title}
                                </label>
                            )
                        }

                    </div>
                </div>

                <div className="request-form-wrapper">
                    <h3 className="request-form-employment__title title-medium">Employment type</h3>
                    <div className="request-container">
                        {
                            employmentValues.map((value)=>
                                <label className="request-form-employment request-form-label" key={value.value}>
                                    <input type="checkbox" className="request-form-employment__inp edit-checkbox" name="employment" onChange={(e)=>handleChangeArray(e,employmentType,value.value,"employmentType")}   value={value.value}  checked={employmentType.includes(value.value)}/>{value.title}
                                </label>
                            )
                        }
                    </div>
                </div>

                <button className="request-form__btn" type="submit">Find!</button>
            </form>
        </div>
    );
}
export default EditRequest;
