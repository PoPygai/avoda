import {
    employmentValues,
    experienceValues,
    frequencyValues,
    handleChangeArray,
    regionsValues
} from "../../utils/tools.ts";
import {useAppDispatch, useAppSelector} from "../../state/hooks.ts";




const AsideJobList = () => {
    const dispatch = useAppDispatch();
    const {regions,salary,employmentType,experience,payoutFrequency} = useAppSelector(state => state.requestParaments);

    //todo how change salary ????
    //todo if change value i need to repeat request to db with new params
    // useEffect(()=>{})

    return (
        <aside className="main-sidebar">
            <form action="#" className="main-sidebar__form">
                <div className="main-sidebar__regions main-sidebar__containers">
                    <h4 className="sidebar-regions-title title-medium">Regions</h4>
                {/*    todo     show only 4-5 cities and under will button More... if click we will see all cities  */}
                    {
                        regionsValues.map((city,i) =>
                            <label className="sidebar-regions-label main-sidebar-label"  key={i}>
                                <input type="checkbox" className="sidebar-regions__inp " name="regions"
                                       onChange={(e)=>handleChangeArray(e,regions,city.value,"regions",dispatch)}
                                       value={city.value}
                                       checked={regions.includes(city.value)}
                                           />{city.title}
                            </label>
                        )
                    }
                </div>
                <div className="main-sidebar__frequency main-sidebar__containers">
                    <h4 className="sidebar-frequency-title title-medium">Payout frequency</h4>
                    {
                        frequencyValues.map((value)=>
                        <label className="sidebar-frequency-label main-sidebar-label" key={value.value}>
                            <input type="checkbox" className="sidebar-frequency__inp " name="frequency"
                                   onChange={(e)=>handleChangeArray(e,payoutFrequency,value.value,"payoutFrequency",dispatch)}
                                   value={value.value}  checked={payoutFrequency.includes(value.value) } />{value.title}
                        </label>
                )
                    }
                </div>
                <div className="main-sidebar__experience main-sidebar__containers">
                    <h4 className="sidebar-experience-title title-medium">Experience</h4>
                    {
                        experienceValues.map((value) =>
                                <label className="sidebar-experience-label main-sidebar-label" key={value.value}>
                                    <input type="checkbox" className="sidebar-experience__inp" name="experience"
                                           onChange={(e)=>handleChangeArray(e,experience,value.value,"experience",dispatch)}
                                           value={value.value} checked={experience.includes(value.value)}/>{value.title}
                                </label>
                        )
                    }
                </div>
                <div className="main-sidebar__employment main-sidebar__containers">
                    <h4 className="sidebar-employment-title title-medium">Experience</h4>
                    {
                        employmentValues.map((value) =>
                            <label className="sidebar-employment-label main-sidebar-label" key={value.value}>
                                <input type="checkbox" className="sidebar-employment__inp" name="employment" onChange={(e)=>handleChangeArray(e,employmentType,value.value,"employmentType",dispatch)}   value={value.value}  checked={employmentType.includes(value.value)}/>{value.title}
                            </label>
                        )
                    }
                </div>
            </form>
        </aside>
        );
};

export default AsideJobList;
