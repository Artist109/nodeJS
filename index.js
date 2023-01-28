const yargs = require("yargs");
const { addNote, getNotes } = require("./notes.controller");
const pkg = require("./package.json");

yargs.version(pkg.version);

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "All notes",
  async handler() {
    const notes = await getNotes();
    console.log(notes);
  },
});

yargs.parse();
