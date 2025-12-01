import React from 'react';
import {RequestParaments} from "../../utils/types.ts";

type Props = {
    titleJob: string | undefined;
    paraments : RequestParaments
}

const JobsList:React.FC<Props> = ({titleJob,paraments}) => {
    return (
        <div className={"job"}>
            {/*todo count of vacation found*/}
            <h2 className="job-title">found {10} vacation "{titleJob}" </h2>

            {/* some filters*/}
            {/* items vacations   */}
            {/*  pages  */}

        </div>
    );
};

export default JobsList;
