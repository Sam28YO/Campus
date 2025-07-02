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
  Zap,
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
  BookOpen,
  Coffee,
  Wifi,
  Pizza,
  Beer,
  Bookmark,
  Notebook,
  Library,
  Mic,
  Music,
  Film,
  Gamepad2,
  Dumbbell,
  Check,
  Award,
  ThumbsUp,
  BookText,
  UserPlus,
  MapPin,
  ShoppingBag,
  Heart,
  Globe,
  Trophy,
  Code,
  Lightbulb,
  Network,
  Megaphone,
  Camera,
  Headphones,
  Palette,
  Cpu,
  Leaf,
  Briefcase,
  Eye,
  Share2,
  Bell,
  Search,
  ExternalLink,
} from "lucide-react";

// Enhanced Student Hub Component with better integration
const StudentEngagementHub = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [searchTerm, setSearchTerm] = useState("");
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

  const categories = [
    { id: "all", name: "All", icon: Globe, count: 6 },
    { id: "tech", name: "Tech", icon: Code, count: 2 },
    { id: "finance", name: "Finance", icon: TrendingUp, count: 1 },
    { id: "creative", name: "Creative", icon: Palette, count: 1 },
    { id: "sustainability", name: "Green", icon: Leaf, count: 1 },
    { id: "business", name: "Business", icon: Briefcase, count: 1 },
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
    {
      id: 205,
      title: "Technex - Technical Festival",
      organizer: "IIT BHU",
      type: "On-Campus",
      isPaid: false,
      stats: "2.8K Registered",
      category: "tech",
      date: "March 7-9, 2025",
      time: "9:00 AM - 10:00 PM",
      location: "IIT BHU Campus",
      image: "/IIT_BHU.jpg?height=200&width=300",
      tags: ["Hackathon", "Competitions", "Exhibitions"],
      featured: true,
      college: "IIT BHU",
    },
    {
      id: 206,
      title: "Incident - Management Fest",
      organizer: "XLRI Jamshedpur",
      type: "On-Campus",
      isPaid: true,
      stats: "120 Teams",
      category: "business",
      date: "November 14-16, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "XLRI Campus",
      image: "/XLRI.png?height=200&width=300",
      tags: ["Case Studies", "Business Simulation"],
      featured: false,
      college: "XLRI Jamshedpur",
    },
    {
      id: 207,
      title: "Riviera - Sports Festival",
      organizer: "VIT Vellore",
      type: "On-Campus",
      isPaid: false,
      stats: "1.5K Participants",
      category: "sports",
      date: "January 20-25, 2025",
      time: "7:00 AM - 9:00 PM",
      location: "VIT Sports Complex",
      image: "/sports.jpeg?height=200&width=300",
      tags: ["Cricket", "Football", "Athletics"],
      featured: false,
      college: "VIT Vellore",
    },
    {
      id: 208,
      title: "Mood Indigo - Cultural Festival",
      organizer: "IIT Bombay",
      type: "On-Campus",
      isPaid: false,
      stats: "5K+ Expected",
      category: "creative",
      date: "December 23-26, 2025",
      time: "10:00 AM - Midnight",
      location: "IIT Bombay Campus",
      image: "/indigo.jpg?height=200&width=300",
      tags: ["Concerts", "Pro Shows", "Workshops"],
      featured: true,
      college: "IIT Bombay",
    },
  ];

  const getCategoryIcon = (category) => {
    const categoryMap = {
      tech: Code,
      finance: TrendingUp,
      creative: Palette,
      sustainability: Leaf,
      business: Briefcase,
    };
    return categoryMap[category] || Globe;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section className="py-24 px-6 md:px-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-md px-6 py-3 rounded-full border border-blue-400/20 mb-6">
            <Trophy className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold">
              Student Opportunities
            </span>
            <Sparkles className="w-5 h-5 text-indigo-400" />
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">Your Gateway to</span>
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Campus Excellence
            </span>
          </h2>

          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Discover competitions, hackathons, and opportunities that match your
            passion. Connect with like-minded peers and build your future
            together.
          </p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
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
              { id: "events", label: "Events", icon: Calendar, count: 8 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-blue-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeTab === tab.id ? "bg-white/20" : "bg-blue-500/20"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-6 mb-12"
        >
          {/* Search Bar */}
          {/* <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search competitions, hackathons, events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            />
          </div> */}

          {/* Category Filter */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/5 text-blue-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      selectedCategory === category.id
                        ? "bg-white/20"
                        : "bg-blue-500/20"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="xl:col-span-3 space-y-8">
            <AnimatePresence mode="wait">
              {activeTab === "competitions" && (
                <motion.div
                  key="competitions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {competitions.map((comp, index) => {
                    const CategoryIcon = getCategoryIcon(comp.category);
                    return (
                      <motion.div
                        key={comp.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
                          comp.featured
                            ? "border-blue-400/30 shadow-lg shadow-blue-500/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        {comp.featured && (
                          <div className="absolute top-4 left-4 z-20">
                            <div className="bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
                              <Star className="w-3 h-3 fill-current" />
                              Featured
                            </div>
                          </div>
                        )}

                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={comp.image || "/placeholder.svg"}
                            alt={comp.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                  comp.isPaid
                                    ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                                    : "bg-green-500/20 text-green-300 border-green-500/30"
                                }`}
                              >
                                {comp.type} • {comp.isPaid ? "Paid" : "Free"}
                              </span>
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(
                                  comp.difficulty
                                )}`}
                              >
                                {comp.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h3 className="font-bold text-lg text-white mb-1 line-clamp-2 group-hover:text-blue-300 transition-colors">
                                {comp.title}
                              </h3>
                              <p className="text-gray-400 text-sm mb-3">
                                {comp.organizer}
                              </p>
                            </div>
                            <CategoryIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {comp.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-lg border border-blue-500/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Trophy className="w-4 h-4 text-yellow-400" />
                              <span className="font-medium text-yellow-400">
                                {comp.prize}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Clock className="w-4 h-4 text-orange-400" />
                              <span>{comp.deadline}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Users className="w-4 h-4 text-blue-400" />
                              <span>
                                {comp.participants.toLocaleString()}{" "}
                                participants
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Eye className="w-4 h-4 text-green-400" />
                              <span>{comp.stats}</span>
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                              Apply Now
                            </Button>
                            <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
                              <Share2 className="w-4 h-4" />
                            </Button>
                            <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {activeTab === "hackathons" && (
                <motion.div
                  key="hackathons"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {hackathons.map((hack, index) => (
                    <motion.div
                      key={hack.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className={`group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
                        hack.featured
                          ? "border-blue-400/30 shadow-lg shadow-blue-500/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="lg:flex">
                        <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
                          <img
                            src={hack.image || "/placeholder.svg"}
                            alt={hack.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-t lg:from-black/80 lg:to-transparent"></div>

                          {hack.featured && (
                            <div className="absolute top-4 left-4">
                              <div className="bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
                                <Star className="w-3 h-3 fill-current" />
                                Featured
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-8 lg:w-2/3 space-y-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-blue-300 transition-colors">
                                {hack.title}
                              </h3>
                              <p className="text-gray-400 mb-4">
                                {hack.organizer}
                              </p>
                            </div>
                            <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-bold border border-green-500/30">
                              {hack.type}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {hack.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-lg border border-blue-500/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-300">
                              <MapPin className="w-4 h-4 text-blue-400" />
                              <span>{hack.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Clock className="w-4 h-4 text-orange-400" />
                              <span>
                                {hack.duration} • {hack.deadline}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Trophy className="w-4 h-4 text-yellow-400" />
                              <span className="font-medium text-yellow-400">
                                {hack.prize}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Users className="w-5 h-5 text-green-400" />
                              <span className="font-medium">{hack.stats}</span>
                            </div>

                            <div className="flex gap-3">
                              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                                Register Now
                              </Button>
                              <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
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
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {events.map((event, index) => {
                    const CategoryIcon = getCategoryIcon(event.category);
                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
                          event.featured
                            ? "border-blue-400/30 shadow-lg shadow-blue-500/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        {event.featured && (
                          <div className="absolute top-4 left-4 z-20">
                            <div className="bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
                              <Star className="w-3 h-3 fill-current" />
                              Featured
                            </div>
                          </div>
                        )}

                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                  event.isPaid
                                    ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                                    : "bg-green-500/20 text-green-300 border-green-500/30"
                                }`}
                              >
                                {event.type} • {event.isPaid ? "Paid" : "Free"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h3 className="font-bold text-lg text-white mb-1 line-clamp-2 group-hover:text-blue-300 transition-colors">
                                {event.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                {/* <p className="text-gray-400 text-sm">
                                  {event.organizer}
                                </p> */}
                                <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full">
                                  {event.college}
                                </span>
                              </div>
                            </div>
                            <CategoryIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-lg border border-blue-500/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Calendar className="w-4 h-4 text-blue-400" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Clock className="w-4 h-4 text-orange-400" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <MapPin className="w-4 h-4 text-green-400" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Users className="w-4 h-4 text-indigo-400" />
                              <span>{event.stats}</span>
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                              Register Now
                            </Button>
                            <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
                              <Share2 className="w-4 h-4" />
                            </Button>
                            <Button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Quick Stats
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Active Competitions",
                    value: "24",
                    icon: Trophy,
                    color: "text-yellow-400",
                  },
                  {
                    label: "This Week's Hackathons",
                    value: "8",
                    icon: Code,
                    color: "text-blue-400",
                  },
                  {
                    label: "Total Prize Pool",
                    value: "₹50L+",
                    icon: Target,
                    color: "text-green-400",
                  },
                  {
                    label: "Students Participating",
                    value: "12K+",
                    icon: Users,
                    color: "text-indigo-400",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-gray-300 text-sm">
                        {stat.label}
                      </span>
                    </div>
                    <span className={`font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Community Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-teal-400" />
                Community Hub
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "Discussion Forums",
                    description:
                      "Join topic-specific discussions with peers and mentors",
                    color: "text-blue-400",
                    bgColor: "bg-blue-500/10",
                  },
                  {
                    icon: Calendar,
                    title: "Study Sessions",
                    description:
                      "Collaborative learning with scheduled group sessions",
                    color: "text-indigo-400",
                    bgColor: "bg-indigo-500/10",
                  },
                  {
                    icon: Users,
                    title: "Team Formation",
                    description: "Find teammates for competitions and projects",
                    color: "text-teal-400",
                    bgColor: "bg-teal-500/10",
                  },
                  {
                    icon: Lightbulb,
                    title: "Mentorship",
                    description: "Connect with industry experts and alumni",
                    color: "text-yellow-400",
                    bgColor: "bg-yellow-500/10",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <div
                      className={`p-2 ${feature.bgColor} rounded-lg ${feature.color}`}
                    >
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Inside your sidebar div (where other widgets like "Quick Stats" are) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }} // Adjust delay to fit your sequence
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-purple-400" />
                Share & Earn Rewards
              </h3>

              <div className="space-y-4">
                <p className="text-blue-200 text-sm leading-relaxed">
                  Share events with friends and earn{" "}
                  <span className="font-bold text-purple-300">
                    reward points
                  </span>{" "}
                  when they register!
                </p>

                {/* Progress bar */}
                <div className="bg-gray-800/50 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: "45%" }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                  />
                </div>
                <p className="text-xs text-gray-400">
                  <span className="font-bold text-purple-300">
                    65/100 points
                  </span>{" "}
                  to unlock your next badge
                </p>

                {/* Share buttons */}
                <div className="flex gap-3 pt-2">
                  <Button className="flex-1 bg-gradient-to-r from-blue-500/10 to-blue-500/20 hover:from-blue-500/20 hover:to-blue-500/30 text-white font-medium py-2 rounded-xl border border-blue-400/30 transition-all duration-300 flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Share
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-white font-medium py-2 rounded-xl border border-purple-400/30 transition-all duration-300 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Earn
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Trending Topics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-orange-400" />
                Trending Now
              </h3>
              <div className="space-y-3">
                {[
                  {
                    topic: "#AIChallenge2025",
                    posts: "234 posts",
                    trend: "+45%",
                  },
                  {
                    topic: "#SustainableInnovation",
                    posts: "189 posts",
                    trend: "+32%",
                  },
                  {
                    topic: "#BlockchainHack",
                    posts: "156 posts",
                    trend: "+28%",
                  },
                  {
                    topic: "#DataScienceBootcamp",
                    posts: "143 posts",
                    trend: "+25%",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      <div className="text-blue-300 font-medium text-sm">
                        {item.topic}
                      </div>
                      <div className="text-gray-400 text-xs">{item.posts}</div>
                    </div>
                    <div className="text-green-400 text-xs font-bold">
                      {item.trend}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Deadlines */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Bell className="w-5 h-5 text-red-400" />
                Urgent Deadlines
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Google Summer of Code",
                    deadline: "2 days left",
                    urgency: "high",
                  },
                  {
                    title: "Microsoft Imagine Cup",
                    deadline: "5 days left",
                    urgency: "medium",
                  },
                  {
                    title: "Facebook Developer Challenge",
                    deadline: "1 week left",
                    urgency: "low",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.urgency === "high"
                          ? "bg-red-400"
                          : item.urgency === "medium"
                          ? "bg-yellow-400"
                          : "bg-green-400"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm">
                        {item.title}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {item.deadline}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Countdown Timer with better animations
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
    <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
      {[
        {
          value: timeLeft.days,
          label: "Days",
          color: "from-blue-500 to-cyan-500",
        },
        {
          value: timeLeft.hours,
          label: "Hours",
          color: "from-indigo-500 to-blue-500",
        },
        {
          value: timeLeft.minutes,
          label: "Mins",
          color: "from-teal-500 to-indigo-500",
        },
        {
          value: timeLeft.seconds,
          label: "Secs",
          color: "from-cyan-500 to-teal-500",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          className="relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.2,
            }}
            className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-center shadow-2xl border border-white/20 backdrop-blur-md relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <motion.div
              key={item.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-2">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-white/80 font-semibold uppercase tracking-wider">
                {item.label}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced floating elements with more variety
const FloatingElement = ({ children, delay = 0, intensity = 1 }) => (
  <motion.div
    animate={{
      y: [0, -15 * intensity, 0],
      x: [0, 5 * intensity, 0],
      rotate: [0, 2 * intensity, -2 * intensity, 0],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

// Enhanced Feature Card with more interactive elements
const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <FloatingElement delay={index * 0.2} intensity={0.5}>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.02, y: -15 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-md p-8 rounded-3xl border ${feature.border} shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: isHovered
              ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)"
              : "linear-gradient(135deg, transparent 0%, transparent 50%, transparent 100%)",
          }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                x: [Math.random() * 300, Math.random() * 300],
                y: [Math.random() * 200, Math.random() * 200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} flex items-center justify-center shadow-lg`}
            >
              <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
            </motion.div>
            <div className="flex-1">
              <h3 className={`text-2xl font-bold ${feature.iconColor} mb-1`}>
                {feature.title}
              </h3>
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${feature.iconColor} bg-white/10 border border-white/20`}
                >
                  {feature.badge}
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {feature.desc}
          </p>

          <AnimatePresence>
            {(isHovered || isExpanded) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Key Features
                </h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  {feature.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Coming Soon
            </span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </motion.div>
        </div>
      </motion.div>
    </FloatingElement>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [iconConfigs, setIconConfigs] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const generateConfig = () =>
      [
        BookOpen,
        Coffee,
        Wifi,
        Pizza,
        Beer,
        Bookmark,
        Notebook,
        Library,
        Mic,
        Music,
        Film,
        Gamepad2,
        Dumbbell,
        BookText,
        UserPlus,
        MapPin,
        ShoppingBag,
        Heart,
        Award,
        ThumbsUp,
        Camera,
        Headphones,
        Palette,
        Cpu,
        Leaf,
        Briefcase,
        Code,
        Trophy,
        Lightbulb,
        Network,
      ].map((Icon) => ({
        Icon,
        x:
          Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 1200),
        y:
          Math.random() *
          (typeof window !== "undefined" ? window.innerHeight : 800),
        scale: 0.3 + Math.random() * 0.7,
        opacity: 0.05 + Math.random() * 0.15,
        animateX: (Math.random() - 0.5) * 300,
        animateY: (Math.random() - 0.5) * 300,
        rotate: Math.random() * 360,
        duration: 25 + Math.random() * 25,
      }));

    setIconConfigs(generateConfig());

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="font-sans text-white bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-[500px] h-[500px] bg-indigo-500/6 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, 80, -40, 0],
            scale: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-500/7 rounded-full blur-3xl"
        />

        {/* Secondary accent orbs */}
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-60 h-60 bg-cyan-500/4 rounded-full blur-2xl"
        />
      </div>
      {/* Enhanced floating icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {iconConfigs.map(
          (
            {
              Icon,
              x,
              y,
              scale,
              opacity,
              animateX,
              animateY,
              rotate,
              duration,
            },
            index
          ) => (
            <motion.div
              key={index}
              initial={{ x, y, scale, opacity }}
              animate={{
                x: [null, x + animateX, x - animateX / 2, x + animateX / 3],
                y: [null, y + animateY, y - animateY / 2, y + animateY / 3],
                rotate: [0, rotate, -rotate / 2, rotate / 3],
              }}
              transition={{
                duration,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="absolute"
            >
              <Icon className="w-6 h-6 text-blue-400/20" />
            </motion.div>
          )
        )}
      </div>
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-24 relative">
        <motion.div style={{ y, opacity }} className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md px-6 py-3 rounded-full border border-blue-400/30 shadow-xl"
          >
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-blue-300 font-semibold tracking-wide">
              Pre-Launch Early Access
            </span>
            <Rocket className="w-5 h-5 text-indigo-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-8xl font-black leading-tight"
          >
            <span className="block text-white">Your Ultimate</span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Campus Companion
            </motion.span>
            {/* <span className="block text-white">is Coming Soon</span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-200 leading-relaxed font-light"
          >
            Designed by students for students - connect with classmates,
            discover events, share notes, and make the most of your university
            experience.
            <span className="text-blue-300 font-semibold">
              {" "}
              Join the waitlist today and get exclusive early access!
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold px-10 py-5 rounded-full text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Star className="w-6 h-6 mr-3" />
              Get Early Access
            </Button>
            <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-10 py-5 rounded-full text-lg border border-white/20 hover:border-white/30 transition-all duration-300">
              See Features
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-blue-400 opacity-70" />
        </motion.div>
      </section>
      {/* Enhanced Countdown Section */}
      <section className="py-24 px-6 md:px-24 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-4 text-4xl md:text-5xl font-bold text-blue-400 mb-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Clock className="w-10 h-10" />
              </motion.div>
              <span>Early Bird Ends In</span>
            </div>
            <CountdownTimer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-blue-400/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5"></div>

            <div className="relative z-10 text-center space-y-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="inline-flex items-center gap-3 bg-blue-500/20 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-400/30"
              >
                <Zap className="w-6 h-6 text-blue-400 animate-bounce" />
                <span className="text-blue-300 font-bold text-xl">
                  STUDENT DISCOUNT
                </span>
              </motion.div>

              <div className="space-y-6">
                <div className="flex justify-center items-end gap-8">
                  <span className="text-3xl text-gray-400 line-through">
                    ₹2500
                  </span>
                  <motion.span
                    className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    ₹250
                  </motion.span>
                </div>
                <p className="text-2xl text-blue-200">
                  for the first 1000 students who sign up
                </p>
              </div>

              <div className="max-w-md mx-auto space-y-6">
                <div className="bg-gray-800/50 rounded-full h-6 overflow-hidden backdrop-blur-sm border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-full rounded-full relative"
                  >
                    <motion.div
                      className="absolute right-0 top-0 w-6 h-6 bg-white rounded-full shadow-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  </motion.div>
                </div>
                <p className="text-blue-300 font-semibold text-lg">
                  Only 130 spots remaining at this price!
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold px-16 py-8 rounded-2xl text-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <TrendingUp className="w-8 h-8 mr-4" />
                  Claim Your Free Access
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Enhanced Features Section */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Everything You Need for
              <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
                Campus Success
              </span>
            </h2>
            <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              We have built the tools you actually need, based on feedback from
              500+ students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                title: "Class Notes Sharing",
                desc: "Upload, share, and discover study materials with your classmates. Never miss important lecture notes again.",
                badge: "Collaborative Learning",
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-400/30",
                icon: Notebook,
                iconColor: "text-blue-400",
                benefits: [
                  "Version control for shared documents",
                  "Search across all shared notes",
                  "Professor-verified materials",
                  "Rating system for quality notes",
                ],
              },
              {
                title: "Campus Events",
                desc: "Discover all the parties, workshops, and club events happening on campus in one place.",
                badge: "Never Miss Out",
                gradient: "from-indigo-500/20 to-purple-500/20",
                border: "border-indigo-400/30",
                icon: Calendar,
                iconColor: "text-indigo-400",
                benefits: [
                  "Personalized event recommendations",
                  "RSVP with one tap",
                  "Get reminders before events",
                  "See who else is attending",
                ],
              },
              {
                title: "Study Groups",
                desc: "Find or create study groups for your courses. Collaborate in real-time with shared whiteboards.",
                badge: "Group Learning",
                gradient: "from-teal-500/20 to-emerald-500/20",
                border: "border-teal-400/30",
                icon: Users,
                iconColor: "text-teal-400",
                benefits: [
                  "Schedule group sessions",
                  "Shared task lists",
                  "In-app video calling",
                  "Subject-specific chat rooms",
                ],
              },
              {
                title: "Campus Deals",
                desc: "Exclusive student discounts at local restaurants, cafes, and shops near your campus.",
                badge: "Save Money",
                gradient: "from-cyan-500/20 to-blue-500/20",
                border: "border-cyan-400/30",
                icon: Pizza,
                iconColor: "text-cyan-400",
                benefits: [
                  "Location-based deals",
                  "Student ID verification",
                  "Limited-time offers",
                  "Cashback rewards",
                ],
              },
              {
                title: "Roommate Finder",
                desc: "Connect with potential roommates based on compatibility scores and living preferences.",
                badge: "Find Your Match",
                gradient: "from-violet-500/20 to-purple-500/20",
                border: "border-violet-400/30",
                icon: Building2,
                iconColor: "text-violet-400",
                benefits: [
                  "Compatibility quiz",
                  "Verified student profiles",
                  "Neighborhood guides",
                  "Lease comparison tools",
                ],
              },
              {
                title: "Textbook Exchange",
                desc: "Buy, sell, or trade textbooks with other students on campus. Save hundreds each semester.",
                badge: "Save on Books",
                gradient: "from-sky-500/20 to-blue-500/20",
                border: "border-sky-400/30",
                icon: BookOpen,
                iconColor: "text-sky-400",
                benefits: [
                  "Price comparison tool",
                  "Condition ratings",
                  "Campus pickup spots",
                  "Course-specific listings",
                ],
              },
            ].map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Enhanced Student Engagement Hub */}
      <StudentEngagementHub />
      {/* Enhanced Student Testimonials */}
      <section className="py-24 px-6 md:px-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-md px-6 py-3 rounded-full border border-blue-400/20 mb-6">
              <ThumbsUp className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">
                Student Reviews
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              What Students Are Saying
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Real feedback from beta testers at universities across the country
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden h-[400px]">
            {/* Carousel Track */}
            <motion.div
              className="flex absolute top-0 left-0 h-full"
              animate={{
                x: ["0%", "-100%", "-200%", "-300%", "0%"], // Loop through 4 slides (3 transitions)
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* Increased mock data for reviews */}
              {[
                {
                  name: "Koshank",
                  university: "Thapar University",
                  course: "Computer Science",
                  quote:
                    "This app saved me so much time finding study groups and sharing notes. It's like LinkedIn but actually useful for students!",
                  icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Shubham",
                  university: "Thapar University",
                  course: "Mechanical Engineering",
                  quote:
                    "I found my perfect roommate through CampusConnect. We're both night owls who love indie music - match made in heaven!",
                  icon: <Building2 className="w-6 h-6 text-teal-400" />,
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Kanwar",
                  university: "Thapar University",
                  course: "Electronics Engineering",
                  quote:
                    "The textbook exchange feature alone has saved me over ₹700 this semester. Why did not this exist when I was a freshman?",
                  icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Aarav",
                  university: "IIT Delhi",
                  course: "Electrical Engineering",
                  quote:
                    "The event discovery feature helped me find workshops I would not have known about otherwise. My skills have improved dramatically!",
                  icon: <Calendar className="w-6 h-6 text-purple-400" />,
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Priya",
                  university: "IIM Bangalore",
                  course: "MBA",
                  quote:
                    "As a grad student, the study group feature has been invaluable for case study preparation. Highly recommend!",
                  icon: <Users className="w-6 h-6 text-green-400" />,
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Rohan",
                  university: "BITS Pilani",
                  course: "Chemical Engineering",
                  quote:
                    "Found amazing deals on textbooks through the exchange platform. The verification system makes it completely trustworthy.",
                  icon: <BookText className="w-6 h-6 text-yellow-400" />,
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Neha",
                  university: "NIT Trichy",
                  course: "Civil Engineering",
                  quote:
                    "The roommate matching algorithm is spot on! My roommate and I get along perfectly after being matched by CampusConnect.",
                  icon: <Home className="w-6 h-6 text-pink-400" />,
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Vikram",
                  university: "DTU",
                  course: "Computer Engineering",
                  quote:
                    "The note-sharing system has transformed how I study. Collaborative notes from top students in my class are a game-changer.",
                  icon: <Notebook className="w-6 h-6 text-cyan-400" />,
                  rating: 5,
                  avatar: "/placeholder.svg?height=60&width=60",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-1/3 px-4 h-full flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-white/20"
                        />
                        <div className="absolute -bottom-1 -right-1 p-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full">
                          {testimonial.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-blue-300">
                          {testimonial.university}
                        </p>
                        <p className="text-xs text-gray-400">
                          {testimonial.course}
                        </p>
                      </div>
                    </div>

                    <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-6 flex-1">
                      {`"${testimonial.quote}"`}
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">
                        Verified Student
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Manual Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                onClick={() => {
                  // You can implement manual navigation here if needed
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === dot ? "bg-blue-400 w-6" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Enhanced Stats & Waitlist Section */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-6xl mx-auto text-center space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-20 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Join the Movement
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
              {[
                {
                  icon: Users,
                  value: "5,842",
                  label: "Students Waiting",
                  color: "text-blue-400",
                  bgColor: "from-blue-500/10 to-cyan-500/10",
                },
                {
                  icon: Building2,
                  value: "200+",
                  label: "Campuses Covered",
                  color: "text-indigo-400",
                  bgColor: "from-indigo-500/10 to-purple-500/10",
                },
                {
                  icon: GraduationCap,
                  value: "50+",
                  label: "Universities Partnered",
                  color: "text-teal-400",
                  bgColor: "from-teal-500/10 to-emerald-500/10",
                },
                {
                  icon: Trophy,
                  value: "₹10L+",
                  label: "Scholarships Won",
                  color: "text-yellow-400",
                  bgColor: "from-yellow-500/10 to-orange-500/10",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -15, scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${stat.bgColor} backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon
                        className={`w-12 h-12 ${stat.color} mx-auto mb-4`}
                      />
                    </motion.div>
                    <motion.div
                      className={`text-4xl font-bold ${stat.color} mb-2`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                    Join our waitlist for early access
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Enter your student email"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                        Join Waitlist
                      </Button>
                    </motion.div>
                  </div>

                  <p className="text-sm text-blue-300 mt-4 flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    We will send you an exclusive invite when we launch
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Enhanced Final CTA */}
      <section className="py-24 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-md rounded-3xl p-16 border border-blue-400/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block mb-8"
            >
              <Rocket className="w-16 h-16 text-blue-400" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Campus Experience?
              </span>
            </h2>

            <p className="text-xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of students who are already revolutionizing their
              university life. Sign up now for exclusive early access and
              premium features at no cost.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold px-12 py-6 rounded-full text-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Star className="w-7 h-7 mr-4" />
                  Get Free Early Access
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-12 py-6 rounded-full text-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                  See All Features
                  <ArrowRight className="w-7 h-7 ml-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Enhanced Footer */}
      <footer className="py-16 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
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
                  <Rocket className="w-10 h-10 text-blue-400" />
                </motion.div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  CampusConnect
                </span>
              </div>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
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
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-blue-400" />
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
                        className="text-blue-300 hover:text-white transition-colors"
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
                        className="text-blue-300 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CampusConnect. Made with ❤️ by
              students, for students.
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Powered by</span>
              <span className="text-blue-400 font-semibold">Next.js</span>
              <span>•</span>
              <span className="text-teal-400 font-semibold">Framer Motion</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
