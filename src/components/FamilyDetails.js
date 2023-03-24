export function FamilyDetails({
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
      <label>Martial Status</label>
      <div style={{ display: "flex" }}>
        <label>
          <input
            type="radio"
            value="married"
            checked={userData.martialStatus === "married"}
            name="martialStatus"
            onChange={handleChange}
          />
          Married
        </label>
        <label>
          <input
            type="radio"
            value="happy"
            checked={userData.martialStatus === "happy"}
            name="martialStatus"
            onChange={handleChange}
          />
          Happy
        </label>
      </div>
      {userData.martialStatus === "married" ? (
        <>
          {" "}
          <label>Child Name</label>
          <input
            required
            type="text"
            value={userData.children}
            name="children"
            onChange={handleChange}
          />
          <label>Wife Name</label>
          <input
            required
            min={1}
            type="text"
            value={userData.wife}
            name="wife"
            onChange={handleChange}
          />
        </>
      ) : null}
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
