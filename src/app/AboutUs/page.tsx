
'use client';

import Image from "next/image";
import {useRouter,usePathname,useParams} from "next/navigation";

export default function AboutUs() {
  const path = usePathname();
  const params = useParams();
  const ProfId = []
  const router = useRouter();
  console.log(path)
  console.log(params)
  const {id} = params
  return (
    <div className="About us">
      <h1>About us Page</h1>
      <button onClick={() => router.push(`/AboutUs/${id}`)}>Dynamic Routing</button>
    </div>
  );
}
