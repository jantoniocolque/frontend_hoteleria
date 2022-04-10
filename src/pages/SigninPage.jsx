import React from "react";
import FormRegister from "../components/FormRegister";
export default class SigninPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <React.StrictMode>
                <div className="wrapper">
                    <div className="container">
                        <FormRegister submitForm={this.props.submitForm} />
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}

export { SigninPage };
