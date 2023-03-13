import { FormWrapper } from "../Wrapper/FormWrapper";

export function UserDetails({
  firstName,
  lastName,
  age,
  updateFields,
  gender,
  color,
}) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        pattern="^[a-zA-Z]+$"
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
      <label>Gender</label>
      <div style={{ display: "flex" }}>
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => updateFields({ gender: e.target.value })}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => updateFields({ gender: e.target.value })}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="other"
            checked={gender === "other"}
            onChange={(e) => updateFields({ gender: e.target.value })}
          />
          Other
        </label>
      </div>

      {/* /////Color */}
      <label htmlFor="color-select">Select a color: </label>
      <select
        id="color-select"
        onChange={(e) => updateFields({ color: e.target.value })}
        value={color}
        required
      >
        <option value="">Choose a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </FormWrapper>
  );
}
