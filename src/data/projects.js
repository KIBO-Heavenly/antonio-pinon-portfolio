// Sample project data - replace with your actual projects
export const projects = 
[
  {
    id: 1,
    slug: 'ATHENOR: Automated Tutor Filtering & Scheduling System',
    name: 'ATHENOR: Automated Tutor Filtering & Scheduling System',
    tagline: 'A kinder way to manage tutoring: fewer logistics, more meaningful progress',
    description: `Athenor removes logistical friction so tutors and students can focus on learning and relationships, not calendars and paperwork.

Supports schedule conflict resolution, session history, and longitudinal progress tracking; includes CSV import/export and a simple admin UI, and has been used to manage dozens of weekly tutoring sessions.`,
    tags: ['C#', 'ASP.NET Core', 'React', 'Scheduling', 'Progress Tracking'],
    logo: 'images/Athenor_LOGO.png', 
    heroVideo: 'Lj_Gyby5TUY', 
    features: [
      {
        title: 'Import Data & Preview',
        description: 'Upload Excel/CSV files, preview rows instantly, sort and filter columns, and export cleaned results. Perfect for verifying potential tutor candidates for the growth of the tutoring services.',
        image: null,
        video: 'nV7hD0pANBg',
      },
      {
        title: 'Upload Availability',
        description: "Accept Excel uploads or manual entry to ingest tutors' availability; the uploader groups schedules by tutor and supports saving or deleting tutor schedules.",
        image: null,
        video: 'SdKIR4RrVGM',
      },
      {
        title: 'Assign Tutors',
        description: 'Assign tutors to 30‑minute slots across sections (Math, Tutoring Commons, Writing) via click/drag; assignments show color-coded chips and live hour totals with warnings for overtime.',
        image: null,
        video: 's54e-G3orDU',
      },
       {
        title: 'Adjust Calendar',
        description: 'Customize days and time‑slots, add/reorder slots with AM/PM validation, and save admin calendar preferences — includes undo/discard safeguards for unsaved changes.',
        image: null,
        video: 'cIxprkVkQi8',
      },
       {
        title: 'Manage Users',
        description: 'Search, filter, and manage accounts with verification status and stats; protected accounts and a typed delete confirmation keep removals safe.',
        image: null,
        video: 'Dq3olVYGwjM',
      },
       {
        title: 'Reviews & Feedback',
        description: 'Public anonymous feedback — browse tutors, view profiles, and submit star ratings + comments; admin views aggregate reviews for quality monitoring.',
        image: null,
        video: '7-jQRgHlMxI',
      },
       {
        title: 'Settings & Preferences',
        description: 'Manage profile picture (with size/large-image handling), toggle dark mode, and opt out of public reviews; changes persist to backend/localStorage safely.',
        image: null,
        video: 'X_qj3j-TTOE',
      },
    ],
    links: {
      github: 'https://github.com/KIBO-Heavenly/athenor-project',
      live: 'https://kibo-heavenly.github.io/athenor-demo/',
    },
  },
  {
    id: 2,
    slug: 'Wonder Crayon',
    name: 'Wonder Crayon',
    tagline: 'Turn your imagination into illustrated storybooks — one page at a time',
    description: 'Wonder Crayon is an AI-powered storybook creator built in Flutter. Choose an art style, set your page count, and the app generates a fully illustrated book — complete with story text and artwork for every page — synced to your account via Firebase. Supports both fully AI-generated books and custom author-written text, four distinct art styles (Watercolor, Comic Book, Oil Painting, Claymation), a swipe-based reader, and dark mode. Books are stored in the cloud and accessible across devices.',
    tags: ['Flutter', 'Dart', 'Firebase', 'AI/Generative', 'Hive'],
    logo: 'images/Wonder_Crayon_LOGO.jpg',
    heroVideo: '1DBWhxkFzbs',
    features: [
      {
        title: 'Login',
        description: 'Email/password sign-in via Firebase Auth; accounts sync your entire library to the cloud so your books are always accessible wherever you open the app.',
        image: null,
        video: 'GZ42RyjpsOk',
      },
      {
        title: 'Create a Book (AI-Generated)',
        description: 'Enter a title, author name, page count, and choose from four art styles — Watercolor, Comic Book, Oil Painting, or Claymation — then press Generate. AI writes the story text and produces a matching illustration for every page automatically.',
        image: null,
        video: 'WcZxF7Gifc8',
      },
      {
        title: 'Create a Book (Custom Text)',
        description: 'Same setup as auto-generation, but before pressing Generate you can write the text for each page yourself — giving you full narrative control while AI still produces the illustrations to match your words.',
        image: null,
        video: 'jFoTCEdvG_0',
      },
      {
        title: 'My Books',
        description: 'Browse your personal library with book cards showing title, author, page count, art style, and creation date; open any book to read it in full, or delete ones you no longer want.',
        image: null,
        video: 'C-sE5-HcPPw',
      },
      {
        title: 'Account & Settings',
        description: 'View your account details, toggle dark mode for a more comfortable reading environment, and enable or disable swipe-to-turn-pages — all preferences persist across sessions.',
        image: null,
        video: 'f_E2qfr0RwQ',
      },
    ],
    links: {
      github: 'https://github.com/KIBO-Heavenly/wonder-crayon',
      live: 'https://kibo-heavenly.github.io/wonder-crayon/',
    },
  },
   {
    id: 3,
    slug: 'Tidal Waves',
    name: 'Tidal Waves',
    tagline: 'Turn your imagination into illustrated storybooks — one page at a time',
    description: 'Wonder Crayon is an AI-powered storybook creator built in Flutter. Choose an art style, set your page count, and the app generates a fully illustrated book — complete with story text and artwork for every page — synced to your account via Firebase. Supports both fully AI-generated books and custom author-written text, four distinct art styles (Watercolor, Comic Book, Oil Painting, Claymation), a swipe-based reader, and dark mode. Books are stored in the cloud and accessible across devices.',
    tags: ['Flutter', 'Dart', 'Firebase', 'AI/Generative', 'Hive'],
    logo: 'images/Tidal_Waves_LOGO.png',
    heroVideo: '1DBWhxkFzbs',
    features: [
      {
        title: 'Login',
        description: 'Email/password sign-in via Firebase Auth; accounts sync your entire library to the cloud so your books are always accessible wherever you open the app.',
        image: null,
        video: 'GZ42RyjpsOk',
      },
      {
        title: 'Create a Book (AI-Generated)',
        description: 'Enter a title, author name, page count, and choose from four art styles — Watercolor, Comic Book, Oil Painting, or Claymation — then press Generate. AI writes the story text and produces a matching illustration for every page automatically.',
        image: null,
        video: 'WcZxF7Gifc8',
      },
      {
        title: 'Create a Book (Custom Text)',
        description: 'Same setup as auto-generation, but before pressing Generate you can write the text for each page yourself — giving you full narrative control while AI still produces the illustrations to match your words.',
        image: null,
        video: 'jFoTCEdvG_0',
      },
      {
        title: 'My Books',
        description: 'Browse your personal library with book cards showing title, author, page count, art style, and creation date; open any book to read it in full, or delete ones you no longer want.',
        image: null,
        video: 'C-sE5-HcPPw',
      },
      {
        title: 'Account & Settings',
        description: 'View your account details, toggle dark mode for a more comfortable reading environment, and enable or disable swipe-to-turn-pages — all preferences persist across sessions.',
        image: null,
        video: 'f_E2qfr0RwQ',
      },
    ],
    links: {
      github: 'https://github.com/KIBO-Heavenly/wonder-crayon',
      live: 'https://kibo-heavenly.github.io/wonder-crayon/',
    },
  },
  {
    id: 4,
    slug: 'Shard Stamp',
    name: 'Shard Stamp',
    tagline: 'Turn your imagination into illustrated storybooks — one page at a time',
    description: 'Wonder Crayon is an AI-powered storybook creator built in Flutter. Choose an art style, set your page count, and the app generates a fully illustrated book — complete with story text and artwork for every page — synced to your account via Firebase. Supports both fully AI-generated books and custom author-written text, four distinct art styles (Watercolor, Comic Book, Oil Painting, Claymation), a swipe-based reader, and dark mode. Books are stored in the cloud and accessible across devices.',
    tags: ['Flutter', 'Dart', 'Firebase', 'AI/Generative', 'Hive'],
    logo: 'images/Shard-Stamp-LOGO.png',
    heroVideo: '1DBWhxkFzbs',
    features: [
      {
        title: 'Login',
        description: 'Email/password sign-in via Firebase Auth; accounts sync your entire library to the cloud so your books are always accessible wherever you open the app.',
        image: null,
        video: 'GZ42RyjpsOk',
      },
      {
        title: 'Create a Book (AI-Generated)',
        description: 'Enter a title, author name, page count, and choose from four art styles — Watercolor, Comic Book, Oil Painting, or Claymation — then press Generate. AI writes the story text and produces a matching illustration for every page automatically.',
        image: null,
        video: 'WcZxF7Gifc8',
      },
      {
        title: 'Create a Book (Custom Text)',
        description: 'Same setup as auto-generation, but before pressing Generate you can write the text for each page yourself — giving you full narrative control while AI still produces the illustrations to match your words.',
        image: null,
        video: 'jFoTCEdvG_0',
      },
      {
        title: 'My Books',
        description: 'Browse your personal library with book cards showing title, author, page count, art style, and creation date; open any book to read it in full, or delete ones you no longer want.',
        image: null,
        video: 'C-sE5-HcPPw',
      },
      {
        title: 'Account & Settings',
        description: 'View your account details, toggle dark mode for a more comfortable reading environment, and enable or disable swipe-to-turn-pages — all preferences persist across sessions.',
        image: null,
        video: 'f_E2qfr0RwQ',
      },
    ],
    links: {
      github: 'https://github.com/KIBO-Heavenly/wonder-crayon',
      live: 'https://kibo-heavenly.github.io/wonder-crayon/',
    },
  },
];

export const getProjectBySlug = (slug) => 
{
  return projects.find((project) => project.slug === slug);
};
