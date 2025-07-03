"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  MessageSquare,
  Users,
  Plus,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  Filter,
  TrendingUp,
  Eye,
  Mail,
  Phone,
  GraduationCap,
  Hash,
  Send,
  Flag,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  Reply,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function Discussions() {
  const [activeTab, setActiveTab] = useState("discussions");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const [newComment, setNewComment] = useState("");
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Best resources for Data Structures and Algorithms preparation?",
      content:
        "I'm preparing for placement season and looking for comprehensive DSA resources. What worked best for you guys? Any specific platforms or books you'd recommend?",
      author: {
        name: "Priya Sharma",
        email: "priya.sharma@thapar.edu",
        phone: "+91 98765 43210",
        college: "Thapar University",
        avatar: "/placeholder.png?height=40&width=40",
        year: "3rd Year",
        course: "Computer Science",
      },
      upvotes: 24,
      downvotes: 2,
      comments: 18,
      views: 156,
      timeAgo: "2 hours ago",
      tags: ["DSA", "Placements", "Programming"],
      isUpvoted: false,
      isDownvoted: false,
      isBookmarked: true,
      category: "academics",
    },
    {
      id: 2,
      title: "Anyone interested in forming a study group for Machine Learning?",
      content:
        "Looking to form a study group for Andrew Ng's ML course. We can meet twice a week and discuss concepts, work on assignments together. DM if interested!",
      author: {
        name: "Arjun Patel",
        email: "arjun.patel@iitd.ac.in",
        phone: "+91 87654 32109",
        college: "IIT Delhi",
        avatar: "/placeholder.png?height=40&width=40",
        year: "2nd Year",
        course: "Artificial Intelligence",
      },
      upvotes: 31,
      downvotes: 1,
      comments: 12,
      views: 89,
      timeAgo: "4 hours ago",
      tags: ["Machine Learning", "Study Group", "AI"],
      isUpvoted: true,
      isDownvoted: false,
      isBookmarked: false,
      category: "study-groups",
    },
    {
      id: 3,
      title: "Hackathon team looking for a UI/UX designer",
      content:
        "We're a team of 3 developers participating in the upcoming TechFest hackathon. Looking for a talented UI/UX designer to complete our team. Theme is sustainability tech.",
      author: {
        name: "Sneha Reddy",
        email: "sneha.reddy@vit.ac.in",
        phone: "+91 76543 21098",
        college: "VIT Vellore",
        avatar: "/placeholder.png?height=40&width=40",
        year: "4th Year",
        course: "Information Technology",
      },
      upvotes: 18,
      downvotes: 0,
      comments: 8,
      views: 67,
      timeAgo: "6 hours ago",
      tags: ["Hackathon", "UI/UX", "Team"],
      isUpvoted: false,
      isDownvoted: false,
      isBookmarked: false,
      category: "projects",
    },
    {
      id: 4,
      title: "Internship experience at Google - AMA",
      content:
        "Just completed my summer internship at Google as a Software Engineering Intern. Happy to answer any questions about the application process, interview prep, or the experience itself!",
      author: {
        name: "Rahul Kumar",
        email: "rahul.kumar@iitb.ac.in",
        phone: "+91 65432 10987",
        college: "IIT Bombay",
        avatar: "/placeholder.png?height=40&width=40",
        year: "3rd Year",
        course: "Computer Science",
      },
      upvotes: 67,
      downvotes: 3,
      comments: 34,
      views: 234,
      timeAgo: "1 day ago",
      tags: ["Internship", "Google", "AMA"],
      isUpvoted: false,
      isDownvoted: false,
      isBookmarked: true,
      category: "career",
    },
  ]);

  const [communities] = useState([
    {
      id: 1,
      name: "Thapar Tech Community",
      description:
        "Connect with fellow tech enthusiasts from Thapar University",
      members: 1247,
      avatar: "/placeholder.svg?height=50&width=50",
      isJoined: true,
      recentDiscussions: 23,
      category: "college",
    },
    {
      id: 2,
      name: "Data Science Hub",
      description:
        "Share resources, projects, and opportunities in Data Science",
      members: 3456,
      avatar: "/placeholder.svg?height=50&width=50",
      isJoined: true,
      recentDiscussions: 45,
      category: "subject",
    },
    {
      id: 3,
      name: "Placement Prep Warriors",
      description: "Crack your dream job with peer support and resources",
      members: 2134,
      avatar: "/placeholder.svg?height=50&width=50",
      isJoined: false,
      recentDiscussions: 67,
      category: "career",
    },
    {
      id: 4,
      name: "IIT Delhi Students",
      description: "Official community for IIT Delhi students",
      members: 5678,
      avatar: "/placeholder.svg?height=50&width=50",
      isJoined: false,
      recentDiscussions: 89,
      category: "college",
    },
  ]);

  const [comments] = useState([
    {
      id: 1,
      content:
        "LeetCode is definitely the way to go! I'd also recommend GeeksforGeeks for theory and Striver's SDE sheet for structured practice.",
      author: {
        name: "Amit Singh",
        college: "NIT Trichy",
        avatar: "/placeholder.png?height=32&width=32",
      },
      timeAgo: "1 hour ago",
      upvotes: 12,
      isUpvoted: false,
    },
    {
      id: 2,
      content:
        "Don't forget about system design! High-level design is becoming increasingly important in interviews. Check out Grokking the System Design Interview.",
      author: {
        name: "Kavya Nair",
        college: "BITS Pilani",
        avatar: "/placeholder.png?height=32&width=32",
      },
      timeAgo: "45 minutes ago",
      upvotes: 8,
      isUpvoted: true,
    },
  ]);

  const categories = [
    { id: "all", name: "All", count: discussions.length },
    { id: "academics", name: "Academics", count: 1 },
    { id: "study-groups", name: "Study Groups", count: 1 },
    { id: "projects", name: "Projects", count: 1 },
    { id: "career", name: "Career", count: 1 },
  ];

  const handleVote = (discussionId, type) => {
    setDiscussions((prev) =>
      prev.map((discussion) => {
        if (discussion.id === discussionId) {
          if (type === "upvote") {
            return {
              ...discussion,
              upvotes: discussion.isUpvoted
                ? discussion.upvotes - 1
                : discussion.upvotes + 1,
              downvotes: discussion.isDownvoted
                ? discussion.downvotes - 1
                : discussion.downvotes,
              isUpvoted: !discussion.isUpvoted,
              isDownvoted: false,
            };
          } else {
            return {
              ...discussion,
              downvotes: discussion.isDownvoted
                ? discussion.downvotes - 1
                : discussion.downvotes + 1,
              upvotes: discussion.isUpvoted
                ? discussion.upvotes - 1
                : discussion.upvotes,
              isDownvoted: !discussion.isDownvoted,
              isUpvoted: false,
            };
          }
        }
        return discussion;
      })
    );
  };

  const handleCreateDiscussion = () => {
    if (newDiscussion.title && newDiscussion.content) {
      const discussion = {
        id: discussions.length + 1,
        title: newDiscussion.title,
        content: newDiscussion.content,
        author: {
          name: "Koshank",
          email: "koshank@thapar.edu",
          phone: "+91 98765 43210",
          college: "Thapar University",
          avatar: "/placeholder.svg?height=40&width=40",
          year: "3rd Year",
          course: "Computer Science",
        },
        upvotes: 0,
        downvotes: 0,
        comments: 0,
        views: 0,
        timeAgo: "Just now",
        tags: newDiscussion.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        isUpvoted: false,
        isDownvoted: false,
        isBookmarked: false,
        category: "general",
      };
      setDiscussions((prev) => [discussion, ...prev]);
      setNewDiscussion({ title: "", content: "", tags: "" });
    }
  };

  const filteredDiscussions =
    selectedCategory === "all"
      ? discussions
      : discussions.filter((d) => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Campus Discussions
              </h1>
              <p className="text-gray-600">
                Connect, share knowledge, and grow together with your peers
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-xl px-6 py-3 font-semibold shadow-md">
                  <Plus className="w-5 h-5 mr-2" />
                  Start Discussion
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-2xl bg-white text-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    Start a New Discussion
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-500">
                    Share your thoughts, ask questions, or start a conversation
                    with your peers.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                  <Input
                    placeholder="Discussion title..."
                    className="bg-gray-50 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    value={newDiscussion.title}
                    onChange={(e) =>
                      setNewDiscussion((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                  />
                  <Textarea
                    placeholder="What's on your mind?"
                    rows={4}
                    className="bg-gray-50 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    value={newDiscussion.content}
                    onChange={(e) =>
                      setNewDiscussion((prev) => ({
                        ...prev,
                        content: e.target.value,
                      }))
                    }
                  />
                  <Input
                    placeholder="Tags (comma separated)"
                    className="bg-gray-50 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    value={newDiscussion.tags}
                    onChange={(e) =>
                      setNewDiscussion((prev) => ({
                        ...prev,
                        tags: e.target.value,
                      }))
                    }
                  />
                  <Button
                    onClick={handleCreateDiscussion}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold rounded-md py-2 shadow"
                  >
                    Post Discussion
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 inline-flex">
            {[
              { id: "discussions", label: "Discussions", icon: MessageSquare },
              { id: "communities", label: "Communities", icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-teal-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 sticky top-24">
              {activeTab === "discussions" && (
                <>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-teal-500" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          selectedCategory === category.id
                            ? "bg-teal-500 text-white shadow-md"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <span>{category.name}</span>
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
                    ))}
                  </div>
                </>
              )}

              {activeTab === "communities" && (
                <>
                  <h3 className="font-bold text-gray-900 mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Joined</span>
                      <span className="font-bold text-teal-600">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Recommended</span>
                      <span className="font-bold text-blue-600">2</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeTab === "discussions" && (
                <motion.div
                  key="discussions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {filteredDiscussions.map((discussion, index) => (
                    <motion.div
                      key={discussion.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Author Info */}
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={discussion.author.avatar || "/placeholder.svg"}
                          alt={discussion.author.name}
                          className="w-12 h-12 rounded-full border-2 border-teal-200"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">
                              {discussion.author.name}
                            </h4>
                            <Badge
                              variant="secondary"
                              className="bg-teal-100 text-teal-700"
                            >
                              <GraduationCap className="w-3 h-3 mr-1" />
                              {discussion.author.college}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {discussion.author.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {discussion.author.phone}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <span>
                              {discussion.author.year} •{" "}
                              {discussion.author.course}
                            </span>
                            <span>•</span>
                            <span>{discussion.timeAgo}</span>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              <Flag className="w-4 h-4 mr-2" />
                              Report
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      {/* Discussion Content */}
                      <div className="mb-4">
                        <h3
                          className="text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-teal-600 transition-colors"
                          onClick={() => setSelectedDiscussion(discussion)}
                        >
                          {discussion.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {discussion.content}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {discussion.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs text-black"
                          >
                            <Hash className="w-3 h-3 mr-1 text-black" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleVote(discussion.id, "upvote")
                              }
                              className={`${
                                discussion.isUpvoted
                                  ? "text-teal-600 bg-teal-50"
                                  : "text-gray-600"
                              }`}
                            >
                              <ArrowUp className="w-4 h-4 mr-1" />
                              {discussion.upvotes}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleVote(discussion.id, "downvote")
                              }
                              className={`${
                                discussion.isDownvoted
                                  ? "text-red-600 bg-red-50"
                                  : "text-gray-600"
                              }`}
                            >
                              <ArrowDown className="w-4 h-4 mr-1" />
                              {discussion.downvotes}
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedDiscussion(discussion)}
                            className="text-gray-600 hover:text-blue-600"
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {discussion.comments}
                          </Button>
                          <span className="flex items-center gap-1 text-sm text-gray-500">
                            <Eye className="w-4 h-4" />
                            {discussion.views}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`${
                            discussion.isBookmarked
                              ? "text-yellow-600"
                              : "text-gray-600"
                          }`}
                        >
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "communities" && (
                <motion.div
                  key="communities"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  {/* Joined Communities */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Your Communities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {communities
                        .filter((c) => c.isJoined)
                        .map((community, index) => (
                          <motion.div
                            key={community.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                          >
                            <div className="flex items-start gap-4 mb-4">
                              <img
                                src={community.avatar || "/placeholder.svg"}
                                alt={community.name}
                                className="w-12 h-12 rounded-full border-2 border-teal-200"
                              />
                              <div className="flex-1">
                                <h3 className="font-bold text-gray-900 mb-1">
                                  {community.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">
                                  {community.description}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {community.members.toLocaleString()} members
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    {community.recentDiscussions} recent
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700">
                              View Community
                            </Button>
                          </motion.div>
                        ))}
                    </div>
                  </div>

                  {/* Recommended Communities */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Recommended for You
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {communities
                        .filter((c) => !c.isJoined)
                        .map((community, index) => (
                          <motion.div
                            key={community.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                          >
                            <div className="flex items-start gap-4 mb-4">
                              <img
                                src={community.avatar || "/placeholder.svg"}
                                alt={community.name}
                                className="w-12 h-12 rounded-full border-2 border-blue-200"
                              />
                              <div className="flex-1">
                                <h3 className="font-bold text-gray-900 mb-1">
                                  {community.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">
                                  {community.description}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {community.members.toLocaleString()} members
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <TrendingUp className="w-4 h-4" />
                                    {community.recentDiscussions} active
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white">
                              Join Community
                            </Button>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Discussion Detail Modal */}
        <Dialog
          open={!!selectedDiscussion}
          onOpenChange={() => setSelectedDiscussion(null)}
        >
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 text-gray-900">
            {selectedDiscussion && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={
                        selectedDiscussion.author.avatar || "/placeholder.svg"
                      }
                      alt={selectedDiscussion.author.name}
                      className="w-12 h-12 rounded-full border-2 border-teal-300"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">
                          {selectedDiscussion.author.name}
                        </h4>
                        <Badge className="bg-teal-100 text-teal-700 text-xs">
                          <GraduationCap className="w-3 h-3 mr-1" />
                          {selectedDiscussion.author.college}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {selectedDiscussion.author.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {selectedDiscussion.author.phone}
                        </span>
                      </div>
                    </div>
                  </div>

                  <DialogTitle className="text-2xl font-bold">
                    {selectedDiscussion.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-gray-700 mt-2 leading-relaxed">
                    {selectedDiscussion.content}
                  </DialogDescription>
                </DialogHeader>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 mb-6">
                  {selectedDiscussion.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs border-gray-300 text-gray-600"
                    >
                      <Hash className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Vote Actions */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleVote(selectedDiscussion.id, "upvote")
                      }
                      className={`rounded-md ${
                        selectedDiscussion.isUpvoted
                          ? "text-teal-600 bg-teal-50"
                          : "text-gray-600"
                      }`}
                    >
                      <ArrowUp className="w-4 h-4 mr-1" />
                      {selectedDiscussion.upvotes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleVote(selectedDiscussion.id, "downvote")
                      }
                      className={`rounded-md ${
                        selectedDiscussion.isDownvoted
                          ? "text-red-600 bg-red-50"
                          : "text-gray-600"
                      }`}
                    >
                      <ArrowDown className="w-4 h-4 mr-1" />
                      {selectedDiscussion.downvotes}
                    </Button>
                  </div>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Eye className="w-4 h-4" />
                    {selectedDiscussion.views} views
                  </span>
                </div>

                {/* Comments Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Comments ({comments.length})
                  </h3>

                  {/* Add Comment */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      K
                    </div>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        rows={3}
                        className="mb-2 bg-gray-50 border border-gray-300 focus:border-teal-500 focus:ring-teal-500 rounded-md"
                      />
                      <Button
                        size="sm"
                        className="bg-teal-500 hover:bg-teal-600 text-white"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Post Comment
                      </Button>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex gap-3">
                        <img
                          src={comment.author.avatar || "/placeholder.svg"}
                          alt={comment.author.name}
                          className="w-8 h-8 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold text-gray-900">
                                {comment.author.name}
                              </span>
                              <Badge
                                variant="outline"
                                className="text-xs text-gray-600"
                              >
                                {comment.author.college}
                              </Badge>
                              <span className="text-xs text-gray-500">
                                {comment.timeAgo}
                              </span>
                            </div>
                            <p className="text-gray-700">{comment.content}</p>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`text-xs ${
                                comment.isUpvoted
                                  ? "text-teal-600"
                                  : "text-gray-500"
                              }`}
                            >
                              <ThumbsUp className="w-3 h-3 mr-1" />
                              {comment.upvotes}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs text-gray-500"
                            >
                              <Reply className="w-3 h-3 mr-1" />
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
