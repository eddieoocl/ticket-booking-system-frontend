"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ConfirmOrderPage.css";
import data from "../mockdata/data.json";
import Commodity from "@/app/components/Commodity";
import PersonalInformationPage from "@/app/components/PersonalInformationPage";

const ConfirmOrderPage: React.FC = () => {
    const [Information, setInformation] = useState();
    const { personal_information, tickets, add_ons } = data;
    return (
        <div className="confirm-order-page">
            <PersonalInformationPage personal_information={personal_information} />
            <div className="commodity-container">
            {tickets.map((ticket) => (
                <Commodity key={ticket.id} commodity={ticket} />
            ))}
            </div>
            <div className="commodity-container">
            {add_ons.map((add_on) => (
                <Commodity key={add_on.id} commodity={add_on} />
            ))}
            </div>
        </div>
    );
};

export default ConfirmOrderPage;