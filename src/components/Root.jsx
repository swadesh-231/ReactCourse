import { Route, Routes } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import LearnProps from "../pages/LearnProps";
import LearnUseState from "../pages/LearnUseState";
import LearnUseEffect from "../pages/LearnUseEffect";
import LearnUseRef from "../pages/LearnUseRef";
import Projects from "../pages/Projects";
import Pokedex from "../pages/Pokedex";
import PokemonDetail from "../pages/PokemonDetail";
import Todo from "../pages/Todo";
import TicTacToe from "../pages/TicTacToe";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Root = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 sm:px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn/props" element={<LearnProps />} />
          <Route path="/learn/usestate" element={<LearnUseState />} />
          <Route path="/learn/useeffect" element={<LearnUseEffect />} />
          <Route path="/learn/useref" element={<LearnUseRef />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/pokedex" element={<Pokedex />} />
          <Route path="/projects/pokedex/:name" element={<PokemonDetail />} />
          <Route path="/projects/todo" element={<Todo />} />
          <Route path="/projects/tictactoe" element={<TicTacToe />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default Root;
