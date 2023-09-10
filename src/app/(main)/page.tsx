import Image from 'next/image'
import React from 'react'
import { UserButton } from '@clerk/nextjs'


const Home = function() {
  return (
    <UserButton afterSignOutUrl='/'/>
  )
}


export default Home;