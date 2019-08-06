import React from "react";

const NavButton = props => {
    return (
        <label onClick={props.navClick}>
            <svg
                height="32px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 50 50"
                width="32px"
                space="preserve"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
        </label>
    );
};

export default NavButton;
