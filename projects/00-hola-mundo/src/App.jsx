import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const C4lumny = { userName: "C4lumny", name: "Nathan Ospino Hernández" };
  const midudev = { userName: "midudev", name: "Miguel Angel Durán" };
  const freefirelatino = { userName: "castrodiegoa", name: "Diego Castro" };

  return (
    <section className="App">
      <TwitterFollowCard {...C4lumny} />
      <TwitterFollowCard {...midudev} />
      <TwitterFollowCard {...freefirelatino} />
    </section>
  );
}
