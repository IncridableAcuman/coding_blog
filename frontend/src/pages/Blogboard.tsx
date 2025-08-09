import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UseComment } from "@/contexts/CommentContext";
import { UsePost } from "@/contexts/PostContext";
import { List, ListChecksIcon, MessageCircle, NotepadText } from "lucide-react";
import { useEffect } from "react";

const Blogboard = () => {
  const {postData,allPost}=UsePost();
  const {commentData} = UseComment();
  const boardData = [
    { title: "Blogs", icon: <List className="w-8 h-8 text-blue-500" />, quantity: postData.length },
    { title: "Comments", icon: <MessageCircle className="w-8 h-8 text-blue-500" />, quantity: commentData.length },
    { title: "Drafts", icon: <NotepadText className="w-8 h-8 text-blue-500" />, quantity: 0 }
  ];

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
    <div className="w-full h-full">
      {/* Statistic Cards */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {boardData.map((item, index) => (
          <div key={index} className="flex items-center gap-6 w-64  bg-white p-4 shadow-md rounded-xl hover:shadow-lg transition duration-300">
            <div className="bg-gray-100 p-3 rounded-lg">
              {item.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{item.quantity}</h2>
              <p className="text-sm text-gray-600">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Blogs */}
      <div className="mt-8">
        <div className="flex items-center gap-2 pb-4">
          <ListChecksIcon className="w-6 h-6 text-blue-500" />
          <h3 className="font-semibold text-lg">Latest Blogs</h3>
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
    </div>
  );
};

export default Blogboard;
