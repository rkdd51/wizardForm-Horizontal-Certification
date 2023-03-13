import { useState } from "react";
import { LoginDetails } from "./components/LoginDetails";
import { AddressDetails } from "./components/AddressDetails";
import { useForm } from "./customHook/useForm";
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
  const [firstAccordion, setFirstAccordion] = useState(false);
  const [secondAccordion, setSecondAccordion] = useState(false);
  const [thirdAccordion, setThirdAccordion] = useState(false);
  const [fourthAccordion, setFourthAccordion] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useForm([
      <UserDetails {...data} updateFields={updateFields} />,
      <FamilyDetails {...data} updateFields={updateFields} />,
      <LoginDetails {...data} updateFields={updateFields} />,
      <AddressDetails {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    setToggle(true);
    console.log(data);
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          width: "50%",
        }}
      >
        <form onSubmit={onSubmit}>
          <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
          </div>
        </form>

        {/* Second Menu */}
      </div>
      {toggle ? (
        <div
          style={{
            backgroundColor: "#D3D3D3",
            width: "50%",
            padding: "2rem",
            margin: "1rem",
            borderRadius: ".5rem",
          }}
        >
          {/* First */}
          <div
            style={{
              width: "40%",
              backgroundColor: "white",
              paddingLeft: "8rem",
              cursor: "pointer",
            }}
            onClick={() => setFirstAccordion(!firstAccordion)}
          >
            <h2> User Details {firstAccordion ? "-" : "+"}</h2>
          </div>
          {firstAccordion ? (
            <>
              <h4> First Name : {data.firstName}</h4>
              <h5> Last Name :{data.lastName}</h5>
              <h5>Age: {data.age}</h5>
              <h5>Age: {data.gender}</h5>
              <h5>Age: {data.color}</h5>
            </>
          ) : null}
          {/* Second */}
          <div
            style={{
              width: "40%",
              backgroundColor: "white",
              paddingLeft: "8rem",
              cursor: "pointer",
            }}
            onClick={() => setSecondAccordion(!secondAccordion)}
          >
            <h2> Address Details {secondAccordion ? "-" : "+"}</h2>
          </div>
          {secondAccordion ? (
            <>
              <h4> Street : {data.street}</h4>
              <h5> City :{data.city}</h5>
              <h5>State: {data.state}</h5>
              <h5>Zip: {data.zip}</h5>
            </>
          ) : null}
          {/* Third */}
          <div
            style={{
              width: "40%",
              backgroundColor: "white",
              paddingLeft: "8rem",
              cursor: "pointer",
            }}
            onClick={() => setThirdAccordion(!thirdAccordion)}
          >
            <h2> Account Details {thirdAccordion ? "-" : "+"}</h2>
          </div>
          {thirdAccordion ? (
            <>
              <h4> Email : {data.email}</h4>
              <h5> Password :{data.password}</h5>
            </>
          ) : null}
          {/* Family */}
          <div
            style={{
              width: "40%",
              backgroundColor: "white",
              paddingLeft: "8rem",
              cursor: "pointer",
            }}
            onClick={() => setFourthAccordion(!fourthAccordion)}
          >
            <h2> Family Details {fourthAccordion ? "-" : "+"}</h2>
          </div>
          {fourthAccordion ? (
            <>
              <h4> Martial Status : {data.martialStatus}</h4>
              {data?.wife ? <h5> Wife :{data.wife} </h5> : null}
              {data?.children ? <h5> Child :{data.children} </h5> : null}
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default App;
