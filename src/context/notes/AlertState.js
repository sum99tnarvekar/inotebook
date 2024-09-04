import React, { useState} from "react";
import AlertContext from "../AlertContext";

const AlertState = (props) => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    // Manages the state (showAlert) to ensure the alert is hidden after a fixed duration.
    const triggerAlert = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setShowAlert(false);
        }, 3000);
    };

    return (
        <AlertContext.Provider value={{ showAlert , triggerAlert , alertMessage }}>
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;
