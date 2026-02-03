import { type ProjectData } from "../../types/ProjectData"

export const projectsEN: ProjectData[] = [
  {
    title: "Rosemary's Home Fitness",
    tech: "Vue, Nuxt, Sanity.io, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/rhf/rhf_homepage.webp",
      "/portfolio-screenshots/rhf/rhf_homepage.webp",
    ],
    lightImages: [
      "/portfolio-screenshots/rhf/rhf_homepage.webp",
      "/portfolio-screenshots/rhf/rhf_mobile.webp",
      "/portfolio-screenshots/rhf/rhf_postcode.webp",
      "/portfolio-screenshots/rhf/rhf_faq.webp",
    ],
    darkImages: [
      "/portfolio-screenshots/rhf/rhf_homepage.webp",
      "/portfolio-screenshots/rhf/rhf_mobile.webp",
      "/portfolio-screenshots/rhf/rhf_postcode.webp",
      "/portfolio-screenshots/rhf/rhf_faq.webp",
    ],
    description:
      "A leads generating website for a personal trainer targeting the older demographic",
    features: [
      "Headless CMS integration with Sanity allowing real-time content editing for the client",
      "Postcode validator for the leads generation form to filter out unreachable leads",
      "Static Site Generation with Nuxt for fast page-loads",
      "Optimised towards older users to fit with the client's target audience and pass accessibility standards",
      "Three-stage stepper, leads form to make it intuitive and prevent user fatigue",
    ],
    link: "https://www.rosemaryshomefitness.co.uk/",
  },
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
      "/portfolio-screenshots/asteroid/ast_maindashboard_hover.webp",
      "/portfolio-screenshots/asteroid/ast_maindashboard_hover.webp",
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
      "/portfolio-screenshots/stuttgart/st_maindashboard_light_hover.webp",
      "/portfolio-screenshots/stuttgart/st_maindashboard_dark_hover.webp",
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
      "/portfolio-screenshots/pirate/pir-maindashboard_hover.webp",
      "/portfolio-screenshots/pirate/pir-maindashboard_hover.webp",
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

