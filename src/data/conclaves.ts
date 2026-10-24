export interface ConclaveSpeaker {
  name: string;
  role: string;
  note?: string;
}

export interface ConclaveChapter {
  id: string;
  city: string;
  edition: string;
  editionCycle: "1.0" | "2.0";
  date: string;
  venue: string;
  turnout: string;
  title: string;
  desc: string;
  sportsGuests: ConclaveSpeaker[];
  leadership: ConclaveSpeaker[];
  moderators: ConclaveSpeaker[];
  panelists: ConclaveSpeaker[];
  organizations: string[];
  focus: string;
  image: string;
  youtubeId?: string;
}

export const conclavesData: ConclaveChapter[] = [
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
        note: "Virtual Keynote on 'Leadership in Sports' and coach-athlete allyship",
      },
    ],
    leadership: [
      {
        name: "Prof. (Dr.) Manojranjan Nayak",
        role: "Founder President & Chairman, SOA / ITER (Inaugural Address)",
      },
      {
        name: "Prof. (Dr.) Raj Kumar Hota",
        role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA",
      },
    ],
    moderators: [
      {
        name: "Rajeev Kumar Singh",
        role: "Chief Strategist, Open Link Foundation",
      },
    ],
    panelists: [
      {
        name: "Dr. P.B. Kotur",
        role: "Global Head, Engineering Academy, L&T Technology Services",
      },
      {
        name: "C. Aparna",
        role: "CHRO, Torry Harris Integration Solutions",
      },
      {
        name: "Baliram Mutagekar",
        role: "Vice President, BNY Mellon",
      },
      {
        name: "Dr. S.J. Naganagouda",
        role: "Chief People Officer, Tally Solutions Pvt Ltd",
      },
      {
        name: "Arun Parija",
        role: "Partner, Coserve Software Solutions",
      },
    ],
    organizations: ["Microsoft", "Dell", "Zscaler", "L&T Technology Services", "BNY Mellon", "Tally Solutions"],
    focus: "Cross-disciplinary leadership, mitigating tech-worker burnout, engineering cultures, and hybrid global capability teams.",
    image: "/IMG_7849.jpg",
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
        note: "Chief Guest Keynote on Leadership & Collaboration in Dynamic Environments",
      },
    ],
    leadership: [
      {
        name: "Prof. (Dr.) Raj Kumar Hota",
        role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA",
      },
      {
        name: "Dr. P.K. Patra",
        role: "Dean, Sponsored Research & Industry Consultancy, SOA",
      },
    ],
    moderators: [
      {
        name: "Collective CXO & Scientific Roundtable",
        role: "Strategic Deliberation on Academic-Corporate Partnerships",
      },
    ],
    panelists: [
      {
        name: "Rohit Adlakha",
        role: "CXO Advisor, Human Edge (Enterprises)",
      },
      {
        name: "Lavanam Amballa",
        role: "Talent Acquisition Strategist, Integraminds",
      },
      {
        name: "Pushkala Balasubramanian",
        role: "Vice-President (Engineering), Kloudgin",
      },
      {
        name: "Kiranmal Pendyala",
        role: "Former Strategic Thought Leader, UPS",
      },
      {
        name: "Dr. Umesh Udayaprakash",
        role: "Group Vice-President, Innova Solutions",
      },
      {
        name: "Dr. Bapuji Maringanti",
        role: "Senior Principal Scientist, CSIR",
      },
    ],
    organizations: ["UPS", "Kloudgin", "Innova Solutions", "CSIR", "Human Edge", "Integraminds"],
    focus: "Practicing allyship across organizational tiers, closer academic-corporate R&D cooperation, and psychological safety.",
    image: "/IMG_7492.jpg",
    youtubeId: "8wSGKsWyQwk",
  },
  {
    id: "kolkata-1",
    city: "Kolkata",
    edition: "Allyship++ 1.0 — 3rd Edition",
    editionCycle: "1.0",
    date: "September 27, 2024",
    venue: "Kolkata City Hub",
    turnout: "Dual-Panel Conclave & Sports Legends Tribute",
    title: "Bridging Legacy Business, Digital Transformation & DEI",
    desc: "Featuring two powerhouse industry panels spanning cloud consulting, fintech, telecom, and Fortune 500 DEI advisory, the Kolkata chapter celebrated legendary sporting icons: 1964 Olympic hockey gold medalist Gurbux Singh, football maestro Gautam Sarkar ('Indian Beckenbauer'), and Satyaprakash Krishna (mentor to M.S. Dhoni), alongside senior IAS officer Smruti Ranjan Mohanty.",
    sportsGuests: [
      {
        name: "Gurbux Singh",
        role: "1964 Olympic Hockey Gold Medalist",
        note: "Sports Legend Tribute on Olympic resilience and teamwork",
      },
      {
        name: "Gautam Sarkar",
        role: "Former Indian Footballer ('Indian Beckenbauer')",
        note: "Tribute on intuitive on-field communication and mentorship",
      },
      {
        name: "Satyaprakash Krishna",
        role: "Mentor to Former Indian Cricket Captain M.S. Dhoni",
        note: "Insights on identifying and sponsoring raw grassroots potential",
      },
      {
        name: "Smruti Ranjan Mohanty, IAS",
        role: "Director of Fisheries & MD of SFDC, Govt. of West Bengal (SOA Alumnus)",
        note: "Distinguished Public Sector Guest Keynote",
      },
    ],
    leadership: [
      {
        name: "Prof. (Dr.) Raj Kumar Hota",
        role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA",
      },
      {
        name: "Dr. P.K. Patra",
        role: "Dean, Sponsored Research & Industry Consultancy, SOA",
      },
      {
        name: "Ms. Kajal Panda",
        role: "Deputy Director, Corporate Relations, SOA",
      },
    ],
    moderators: [
      {
        name: "Pradip Bandyopadhyay",
        role: "Moderator, Enterprise DEI & Digital Transformation Panel",
      },
    ],
    panelists: [
      {
        name: "Brishti Mondal",
        role: "Vice-President, NRI FinTech",
      },
      {
        name: "Rashmita Parija",
        role: "Country HR Manager, Lexmark India",
      },
      {
        name: "Sumit Agarwal",
        role: "DEI Advisor to Fortune 500 Companies",
      },
      {
        name: "Nadeem Kazim",
        role: "CEO and Founder, Splice HR Works",
      },
      {
        name: "Sudipto Ray",
        role: "Managing Director – Cloud and Digital, PwC",
      },
      {
        name: "Amrita Das Gupta",
        role: "Leadership Strategist, Swayam",
      },
      {
        name: "Tumpa Sarkar",
        role: "President, WICCI",
      },
      {
        name: "Debalina Roy",
        role: "Senior HR Lead, Vodafone",
      },
      {
        name: "Saurabh Roy",
        role: "Deputy General Manager, Reliance Jio Infocomm",
      },
    ],
    organizations: ["PwC", "Lexmark", "Reliance Jio", "Vodafone", "NRI FinTech", "WICCI"],
    focus: "Connecting legacy corporate practices with digital DEI standards, cloud transformation, and sports-inspired leadership.",
    image: "/CON01638.JPG",
  },
  {
    id: "mumbai-1",
    city: "Mumbai",
    edition: "Allyship++ 1.0 — 4th Edition",
    editionCycle: "1.0",
    date: "October 2025",
    venue: "Mumbai Financial Capital",
    turnout: "~60 Senior Leaders & HR Executives",
    title: "Building Inclusive and Empowered Workplaces",
    desc: "Following an inaugural address on visionary leadership by SOA Chairman Prof. (Dr.) Manojranjan Nayak, former Indian Test cricketer Nilesh Kulkarni led a fireside discussion on sports education, resilience, and perseverance with Olympian Anand Menezes. Dr. P.B. Kotur moderated an executive panel on balancing quarterly growth with junior analyst well-being.",
    sportsGuests: [
      {
        name: "Nilesh Kulkarni",
        role: "Former Indian Test Cricketer",
        note: "Fireside Chat on Leadership, Mental Fortitude & Sports Education",
      },
      {
        name: "Anand Menezes",
        role: "Olympian & Senior Consultant, Athletics Federation of India",
        note: "Keynote on High Performance & Discipline in Corporate Life",
      },
    ],
    leadership: [
      {
        name: "Prof. (Dr.) Manojranjan Nayak",
        role: "Founder President & Chairman, SOA / ITER (Inaugural Speech)",
      },
      {
        name: "Prof. (Dr.) Raj Kumar Hota",
        role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA",
      },
      {
        name: "Ms. Kajal Panda",
        role: "Deputy Director, L&D, SOA (Vote of Thanks)",
      },
    ],
    moderators: [
      {
        name: "Dr. P.B. Kotur",
        role: "Author, Motivational Speaker and Corporate Executive",
      },
    ],
    panelists: [
      {
        name: "Dr. Brillian S.K.",
        role: "EVP and Head of HR, Times Professional Learning",
      },
      {
        name: "Dr. Meenakshi Banerjee",
        role: "VP, People and Development, Business Next",
      },
      {
        name: "Swapnakant Samal",
        role: "Head of Talent and Transformation, Protiviti",
      },
      {
        name: "Gauri Das",
        role: "SVP and Head of HR, India Factoring and Finance Solutions Pvt Ltd",
      },
    ],
    organizations: ["Times Professional Learning", "Protiviti", "Business Next", "India Factoring", "AFI"],
    focus: "Allyship: Building inclusive, high-empathy workplaces, balancing quarterly targets with mental wellness, and psychological safety.",
    image: "/IMG_7577.jpg",
  },
  {
    id: "hyderabad-2",
    city: "Hyderabad (2.0)",
    edition: "Allyship++ 2.0 — 1st Edition of 2.0",
    editionCycle: "2.0",
    date: "May 15, 2026",
    venue: "Le Meridien, Gachibowli, Hyderabad",
    turnout: "Regional CXOs, Capability Heads & IIT Faculty",
    title: "Practicing Allyship in Gen-Z Leadership",
    desc: "Inaugurating the national 2.0 cycle, this conclave explored workforce transformation, learning agility, and the campus-to-corporate bridge for Gen-Z talent. Dr. G. Srinivas Patnaik (Secretary, Athletics Federation of India) presented principles on discipline and mutual trust, while IIT Delhi's Prof. Sanjay Dhir guided executive roundtables on empathetic management.",
    sportsGuests: [
      {
        name: "Dr. G. Srinivas Patnaik",
        role: "Secretary, Athletics Federation of India",
        note: "Fireside Chat on Discipline, Mentorship, Trust & Resilience in Young Talent",
      },
    ],
    leadership: [
      {
        name: "Prof. (Dr.) Manojranjan Nayak",
        role: "Founder President & Chairman, SOA / ITER (Institutional Address)",
      },
      {
        name: "Prof. (Dr.) Raj Kumar Hota",
        role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA",
      },
      {
        name: "Ms. Kajal Panda",
        role: "Deputy Director, Corporate Relations, SOA (Vote of Thanks)",
      },
    ],
    moderators: [
      {
        name: "Prof. Sanjay Dhir",
        role: "Professor, IIT Delhi",
      },
    ],
    panelists: [
      {
        name: "Rachita Mahadev",
        role: "Emerging Talent Lead – India and APJ, Akamai Technologies",
      },
      {
        name: "Bikram K. Nayak",
        role: "Vice President – Human Resources, NCC Ltd",
      },
      {
        name: "Dr. Reena Das",
        role: "Chief Human Resource Officer, Keolis Hyderabad",
      },
      {
        name: "Ishadarshi P. Mishra",
        role: "Head of HR – Global Hub, Reckitt",
      },
    ],
    organizations: ["Akamai Technologies", "Reckitt", "NCC Ltd", "Keolis Hyderabad", "IIT Delhi", "AFI"],
    focus: "Practicing Allyship in Gen-Z Leadership; learning agility, campus-to-corporate transition, and empathetic leadership models.",
    image: "/IMG_7873.jpg",
    youtubeId: "8wSGKsWyQwk",
  },
  {
    id: "chennai-2",
    city: "Chennai (2.0)",
    edition: "Allyship++ 2.0 — 2nd Edition of 2.0",
    editionCycle: "2.0",
    date: "July 31, 2026",
    venue: "Chennai Executive Hub",
    turnout: "60+ Industry Leaders, HR Heads & Academicians",
    title: "Practicing Allyship as a Leadership Responsibility",
    desc: "Headlined by a fireside chat with high-performance athletics coach Premanand J. (who trained the Indian national sprint squad for the Paris Olympics) on coach-athlete allyship, followed by an executive panel moderated by Standard Chartered's Global Head Archana Grover. Leaders united in asserting that allyship must be practiced as a continuous leadership duty.",
    sportsGuests: [
      {
        name: "Premanand J.",
        role: "Paris Olympics National Sprint Coach & Former International Sprinter",
        note: "Fireside Chat on Discipline, Athletic Conditioning & Mentorship",
      },
    ],
    leadership: [
      {
        name: "Prof. (Dr.) Manojranjan Nayak",
        role: "Founder President & Chairman, SOA / ITER (Address on Future-Ready Workplaces)",
      },
      {
        name: "Prof. (Dr.) Raj Kumar Hota",
        role: "Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA",
      },
    ],
    moderators: [
      {
        name: "Archana Grover",
        role: "Global Head – Capabilities, Transformation and Culture, Standard Chartered",
      },
    ],
    panelists: [
      {
        name: "Suganya Veeraraghavan",
        role: "Assistant Vice-President, Rocket India",
      },
      {
        name: "Suresh Aade",
        role: "Head of Human Resources, Foodhub",
      },
      {
        name: "Archana Mukunthan",
        role: "Senior Manager, Nordex Group",
      },
      {
        name: "R.K. Ramachandran",
        role: "Global Talent Head, KaarTech",
      },
      {
        name: "M.D. Joshua David",
        role: "India Campus Head, Mphasis",
      },
    ],
    organizations: ["Standard Chartered", "Mphasis", "Rocket India", "Foodhub", "KaarTech", "Nordex Group"],
    focus: "Embedding allyship as an everyday leadership responsibility, establishing psychological trust, and expanding industry-academia talent pipelines.",
    image: "/CON01670.JPG",
    youtubeId: "yD0eEo0oh7A",
  },
];
