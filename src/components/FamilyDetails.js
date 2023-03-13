import { FormWrapper } from "../Wrapper/FormWrapper";

export function FamilyDetails({ martialStatus, children, wife, updateFields }) {
  return (
    <FormWrapper title="Family Details ">
      <label>Martial Status</label>
      <div style={{ display: "flex" }}>
        <label>
          <input
            type="radio"
            value="married"
            checked={martialStatus === "married"}
            onChange={(e) => updateFields({ martialStatus: e.target.value })}
          />
          Married
        </label>
        <label>
          <input
            type="radio"
            value="happy"
            checked={martialStatus === "happy"}
            onChange={(e) => updateFields({ martialStatus: e.target.value })}
          />
          Happy
        </label>
      </div>
      {martialStatus === "married" ? (
        <>
          {" "}
          <label>Child Name</label>
          <input
            required
            type="text"
            value={children}
            onChange={(e) => updateFields({ children: e.target.value })}
          />
          <label>Wife Name</label>
          <input
            required
            min={1}
            type="text"
            value={wife}
            onChange={(e) => updateFields({ wife: e.target.value })}
          />
        </>
      ) : null}
    </FormWrapper>
  );
}
