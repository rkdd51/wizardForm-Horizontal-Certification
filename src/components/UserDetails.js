export function UserDetails({ nextStep, userData, handleChange }) {
  const submitHandler = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
    >
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={userData.firstName}
        pattern="^[a-zA-Z]+$"
        name="firstName"
        onChange={handleChange}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={userData.lastName}
        name="lastName"
        onChange={handleChange}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={userData.age}
        name="age"
        onChange={handleChange}
      />
      <label>Gender</label>
      <div style={{ display: "flex" }}>
        <label>
          <input
            type="radio"
            value="male"
            checked={userData.gender === "male"}
            name="gender"
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={userData.gender === "female"}
            name="gender"
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="other"
            checked={userData.gender === "other"}
            name="gender"
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      {/* /////Color */}
      <label htmlFor="color-select">Select a color: </label>
      <select
        id="color-select"
        value={userData.color}
        required
        name="color"
        onChange={handleChange}
      >
        <option value="">Choose a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button type="submit" style={{ width: "100px", marginTop: "20px" }}>
          Next
        </button>
      </div>
    </form>
  );
}
