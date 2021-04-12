const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
    constructor() { this.ph = 0;
    }
    read() {
        return readFileAsync("db/db.json", "utf8");
    }
    write(note) {
        return writeFileAsync("db/db.json", json.stringify(note))
    }
    getNotes() {
        console.log("get notes")
        return this.read().then(notes => {
            console.log(notes)
            let notesArray;
            try {
                notesArray = [].concat(json.parse(notes));
            }
            catch (err) {
                notesArray = [];
            }
            return notesArray;
        })
    }
    addNotes(note) {
        console.log("add notes");
        const { title, text } = note;
        const newNote = { title, text, id: ++this.ph }
        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updateNotes => this.write(updateNotes))
        .then(() => newNote)
    }
    removeNote(id) {
        console.log("remove notes");
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== parseInt(id)))
        .then(updateNotes => this.write(updateNotes))
    }
}

module.exports = new Notes();