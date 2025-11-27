import "./EditRequest.css";
import {useLocation} from "react-router-dom";
const EditRequest = () => {
    const location = useLocation();
    const job = location.state?.job;


    // todo all selects write by map maybe
    return (
        <div className="wrapper-request">
            <form className="request-form" action="#">
                <h2 className="request-form__title">Find vacation</h2>
                <label className="request-form__title-job title-medium" htmlFor="title-job">words which need to find</label>
                {/*ref ???*/}
                <input className="input-edit" type="text" placeholder="title of vacation" id="title-job" defaultValue={job} name="title-job" required/>

                <label htmlFor="region" className="request-form-region__title title-medium">Region/City</label>
                <select name="region" id="region" className="request-form-region edit-select">
                    {/*todo map and can in input choose and write*/}
                    <option className=" edit-select" value="default" disabled selected>all of israel</option>
                    <option className="request-form-select__option edit-select" value="haifa">Haifa</option>
                    <option className="request-form-select__option edit-select" value="tel-aviv">Tel-Aviv</option>
                    <option className="request-form-select__option edit-select" value="ako">Ako</option>
                </select>

                <label htmlFor="salary" className="request-form-salary title-medium">Salary</label>
                <input className="request-form-salary__inp input-edit" type="number" min={0} max={999999} placeholder="salary" id="salary" name="salary"/>

                <div className="request-form-wrapper">
                    <h3 className="request-form-frequency__title title-medium">Payout frequency</h3>
                    <label className="request-form-frequency">
                        <input type="radio" className="request-form-frequency__inp edit-radio" name="frequency"  value="day"/>Day
                    </label>
                    <label className="request-form-frequency">
                        <input type="radio" className="request-form-frequency__inp edit-radio" name="frequency"  value="week"/>Week
                    </label>
                    <label className="request-form-frequency">
                        <input type="radio" className="request-form-frequency__inp edit-radio" name="frequency"  value="month"/>Month
                    </label>
                    <label className="request-form-frequency">
                        <input type="radio" className="request-form-frequency__inp edit-radio" name="frequency"  value="forWork"/>For Work
                    </label>
                </div>

            {/*<label htmlFor="frequency" className="label-edit">Payout frequency</label>*/}
            {/*<select name="frequency" id="frequency" className="request-form-frequency edit-select">*/}
                {/*    <option className="edit-select" value="default" disabled selected>none</option>*/}
                {/*    <option className="request-form-frequency__option edit-select" value="day">Day</option>*/}
                {/*    <option className="request-form-frequency__option edit-select" value="week">Week</option>*/}
                {/*    <option className="request-form-frequency__option edit-select" value="month">Month</option>*/}
                {/*    <option className="request-form-frequency__option edit-select" value="forWork">For Work</option>*/}
                {/*</select>*/}

                <label htmlFor="experience">Required work experience</label>
                <select name="experience" id="experience" className="request-form-experience edit-select">
                    <option className="edit-select" value="default" disabled selected>dont care</option>
                    <option className="request-form-experience__option edit-select" value="notExperience">Not
                        Experience
                    </option>
                    <option className="request-form-experience__option edit-select" value="year1Toyear3">from 1 year to
                        3 years
                    </option>
                    <option className="request-form-experience__option edit-select" value="year3Toyear6">from 3 year to
                        6 years
                    </option>
                    <option className="request-form-experience__option edit-select" value="more6year">more 6 years
                    </option>
                </select>

                <label htmlFor="employment">Employment type</label>
                <select name="employment" id="employment" className="request-form-employee edit-select">
                    <option className="edit-select" value="default" disabled selected>none</option>
                </select>
            </form>
        </div>
    );
};

export default EditRequest;
