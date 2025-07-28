import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/data/Navbar"

const Landing = () => {
  return (
    <>
    <div className="w-full min-h-screen">
      <Navbar/>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-4 space-y-8">
          <h1 className="text-4xl font-extrabold lg:text-5xl">Your own {""}
            <span className="text-sky-600">blogging</span> <br /> platform</h1>
            <p>This is your space to think out loud, to share what matters, and to write without filters. Whether <br /> it's one word or a thousand, your story starts right here.</p>
            <div className="flex items-center gap-2 border border-gray-400 p-2 rounded w-full max-w-lg mx-auto">
              <input type="text" placeholder="Search" className="outline-none w-full" />
              <Button className="px-5">Search</Button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing