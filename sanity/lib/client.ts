// sanity.util.ts
// sanity/lib/client.ts
import { createClient, groq } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'
import { Project } from '@/types/Project';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

// import { createClient, groq } from 'next-sanity'
// import { apiVersion, dataset, projectId, useCdn } from '../env'
// import { Project } from '@/types/Project'

// export async function getProjects(): Promise<Project[]> {
//   const client = createClient({
//     apiVersion,
//     dataset,
//     projectId,
//     useCdn,
//   })
//   return client.fetch(
//     groq`*[_type == "project"] {
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content 
//     }` 
    // Remove any comma after 'url' if it exists
    // Ensure there's a closing square bracket
//   )
// }
