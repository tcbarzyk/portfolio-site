export interface Project {
  title: string;
  description: string[];
  image?: string;
  imageAlignment?: 'left' | 'right';
  githubUrl?: string;
  aspectRatio?: string;
  imageWidth?: string;
  imageMaxWidth?: string;
  splitDescription?: boolean;
  imageScale?: number;
}

export const projects: Project[] = [
  {
    title: "Easy Chat",
    description: [
      "A concurrent <strong>TCP</strong> chat server written in <strong>Go</strong>, built to explore Go's concurrency model.",
      "Uses a single hub goroutine to manage all shared state via <strong>channels</strong>, avoiding <strong>mutexes</strong> entirely. Each client gets a dedicated write goroutine so a slow connection never blocks other clients. Request/response operations use reply channels embedded in request structs for clean synchronization semantics.",
      "Supports live commands including <strong>/users</strong>, <strong>/stats</strong>, <strong>/help</strong>, and <strong>/quit</strong>. Connect via <strong>telnet</strong> or <strong>netcat</strong> on port <strong>9000</strong>.",
      "I built this to learn <strong>Go</strong>, and I've really been enjoying the language so far. I'll continue developing this project and adding more advanced features, such as chat rooms, chat history, and admin commands."
    ],
    githubUrl: "https://github.com/tcbarzyk/easy-chat"
  },
  {
    title: "Distributed Inference Platform",
    description: [
      "A scalable <strong>distributed video inference</strong> system built to process live frames across decoupled producer, worker, and API services.",
      "The producer ingests frames from video sources and pushes jobs to a <strong>Redis</strong> queue. Workers consume jobs, run <strong>YOLOv8</strong> object detection, and persist results to <strong>PostgreSQL</strong>. The API serves live frames via Redis-first lookup with DB fallback, and streams continuous video via <strong>MJPEG</strong> over Redis <strong>Pub/Sub</strong>.",
      "Key design decisions included a single shared schema contract library across services, <strong>keyset pagination</strong> for stable reads under write load, and a layered live video transport strategy. Orchestrated with <strong>Docker Compose</strong> with <strong>Alembic</strong> managing migrations.",
      "I built this project to get a grasp on <strong>distributed systems design</strong>. It was a great learning experience, but I still have a long way to go. Next steps include implementing authentication, designing a frontend interface, optimizing performance and reliability, and deploying to the cloud."
    ],
    githubUrl: "https://github.com/tcbarzyk/distributed-inference-platform"
  },
  {
    title: "PORCH",
    description: [
        "As a developer for <a href=\"https://appteamcarolina.com/\" target=\"_blank\" rel=\"noopener noreferrer\">App Team Carolina</a>, I'm working on an app for <a href=\"https://chapelhill.porchcommunities.org/\" target=\"_blank\" rel=\"noopener noreferrer\">PORCH</a>, a nonprofit providing food donation and delivery services in the Chapel Hill–Carrboro community.",
        "PORCH is currently facilitating over 10,000 lb of food donations monthly. The app is built with <strong>SwiftUI</strong> and <strong>Firebase</strong>, and we are currently utilizing <strong>TestFlight</strong> for user testing in preparation for deployment.",
        "Personally, I have worked on designing SwiftUI components, fixing bugs, integrating frontend with backend, and conducting user testing and research."
    ],
    image: "/projects/porch.jpeg",
    imageAlignment: "left",
    githubUrl: ""
  },
  {
    title: "CancerLINC",
    description: [
      "As a developer for <a href=\"https://www.cssgunc.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Computer Science + Social Good at UNC</a>, I'm working on an app for <a href=\"https://cancerlinc.org/\" target=\"_blank\" rel=\"noopener noreferrer\">CancerLINC</a>, a nonprofit providing legal and financial support to cancer patients in Central Virginia.",
      "CancerLINC is currently serving over 700 patients, 180 volunteers, and managing ~$1M in donations yearly. The app is built with a <strong>Flutter</strong> frontend, <strong>Firebase</strong> backend, and will include an admin/data dashboard built with <strong>React</strong>. The app is still currently in development.",
      "Personally, I have worked on developing Flutter components, designing database schemas, and helping with sprint planning."
    ],
    image: "/projects/cancerlinc.jpeg",
    imageAlignment: "right",
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
    imageAlignment: "left",
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
    imageAlignment: "right",
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
    imageAlignment: "left",
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
    imageAlignment: "right",
    githubUrl: "https://github.com/tcbarzyk/falling-for-it",
    aspectRatio: "1 / 1",
    imageScale: 1
  }
];
