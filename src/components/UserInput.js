export default function UserInput({
  initialInvestment,
  setInitialInvestment,
  annualInvestment,
  setAnnualInvestment,
  expectedReturn,
  setExpectedReturn,
  duration,
  setDuration,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            value={annualInvestment}
            onChange={(e) => setAnnualInvestment(Number(e.target.value))}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </p>
      </div>
    </section>
  );
}
