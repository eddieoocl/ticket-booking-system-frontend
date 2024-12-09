"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ConfirmOrderPage.css";
import data from "../mockdata/data.json";
import Commodity from "@/app/components/Commodity";
import PersonalInformationPage from "@/app/components/PersonalInformationPage";
import TotalCount from "@/app/components/TotalCount";

const ConfirmOrderPage: React.FC = () => {
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
            <TotalCount tickets={tickets} add_ons={add_ons} />
            <div className="button-container">
                <button onClick={() => window.location.href = "/payment"}>Commit</button>
                <button onClick={() => window.location.href = "/ticket"}>Cancel</button>
            </div>
        </div>
    );
};

export default ConfirmOrderPage;