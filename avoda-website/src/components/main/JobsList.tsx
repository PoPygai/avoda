import {useAppSelector} from "../../state/hooks.ts";


const JobsList= () => {

    const {title} = useAppSelector(state => state.requestParaments);

    return (
        <div className={"job"}>
            {/*todo count of vacation found*/}
            <h2 className="job-title">found {10} vacation "{title}" </h2>

            {/* some filters*/}
            {/* items vacations   */}
            {/*  pages  */}

        </div>
    );
};

export default JobsList;
