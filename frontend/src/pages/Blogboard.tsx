import { List, ListChecksIcon, MessageCircle, NotepadText } from "lucide-react"

const Blogboard = () => {
  const boardData=[
    {title:"Blogs",icon:<List className="w-8 h-8 text-blue-500" />,quantity:10},
    {title:"Comments",icon:<MessageCircle className="w-8 h-8 text-blue-500" />,quantity:5},
    {title:"Drafts",icon:<NotepadText className="w-8 h-8 text-blue-500" />,quantity:0}
  ]
  return (
    <>
      <div className="w-full h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {
            boardData.map((item,index)=>(
              <div className="flex items-center gap-6 bg-white p-4 shadow rounded-xl hover:shadow-md transition duration-300" key={index}>
                <p className="bg-gray-100 p-3 rounded-lg">{item.icon}</p>
                <div className="">
                  <h2 className="text-xl font-semibold">{item.quantity}</h2>
                  <h2 className="text-sm text-gray-600">{item.title}</h2>
                </div>
              </div>
            ))
          }
        </div>
        {/* Latest blogs */}
        <div className="pt-5">
          <div className="flex items-center gap-2 p-4">
            <ListChecksIcon className="w-8 h-8 text-blue-500" />
            <p>Latest Blogs</p>
          </div>
          {/* table */}
          <div className="pt-3">
            <table className="border-b">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Blog title</th>
                  <th>date</th>
                  <th>status</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>The Rise of Artificial Intelligence in Modern Technology</td>
                  <td>Wed May 28 2025</td>
                  <td>Published</td>
                  <td>
                    <button>Unpublished</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogboard