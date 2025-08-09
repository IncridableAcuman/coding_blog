import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UsePost } from "@/contexts/PostContext";
import { useEffect } from "react";

const BlogList = () => {
    const {postData,allPost}=UsePost();
    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          await allPost();
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[allPost]);
  return (
    <>
    <div className="mt-8">
        <div className="flex items-center gap-2 pb-4">
          <h3 className="font-semibold text-lg">All Blogs</h3>
        </div>
        <ScrollArea className="h-[400px] w-full max-w-4xl">
          <div className="">
                <Table className="w-full p-4">
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Published Date</TableHead>
                        <TableHead className="text-right">Remove</TableHead>
                      </TableRow>
                      </TableHeader>
                      <TableBody>
                        {
                          postData.map((post,index)=>(
                            <TableRow key={index}>
                                <TableCell className="font-medium">{post.id}</TableCell>
                                <TableCell>{post.title}</TableCell>
                                <TableCell>{post.category}</TableCell>
                                <TableCell className="text-right">{post.createdAt.slice(0,10)}</TableCell>
                                <TableCell className="text-right cursor-pointer hover:text-sky-600 transition">X</TableCell>
                            </TableRow>
                          ))
                        }
                      </TableBody>
                </Table>
        </div>
        </ScrollArea>
      </div>
    </>
  )
}

export default BlogList