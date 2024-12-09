import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/PersonalInfomationPage.css";

const PersonalInformationPage: React.FC = (props) => {
    const { personal_information } = props;
    const { first_name, last_name, email, phone } = personal_information;
    return (
        <div className="personal-info-container">
            <h1>Your Personal Information</h1>
            <p>Name: {first_name} {last_name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default PersonalInformationPage;