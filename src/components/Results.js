import "../index.css";

const result_content = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Invested Capital",
];

export default function Result() {
  return (
    <section id="result">
      <div id="resultlist">
        <ul>
          {result_content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
