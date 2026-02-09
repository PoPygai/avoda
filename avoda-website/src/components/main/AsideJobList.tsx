import {employmentValues, experienceValues, frequencyValues, regionsValues} from "../../utils/tools.ts";




const AsideJobList = () => {
    return (
        <aside className="main-sidebar">
            <form action="#" className="main-sidebar__form">
                <div className="main-sidebar__regions main-sidebar__containers">
                    <h4 className="sidebar-regions-title title-medium">Regions</h4>
                {/*    todo     show only 4-5 cities and under will button More... if click we will see all cities  */}
                    {
                        regionsValues.map((city,i) =>
                            <label className="sidebar-regions-label main-sidebar-label"  key={i}>
                                <input type="checkbox" className="sidebar-regions__inp " name="regions"  value={city.value}/>{city.title}
                            </label>
                        )
                    }
                </div>
                <div className="main-sidebar__frequency main-sidebar__containers">
                    <h4 className="sidebar-frequency-title title-medium">Payout frequency</h4>
                    {
                        frequencyValues.map((value,i) =>
                            <label className="sidebar-frequency-label main-sidebar-label" key={i}>
                                <input type="checkbox" className="sidebar-frequency__inp " name="frequency"  value={value.value}/>{value.title}
                            </label>
                        )
                    }
                </div>
                <div className="main-sidebar__experience main-sidebar__containers">
                    <h4 className="sidebar-experience-title title-medium">Experience</h4>
                    {
                        experienceValues.map((value,i) =>
                        <label className="sidebar-experience-label main-sidebar-label" key={i}>
                            <input type="checkbox" className="sidebar-experience__inp " name="experience"  value={value.value}/>{value.title}
                        </label>
                        )
                    }
                </div>
                <div className="main-sidebar__employment main-sidebar__containers">
                    <h4 className="sidebar-employment-title title-medium">Experience</h4>
                    {
                        employmentValues.map((value,i) =>
                            <label className="sidebar-employment-label main-sidebar-label" key={i}>
                                <input type="checkbox" className="sidebar-employment__inp " name="employment"  value={value.value}/>{value.title}
                            </label>
                        )
                    }
                </div>
            </form>
        </aside>
        );
};

export default AsideJobList;
