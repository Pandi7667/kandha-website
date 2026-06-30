// ./app/page.tsx
// import { getProjects } from '../sanity/schema/project';

import Home_route from "./components/Home_route";
import Link from "next/link";
import { getProjects } from "@/sanity/lib/client";
import { GetServerSideProps } from 'next';


export default async function Page() {
  const projects = await getProjects();
  const selectedMember = 'defaultMember';
  return (
    <main className="c">
      <Home_route />
      <Link href="/coreOfferings" title="core offerings" />
      {/* <div className="bg-blue-200">
        {projects.map((project) => (
          <div key={project._id}>
            {project.name}</div>
        ))}
      </div> */}

    </main>
  )
}

// import { Project } from '@/types/Project';

// interface PageProps {
//   projects: Project[];
// }

// export default function Page({ projects }: PageProps) {
//   const selectedMember = 'defaultMember';
//   return (
//     <main className="">
//       <Home_route />
//       <Link href="/coreOfferings" title="core offerings"/>
//     </main>
//   );
// }

// export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
//   const projects = await getProjects();
//   return {
//     props: {
//       projects,
//     },
//   };
// };
