import logo from "./assets/logo-gray.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NlW Expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>
      <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">há 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            laboriosam hic, voluptatibus minima doloremque vero libero fugit in.
            Expedita unde sunt magnam delectus nulla nam necessitatibus neque
            quisquam porro ab!
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>
        <NoteCard />
      </div>
    </div>
  );
}
