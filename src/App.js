import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="heart" />
      </main>
      <footer className="text-center">
        Open-sourced{" "}
        <a
          href="https://github.com/Taniatos/dictionary.git"
          target="_blank"
          rel="noreferrer"
        >
          code
        </a>{" "}
        by Tetiana Korchynska
      </footer>
    </div>
  );
}
