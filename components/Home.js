// import { useState, useEffect } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import { Button } from "@/components/ui/Button";
// import {
//   Sparkles,
//   Rocket,
//   Clock,
//   Zap,
//   MessageSquare,
//   Users,
//   Building2,
//   GraduationCap,
//   Star,
//   ArrowRight,
//   Calendar,
//   Target,
//   ChevronDown,
//   Mail,
//   TrendingUp,
//   BookOpen,
//   Coffee,
//   Wifi,
//   Pizza,
//   Beer,
//   Bookmark,
//   Notebook,
//   Library,
//   Mic,
//   Music,
//   Film,
//   Gamepad2,
//   Dumbbell,
//   Check,
//   Award,
//   ThumbsUp,
//   BookText,
//   UserPlus,
//   MapPin,
//   ShoppingBag,
//   Heart,
//   Globe,
//   Trophy,
//   Code,
//   Lightbulb,
//   Network,
//   Megaphone,
//   Camera,
//   Headphones,
//   Palette,
//   Cpu,
//   Leaf,
//   Briefcase,
//   Eye,
//   Share2,
//   Bell,
//   Search,
//   ExternalLink,
//   Beaker,
//   Calculator,
// } from "lucide-react";
// import { Link as ScrollLink } from "react-scroll";

// // Enhanced Student Hub Component with better integration
// const StudentEngagementHub = () => {
//   const [activeTab, setActiveTab] = useState("events");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const competitions = [
//     {
//       id: 1,
//       title: "IFSA Trader's Cup 2025",
//       organizer: "IFSA Network",
//       type: "Online",
//       isPaid: true,
//       stats: "7 Applied",
//       category: "finance",
//       prize: "₹50,000",
//       deadline: "15 days left",
//       difficulty: "Intermediate",
//       participants: 1247,
//       image: "/ifsa.jpeg?height=200&width=300",
//       tags: ["Trading", "Finance", "Analytics"],
//       featured: true,
//     },
//     {
//       id: 2,
//       title: "Avinya - 2025: Prakriti Ecoinovate Challenge",
//       organizer: "IIT Guwahati",
//       type: "Hybrid",
//       isPaid: false,
//       stats: "17 Applied",
//       category: "sustainability",
//       prize: "₹1,00,000",
//       deadline: "22 days left",
//       difficulty: "Advanced",
//       participants: 892,
//       image: "/avinya.jpeg?height=200&width=300",
//       tags: ["Sustainability", "Innovation", "Environment"],
//       featured: false,
//     },
//     {
//       id: 3,
//       title: "Memonomist 25AD - Nation Wide Meme Crafting",
//       organizer: "M S Ramaiah University",
//       type: "Online",
//       isPaid: false,
//       stats: "2,496 Views",
//       category: "creative",
//       prize: "₹25,000",
//       deadline: "8 days left",
//       difficulty: "Beginner",
//       participants: 3421,
//       image: "/meme.jpg?height=200&width=300",
//       tags: ["Creative", "Design", "Humor"],
//       featured: false,
//     },
//     {
//       id: 4,
//       title: "Textify Analytics: Data Science Challenge",
//       organizer: "Textify AI",
//       type: "Online",
//       isPaid: false,
//       stats: "289 Applied",
//       category: "tech",
//       prize: "₹75,000",
//       deadline: "12 days left",
//       difficulty: "Advanced",
//       participants: 1856,
//       image: "/image.jpg?height=200&width=300",
//       tags: ["AI", "Data Science", "Machine Learning"],
//       featured: true,
//     },
//   ];

//   const hackathons = [
//     {
//       id: 101,
//       title: "Hack the Future 2025",
//       organizer: "Global Tech Foundation",
//       type: "Hybrid",
//       isPaid: false,
//       stats: "1,024 Registered",
//       prize: "₹2,50,000",
//       deadline: "5 days left",
//       duration: "48 hours",
//       location: "Bangalore + Virtual",
//       image: "/future.jpg?height=200&width=300",
//       tags: ["Web3", "AI", "Blockchain"],
//       featured: true,
//     },
//     {
//       id: 102,
//       title: "Blockchain Innovation Challenge",
//       organizer: "Crypto University",
//       type: "Online",
//       isPaid: false,
//       stats: "532 Teams",
//       prize: "10 ETH",
//       deadline: "18 days left",
//       duration: "72 hours",
//       location: "Virtual",
//       image: "/blockchain.jpg?height=200&width=300",
//       tags: ["Blockchain", "DeFi", "Smart Contracts"],
//       featured: false,
//     },
//   ];

//   const categories = [
//     { id: "all", name: "All", icon: Globe, count: 6 },
//     { id: "tech", name: "Tech", icon: Code, count: 2 },
//     { id: "finance", name: "Finance", icon: TrendingUp, count: 1 },
//     { id: "creative", name: "Creative", icon: Palette, count: 1 },
//     { id: "sustainability", name: "Green", icon: Leaf, count: 1 },
//     { id: "business", name: "Business", icon: Briefcase, count: 1 },
//   ];

//   const events = [
//     {
//       id: 201,
//       title: "TechFest - Annual Technical Symposium",
//       organizer: "IIT Bombay",
//       type: "On-Campus",
//       isPaid: false,
//       stats: "1.2K Going",
//       category: "tech",
//       date: "December 27-29, 2025",
//       time: "9:00 AM - 9:00 PM",
//       location: "IIT Bombay Campus",
//       image: "/IITBT.jpg?height=200&width=300",
//       tags: ["Robotics", "AI", "Workshops"],
//       featured: true,
//       college: "IIT Bombay",
//     },
//     {
//       id: 202,
//       title: "E-Summit: Entrepreneurship Conclave",
//       organizer: "IIM Bangalore",
//       type: "Hybrid",
//       isPaid: true,
//       stats: "450 Registered",
//       category: "business",
//       date: "March 15, 2025",
//       time: "10:00 AM - 6:00 PM",
//       location: "IIMB Campus + Online",
//       image: "/IIM.jpg?height=200&width=300",
//       tags: ["Startups", "Investors", "Pitching"],
//       featured: true,
//       college: "IIM Bangalore",
//     },
//     {
//       id: 203,
//       title: "Culrav - Cultural Festival",
//       organizer: "NIT Trichy",
//       type: "On-Campus",
//       isPaid: false,
//       stats: "3.5K Interested",
//       category: "creative",
//       date: "February 10-13, 2025",
//       time: "All Day",
//       location: "NIT Trichy Campus",
//       image: "/Culrav.jpg?height=200&width=300",
//       tags: ["Music", "Dance", "Drama"],
//       featured: false,
//       college: "NIT Trichy",
//     },
//     {
//       id: 204,
//       title: "TEDxThaparUniversity",
//       organizer: "Thapar University",
//       type: "On-Campus",
//       isPaid: true,
//       stats: "200 Seats Left",
//       category: "general",
//       date: "April 5, 2025",
//       time: "2:00 PM - 7:00 PM",
//       location: "Thapar University Auditorium",
//       image: "/ted.jpg?height=200&width=300",
//       tags: ["Ideas", "Inspiration", "Talks"],
//       featured: false,
//       college: "Thapar University",
//     },
//     {
//       id: 205,
//       title: "Technex - Technical Festival",
//       organizer: "IIT BHU",
//       type: "On-Campus",
//       isPaid: false,
//       stats: "2.8K Registered",
//       category: "tech",
//       date: "March 7-9, 2025",
//       time: "9:00 AM - 10:00 PM",
//       location: "IIT BHU Campus",
//       image: "/IIT_BHU.jpg?height=200&width=300",
//       tags: ["Hackathon", "Competitions", "Exhibitions"],
//       featured: true,
//       college: "IIT BHU",
//     },
//     {
//       id: 206,
//       title: "Incident - Management Fest",
//       organizer: "XLRI Jamshedpur",
//       type: "On-Campus",
//       isPaid: true,
//       stats: "120 Teams",
//       category: "business",
//       date: "November 14-16, 2025",
//       time: "10:00 AM - 8:00 PM",
//       location: "XLRI Campus",
//       image: "/XLRI.png?height=200&width=300",
//       tags: ["Case Studies", "Business Simulation"],
//       featured: false,
//       college: "XLRI Jamshedpur",
//     },
//     {
//       id: 207,
//       title: "Riviera - Sports Festival",
//       organizer: "VIT Vellore",
//       type: "On-Campus",
//       isPaid: false,
//       stats: "1.5K Participants",
//       category: "sports",
//       date: "January 20-25, 2025",
//       time: "7:00 AM - 9:00 PM",
//       location: "VIT Sports Complex",
//       image: "/sports.jpeg?height=200&width=300",
//       tags: ["Cricket", "Football", "Athletics"],
//       featured: false,
//       college: "VIT Vellore",
//     },
//     {
//       id: 208,
//       title: "Mood Indigo - Cultural Festival",
//       organizer: "IIT Bombay",
//       type: "On-Campus",
//       isPaid: false,
//       stats: "5K+ Expected",
//       category: "creative",
//       date: "December 23-26, 2025",
//       time: "10:00 AM - Midnight",
//       location: "IIT Bombay Campus",
//       image: "/indigo.jpg?height=200&width=300",
//       tags: ["Concerts", "Pro Shows", "Workshops"],
//       featured: true,
//       college: "IIT Bombay",
//     },
//   ];

//   const getCategoryIcon = (category) => {
//     const categoryMap = {
//       tech: Code,
//       finance: TrendingUp,
//       creative: Palette,
//       sustainability: Leaf,
//       business: Briefcase,
//     };
//     return categoryMap[category] || Globe;
//   };

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case "Beginner":
//         return "bg-green-500/20 text-green-400 border-green-500/30";
//       case "Intermediate":
//         return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
//       case "Advanced":
//         return "bg-red-500/20 text-red-400 border-red-500/30";
//       default:
//         return "bg-gray-500/20 text-gray-400 border-gray-500/30";
//     }
//   };

//   return (
//     <section className="py-24 px-6 md:px-24 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/3 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Enhanced Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-md px-6 py-3 rounded-full border border-blue-400/20 mb-6">
//             <Trophy className="w-5 h-5 text-blue-400" />
//             <span className="text-blue-300 font-semibold">
//               Student Opportunities
//             </span>
//             <Sparkles className="w-5 h-5 text-indigo-400" />
//           </div>

//           <h2 className="text-5xl md:text-6xl font-black mb-6">
//             <span className="text-white">Your Gateway to</span>
//             <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
//               Campus Excellence
//             </span>
//           </h2>

//           <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
//             Discover competitions, hackathons, and opportunities that match your
//             passion. Connect with like-minded peers and build your future
//             together.
//           </p>
//         </motion.div>

