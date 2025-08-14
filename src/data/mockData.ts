export interface Creator {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  products: number;
  rating: number;
  specialties: string[];
  socialMedia: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
  };
  email: string;
  joinDate: string;
  location: string;
}

export interface Review {
  id: string;
  creatorId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  creator: string;
  category: string;
  downloads: number;
  rating: number;
  tags: string[];
}

export const mockCreators: Creator[] = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "/placeholder.svg",
    bio: "Digital artist specializing in UI/UX design templates with 5+ years of experience creating beautiful, functional designs.",
    followers: 12500,
    products: 45,
    rating: 4.9,
    specialties: ["UI Design", "Templates", "Icons"],
    socialMedia: {
      twitter: "https://twitter.com/sarahchen_design",
      instagram: "https://instagram.com/sarahchen.ui",
      linkedin: "https://linkedin.com/in/sarahchen",
      website: "https://sarahchen.design"
    },
    email: "hello@sarahchen.design",
    joinDate: "2019-03-15",
    location: "San Francisco, CA"
  },
  {
    id: "2", 
    name: "Marcus Johnson",
    avatar: "/placeholder.svg",
    bio: "Professional photographer and Lightroom preset creator. Specializing in cinematic and portrait photography.",
    followers: 8300,
    products: 28,
    rating: 4.8,
    specialties: ["Photography", "Presets", "Tutorials"],
    socialMedia: {
      instagram: "https://instagram.com/marcusj_photo",
      website: "https://marcusjohnsonphoto.com"
    },
    email: "contact@marcusjohnsonphoto.com",
    joinDate: "2020-07-22",
    location: "Austin, TX"
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    avatar: "/placeholder.svg", 
    bio: "Brand designer creating memorable logos and identity systems for startups and established businesses.",
    followers: 15200,
    products: 62,
    rating: 4.9,
    specialties: ["Branding", "Logos", "Identity"],
    socialMedia: {
      twitter: "https://twitter.com/elena_brands",
      linkedin: "https://linkedin.com/in/elenarodriguez",
      website: "https://elenarodriguez.design"
    },
    email: "hello@elenarodriguez.design",
    joinDate: "2018-11-08",
    location: "New York, NY"
  }
];

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Modern UI Kit Bundle",
    description: "Complete UI kit with 100+ components for modern web apps",
    price: 49,
    image: "/placeholder.svg",
    creator: "Sarah Chen",
    category: "UI Design",
    downloads: 2340,
    rating: 4.9,
    tags: ["UI", "Components", "Modern", "Web"]
  },
  {
    id: "2",
    title: "Cinematic Lightroom Presets",
    description: "20 professional presets for cinematic photo editing",
    price: 29,
    image: "/placeholder.svg", 
    creator: "Marcus Johnson",
    category: "Photography",
    downloads: 1850,
    rating: 4.8,
    tags: ["Presets", "Lightroom", "Cinematic", "Photography"]
  },
  {
    id: "3",
    title: "Startup Logo Collection",
    description: "50 ready-to-use logo templates for startups",
    price: 39,
    image: "/placeholder.svg",
    creator: "Elena Rodriguez", 
    category: "Branding",
    downloads: 3200,
    rating: 4.9,
    tags: ["Logo", "Startup", "Branding", "Templates"]
  }
];