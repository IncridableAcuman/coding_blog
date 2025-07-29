import { Card, CardHeader, CardTitle } from "../card";

const BlogCards = () => {
  const data = [
    {
      author: "John Doe",
      title: "A concise, catchy headline for the blog post.",
      description: "A brief excerpt or teaser text to entice readers.",
      category: "Technology",
      tags: ["Tech", "Innovation"],
      publishedDate: "July 29, 2025",
      image: "./adult-person-working-home-late-night.jpg",
    },
    {
      author: "Jane Smith",
      title: "Another catchy headline for a different blog post.",
      description: "An intriguing excerpt to draw readers in.",
      category: "Lifestyle",
      tags: ["Lifestyle", "Wellness"],
      publishedDate: "August 5, 2025",
      image: "./close-up-person-working-home-night.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((item, index) => (
        <Card
          key={index}
          className="shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-2xl overflow-hidden bg-white"
        >
          <CardHeader className="p-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
          </CardHeader>
          <div className="p-4 space-y-2">
            <CardTitle className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
              {item.title}
            </CardTitle>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-xs text-gray-500">
              By <span className="font-medium">{item.author}</span> &nbsp;|&nbsp;{" "}
              {item.publishedDate}
            </p>
            <p className="text-xs text-gray-500 italic">Category: {item.category}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogCards;
