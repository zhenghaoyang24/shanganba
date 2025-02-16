import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const prepareNote = defineNoteConfig({
  dir: 'prepare',
  link: '/prepare',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [prepareNote],
})
