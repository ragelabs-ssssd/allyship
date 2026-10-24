import { Resource } from "@/lib/types";

export const RESOURCES: Resource[] = [
  {
    id: "res-1",
    slug: "active-listening-across-difference",
    title: "The Art of Active Listening Across Lived Experiences",
    description: "A practical guide to shifting from defensive debate to genuine curiosity when hearing about perspectives and experiences outside your own.",
    category: "guides",
    categoryLabel: "Practical Guide",
    readTime: "8 min read",
    publishedDate: "2025-09-15",
    author: {
      name: "Allyship Educational Core",
      role: "Curriculum Team",
    },
    tags: ["Active Listening", "Empathy", "Communication", "Psychological Safety"],
    downloadable: true,
    featured: true,
    keyTakeaways: [
      "Distinguish between listening to understand versus listening to reply or defend.",
      "Recognize the physical sensations of defensive fragility before speaking.",
      "Use open-ended clarifying inquiries that validate emotional truth.",
      "Resist the urge to immediately offer unsolicited problem-solving or toxic positivity.",
    ],
    content: [
      {
        heading: "1. Why Standard Listening Habits Fail Across Difference",
        paragraphs: [
          "Most professional and educational spaces train us in debate: we listen to find logical loopholes, craft counterarguments, or protect our self-image as a 'good person'. However, when someone shares their lived experience with systemic bias, marginalization, or workplace exclusion, applying debate tactics is deeply invalidating.",
          "Active allyship requires suspending the impulse to cross-examine. The goal is not to adjudicate whether an incident satisfies a legal standard of harm, but to understand how the experience felt to the human being speaking to you.",
        ],
        tips: [
          "Notice your internal monologue: Are you formulating your defense while they are still speaking?",
          "Take a slow breath and ground your feet to release the urge to interrupt.",
        ],
      },
      {
        heading: "2. The Four Stages of Empathetic Reception",
        paragraphs: [
          "First, maintain presence without fidgeting or checking notifications. Give your undivided physical attention.",
          "Second, reflect back what you heard in your own words to verify accuracy: 'What I am hearing is that when the client directed questions exclusively to your junior colleague, it made you feel erased and undermined. Did I capture that accurately?'",
          "Third, validate the emotional impact without attempting to rationalize the other person's intent: 'That sounds exhausting and deeply frustrating.' Intent does not erase impact.",
          "Fourth, ask how you can be of service rather than asserting your own solution: 'Thank you for trusting me with this. How can I best support you right now—do you want to brainstorm next steps together, or do you just need space to be heard?'",
        ],
      },
      {
        heading: "3. Common Traps to Avoid",
        paragraphs: [
          "Avoid centering yourself: Do not say 'I feel so terrible that this happened, I feel so guilty.' Now the speaker is forced into the emotional labor of comforting you.",
          "Avoid the 'Silver Lining' reflex: Do not say 'At least you still have your job!' Toxic positivity diminishes real harm and prevents constructive problem-solving.",
        ],
        tips: [
          "Replace 'I'm sure they didn't mean it that way' with 'Regardless of their intention, the impact was hurtful.'",
          "Keep the focus on the person who experienced the harm.",
        ],
      },
    ],
  },
  {
    id: "res-2",
    slug: "deconstructing-microaggressions",
    title: "Recognizing, Addressing, and Repairing Everyday Microaggressions",
    description: "A comprehensive reference toolkit breaking down common interpersonal microaggressions, their underlying messages, and practical scripts for calling colleagues 'in'.",
    category: "toolkits",
    categoryLabel: "Action Toolkit",
    readTime: "11 min read",
    publishedDate: "2025-10-02",
    author: {
      name: "Allyship Research & Practice",
      role: "Inclusion Specialists",
    },
    tags: ["Microaggressions", "Workplace Culture", "Scripts", "Intervention"],
    downloadable: true,
    featured: true,
    keyTakeaways: [
      "Microaggressions are brief, everyday indignities that communicate hostile or derogatory slights.",
      "Calling people 'in' creates educational space for change; calling 'out' is reserved for dangerous bad-faith harm.",
      "If you commit a microaggression, apologize concisely, take ownership without centering your intentions, and self-educate.",
      "Peers who witness microaggressions bear the responsibility to intervene so the victim does not bear the sole burden.",
    ],
    content: [
      {
        heading: "1. The Anatomy of Everyday Slights",
        paragraphs: [
          "Microaggressions are rarely accompanied by overt malice. Often, they masquerade as compliments: 'You speak English so articulately!', 'You're so resilient for someone with your background!', or 'I don't see color, I just see people.'",
          "While the speaker may believe they are being friendly, the meta-communication signals otherness: that the person does not belong, is an exception to an inferior group stereotype, or that their racial and cultural reality is invalid.",
        ],
      },
      {
        heading: "2. Real-Time Intervention Scripts for Allies",
        paragraphs: [
          "When you witness a microaggression, your silence is interpreted as tacit approval. Here are tested, non-combative scripts to intervene immediately:",
          "'What made you ask that particular question?' (Shifts reflective responsibility back to the speaker without aggression).",
          "'That comment landed uncomfortably for me. Could you clarify what you intended to convey?'",
          "'Actually, Jordan was speaking just now—let's make sure she has the floor to finish her point.'",
        ],
        tips: [
          "Do not wait until the next day if you can de-escalate gently in the moment.",
          "If safety or hierarchy prevents instant intervention, address the speaker in private immediately following the meeting.",
        ],
      },
      {
        heading: "3. What to Do When You Make a Mistake",
        paragraphs: [
          "Everyone makes mistakes. True allyship is measured by your reaction upon being called in. The four-step recovery protocol:",
          "1. Acknowledge and thank: 'Thank you for bringing that to my attention.'",
          "2. Apologize sincerely and concisely: 'I apologize for saying that; I see now how it was dismissive and inappropriate.'",
          "3. Avoid justifying: Do not say 'You know my heart, I would never hurt anyone!'",
          "4. Commit to learning: Do not expect the other person to educate you on why it was wrong. Do the research on your own time.",
        ],
      },
    ],
  },
  {
    id: "res-3",
    slug: "workplace-ally-action-matrix",
    title: "The Workplace Ally Action Matrix: From Bystander to Sponsor",
    description: "A structured diagnostic framework mapping the progression from passive awareness to active sponsorship and systemic advocacy.",
    category: "frameworks",
    categoryLabel: "Strategic Framework",
    readTime: "9 min read",
    publishedDate: "2025-11-10",
    author: {
      name: "Organizational Equity Lab",
      role: "Strategic Research",
    },
    tags: ["Career Sponsorship", "Organizational Design", "Leadership", "Metrics"],
    downloadable: true,
    featured: true,
    keyTakeaways: [
      "Move through the four tiers: Awareness, Intervention, Advocacy, and Structural Sponsorship.",
      "Mentorship talks with people; Sponsorship talks ABOUT people in rooms where career decisions happen.",
      "Conduct regular audits of project allocations, speaking time, and credit distribution.",
      "Tie allyship behaviors to formal performance goals and team retrospectives.",
    ],
    content: [
      {
        heading: "1. The Four Tiers of the Ally Matrix",
        paragraphs: [
          "Level 1: The Learner (Awareness) — Reading literature, attending seminars, reflecting on systemic biases.",
          "Level 2: The Interrupter (Intervention) — Stepping in when disrespectful remarks occur, redirecting interruptions in meetings.",
          "Level 3: The Advocate (Daily Advocacy) — Actively creating space, crediting ideas to their originators, demanding equitable hiring pools.",
          "Level 4: The Sponsor (Structural Power) — Spending social and organizational capital to champion promotions, equitable compensation, and governance reform.",
        ],
      },
      {
        heading: "2. Shifting from Mentorship to Active Sponsorship",
        paragraphs: [
          "Underrepresented groups are frequently over-mentored and under-sponsored. A mentor gives advice over coffee; a sponsor puts their reputation on the line to recommend someone for the high-visibility project, keynote, or leadership role.",
          "Ask yourself: Whose names do you bring up when leaders are planning promotions? Are you intentionally vouching for colleagues whose work is consistently undervalued?",
        ],
        tips: [
          "Audit the last 5 recommendations you made for lead roles or client pitches. How diverse was that list?",
          "Proactively share your salary history and promotion criteria with junior colleagues to bridge knowledge gaps.",
        ],
      },
    ],
  },
  {
    id: "res-4",
    slug: "intersectionality-foundations",
    title: "Intersectionality 101: Navigating Overlapping Systems of Privilege",
    description: "An accessible educational briefing exploring legal scholar Kimberlé Crenshaw's foundational framework and how to apply it in everyday community work.",
    category: "research",
    categoryLabel: "Research Briefing",
    readTime: "12 min read",
    publishedDate: "2025-08-20",
    author: {
      name: "Dr. Evelyn Vance & Research Collective",
      role: "Social Sciences Fellows",
    },
    tags: ["Intersectionality", "Sociology", "Civil Rights", "Equity Theory"],
    downloadable: false,
    featured: false,
    keyTakeaways: [
      "Human experiences of advantage and disadvantage cannot be examined in isolated silos.",
      "Gender, race, disability, socioeconomic status, and sexual orientation intersect to compound systemic obstacles.",
      "Single-axis solutions often inadvertently leave behind the most vulnerable within a community.",
      "Intersectional allyship centers those at the crossroads of multiple marginalized identities.",
    ],
    content: [
      {
        heading: "1. Understanding the Origin of Intersectionality",
        paragraphs: [
          "Coined in 1989 by Professor Kimberlé Crenshaw, intersectionality emerged from a critical legal analysis: Black women were excluded from discrimination lawsuits because courts treated race and gender as mutually exclusive categories. Companies claimed they hired women (who were white) and Black people (who were men), obscuring how Black women faced unique compound discrimination.",
          "Today, intersectionality serves as an essential lens for analyzing how social categories interact to create interdependent systems of discrimination or privilege.",
        ],
      },
      {
        heading: "2. Beyond the Buzzword: Application in Community Organizing",
        paragraphs: [
          "When designing community programs or workplace accommodations, failing to use an intersectional lens creates blind spots. For instance, a women's empowerment initiative that only holds evening events in non-wheelchair accessible buildings unintentionally excludes disabled women and single mothers with caregiving obligations.",
          "Intersectional allyship asks: Who is missing from this room? Whose barriers are invisible to the majority? What compounding factors are we overlooking?",
        ],
      },
    ],
  },
  {
    id: "res-5",
    slug: "inclusive-language-handbook",
    title: "The Modern Inclusive Communication & Terminology Handbook",
    description: "An evolving reference for writing and speaking with dignity, respecting evolving gender terminology, disability identity, and cultural nuances.",
    category: "guides",
    categoryLabel: "Reference Handbook",
    readTime: "10 min read",
    publishedDate: "2025-11-28",
    author: {
      name: "Allyship Communications Guild",
      role: "Linguistics & Equity Team",
    },
    tags: ["Language", "Writing", "Pronouns", "Disability Pride", "Global Teams"],
    downloadable: true,
    featured: false,
    keyTakeaways: [
      "Language shapes culture and reflects changing social consensus.",
      "Person-first vs Identity-first language: respect individual community preferences.",
      "Avoid idioms rooted in violence, ableism, or historic oppression.",
      "Embrace humility when terminology updates occur; language is a living tool.",
    ],
    content: [
      {
        heading: "1. Why Intentional Words Matter",
        paragraphs: [
          "Language is not simply a neutral medium of exchange; it encodes historical power hierarchies. Outdated terminology can alienate colleagues, undermine psychological safety, and perpetuate harmful stereotypes.",
          "Embracing inclusive language is not about policing speech or achieving sterile perfection; it is about extending courtesy, precision, and respect to fellow human beings.",
        ],
      },
      {
        heading: "2. Key Areas of Evolution",
        paragraphs: [
          "Ability & Mental Health: Replace casual ableist metaphors ('that's insane', 'blind spot', 'crippled by debt') with precise descriptors ('that's unpredictable', 'overlooked gap', 'severely hindered').",
          "Gender & Family: Use gender-neutral collective greetings ('Hello everyone', 'Hi team') rather than 'Hey guys'. Use 'caregivers' or 'parents' rather than assuming maternal defaults.",
          "Cultural & Racial Sensitivity: Understand origins of phrases like 'grandfathered in', 'cakewalk', or 'blackballing' and substitute clear, modern alternatives.",
        ],
      },
    ],
  },
  {
    id: "res-6",
    slug: "meeting-equity-checklist",
    title: "The 10-Point Meeting Equity & Speaking Time Checklist",
    description: "A quick, actionable checklist for meeting hosts and attendees to ensure airtime is balanced, interruptions are arrested, and quiet contributors are empowered.",
    category: "checklists",
    categoryLabel: "Action Checklist",
    readTime: "5 min read",
    publishedDate: "2025-12-05",
    author: {
      name: "Allyship Workplace Tools",
      role: "Productivity & Culture",
    },
    tags: ["Meetings", "Checklist", "Collaboration", "Facilitation"],
    downloadable: true,
    featured: false,
    keyTakeaways: [
      "Circulate agendas 24 hours in advance to support neurodivergent and introverted team members.",
      "Establish explicit meeting ground rules: one speaker at a time, zero uninterrupted talk time.",
      "Provide multiple channels of contribution: verbal, chat, and asynchronous post-meeting notes.",
      "Monitor airtime metrics and gently invite quiet voices without putting them on the spot.",
    ],
    content: [
      {
        heading: "1. Before the Meeting: Inclusive Preparation",
        paragraphs: [
          "Point 1: State the clear objective and expected decision outcomes in advance.",
          "Point 2: Provide background reading at least 24 hours prior to allow processing time.",
          "Point 3: Designate a dedicated note-taker and chat monitor on a rotating basis (avoid assigning administrative tasks exclusively to women or junior teammates).",
        ],
      },
      {
        heading: "2. During the Meeting: Active Moderation",
        paragraphs: [
          "Point 4: Establish the conversational hand-raise tool as standard practice.",
          "Point 5: Intervene proactively if someone is talked over: 'Let's let Marcus finish his thought before moving forward.'",
          "Point 6: Amplify good ideas and attribute them correctly: 'I want to second the proposal that Priya made earlier.'",
          "Point 7: Offer asynchronous contribution options: 'If anyone prefers to digest this and share ideas in our shared doc by tomorrow at noon, that input is equally valued.'",
        ],
      },
    ],
  },
];
