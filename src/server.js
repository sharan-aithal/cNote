#!/usr/bin/env node

const yargs = require('yargs');
const notes = require('./notes.js')


yargs.version('1.1.0')

yargs.command( {
  command: 'add',
  describe: 'You can add a new note',
  builder: {
    t: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    },
    b: {
      describe: "Body of the note",
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.t, argv.b)
  }
})

yargs.command( {
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    t: {
      describe: "Remove note",
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.t)
  }
})


yargs.command( {
  command: 'list',
  describe: 'listing out all notes',
  handler: () => {
    notes.listNotes()
  }
})

yargs.command( {
  command: 'read',
  describe: 'Read a note',
  builder: {
    t: {
      describe: "Read a particular note.",
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.readNote(argv.t)
  }
})


yargs.parse()