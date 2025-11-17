import React from 'react';

type Props = {
    titleJob: string | undefined;
}

const JobsList:React.FC<Props> = ({titleJob}) => {
    return (
        <div className={"job"}>
            {/*todo count of vacation found*/}
            <h2 className="job-title">found {10} vacation "{titleJob}"</h2>

            {/* some filters*/}
            {/* items vacations   */}
            {/*  pages  */}

        </div>
    );
};

export default JobsList;
