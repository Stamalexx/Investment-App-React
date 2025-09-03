import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  //state up
  const [initialInvestment, setInitialInvestment] = useState(12000);
  const [annualInvestment, setAnnualInvestment] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(5);
  const [duration, setDuration] = useState(10);

  return (
    <>
      <Header />
      <main>
        <section id="userinputs">
          <UserInput
            initialInvestment={initialInvestment}
            setInitialInvestment={setInitialInvestment}
            annualInvestment={annualInvestment}
            setAnnualInvestment={setAnnualInvestment}
            expectedReturn={expectedReturn}
            setExpectedReturn={setExpectedReturn}
            duration={duration}
            setDuration={setDuration}
          />
        </section>
        <section id="results">
          <Results
            initialInvestment={initialInvestment}
            annualInvestment={annualInvestment}
            expectedReturn={expectedReturn}
            duration={duration}
          />
        </section>
      </main>
    </>
  );
}

export default App;
