export function AddressDetails({
  nextStep,
  previousStep,
  userData,
  handleChange,
}) {
  const submitHandler = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
    >
      <h1>AddressDetails</h1>
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={userData.street}
        name="street"
        onChange={handleChange}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={userData.city}
        name="city"
        onChange={handleChange}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={userData.state}
        name="state"
        onChange={handleChange}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        value={userData.zip}
        name="zip"
        onChange={handleChange}
      />
      <div style={{ display: "flex" }}>
        <button
          type="button"
          onClick={() => previousStep()}
          style={{ width: "100px", margin: "20px" }}
        >
          Previous
        </button>
        <button type="submit" style={{ width: "100px", margin: "20px" }}>
          Next
        </button>
      </div>
    </form>
  );
}
