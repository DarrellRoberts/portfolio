import { type ProjectData } from "../../types/ProjectData"

export const projects: ProjectData[] = [
  {
    title: "e-Mission GmbH",
    tech: "Vue, Nuxt, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/eMission/em_circle_dashboard_light_hover.webp",
      "/portfolio-screenshots/eMission/em_circle_dashboard_dark_hover.webp",
    ],
    lightImages: [
      "/portfolio-screenshots/eMission/em_circle_dashboard_light_noHover.webp",
      "/portfolio-screenshots/eMission/em_mobile_dashboard_light.webp",
      "/portfolio-screenshots/eMission/em_video_player_light.webp",
      "/portfolio-screenshots/eMission/em_carousel_dashboard_light.webp",
    ],
    darkImages: [
      "/portfolio-screenshots/eMission/em_circle_dashboard_dark_noHover.webp",
      "/portfolio-screenshots/eMission/em_mobile_dashboard_dark.webp",
      "/portfolio-screenshots/eMission/em_video_player_dark.webp",
      "/portfolio-screenshots/eMission/em_carousel_dashboard_dark.webp",
    ],
    description:
      "An e-learning, B2B application that educates companies on sustainability",
    features: [
      "User-generated project and goals with the option to automate with an AI-feature",
      "Circular dashboard to show user's progress",
      "Video player with transcript, subtitles and customisable settings",
      "Data-driven management dashboard to view and compare employees' progress",
      "Over 30 interactive lessons in German, English and Polish",
    ],
    link: "https://www.e-mission.de/en",
  },
  {
    title: "Book Club Brothers",
    tech: "React, Next, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/bcb/bcb_homepage_light_hover.webp",
      "/portfolio-screenshots/bcb/bcb_homepage_dark_hover.webp",
    ],
    lightImages: [
      "/portfolio-screenshots/bcb/bcb_homepage_light.webp",
      "/portfolio-screenshots/bcb/bcb_aboutpage_light.webp",
      "/portfolio-screenshots/bcb/bcb_3dbookpage_light.webp",
      "/portfolio-screenshots/bcb/bcb_profilepage_light.webp",
    ],
    darkImages: [
      "/portfolio-screenshots/bcb/bcb_homepage_dark.webp",
      "/portfolio-screenshots/bcb/bcb_aboutpage_dark.webp",
      "/portfolio-screenshots/bcb/bcb_3dbookpage_dark.webp",
      "/portfolio-screenshots/bcb/bcb_profilepage_dark.webp",
    ],
    description: "A website and web application for my book club",
    features: [
      "A 3D and interactive book library built with ThreeJS",
      "Various data-driven dashboards and charts to compare book ratings and specific details",
      "Book rating system for non-fiction, novels as well as a specialised system anthologies",
      "Customizable user profiles and achievement badges",
      "Randomiser feature for user-selected books complete with data filters",
    ],
    link: "https://github.com/DarrellRoberts/BookClubBrothers_Frontend_NextMigration",
  },
  {
    title: "Asteroid Tracker",
    tech: "Vue, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/asteroid/ast_maindashboard.webp",
      "/portfolio-screenshots/asteroid/ast_maindashboard.webp",
    ],
    lightImages: [
      "/portfolio-screenshots/asteroid/ast_maindashboard.webp",
      "/portfolio-screenshots/asteroid/ast_dashboard_mobile.webp",
      "/portfolio-screenshots/asteroid/ast_graphwidget.webp",
      "/portfolio-screenshots/asteroid/ast_legendview.webp",
    ],
    darkImages: [
      "/portfolio-screenshots/asteroid/ast_maindashboard.webp",
      "/portfolio-screenshots/asteroid/ast_dashboard_mobile.webp",
      "/portfolio-screenshots/asteroid/ast_graphwidget.webp",
      "/portfolio-screenshots/asteroid/ast_legendview.webp",
    ],
    description:
      "A widget dashboard showcasing the latest NASA data on Earth's asteroids",
    features: [
      "Showcases details such as: speed, size, magnitude, orbiting bodies and more about Earth's most recent asteroids",
      "Illustrates each asteroid's distance from Earth with a line graph",
      "Simple navigation between the different asteroids and a random selection feature",
      "A detailed legend explaining the scientific keywords and abbreviations",
      "Orbiting asteroid animation which differs dependant on the asteroid's toxicity",
    ],
    link: "https://github.com/DarrellRoberts/Asteroiden-Tracker",
  },
  {
    title: "Stuttgart Train Timetable",
    tech: "Next, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/stuttgart/st_maindashboard_light.webp",
      "/portfolio-screenshots/stuttgart/st_maindashboard_dark.webp",
    ],
    lightImages: [
      "/portfolio-screenshots/stuttgart/st_maindashboard_light.webp",
      "/portfolio-screenshots/stuttgart/st_mobile_dashboard_light.webp",
      "/portfolio-screenshots/stuttgart/st_loadingdashboard_light.webp",
      "/portfolio-screenshots/stuttgart/st_otherroutes_light.webp",
    ],
    darkImages: [
      "/portfolio-screenshots/stuttgart/st_maindashboard_dark.webp",
      "/portfolio-screenshots/stuttgart/st_mobile_dashboard_dark.webp",
      "/portfolio-screenshots/stuttgart/st_loadingdashboard_dark.webp",
      "/portfolio-screenshots/stuttgart/st_otherroutes_dark.webp",
    ],
    description:
      "A website widget displaying Stuttgart's S-bahn train timetable graph",
    features: [
      "Implemented with ChartJS to show different journeys as well as its stops",
      "Various S-bahn journeys are viewable",
      "Responsive to mobile devices",
      "Ability to add your own journeys",
      "Complete with a dark mode feature",
    ],
    link: "https://github.com/DarrellRoberts/stuttgart-bildfahrplan-app",
  },
  {
    title: "Pirate Work Management Tool",
    tech: "React, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/pirate/pir-maindashboard.webp",
      "/portfolio-screenshots/pirate/pir-maindashboard.webp",
    ],
    lightImages: [
      "/portfolio-screenshots/pirate/pir-maindashboard.webp",
      "/portfolio-screenshots/pirate/pir-mobiledashboard.webp",
      "/portfolio-screenshots/pirate/pir-create-scroll.webp",
      "/portfolio-screenshots/pirate/pir-edit-scroll.webp",
    ],
    darkImages: [
      "/portfolio-screenshots/pirate/pir-maindashboard.webp",
      "/portfolio-screenshots/pirate/pir-mobiledashboard.webp",
      "/portfolio-screenshots/pirate/pir-create-scroll.webp",
      "/portfolio-screenshots/pirate/pir-edit-scroll.webp",
    ],
    description:
      "A tool to manage multiple to-do lists and workloads but also pirate-themed",
    features: [
      "Option to create multiple lists with different themes",
      "Create, edit and delete list as well as to-do items, saved with local storage",
      "Responsive to mobile devices",
    ],
    link: "https://github.com/DarrellRoberts/pirate-work-management-tool",
  },
]
