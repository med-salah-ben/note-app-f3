console.log("starting app.js")
const fs = require('fs')
const yargs = require("yargs")

const notes = require('./notes')

const id = yargs.argv.id
const title = yargs.argv.title
const body = yargs.argv.body
// console.log("yargs",title);
// console.log("yargs",body)

var command = yargs.argv._[0]

if (command === "add"){
    console.log("adding note")
    notes.addingNote(id,title,body)
}else if (command  === "read"){
    console.log("reading note")
    notes.readNote(id)
}else if (command  === "remove"){
    console.log("removing notes")
    notes.removeNote(id)
}else if (command  === "list"){
    console.log("list notes")
    notes.getAll()
}else{
    console.log("UnKown Command")
}