//         {/* Enhanced Tab Navigation */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-12"
//         >
//           <div className="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
//             {[
//               {
//                 id: "competitions",
//                 label: "Competitions",
//                 icon: Trophy,
//                 count: competitions.length,
//               },
//               {
//                 id: "hackathons",
//                 label: "Hackathons",
//                 icon: Code,
//                 count: hackathons.length,
//               },
//               { id: "events", label: "Events", icon: Calendar, count: 8 },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
//                   activeTab === tab.id
//                     ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg shadow-blue-500/30"
//                     : "text-blue-300 hover:text-white hover:bg-white/5"
//                 }`}
//               >
//                 <tab.icon className="w-5 h-5" />
//                 {tab.label}
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs font-bold ${
//                     activeTab === tab.id ? "bg-white/20" : "bg-blue-500/20"
//                   }`}
//                 >
//                   {tab.count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Search and Filter Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row gap-6 mb-12"
//         >
//           {/* Search Bar */}
//           {/* <div className="flex-1 relative">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search competitions, hackathons, events..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
//             />
//           </div> */}

//           {/* Category Filter */}
//           <div className="flex gap-3 overflow-x-auto pb-2">
//             {categories.map((category) => {
//               const IconComponent = category.icon;
//               return (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
//                     selectedCategory === category.id
//                       ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg shadow-blue-500/30"
//                       : "bg-white/5 text-blue-300 hover:bg-white/10 hover:text-white border border-white/10"
//                   }`}
//                 >
//                   <IconComponent className="w-4 h-4" />
//                   {category.name}
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-bold ${
//                       selectedCategory === category.id
//                         ? "bg-white/20"
//                         : "bg-blue-500/20"
//                     }`}
//                   >
//                     {category.count}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
//           {/* Main Content Area */}
//           <div className="xl:col-span-3 space-y-8">
//             <AnimatePresence mode="wait">
//               {activeTab === "competitions" && (
//                 <motion.div
//                   key="competitions"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.5 }}
//                   className="grid grid-cols-1 lg:grid-cols-2 gap-6"
//                 >
//                   {competitions.map((comp, index) => {
//                     const CategoryIcon = getCategoryIcon(comp.category);
//                     return (
//                       <motion.div
//                         key={comp.id}
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 0.1 }}
//                         whileHover={{ y: -8, scale: 1.02 }}
//                         className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
//                           comp.featured
//                             ? "border-blue-400/30 shadow-lg shadow-blue-500/10"
//                             : "border-white/10 hover:border-white/20"
//                         }`}
//                       >
//                         {comp.featured && (
//                           <div className="absolute top-4 left-4 z-20">
//                             <div className="bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
//                               <Star className="w-3 h-3 fill-current" />
//                               Featured
//                             </div>
//                           </div>
//                         )}

//                         <div className="relative h-48 overflow-hidden">
//                           <img
//                             src={comp.image || "/placeholder.svg"}
//                             alt={comp.title}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

//                           <div className="absolute bottom-4 left-4 right-4">
//                             <div className="flex items-center gap-2 mb-2">
//                               <span
//                                 className={`px-3 py-1 rounded-full text-xs font-bold border ${
//                                   comp.isPaid
//                                     ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
//                                     : "bg-green-500/20 text-green-300 border-green-500/30"
//                                 }`}
//                               >
//                                 {comp.type} • {comp.isPaid ? "Paid" : "Free"}
//                               </span>
//                               <span
//                                 className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(
//                                   comp.difficulty
//                                 )}`}
//                               >
//                                 {comp.difficulty}
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="p-6 space-y-4">
//                           <div className="flex items-start justify-between gap-3">
//                             <div className="flex-1">
//                               <h3 className="font-bold text-lg text-white mb-1 line-clamp-2 group-hover:text-blue-300 transition-colors">
//                                 {comp.title}
//                               </h3>
//                               <p className="text-gray-400 text-sm mb-3">
//                                 {comp.organizer}
//                               </p>
//                             </div>
//                             <CategoryIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
//                           </div>

//                           <div className="flex flex-wrap gap-2 mb-4">
//                             {comp.tags.map((tag, tagIndex) => (
//                               <span
//                                 key={tagIndex}
//                                 className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-lg border border-blue-500/20"
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>

//                           <div className="grid grid-cols-2 gap-4 text-sm">
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Trophy className="w-4 h-4 text-yellow-400" />
//                               <span className="font-medium text-yellow-400">
//                                 {comp.prize}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Clock className="w-4 h-4 text-orange-400" />
//                               <span>{comp.deadline}</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Users className="w-4 h-4 text-blue-400" />
//                               <span>
//                                 {comp.participants.toLocaleString()}{" "}
//                                 participants
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Eye className="w-4 h-4 text-green-400" />
//                               <span>{comp.stats}</span>
//                             </div>
//                           </div>

//                           <div className="flex gap-3 pt-4">
//                             <Button className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
//                               Apply Now
//                             </Button>
//                             <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
//                               <Share2 className="w-4 h-4" />
//                             </Button>
//                             <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
//                               <Bookmark className="w-4 h-4" />
//                             </Button>
//                           </div>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </motion.div>
//               )}

//               {activeTab === "hackathons" && (
//                 <motion.div
//                   key="hackathons"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.5 }}
//                   className="space-y-6"
//                 >
//                   {hackathons.map((hack, index) => (
//                     <motion.div
//                       key={hack.id}
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6, delay: index * 0.1 }}
//                       whileHover={{ y: -5 }}
//                       className={`group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
//                         hack.featured
//                           ? "border-blue-400/30 shadow-lg shadow-blue-500/10"
//                           : "border-white/10 hover:border-white/20"
//                       }`}
//                     >
//                       <div className="lg:flex">
//                         <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
//                           <img
//                             src={hack.image || "/placeholder.svg"}
//                             alt={hack.title}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-t lg:from-black/80 lg:to-transparent"></div>

//                           {hack.featured && (
//                             <div className="absolute top-4 left-4">
//                               <div className="bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
//                                 <Star className="w-3 h-3 fill-current" />
//                                 Featured
//                               </div>
//                             </div>
//                           )}
//                         </div>

//                         <div className="p-8 lg:w-2/3 space-y-6">
//                           <div className="flex items-start justify-between gap-4">
//                             <div className="flex-1">
//                               <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-blue-300 transition-colors">
//                                 {hack.title}
//                               </h3>
//                               <p className="text-gray-400 mb-4">
//                                 {hack.organizer}
//                               </p>
//                             </div>
//                             <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-bold border border-green-500/30">
//                               {hack.type}
//                             </span>
//                           </div>

//                           <div className="flex flex-wrap gap-2 mb-6">
//                             {hack.tags.map((tag, tagIndex) => (
//                               <span
//                                 key={tagIndex}
//                                 className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-lg border border-blue-500/20"
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>

//                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <MapPin className="w-4 h-4 text-blue-400" />
//                               <span>{hack.location}</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Clock className="w-4 h-4 text-orange-400" />
//                               <span>
//                                 {hack.duration} • {hack.deadline}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Trophy className="w-4 h-4 text-yellow-400" />
//                               <span className="font-medium text-yellow-400">
//                                 {hack.prize}
//                               </span>
//                             </div>
//                           </div>

//                           <div className="flex items-center justify-between pt-4">
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Users className="w-5 h-5 text-green-400" />
//                               <span className="font-medium">{hack.stats}</span>
//                             </div>

//                             <div className="flex gap-3">
//                               <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
//                                 Register Now
//                               </Button>
//                               <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
//                                 <ExternalLink className="w-4 h-4" />
//                               </Button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               )}
//               {activeTab === "events" && (
//                 <motion.div
//                   key="events"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.5 }}
//                   className="grid grid-cols-1 lg:grid-cols-2 gap-6"
//                 >
//                   {events.map((event, index) => {
//                     const CategoryIcon = getCategoryIcon(event.category);
//                     return (
//                       <motion.div
//                         key={event.id}
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 0.1 }}
//                         whileHover={{ y: -8, scale: 1.02 }}
//                         className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
//                           event.featured
//                             ? "border-blue-400/30 shadow-lg shadow-blue-500/10"
//                             : "border-white/10 hover:border-white/20"
//                         }`}
//                       >
//                         {event.featured && (
//                           <div className="absolute top-4 left-4 z-20">
//                             <div className="bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
//                               <Star className="w-3 h-3 fill-current" />
//                               Featured
//                             </div>
//                           </div>
//                         )}

//                         <div className="relative h-48 overflow-hidden">
//                           <img
//                             src={event.image || "/placeholder.svg"}
//                             alt={event.title}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

//                           <div className="absolute bottom-4 left-4 right-4">
//                             <div className="flex items-center gap-2 mb-2">
//                               <span
//                                 className={`px-3 py-1 rounded-full text-xs font-bold border ${
//                                   event.isPaid
//                                     ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
//                                     : "bg-green-500/20 text-green-300 border-green-500/30"
//                                 }`}
//                               >
//                                 {event.type} • {event.isPaid ? "Paid" : "Free"}
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="p-6 space-y-4">
//                           <div className="flex items-start justify-between gap-3">
//                             <div className="flex-1">
//                               <h3 className="font-bold text-lg text-white mb-1 line-clamp-2 group-hover:text-blue-300 transition-colors">
//                                 {event.title}
//                               </h3>
//                               <div className="flex items-center gap-2">
//                                 {/* <p className="text-gray-400 text-sm">
//                                   {event.organizer}
//                                 </p> */}
//                                 <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full">
//                                   {event.college}
//                                 </span>
//                               </div>
//                             </div>
//                             <CategoryIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
//                           </div>

//                           <div className="flex flex-wrap gap-2 mb-4">
//                             {event.tags.map((tag, tagIndex) => (
//                               <span
//                                 key={tagIndex}
//                                 className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-lg border border-blue-500/20"
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>

//                           <div className="grid grid-cols-2 gap-4 text-sm">
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Calendar className="w-4 h-4 text-blue-400" />
//                               <span>{event.date}</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Clock className="w-4 h-4 text-orange-400" />
//                               <span>{event.time}</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <MapPin className="w-4 h-4 text-green-400" />
//                               <span>{event.location}</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-gray-300">
//                               <Users className="w-4 h-4 text-indigo-400" />
//                               <span>{event.stats}</span>
//                             </div>
//                           </div>

//                           <div className="flex gap-3 pt-4">
//                             <Button className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
//                               Register Now
//                             </Button>
//                             <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
//                               <Share2 className="w-4 h-4" />
//                             </Button>
//                             <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
//                               <Bookmark className="w-4 h-4" />
//                             </Button>
//                           </div>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Enhanced Sidebar */}
//           <div className="space-y-8">
//             {/* Quick Stats */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
//             >
//               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//                 <TrendingUp className="w-5 h-5 text-blue-400" />
//                 Quick Stats
//               </h3>
//               <div className="space-y-4">
//                 {[
//                   {
//                     label: "Active Competitions",
//                     value: "24",
//                     icon: Trophy,
//                     color: "text-yellow-400",
//                   },
//                   {
//                     label: "This Week's Hackathons",
//                     value: "8",
//                     icon: Code,
//                     color: "text-blue-400",
//                   },
//                   {
//                     label: "Total Prize Pool",
//                     value: "₹50L+",
//                     icon: Target,
//                     color: "text-green-400",
//                   },
//                   {
//                     label: "Students Participating",
//                     value: "12K+",
//                     icon: Users,
//                     color: "text-indigo-400",
//                   },
//                 ].map((stat, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between"
//                   >
//                     <div className="flex items-center gap-3">
//                       <stat.icon className={`w-4 h-4 ${stat.color}`} />
//                       <span className="text-gray-300 text-sm">
//                         {stat.label}
//                       </span>
//                     </div>
//                     <span className={`font-bold ${stat.color}`}>
//                       {stat.value}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Community Features */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               viewport={{ once: true }}
//               className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
//             >
//               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//                 <Network className="w-5 h-5 text-teal-400" />
//                 Community Hub
//               </h3>
//               <div className="space-y-6">
//                 {[
//                   {
//                     icon: MessageSquare,
//                     title: "Discussion Forums",
//                     description:
//                       "Join topic-specific discussions with peers and mentors",
//                     color: "text-blue-400",
//                     bgColor: "bg-blue-500/10",
//                   },
//                   {
//                     icon: Calendar,
//                     title: "Study Sessions",
//                     description:
//                       "Collaborative learning with scheduled group sessions",
//                     color: "text-indigo-400",
//                     bgColor: "bg-indigo-500/10",
//                   },
//                   {
//                     icon: Users,
//                     title: "Team Formation",
//                     description: "Find teammates for competitions and projects",
//                     color: "text-teal-400",
//                     bgColor: "bg-teal-500/10",
//                   },
//                   {
//                     icon: Lightbulb,
//                     title: "Mentorship",
//                     description: "Connect with industry experts and alumni",
//                     color: "text-yellow-400",
//                     bgColor: "bg-yellow-500/10",
//                   },
//                 ].map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
//                   >
//                     <div
//                       className={`p-2 ${feature.bgColor} rounded-lg ${feature.color}`}
//                     >
//                       <feature.icon className="w-4 h-4" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-medium text-white text-sm mb-1">
//                         {feature.title}
//                       </h4>
//                       <p className="text-gray-400 text-xs leading-relaxed">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Inside your sidebar div (where other widgets like "Quick Stats" are) */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }} // Adjust delay to fit your sequence
//               viewport={{ once: true }}
//               className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
//             >
//               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//                 <Share2 className="w-5 h-5 text-purple-400" />
//                 Share & Earn Rewards
//               </h3>

