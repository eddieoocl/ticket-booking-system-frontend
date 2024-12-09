"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ConfirmOrderPage.css";
import data from "../mockdata/data.json";
import Commodity from "@/app/components/Commodity";
import PersonalInformationPage from "@/app/components/PersonalInformationPage";
import TotalCount from "@/app/components/TotalCount";
import Ticket from "@/app/components/Ticket";
import AddOn from "@/app/components/AddOn";

const ConfirmOrderPage: React.FC = () => {
    const [tickets, setTickets] = useState(data.tickets);
    const [add_ons, setAddOns] = useState(data.add_ons);

    return (
        <div className="confirm-order-page">
            <PersonalInformationPage personal_information={data.personal_information} />
            <div className="commodity-container">
                {tickets.map((ticket) => (
                    <Ticket key={ticket.id} commodity={ticket} />
                ))}
            </div>
            <div className="commodity-container">
                {add_ons.map((add_on) => (
                    <AddOn key={add_on.id} commodity={add_on} setAddOns={setAddOns} />
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