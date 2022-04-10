import SuccessfulMessage from "../components/SuccessfulMessage/SuccessfulMessage";


export default function SuccessfulMessagePage ({message, button}){
    return (
        <>
            <div className="wrapper">
                <div className="container-successful-message">
                    <SuccessfulMessage message={message} button={button}/>
                </div>
            </div>
        </>
    )
}