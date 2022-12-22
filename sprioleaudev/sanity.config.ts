import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sprioleau.dev',

  projectId: '76u9ka0u',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
