import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from "@/components/mode-toggle";


const Home = function() {
  return (
    <main>
      <UserButton afterSignOutUrl='/'/>
      <ModeToggle/>
    </main>
  )
}


export default Home;