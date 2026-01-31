export interface Project {
  title: string;
  description: string[];
  image: string;
  githubUrl?: string;
  aspectRatio?: string;
  imageWidth?: string;
  imageMaxWidth?: string;
  splitDescription?: boolean;
  imageScale?: number;
}

export const projects: Project[] = [
  {
    title: "PORCH",
    description: [
        "As a developer for <a href=\"https://appteamcarolina.com/\" target=\"_blank\" rel=\"noopener noreferrer\">App Team Carolina</a>, I'm working on an app for PORCH, a nonprofit providing food donation and delivery services in the Chapel Hill-Carrboro community.",
        "PORCH is currently facilitating over 10,000lb of food donations monthly. The app is built with <strong>SwiftUI</strong> and <strong>Firebase</strong>, and we are currently utilizing <strong>TestFlight</strong> for user testing in preperation for deployment.",
        "Personally, I have worked on designing SwiftUI components, fixing bugs, integrating frontend with backend, and conducting user testing and research."
    ],
    image: "/projects/porch.jpeg",
    githubUrl: ""
  },
  {
    title: "CancerLINC",
    description: [
      "As a developer for <a href=\"https://www.cssgunc.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Computer Science + Social Good at UNC</a>, I'm working on an app for CancerLINC, a nonprofit providing legal and financial support to cancer patients in Central Virginia.",
      "CancerLINC is currently serving over 700 patients, 180 volunteers, and managing ~$1M in donations yearly. The app is built with a <strong>Flutter</strong> frontend, <strong>Firebase</strong> backend, and will include an admin/data dashboard built with <strong>React</strong>. The app is still currently in development.",
      "Personally, I have worked on developing Flutter components, designing database schemas, and helping with sprint planning."
    ],
    image: "/projects/cancerlinc.jpeg",
    githubUrl: ""
  },
  {
    title: "Band Manager",
    description: [
      "Band Manager is a full-stack application for managing bands, events, venues, and members. I built this app for my band, Hummingbird Lemonade, where I play the keyboard. Check us out on <a href=\"https://www.youtube.com/@hummingbirdlemonade\" target=\"_blank\" rel=\"noopener noreferrer\">YouTube</a>!",
      "Built with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind</strong> on the frontend, plus a <strong>FastAPI</strong> backend with <strong>PostgreSQL</strong>, <strong>SQLAlchemy</strong>, and <strong>Supabase Auth</strong>.",
      "I learned a lot about the <strong>SDLC</strong> and production workflows by setting up <strong>CI/CD with GitHub Actions</strong>, deployment on <strong>Vercel</strong> and <strong>DigitalOcean</strong>, and managing migrations, testing, and releases.",
      "Try it out at <a href=\"https://bandmanager.tcbarzyk.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">bandmanager.tcbarzyk.dev</a>. Note: certain features might not work whenever my Supabase project is paused."
    ],
    image: "/projects/bandmanager.png",
    githubUrl: "https://github.com/tcbarzyk/band-manager",
    aspectRatio: "3 / 2",
    imageWidth: "30%",
    imageMaxWidth: "420px",
    splitDescription: true
  },
  {
    title: "TapIn",
    description: [
      "TapIn is an iOS app that connects students to real, in-person campus moments.",
      "Users can log in with their .edu email, create events under categories like clubs, study sessions, or social meetups, and pin their location directly on a campus map. Others can discover events nearby, tap \"Go\" to show interest, and navigate to the destination. TapIn also tracks event popularity as more students join, surfacing the most active and trending spots on campus.",
      "TapIn was built for HackNC 2025 using <strong>SwiftUI</strong> and <strong>Firebase</strong>. I led a hackathon team of 4 people to create this app in 24 hours."
    ],
    image: "/projects/tapin.jpeg",
    githubUrl: "https://github.com/tcbarzyk/HackNC-2025"
  },
  {
    title: "Reading List",
    description: [
      "Reading List is an iOS app that allows the user to search for books, add them to their list, sort books into categories, and add personal notes.",
      "Built with a <strong>SwiftUI</strong> frontend and <strong>Node.js</strong> backend with a <strong>MongoDB</strong> database. I implemented <strong>JWT auth</strong>, and integrated the <strong>OpenLibrary API</strong> for book search.",
      "I made this app for the App Team Carolina iOS development bootcamp, where I learned the basics of SwiftUI."
    ],
    image: "/projects/readinglist.jpeg",
    githubUrl: "https://github.com/tcbarzyk/reading-list-app"
  },
  {
    title: "Princess Plunge",
    description: [
      "Princess Plunge is a 2D platforming game where you play as a princess descending a tower. Features 3 difficulty levels and procedurally generated levels.",
      "Winner of Fall 2024 UNC Game Jam. I led a team of 3 people to create this project using <strong>Unity/C#</strong>.",
      "<a href=\"https://cohloy.itch.io/princess-plunge\" target=\"_blank\" rel=\"noopener noreferrer\">Try it out</a> on itch.io!"
    ],
    image: "/projects/princessplunge.png",
    githubUrl: "https://github.com/tcbarzyk/falling-for-it",
    aspectRatio: "1 / 1",
    imageScale: 1
  }
];
