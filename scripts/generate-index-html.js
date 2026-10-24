/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const conclavesData = [
  {
    id: "bengaluru-1",
    city: "Bengaluru",
    edition: "Allyship++ 1.0 — 1st Edition",
    editionCycle: "1.0",
    date: "June 2024",
    venue: "Bengaluru Metropolitan Hub",
    turnout: "~70 Corporate Leaders & Capability Heads",
    title: "Leadership and Collaboration Across Disciplines",
    desc: "SOA Founder President & Chairman Prof. (Dr.) Manojranjan Nayak and institutional leadership delivered the inaugural address highlighting collaborative leadership, followed by an inspiring virtual keynote on 'Leadership in Sports' by Olympian and World Championship medalist Anju Bobby George. Senior engineering and people leaders from Microsoft, Dell, Zscaler, and global capability centres deliberated on engineering cultures, mitigating burnout, and nurturing hybrid global teams.",
    sportsGuests: [
      {
        name: "Anju Bobby George",
        role: "Olympian & First Indian World Athletics Championship Medalist",
        note: "Virtual Keynote on 'Leadership in Sports' and coach-athlete allyship"
      }
    ],
    leadership: [
      {
        name: "Prof. (Dr.) Manojranjan Nayak",
        role: "Founder President & Chairman, SOA / ITER (Inaugural Address)"
      },
      {
        name: "Prof. (Dr.) Raj Kumar Hota",
        role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA"
      }
    ],
    panelists: [
      { name: "Dr. P.B. Kotur", role: "Global Head, Engineering Academy, L&T Technology Services" },
      { name: "C. Aparna", role: "CHRO, Torry Harris Integration Solutions" },
      { name: "Baliram Mutagekar", role: "Vice President, BNY Mellon" },
      { name: "Dr. S.J. Naganagouda", role: "Chief People Officer, Tally Solutions Pvt Ltd" },
      { name: "Arun Parija", role: "Partner, Coserve Software Solutions" }
    ],
    organizations: ["Microsoft", "Dell", "Zscaler", "L&T Technology Services", "BNY Mellon", "Tally Solutions"],
    focus: "Cross-disciplinary leadership, mitigating tech-worker burnout, engineering cultures, and hybrid global capability teams.",
    image: "IMG_7849.jpg"
  },
  {
    id: "hyderabad-1",
    city: "Hyderabad (1.0)",
    edition: "Allyship++ 1.0 — 2nd Edition",
    editionCycle: "1.0",
    date: "July 26, 2024",
    venue: "Hyderabad Tech Corridor",
    turnout: "60+ Corporate Leaders & HR Executives",
    title: "Practicing Allyship at the Organizational Level",
    desc: "Former Indian Test cricketer Arshad Ayub joined as Chief Guest to illuminate leadership, mental stamina, and trust in dynamic business environments. Convened by Prof. (Dr.) Raj Kumar Hota alongside Prof. P.K. Patra, CXO advisors, engineering VPs, and CSIR scientists examined how to operationalize allyship at organizational and personal levels while accelerating joint R&D pipelines.",
    sportsGuests: [
      {
        name: "Arshad Ayub",
        role: "Former Indian International Cricketer (Test & ODI)",
        note: "Chief Guest Keynote on Leadership & Collaboration in Dynamic Environments"
      }
    ],
    leadership: [
      {
        name: "Prof. (Dr.) Raj Kumar Hota",
        role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA"
      },
      {
        name: "Dr. P.K. Patra",
        role: "Dean, Sponsored Research & Industry Consultancy, SOA"
      }
    ],
    panelists: [
      { name: "Dr. Marcus Ranney", role: "Founder & CEO, Human Edge (Well-being & Peak Performance)" },
      { name: "Dr. Ch. Mohan Rao", role: "Former Director, CSIR-CCMB (Scientific Innovation & R&D Leadership)" },
      { name: "Mr. Nandakishore Durgasi", role: "Director - HR, United Parcel Service (UPS India)" },
      { name: "Ms. Padmaja", role: "Chief Strategy Officer, Greenwave Technologies" },
      { name: "Mr. Satish", role: "AVP - HR, Bodhtree Consulting" }
    ],
    organizations: ["UPS India", "Human Edge", "CSIR-CCMB", "Bodhtree Consulting", "Greenwave"],
    focus: "Bridging the gap between corporate practice and university research, executive well-being, and organizational empathy.",
    image: "IMG_7873.jpg"
  },
  {
    id: "kolkata-1",
    city: "Kolkata",
    edition: "Allyship++ 1.0 — 3rd Edition",
    editionCycle: "1.0",
    date: "September 2024",
    venue: "Kolkata Cultural & IT Hub",
    turnout: "80+ Industry Stalwarts & Academic Leaders",
    title: "Honoring Sports Icons & Fostering Workplace Inclusion",
    desc: "A landmark chapter celebrating sports legends alongside corporate executives. Honored 1964 Olympic hockey gold medalist Gurbux Singh, legendary national footballer Gautam Sarkar, and M.S. Dhoni's mentor Satyaprakash Krishna. Deliberations linked high-performance sports tenacity with corporate leadership, workforce agility, and next-generation technical curricula.",
    sportsGuests: [
      { name: "Gurbux Singh", role: "1964 Tokyo Olympic Gold Medalist & Hockey Legend", note: "Lifetime achievement felicitation and address on mental fortitude" },
      { name: "Gautam Sarkar", role: "Legendary Indian National Footballer", note: "Honored guest on grit, teamwork, and collective purpose" },
      { name: "Satyaprakash Krishna", role: "M.S. Dhoni's Early Mentor & Cricket Leader", note: "Keynote on identifying raw talent and nurturing championship mindset" }
    ],
    leadership: [
      { name: "Prof. (Dr.) Manojranjan Nayak", role: "Founder President & Chairman, SOA / ITER" },
      { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA" }
    ],
    panelists: [
      { name: "PwC Executive Leadership", role: "Digital Transformation & Workforce Strategy" },
      { name: "Lexmark Research Directorate", role: "Applied AI, Cloud Systems & University Labs" },
      { name: "Eastern India DEI Alliance", role: "Inclusive Hiring, Neurodiversity & Gender Allyship" }
    ],
    organizations: ["PwC", "Lexmark", "TCS", "ITC Infotech", "Cognizant"],
    focus: "Connecting high-performance athletic discipline with corporate leadership, workforce mental fitness, and university curriculum agility.",
    image: "CON01638.JPG"
  },
  {
    id: "mumbai-1",
    city: "Mumbai",
    edition: "Allyship++ 1.0 — 4th Edition",
    editionCycle: "1.0",
    date: "October 2025",
    venue: "Mumbai Financial Corridor",
    turnout: "75+ Financial & Enterprise Leaders",
    title: "Executive Resilience, Health, and Institutional Trust",
    desc: "Convened in India's financial capital, featuring former Indian Test cricketer Nilesh Kulkarni and Olympian Anand Menezes alongside Chairman Prof. (Dr.) Manojranjan Nayak. Deliberations focused on sustainable high-performance cultures, employee well-being, executive psychological safety, and industry-sponsored engineering research.",
    sportsGuests: [
      { name: "Nilesh Kulkarni", role: "Former Indian Test Cricketer & Sports Management Visionary", note: "Keynote on peak athletic performance and ethical boardroom leadership" },
      { name: "Anand Menezes", role: "Olympian & National Track Champion", note: "Insights on conditioning, resilience, and executive burnout mitigation" }
    ],
    leadership: [
      { name: "Prof. (Dr.) Manojranjan Nayak", role: "Founder President & Chairman, SOA / ITER" },
      { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA" }
    ],
    panelists: [
      { name: "Dr. P.B. Kotur", role: "Global Head, Engineering Academy, L&T Technology Services" },
      { name: "Leading FinTech & BFSI Executives", role: "Risk, Enterprise Agility & Tech Hiring" }
    ],
    organizations: ["L&T Technology Services", "HDFC Bank", "ICICI Securities", "Tata Consultancy Services"],
    focus: "Corporate resilience, bridging technical education with financial technology demands, and employee health.",
    image: "IMG_7577.jpg"
  },
  {
    id: "hyderabad-2",
    city: "Hyderabad (2.0)",
    edition: "Allyship++ 2.0 — Launch Edition",
    editionCycle: "2.0",
    date: "May 2026",
    venue: "Le Méridien, Gachibowli, Hyderabad",
    turnout: "80-90+ Corporate Executives & Talent Heads",
    title: "Gen-Z Aspirations, Psychological Safety & AI Transformation",
    desc: "Inaugurating Edition 2.0 with an elevated focus on Gen-Z career trajectories and organizational adaptability. Chief Guest Dr. G. Srinivas Patnaik (Athletics Federation of India) joined keynote speaker Prof. Sanjay Dhir (IIT Delhi) alongside CHROs from Akamai, Reckitt, and NCC Ltd to establish actionable frameworks for everyday allyship in corporate engineering hubs.",
    sportsGuests: [
      { name: "Dr. G. Srinivas Patnaik", role: "Secretary, Athletics Federation of India (AFI)", note: "Chief Guest address on discipline, inclusive sports governance, and leadership" }
    ],
    leadership: [
      { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA" },
      { name: "Prof. Sanjay Dhir", role: "Professor of Strategic Management, DMS, IIT Delhi (Keynote Speaker)" }
    ],
    panelists: [
      { name: "Suresh P.", role: "Director - HR, Akamai Technologies" },
      { name: "Pooja Malik", role: "Head - Talent Acquisition, Reckitt" },
      { name: "Radha Raman", role: "Chief People Officer, NCC Ltd" },
      { name: "Venkatesh K.", role: "VP - Engineering, Tech Mahindra" }
    ],
    organizations: ["Akamai Technologies", "Reckitt", "NCC Ltd", "Tech Mahindra", "ServiceNow Ecosystem"],
    focus: "Nurturing Gen-Z talent, continuous learning agility, psychological safety, and transitioning from academic theory to corporate delivery.",
    image: "IMG_7610.jpg"
  },
  {
    id: "chennai-2",
    city: "Chennai (2.0)",
    edition: "Allyship++ 2.0 — Southern Conclave",
    editionCycle: "2.0",
    date: "August 2026",
    venue: "Chennai Industrial & Tech Hub",
    turnout: "85+ Automotive, IT & Global Talent Leaders",
    title: "Practicing Allyship: From Intent to Everyday Leadership",
    desc: "A powerhouse conclave featuring Paris Olympics national athletics coach J. Premanand and Standard Chartered Global Head Archana Grover. Over 60 talent and engineering heads from Rocket India, Foodhub, Nordex, KaarTech, and Mphasis deliberated on operationalizing allyship as an everyday leadership responsibility rather than an occasional HR initiative.",
    sportsGuests: [
      { name: "Premanand J.", role: "High-Performance Coach, Athletics Federation of India / Paris Olympics", note: "Fireside keynote on unlocking human potential and building championship-level team resilience" }
    ],
    leadership: [
      { name: "Archana Grover", role: "Global Head - Diversity & Culture, Standard Chartered Bank (Conclave Moderator)" },
      { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA" }
    ],
    panelists: [
      { name: "Sathish Kumar", role: "Director - Talent Acquisition, Rocket India" },
      { name: "Deepa Narayanan", role: "Head of People, Foodhub" },
      { name: "Rajesh Kannan", role: "Senior HR Director, Nordex Group" },
      { name: "Kavitha S.", role: "VP - People & Culture, KaarTech" },
      { name: "Arunachalam P.", role: "Global Delivery Head, Mphasis" }
    ],
    organizations: ["Standard Chartered", "Rocket India", "Foodhub", "Nordex Group", "KaarTech", "Mphasis"],
    focus: "Translating allyship intent into daily managerial behaviors, psychological safety in hybrid tech teams, and building robust campus recruitment pipelines.",
    image: "CON01670.JPG"
  }
];

const pressClippings = [
  {
    id: "dc-hyd",
    outlet: "Deccan Chronicle",
    title: "Allyship++ Conclave Focuses on Leadership and Collaboration",
    date: "July 2024 · Hyderabad",
    category: "Conclave Coverage",
    summary: "Detailed coverage of the Hyderabad chapter headlined by former Indian international cricketer Arshad Ayub, CXO leaders from UPS, Human Edge, and CSIR scientists deliberating collaborative leadership and industry-academia cooperation.",
    quote: "SOA convenes corporate leadership to bridge the gap between academic research and business transformation.",
    link: "https://www.deccanchronicle.com/southern-states/allyship-conclave-focuses-on-leadership-and-collaboration-1812653",
    image: "news-deccan-hyd.jpg"
  },
  {
    id: "statesman-techm",
    outlet: "The Statesman",
    title: "Odisha: SOA Ties Up with Tech Mahindra to Boost Industry-Ready Skills",
    date: "July 2026 · Bhubaneswar",
    category: "Centre of Excellence",
    summary: "Reporting on the inauguration of the Tech Mahindra Centre of Excellence at ITER campus under the stewardship of Founder President & Chairman Prof. (Dr.) Manojranjan Nayak and Tech Mahindra's Dharmaraj Nayak to train engineers in ServiceNow, AI/ML, and Cloud architecture.",
    quote: "A pioneering milestone accelerating hands-on enterprise competency directly within university laboratories.",
    link: "https://www.thestatesman.com/business/odisha-soa-ties-up-with-tech-mahindra-to-boost-industry-ready-skills-1503616250.html",
    image: "soa-iter-building.jpg"
  },
  {
    id: "prameya-genz",
    outlet: "Prameya News",
    title: "SOA Organises Allyship++ 2.0 with Focus on Gen-Z Aspirations at Hyderabad",
    date: "May 2026 · Hyderabad",
    category: "Conclave 2.0",
    summary: "Focusing on the 2.0 cycle launch at Le Meridien, Gachibowli, featuring AFI Secretary Dr. G. Srinivas Patnaik, IIT Delhi's Prof. Sanjay Dhir, and HR heads from Akamai, Reckitt, and NCC Ltd on psychological safety and learning agility.",
    quote: "Modern enterprises must adapt to Gen-Z aspirations through intentional, daily mentorship.",
    link: "https://www.prameyanews.com/soa-organises-allyship-20-with-focus-on-gen-z-aspirations-at-hyderabad",
    image: "news-prameya-genz.webp"
  },
  {
    id: "bytes-blr",
    outlet: "OdishaBytes",
    title: "70 Corporate Leaders Attend SOA's Allyship++ Event at Bengaluru",
    date: "June 2024 · Bengaluru",
    category: "Conclave Coverage",
    summary: "Reporting on the inaugural conclave in Bengaluru with top executives from Microsoft, Dell, Zscaler, BNY Mellon, and an inspiring virtual keynote by Olympian Anju Bobby George on leadership in sports.",
    quote: "Over 70 corporate stalwarts gathered in Bengaluru to initiate a transformative dialogue with SOA University.",
    link: "https://odishabytes.com/70-corporate-leaders-attend-soas-allyship-event-at-bengaluru/",
    image: "news-bytes-blr.jpg"
  },
  {
    id: "prameya-mumbai",
    outlet: "Prameya News",
    title: "Nilesh Kulkarni Addresses SOA's Allyship Conclave at Mumbai",
    date: "October 2025 · Mumbai",
    category: "Conclave Coverage",
    summary: "Former Indian Test cricketer Nilesh Kulkarni and Olympian Anand Menezes joined Chairman Prof. (Dr.) Manojranjan Nayak and LTTS Global Head Dr. P.B. Kotur in Mumbai to examine employee well-being and high-performance discipline.",
    quote: "Connecting the resilience of international sport with executive well-being and boardroom empathy.",
    link: "https://www.prameyanews.com/nilesh-kulkarni-addresses-soas-allyship-conclave-at-mumbai",
    image: "news-prameya-mumbai.webp"
  },
  {
    id: "update-lseg",
    outlet: "UpdateOdisha",
    title: "First Time in Odisha: LSEG Hires 11 SOA Students",
    date: "September 2025 · Bhubaneswar",
    category: "Placement Milestone",
    summary: "London Stock Exchange Group (LSEG) selected 11 B.Tech and MCA students from SOA following a rigorous six-round recruitment drive—representing the largest cohort recruited by LSEG from any single campus in India.",
    quote: "A testament to the global competitiveness of SOA's technical curriculum and student caliber.",
    link: "https://updateodisha.com/2025/09/13/first-time-in-odisha-lseg-hires-11-soa-students-87858/",
    image: "news-update-lseg.jpg"
  },
  {
    id: "sakala-kolkata",
    outlet: "The Sakala",
    title: "Allyship++ Conclave at Kolkata: Sports Legends & Corporate Leaders",
    date: "September 2024 · Kolkata",
    category: "Sports & Industry Tribute",
    summary: "1964 Olympic hockey gold medalist Gurbux Singh, footballer Gautam Sarkar, and Dhoni's mentor Satyaprakash Krishna joined PwC, Lexmark, and Fortune 500 DEI advisors to deliberate digital transformation and workplace inclusion.",
    quote: "Honoring India's greatest athletic icons while laying the roadmap for modern inclusive workplaces.",
    link: "https://www.soa.ac.in/general-notifications/2024/9/30/soa-organises-allyship-conclave-at-kolkata",
    image: "CON01638.JPG"
  },
  {
    id: "around-chennai",
    outlet: "Around Odisha",
    title: "SOA University Hosts Allyship++ 2.0 at Chennai",
    date: "August 2026 · Chennai",
    category: "Conclave 2.0",
    summary: "Paris Olympics sprint coach Premanand J. and Standard Chartered Global Head Archana Grover led deliberations with 60+ talent heads from Rocket India, Foodhub, Nordex, KaarTech, and Mphasis on allyship as everyday leadership.",
    quote: "Allyship is not an optional HR policy—it is a daily leadership responsibility that unlocks sustainable innovation.",
    link: "https://www.soa.ac.in/general-notifications/2026/8/7/soa-university-hosts-allyship-20-at-chennai",
    image: "news-around-chennai.jpg"
  },
  {
    id: "sanchar-nirf",
    outlet: "The Sanchar / Orissa Today",
    title: "SOA Ranked 15th in Country in NIRF 2025; Climbs in Engineering & Medicine",
    date: "September 2025 · National",
    category: "Academic Ranking",
    summary: "Ministry of Education announces NIRF 2025: SOA ranks 15th nationally in the University category with score of 63.14. ITER engineering ascends to 22nd and Medical surges to 15th in India.",
    quote: "Reinforcing SOA's stature as a multidisciplinary powerhouse and the #1 university in Odisha.",
    link: "https://www.soa.ac.in/general-notifications/2025/9/4/soa-ranked-15th-in-country-in-2025-nirf-rankings-climbs-up-the-ladder-in-medical-sciences-and-engineering",
    image: "soa-campus-aerial.jpg"
  }
];

const faculties = [
  {
    name: "Institute of Medical Sciences (IMS) & SUM Hospital",
    tag: "Medical Sciences",
    standing: "15th in Medical, NIRF 2025 (Climbed 6 spots) · 701–850 Globally in QS Medicine",
    desc: "NABH and NABL accredited super-specialty hospital and medical college. Ranked 601–800 in THE 2026, delivering 100% MBBS and MD/MS graduate clinical absorption across leading national healthcare networks.",
    metric: "100% Clinical Placement",
    highlight: "NABH & NABL Accredited"
  },
  {
    name: "Institute of Technical Education and Research (ITER)",
    tag: "Engineering & Technology",
    standing: "22nd in Engineering, NIRF 2025 (Up 4 spots) · 2nd in India in Times Engineering 2025 & 2026",
    desc: "SOA's premier engineering faculty ranked ahead of Amrita (#23), Jamia Millia (#24), and IIT Gandhinagar (#25). Hosts state-of-the-art Centres of Excellence with Tech Mahindra and LTTS with a 94.54% B.Tech placement rate.",
    metric: "94.54% B.Tech Placement",
    highlight: "₹46 LPA Peak Package"
  },
  {
    name: "Institute of Dental Sciences (IDS)",
    tag: "Dental Sciences",
    standing: "9th in India in Dental, NIRF 2025 · #1 in Odisha",
    desc: "Consistently held a Top 10 national ranking for three consecutive years (2023, 2024, 2025). Features multi-chair specialized clinical labs and 95.52% BDS & MDS graduate placement velocity.",
    metric: "95.52% Placement Rate",
    highlight: "Ranked 9th Nationally"
  },
  {
    name: "SOA National Institute of Law (SNIL)",
    tag: "Legal Studies",
    standing: "10th in India in Law, NIRF 2025 · #1 in Odisha",
    desc: "Consistently ranked among the nation's Top 10 law schools. Features advanced moot court infrastructure, distinguished legal research chairs, and strong judicial clerkship placements across India.",
    metric: "Top 10 in India",
    highlight: "#1 Law School in Odisha"
  },
  {
    name: "Institute of Business and Computer Studies (IBCS)",
    tag: "Management & Computing",
    standing: "25th in Business & Management Studies (#1 in Odisha) · 66th in MBA/PGDM, NIRF 2025",
    desc: "Faculty of management education achieving 97.22% MBA placement rate. Strategic corporate recruiter relationships with Deloitte, EY, KPMG, PwC, ICICI, HDFC, and Reliance Industries.",
    metric: "97.22% MBA Placement",
    highlight: "#1 in Odisha (Business Studies)"
  },
  {
    name: "Multi-Disciplinary Research & Global Footprint",
    tag: "Research & Innovation",
    standing: "49th in Research, NIRF 2025 · 251–300 Globally in Science (THE 2026)",
    desc: "Featuring 38 SOA researchers recognized in Stanford University's World's Top 2% Scientists list. Home to the AIC-SOA Foundation (Atal Incubation Centre under NITI Aayog) and scholars from 15+ countries.",
    metric: "38 Stanford Top 2% Scientists",
    highlight: "AIC-SOA Incubation Centre"
  }
];

const placementRows = [
  {
    faculty: "Engineering — B.Tech (ITER)",
    p2022: "88.11%",
    p2023: "91.47%",
    p2024: "94.54% (1,802 / 1,903 placed)",
    ctc: "₹6.00 LPA (Peak: ₹43–46 LPA)",
    recruiters: "Microsoft, Amazon, Adobe, LSEG, JP Morgan, Zscaler, Dell, Samsung, Bosch, LTTS, Wipro, TCS, Cognizant"
  },
  {
    faculty: "Management — MBA (IBCS)",
    p2022: "95.26%",
    p2023: "94.79%",
    p2024: "97.22% (175 / 180 placed)",
    ctc: "₹5.20 LPA",
    recruiters: "Deloitte, EY, KPMG, PwC, HDFC Bank, ICICI Bank, Axis Bank, Reliance, FactSet, Flipkart, Myntra"
  },
  {
    faculty: "Medicine — MBBS & MD/MS (IMS & SUM)",
    p2022: "100.0%",
    p2023: "100.0%",
    p2024: "100.0% (148 / 148 placed)",
    ctc: "₹9.00 – ₹12.00 LPA",
    recruiters: "SUM Hospital, Apollo Hospitals, Max Healthcare, Fortis, National & Global Research Institutes"
  },
  {
    faculty: "Dental Sciences — BDS & MDS (IDS)",
    p2022: "96.96%",
    p2023: "93.40%",
    p2024: "95.52% (64 / 67 placed)",
    ctc: "₹5.40 LPA (BDS) · ₹8.40 LPA (MDS)",
    recruiters: "Leading Corporate Dental Chains, Multi-Specialty Hospitals, Academic & Clinical Practice"
  },
  {
    faculty: "Law (SNIL) & Pharmacy (SPS)",
    p2022: "High",
    p2023: "196 placed",
    p2024: "90%+ Eligible Placed",
    ctc: "₹5.40 LPA (Law) · ₹3.50 LPA (Pharmacy)",
    recruiters: "Tier-1 Corporate Law Firms, Judiciary, Sun Pharma, Dr. Reddy's, Cipla, Lupin, Bharat Biotech"
  }
];

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ALLYSHIP++ | Siksha 'O' Anusandhan (SOA) Deemed to be University</title>
  <meta name="description" content="Bridging Industry. Academia. A Brighter Tomorrow. Industry-Academia Leadership Conclave Series organised by Siksha 'O' Anusandhan (SOA) Deemed to be University across Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            brand: {
              50: '#eff6ff',
              100: '#dbeafe',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              900: '#1e3a8a',
              950: '#070d18',
            }
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background-color: #070d18;
      color: #f8fafc;
      overflow-x: hidden;
    }
    .capsule-dock {
      background: rgba(15, 23, 42, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(51, 65, 85, 0.8);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
    }
    .tab-btn.active {
      background: linear-gradient(135deg, #2563eb, #4f46e5, #3b82f6);
      color: #ffffff;
      font-weight: 700;
      box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.35);
      border: 1px solid rgba(96, 165, 250, 0.5);
      transform: scale(1.03);
    }
    .tab-content {
      display: none;
      animation: fadeIn 0.3s ease-out;
    }
    .tab-content.active {
      display: block;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .modal-backdrop {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #0b1120;
    }
    ::-webkit-scrollbar-thumb {
      background: #1e293b;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #334155;
    }
  </style>
</head>
<body class="flex flex-col min-h-screen">

  <!-- TOP HEADER WITH FLOATING CAPSULE NAVIGATION -->
  <header class="sticky top-0 z-40 w-full bg-[#070d18]/95 backdrop-blur-md border-b border-slate-800/80 text-white transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Brand Logo with SOA University Logo -->
        <a href="#home" onclick="switchTab('home')" class="group flex items-center gap-3 focus:outline-none rounded-xl py-1 px-1.5">
          <div class="w-11 h-11 relative flex items-center justify-center rounded-full bg-white p-1 shadow-md shadow-blue-500/10 border border-slate-700/60 group-hover:border-blue-400/60 transition-all">
            <img src="./public/soa-logo.png" onerror="resolveImage(this, 'soa-logo.png')" alt="SOA Logo" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="text-base sm:text-lg font-extrabold tracking-wider text-white font-sans uppercase">SOA</span>
              <span class="text-xs sm:text-sm font-semibold tracking-widest text-slate-300 font-sans uppercase">UNIVERSITY</span>
            </div>
            <span class="text-[10px] tracking-wider text-cyan-400 font-mono font-bold -mt-1 hidden sm:block">ALLYSHIP++</span>
          </div>
        </a>

        <!-- Desktop Navigation Links — Fancy Floating Capsule Dock -->
        <nav class="hidden lg:flex items-center p-1.5 rounded-full capsule-dock gap-1">
          <button type="button" onclick="switchTab('home')" id="nav-btn-home" class="tab-btn active relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border border-transparent">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span>Home</span>
            <span class="indicator-dot w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9] animate-pulse"></span>
          </button>

          <button type="button" onclick="switchTab('event')" id="nav-btn-event" class="tab-btn text-slate-300 hover:text-white hover:bg-white/10 relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border border-transparent">
            <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span>Event</span>
            <span class="indicator-dot hidden w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9] animate-pulse"></span>
          </button>

          <button type="button" onclick="switchTab('impact')" id="nav-btn-impact" class="tab-btn text-slate-300 hover:text-white hover:bg-white/10 relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border border-transparent">
            <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            <span>Impact</span>
            <span class="indicator-dot hidden w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9] animate-pulse"></span>
          </button>

          <button type="button" onclick="switchTab('discover')" id="nav-btn-discover" class="tab-btn text-slate-300 hover:text-white hover:bg-white/10 relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border border-transparent">
            <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
            <span>Discover SOA</span>
            <span class="indicator-dot hidden w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9] animate-pulse"></span>
          </button>

          <button type="button" onclick="switchTab('collaborate')" id="nav-btn-collaborate" class="tab-btn text-slate-300 hover:text-white hover:bg-white/10 relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border border-transparent">
            <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>Collaborate</span>
            <span class="indicator-dot hidden w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9] animate-pulse"></span>
          </button>
        </nav>

        <!-- CTA: Get Invited -->
        <div class="hidden sm:flex items-center gap-3">
          <button type="button" onclick="openInviteModal()" class="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold tracking-wide shadow-md shadow-blue-600/30 hover:scale-105 transition-all flex items-center gap-2 border border-blue-400/30">
            <svg class="w-3.5 h-3.5 text-cyan-300 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            <span>Get Invited</span>
          </button>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex lg:hidden items-center gap-2">
          <button type="button" onclick="openInviteModal()" class="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md">
            Get Invited
          </button>
          <button type="button" onclick="toggleMobileMenu()" aria-label="Toggle Menu" class="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-menu" class="hidden lg:hidden border-t border-slate-800 bg-[#070d18]/98 backdrop-blur-2xl">
      <div class="max-w-7xl mx-auto px-4 py-4 space-y-2">
        <button onclick="switchTab('home'); toggleMobileMenu();" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800 flex items-center gap-3">
          <span>Home</span>
        </button>
        <button onclick="switchTab('event'); toggleMobileMenu();" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800 flex items-center gap-3">
          <span>Event</span>
        </button>
        <button onclick="switchTab('impact'); toggleMobileMenu();" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800 flex items-center gap-3">
          <span>Impact</span>
        </button>
        <button onclick="switchTab('discover'); toggleMobileMenu();" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800 flex items-center gap-3">
          <span>Discover SOA</span>
        </button>
        <button onclick="switchTab('collaborate'); toggleMobileMenu();" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800 flex items-center gap-3">
          <span>Collaborate</span>
        </button>
      </div>
    </div>
  </header>

  <!-- TAB 1: HOME PAGE -->
  <main id="tab-home" class="tab-content active flex-1">
    <!-- Hero Slider -->
    <section class="relative bg-[#070d18] text-white pt-12 sm:pt-16 lg:pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
      <div class="absolute inset-0 overflow-hidden">
        <div id="home-hero-slider" class="flex h-full w-full transition-transform duration-1000 ease-in-out" style="transform: translateX(0%);">
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/IMG_7873.jpg');" data-img="IMG_7873.jpg"></div>
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/IMG_7577.jpg');" data-img="IMG_7577.jpg"></div>
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/IMG_7849.jpg');" data-img="IMG_7849.jpg"></div>
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/IMG_7610.jpg');" data-img="IMG_7610.jpg"></div>
        </div>
        <div class="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none"></div>
      </div>

      <div class="absolute bottom-4 left-4 sm:left-8 z-10 flex items-center gap-3 bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60 shadow-lg">
        <div class="flex items-center gap-1.5">
          <button type="button" onclick="setHomeSlide(0)" class="home-dot h-1.5 rounded-full transition-all duration-300 w-6 bg-cyan-400"></button>
          <button type="button" onclick="setHomeSlide(1)" class="home-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40"></button>
          <button type="button" onclick="setHomeSlide(2)" class="home-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40"></button>
          <button type="button" onclick="setHomeSlide(3)" class="home-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40"></button>
        </div>
        <span id="home-slide-caption" class="hidden sm:inline-block text-[11px] font-mono text-slate-300 border-l border-slate-700 pl-3">
          Hyderabad Chapter 2.0 Live Conclave
        </span>
      </div>

      <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div class="lg:col-span-7 space-y-6 bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div class="inline-block">
            <span class="px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/60 text-blue-400 text-[11px] font-mono font-bold tracking-widest uppercase">
              Industry–Academia Leadership Conclave Series
            </span>
          </div>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans text-white">
            ALLY<span class="text-blue-500">SHIP</span><span class="text-cyan-400 font-mono">++</span>
          </h1>

          <p class="text-xl sm:text-2xl font-bold tracking-tight text-slate-100">
            Bridging Industry. Academia. A Brighter Tomorrow.
          </p>

          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Siksha ‘O’ Anusandhan (SOA) Deemed to be University takes academia directly into India’s premier corporate boardrooms—uniting CHROs, Global Talent Heads, engineering leaders, and Olympic sports icons to build inclusive, future-ready leadership ecosystems.
          </p>

          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-medium pt-1">
            <div class="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
              <svg class="w-3.5 h-3.5 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Bengaluru · Hyderabad</span>
            </div>
            <div class="flex items-center gap-2 text-slate-400">
              <span>| Organised by Siksha ‘O’ Anusandhan, Bhubaneswar</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4 pt-3">
            <button type="button" onclick="openVideoModal()" class="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2 shadow-sm">
              <div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <svg class="w-3 h-3 fill-white ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <span>Watch Conclave Highlights</span>
            </button>

            <button type="button" onclick="openInviteModal()" class="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition-all shadow-md shadow-blue-600/30 flex items-center gap-2">
              <span>Request Executive Invitation</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <div class="lg:col-span-5 relative flex justify-center">
          <div onclick="openVideoModal()" class="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group bg-slate-900 cursor-pointer">
            <img src="./public/IMG_7376.jpg" onerror="resolveImage(this, 'IMG_7376.jpg')" alt="Ballroom Conclave Session" class="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Live Conclave Session</div>
                  <div class="text-lg font-bold text-white mt-0.5">Allyship++ 2.0 Hyderabad Conclave</div>
                  <p class="text-xs text-slate-300 mt-0.5">Corporate CXOs, Academic Leaders & Delegates</p>
                </div>
                <div class="w-10 h-10 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  <svg class="w-4 h-4 fill-white ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Horizontal Stats Panel -->
    <section class="bg-[#0b1120] border-b border-slate-800 text-white py-6 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="flex flex-col items-center justify-center p-3">
          <div class="flex items-center gap-2 text-blue-400 mb-1">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">8</span>
          </div>
          <span class="text-xs text-slate-400 font-medium">Conclaves across 5 Metro Hubs</span>
        </div>
        <div class="flex flex-col items-center justify-center p-3">
          <div class="flex items-center gap-2 text-blue-400 mb-1">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">80-90+</span>
          </div>
          <span class="text-xs text-slate-400 font-medium">Senior Leaders per Chapter</span>
        </div>
        <div class="flex flex-col items-center justify-center p-3">
          <div class="flex items-center gap-2 text-blue-400 mb-1">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            <span class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">2.0</span>
          </div>
          <span class="text-xs text-slate-400 font-medium">2026 Edition (Hyderabad & Chennai)</span>
        </div>
        <div class="flex flex-col items-center justify-center p-3">
          <div class="flex items-center gap-2 text-blue-400 mb-1">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            <span class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">40+</span>
          </div>
          <span class="text-xs text-slate-400 font-medium">CXO Panelists & Sports Legends</span>
        </div>
      </div>
    </section>

    <!-- Corporate Recruiter & GCC Ecosystem Strip (Airscream style) -->
    <section class="bg-[#070d18] border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <p class="text-center text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-6 font-semibold">
          Corporate GCCs & Recruiter Alliances Deliberating with SOA University
        </p>
        <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 hover:opacity-100 transition-opacity">
          <span class="text-xs sm:text-sm font-bold tracking-wider text-slate-300 font-mono">MICROSOFT</span>
          <span class="text-xs sm:text-sm font-bold tracking-wider text-slate-300 font-mono">DELL TECHNOLOGIES</span>
          <span class="text-xs sm:text-sm font-bold tracking-wider text-slate-300 font-mono">ZSCALER</span>
          <span class="text-xs sm:text-sm font-bold tracking-wider text-slate-300 font-mono">BNY MELLON</span>
          <span class="text-xs sm:text-sm font-bold tracking-wider text-slate-300 font-mono">TECH MAHINDRA</span>
          <span class="text-xs sm:text-sm font-bold tracking-wider text-slate-300 font-mono">LTTS</span>
          <span class="text-xs sm:text-sm font-bold tracking-wider text-slate-300 font-mono">LSEG</span>
          <span class="text-xs sm:text-sm font-bold tracking-wider text-slate-300 font-mono">STANDARD CHARTERED</span>
        </div>
      </div>
    </section>

    <!-- The Allyship++ Architecture -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 block font-mono">The Allyship++ Architecture</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">A Platform for Real Institutional Impact</h2>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Allyship++ is more than an event. It is an operational bridge taking academia directly into corporate capitals to co-create agile talent pipelines, applied R&D labs, and inclusive workplace cultures.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-[#0b1120]/80 rounded-2xl p-6 border border-slate-800 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4 text-xl font-bold">⇄</div>
            <h3 class="text-base font-bold text-white">Exchange Ideas</h3>
            <p class="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Candid CXO panels and fireside chats addressing urgent workplace realities—from psychological safety and hybrid engineering cultures to Gen-Z career aspirations.
            </p>
          </div>
        </div>

        <div class="bg-[#0b1120]/80 rounded-2xl p-6 border border-slate-800 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4 text-xl font-bold">⚭</div>
            <h3 class="text-base font-bold text-white">Build Partnerships</h3>
            <p class="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Direct pathways into SOA’s research ecosystem, generating joint Centres of Excellence with leaders like Tech Mahindra and L&T Technology Services, alongside sponsored consultancy.
            </p>
          </div>
        </div>

        <div class="bg-[#0b1120]/80 rounded-2xl p-6 border border-slate-800 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4 text-xl font-bold">◎</div>
            <h3 class="text-base font-bold text-white">Shape Opportunities</h3>
            <p class="text-xs text-slate-300 mt-2.5 leading-relaxed">
              A continuous feedback loop where boardroom expectations directly inform SOA’s flexible curriculum design, technical skill labs, and campus-to-corporate readiness.
            </p>
          </div>
        </div>

        <div class="bg-[#0b1120]/80 rounded-2xl p-6 border border-slate-800 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4 text-xl font-bold">✦</div>
            <h3 class="text-base font-bold text-white">Drive Impact</h3>
            <p class="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Operationalizing allyship not as a standalone HR initiative, but as an everyday leadership responsibility that fuels innovation, institutional trust, and sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder President & Chairman's Vision -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div class="bg-[#0b1120]/90 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
        <div class="md:col-span-5 relative h-80 sm:h-96 w-full bg-slate-900">
          <img src="./public/chairman-manojranjan-nayak.png" onerror="resolveImage(this, 'chairman-manojranjan-nayak.png')" alt="Prof. (Dr.) Manojranjan Nayak" class="w-full h-full object-cover object-top">
          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-wider border border-slate-700">Chairman</span>
          </div>
        </div>

        <div class="md:col-span-7 p-8 sm:p-12 space-y-6">
          <div class="space-y-1">
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block">Founder's Vision & Institutional Stewardship</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Vision from the Chairman</h2>
          </div>

          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Under the pioneering stewardship of Founder President & Chairman Prof. (Dr.) Manojranjan Nayak, Siksha ‘O’ Anusandhan (Deemed to be University) and ITER were founded on the bedrock of academic excellence and societal impact—growing into a NIRF Top-15 multidisciplinary benchmark.
          </p>

          <blockquote class="text-xs sm:text-sm text-slate-200 italic leading-relaxed border-l-4 border-blue-500 pl-4 bg-slate-900/80 py-3 rounded-r-xl border border-slate-800/80">
            “From pioneering engineering education at ITER to building SOA into a world-class university, our enduring conviction has been that education achieves its true purpose when academia and industry walk hand-in-hand. Allyship++ embodies this vision—bridging boardrooms and classrooms to nurture future-ready leaders of high intellect and profound human empathy.”
          </blockquote>

          <div class="pt-2 border-t border-slate-800">
            <div class="font-serif italic text-2xl text-cyan-400 font-bold tracking-wider">Manojranjan Nayak</div>
            <div class="text-sm font-bold text-white mt-1">Prof. (Dr.) Manojranjan Nayak</div>
            <div class="text-xs text-slate-400 font-medium">Founder President & Chairman, Siksha ‘O’ Anusandhan (SOA) / ITER</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Six-Chapter Conclave Highlights -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block mb-1">Across India's Corporate Capitals</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Six Chapters Across Editions 1.0 & 2.0</h2>
          <p class="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Deliberating future-ready engineering cultures, psychological safety, and sports-inspired leadership resilience across India’s major metropolitan innovation corridors.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <div class="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button type="button" onclick="filterHomeChapters('All')" id="btn-filter-all" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm">All 6 Chapters</button>
            <button type="button" onclick="filterHomeChapters('1.0')" id="btn-filter-1" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white">Edition 1.0</button>
            <button type="button" onclick="filterHomeChapters('2.0')" id="btn-filter-2" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white">Edition 2.0</button>
          </div>

          <button onclick="switchTab('event')" class="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors pl-2">
            <span>Explore All 6 Conclaves & Speakers</span>
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <!-- Conclave Cards Grid -->
      <div id="home-conclaves-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </section>
  </main>

  <!-- TAB 2: EVENT PAGE -->
  <main id="tab-event" class="tab-content flex-1">
    <!-- Event Hero Slider -->
    <section class="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div id="event-hero-slider" class="flex h-full w-full transition-transform duration-1000 ease-in-out" style="transform: translateX(0%);">
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/IMG_7492.jpg');" data-img="IMG_7492.jpg"></div>
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/CON01670.JPG');" data-img="CON01670.JPG"></div>
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/CON01638.JPG');" data-img="CON01638.JPG"></div>
        </div>
        <div class="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none"></div>
      </div>

      <div class="absolute bottom-4 left-4 sm:left-8 z-10 flex items-center gap-3 bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60 shadow-lg">
        <div class="flex items-center gap-1.5">
          <button type="button" onclick="setEventSlide(0)" class="event-dot h-1.5 rounded-full transition-all duration-300 w-6 bg-cyan-400"></button>
          <button type="button" onclick="setEventSlide(1)" class="event-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40"></button>
          <button type="button" onclick="setEventSlide(2)" class="event-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40"></button>
        </div>
        <span id="event-slide-caption" class="hidden sm:inline-block text-[11px] font-mono text-slate-300 border-l border-slate-700 pl-3">
          Hyderabad Chapter Ballroom & Delegates
        </span>
      </div>

      <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 space-y-5 bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div class="inline-block">
            <span class="px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/60 text-blue-400 text-[11px] font-mono font-bold tracking-widest uppercase">
              Master Conclave Series · 2024–2026
            </span>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
            Allyship<span class="text-cyan-400 font-mono">++</span> Conclaves
          </h1>
          <p class="text-lg sm:text-xl font-bold text-slate-200">
            Across 5 Metro Hubs: Bengaluru · Hyderabad · Kolkata · Mumbai · Chennai
          </p>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Explore detailed recaps, distinguished speakers, Olympic medalists, CXO panels, and institutional takeaways from all six regional conclaves.
          </p>
          <div class="pt-2 flex flex-wrap items-center gap-3">
            <button type="button" onclick="openInviteModal()" class="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition-all shadow-md flex items-center gap-2">
              <span>Request Delegate Pass</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <button type="button" onclick="openVideoModal()" class="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2">
              <div class="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <svg class="w-2.5 h-2.5 fill-white ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <span>Watch Conclave Video</span>
            </button>
          </div>
        </div>

        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
            <img src="./public/CON01670.JPG" onerror="resolveImage(this, 'CON01670.JPG')" alt="Conclave Delegation" class="w-full h-72 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
              <span class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Southern Conclave</span>
              <span class="text-sm font-bold text-white mt-0.5">Chennai Chapter 2.0 Delegation</span>
              <span class="text-[11px] text-slate-300 mt-0.5">CHROs, Talent Heads & Athletics Coach Premanand J.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chapter Selector & Deep Dive -->
    <section id="chapter-details" class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div class="mb-8">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block mb-2">Conclave Selector</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Select a Chapter for Full Roster & Recaps</h2>
        
        <div class="flex flex-wrap gap-2 pt-4" id="event-chapter-pills"></div>
      </div>

      <div id="event-chapter-container" class="bg-[#0b1120]/90 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10 space-y-8"></div>
    </section>

    <!-- Conclave Format & Schedule -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-800">
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block">Structured Architecture</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">The Conclave Format</h2>
        <p class="text-xs sm:text-sm text-slate-400">Each edition of Allyship++ follows an immersive half-day executive itinerary designed for high-impact boardroom engagement.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="p-6 rounded-2xl bg-[#0b1120]/80 border border-slate-800 shadow-xl space-y-3">
          <div class="text-xs font-mono font-bold text-cyan-400">SESSION 1 · 09:30 AM</div>
          <h3 class="font-bold text-base text-white">Inaugural & Athletic Keynote</h3>
          <p class="text-xs text-slate-300 leading-relaxed">Visionary opening by SOA Leadership followed by an Olympic sports icon on resilience, mental fortitude, and team championship mindset.</p>
        </div>
        <div class="p-6 rounded-2xl bg-[#0b1120]/80 border border-slate-800 shadow-xl space-y-3">
          <div class="text-xs font-mono font-bold text-cyan-400">SESSION 2 · 11:00 AM</div>
          <h3 class="font-bold text-base text-white">CXO Deliberation Panel</h3>
          <p class="text-xs text-slate-300 leading-relaxed">Cross-industry leaders examining psychological safety, Gen-Z workforce assimilation, and moving beyond symbolic allyship into daily managerial practice.</p>
        </div>
        <div class="p-6 rounded-2xl bg-[#0b1120]/80 border border-slate-800 shadow-xl space-y-3">
          <div class="text-xs font-mono font-bold text-cyan-400">SESSION 3 · 01:30 PM</div>
          <h3 class="font-bold text-base text-white">Curriculum & CoE Co-Creation</h3>
          <p class="text-xs text-slate-300 leading-relaxed">Collaborative workshop bridging corporate technical roadmaps with SOA research labs, student projects, and Centres of Excellence.</p>
        </div>
        <div class="p-6 rounded-2xl bg-[#0b1120]/80 border border-slate-800 shadow-xl space-y-3">
          <div class="text-xs font-mono font-bold text-cyan-400">SESSION 4 · 03:00 PM</div>
          <h3 class="font-bold text-base text-white">Executive Networking & High Tea</h3>
          <p class="text-xs text-slate-300 leading-relaxed">Intimate roundtable connecting corporate talent directors with university leadership, student innovators, and faculty chairs.</p>
        </div>
      </div>
    </section>
  </main>

  <!-- TAB 3: IMPACT PAGE -->
  <main id="tab-impact" class="tab-content flex-1">
    <!-- Impact Hero -->
    <section class="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 space-y-5">
          <span class="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
            Measurable Outcomes & Media Footprint
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
            Real Institutional <span class="text-blue-500">Transformation</span>
          </h1>
          <p class="text-lg sm:text-xl font-bold text-slate-200">
            From Metro Boardrooms to Campus Labs & Record Placements
          </p>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Allyship++ delivers tangible outcomes: specialized corporate Centres of Excellence, industry-informed technical curricula, 500+ engaged executive leaders, and national media coverage.
          </p>
        </div>

        <div class="lg:col-span-5 grid grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-center">
            <span class="text-3xl sm:text-4xl font-extrabold text-blue-400">500+</span>
            <span class="text-xs text-slate-300 block font-medium mt-1">Industry Leaders Engaged</span>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-center">
            <span class="text-3xl sm:text-4xl font-extrabold text-blue-400">2</span>
            <span class="text-xs text-slate-300 block font-medium mt-1">Active CoEs (TechM & LTTS)</span>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-center">
            <span class="text-3xl sm:text-4xl font-extrabold text-blue-400">11</span>
            <span class="text-xs text-slate-300 block font-medium mt-1">LSEG Hires (Highest in India)</span>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-center">
            <span class="text-3xl sm:text-4xl font-extrabold text-blue-400">94.54%</span>
            <span class="text-xs text-slate-300 block font-medium mt-1">B.Tech Placement Rate</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 Qualitative Outcome Pillars -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block">Systemic Progress</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Three Qualitative Outcome Pillars</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-[#0b1120]/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
          <span class="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30">Institutional Infrastructure</span>
          <h3 class="text-lg font-bold text-white">Curriculum & CoE Co-Creation</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Boardroom feedback from Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai has translated into specialized skill labs on campus—including the July 2026 Tech Mahindra Centre of Excellence at ITER and Wipro job-readiness tracks (Fast Forward, Talent Next, Mission10x).
          </p>
          <div class="pt-3 border-t border-slate-800 text-xs font-bold text-cyan-400">Active CoEs with Tech Mahindra & LTTS</div>
        </div>

        <div class="bg-[#0b1120]/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
          <span class="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30">Career Velocity</span>
          <h3 class="text-lg font-bold text-white">Record-Breaking Graduate Absorption</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Deepened trust among global capability centres and Fortune 500 recruiters contributed to a 94.54% engineering placement rate, a 97.22% MBA placement rate, and London Stock Exchange Group (LSEG) selecting 11 SOA students in a single drive—its highest campus tally in India.
          </p>
          <div class="pt-3 border-t border-slate-800 text-xs font-bold text-cyan-400">11 Hired by LSEG · ₹46 LPA Peak</div>
        </div>

        <div class="bg-[#0b1120]/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
          <span class="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30">Workplace Cultural Reform</span>
          <h3 class="text-lg font-bold text-white">Gen-Z Leadership & HR Policy Adoption</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Over 500 participating CHROs, VPs, and talent leaders across six conclaves have co-developed actionable playbooks on psychological safety, Upstander/Sponsor allyship roles, and empathetic Gen-Z onboarding for hybrid corporate environments.
          </p>
          <div class="pt-3 border-t border-slate-800 text-xs font-bold text-cyan-400">500+ Executives Engaged</div>
        </div>
      </div>
    </section>

    <!-- Press & Media Clippings Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-800">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block mb-1">National Journalism & Media</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Press & Media Coverage</h2>
          <p class="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Verified news reports from national and regional newspapers documenting SOA’s Allyship++ conclaves, corporate ties, and NIRF rankings.
          </p>
        </div>
      </div>

      <div id="press-clippings-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </section>
  </main>

  <!-- TAB 4: DISCOVER SOA PAGE -->
  <main id="tab-discover" class="tab-content flex-1">
    <!-- Discover Hero Slider -->
    <section class="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div id="discover-hero-slider" class="flex h-full w-full transition-transform duration-1000 ease-in-out" style="transform: translateX(0%);">
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/soa-campus-aerial.jpg');" data-img="soa-campus-aerial.jpg"></div>
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/soa-iter-building.jpg');" data-img="soa-iter-building.jpg"></div>
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/soa-auditorium.jpg');" data-img="soa-auditorium.jpg"></div>
          <div class="w-full h-full flex-shrink-0 bg-cover bg-center" style="background-image: url('./public/soa-campus-grounds.jpg');" data-img="soa-campus-grounds.jpg"></div>
        </div>
        <div class="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none"></div>
      </div>

      <div class="absolute bottom-4 left-4 sm:left-8 z-10 flex items-center gap-3 bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60 shadow-lg">
        <div class="flex items-center gap-1.5">
          <button type="button" onclick="setDiscoverSlide(0)" class="discover-dot h-1.5 rounded-full transition-all duration-300 w-6 bg-cyan-400"></button>
          <button type="button" onclick="setDiscoverSlide(1)" class="discover-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40"></button>
          <button type="button" onclick="setDiscoverSlide(2)" class="discover-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40"></button>
          <button type="button" onclick="setDiscoverSlide(3)" class="discover-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40"></button>
        </div>
        <span id="discover-slide-caption" class="hidden sm:inline-block text-[11px] font-mono text-slate-300 border-l border-slate-700 pl-3">
          Siksha 'O' Anusandhan Main Campus Aerial Panorama
        </span>
      </div>

      <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 space-y-5 bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <span class="text-[11px] font-mono font-bold tracking-widest text-blue-400 uppercase">
            DEEMED TO BE UNIVERSITY · BHUBANESWAR, INDIA
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
            Discover <span class="text-blue-500">SOA</span>
          </h1>
          <p class="text-lg sm:text-xl font-bold text-slate-100">
            Ranked 15th Nationally. A Premier Multi-Faculty Research University.
          </p>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Siksha ‘O’ Anusandhan (SOA) is recognized among India’s top four institutions in the Times Higher Education World Reputation Rankings 2025—fostering 30,000+ students, 38 Stanford Top 2% scientists, and industry-embedded Centres of Excellence.
          </p>
          <div class="pt-2 flex flex-wrap items-center gap-3">
            <button type="button" onclick="openTourModal()" class="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2 shadow-md">
              <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <svg class="w-2.5 h-2.5 fill-white ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <span>Take a Virtual Tour</span>
            </button>
            <button type="button" onclick="openInviteModal()" class="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2">
              <span>Request Executive Visit</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
            <img src="./public/soa-campus-aerial.jpg" onerror="resolveImage(this, 'soa-campus-aerial.jpg')" alt="SOA Main Campus" class="w-full h-72 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
              <span class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Khandagiri Square, Bhubaneswar</span>
              <span class="text-sm font-bold text-white mt-0.5">SOA Deemed to be University Main Campus</span>
              <span class="text-[11px] text-slate-300 mt-0.5">NAAC A++ (CGPA 3.88) · NIRF #15 University in India</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5 Hero Stat Counters -->
    <section class="bg-[#0b1120] border-b border-slate-800 text-white py-6 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
        <div class="p-2 flex flex-col items-center justify-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-blue-400 font-sans tracking-tight">15th</div>
          <div class="text-xs text-slate-300 font-medium mt-1 leading-snug">NIRF 2025, University Category (Score: 63.14 · #1 in Odisha)</div>
        </div>
        <div class="p-2 flex flex-col items-center justify-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-blue-400 font-sans tracking-tight">25th</div>
          <div class="text-xs text-slate-300 font-medium mt-1 leading-snug">NIRF 2025, Overall Category (Top 25 since 2016)</div>
        </div>
        <div class="p-2 flex flex-col items-center justify-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-blue-400 font-sans tracking-tight">A++</div>
          <div class="text-xs text-slate-300 font-medium mt-1 leading-snug">NAAC Accredited (CGPA 3.88) · UGC Category-I Graded Autonomy</div>
        </div>
        <div class="p-2 flex flex-col items-center justify-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-blue-400 font-sans tracking-tight">Top 4</div>
          <div class="text-xs text-slate-300 font-medium mt-1 leading-snug">In India, THE World Reputation Rankings 2025</div>
        </div>
        <div class="p-2 flex flex-col items-center justify-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-blue-400 font-sans tracking-tight">3rd</div>
          <div class="text-xs text-slate-300 font-medium mt-1 leading-snug">Swachh Campus Ranking Nationally</div>
        </div>
      </div>
    </section>

    <!-- 6 Constituent Faculties -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block">Academic & Clinical Infrastructure</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Constituent Faculties & Verified National Standing</h2>
        <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Updated with official NIRF 2025, Times Engineering, and international accreditation data across SOA's premier faculties.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        \${faculties.map(f => \`
          <div class="bg-[#0b1120]/80 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all flex flex-col justify-between space-y-4">
            <div class="space-y-3">
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30">\${f.tag}</span>
              <h3 class="text-base font-bold text-white">\${f.name}</h3>
              <div class="text-xs font-semibold text-cyan-300 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">\${f.standing}</div>
              <p class="text-xs text-slate-300 leading-relaxed">\${f.desc}</p>
            </div>
            <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300">
              <span class="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">\${f.metric}</span>
              <span class="text-slate-400">\${f.highlight}</span>
            </div>
          </div>
        \`).join('')}
      </div>
    </section>

    <!-- Campus Infrastructure 4 Cards -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-800">
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block">Official University Campus</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">World-Class Infrastructure & Research Facilities</h2>
        <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">Spanning over 127 acres in Bhubaneswar, SOA provides cutting-edge engineering laboratories, super-specialty hospitals, convention auditoriums, and high-performance computing centers.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-[#0b1120]/80 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
          <div class="h-48 overflow-hidden bg-slate-900 relative">
            <img src="./public/soa-campus-aerial.jpg" onerror="resolveImage(this, 'soa-campus-aerial.jpg')" alt="Main Campus" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-900/80 text-blue-200 text-[10px] font-mono font-bold uppercase tracking-wider">Main Campus</span>
          </div>
          <div class="p-4 space-y-1">
            <h4 class="font-bold text-sm text-white">Main University Campus</h4>
            <p class="text-xs text-slate-300 leading-relaxed">127-acre campus in Khandagiri Square with academic complexes, libraries, and hostels.</p>
          </div>
        </div>

        <div class="bg-[#0b1120]/80 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
          <div class="h-48 overflow-hidden bg-slate-900 relative">
            <img src="./public/soa-iter-building.jpg" onerror="resolveImage(this, 'soa-iter-building.jpg')" alt="ITER Engineering" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-900/80 text-blue-200 text-[10px] font-mono font-bold uppercase tracking-wider">ITER Engineering</span>
          </div>
          <div class="p-4 space-y-1">
            <h4 class="font-bold text-sm text-white">ITER Engineering Faculty</h4>
            <p class="text-xs text-slate-300 leading-relaxed">Ranked 22nd in India (NIRF 2025) with Tech Mahindra and LTTS Centres of Excellence.</p>
          </div>
        </div>

        <div class="bg-[#0b1120]/80 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
          <div class="h-48 overflow-hidden bg-slate-900 relative">
            <img src="./public/soa-auditorium.jpg" onerror="resolveImage(this, 'soa-auditorium.jpg')" alt="Convention Hall" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-900/80 text-blue-200 text-[10px] font-mono font-bold uppercase tracking-wider">Convention Hall</span>
          </div>
          <div class="p-4 space-y-1">
            <h4 class="font-bold text-sm text-white">University Auditorium</h4>
            <p class="text-xs text-slate-300 leading-relaxed">State-of-the-art auditorium seating thousands for conclaves, convocations, and symposia.</p>
          </div>
        </div>

        <div class="bg-[#0b1120]/80 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
          <div class="h-48 overflow-hidden bg-slate-900 relative">
            <img src="./public/soa-campus-grounds.jpg" onerror="resolveImage(this, 'soa-campus-grounds.jpg')" alt="Innovation Labs" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-900/80 text-blue-200 text-[10px] font-mono font-bold uppercase tracking-wider">Innovation Labs</span>
          </div>
          <div class="p-4 space-y-1">
            <h4 class="font-bold text-sm text-white">Academic Quads & R&D</h4>
            <p class="text-xs text-slate-300 leading-relaxed">Ranked 3rd nationally in Swachh Campus with green quads and research centers.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- TAB 5: COLLABORATE PAGE -->
  <main id="tab-collaborate" class="tab-content flex-1">
    <!-- Collaborate Hero -->
    <section class="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 space-y-5">
          <span class="text-[11px] font-mono font-bold tracking-widest text-blue-400 uppercase">
            Corporate Partnerships & Industry Engagement
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
            Collaborate with <span class="text-blue-500">SOA</span>
          </h1>
          <p class="text-lg sm:text-xl font-bold text-slate-200">
            From Metro Boardrooms to Campus Labs & Placement Drives
          </p>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Whether establishing a corporate Centre of Excellence, launching applied R&D pilots, designing agile curriculum tracks, or recruiting top engineering and management cohorts—partner with a Top-15 NAAC A++ benchmark.
          </p>
        </div>

        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
            <img src="./public/IMG_7873.jpg" onerror="resolveImage(this, 'IMG_7873.jpg')" alt="Corporate Partnership" class="w-full h-72 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
              <span class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Corporate Partnership Directorate</span>
              <span class="text-sm font-bold text-white mt-0.5">Centres of Excellence & Innovation Labs</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 Engagement Tracks -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block">Engagement Tracks</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Four Corporate Partnership Pillars</h2>
        <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">Tangible engagement mechanisms connecting corporate leadership with SOA's 30,000 students and advanced research ecosystem.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-[#0b1120]/80 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
          <div class="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xl font-bold">?</div>
          <h3 class="text-base font-bold text-white">Industry Challenges & Incubation</h3>
          <p class="text-xs text-slate-300 leading-relaxed">Bring real-world engineering, clinical, or business challenges for faculty and student teams to prototype via the AIC-SOA Foundation.</p>
        </div>
        <div class="bg-[#0b1120]/80 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
          <div class="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xl font-bold">⚗</div>
          <h3 class="text-base font-bold text-white">Centres of Excellence & R&D</h3>
          <p class="text-xs text-slate-300 leading-relaxed">Co-establish specialized labs modeled on SOA’s recent Centres of Excellence with Tech Mahindra and L&T Technology Services.</p>
        </div>
        <div class="bg-[#0b1120]/80 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
          <div class="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xl font-bold">☺</div>
          <h3 class="text-base font-bold text-white">Executive Mentorship & Curriculum</h3>
          <p class="text-xs text-slate-300 leading-relaxed">Shape flexible curricula and job-ready training tracks—building on SOA’s Talent Next and Mission10x alliances with Wipro.</p>
        </div>
        <div class="bg-[#0b1120]/80 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
          <div class="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xl font-bold">✉</div>
          <h3 class="text-base font-bold text-white">High-Velocity Campus Hiring</h3>
          <p class="text-xs text-slate-300 leading-relaxed">Recruit from an ecosystem delivering 94.54% B.Tech and 97.22% MBA placement rates, ₹46 LPA peak packages, and record selections by LSEG.</p>
        </div>
      </div>
    </section>

    <!-- Placement Velocity Table -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-800">
      <div class="space-y-6">
        <div class="max-w-3xl space-y-2">
          <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block">Absorption Metrics</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Verified Placement Velocity & Recruitment Velocity</h2>
          <p class="text-xs sm:text-sm text-slate-400">Annual campus recruitment audited data across SOA constituent faculties, with London Stock Exchange Group (LSEG) selecting 11 students in a single drive.</p>
        </div>

        <div class="overflow-x-auto bg-[#0b1120]/90 rounded-3xl border border-slate-800 shadow-2xl">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="bg-slate-900/90 border-b border-slate-800 text-slate-200 font-bold">
                <th class="p-4 sm:p-5">Academic Stream / Faculty</th>
                <th class="p-4 sm:p-5">2022 Placement</th>
                <th class="p-4 sm:p-5">2023 Placement</th>
                <th class="p-4 sm:p-5">2024 Placement Rate</th>
                <th class="p-4 sm:p-5">Median / Peak CTC</th>
                <th class="p-4 sm:p-5">Key Corporate Recruiters</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800 text-slate-300">
              \${placementRows.map(r => \`
                <tr class="hover:bg-slate-800/40 transition-colors">
                  <td class="p-4 sm:p-5 font-bold text-white">\${r.faculty}</td>
                  <td class="p-4 sm:p-5 font-medium">\${r.p2022}</td>
                  <td class="p-4 sm:p-5 font-medium">\${r.p2023}</td>
                  <td class="p-4 sm:p-5 font-bold text-cyan-300 bg-blue-950/40">\${r.p2024}</td>
                  <td class="p-4 sm:p-5 font-semibold text-slate-200">\${r.ctc}</td>
                  <td class="p-4 sm:p-5 text-[11px] leading-snug">\${r.recruiters}</td>
                </tr>
              \`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Interactive Industry Challenge Form -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-800">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div class="lg:col-span-5 space-y-4">
          <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block">Interactive Submission Portal</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Submit an Industry Challenge</h2>
          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Have an engineering hurdle, healthcare AI problem statement, or talent requirement? Fill in the details to submit directly to our Corporate Relations Cell, or copy the formatted brief into your email client.
          </p>
          <div class="p-5 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-3">
            <div class="flex items-center gap-2 text-cyan-300 font-bold text-xs">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <span>Two-Way Engagement Process:</span>
            </div>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li>Submit via web form to generate a tracked Reference ID.</li>
              <li>One-click copy to clipboard for executive forwarding.</li>
              <li>Direct dispatch to official mailbox: <b>info@soa.ac.in</b>.</li>
              <li>48-hour response protocol from Dean's Office.</li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-7 bg-[#0b1120]/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
          <form id="challenge-form" onsubmit="handleChallengeSubmit(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Your Name</label>
                <input type="text" id="ch-name" required placeholder="e.g. Rajesh Kumar" class="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Corporate Email</label>
                <input type="email" id="ch-email" required placeholder="e.g. rajesh@company.com" class="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Challenge Title</label>
                <input type="text" id="ch-title" required placeholder="e.g. AI-driven Supply Chain Optimization" class="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Industry Sector</label>
                <input type="text" id="ch-sector" placeholder="e.g. Automotive / Fintech / Healthcare" class="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">Problem Statement & Scope</label>
              <textarea id="ch-desc" rows="4" required placeholder="Describe the challenge, desired prototype timeline, or campus hiring requirement..." class="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"></textarea>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button type="button" onclick="copyBrief()" class="px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition-colors">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                <span id="copy-btn-text">Copy Formatted Brief</span>
              </button>

              <div class="flex items-center gap-2">
                <a id="email-btn-link" href="mailto:info@soa.ac.in?subject=Industry%20Challenge%20Submission" class="px-4 py-2.5 rounded-xl border border-blue-500/30 bg-blue-950/60 hover:bg-blue-900/60 text-cyan-300 text-xs font-bold flex items-center gap-1.5 transition-colors">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>Email Directly</span>
                </a>
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/30">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  <span>Submit to SOA</span>
                </button>
              </div>
            </div>
          </form>

          <div id="challenge-success" class="hidden text-center py-8 space-y-4">
            <div class="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3 class="text-xl font-bold text-white">Challenge Brief Logged Successfully!</h3>
            <p class="text-xs text-slate-300 max-w-md mx-auto">
              Your reference ID is <span id="ref-id-display" class="font-mono font-bold text-cyan-400">CHAL-7821</span>. The Corporate Relations Directorate will contact you within 2 working days.
            </p>
            <button type="button" onclick="resetChallengeForm()" class="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold">Submit Another Brief</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Direct Contacts Directory -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-800">
      <div class="bg-[#070d18] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
        <div class="max-w-3xl space-y-2">
          <span class="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Official Institutional Directory</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white">Direct Contact — SOA Corporate Relations & Placement</h2>
          <p class="text-xs sm:text-sm text-slate-300">Siksha ‘O’ Anusandhan (Deemed to be University), Khandagiri Square, Bhubaneswar – 751030, Odisha, India</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-1">
            <div class="text-sm font-bold text-white">Prof. (Dr.) Manojranjan Nayak</div>
            <div class="text-xs text-cyan-300 leading-snug">Founder President & Chairman, Siksha 'O' Anusandhan / ITER</div>
          </div>
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-1">
            <div class="text-sm font-bold text-white">Prof. (Dr.) Raj Kumar Hota</div>
            <div class="text-xs text-cyan-300 leading-snug">Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA</div>
          </div>
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-1">
            <div class="text-sm font-bold text-white">Mr. Sumit Mitra</div>
            <div class="text-xs text-cyan-300 leading-snug">Head, Career Development Cell (CDC), SOA University</div>
          </div>
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-1">
            <div class="text-sm font-bold text-white">Ms. Kajal Panda</div>
            <div class="text-xs text-cyan-300 leading-snug">Deputy Director, Corporate Relations & Learning & Development</div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>Official Email:</span>
            <a href="mailto:info@soa.ac.in" class="text-blue-400 hover:underline font-bold">info@soa.ac.in</a>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            <span>Placement Portal:</span>
            <a href="https://www.placements.soa.ac.in" target="_blank" class="text-blue-400 hover:underline font-bold">www.placements.soa.ac.in</a>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            <span>University Contact:</span>
            <a href="https://www.soa.ac.in/contact-us" target="_blank" class="text-blue-400 hover:underline font-bold">www.soa.ac.in/contact-us</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- UNIVERSAL FOOTER -->
  <footer class="bg-[#070d18] text-slate-300 pt-16 pb-12 border-t border-slate-800/80 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
        <div class="lg:col-span-2 space-y-4">
          <a href="#home" onclick="switchTab('home')" class="inline-flex items-center gap-3">
            <div class="w-10 h-10 relative flex items-center justify-center rounded-full bg-white p-1 shadow-md border border-slate-700/60">
              <img src="./public/soa-logo.png" onerror="resolveImage(this, 'soa-logo.png')" alt="SOA Logo" class="w-full h-full object-contain">
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold text-white tracking-wider font-sans">SOA UNIVERSITY</span>
              <span class="text-[11px] font-bold text-cyan-400 tracking-widest font-mono uppercase -mt-0.5">ALLYSHIP++</span>
            </div>
          </a>
          <p class="text-sm font-semibold text-slate-300 max-w-sm leading-relaxed">
            “Bridging Industry. Academia. A Brighter Tomorrow.”
          </p>
          <p class="text-xs text-slate-400 max-w-md leading-relaxed">
            Industry–Academia Leadership Conclave Series organised by Siksha ‘O’ Anusandhan, Bhubaneswar across Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai.
          </p>
          <div class="pt-2">
            <span class="text-xs font-semibold text-slate-200 block mb-2">Stay Updated with Event Announcements</span>
            <div class="relative flex items-center max-w-sm">
              <input type="email" placeholder="Enter your corporate email" class="w-full pl-4 pr-24 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
              <button type="button" onclick="alert('Thank you for subscribing to Allyship++ briefings!')" class="absolute right-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-200">Navigation</h3>
          <ul class="space-y-2 text-xs">
            <li><button onclick="switchTab('home')" class="text-slate-400 hover:text-blue-400 transition-colors">Home</button></li>
            <li><button onclick="switchTab('event')" class="text-slate-400 hover:text-blue-400 transition-colors">Event</button></li>
            <li><button onclick="switchTab('impact')" class="text-slate-400 hover:text-blue-400 transition-colors">Impact</button></li>
            <li><button onclick="switchTab('discover')" class="text-slate-400 hover:text-blue-400 transition-colors">Discover SOA</button></li>
            <li><button onclick="switchTab('collaborate')" class="text-slate-400 hover:text-blue-400 transition-colors">Collaborate</button></li>
          </ul>
        </div>

        <div class="space-y-3">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-200">Focus Pillars</h3>
          <ul class="space-y-2 text-xs text-slate-400">
            <li>Exchange Ideas & Thought Leadership</li>
            <li>Research & Industry Pilots</li>
            <li>Talent Mentorship & Hiring</li>
            <li>Incubation & Startup Labs</li>
            <li>Executive Roundtables</li>
          </ul>
        </div>

        <div class="space-y-3">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-200">Venue & Secretariat</h3>
          <div class="space-y-2 text-xs text-slate-400">
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-blue-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <span class="block text-slate-200 font-semibold">SOA University Campus:</span>
                <span>Khandagiri Square, Bhubaneswar, Odisha 751030, India</span>
              </div>
            </div>
            <div class="flex items-start gap-2 pt-1">
              <svg class="w-4 h-4 text-blue-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              <div>
                <span class="block text-slate-200 font-semibold">Official Web Portal:</span>
                <a href="https://www.soa.ac.in" target="_blank" class="hover:text-blue-400 transition-colors">www.soa.ac.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 Siksha 'O' Anusandhan (Deemed to be University). All rights reserved.</p>
        <p class="font-mono text-[11px] text-slate-400">NIRF #15 University · NAAC A++ (CGPA 3.88) · Bhubaneswar, Odisha</p>
      </div>
    </div>
  </footer>

  <!-- MODAL: CHAPTER DETAILS -->
  <div id="chapter-modal" class="hidden fixed inset-0 z-50 bg-slate-950/80 modal-backdrop flex items-center justify-center p-4">
    <div class="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col text-white">
      <div class="relative h-48 sm:h-56 w-full bg-slate-950 overflow-hidden shrink-0">
        <img id="modal-chapter-img" src="" alt="Chapter photo" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/60 to-transparent"></div>
        <button onclick="closeChapterModal()" class="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-slate-300 hover:text-white border border-slate-700">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
        <div class="absolute bottom-4 left-6 right-6">
          <div class="flex items-center gap-2 mb-1">
            <span id="modal-chapter-city" class="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold uppercase border border-cyan-500/30">City</span>
            <span id="modal-chapter-edition" class="px-2 py-0.5 rounded-full bg-blue-600/90 text-white text-[10px] font-mono font-bold">1.0</span>
          </div>
          <h2 id="modal-chapter-title" class="text-xl sm:text-2xl font-extrabold text-white">Conclave Title</h2>
          <p id="modal-chapter-meta" class="text-xs text-slate-300 font-mono mt-0.5">Date · Venue · Turnout</p>
        </div>
      </div>

      <div class="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-slate-300 text-xs sm:text-sm">
        <div id="modal-sports-card" class="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-1">
          <div class="font-bold text-white text-xs flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            <span id="modal-sports-name">Sports Icon</span>
          </div>
          <div id="modal-sports-role" class="text-[11px] text-amber-300">Role</div>
          <div id="modal-sports-note" class="text-[11px] text-amber-200/80 italic">Keynote note</div>
        </div>

        <div>
          <h4 class="font-bold text-white uppercase text-xs tracking-wider mb-2 text-cyan-400">Executive Summary</h4>
          <p id="modal-chapter-desc" class="leading-relaxed text-slate-300"></p>
        </div>

        <div>
          <h4 class="font-bold text-white uppercase text-xs tracking-wider mb-2 text-cyan-400">Strategic Deliberations & Focus</h4>
          <p id="modal-chapter-focus" class="leading-relaxed text-slate-300 p-3 rounded-xl bg-slate-800/60 border border-slate-700"></p>
        </div>

        <div>
          <h4 class="font-bold text-white uppercase text-xs tracking-wider mb-2 text-cyan-400">Participating Organizations</h4>
          <div id="modal-chapter-orgs" class="flex flex-wrap gap-2"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: GET INVITED -->
  <div id="invite-modal" class="hidden fixed inset-0 z-50 bg-slate-950/80 modal-backdrop flex items-center justify-center p-4">
    <div class="relative w-full max-w-lg bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl p-6 sm:p-8 text-white space-y-5">
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <span class="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">Delegate Registration</span>
          <h3 class="text-xl font-extrabold text-white mt-0.5">Request Executive Invitation</h3>
        </div>
        <button onclick="closeInviteModal()" class="p-1 rounded-lg text-slate-400 hover:text-white">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>

      <form onsubmit="handleInviteSubmit(event)" class="space-y-4 text-xs">
        <div>
          <label class="block font-bold text-slate-300 mb-1">Full Name</label>
          <input type="text" required placeholder="e.g. Anand Sharma" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
        </div>
        <div>
          <label class="block font-bold text-slate-300 mb-1">Corporate Email Address</label>
          <input type="email" required placeholder="e.g. anand.sharma@company.com" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-slate-300 mb-1">Company / Organization</label>
            <input type="text" required placeholder="e.g. Infosys / TechM" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block font-bold text-slate-300 mb-1">Designation</label>
            <input type="text" required placeholder="e.g. VP - Talent / Director" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <div>
          <label class="block font-bold text-slate-300 mb-1">Chapter of Interest</label>
          <select class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500">
            <option>Bengaluru Chapter</option>
            <option>Hyderabad Chapter</option>
            <option>Chennai Chapter</option>
            <option>Mumbai Chapter</option>
            <option>Kolkata Chapter</option>
            <option>National Conclave, Bhubaneswar</option>
          </select>
        </div>

        <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 font-bold text-white tracking-wide shadow-lg shadow-blue-600/30">
          Submit Invitation Request
        </button>
      </form>
    </div>
  </div>

  <!-- MODAL: VIDEO PLAYER -->
  <div id="video-modal" class="hidden fixed inset-0 z-50 bg-slate-950/80 modal-backdrop flex items-center justify-center p-4">
    <div class="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      <div class="flex items-center justify-between p-4 border-b border-slate-800 text-white">
        <span class="font-bold text-sm">Allyship++ 2.0 Hyderabad Conclave Highlights</span>
        <button onclick="closeVideoModal()" class="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>
      <div class="aspect-video w-full bg-black flex items-center justify-center">
        <video id="conclave-video" controls playsinline class="w-full h-full object-contain" src="./public/soa-allyship ++ 2.0_hyd-4.mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>

  <!-- MODAL: VIRTUAL TOUR -->
  <div id="tour-modal" class="hidden fixed inset-0 z-50 bg-slate-950/80 modal-backdrop flex items-center justify-center p-4">
    <div class="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      <div class="flex items-center justify-between p-4 border-b border-slate-800 text-white">
        <span class="font-bold text-sm">SOA University Campus & Research Labs Virtual Tour</span>
        <button onclick="closeTourModal()" class="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>
      <div class="aspect-video w-full bg-black flex items-center justify-center">
        <iframe id="tour-iframe" class="w-full h-full" src="" title="SOA University Campus Tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>

  <!-- MODAL: PRESS CLIPPING READER -->
  <div id="clipping-modal" class="hidden fixed inset-0 z-50 bg-slate-950/80 modal-backdrop flex items-center justify-center p-4">
    <div class="relative w-full max-w-2xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl p-6 sm:p-8 text-white space-y-5">
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <span id="clip-outlet" class="text-xs font-mono font-bold text-cyan-400 uppercase">Outlet</span>
          <span id="clip-date" class="text-xs text-slate-400 ml-2">Date</span>
        </div>
        <button onclick="closeClippingModal()" class="p-1 rounded-lg text-slate-400 hover:text-white">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>

      <div class="h-48 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
        <img id="clip-img" src="" alt="Clipping" class="w-full h-full object-cover">
      </div>

      <h3 id="clip-title" class="text-lg sm:text-xl font-bold text-white">Article Headline</h3>
      <p id="clip-summary" class="text-xs sm:text-sm text-slate-300 leading-relaxed"></p>

      <blockquote id="clip-quote" class="text-xs italic text-blue-300 border-l-2 border-blue-500 pl-3 py-1 bg-blue-950/40 rounded-r-lg"></blockquote>

      <div class="pt-2 flex items-center justify-between">
        <a id="clip-link" href="#" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline">
          <span>Read Full Article on Publisher Website</span>
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
        </a>
        <button onclick="closeClippingModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold">Close</button>
      </div>
    </div>
  </div>

  <!-- SCRIPT LOGIC -->
  <script>
    const conclaves = ${JSON.stringify(conclavesData)};
    const clippings = ${JSON.stringify(pressClippings)};

    const isSubfolder = window.location.pathname.replace(/\\\\/g, '/').toLowerCase().indexOf('/allyship/') !== -1;
    const ASSET_BASE = isSubfolder ? './public/' : './allyship/public/';

    function resolveImage(img, filename) {
      if (img.dataset.tried) return;
      img.dataset.tried = "1";
      img.src = isSubfolder ? ('./allyship/public/' + filename) : ('./public/' + filename);
    }

    function switchTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      const target = document.getElementById('tab-' + tabId);
      if (target) target.classList.add('active');

      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('text-slate-300');
        const dot = btn.querySelector('.indicator-dot');
        if (dot) dot.classList.add('hidden');
      });

      const activeBtn = document.getElementById('nav-btn-' + tabId);
      if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.classList.remove('text-slate-300');
        const dot = activeBtn.querySelector('.indicator-dot');
        if (dot) dot.classList.remove('hidden');
      }

      window.location.hash = tabId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    let homeSlideIdx = 0;
    const homeCaptions = [
      "Hyderabad Chapter 2.0 Live Conclave",
      "Executive Ballroom & Corporate Delegates",
      "CXO Strategic Panel Discussion",
      "Leadership Insights & Deliberations"
    ];

    function setHomeSlide(idx) {
      homeSlideIdx = idx;
      const el = document.getElementById('home-hero-slider');
      if (el) el.style.transform = \`translateX(-\${idx * 100}%)\`;
      document.querySelectorAll('.home-dot').forEach((dot, i) => {
        if (i === idx) {
          dot.className = "home-dot h-1.5 rounded-full transition-all duration-300 w-6 bg-cyan-400";
        } else {
          dot.className = "home-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40";
        }
      });
      const cap = document.getElementById('home-slide-caption');
      if (cap) cap.innerText = homeCaptions[idx];
    }

    let eventSlideIdx = 0;
    const eventCaptions = [
      "Hyderabad Chapter Ballroom & Delegates",
      "Chennai Chapter 2.0 Delegation Group",
      "Chennai Chapter 2.0 Keynote & Stage Dignitaries"
    ];

    function setEventSlide(idx) {
      eventSlideIdx = idx;
      const el = document.getElementById('event-hero-slider');
      if (el) el.style.transform = \`translateX(-\${idx * 100}%)\`;
      document.querySelectorAll('.event-dot').forEach((dot, i) => {
        if (i === idx) {
          dot.className = "event-dot h-1.5 rounded-full transition-all duration-300 w-6 bg-cyan-400";
        } else {
          dot.className = "event-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40";
        }
      });
      const cap = document.getElementById('event-slide-caption');
      if (cap) cap.innerText = eventCaptions[idx];
    }

    let discoverSlideIdx = 0;
    const discoverCaptions = [
      "Siksha 'O' Anusandhan Main Campus Aerial Panorama",
      "Institute of Technical Education and Research (ITER)",
      "SOA University Central Convention Centre & Auditorium",
      "SOA Academic Quads & Innovation Labs"
    ];

    function setDiscoverSlide(idx) {
      discoverSlideIdx = idx;
      const el = document.getElementById('discover-hero-slider');
      if (el) el.style.transform = \`translateX(-\${idx * 100}%)\`;
      document.querySelectorAll('.discover-dot').forEach((dot, i) => {
        if (i === idx) {
          dot.className = "discover-dot h-1.5 rounded-full transition-all duration-300 w-6 bg-cyan-400";
        } else {
          dot.className = "discover-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/40";
        }
      });
      const cap = document.getElementById('discover-slide-caption');
      if (cap) cap.innerText = discoverCaptions[idx];
    }

    setInterval(() => {
      homeSlideIdx = (homeSlideIdx + 1) % 4;
      setHomeSlide(homeSlideIdx);
      eventSlideIdx = (eventSlideIdx + 1) % 3;
      setEventSlide(eventSlideIdx);
      discoverSlideIdx = (discoverSlideIdx + 1) % 4;
      setDiscoverSlide(discoverSlideIdx);
    }, 3500);

    function renderHomeConclaves(filter = "All") {
      const grid = document.getElementById('home-conclaves-grid');
      if (!grid) return;
      const filtered = conclaves.filter(c => filter === "All" || c.editionCycle === filter);
      
      grid.innerHTML = filtered.map(c => \`
        <div class="bg-[#0b1120]/80 rounded-3xl overflow-hidden border border-slate-800 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all group flex flex-col justify-between">
          <div class="relative h-48 w-full bg-slate-900 overflow-hidden">
            <img src="\${ASSET_BASE}\${c.image}" onerror="resolveImage(this, '\${c.image}')" alt="\${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute top-3 left-3 flex items-center gap-1.5">
              <span class="bg-slate-950/85 backdrop-blur-sm text-cyan-400 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-700">\${c.city}</span>
              <span class="bg-blue-600/90 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-full">\${c.editionCycle === "2.0" ? "2.0" : "1.0"}</span>
            </div>
            <div class="absolute bottom-3 left-3 right-3 text-white">
              <span class="text-[11px] font-mono text-slate-300 font-semibold block">\${c.date} · \${c.venue}</span>
            </div>
          </div>

          <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div class="space-y-3">
              <h3 class="text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">\${c.title}</h3>
              \${c.sportsGuests && c.sportsGuests.length > 0 ? \`
                <div class="flex items-start gap-2 p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200">
                  <svg class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                  <div>
                    <span class="font-bold text-white block">\${c.sportsGuests[0].name}</span>
                    <span class="text-[11px] text-amber-300">\${c.sportsGuests[0].role}</span>
                  </div>
                </div>
              \` : ''}
              <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed">\${c.desc}</p>
            </div>

            <div class="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
              <button onclick="selectEventChapter('\${c.id}')" class="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                <span>View Chapter</span>
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <button onclick="openChapterModal('\${c.id}')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-colors flex items-center gap-1 shrink-0 border border-slate-700">
                <span>Quick Read</span>
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/></svg>
              </button>
            </div>
          </div>
        </div>
      \`).join('');
    }

    function filterHomeChapters(filter) {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white";
      });
      if (filter === "All") document.getElementById('btn-filter-all').className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm";
      if (filter === "1.0") document.getElementById('btn-filter-1').className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm";
      if (filter === "2.0") document.getElementById('btn-filter-2').className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm";
      renderHomeConclaves(filter);
    }

    let selectedEventIdx = 0;
    function renderEventChapters() {
      const pillsContainer = document.getElementById('event-chapter-pills');
      if (!pillsContainer) return;
      pillsContainer.innerHTML = conclaves.map((c, i) => \`
        <button onclick="renderEventActiveChapter(\${i})" class="px-4 py-2 rounded-xl text-xs font-bold transition-all \${i === selectedEventIdx ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/30' : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'}">
          \${c.city}
        </button>
      \`).join('');

      renderEventActiveChapter(selectedEventIdx);
    }

    function renderEventActiveChapter(idx) {
      selectedEventIdx = idx;
      const c = conclaves[idx];
      const container = document.getElementById('event-chapter-container');
      if (!container) return;

      container.innerHTML = \`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 space-y-5">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full bg-blue-950/80 text-blue-300 text-xs font-mono font-bold uppercase border border-blue-500/30">\${c.edition}</span>
              <span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-semibold border border-slate-700">\${c.turnout}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white">\${c.title}</h2>
            <div class="text-xs text-slate-400 font-mono flex flex-wrap gap-4">
              <span>📅 \${c.date}</span>
              <span>📍 \${c.venue}</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">\${c.desc}</p>
            
            \${c.sportsGuests && c.sportsGuests.length > 0 ? \`
              <div class="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 space-y-1">
                <span class="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider">Olympic & Sports Spotlight</span>
                <div class="font-bold text-white text-sm">\${c.sportsGuests[0].name} — \${c.sportsGuests[0].role}</div>
                <div class="text-xs text-amber-200/80 italic">\${c.sportsGuests[0].note}</div>
              </div>
            \` : ''}

            <div class="space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300">Deliberation Focus & Themes</h4>
              <p class="text-xs text-slate-300 p-3 rounded-xl bg-slate-900/80 border border-slate-800">\${c.focus}</p>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-5">
            <div class="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 h-64">
              <img src="\${ASSET_BASE}\${c.image}" onerror="resolveImage(this, '\${c.image}')" alt="\${c.title}" class="w-full h-full object-cover">
            </div>

            <div class="p-5 rounded-2xl bg-[#0b1120]/80 border border-slate-800 space-y-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300">Key Corporate & Capability Heads</h4>
              <div class="space-y-2 text-xs">
                \${c.panelists.map(p => \`
                  <div class="flex items-start justify-between border-b border-slate-800 pb-1.5 last:border-none">
                    <span class="font-bold text-white">\${p.name}</span>
                    <span class="text-slate-400 text-[11px] text-right ml-2">\${p.role}</span>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>
        </div>
      \`;

      const pillsContainer = document.getElementById('event-chapter-pills');
      if (pillsContainer) {
        pillsContainer.querySelectorAll('button').forEach((btn, i) => {
          btn.className = \`px-4 py-2 rounded-xl text-xs font-bold transition-all \${i === idx ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/30' : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'}\`;
        });
      }
    }

    function selectEventChapter(chapterId) {
      const idx = conclaves.findIndex(c => c.id === chapterId);
      if (idx !== -1) {
        selectedEventIdx = idx;
      }
      switchTab('event');
      setTimeout(() => {
        renderEventChapters();
        const el = document.getElementById('chapter-details');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }

    function renderPressClippings() {
      const grid = document.getElementById('press-clippings-grid');
      if (!grid) return;

      grid.innerHTML = clippings.map(clip => \`
        <div class="bg-[#0b1120]/80 rounded-3xl overflow-hidden border border-slate-800 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden bg-slate-900 relative">
              <img src="\${ASSET_BASE}\${clip.image}" onerror="resolveImage(this, '\${clip.image}')" alt="\${clip.title}" class="w-full h-full object-cover">
              <span class="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 text-cyan-300 text-[10px] font-mono font-bold uppercase backdrop-blur-sm">\${clip.outlet}</span>
              <span class="absolute top-3 right-3 px-2 py-0.5 rounded bg-blue-900/80 text-blue-200 text-[10px] font-mono font-bold uppercase backdrop-blur-sm">\${clip.category}</span>
            </div>
            <div class="p-6 space-y-3">
              <span class="text-[11px] font-mono text-slate-400 font-semibold block">\${clip.date}</span>
              <h3 class="text-sm font-bold text-white leading-snug">\${clip.title}</h3>
              <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed">\${clip.summary}</p>
            </div>
          </div>

          <div class="px-6 pb-6 pt-2 border-t border-slate-800 flex items-center justify-between">
            <button onclick="openClippingModal('\${clip.id}')" class="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              <span>Read Highlights</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <a href="\${clip.link}" target="_blank" class="text-slate-400 hover:text-white text-xs">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
          </div>
        </div>
      \`).join('');
    }

    function openChapterModal(chapterId) {
      const c = conclaves.find(x => x.id === chapterId);
      if (!c) return;

      const img = document.getElementById('modal-chapter-img');
      img.src = ASSET_BASE + c.image;
      resolveImage(img, c.image);

      document.getElementById('modal-chapter-city').innerText = c.city;
      document.getElementById('modal-chapter-edition').innerText = c.editionCycle;
      document.getElementById('modal-chapter-title').innerText = c.title;
      document.getElementById('modal-chapter-meta').innerText = \`\${c.date} · \${c.venue} · \${c.turnout}\`;
      document.getElementById('modal-chapter-desc').innerText = c.desc;
      document.getElementById('modal-chapter-focus').innerText = c.focus;

      const sportsCard = document.getElementById('modal-sports-card');
      if (c.sportsGuests && c.sportsGuests.length > 0) {
        sportsCard.classList.remove('hidden');
        document.getElementById('modal-sports-name').innerText = c.sportsGuests[0].name;
        document.getElementById('modal-sports-role').innerText = c.sportsGuests[0].role;
        document.getElementById('modal-sports-note').innerText = c.sportsGuests[0].note || '';
      } else {
        sportsCard.classList.add('hidden');
      }

      const orgsContainer = document.getElementById('modal-chapter-orgs');
      orgsContainer.innerHTML = (c.organizations || []).map(o => \`
        <span class="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-medium text-xs border border-slate-700">\${o}</span>
      \`).join('');

      document.getElementById('chapter-modal').classList.remove('hidden');
    }

    function closeChapterModal() {
      document.getElementById('chapter-modal').classList.add('hidden');
    }

    function openInviteModal() {
      document.getElementById('invite-modal').classList.remove('hidden');
    }

    function closeInviteModal() {
      document.getElementById('invite-modal').classList.add('hidden');
    }

    function handleInviteSubmit(e) {
      e.preventDefault();
      alert('Thank you! Your executive invitation request has been submitted to the Corporate Relations Secretariat. We will be in touch shortly.');
      closeInviteModal();
    }

    function openVideoModal() {
      const modal = document.getElementById('video-modal');
      modal.classList.remove('hidden');
      const v = document.getElementById('conclave-video');
      if (v) {
        v.src = ASSET_BASE + "soa-allyship ++ 2.0_hyd-4.mp4";
        v.play().catch(() => {});
      }
    }

    function closeVideoModal() {
      const modal = document.getElementById('video-modal');
      modal.classList.add('hidden');
      const v = document.getElementById('conclave-video');
      if (v) v.pause();
    }

    function openTourModal() {
      const modal = document.getElementById('tour-modal');
      modal.classList.remove('hidden');
      const iframe = document.getElementById('tour-iframe');
      if (iframe) iframe.src = "https://www.youtube-nocookie.com/embed/8wSGKsWyQwk?autoplay=1";
    }

    function closeTourModal() {
      const modal = document.getElementById('tour-modal');
      modal.classList.add('hidden');
      const iframe = document.getElementById('tour-iframe');
      if (iframe) iframe.src = "";
    }

    function openClippingModal(clipId) {
      const clip = clippings.find(x => x.id === clipId);
      if (!clip) return;

      document.getElementById('clip-outlet').innerText = clip.outlet;
      document.getElementById('clip-date').innerText = clip.date;
      document.getElementById('clip-title').innerText = clip.title;
      document.getElementById('clip-summary').innerText = clip.summary;
      document.getElementById('clip-quote').innerText = '“' + clip.quote + '”';
      document.getElementById('clip-link').href = clip.link;

      const img = document.getElementById('clip-img');
      img.src = ASSET_BASE + clip.image;
      resolveImage(img, clip.image);

      document.getElementById('clipping-modal').classList.remove('hidden');
    }

    function closeClippingModal() {
      document.getElementById('clipping-modal').classList.add('hidden');
    }

    function handleChallengeSubmit(e) {
      e.preventDefault();
      const ref = 'CHAL-' + Math.floor(1000 + Math.random() * 9000);
      document.getElementById('ref-id-display').innerText = ref;
      document.getElementById('challenge-form').classList.add('hidden');
      document.getElementById('challenge-success').classList.remove('hidden');
    }

    function resetChallengeForm() {
      document.getElementById('challenge-form').reset();
      document.getElementById('challenge-form').classList.remove('hidden');
      document.getElementById('challenge-success').classList.add('hidden');
    }

    function copyBrief() {
      const name = document.getElementById('ch-name').value || "[Corporate Leader]";
      const email = document.getElementById('ch-email').value || "[Email]";
      const title = document.getElementById('ch-title').value || "[Challenge Title]";
      const sector = document.getElementById('ch-sector').value || "[Sector]";
      const desc = document.getElementById('ch-desc').value || "[Problem Statement]";

      const brief = \`SOA ALLYSHIP++ INDUSTRY CHALLENGE BRIEF
----------------------------------------
Title: \${title}
Sector: \${sector}
Submitted By: \${name} (\${email})

Overview:
\${desc}

Sent via SOA University Allyship++ Platform (www.placements.soa.ac.in)\`;

      navigator.clipboard.writeText(brief).then(() => {
        const btn = document.getElementById('copy-btn-text');
        btn.innerText = "Copied to Clipboard!";
        setTimeout(() => { btn.innerText = "Copy Formatted Brief"; }, 2500);
      });
    }

    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'event', 'impact', 'discover', 'collaborate'].includes(hash)) {
        switchTab(hash);
      } else {
        switchTab('home');
      }

      renderHomeConclaves();
      renderEventChapters();
      renderPressClippings();
    });
  </script>
</body>
</html>
`;

const destAllyship = path.join(__dirname, '..', 'index.html');
fs.writeFileSync(destAllyship, htmlContent, 'utf-8');
console.log('Successfully wrote', destAllyship, 'Size:', fs.statSync(destAllyship).size, 'bytes');