export const projectsDE: ProjectData[] = [
  {
    title: "Rosemary's Home Fitness",
    tech: "Vue, Nuxt, Sanity.io, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/rhf/rhf_homepage.webp",
      "/portfolio-screenshots/rhf/rhf_homepage.webp",
    ],
    lightImages: [
      "/portfolio-screenshots/rhf/rhf_homepage.webp",
      "/portfolio-screenshots/rhf/rhf_mobile.webp",
      "/portfolio-screenshots/rhf/rhf_postcode.webp",
      "/portfolio-screenshots/rhf/rhf_faq.webp",
    ],
    darkImages: [
      "/portfolio-screenshots/rhf/rhf_homepage.webp",
      "/portfolio-screenshots/rhf/rhf_mobile.webp",
      "/portfolio-screenshots/rhf/rhf_postcode.webp",
      "/portfolio-screenshots/rhf/rhf_faq.webp",
    ],
    description:
      "Eine Website zur Lead-Generierung für einen Personal Trainer, die speziell auf eine ältere Zielgruppe ausgerichtet ist",
    features: [
      "Headless CMS-Integration mit Sanity, die dem Kunden Inhaltsbearbeitung in Echtzeit ermöglicht",
      "Postleitzahlen-Validator für das Lead-Formular, um nicht erreichbare Anfragen herauszufiltern",
      "Statische Website-Generierung (SSG) mit Nuxt für schnelle Ladezeiten",
      "Optimiert für ältere Nutzer, um der Zielgruppe des Kunden zu entsprechen und Barrierefreiheitsstandards zu erfüllen",
      "Intuitive Lead-Generierung durch ein dreistufiges Stepper-Formular zur Vermeidung von Nutzerermüdung",
    ],
    link: "https://www.rosemaryshomefitness.co.uk/",
  },
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
      "Eine E-Learning B2B-Anwendung, die Unternehmen zum Thema Nachhaltigkeit schult",
    features: [
      "Vom Benutzer generierte Projekte und Ziele mit der Option zur Automatisierung durch eine KI-Funktion",
      "Kreisförmiges Dashboard zur Anzeige des Benutzerfortschritts",
      "Videoplayer mit Transkript, Untertiteln und anpassbaren Einstellungen",
      "Datengesteuertes Management-Dashboard zur Anzeige und zum Vergleich des Fortschritts der Mitarbeitenden",
      "Über 30 interaktive Lektionen in Deutsch, Englisch und Polnisch",
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
    description: "Eine Website und Web-Anwendung für meinen Buchclub",
    features: [
      "Eine mit ThreeJS erstellte 3D- und interaktive Buchbibliothek",
      "Verschiedene datengesteuerte Dashboards und Diagramme zum Vergleich von Buchbewertungen und spezifischen Details",
      "Buchbewertungssystem für Sachbücher, Romane sowie ein spezialisiertes System für Anthologien",
      "Anpassbare Benutzerprofile und Erfolgsabzeichen (Achievement Badges)",
      "Zufallsgenerator-Funktion für vom Benutzer ausgewählte Bücher, komplett mit Datenfiltern",
    ],
    link: "https://github.com/DarrellRoberts/BookClubBrothers_Frontend_NextMigration",
  },
  {
    title: "Asteroid Tracker",
    tech: "Vue, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/asteroid/ast_maindashboard_hover.webp",
      "/portfolio-screenshots/asteroid/ast_maindashboard_hover.webp",
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
      "Ein Widget-Dashboard, das die neuesten NASA-Daten zu erdnahen Asteroiden präsentiert",
    features: [
      "Zeigt Details wie Geschwindigkeit, Größe, Helligkeit, umlaufende Körper und mehr über die jüngsten erdnahen Asteroiden an",
      "Veranschaulicht die Entfernung jedes Asteroiden von der Erde mit einem Liniendiagramm",
      "Einfache Navigation zwischen den verschiedenen Asteroiden und eine Zufallsauswahl-Funktion",
      "Eine detaillierte Legende, die die wissenschaftlichen Schlüsselwörter und Abkürzungen erklärt",
      "Animation des umlaufenden Asteroiden, die sich je nach Toxizität des Asteroiden unterscheidet",
    ],
    link: "https://github.com/DarrellRoberts/Asteroiden-Tracker",
  },
  {
    title: "Stuttgart Train Timetable",
    tech: "Next, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/stuttgart/st_maindashboard_light_hover.webp",
      "/portfolio-screenshots/stuttgart/st_maindashboard_dark_hover.webp",
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
      "Ein Website-Widget, das den Fahrplan-Graphen der Stuttgarter S-Bahn anzeigt",
    features: [
      "Mit ChartJS implementiert, um verschiedene Fahrten sowie deren Haltestellen anzuzeigen",
      "Verschiedene S-Bahn-Fahrten sind einsehbar",
      "Reagiert auf mobile Geräte (Responsive Design)",
      "Möglichkeit, eigene Fahrten hinzuzufügen",
      "Komplett mit einer Dunkelmodus-Funktion (Dark Mode Feature)",
    ],
    link: "https://github.com/DarrellRoberts/stuttgart-bildfahrplan-app",
  },
  {
    title: "Pirate Work Management Tool",
    tech: "React, TypeScript",
    hoverImage: [
      "/portfolio-screenshots/pirate/pir-maindashboard_hover.webp",
      "/portfolio-screenshots/pirate/pir-maindashboard_hover.webp",
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
      "Ein Tool zur Verwaltung mehrerer To-Do-Listen und Arbeitslasten, aber im Piraten-Thema",
    features: [
      "Option, mehrere Listen mit unterschiedlichen Themen zu erstellen",
      "Listen sowie To-Do-Einträge erstellen, bearbeiten und löschen, gespeichert im lokalen Speicher (Local Storage)",
      "Reagiert auf mobile Geräte (Responsive Design)",
    ],
    link: "https://github.com/DarrellRoberts/pirate-work-management-tool",
  },
]

const createProjectMap = (projects: ProjectData[]) => {
  const projectMap = new Map()
  projects.forEach((project) => projectMap.set(project.title, project))
  return projectMap
}

export const projectMapEN = createProjectMap(projectsEN)

export const projectMapDE = createProjectMap(projectsDE)

const createProjectSlugs = (projects: ProjectData[]) => {
  return projects.map((project) => encodeURIComponent(project.title))
}

export const projectSlugs = createProjectSlugs(projectsEN)
