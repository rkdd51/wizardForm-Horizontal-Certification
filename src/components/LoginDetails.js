export function LoginDetails({
  previousStep,
  dataSubmitted,
  userData,
  handleChange,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    dataSubmitted();
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
    >
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={userData.email}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        name="email"
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={userData.password}
        name="password"
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
          Submit
        </button>
      </div>
    </form>
  );
}
