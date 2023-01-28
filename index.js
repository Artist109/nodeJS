const yargs = require("yargs");
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
    console.log("Print Note title");
  },
});

yargs.command({
  command: "list",
  describe: "All notes",
  handler() {
    console.log("Print all notes");
  },
});

yargs.parse();
