// components/AlertWrapper.js
import React, { useContext } from "react";
import AlertContext from "../context/AlertContext";
import Alert from "./Alert";

const AlertWrapper = () => {
    const { alertMessage, showAlert } = useContext(AlertContext);

    // Both timeouts work together to ensure that the alert appears and disappears smoothly,
    // with the AlertContext managing the timing of state changes and the Alert component handling
    // the visual transitions.
    console.log( alertMessage , showAlert );

    return <Alert showAlert={showAlert} message={alertMessage} />;
};

export default AlertWrapper;
