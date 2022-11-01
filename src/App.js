import "./styles.css";
import useDate from "./useDate";

export default function App() {
  const date = useDate("2022-09-24");
  const date1 = useDate("2022-09-04");
  const date2 = useDate("2022-09-14");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>The date right now is: {date}</h2>
    </div>
  );
}
