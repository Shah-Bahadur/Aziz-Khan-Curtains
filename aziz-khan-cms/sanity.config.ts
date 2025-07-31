import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'


export default defineConfig({
  name: 'default',
  title: 'aziz-khan-cms',

  projectId: '6xvpxhbl',
  dataset: 'production',

  basePath: '/admin', // ← Add this line

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
