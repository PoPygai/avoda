import "./Main.css";
import {FormEvent, useEffect, useRef, useState} from "react";
import JobsList from "./JobsList.tsx";
import {useNavigate} from "react-router-dom";
import AsideJobList from "./AsideJobList.tsx";
import {MAX_TITLE, MIN_TITLE} from "../../config/constants.ts";
import {useAppDispatch, useAppSelector} from "../../state/hooks.ts";
import {requestParamentsSlice} from "../../state/slices/RequestParamentsSlice.ts";



const Main = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const navigate = useNavigate();
    const refTitleJob = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();
    const paraments = useAppSelector(state => state.requestParaments);
    const {setFieldParaments} = requestParamentsSlice.actions

    useEffect(() => {
        if(paraments.title){
            setVisible(true);
            console.log(paraments)
        }

    },[])


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const value = refTitleJob.current?.value.trim();
        if(value)
            dispatch(setFieldParaments({field:"title",value}))
        setVisible(true);
    }

    function goToEditRequest() {
        // TODO УЯЗИМОСТИ ТУТ МОГУТ БЫТЬ
        const value = refTitleJob.current?.value.trim();
        if(value)
            dispatch(setFieldParaments({field:"title",value}))
        navigate("/edit-request");
    }

    //todo if change value i need to repeat request to db with new params
    // useEffect(()=>{})

    return (
        <div className="main">
            <form className="main-form"  action="#" onSubmit={(event) => handleSubmit(event)}>
                <h2 className="form-title " >What kind of job do you want to find?</h2>
                <input ref={refTitleJob} className="form-inp input-big" name="job"  type="search" placeholder="Enter Job do you want to find?" required minLength={MIN_TITLE} maxLength={MAX_TITLE} />
                <button className="form-button" onClick={goToEditRequest} type="button"><img className="form-img" src="public/icons/settingsRequire.png" alt="settings of vacation"/></button>
                <button  className="form-btn btn" type="submit" >Find</button>
            </form>
            {visible &&
                <div className={"main-wrapper"}>

                    <AsideJobList />
                    <JobsList  />
                </div>
            }

        </div>
    );
};

export default Main;
