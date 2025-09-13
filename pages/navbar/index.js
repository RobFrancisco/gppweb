import React from 'react'
import Image from "next/image"
import Link from "next/link"

const index = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Image
      src="/gpp2logo.jpg"
      width={150}
      height={100}
      alt="Picture of the logo"
    />
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="/"><div class="mr-5 hover:text-gray-900">Home</div></Link>
      <Link href="/Content"><div class="mr-5 hover:text-gray-900">Browse</div></Link>
      <Link href="/Contact"><div class="mr-5 hover:text-gray-900">Contact</div></Link>
      <Link href="/About"><div class="mr-5 hover:text-gray-900">About</div></Link>
    </nav>
    
  </div>
</header>
  )
}

export default index
