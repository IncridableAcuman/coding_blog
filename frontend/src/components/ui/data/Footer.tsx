
const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Coding.B. All rights reserved.
            </p>
            <p className="text-xs mt-2">
                Built with ❤️ by Izzatbek
            </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer