import { useState } from "react";
import { LoginDetails } from "./components/LoginDetails";
import { AddressDetails } from "./components/AddressDetails";

import { UserDetails } from "./components/UserDetails";
import { FamilyDetails } from "./components/FamilyDetails";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "male",
  color: "",
  martialStatus: "happy",
  wife: "",
  children: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [userData, setUserData] = useState(INITIAL_DATA);
  const [step, setStep] = useState(1);
  //Accordion
  const [parentAccordion, setParentAccordion] = useState(false);
  const [userDetailsAccordion, setUserDetailsAccordion] = useState(false);
  const [addressDetailsAccordion, setAddressDetailsAccordion] = useState(false);
  const [familyDetailsAccordion, setFamilyDetailsAccordion] = useState(false);
  const [loginDetailsAccordion, setLoginDetailsAccordion] = useState(false);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value.trim() });
  };

  const dataSubmitted = () => {
    console.log(userData, "userData");
    setParentAccordion(true);
  };

  const Form = () => {
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={nextStep}
            previousStep={previousStep}
            userData={userData}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <AddressDetails
            nextStep={nextStep}
            previousStep={previousStep}
            userData={userData}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <FamilyDetails
            nextStep={nextStep}
            previousStep={previousStep}
            userData={userData}
            handleChange={handleChange}
          />
        );
      case 4:
        return (
          <LoginDetails
            dataSubmitted={dataSubmitted}
            previousStep={previousStep}
            userData={userData}
            handleChange={handleChange}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {Form()}
      </div>
      <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
        {parentAccordion ? (
          <div>
            <div
              onClick={() => setUserDetailsAccordion(!userDetailsAccordion)}
              style={{
                border: "1px solid red",
                width: "200px",
                margin: "20px",
              }}
            >
              UserDetails {userDetailsAccordion ? " + " : "- "}
            </div>
            <>
              {userDetailsAccordion ? (
                <div>
                  FirstName : {userData.firstName}
                  <br />
                  LastName : {userData.lastName}
                  <br />
                  Age:{userData.age}
                  <br />
                  Gender:{userData.gender}
                  <br />
                  Color:{userData.color}
                </div>
              ) : null}
            </>
            <div
              onClick={() =>
                setAddressDetailsAccordion(!addressDetailsAccordion)
              }
              style={{
                border: "1px solid red",
                width: "200px",
                margin: "20px",
              }}
            >
              Address Details {addressDetailsAccordion ? "+" : "-"}
            </div>
            <>
              {addressDetailsAccordion ? (
                <div>
                  Street : {userData.street}
                  <br />
                  City : {userData.city}
                  <br />
                  State:{userData.state}
                  <br />
                  Zip:{userData.zip}
                </div>
              ) : null}
            </>
            <div
              onClick={() => setFamilyDetailsAccordion(!familyDetailsAccordion)}
              style={{
                border: "1px solid red",
                width: "200px",
                margin: "20px",
              }}
            >
              Family Details {familyDetailsAccordion ? "+" : "-"}
            </div>
            <>
              {familyDetailsAccordion ? (
                <div>
                  Martial Status : {userData.martialStatus}
                  <br />
                  Children : {userData.children}
                  <br />
                  Wife:{userData.wife}
                </div>
              ) : null}
            </>
            <div
              onClick={() => setLoginDetailsAccordion(!loginDetailsAccordion)}
              style={{
                border: "1px solid red",
                width: "200px",
                margin: "20px",
              }}
            >
              Login Details {loginDetailsAccordion ? "+" : "-"}
            </div>
            <>
              {loginDetailsAccordion ? (
                <div>
                  Email : {userData.email}
                  <br />
                  Password : {userData.password}
                </div>
              ) : null}
            </>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
