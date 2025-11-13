import "./Main.css";

const Main = () => {
    // todo   переименовать классы
    return (
        <div className="main">
            <form className="main-form"  action="#">
                <h2 className="form-title" >What kind of job do you want to find?</h2>
                <input className="form-inp"  type="text" placeholder="Enter Job do you want to find?"/>
                <button  className="form-btn btn" type="submit">Find</button>
            </form>

        {/*  вакансии + сбоку настройки  */}

        </div>
    );
};

export default Main;
