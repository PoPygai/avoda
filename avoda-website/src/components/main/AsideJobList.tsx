import React from "react";
import {RequestParaments} from "../../utils/types.ts";
import {Frequency, REGIONS} from "../../utils/tools.ts";


type Props = {
    paraments : RequestParaments
}

{/*/**/}
{/*region,*/}
{/*salary,*/}
{/*employmentType,*/}
{/*experience,*/}
{/*payoutFrequency,*/}
{/**/}
const AsideJobList:React.FC<Props> = ({paraments}) => {
    return (
        <aside className="main-sidebar">
            <form action="#" className="main-sidebar__form">
                <div className="main-sidebar__regions main-sidebar__containers">
                    <h4 className="regions-title title-medium">Regions</h4>
                {/*    todo     show only 4-5 cities and under will button More... if click we will see all cities  */}
                    {
                        REGIONS.map(city =>
                            <label className="regions-label main-sidebar-label">
                                <input type="checkbox" className="regions__inp " name="regions"  value={city}/>{city}
                            </label>
                        )
                    }
                </div>
                <div className="main-sidebar__frequency main-sidebar__containers">
                    <h4 className="frequency-title title-medium">Payout frequency</h4>
                    {
                        Frequency.map(n =>
                            <label className="frequency-label main-sidebar-label">
                                <input type="checkbox" className="frequency__inp " name="frequency"  value={n}/>{n}
                            </label>
                        )
                    }


                </div>
            </form>
        </aside>
        );
};

export default AsideJobList;