//               <div className="space-y-4">
//                 <p className="text-blue-200 text-sm leading-relaxed">
//                   Share events with friends and earn{" "}
//                   <span className="font-bold text-purple-300">
//                     reward points
//                   </span>{" "}
//                   when they register!
//                 </p>

//                 {/* Progress bar */}
//                 <div className="bg-gray-800/50 rounded-full h-3 overflow-hidden">
//                   <motion.div
//                     initial={{ width: "45%" }}
//                     whileInView={{ width: "65%" }}
//                     transition={{ duration: 1.5, delay: 0.3 }}
//                     className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
//                   />
//                 </div>
//                 <p className="text-xs text-gray-400">
//                   <span className="font-bold text-purple-300">
//                     65/100 points
//                   </span>{" "}
//                   to unlock your next badge
//                 </p>

//                 {/* Share buttons */}
//                 <div className="flex gap-3 pt-2">
//                   <Button className="flex-1 bg-gradient-to-r from-blue-500/10 to-blue-500/20 hover:from-blue-500/20 hover:to-blue-500/30 text-white font-medium py-2 rounded-xl border border-blue-400/30 transition-all duration-300 flex items-center justify-center gap-2">
//                     <MessageSquare className="w-4 h-4" />
//                     Share
//                   </Button>
//                   <Button className="flex-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-white font-medium py-2 rounded-xl border border-purple-400/30 transition-all duration-300 flex items-center justify-center gap-2">
//                     <Sparkles className="w-4 h-4" />
//                     Earn
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Trending Topics */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
//             >
//               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//                 <Megaphone className="w-5 h-5 text-orange-400" />
//                 Trending Now
//               </h3>
//               <div className="space-y-3">
//                 {[
//                   {
//                     topic: "#AIChallenge2025",
//                     posts: "234 posts",
//                     trend: "+45%",
//                   },
//                   {
//                     topic: "#SustainableInnovation",
//                     posts: "189 posts",
//                     trend: "+32%",
//                   },
//                   {
//                     topic: "#BlockchainHack",
//                     posts: "156 posts",
//                     trend: "+28%",
//                   },
//                   {
//                     topic: "#DataScienceBootcamp",
//                     posts: "143 posts",
//                     trend: "+25%",
//                   },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
//                   >
//                     <div>
//                       <div className="text-blue-300 font-medium text-sm">
//                         {item.topic}
//                       </div>
//                       <div className="text-gray-400 text-xs">{item.posts}</div>
//                     </div>
//                     <div className="text-green-400 text-xs font-bold">
//                       {item.trend}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Upcoming Deadlines */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.7 }}
//               viewport={{ once: true }}
//               className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
//             >
//               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//                 <Bell className="w-5 h-5 text-red-400" />
//                 Urgent Deadlines
//               </h3>
//               <div className="space-y-4">
//                 {[
//                   {
//                     title: "Google Summer of Code",
//                     deadline: "2 days left",
//                     urgency: "high",
//                   },
//                   {
//                     title: "Microsoft Imagine Cup",
//                     deadline: "5 days left",
//                     urgency: "medium",
//                   },
//                   {
//                     title: "Facebook Developer Challenge",
//                     deadline: "1 week left",
//                     urgency: "low",
//                   },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
//                   >
//                     <div
//                       className={`w-3 h-3 rounded-full ${
//                         item.urgency === "high"
//                           ? "bg-red-400"
//                           : item.urgency === "medium"
//                           ? "bg-yellow-400"
//                           : "bg-green-400"
//                       }`}
//                     ></div>
//                     <div className="flex-1">
//                       <div className="text-white font-medium text-sm">
//                         {item.title}
//                       </div>
//                       <div className="text-gray-400 text-xs">
//                         {item.deadline}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Enhanced Countdown Timer with better animations
// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 15);
//     targetDate.setHours(23, 59, 59, 999);

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate.getTime() - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor(
//             (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           ),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
//       {[
//         {
//           value: timeLeft.days,
//           label: "Days",
//           color: "from-blue-500 to-cyan-500",
//         },
//         {
//           value: timeLeft.hours,
//           label: "Hours",
//           color: "from-indigo-500 to-blue-500",
//         },
//         {
//           value: timeLeft.minutes,
//           label: "Mins",
//           color: "from-teal-500 to-indigo-500",
//         },
//         {
//           value: timeLeft.seconds,
//           label: "Secs",
//           color: "from-cyan-500 to-teal-500",
//         },
//       ].map((item, index) => (
//         <motion.div
//           key={index}
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{
//             duration: 0.5,
//             delay: index * 0.1,
//           }}
//           className="relative"
//         >
//           <motion.div
//             animate={{
//               scale: [1, 1.05, 1],
//               rotateY: [0, 5, 0],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Number.POSITIVE_INFINITY,
//               delay: index * 0.2,
//             }}
//             className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-center shadow-2xl border border-white/20 backdrop-blur-md relative overflow-hidden`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
//             <motion.div
//               key={item.value}
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//               className="relative z-10"
//             >
//               <div className="text-3xl md:text-4xl font-black text-white mb-2">
//                 {item.value.toString().padStart(2, "0")}
//               </div>
//               <div className="text-sm text-white/80 font-semibold uppercase tracking-wider">
//                 {item.label}
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // Enhanced floating elements with more variety
// const FloatingElement = ({ children, delay = 0, intensity = 1 }) => (
//   <motion.div
//     animate={{
//       y: [0, -15 * intensity, 0],
//       x: [0, 5 * intensity, 0],
//       rotate: [0, 2 * intensity, -2 * intensity, 0],
//     }}
//     transition={{
//       duration: 4 + Math.random() * 2,
//       repeat: Number.POSITIVE_INFINITY,
//       delay,
//       ease: "easeInOut",
//     }}
//   >
//     {children}
//   </motion.div>
// );

// // Enhanced Feature Card with more interactive elements
// const FeatureCard = ({ feature, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <FloatingElement delay={index * 0.2} intensity={0.5}>
//       <motion.div
//         initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         whileHover={{ scale: 1.02, y: -15 }}
//         transition={{ duration: 0.6, delay: index * 0.1 }}
//         viewport={{ once: true }}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//         className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-md p-8 rounded-3xl border ${feature.border} shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer`}
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {/* Animated background gradient */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//           animate={{
//             background: isHovered
//               ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)"
//               : "linear-gradient(135deg, transparent 0%, transparent 50%, transparent 100%)",
//           }}
//         />

//         {/* Floating particles effect */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(6)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white/20 rounded-full"
//               animate={{
//                 x: [Math.random() * 300, Math.random() * 300],
//                 y: [Math.random() * 200, Math.random() * 200],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: i * 0.5,
//               }}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 space-y-6">
//           <div className="flex items-center gap-4">
//             <motion.div
//               whileHover={{ rotate: 360, scale: 1.1 }}
//               transition={{ duration: 0.6 }}
//               className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} flex items-center justify-center shadow-lg`}
//             >
//               <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
//             </motion.div>
//             <div className="flex-1">
//               <h3 className={`text-2xl font-bold ${feature.iconColor} mb-1`}>
//                 {feature.title}
//               </h3>
//               <div className="flex items-center gap-2">
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-bold ${feature.iconColor} bg-white/10 border border-white/20`}
//                 >
//                   {feature.badge}
//                 </span>
//                 <motion.div
//                   animate={{ rotate: isExpanded ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ChevronDown className="w-4 h-4 text-gray-400" />
//                 </motion.div>
//               </div>
//             </div>
//           </div>

//           <p className="text-gray-300 text-lg leading-relaxed">
//             {feature.desc}
//           </p>

//           <AnimatePresence>
//             {(isHovered || isExpanded) && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
//               >
//                 <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
//                   <Check className="w-4 h-4 text-green-400" />
//                   Key Features
//                 </h4>
//                 <ul className="space-y-2 text-sm text-blue-100">
//                   {feature.benefits.map((benefit, i) => (
//                     <motion.li
//                       key={i}
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       className="flex items-start gap-2"
//                     >
//                       <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
//                       {benefit}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300"
//           >
//             <Calendar className="w-4 h-4 text-blue-400" />
//             <span className="text-sm text-blue-300 font-medium">
//               Coming Soon
//             </span>
//             <ArrowRight className="w-4 h-4 text-blue-400" />
//           </motion.div>
//         </div>
//       </motion.div>
//     </FloatingElement>
//   );
// };

// const Home = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

//   const [iconConfigs, setIconConfigs] = useState([]);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   useEffect(() => {
//     const generateConfig = () =>
//       [
//         BookOpen,
//         Coffee,
//         Wifi,
//         Pizza,
//         Beer,
//         Bookmark,
//         Notebook,
//         Library,
//         Mic,
//         Music,
//         Film,
//         Gamepad2,
//         Dumbbell,
//         BookText,
//         UserPlus,
//         MapPin,
//         ShoppingBag,
//         Heart,
//         Award,
//         ThumbsUp,
//         Camera,
//         Headphones,
//         Palette,
//         Cpu,
//         Leaf,
//         Briefcase,
//         Code,
//         Trophy,
//         Lightbulb,
//         Network,
//       ].map((Icon) => ({
//         Icon,
//         x:
//           Math.random() *
//           (typeof window !== "undefined" ? window.innerWidth : 1200),
//         y:
//           Math.random() *
//           (typeof window !== "undefined" ? window.innerHeight : 800),
//         scale: 0.3 + Math.random() * 0.7,
//         opacity: 0.05 + Math.random() * 0.15,
//         animateX: (Math.random() - 0.5) * 300,
//         animateY: (Math.random() - 0.5) * 300,
//         rotate: Math.random() * 360,
//         duration: 25 + Math.random() * 25,
//       }));

//     setIconConfigs(generateConfig());

//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % 3);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main className="font-sans text-white bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
//       {/* Enhanced Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {/* Primary gradient orbs */}
//         <motion.div
//           animate={{
//             x: [0, 100, -50, 0],
//             y: [0, -50, 30, 0],
//             scale: [1, 1.2, 0.8, 1],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//           className="absolute top-20 left-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
//         />

//         <motion.div
//           animate={{
//             x: [0, -80, 40, 0],
//             y: [0, 40, -20, 0],
//             scale: [1, 0.9, 1.1, 1],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//           className="absolute top-40 right-20 w-[500px] h-[500px] bg-indigo-500/6 rounded-full blur-3xl"
//         />

//         <motion.div
//           animate={{
//             x: [0, 60, -30, 0],
//             y: [0, 80, -40, 0],
//             scale: [1, 1.3, 0.7, 1],
//           }}
//           transition={{
//             duration: 30,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-500/7 rounded-full blur-3xl"
//         />

//         {/* Secondary accent orbs */}
//         <motion.div
//           animate={{
//             x: [0, -40, 20, 0],
//             y: [0, 30, -15, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/2 right-1/4 w-60 h-60 bg-cyan-500/4 rounded-full blur-2xl"
//         />
//       </div>

//       {/* Enhanced floating icons */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         {iconConfigs.map(
//           (
//             {
//               Icon,
//               x,
//               y,
//               scale,
//               opacity,
//               animateX,
//               animateY,
//               rotate,
//               duration,
//             },
//             index
//           ) => (
//             <motion.div
//               key={index}
//               initial={{ x, y, scale, opacity }}
//               animate={{
//                 x: [null, x + animateX, x - animateX / 2, x + animateX / 3],
//                 y: [null, y + animateY, y - animateY / 2, y + animateY / 3],
//                 rotate: [0, rotate, -rotate / 2, rotate / 3],
//               }}
//               transition={{
//                 duration,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//                 ease: "linear",
//               }}
//               className="absolute"
//             >
//               <Icon className="w-6 h-6 text-blue-400/20" />
//             </motion.div>
//           )
//         )}
//       </div>

//       {/* Enhanced Hero Section */}
//       <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-24 relative">
//         <motion.div style={{ y, opacity }} className="text-center space-y-8">
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ duration: 0.8, type: "spring" }}
//             className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md px-6 py-3 rounded-full border border-blue-400/30 shadow-xl"
//           >
//             <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
//             <span className="text-blue-300 font-semibold tracking-wide">
//               Pre-Launch Early Access
//             </span>
//             <Rocket className="w-5 h-5 text-indigo-400" />
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-5xl md:text-8xl font-black leading-tight"
//           >
//             <span className="block text-white">Your Ultimate</span>
//             <motion.span
//               className="block bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent"
//               animate={{
//                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//               }}
//               style={{
//                 backgroundSize: "200% 200%",
//               }}
//             >
//               Campus Companion
//             </motion.span>
//             {/* <span className="block text-white">is Coming Soon</span> */}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-200 leading-relaxed font-light"
//           >
//             Designed by students for students - connect with classmates,
//             discover events, share notes, and make the most of your university
//             experience.
//             <span className="text-blue-300 font-semibold">
//               {" "}
//               Join the waitlist today and get exclusive early access!
//             </span>
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.9 }}
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
//           >
//             <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold px-10 py-5 rounded-full text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
//               <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               <Star className="w-6 h-6 mr-3" />
//               Get Early Access
//             </Button>
//             <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-10 py-5 rounded-full text-lg border border-white/20 hover:border-white/30 transition-all duration-300">
//               See Features
//               <ArrowRight className="w-6 h-6 ml-3" />
//             </Button>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <ChevronDown className="w-8 h-8 text-blue-400 opacity-70" />
//         </motion.div>
//       </section>

//       {/* Enhanced Countdown Section */}
//       <section className="py-24 px-6 md:px-24 relative">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-4 text-4xl md:text-5xl font-bold text-blue-400 mb-12">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "linear",
//                 }}
//               >
//                 <Clock className="w-10 h-10" />
//               </motion.div>
//               <span>Early Bird Ends In</span>
//             </div>
//             <CountdownTimer />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-blue-400/20 shadow-2xl relative overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5"></div>

//             <div className="relative z-10 text-center space-y-10">
//               <motion.div
//                 animate={{ scale: [1, 1.05, 1] }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//                 className="inline-flex items-center gap-3 bg-blue-500/20 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-400/30"
//               >
//                 <Zap className="w-6 h-6 text-blue-400 animate-bounce" />
//                 <span className="text-blue-300 font-bold text-xl">
//                   STUDENT DISCOUNT
//                 </span>
//               </motion.div>

//               <div className="space-y-6">
//                 <div className="flex justify-center items-end gap-8">
//                   <span className="text-3xl text-gray-400 line-through">
//                     ₹2500
//                   </span>
//                   <motion.span
//                     className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
//                     animate={{ scale: [1, 1.02, 1] }}
//                     transition={{
//                       duration: 2,
//                       repeat: Number.POSITIVE_INFINITY,
//                     }}
//                   >
//                     ₹250
//                   </motion.span>
//                 </div>
//                 <p className="text-2xl text-blue-200">
//                   for the first 1000 students who sign up
//                 </p>
//               </div>

//               <div className="max-w-md mx-auto space-y-6">
//                 <div className="bg-gray-800/50 rounded-full h-6 overflow-hidden backdrop-blur-sm border border-white/10">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "87%" }}
//                     transition={{ duration: 2, delay: 0.5 }}
//                     className="bg-gradient-to-r from-blue-500 to-teal-500 h-full rounded-full relative"
//                   >
//                     <motion.div
//                       className="absolute right-0 top-0 w-6 h-6 bg-white rounded-full shadow-lg"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{
//                         duration: 1,
//                         repeat: Number.POSITIVE_INFINITY,
//                       }}
//                     />
//                   </motion.div>
//                 </div>
//                 <p className="text-blue-300 font-semibold text-lg">
//                   Only 130 spots remaining at this price!
//                 </p>
//               </div>

//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold px-16 py-8 rounded-2xl text-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300">
//                   <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                   <TrendingUp className="w-8 h-8 mr-4" />
//                   Claim Your Free Access
//                 </Button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Enhanced Features Section */}
//       <section className="py-24 px-6 md:px-24">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-7xl font-black mb-8">
//               Everything You Need for
//               <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
//                 Campus Success
//               </span>
//             </h2>
//             <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
//               We have built the tools you actually need, based on feedback from
//               500+ students
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {[
//               {
//                 title: "Class Notes Sharing",
//                 desc: "Upload, share, and discover study materials with your classmates. Never miss important lecture notes again.",
//                 badge: "Collaborative Learning",
//                 gradient: "from-blue-500/20 to-cyan-500/20",
//                 border: "border-blue-400/30",
//                 icon: Notebook,
//                 iconColor: "text-blue-400",
//                 benefits: [
//                   "Version control for shared documents",
//                   "Search across all shared notes",
//                   "Professor-verified materials",
//                   "Rating system for quality notes",
//                 ],
//               },
//               {
//                 title: "Campus Events",
//                 desc: "Discover all the parties, workshops, and club events happening on campus in one place.",
//                 badge: "Never Miss Out",
//                 gradient: "from-indigo-500/20 to-purple-500/20",
//                 border: "border-indigo-400/30",
//                 icon: Calendar,
//                 iconColor: "text-indigo-400",
//                 benefits: [
//                   "Personalized event recommendations",
//                   "RSVP with one tap",
//                   "Get reminders before events",
//                   "See who else is attending",
//                 ],
//               },
//               {
//                 title: "Study Groups",
//                 desc: "Find or create study groups for your courses. Collaborate in real-time with shared whiteboards.",
//                 badge: "Group Learning",
//                 gradient: "from-teal-500/20 to-emerald-500/20",
//                 border: "border-teal-400/30",
//                 icon: Users,
//                 iconColor: "text-teal-400",
//                 benefits: [
//                   "Schedule group sessions",
//                   "Shared task lists",
//                   "In-app video calling",
//                   "Subject-specific chat rooms",
//                 ],
//               },
//               {
//                 title: "Campus Deals",
//                 desc: "Exclusive student discounts at local restaurants, cafes, and shops near your campus.",
//                 badge: "Save Money",
//                 gradient: "from-cyan-500/20 to-blue-500/20",
//                 border: "border-cyan-400/30",
//                 icon: Pizza,
//                 iconColor: "text-cyan-400",
//                 benefits: [
//                   "Location-based deals",
//                   "Student ID verification",
//                   "Limited-time offers",
//                   "Cashback rewards",
//                 ],
//               },
//               {
//                 title: "Roommate Finder",
//                 desc: "Connect with potential roommates based on compatibility scores and living preferences.",
//                 badge: "Find Your Match",
//                 gradient: "from-violet-500/20 to-purple-500/20",
//                 border: "border-violet-400/30",
//                 icon: Building2,
//                 iconColor: "text-violet-400",
//                 benefits: [
//                   "Compatibility quiz",
//                   "Verified student profiles",
//                   "Neighborhood guides",
//                   "Lease comparison tools",
//                 ],
//               },
//               {
//                 title: "Textbook Exchange",
//                 desc: "Buy, sell, or trade textbooks with other students on campus. Save hundreds each semester.",
//                 badge: "Save on Books",
//                 gradient: "from-sky-500/20 to-blue-500/20",
//                 border: "border-sky-400/30",
//                 icon: BookOpen,
//                 iconColor: "text-sky-400",
//                 benefits: [
//                   "Price comparison tool",
//                   "Condition ratings",
//                   "Campus pickup spots",
//                   "Course-specific listings",
//                 ],
//               },
//             ].map((feature, index) => (
//               <FeatureCard key={index} feature={feature} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Student Engagement Hub */}
//       <StudentEngagementHub />

//       {/* Enhanced Student Testimonials */}
//       <section className="py-24 px-6 md:px-24 relative overflow-hidden">
//         {/* Background elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-6xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-md px-6 py-3 rounded-full border border-blue-400/20 mb-6">
//               <ThumbsUp className="w-5 h-5 text-blue-400" />
//               <span className="text-blue-300 font-semibold">
//                 Student Reviews
//               </span>
//             </div>

//             <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
//               What Students Are Saying
//             </h2>
//             <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
//               Real feedback from beta testers at universities across the country
//             </p>
//           </motion.div>

//           <div className="relative overflow-hidden">
//             <motion.div
//               className="flex gap-6"
//               animate={{
//                 x: [0, (-100 * 8) / 3 + "%"],
//               }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 32,
//                   ease: "linear",
//                 },
//               }}
//               onHoverStart={() => {}}
//               onHoverEnd={() => {}}
//               style={{
//                 willChange: "transform",
//               }}
//             >
//               {[
//                 {
//                   name: "Koshank",
//                   university: "Thapar University",
//                   course: "Computer Science",
//                   quote:
//                     "This app saved me so much time finding study groups and sharing notes. It's like LinkedIn but actually useful for students!",
//                   icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
//                   delay: 0.1,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Shubham",
//                   university: "Thapar University",
//                   course: "Mechanical Engineering",
//                   quote:
//                     "I found my perfect roommate through CampusConnect. We're both night owls who love indie music - match made in heaven!",
//                   icon: <Building2 className="w-6 h-6 text-teal-400" />,
//                   delay: 0.2,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Kanwar",
//                   university: "Thapar University",
//                   course: "Electronics Engineering",
//                   quote:
//                     "The textbook exchange feature alone has saved me over ₹700 this semester. Why didn't this exist when I was a freshman?",
//                   icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
//                   delay: 0.3,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Priya",
//                   university: "IIT Delhi",
//                   course: "Data Science",
//                   quote:
//                     "Finally found study partners who actually show up! The skill matching feature is brilliant - found people who complement my weaknesses.",
//                   icon: <Users className="w-6 h-6 text-purple-400" />,
//                   delay: 0.4,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Arjun",
//                   university: "BITS Pilani",
//                   course: "Software Engineering",
//                   quote:
//                     "The project collaboration feature helped me build an amazing portfolio. Got three internship offers thanks to connections made here!",
//                   icon: <Code className="w-6 h-6 text-green-400" />,
//                   delay: 0.5,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Sneha",
//                   university: "NIT Kurukshetra",
//                   course: "Chemical Engineering",
//                   quote:
//                     "Lab partner matching saved my grades! Found someone equally passionate about chemistry and we make a great team.",
//                   icon: <Beaker className="w-6 h-6 text-orange-400" />,
//                   delay: 0.6,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Rahul",
//                   university: "VIT Vellore",
//                   course: "Mathematics",
//                   quote:
//                     "The tutoring marketplace is incredible. I'm earning while helping juniors with calculus. Win-win situation!",
//                   icon: <Calculator className="w-6 h-6 text-pink-400" />,
//                   delay: 0.7,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Ananya",
//                   university: "Jadavpur University",
//                   course: "International Relations",
//                   quote:
//                     "Connected with exchange students from 5 different countries. My perspective on global politics has completely changed!",
//                   icon: <Globe className="w-6 h-6 text-cyan-400" />,
//                   delay: 0.8,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 // Duplicate the array for seamless loop
//                 {
//                   name: "Koshank",
//                   university: "Thapar University",
//                   course: "Computer Science",
//                   quote:
//                     "This app saved me so much time finding study groups and sharing notes. It's like LinkedIn but actually useful for students!",
//                   icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
//                   delay: 0.1,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Shubham",
//                   university: "Thapar University",
//                   course: "Mechanical Engineering",
//                   quote:
//                     "I found my perfect roommate through CampusConnect. We're both night owls who love indie music - match made in heaven!",
//                   icon: <Building2 className="w-6 h-6 text-teal-400" />,
//                   delay: 0.2,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Kanwar",
//                   university: "Thapar University",
//                   course: "Electronics Engineering",
//                   quote:
//                     "The textbook exchange feature alone has saved me over ₹700 this semester. Why didn't this exist when I was a freshman?",
//                   icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
//                   delay: 0.3,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Priya",
//                   university: "IIT Delhi",
//                   course: "Data Science",
//                   quote:
//                     "Finally found study partners who actually show up! The skill matching feature is brilliant - found people who complement my weaknesses.",
//                   icon: <Users className="w-6 h-6 text-purple-400" />,
//                   delay: 0.4,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Arjun",
//                   university: "BITS Pilani",
//                   course: "Software Engineering",
//                   quote:
//                     "The project collaboration feature helped me build an amazing portfolio. Got three internship offers thanks to connections made here!",
//                   icon: <Code className="w-6 h-6 text-green-400" />,
//                   delay: 0.5,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Sneha",
//                   university: "NIT Kurukshetra",
//                   course: "Chemical Engineering",
//                   quote:
//                     "Lab partner matching saved my grades! Found someone equally passionate about chemistry and we make a great team.",
//                   icon: <Beaker className="w-6 h-6 text-orange-400" />,
//                   delay: 0.6,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Rahul",
//                   university: "VIT Vellore",
//                   course: "Mathematics",
//                   quote:
//                     "The tutoring marketplace is incredible. I'm earning while helping juniors with calculus. Win-win situation!",
//                   icon: <Calculator className="w-6 h-6 text-pink-400" />,
//                   delay: 0.7,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//                 {
//                   name: "Ananya",
//                   university: "Jadavpur University",
//                   course: "International Relations",
//                   quote:
//                     "Connected with exchange students from 5 different countries. My perspective on global politics has completely changed!",
//                   icon: <Globe className="w-6 h-6 text-cyan-400" />,
//                   delay: 0.8,
//                   rating: 5,
//                   avatar: "/placeholder.svg?height=60&width=60",
//                 },
//               ].map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   whileHover={{
//                     y: -10,
//                     scale: 1.02,
//                     transition: { duration: 0.2 },
//                   }}
//                   animate={{
//                     scale: activeTestimonial === index ? 1.05 : 1,
//                     borderColor:
//                       activeTestimonial === index
//                         ? "rgba(96, 165, 250, 0.5)"
//                         : "rgba(255, 255, 255, 0.1)",
//                   }}
//                   transition={{ duration: 0.6, delay: testimonial.delay }}
//                   viewport={{ once: true }}
//                   className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden group min-w-[300px] max-w-[300px] flex-shrink-0"
//                   onMouseEnter={(e) => {
//                     setActiveTestimonial(index);
//                     e.currentTarget.closest(".flex").style.animationPlayState =
//                       "paused";
//                   }}
//                   onMouseLeave={(e) => {
//                     setActiveTestimonial(-1);
//                     e.currentTarget.closest(".flex").style.animationPlayState =
//                       "running";
//                   }}
//                 >
//                   {activeTestimonial === index && (
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   )}

//                   <div className="relative z-10">
//                     <div className="flex items-center gap-4 mb-6">
//                       <div className="relative">
//                         <img
//                           src={testimonial.avatar || "/placeholder.svg"}
//                           alt={testimonial.name}
//                           className="w-12 h-12 rounded-full border-2 border-white/20"
//                         />
//                         <div className="absolute -bottom-1 -right-1 p-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full">
//                           {testimonial.icon}
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="text-lg font-bold text-white">
//                           {testimonial.name}
//                         </h4>
//                         <p className="text-sm text-blue-300">
//                           {testimonial.university}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {testimonial.course}
//                         </p>
//                       </div>
//                     </div>

//                     <blockquote className="text-gray-300 italic text-base leading-relaxed mb-4">
//                       {`"${testimonial.quote}"`}
//                     </blockquote>

//                     <div className="flex items-center justify-between">
//                       <div className="flex">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <motion.div
//                             key={star}
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             transition={{ delay: star * 0.1 }}
//                           >
//                             <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                           </motion.div>
//                         ))}
//                       </div>
//                       <span className="text-xs text-gray-400">
//                         Verified Student
//                       </span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Stats & Waitlist Section */}
//       <section className="py-24 px-6 md:px-24">
//         <div className="max-w-6xl mx-auto text-center space-y-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-5xl md:text-6xl font-black mb-20 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
//               Join the Movement
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
//               {[
//                 {
//                   icon: Users,
//                   value: "5,842",
//                   label: "Students Waiting",
//                   color: "text-blue-400",
//                   bgColor: "from-blue-500/10 to-cyan-500/10",
//                 },
//                 {
//                   icon: Building2,
//                   value: "200+",
//                   label: "Campuses Covered",
//                   color: "text-indigo-400",
//                   bgColor: "from-indigo-500/10 to-purple-500/10",
//                 },
//                 {
//                   icon: GraduationCap,
//                   value: "50+",
//                   label: "Universities Partnered",
//                   color: "text-teal-400",
//                   bgColor: "from-teal-500/10 to-emerald-500/10",
//                 },
//                 {
//                   icon: Trophy,
//                   value: "₹10L+",
//                   label: "Scholarships Won",
//                   color: "text-yellow-400",
//                   bgColor: "from-yellow-500/10 to-orange-500/10",
//                 },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   whileHover={{ y: -15, scale: 1.05 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className={`bg-gradient-to-br ${stat.bgColor} backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group`}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   <div className="relative z-10">
//                     <motion.div
//                       whileHover={{ rotate: 360, scale: 1.2 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <stat.icon
//                         className={`w-12 h-12 ${stat.color} mx-auto mb-4`}
//                       />
//                     </motion.div>
//                     <motion.div
//                       className={`text-4xl font-bold ${stat.color} mb-2`}
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ duration: 1, delay: index * 0.2 }}
//                     >
//                       {stat.value}
//                     </motion.div>
//                     <div className="text-gray-300 font-medium">
//                       {stat.label}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="max-w-2xl mx-auto"
//             >
//               <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5"></div>

//                 <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
//                     <Mail className="w-6 h-6 text-blue-400" />
//                     Join our waitlist for early access
//                   </h3>

//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <div className="flex-1 relative">
//                       <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                       <input
//                         type="email"
//                         placeholder="Enter your student email"
//                         className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
//                       />
//                     </div>
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
//                         Join Waitlist
//                       </Button>
//                     </motion.div>
//                   </div>

//                   <p className="text-sm text-blue-300 mt-4 flex items-center justify-center gap-2">
//                     <Check className="w-4 h-4 text-green-400" />
//                     We will send you an exclusive invite when we launch
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Enhanced Final CTA */}
//       <section className="py-24 px-6 md:px-24">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-md rounded-3xl p-16 border border-blue-400/20 shadow-2xl relative overflow-hidden"
//         >
//           <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl"></div>

//           <div className="relative z-10">
//             <motion.div
//               animate={{ rotate: [0, 5, -5, 0] }}
//               transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
//               className="inline-block mb-8"
//             >
//               <Rocket className="w-16 h-16 text-blue-400" />
//             </motion.div>

//             <h2 className="text-5xl md:text-6xl font-black mb-8">
//               Ready to Transform Your
//               <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
//                 Campus Experience?
//               </span>
//             </h2>

//             <p className="text-xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto">
//               Join thousands of students who are already revolutionizing their
//               university life. Sign up now for exclusive early access and
//               premium features at no cost.
//             </p>

//             <div className="flex flex-col sm:flex-row justify-center gap-8">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold px-12 py-6 rounded-full text-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300">
//                   <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                   <Star className="w-7 h-7 mr-4" />
//                   Get Free Early Access
//                 </Button>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-12 py-6 rounded-full text-xl border border-white/20 hover:border-white/40 transition-all duration-300">
//                   See All Features
//                   <ArrowRight className="w-7 h-7 ml-4" />
//                 </Button>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Enhanced Footer */}
//       <footer className="py-16 px-6 border-t border-white/10 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//             <div className="md:col-span-2">
//               <div className="flex items-center gap-3 mb-6">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 8,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "linear",
//                   }}
//                 >
//                   <Rocket className="w-10 h-10 text-blue-400" />
//                 </motion.div>
//                 <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
//                   CampusConnect
//                 </span>
//               </div>
//               <p className="text-blue-200 text-lg leading-relaxed mb-6">
//                 Empowering students to connect, learn, and grow together. Built
//                 by students, for students.
//               </p>
//               <div className="flex gap-4">
//                 {[
//                   { icon: MessageSquare, label: "Discord" },
//                   { icon: Users, label: "Community" },
//                   { icon: Mail, label: "Newsletter" },
//                 ].map((social, index) => (
//                   <motion.button
//                     key={index}
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
//                   >
//                     <social.icon className="w-5 h-5 text-blue-400" />
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h4 className="text-white font-bold text-lg mb-4">Product</h4>
//               <ul className="space-y-3">
//                 {["Features", "Pricing", "Roadmap", "Beta Access"].map(
//                   (item, index) => (
//                     <li key={index}>
//                       <a
//                         href="#"
//                         className="text-blue-300 hover:text-white transition-colors"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-bold text-lg mb-4">Support</h4>
//               <ul className="space-y-3">
//                 {["Help Center", "Contact", "Privacy", "Terms"].map(
//                   (item, index) => (
//                     <li key={index}>
//                       <a
//                         href="#"
//                         className="text-blue-300 hover:text-white transition-colors"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-blue-300 text-sm mb-4 md:mb-0">
//               © {new Date().getFullYear()} CampusConnect. Made with ❤️ by
//               students, for students.
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-400">
//               <span>Powered by</span>
//               <span className="text-blue-400 font-semibold">Next.js</span>
//               <span>•</span>
//               <span className="text-teal-400 font-semibold">Framer Motion</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// };

// export default Home;

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  Rocket,
  Clock,
  MessageSquare,
  Users,
  Building2,
  GraduationCap,
  Star,
  ArrowRight,
  Calendar,
  Target,
  ChevronDown,
  Mail,
  TrendingUp,
  Bookmark,
  Notebook,
  Check,
  ThumbsUp,
  MapPin,
  ShoppingBag,
  Globe,
  Trophy,
  Code,
  Lightbulb,
  Palette,
  Leaf,
  Briefcase,
  Share2,
  Bell,
  ExternalLink,
  X,
  Play,
  Gift,
  Flame,
  ZapIcon,
} from "lucide-react";
import { Disclosure } from "@headlessui/react";

// Pop-up Notification Component
const PopupNotification = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -100, scale: 0.9 }}
      className="fixed top-6 right-6 z-50 bg-white border-l-4 border-teal-500 rounded-xl shadow-xl p-5 max-w-sm w-full"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {type === "success" && (
            <div className="w-9 h-9 bg-teal-500 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
          )}
          {type === "info" && (
            <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <p className="text-gray-800 font-semibold text-sm leading-snug">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

// Floating Action Button
const FloatingActionButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-teal-500/50 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Gift className="w-6 h-6" />
    </motion.button>
  );
};

// Enhanced Student Hub Component with completely new design
const StudentEngagementHub = () => {
  const [activeTab, setActiveTab] = useState("competitions");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const competitions = [
    {
      id: 1,
      title: "IFSA Trader's Cup 2025",
      organizer: "IFSA Network",
      type: "Online",
      isPaid: true,
      stats: "7 Applied",
      category: "finance",
      prize: "₹50,000",
      deadline: "15 days left",
      difficulty: "Intermediate",
      participants: 1247,
      image: "/ifsa.jpeg?height=200&width=300",
      tags: ["Trading", "Finance", "Analytics"],
      featured: true,
    },
    {
      id: 2,
      title: "Avinya - 2025: Prakriti Ecoinovate Challenge",
      organizer: "IIT Guwahati",
      type: "Hybrid",
      isPaid: false,
      stats: "17 Applied",
      category: "sustainability",
      prize: "₹1,00,000",
      deadline: "22 days left",
      difficulty: "Advanced",
      participants: 892,
      image: "/avinya.jpeg?height=200&width=300",
      tags: ["Sustainability", "Innovation", "Environment"],
      featured: false,
    },
    {
      id: 3,
      title: "Memonomist 25AD - Nation Wide Meme Crafting",
      organizer: "M S Ramaiah University",
      type: "Online",
      isPaid: false,
      stats: "2,496 Views",
      category: "creative",
      prize: "₹25,000",
      deadline: "8 days left",
      difficulty: "Beginner",
      participants: 3421,
      image: "/meme.jpg?height=200&width=300",
      tags: ["Creative", "Design", "Humor"],
      featured: false,
    },
    {
      id: 4,
      title: "Textify Analytics: Data Science Challenge",
      organizer: "Textify AI",
      type: "Online",
      isPaid: false,
      stats: "289 Applied",
      category: "tech",
      prize: "₹75,000",
      deadline: "12 days left",
      difficulty: "Advanced",
      participants: 1856,
      image: "/image.jpg?height=200&width=300",
      tags: ["AI", "Data Science", "Machine Learning"],
      featured: true,
    },
  ];

  const hackathons = [
    {
      id: 101,
      title: "Hack the Future 2025",
      organizer: "Global Tech Foundation",
      type: "Hybrid",
      isPaid: false,
      stats: "1,024 Registered",
      prize: "₹2,50,000",
      deadline: "5 days left",
      duration: "48 hours",
      location: "Bangalore + Virtual",
      image: "/future.jpg?height=200&width=300",
      tags: ["Web3", "AI", "Blockchain"],
      featured: true,
    },
    {
      id: 102,
      title: "Blockchain Innovation Challenge",
      organizer: "Crypto University",
      type: "Online",
      isPaid: false,
      stats: "532 Teams",
      prize: "10 ETH",
      deadline: "18 days left",
      duration: "72 hours",
      location: "Virtual",
      image: "/blockchain.jpg?height=200&width=300",
      tags: ["Blockchain", "DeFi", "Smart Contracts"],
      featured: false,
    },
  ];

  const events = [
    {
      id: 201,
      title: "TechFest - Annual Technical Symposium",
      organizer: "IIT Bombay",
      type: "On-Campus",
      isPaid: false,
      stats: "1.2K Going",
      category: "tech",
      date: "December 27-29, 2025",
      time: "9:00 AM - 9:00 PM",
      location: "IIT Bombay Campus",
      image: "/IITBT.jpg?height=200&width=300",
      tags: ["Robotics", "AI", "Workshops"],
      featured: true,
      college: "IIT Bombay",
    },
    {
      id: 202,
      title: "E-Summit: Entrepreneurship Conclave",
      organizer: "IIM Bangalore",
      type: "Hybrid",
      isPaid: true,
      stats: "450 Registered",
      category: "business",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "IIMB Campus + Online",
      image: "/IIM.jpg?height=200&width=300",
      tags: ["Startups", "Investors", "Pitching"],
      featured: true,
      college: "IIM Bangalore",
    },
    {
      id: 203,
      title: "Culrav - Cultural Festival",
      organizer: "NIT Trichy",
      type: "On-Campus",
      isPaid: false,
      stats: "3.5K Interested",
      category: "creative",
      date: "February 10-13, 2025",
      time: "All Day",
      location: "NIT Trichy Campus",
      image: "/Culrav.jpg?height=200&width=300",
      tags: ["Music", "Dance", "Drama"],
      featured: false,
      college: "NIT Trichy",
    },
    {
      id: 204,
      title: "TEDxThaparUniversity",
      organizer: "Thapar University",
      type: "On-Campus",
      isPaid: true,
      stats: "200 Seats Left",
      category: "general",
      date: "April 5, 2025",
      time: "2:00 PM - 7:00 PM",
      location: "Thapar University Auditorium",
      image: "/ted.jpg?height=200&width=300",
      tags: ["Ideas", "Inspiration", "Talks"],
      featured: false,
      college: "Thapar University",
    },
  ];

  const categories = [
    { id: "all", name: "All", icon: Globe, count: 6 },
    { id: "tech", name: "Tech", icon: Code, count: 2 },
    { id: "finance", name: "Finance", icon: TrendingUp, count: 1 },
    { id: "creative", name: "Creative", icon: Palette, count: 1 },
    { id: "sustainability", name: "Green", icon: Leaf, count: 1 },
    { id: "business", name: "Business", icon: Briefcase, count: 1 },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* New Header Design */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-6 py-2 rounded-full font-semibold mb-6"
          >
            <Flame className="w-4 h-4" />
            Trending Opportunities
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Your Next Big
            <span className="block text-teal-600">Opportunity Awaits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover competitions, hackathons, and events that will shape your
            future
          </p>
        </div>

        {/* New Tab Design - Horizontal Pills */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 inline-flex">
            {[
              {
                id: "competitions",
                label: "Competitions",
                icon: Trophy,
                count: competitions.length,
              },
              {
                id: "hackathons",
                label: "Hackathons",
                icon: Code,
                count: hackathons.length,
              },
              { id: "events", label: "Events", icon: Calendar, count: 4 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === tab.id
                    ? "bg-teal-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-teal-100 text-teal-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* New Layout - Sidebar + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 sticky top-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-500" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-teal-500 text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="flex-1 text-left">{category.name}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          selectedCategory === category.id
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  {[
                    {
                      label: "Active Now",
                      value: "24",
                      color: "text-green-600",
                    },
                    { label: "This Week", value: "8", color: "text-blue-600" },
                    {
                      label: "Prize Pool",
                      value: "₹50L+",
                      color: "text-purple-600",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-600 text-sm">
                        {stat.label}
                      </span>
                      <span className={`font-bold ${stat.color}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-teal-500" />
                  Stay Updated
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Get the latest opportunities delivered to your inbox
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-gray-700 focus:ring-teal-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:shadow-md transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeTab === "competitions" && (
                <motion.div
                  key="competitions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {competitions.map((comp, index) => (
                    <motion.div
                      key={comp.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                    >
                      {comp.featured && (
                        <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                          ⭐ Featured Competition
                        </div>
                      )}

                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={comp.image || "/placeholder.svg"}
                          alt={comp.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              comp.isPaid
                                ? "bg-red-500 text-white"
                                : "bg-green-500 text-white"
                            }`}
                          >
                            {comp.isPaid ? "Paid" : "Free"}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-bold text-lg text-gray-900 line-clamp-2 flex-1">
                            {comp.title}
                          </h3>
                          <div className="ml-2 flex-shrink-0">
                            <span
                              className={`px-2 py-1 rounded-lg text-xs font-bold ${
                                comp.difficulty === "Beginner"
                                  ? "bg-green-100 text-green-700"
                                  : comp.difficulty === "Intermediate"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {comp.difficulty}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">
                          {comp.organizer}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {comp.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold text-yellow-600">
                              {comp.prize}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-red-500" />
                            <span className="text-gray-600">
                              {comp.deadline}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white rounded-xl">
                            Apply Now
                          </Button>
                          <Button
                            variant="outline"
                            className="px-4 rounded-xl border-gray-300 bg-transparent"
                          >
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "hackathons" && (
                <motion.div
                  key="hackathons"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {hackathons.map((hack, index) => (
                    <motion.div
                      key={hack.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                          <img
                            src={hack.image || "/placeholder.svg"}
                            alt={hack.title}
                            className="w-full h-full object-cover"
                          />
                          {hack.featured && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-8 md:w-2/3">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="font-bold text-2xl text-gray-900 flex-1">
                              {hack.title}
                            </h3>
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                              {hack.type}
                            </span>
                          </div>

                          <p className="text-gray-600 mb-4">{hack.organizer}</p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {hack.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-blue-500" />
                              <span className="text-gray-600 text-sm">
                                {hack.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-orange-500" />
                              <span className="text-gray-600 text-sm">
                                {hack.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Trophy className="w-4 h-4 text-yellow-500" />
                              <span className="font-semibold text-yellow-600">
                                {hack.prize}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Users className="w-5 h-5 text-green-500" />
                              <span className="font-medium text-gray-700">
                                {hack.stats}
                              </span>
                            </div>
                            <div className="flex gap-3">
                              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 rounded-xl">
                                Register Now
                              </Button>
                              <Button
                                variant="outline"
                                className="px-4 rounded-xl border-gray-300 bg-transparent"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "events" && (
                <motion.div
                  key="events"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                      {event.featured && (
                        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-2 text-sm font-semibold">
                          🎉 Featured Event
                        </div>
                      )}

                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              event.isPaid
                                ? "bg-red-500 text-white"
                                : "bg-green-500 text-white"
                            }`}
                          >
                            {event.isPaid ? "Paid" : "Free"}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                          {event.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                            {event.college}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="space-y-2 mb-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span className="text-gray-600">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600">
                              {event.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl">
                            Register
                          </Button>
                          <Button
                            variant="outline"
                            className="px-4 rounded-xl border-gray-300 bg-transparent"
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Countdown Timer with new design
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);
    targetDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 max-w-md mx-auto">
      {[
        {
          value: timeLeft.days,
          label: "Days",
          color: "from-teal-500 to-blue-500",
        },
        {
          value: timeLeft.hours,
          label: "Hours",
          color: "from-blue-500 to-indigo-500",
        },
        {
          value: timeLeft.minutes,
          label: "Mins",
          color: "from-indigo-500 to-purple-500",
        },
        {
          value: timeLeft.seconds,
          label: "Secs",
          color: "from-purple-500 to-pink-500",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <div
            className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-4 shadow-lg min-w-[80px]`}
          >
            <motion.div
              key={item.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl font-black"
            >
              {item.value.toString().padStart(2, "0")}
            </motion.div>
          </div>
          <div className="text-sm text-gray-600 font-semibold mt-2 uppercase tracking-wider">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// New Feature Card Design
const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <feature.icon className="w-8 h-8 text-white" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {feature.title}
            </h3>
            <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold mt-1">
              {feature.badge}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {feature.desc}
        </p>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
            >
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-500" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <Button className="mt-6 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-xl px-6 py-3 font-semibold">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [notifications, setNotifications] = useState([]);
  const [showFloatingButton, setShowFloatingButton] = useState(true);

  // Add notification function
  const addNotification = (message, type = "success") => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
  };

  // Remove notification function
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  // Auto-trigger notifications
  useEffect(() => {
    const timers = [
      setTimeout(
        () =>
          addNotification("🎉 Sannidhya just joined from IIT Delhi!", "info"),
        2000
      ),
      setTimeout(
        () =>
          addNotification(
            "⚡ 50+ students signed up in the last hour!",
            "success"
          ),
        10000
      ),
      setTimeout(
        () =>
          addNotification(
            "🔥 Limited spots remaining – only 130 left!",
            "info"
          ),
        18000
      ),
      setTimeout(
        () =>
          addNotification(
            "🚀 Riya just created a group for Hackathons!",
            "info"
          ),
        27000
      ),
      setTimeout(
        () =>
          addNotification(
            "🎯 CampusConnect is now live at NIT Trichy!",
            "success"
          ),
        35000
      ),
      setTimeout(
        () =>
          addNotification(
            "💬 New discussion thread started by Ankur from VIT!",
            "info"
          ),
        47000
      ),
      setTimeout(
        () =>
          addNotification(
            "🥳 Aastha invited 3 friends from BITS Pilani!",
            "info"
          ),
        59000
      ),
      setTimeout(
        () => addNotification("⏳ Hurry! Registrations closing soon.", "info"),
        71000
      ),
      setTimeout(
        () =>
          addNotification(
            "✅ You’re all set. Start exploring your campus network!",
            "success"
          ),
        85000
      ),
      setTimeout(
        () =>
          addNotification(
            "📣 Just announced: CampusConnect Fest at IIT Bombay!",
            "info"
          ),
        57000
      ),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="font-sans bg-white relative overflow-hidden">
      {/* Notifications */}
      <div className="fixed top-0 right-0 z-50 space-y-2 p-4">
        <AnimatePresence>
          {notifications.map((notification) => (
            <PopupNotification
              key={notification.id}
              message={notification.message}
              type={notification.type}
              onClose={() => removeNotification(notification.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Action Button */}
      {showFloatingButton && (
        <FloatingActionButton
          onClick={() =>
            addNotification(
              "🎁 Special offer unlocked! Check your email.",
              "success"
            )
          }
        />
      )}

      {/* New Hero Section Design */}
      <section className="relative min-h-screen bg-white overflow-hidden text-gray-900 font-sans">
        {/* Blurred blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              x: [0, 120, -100, 0],
              y: [0, -100, 80, 0],
              scale: [1, 1.5, 1.2, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: [0.445, 0.05, 0.55, 0.95],
            }}
            className="absolute top-20 left-16 w-[30rem] h-[30rem] bg-teal-500/20 rounded-full blur-[140px] z-0"
          />
          <motion.div
            animate={{ x: [0, -120, 100, 0], y: [0, 80, -60, 0] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: [0.445, 0.05, 0.55, 0.95],
            }}
            className="absolute bottom-24 right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] z-0"
          />
          <motion.div
            animate={{ y: [0, -60, 0] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: [0.445, 0.05, 0.55, 0.95],
            }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-sky-500/10 rounded-full blur-[90px] z-0"
          />
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, 10, -10, 0],
                x: [0, -5, 5, 0],
                opacity: [0.4, 0.7, 0.5, 0.4],
              }}
              transition={{
                duration: 12 + i,
                repeat: Infinity,
                ease: [0.445, 0.05, 0.55, 0.95],
                delay: i * 0.3,
              }}
              className="absolute w-4 h-4 rounded-full bg-black/5 backdrop-blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] z-0 pointer-events-none" />

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center px-6 min-h-screen">
          <div className="text-center max-w-6xl mx-auto space-y-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="inline-flex items-center gap-3 bg-teal-50 px-6 py-3 rounded-full border border-teal-200 shadow-md"
            >
              <ZapIcon className="w-5 h-5 text-teal-600" />
              <span className="text-teal-800 font-medium text-lg tracking-wide">
                Now Accepting Early Access
              </span>
              <Sparkles className="w-5 h-5 text-blue-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900"
            >
              <span className="block">Your Campus Life,</span>
              <span className="block bg-gradient-to-r from-teal-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
                Supercharged.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              From notes to networking, events to essentials — discover
              everything you need in one place.
              <span className="block text-teal-600 font-semibold mt-3">
                Already trusted by 5,000+ students across 100+ campuses.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-xl blur-xl bg-gradient-to-r from-teal-500 to-blue-500 opacity-30 group-hover:opacity-60 transition duration-300" />
                <Button className="relative z-10 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-lg transition-all duration-300 hover:scale-105">
                  <Star className="w-5 h-5 mr-2" />
                  Get Early Access
                </Button>
              </div>
              <Button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-10 py-5 rounded-xl text-lg border border-gray-300 hover:border-gray-400 transition-all duration-300">
                Watch Demo
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70 z-10"
        >
          <ChevronDown className="w-8 h-8 text-teal-500" />
        </motion.div>
      </section>

      {/* New Countdown Section Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Timer Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-4 text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Clock className="w-10 h-10 text-teal-500" />
              </motion.div>
              <span>Early Bird Ends In</span>
            </div>
            <CountdownTimer />
          </motion.div>

          {/* Price Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl px-6 py-10 md:px-10 md:py-14 shadow-xl border border-gray-200 relative overflow-hidden max-w-3xl mx-auto"
          >
            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 to-blue-500" />

            <div className="text-center space-y-8">
              {/* Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-6 py-2 rounded-full font-bold text-sm md:text-base"
              >
                <Flame className="w-5 h-5" />
                STUDENT SPECIAL
              </motion.div>

              {/* Pricing */}
              <div className="space-y-4">
                <div className="flex justify-center items-end gap-6">
                  <span className="text-2xl text-gray-400 line-through font-semibold">
                    ₹2500
                  </span>
                  <motion.span
                    className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ₹250
                  </motion.span>
                </div>
                <p className="text-lg text-gray-700 font-medium">
                  for the first 1000 students
                </p>
              </div>

              {/* Progress Bar */}
              <div className="max-w-sm mx-auto space-y-4">
                <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="bg-gradient-to-r from-teal-500 to-blue-500 h-full rounded-full relative"
                  >
                    <motion.div
                      className="absolute right-0 top-0 w-4 h-4 bg-white rounded-full shadow-md border-2 border-teal-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
                <p className="text-teal-600 font-semibold text-sm md:text-base">
                  Only 130 spots remaining!
                </p>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-md hover:shadow-teal-500/40 transition-all duration-300 mt-4">
                  <Gift className="w-6 h-6 mr-2" />
                  Claim Your Spot
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Engagement Hub - Moved here after discount section */}
      <StudentEngagementHub />

      {/* Universities Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Students from all over the country
              <span className="block text-teal-600">
                from these colleges are with us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students from top universities who are already
              revolutionizing their campus experience
            </p>
          </motion.div>

          {/* Scrolling Universities Container */}
          <div className="relative overflow-hidden py-8">
            <div className="flex items-center">
              <motion.div
                className="flex"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {/* Logos list defined once and duplicated manually for seamless loop */}
                {[
                  ...[
                    { src: "/iit-delhi.png", alt: "IIT Delhi" },
                    { src: "/iit-bombay.png", alt: "IIT Bombay" },
                    { src: "/iit-madras.png", alt: "IIT Madras" },
                    { src: "/bits-pilani.png", alt: "BITS Pilani" },
                    { src: "/nit-trichy.png", alt: "NIT Trichy" },
                    { src: "/thapar.png", alt: "Thapar University" },
                    { src: "/du.png", alt: "Delhi University" },
                    { src: "/iim-bangalore.png", alt: "IIM Bangalore" },
                    { src: "/iisc.jpg", alt: "IISc Bangalore" },
                    { src: "/vit.png", alt: "VIT Vellore" },
                  ],
                  ...[
                    { src: "/iit-delhi.png", alt: "IIT Delhi" },
                    { src: "/iit-bombay.png", alt: "IIT Bombay" },
                    { src: "/iit-madras.png", alt: "IIT Madras" },
                    { src: "/bits-pilani.png", alt: "BITS Pilani" },
                    { src: "/nit-trichy.png", alt: "NIT Trichy" },
                    { src: "/thapar.png", alt: "Thapar University" },
                    { src: "/du.png", alt: "Delhi University" },
                    { src: "/iim-bangalore.png", alt: "IIM Bangalore" },
                    { src: "/iisc.jpg", alt: "IISc Bangalore" },
                    { src: "/vit.png", alt: "VIT Vellore" },
                  ],
                ].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-32 mx-4"
                  >
                    <div className="w-28 h-28 flex items-center justify-center bg-white rounded-md shadow-md mb-2">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <p className="text-sm text-gray-700 text-center">
                      {logo.alt}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* Campus Ambassador Program */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-6 py-2 rounded-full font-semibold mb-6">
              <Users className="w-5 h-5" />
              Leadership Opportunity
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Become a Campus
              <span className="block bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
                Ambassador
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Represent CampusConnect at your university and earn exclusive
              rewards while building your leadership skills.
            </p>
          </motion.div>

          {/* Program Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Trophy,
                title: "Exclusive Rewards",
                desc: "Earn swag, premium features, and stipends based on your performance.",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: Briefcase,
                title: "Career Boost",
                desc: "Get priority access to internships and recommendation letters.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Share2,
                title: "Expand Network",
                desc: "Connect with ambassadors from top universities nationwide.",
                color: "from-teal-500 to-emerald-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
              How to Apply
            </h3>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  desc: "Complete our online form with your details and why you'd be a great ambassador.",
                },
                {
                  step: "2",
                  title: "Interview",
                  desc: "Short video call with our team to discuss your campus influence.",
                },
                {
                  step: "3",
                  title: "Onboarding",
                  desc: "Training session and welcome kit to get you started.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 text-center"
            >
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-md hover:shadow-purple-500/40 transition-all duration-300">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Features Section Design */}
      <section className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full font-semibold mb-6">
              <Lightbulb className="w-5 h-5" />
              Designed for Students
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Built to Supercharge Your
              <span className="block bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text">
                Campus Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are more than features — they’re your everyday campus
              superpowers.
            </p>
          </motion.div>

          {/* Vertical Feature Timeline */}
          <div className="relative border-l-4 border-dashed border-teal-300 pl-8 space-y-24">
            {[
              {
                title: "Smart Note Sharing",
                desc: "Upload, organize, and discover study materials with AI-powered search and recommendations.",
                badge: "AI-Powered",
                icon: Notebook,
                benefits: [
                  "OCR text recognition",
                  "Smart categorization",
                  "Collaborative editing",
                  "Version history tracking",
                ],
              },
              {
                title: "Campus Events Hub",
                desc: "Never miss out on parties, workshops, or club activities happening around campus.",
                badge: "Real-time Updates",
                icon: Calendar,
                benefits: [
                  "Personalized recommendations",
                  "One-tap RSVP",
                  "Calendar integration",
                  "Friend activity feed",
                ],
              },
              {
                title: "Study Group Matcher",
                desc: "Find your perfect study partners using our compatibility algorithm and shared interests.",
                badge: "Smart Matching",
                icon: Users,
                benefits: [
                  "Skill-based matching",
                  "Schedule coordination",
                  "Virtual study rooms",
                  "Progress tracking",
                ],
              },
              {
                title: "Campus Marketplace",
                desc: "Buy, sell, and trade textbooks, furniture, and other essentials with verified students.",
                badge: "Secure Trading",
                icon: ShoppingBag,
                benefits: [
                  "Price comparison",
                  "Condition verification",
                  "Safe payment system",
                  "Campus pickup points",
                ],
              },
              {
                title: "Roommate Finder",
                desc: "Connect with compatible roommates based on lifestyle preferences and personality.",
                badge: "Compatibility Score",
                icon: Building2,
                benefits: [
                  "Detailed compatibility quiz",
                  "Verified student profiles",
                  "Neighborhood insights",
                  "Lease management tools",
                ],
              },
              {
                title: "Student Discounts",
                desc: "Access exclusive deals and discounts at local restaurants, cafes, and online stores.",
                badge: "Save Money",
                icon: Gift,
                benefits: [
                  "Location-based offers",
                  "Student ID verification",
                  "Cashback rewards",
                  "Group buying discounts",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-10 top-2 w-8 h-8 bg-white border-4 border-teal-500 rounded-full flex items-center justify-center shadow-md z-10">
                  <feature.icon className="w-5 h-5 text-teal-600" />
                </div>
                <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 group hover:shadow-2xl transition">
                  <span className="inline-block mb-3 text-sm font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500">
                    {feature.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">{feature.desc}</p>
                  <ul className="list-disc list-inside text-gray-500 text-base space-y-1 pl-2">
                    {feature.benefits.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold mb-6">
              <Sparkles className="w-5 h-5" />
              Why Choose Us
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              The Complete Campus
              <span className="block bg-gradient-to-r from-blue-500 to-sky-600 text-transparent bg-clip-text">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how CampusConnect compares to other student platforms.
            </p>
          </motion.div>

          {/* Table */}
          <div className="overflow-x-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 min-w-[800px]"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-6 px-8 text-left font-bold text-gray-900 text-lg bg-gray-50 rounded-tl-2xl">
                      Features
                    </th>
                    <th className="py-6 px-8 text-center font-bold text-gray-900">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">CampusConnect</span>
                        <span className="text-sm font-normal text-blue-600 mt-1">
                          All-in-One Solution
                        </span>
                      </div>
                    </th>
                    <th className="py-6 px-8 text-center font-bold text-gray-900">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Competitor A</span>
                        <span className="text-sm font-normal text-gray-500 mt-1">
                          Notes Sharing
                        </span>
                      </div>
                    </th>
                    <th className="py-6 px-8 text-center font-bold text-gray-900 rounded-tr-2xl">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Competitor B</span>
                        <span className="text-sm font-normal text-gray-500 mt-1">
                          Events Platform
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Study Material Sharing",
                      campusconnect: "✅ AI-Powered",
                      competitorA: "✅ Basic",
                      competitorB: "❌ Not Available",
                    },
                    {
                      feature: "Campus Events",
                      campusconnect: "✅ Integrated",
                      competitorA: "❌ Not Available",
                      competitorB: "✅ Standalone",
                    },
                    {
                      feature: "Student Marketplace",
                      campusconnect: "✅ Secure Trading",
                      competitorA: "❌ Not Available",
                      competitorB: "❌ Not Available",
                    },
                    {
                      feature: "Study Group Finder",
                      campusconnect: "✅ Smart Matching",
                      competitorA: "❌ Not Available",
                      competitorB: "❌ Not Available",
                    },
                    {
                      feature: "Student Discounts",
                      campusconnect: "✅ Curated Deals",
                      competitorA: "❌ Not Available",
                      competitorB: "❌ Not Available",
                    },
                    {
                      feature: "Mobile App",
                      campusconnect: "✅ iOS & Android",
                      competitorA: "✅ Android Only",
                      competitorB: "✅ iOS Only",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } ${index === 5 ? "rounded-b-2xl" : ""}`}
                    >
                      <td className="py-5 px-8 font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="py-5 px-8 text-center">
                        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold">
                          {row.campusconnect.startsWith("✅") && (
                            <Check className="w-4 h-4" />
                          )}
                          {row.campusconnect.replace("✅ ", "")}
                        </span>
                      </td>
                      <td className="py-5 px-8 text-center text-gray-600">
                        {row.competitorA.startsWith("✅") ? (
                          <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                            <Check className="w-4 h-4" />
                            {row.competitorA.replace("✅ ", "")}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full">
                            <X className="w-4 h-4" />
                            {row.competitorA.replace("❌ ", "")}
                          </span>
                        )}
                      </td>
                      <td className="py-5 px-8 text-center text-gray-600">
                        {row.competitorB.startsWith("✅") ? (
                          <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                            <Check className="w-4 h-4" />
                            {row.competitorB.replace("✅ ", "")}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full">
                            <X className="w-4 h-4" />
                            {row.competitorB.replace("❌ ", "")}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button className="bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-md hover:shadow-blue-500/40 transition-all duration-300">
              Start Your Campus Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-6 py-2 rounded-full font-semibold mb-6">
              <ThumbsUp className="w-4 h-4" />
              Student Love
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
              What Students Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real feedback from beta testers across top universities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Koshank",
                university: "Thapar University",
                course: "Computer Science",
                quote:
                  "This app saved me so much time finding study groups. It's like LinkedIn but actually useful for students!",
                avatar: "/placeholder.png?height=60&width=60",
                rating: 5,
              },
              {
                name: "Priya",
                university: "IIT Delhi",
                course: "Data Science",
                quote:
                  "Finally found study partners who actually show up! The matching feature is brilliant.",
                avatar: "/placeholder.png?height=60&width=60",
                rating: 5,
              },
              {
                name: "Arjun",
                university: "BITS Pilani",
                course: "Software Engineering",
                quote:
                  "The project collaboration feature helped me build an amazing portfolio. Got three internship offers!",
                avatar: "/placeholder.png?height=60&width=60",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-teal-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-teal-600 font-semibold">
                      {testimonial.university}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.course}
                    </p>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Stats & Waitlist Section */}
      <section className="py-28 bg-gradient-to-br from-teal-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 bg-cyan-400 rounded-full opacity-20 blur-3xl top-[-60px] left-[-60px] animate-pulse" />
          <div className="absolute w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl bottom-[-80px] right-[-80px] animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-20 animate-fade-in-up">
              <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Join the Revolution
              </span>
            </h2>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
              {[
                {
                  icon: Users,
                  value: "5,842",
                  label: "Students Waiting",
                },
                {
                  icon: Building2,
                  value: "200+",
                  label: "Campuses",
                },
                {
                  icon: GraduationCap,
                  value: "50+",
                  label: "Universities",
                },
                {
                  icon: Trophy,
                  value: "₹10L+",
                  label: "Scholarships",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <stat.icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Waitlist Box */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-white" />
                  Get notified when we launch
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your student email"
                    className="flex-1 px-6 py-4 bg-white rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold">
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-sm text-blue-100 mt-4 flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  Free early access for first 1000 students
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-6 py-2 rounded-full font-semibold mb-6">
              <MessageSquare className="w-5 h-5" />
              Need Help?
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Frequently Asked
              <span className="block bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about CampusConnect.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {[
              {
                question: "Is CampusConnect free for students?",
                answer:
                  "Yes! Our core platform is completely free for students. We offer premium features at affordable rates, but all essential tools for campus life are available at no cost.",
              },
              {
                question: "How do I verify my student status?",
                answer:
                  "You can verify using your university email or by uploading a current student ID. We also accept verification through official university portals.",
              },
              {
                question:
                  "Can I use CampusConnect if my university isn't listed?",
                answer:
                  "Absolutely! While we prioritize partnered universities, any student can join. You'll help us expand to your campus by being an early user.",
              },
              {
                question: "How does the study group matching work?",
                answer:
                  "Our algorithm matches based on courses, study preferences, schedules, and complementary skills. You can adjust matching criteria in your profile settings.",
              },
              {
                question: "Is my data and privacy protected?",
                answer:
                  "We take privacy seriously. All data is encrypted, and we never sell student information. You control what's shared through granular privacy settings.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center justify-between w-full px-8 py-6 text-left font-semibold text-lg text-gray-900 hover:bg-gray-50 transition-colors">
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-teal-500 transition-transform ${
                            open ? "transform rotate-180" : ""
                          }`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-8 pb-6 pt-2 text-gray-600">
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>

          {/* Support CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-10 text-center shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Our student support team is available 24/7 to help you with any
              queries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold">
                Contact Support
                <MessageSquare className="w-5 h-5 ml-2" />
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-bold">
                Join Community
                <Users className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Final CTA */}
      <section className="py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-96 h-96 bg-teal-400/10 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
          <div className="absolute w-72 h-72 bg-blue-400/10 rounded-full blur-3xl bottom-[-60px] right-[-80px] animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-16 border border-gray-700 relative overflow-hidden shadow-2xl">
            {/* Inner Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 pointer-events-none" />

            <div className="relative z-10">
              {/* Animated Icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-10"
              >
                <Rocket className="w-16 h-16 text-teal-400 drop-shadow-[0_0_15px_rgba(20,255,245,0.3)]" />
              </motion.div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  Student Life?
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join thousands of students who are already revolutionizing their
                campus experience.
                <span className="block text-teal-300 font-semibold mt-3">
                  Sign up now for exclusive early access.
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button className="relative bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold px-12 py-6 rounded-2xl text-xl shadow-lg hover:shadow-teal-400/30 transform hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <span className="absolute inset-0 bg-white opacity-10 group-hover:animate-ping rounded-2xl pointer-events-none" />
                  <Star className="w-6 h-6 mr-3" />
                  Get Free Access
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-12 py-6 rounded-2xl text-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                  See All Features
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* New Footer Design */}
      <footer className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Rocket className="w-10 h-10 text-teal-400" />
                </motion.div>
                <span className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  CampusConnect
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Empowering students to connect, learn, and grow together. Built
                by students, for students.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: MessageSquare, label: "Discord" },
                  { icon: Users, label: "Community" },
                  { icon: Mail, label: "Newsletter" },
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-teal-400" />
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Roadmap", "Beta Access"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                {["Help Center", "Contact", "Privacy", "Terms"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CampusConnect. Made with ❤️ by
              students, for students.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
