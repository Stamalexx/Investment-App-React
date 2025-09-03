import "../index.css";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

const result_content = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Invested Capital",
];

export default function Result({
  initialInvestment,
  expectedReturn,
  annualInvestment,
  duration,
}) {
  const data = calculateInvestmentResults({
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration,
  });

  return (
    <section id="result">
      <div id="resultlist">
        <ul>
          {result_content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {data.map((entry) => (
          <ul key={entry.year}>
            <li>{entry.year}</li>
            <li>{formatter.format(entry.valueEndOfYear)}</li>
            <li>{formatter.format(entry.interest)}</li>
            <li>{formatter.format(entry.totalIntrest)}</li>
            <li>{formatter.format(entry.investedCapital)}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
