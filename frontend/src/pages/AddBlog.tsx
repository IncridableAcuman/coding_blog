import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const AddBlog = () => {
  return (
    <>
    <div className="w-full max-w-md h-full">
      <form className="space-y-6">
        <div className="">
          <input type="file" placeholder="Upload" />
        </div>
        <Input type="text" placeholder="Text" />
      <Textarea placeholder="Description" />
      <Input type="text" placeholder="Tags" />
      <select className="border border-gray-700 px-4 py-2 rounded-md">
        <option value="">tech</option>
        <option value="">life</option>
        <option value="">dev</option>
        <option value="">design</option>
      </select>
       <br />
      <Button className="w-full py-3">Create Post</Button>
      </form>
    </div>
    </>
  )
}

export default AddBlog