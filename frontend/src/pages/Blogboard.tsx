import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { List, ListChecksIcon, MessageCircle, NotepadText } from "lucide-react";

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
        <div className="w-full max-w-4xl overflow-x-auto">
                <Table className="w-full">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Blogboard;
