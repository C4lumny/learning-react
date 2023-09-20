import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing={true} userName="C4lumny" name="Nathan Ospino Hernández" />
      <TwitterFollowCard isFollowing={true}userName="midudev" name="Miguel Angel Durán" />
      <TwitterFollowCard isFollowing={true}userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard isFollowing={true}userName="freefirelatino" name="Garena Free Fire" />
    </section>
  );
}
