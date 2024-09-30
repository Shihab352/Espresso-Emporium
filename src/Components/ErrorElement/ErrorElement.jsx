import imgerr from "../../assets/404/404.gif";

const ErrorElement = () => {
    return (
        <div>
            <img className="m-auto rounded-3xl my-10" src={imgerr} alt="" />
        </div>
    );
};

export default ErrorElement;