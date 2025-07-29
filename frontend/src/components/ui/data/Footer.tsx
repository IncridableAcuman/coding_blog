const Footer = () => {
  return (
    <div className="bg-gray-50 w-full py-10 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left section */}
        <div className="max-w-md">
          <h1 className="text-2xl font-bold pb-3 uppercase">coding.b</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* Right section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul className="space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">About</li>
              <li className="hover:text-blue-500 cursor-pointer">Contact</li>
              <li className="hover:text-blue-500 cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
            <ul className="space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">Delivery Information</li>
              <li className="hover:text-blue-500 cursor-pointer">Return & Refund Policy</li>
              <li className="hover:text-blue-500 cursor-pointer">Payment Methods</li>
              <li className="hover:text-blue-500 cursor-pointer">Track your Order</li>
              <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">Instagram</li>
              <li className="hover:text-blue-500 cursor-pointer">Facebook</li>
              <li className="hover:text-blue-500 cursor-pointer">Twitter</li>
              <li className="hover:text-blue-500 cursor-pointer">YouTube</li>
            </ul>
          </div>
        </div>
      </div>
      {/* info */}
      <div className="text-center text-gray-500 mt-10 border-t pt-5">
        Created by <span className="font-semibold">Izzatbek</span> | © 2025 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
