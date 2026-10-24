export type InitiativeCategory =
  | "workplace"
  | "education"
  | "community"
  | "advocacy"
  | "mentorship";

export interface Initiative {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: InitiativeCategory;
  categoryLabel: string;
  iconName: string;
  heroImage: string;
  duration: string;
  format: "Virtual" | "In-Person" | "Hybrid" | "Self-Paced";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  status: "Open for Enrollment" | "Waitlist Available" | "Rolling Admission";
  targetAudience: string[];
  keyOutcomes: string[];
  curriculum: {
    phase: string;
    title: string;
    description: string;
  }[];
  meetingSchedule: string;
  isFeatured?: boolean;
}

export type ResourceCategory =
  | "guides"
  | "toolkits"
  | "research"
  | "checklists"
  | "frameworks";

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  categoryLabel: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  downloadable?: boolean;
  featured?: boolean;
  keyTakeaways: string[];
  content: {
    heading: string;
    paragraphs: string[];
    tips?: string[];
  }[];
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  timezone: string;
  format: "Virtual Workshop" | "Community Circle" | "Ask-Me-Anything" | "In-Person Panel";
  location: string;
  facilitator: string;
  facilitatorRole: string;
  category: "Workshop" | "Circle" | "Discussion" | "Keynote";
  capacity: number;
  enrolledCount: number;
  isOpen: boolean;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  authorName: string;
  authorRole: string;
  communityContext: string;
  excerpt: string;
  fullStory: string[];
  theme: string;
  publishedDate: string;
  keyLearning: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  department: "Leadership" | "Programs" | "Community" | "Research & Policy";
  avatar: string;
  linkedin?: string;
  focusArea: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Participation" | "Initiatives" | "Privacy & Safety";
}

export interface PledgeSubmission {
  id: string;
  name: string;
  email: string;
  focusAreas: string[];
  commitments: string[];
  createdAt: string;
  certificateNumber: string;
}
