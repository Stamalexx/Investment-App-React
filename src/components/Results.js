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
      </div>
      <div id="resultlistnumbers">
        {data.map((entry) => (
          <ul key={entry.year}>
            <ul>{entry.year}</ul>
            <ul>{formatter.format(entry.valueEndOfYear)}</ul>
            <ul>{formatter.format(entry.interest)}</ul>
            <ul>{formatter.format(entry.totalIntrest)}</ul>
            <ul>{formatter.format(entry.investedCapital)}</ul>
          </ul>
        ))}
      </div>
    </section>
  );
}
