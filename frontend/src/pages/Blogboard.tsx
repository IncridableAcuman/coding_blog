import { List, ListChecksIcon, MessageCircle, NotepadText, X } from "lucide-react";

const Blogboard = () => {


  const boardData = [
    { title: "Blogs", icon: <List className="w-8 h-8 text-blue-500" />, quantity: 10 },
    { title: "Comments", icon: <MessageCircle className="w-8 h-8 text-blue-500" />, quantity: 5 },
    { title: "Drafts", icon: <NotepadText className="w-8 h-8 text-blue-500" />, quantity: 0 }
  ];

  return (
    <div className="w-full h-full px-4">
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
      <div className="pt-8">
        <div className="flex items-center gap-2 pb-4">
          <ListChecksIcon className="w-6 h-6 text-blue-500" />
          <h3 className="font-semibold text-lg">Latest Blogs</h3>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto bg-white rounded-md shadow">
          <table className="w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-bold uppercase">#</th>
                <th className="px-6 py-3 text-left font-bold uppercase">Blog Title</th>
                <th className="px-6 py-3 text-left font-bold uppercase">Date</th>
                <th className="px-6 py-3 text-left font-bold uppercase">Category</th>
                <th className="px-6 py-3 text-left font-bold uppercase">Tags</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">The Rise of Artificial Intelligence in Modern Technology</td>
                <td className="px-6 py-4 whitespace-nowrap">Wed May 28 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">Technology</td>
                <td className="px-6 py-4 whitespace-nowrap">tech, dev</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-red-500 hover:text-red-700">
                    <X size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blogboard;
