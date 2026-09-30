export type Course = { title: string; image?: string };

export const courses: Course[] = [
  { title: "Learn Figma from Basic" },
  { title: "Build Digital Asset" },
  { title: "the Power of Big Data" },
  { title: "Balancing Productivity and Life" },
  { title: "Mastering Money Management" },
  { title: "From Idea to Startup Success" },
];

export const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design",
  "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship",
  "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking",
];

export const paths = ["Design", "Development", "IT & Software", "Business", "Marketing", "Photography"];

export const testimonials = [
  { name: "Sarah M.", role: "Enthusiastic Learner", text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly feels like a haven for continuous learning." },
  { name: "James L.", role: "Lifelong Learner", text: "I've tried several online platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

export const footerCols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];
