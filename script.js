// xây dựng class note
class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

// xây dựng class notelist
class NoteList {
    constructor() {
        this.notes = [];
    }

    setNote(note){
        if(this.note === note){
            console.log('');
        }
    }

    addNoteToList(note) {
        this.notes.push(note);
    }
}

const noteList = new NoteList();
const note1 = new Note("title 1", "content 1");
const note2 = new Note("title 2", "content 2.");
noteList.addNoteToList(note1);
noteList.addNoteToList(note2);

console.log('note1:',note1);
console.log('note2:',note2);
console.log(noteList.notes);