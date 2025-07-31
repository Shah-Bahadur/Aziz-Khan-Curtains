// sanityClient.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '6xvpxhbl', // 👈 use your actual Project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-07-01',
})