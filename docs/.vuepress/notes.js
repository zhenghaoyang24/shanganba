import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const prepareNote = defineNoteConfig({
  dir: 'prepare',
  link: '/prepare/',
  sidebar: 'auto',
})

const choiceNote = defineNoteConfig({
  dir: 'choice',
  link: '/choice/',
  sidebar: 'auto',
})

const rememberNote = defineNoteConfig({
  dir: 'remember',
  link: '/remember/',
  sidebar: 'auto',
})

const expoundNote = defineNoteConfig({
  dir: 'expound',
  link: '/expound/',
  sidebar: 'auto',
})

const comprehensiveNote = defineNoteConfig({
  dir: 'comprehensive',
  link: '/comprehensive/',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [choiceNote,prepareNote,rememberNote,expoundNote,comprehensiveNote],
})
