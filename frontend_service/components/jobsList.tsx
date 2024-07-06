import React from "react";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaClock,
  FaBookmark,
  FaSearch,
  FaBriefcase,
  FaBuilding,
  FaInfoCircle,
} from "react-icons/fa";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  image: string;
  tags: string[];
  postedDate: string;
  applicants: number;
}

const JobsList: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Pulumi",
      location: "San Francisco, CA",
      salary: "$120,000 - $160,000",
      type: "Full-time",
      image:
        "https://camo.githubusercontent.com/1f8e8c054c07e27118e15f94fc026790df524723ff9c2d709edd4fd486fdb1c4/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f70756c756d692e737667",
      tags: ["React", "TypeScript", "GraphQL"],
      postedDate: "2 days ago",
      applicants: 45,
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Ngrok",
      location: "New York, NY",
      salary: "$90,000 - $130,000",
      type: "Remote",
      image:
        "https://camo.githubusercontent.com/24a261c252c5eccf54fe10100fca25fb4b0d1a6aec3f078b34b080bfe62b593b/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f6e67726f6b2e737667",
      tags: ["Figma", "User Research", "Prototyping"],
      postedDate: "1 week ago",
      applicants: 78,
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Gradio",
      location: "Boston, MA",
      salary: "$110,000 - $150,000",
      type: "Hybrid",
      image:
        "https://camo.githubusercontent.com/c4f79a1f3143f2757de7f431c8adfc27971991be5d77ab1f1ec4ea9b001aed7b/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f67726164696f2e737667",
      tags: ["Python", "Machine Learning", "SQL"],
      postedDate: "3 days ago",
      applicants: 62,
    },
  ];

  const getTagColor = (tag: string): string => {
    const colors = [
      "bg-blue-500 text-white",
      "bg-green-500 text-white",
      "bg-yellow-500 text-black",
      "bg-red-500 text-white",
      "bg-purple-500 text-white",
      "bg-pink-500 text-white",
      "bg-indigo-500 text-white",
      "bg-teal-500 text-white",
    ];
    const tagHash = Array.from(tag).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );
    return colors[tagHash % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to bg-orange-900 text-white font-">
      <header className=" backdrop-filter backdrop-blur-2xl sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-white border-2 border-white px-2 py-1 rounded">
              Jobs.fyi
            </h1>
            <nav className="hidden md:flex space-x-4">
              {[
                { name: "Home", icon: FaSearch },
                { name: "Jobs", icon: FaBriefcase },
                { name: "Companies", icon: FaBuilding },
                { name: "About", icon: FaInfoCircle },
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-700 transition duration-300 ease-in-out flex items-center space-x-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="mb-16 text-left">
          <h2 className="text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-800 leading-tight">
            Find Your Future
          </h2>
          <h3 className="text-3xl font-medium text-gray-300">
            Shape Your Career
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <button
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                    aria-label="Bookmark job"
                  >
                    <FaBookmark className="w-6 h-6" />
                  </button>
                </div>
                <h3 className="text-xl font-medium mb-2 leading-tight text-white">
                  {job.title}
                </h3>
                <p className="text-gray-300 font-medium mb-4">{job.company}</p>
                <div className="flex flex-col space-y-2 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaDollarSign className="w-4 h-4 mr-2 text-green-400" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6">
                  <span>Posted {job.postedDate}</span>
                  <span>{job.applicants} applicants</span>
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-zinc-900 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Jobs.fyi
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connecting talented professionals with innovative companies.
                Find your dream job with ease.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Contact",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300 ease-in-out hover:underline text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for the latest job opportunities and
                career insights.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-r-lg font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobsList;
