import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'hotel-management',

  projectId: 'g2uqvroh',
  dataset: 'production',

  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
