import { Button } from '@/components/ui/button'
import React from 'react'

const Navbar = () => {
  return (
<div className="bg-gray-600">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <h1>Todo App</h1>
    <Button>Logout</Button>
  </div>
</div>
  )
}

export default Navbar
