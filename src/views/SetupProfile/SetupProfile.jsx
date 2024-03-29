import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { MdArrowBack, MdClose } from "react-icons/md";

import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import { UPDATE_USER_PROFILE } from "../../graphql/mutations";
import { GET_USER } from "../../graphql/queries";

import "react-toggle/style.css"

// import Nav from "../../components/Layout/Nav";
// import Footer from "../../components/Layout/Footer";


const SetupProfile = props => {
    const [ updateUserProfile ] = useMutation(UPDATE_USER_PROFILE);
    const [ , { loading } ] = useLazyQuery(GET_USER);
    const [ profileData, setProfileData ] = useState({
        firstName: "",
        lastName: "",
        // email: props.email ? props.email : "",
        email: "",
        // phone: "",
        address: "",
        aptNumber: "",
        city: "",
        state: "",
        zip: "",
        country: "USA",
    });



    const handleChanges = event => {
        if (event.target.name === 'zip' || event.target.name === 'goalAmount') {
			setProfileData({ ...profileData, [event.target.name]: Number(event.target.value) });
		} else {
			setProfileData({ ...profileData, [event.target.name]: event.target.value });
		}
    };

    const [page, setPageNumber] = useState(1);
    const formBack = () => setPageNumber(1);
    const formForward = () => setPageNumber(2);

    const formSubmit = async event => {
        event.preventDefault();
        const updated = await updateUserProfile({ variables: { data: profileData } });

        if (updated) {
			props.history.push("/dashboard");
		}
    };


    if (loading) return <h1>Loading</h1>
    if (!localStorage.getItem("token")) props.history.push("/");
    // if (data) console.log(data, profileData);
    // console.log(data, profileData);

    return (
        <>

            <section className={`setup-profile-container ${props.destination === "settings" ? "settings-view" : ""}`}>
                <div className="setup-profile-container-card">

                    <div className="setup-profile-interaction-overlay">

                        {page === 2 ? (
                            <MdArrowBack onClick={formBack} />
                        ) : null}

                        {props.destination === "modal" && page === 1 ? (
                            <MdClose onClick={props.toggleForm} />
                        ) : null}

                    </div>

                    {page === 1 || props.destination === "settings" ? (
                        <>
                            <div className="setup-profile-form">
                                <div className="setup-profile-heading-container">
                                    <div className="setup-profile-heading">{props.destination === "settings" ? "Update Info" : "Hello!"}</div>
                                </div>
                                {props.destination === "settings" ? (
                                    <div className="setup-profile-settings-options">
                                        <div className="setting-label">

                                        </div>
                                        <div className="setting-toggle">

                                        </div>
                                    </div>
                                ) : null}
                                <form onSubmit={formForward}>
                                    <input
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        value={profileData.firstName}
                                        onChange={handleChanges}
                                    />
                                    <input
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        value={profileData.lastName}
                                        onChange={handleChanges}
                                    />
                                    <input
                                        name="email"
                                        type="text"
                                        placeholder="Email"
                                        value={profileData.email}
                                        onChange={handleChanges}
                                    />

                                    {props.destination === "settings" ? null : (
                                        <div className="setup-profile-button-container">
                                            <button onClick={formForward}>Next</button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </>
                    ) : null}
                    {page === 2 || props.destination === "settings" ? (
                        <>
                            <div className="setup-profile-form">
                            {props.destination === "settings" ? null : (
                                <div className="setup-profile-heading-container">
                                    <div className="setup-profile-heading">Hi {profileData.firstName ? profileData.firstName : null}</div>
                                    <h3>Where are you from?</h3>
                                </div>
                            )}
                                <form onSubmit={formSubmit}>
                                    <input
                                        name="address"
                                        type="text"
                                        placeholder="Address"
                                        value={profileData.address}
                                        onChange={handleChanges}
                                    />
                                    <input
                                        name="city"
                                        type="text"
                                        placeholder="City"
                                        value={profileData.city}
                                        onChange={handleChanges}
                                    />
                                    <div className="setup-profile-statezip">
                                        <input
                                            name="state"
                                            type="text"
                                            placeholder="State"
                                            value={profileData.state}
                                            onChange={handleChanges}
                                        /> {" "}{' '}{' '}
                                        <input
                                            name="zip"
                                            type="text"
                                            placeholder="Zip"
                                            value={profileData.zip === 0 ? '' : profileData.zip}
                                            step="1"
                                            pattern="\d+"
                                            maxLength="5"
                                            onChange={handleChanges}
                                        />
                                    </div>

                                    <div className="setup-profile-button-container">
                                        <button onClick={formSubmit} className="">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : null}
                </div>
            </section>

        </>
    );
};


export default  withRouter(SetupProfile);
