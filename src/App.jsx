import CounterSet from "./components/CounterSet";
import InteractiveApp from "./components/InteractiveApp";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>React App: Liczniki i Interakcje</h1>

      {/* liczniki */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Zadanie 1: Liczniki</h2>
        <CounterSet />
      </section>

      {/* komponenty*/}
      <section>
        <h2>Zadanie 2: Interakcje użytkownika</h2>
        <InteractiveApp />
      </section>
    </div>
  );
}
