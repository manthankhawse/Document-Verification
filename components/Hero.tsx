import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <>
      <p>Verify Documents</p>
      <Link href="/issue" className="bg-blue-500 py-1 px-2 rounded-lg shadow-md mx-2 border border-neutral-200 text-white font-semibold">
        Issue Document
      </Link>
      <Link href="/verify" className="py-1 px-2 rounded-lg shadow-md mx-2 border border-neutral-400 font-semibold">
        Verify Document
      </Link>
    </>
  )
}

export default Hero