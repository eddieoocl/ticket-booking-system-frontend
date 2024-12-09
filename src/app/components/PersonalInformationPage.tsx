import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/PersonalInfomationPage.css";

const PersonalInformationPage: React.FC = ({ personal_information }) => {
    return (
        <div className="personal-info-container">
            <h2>Personal Information</h2>
            <table className="table table-responsive table-striped">
                <thead>
                <tr>
                    <th>Moviegoer</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {personal_information.map((information, index) => (
                    <tr key={index}>
                        <td>{information.first_name} {information.last_name}</td>
                        <td>{information.phone}</td>
                        <td>{information.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default PersonalInformationPage;