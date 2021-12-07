const fs = require("fs")

const fetchNotes = ()=>{
    try{
        return JSON.parse(fs.readFileSync("notes.txt"))
    }catch(err){
        return[]
    }
}

const addingNote = (id,title,body)=>{
  var notes = fetchNotes()
    var note = {
            id,
            title,
            body
    }
    notes.push(note)
    fs.writeFileSync("notes.txt", JSON.stringify(notes))
    logNote(note)
}

const removeNote = (id)=>{
    var notes = fetchNotes()
    var filterNotes = notes.filter((note)=>note.id !==id);
    fs.writeFileSync("notes.txt", JSON.stringify(filterNotes))
}

const readNote = (id)=>{
    var notes = fetchNotes()
    var filterNotes = notes.filter((note)=>note.id ===id);
    console.log(filterNotes)
}



const getAll = ()=>{
    const  notes = fetchNotes();
    notes.forEach((note)=>logNote(note))
}

 logNote = note =>{
     console.log("*******************");
     console.log(`id: ${note.id}`)
     console.log(`Title: ${note.title}`);
     console.log(`body: ${note.body}`)
 }


module.exports={
addingNote,
removeNote,
readNote,
getAll
}