import "./EditRequest.css";
import {useLocation} from "react-router-dom";
const EditRequest = () => {
    const location = useLocation();
    const job = location.state?.job;

    return (
        <form >
            {job}
        </form>
    );
};

export default EditRequest;
