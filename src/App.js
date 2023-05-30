
import './App.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="heart"/>
      </main>
      <footer className="text-center">The app is coded by Tetiana Korchynska and is open-sourced</footer>
    </div>
  );
}


