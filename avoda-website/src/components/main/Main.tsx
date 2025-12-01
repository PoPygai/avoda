import "./Main.css";
import {FormEvent, useEffect, useRef, useState} from "react";
import JobsList from "./JobsList.tsx";
import {useLocation, useNavigate} from "react-router-dom";

const Main = () => {
    const [titleJob, setTitleJob] = useState<string>();
    const [visible, setVisible] = useState<boolean>(false);
    const navigate = useNavigate();
    const refTitleJob = useRef<HTMLInputElement | null>(null);
    const location = useLocation();


    useEffect(() => {
        if(location.state?.title){
            setTitleJob(location.state.title);
            setVisible(true);
            console.log(location.state);
        }

    },[])


    function handleSumbit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTitleJob(refTitleJob.current?.value);
        setVisible(true);

    }

    function goToEditRequest() {
        const value = refTitleJob.current?.value.trim();

        if (!value) {
            alert("Please enter a title");
            return;
        }

        navigate("/edit-request", {
            state: { job: value}
        });
    }
    return (
        <div className="main">
            <form className="main-form"  action="#" onSubmit={(event) => handleSumbit(event)}>
                <h2 className="form-title " >What kind of job do you want to find?</h2>
                <input ref={refTitleJob} className="form-inp input-big" name="job"  type="search" placeholder="Enter Job do you want to find?" required minLength={3} maxLength={55} />
                <button className="form-button" onClick={goToEditRequest}><img className="form-img" src="public/icons/settingsRequire.png" alt="settings of vacation"/></button>
                <button  className="form-btn btn" type="submit" >Find</button>
            </form>
            {visible &&
                <div className={"main-wrapper"}>
                    <aside className="main-sidebar">

                    </aside>
                    <JobsList titleJob={titleJob} paraments={location.state} />
                </div>
            }

        </div>
    );
};

export default Main;
