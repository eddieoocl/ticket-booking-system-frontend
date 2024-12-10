import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//todo personal_information props type is not defined
const PersonalInformationPage: React.FC = (props) => {
    const { personal_information, setPersonalInformation } = props;
    return (
        <div className="personal-info-container">
            <h2>Personal Information</h2>
            <div className="table-responsive">
                <table className="table table-dark">
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
                <button className="side-button" onClick={() => window.location.href = "/information"}>edit</button>
            </div>
        </div>
    );
};
export default PersonalInformationPage;