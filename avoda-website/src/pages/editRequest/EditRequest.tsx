import "./EditRequest.css";
import {useLocation, useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";
import {REGIONS} from "../../utils/tools.ts";
const EditRequest = () => {
    const location = useLocation();
    const job = location.state?.job;
    // todo make normal arrayCities
    const [text, setText] = useState("");
    const [filtered, setFiltered] = useState<string[]>([]);
    const navigate = useNavigate();


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setText(value);
        if (value.trim() === "") {
            setFiltered([]);
            return;
        }
        const result = REGIONS.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );
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
        const data = new FormData(event.currentTarget);

        const payoutFrequency = data.getAll("frequency");
        const experience = data.getAll("experience");
        const employmentType = data.getAll("employment");




        navigate("/", {
            state: {
                title,
                region,
                salary,
                employmentType,
                experience,
                payoutFrequency,
            }
        })
    }




    return (
        <div className="wrapper-request">
            <form className="request-form" action="#" onSubmit={(event)=>handleSubmit(event)}>
                <h2 className="request-form__title">Find vacation</h2>

                <label className="request-form__title-job title-medium" htmlFor="title-job">Words which need to find</label>
                <input className="input-edit input-big" type="text" placeholder="title of vacation" id="title-job" defaultValue={job} name="title-job" required/>
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
                                <li key={item} onClick={() => handleSelect(item)} className="autocomplete-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                );

                <br/>

                <label htmlFor="salary" className="request-form-salary title-medium">Salary</label>
                <input className="request-form-salary__inp input-edit input-big" type="text"  min={0} max={999999} placeholder="salary" id="salary" name="salary"/>

                <div className="request-form-wrapper">
                    <h3 className="request-form-frequency__title title-medium">Payout frequency</h3>
                    <div className="request-container">
                        <label className="request-form-frequency request-form-label">
                            <input type="checkbox" className="request-form-frequency__inp " name="frequency"  value="day"/>Day
                        </label>
                        <label className="request-form-frequency request-form-label">
                            <input type="checkbox" className="request-form-frequency__inp " name="frequency"  value="week"/>Week
                        </label>
                        <label className="request-form-frequency request-form-label">
                            <input type="checkbox" className="request-form-frequency__inp " name="frequency"  value="month"/>Month
                        </label>
                        <label className="request-form-frequency request-form-label">
                            <input type="checkbox" className="request-form-frequency__inp " name="frequency"  value="forWork"/>For Work
                        </label>
                    </div>
                </div>
                <div className="request-form-wrapper">
                    <h3 className="request-form-experience__title title-medium">Required work experience</h3>
                    <div className="request-container">
                        <label className="request-form-experience request-form-label">
                            <input type="radio" className="request-form-experience__inp " name="experience"  value="dontCare"/>Dont Care
                        </label>
                        <label className="request-form-experience request-form-label">
                            <input type="radio" className="request-form-experience__inp " name="experience"  value="notExp"/>Not Experience
                        </label>
                        <label className="request-form-experience request-form-label">
                            <input type="radio" className="request-form-experience__inp " name="experience"  value="f1t3"/>from 1 year to 3 years
                        </label>
                        <label className="request-form-experience request-form-label">
                            <input type="radio" className="request-form-experience__inp " name="experience"  value="f3t6"/>from 3 year to 6 years
                        </label>
                        <label className="request-form-experience request-form-label">
                            <input type="radio" className="request-form-experience__inp " name="experience"  value="more6"/>more 6 years
                        </label>
                    </div>
                </div>

                <div className="request-form-wrapper">
                    <h3 className="request-form-employment__title title-medium">Employment type</h3>
                    <div className="request-container">
                        <label className="request-form-employment request-form-label">
                            <input type="checkbox" className="request-form-employment__inp edit-checkbox" name="employment"  value="fulltime"/>Full-time employment
                        </label>
                        <label className="request-form-employment request-form-label">
                            <input type="checkbox" className="request-form-employment__inp edit-checkbox" name="employment"  value="privateEmp"/>Private employment
                        </label>
                        <label className="request-form-employment request-form-label">
                            <input type="checkbox" className="request-form-employment__inp edit-checkbox" name="employment"  value="partTime"/>Part-time employment
                        </label>
                    </div>
                </div>

                <button className="request-form__btn" type="submit">Find!</button>
            </form>
        </div>
    );
};

export default EditRequest;
