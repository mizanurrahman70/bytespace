export type Course = { title: string; image?: string };

export const courses: Course[] = [
  { title: "Learn Figma from Basic", image: "/images/courses/figma.jpg" },
  { title: "Build Digital Asset", image: "/images/courses/digital-asset.jpg" },
  { title: "the Power of Big Data", image: "/images/courses/big-data.jpg" },
  { title: "Balancing Productivity and Life", image: "/images/courses/productivity.jpg" },
  { title: "Mastering Money Management", image: "/images/courses/money.jpg" },
  { title: "From Idea to Startup Success", image: "/images/courses/startup.jpg" },
];

export const avatars = [1, 2, 3, 4, 5, 6].map((n) => `/images/people/avatar-${n}.jpg`);

export const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design",
  "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship",
  "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking",
];

export const paths = ["Design", "Development", "IT & Software", "Business", "Marketing", "Photography"] as const;

export const testimonials = [
  { name: "Sarah M.", role: "Enthusiastic Learner", avatar: "/images/people/sarah.jpg", text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", avatar: "/images/people/james.jpg", text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", avatar: "/images/people/alex.jpg", text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

export const footerCols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];
