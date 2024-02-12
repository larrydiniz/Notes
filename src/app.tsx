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
        <NoteCard
          note={{
            date: new Date(),
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, suscipit? Sunt facere fuga dicta quod aspernatur ipsam perspiciatis alias ullam fugiat odio! Molestiae perspiciatis tempore corrupti! Vitae saepe voluptas quae.",
          }}
        />
        <NoteCard
          note={{ date: new Date("2023-12-25"), content: "Hello Word" }}
        />
        <NoteCard note={{ date: new Date("2023-08-13"), content: "Teste" }} />
        <NoteCard
          note={{
            date: new Date("2023-01-22"),
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, suscipit? Sunt facere fuga dicta quod aspernatur ipsam perspiciatis alias ullam fugiat odio! Molestiae perspiciatis tempore corrupti! Vitae saepe voluptas quae.",
          }}
        />
      </div>
    </div>
  );
}
