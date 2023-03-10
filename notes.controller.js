const fs = require("fs/promises");
const { dirname } = require("path");
const path = require("path");
const chalk = require("chalk");

const notesPath = path.join(__dirname, "db.json");

async function addNote(title) {
  const notes = await getNotes();
  const note = {
    title,
    id: Date.now().toString(),
  };
  notes.push(note);
  await fs.writeFile(notesPath, JSON.stringify(notes));
  console.log(chalk.bgGreen("We added notes"));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function removeNote(id) {
  const notes = await getNotes();
  let noteIndex = notes.findIndex((note) => note.id === id);
  notes.splice(noteIndex, 1);
  await fs.writeFile(notesPath, JSON.stringify(notes));
  console.log(chalk.bgGreen("We removed note by this id:", id));
}

async function printNotes() {
  const notes = await getNotes();
  console.log(chalk.bgBlue("The list of notes"));
  notes.forEach((note) => {
    console.log(chalk.blue(note.id, note.title));
  });
}

module.exports = {
  addNote,
  printNotes,
  removeNote,
};
