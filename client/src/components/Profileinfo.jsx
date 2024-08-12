import React from "react";

const getInitials = (name) => {
    return name.split(" ").map((word) => word[0]).join("");
};

const Profileinfo = ({ onLogout }) => {
    return (
        <>
            <div className="cameras">
                <h3>
                    {getInitials("John ")}
                </h3>

                <button className="spirit" onClick={onLogout}>
                    LogOut
                </button>
            </div>
        </>
    );
};

export default Profileinfo;
