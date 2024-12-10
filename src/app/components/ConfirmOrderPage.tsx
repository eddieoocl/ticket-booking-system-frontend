"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/styles/ConfirmOrderPage.css";
import data from "../mockdata/data.json";
import PersonalInformationPage from "@/app/components/PersonalInformationPage";
import TotalCount from "@/app/components/TotalCount";
import Ticket from "@/app/components/Ticket";
import AddOn from "@/app/components/AddOn";

//todo set timer
const ConfirmOrderPage: React.FC = () => {
    const [tickets, setTickets] = useState(data.tickets);
    const [add_ons, setAddOns] = useState(data.add_ons);
    const [personal_information, setPersonalInformation] = useState(data.personal_information);

    return (
        <div className="confirm-order-page">
            <div className="commodity-container">
                {tickets.map((ticket) => (
                    <Ticket key={ticket.id} commodity={ticket} />
                ))}
                <div>Ticket Total</div>
                <TotalCount tickets={tickets}></TotalCount>
            </div>
            <div className="commodity-container">
                <div>
                    <button className="side-button" onClick={() => window.location.href = "/ConfirmLoading"}>More Add-Ons
                    </button>
                </div>
                    {add_ons.map((add_on) => (
                        <AddOn key={add_on.id} commodity={add_on} setAddOns={setAddOns} />
                    ))}

                <p>Add-on Total</p>
                <TotalCount add_ons={add_ons}></TotalCount>
            </div>
            <PersonalInformationPage personal_information={personal_information} setPersonalInformation={setPersonalInformation} />
            <TotalCount tickets={tickets} add_ons={add_ons} />

            {/*todo commit call api*/}
            <div className="button-container">
                <button onClick={() => window.location.href = "/payment"}>Commit</button>
                <button onClick={() => window.location.href = "/ticket"}>Return</button>
            </div>
        </div>
    );
};

export default ConfirmOrderPage;