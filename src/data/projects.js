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
        description: 'Accept Excel uploads or manual entry to ingest tutors’ availability; the uploader groups schedules by tutor and supports saving or deleting tutor schedules.',
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
    tagline: '',
    description: '',
    tags: [],
    logo: 'images/Wonder_Crayon_LOGO.jpg',
    heroVideo: null,
    features: [
      {
        title: '',
        description: '',
        image: null,
        video: null,
      },
      {
        title: '',
        description: '',
        image: null,
        video: null,
      },
      {
        title: '',
        description: '',
        image: null,
        video: null,
      },
    ],
    links: {
      github: '',
      live: '',
    },
  },
];

export const getProjectBySlug = (slug) => 
{
  return projects.find((project) => project.slug === slug);
};
