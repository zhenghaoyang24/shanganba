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

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [choiceNote,prepareNote],
})
