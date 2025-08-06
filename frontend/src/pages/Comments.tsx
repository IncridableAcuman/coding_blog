import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UseComment } from "@/contexts/CommentContext"
import { useEffect } from "react";

const Comments = () => {
  const {commentData,getComments,deleteComment} = UseComment();
  const user=localStorage.getItem("user");
  const role:string=user? JSON.parse(user).role :"";

  useEffect(()=>{
    const fetchData = async ()=>{
      await getComments();
    }
    fetchData();
  },[getComments]);

  return (
    <>
    <div className="w-full max-w-4xl overflow-x-auto">
      <Table className="w-full p-4">
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Date</TableHead>
            {role==="admin" && (
            <TableHead className="text-right">Delete</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            commentData.map((comment,index)=>(
              <TableRow key={index}>
                <TableCell>{comment.id}</TableCell>
                <TableCell>{comment.content.slice(0,15)}...</TableCell>
                <TableCell>{comment.user}</TableCell>
                <TableCell>{comment.createdAt.slice(0,10)}</TableCell>
                {
                  role==="admin" && (
                  <TableCell className="text-right cursor-pointer text-red-500 hover:text-red-700 transition"
                   onClick={()=>deleteComment(comment?.id)} >X</TableCell>
                  )
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
    </>
  )
}

export default Comments