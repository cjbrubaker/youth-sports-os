/*
 * Dataset for the Youth Sports OS.
 *
 * Programs: ranked list of the top youth sports programs for Denver area families.
 * Calendar: registration windows for popular sports.
 * Discounts: strategies to reduce costs.
 * Development plan: long‑term roadmap for ages 10–18.
 * Guide: tips for parents to evaluate coaches and programs.
 *
 * To update data via a Google Sheet, you can replace these arrays with calls
 * to a public JSON feed from Google Sheets (e.g. using Tabletop.js or
 * simply fetching CSV via fetch). See script.js for hints.
 */

// Ranked programs (top 20)
const programsData = [
  {
    rank: 1,
    name: "Denver Youth Sports",
    sports: "Multi (soccer, basketball, flag football, volleyball, track, baseball)",
    location: "Denver (citywide)",
    ageRange: "5–14",
    season: "Spring/Fall/Winter",
    costRange: "$80–$150",
    website: "https://www.denveryouthsports.org/"
  },
  {
    rank: 2,
    name: "YMCA Youth Sports",
    sports: "Soccer, basketball, flag football, volleyball",
    location: "Metropolitan Denver",
    ageRange: "5–15",
    season: "Spring/Fall/Winter",
    costRange: "$100–$180",
    website: "https://denverymca.org/"
  },
  {
    rank: 3,
    name: "i9 Sports (Central Park / Park Hill)",
    sports: "Flag football, soccer, basketball, baseball",
    location: "Central Park / Park Hill",
    ageRange: "4–14",
    season: "Spring/Fall",
    costRange: "$120–$180",
    website: "https://www.i9sports.com/"
  },
  {
    rank: 4,
    name: "Central Park Recreation Center Leagues",
    sports: "Basketball, volleyball, tennis, flag football, swim lessons",
    location: "Central Park",
    ageRange: "5–15",
    season: "Varies",
    costRange: "$80–$150",
    website: "https://www.denvergov.org/parksandrecreation"
  },
  {
    rank: 5,
    name: "Skyhawks Sports Camps",
    sports: "Multi (soccer, flag football, baseball, tennis, golf)",
    location: "Multiple Denver locations",
    ageRange: "4–14",
    season: "Summer",
    costRange: "$150–$350",
    website: "https://skyhawks.com/"
  },
  {
    rank: 6,
    name: "Altitude All Sports",
    sports: "Basketball, baseball, soccer, flag football",
    location: "Central Park",
    ageRange: "4–12",
    season: "Spring/Fall",
    costRange: "$100–$200",
    website: "https://altitudeallsports.com/"
  },
  {
    rank: 7,
    name: "Redline Athletics (Denver East)",
    sports: "Performance (speed, agility, strength)",
    location: "Denver East",
    ageRange: "8–18",
    season: "Year‑round",
    costRange: "$150–$250/month",
    website: "https://redlineathletics.com/location/denver-east/"
  },
  {
    rank: 8,
    name: "AdvantageYOU Tennis",
    sports: "Tennis lessons and camps",
    location: "Denver metro",
    ageRange: "5–18",
    season: "Year‑round",
    costRange: "$120–$400",
    website: "https://advantagesports.com/"
  },
  {
    rank: 9,
    name: "First Tee Colorado",
    sports: "Golf clinics and leagues",
    location: "Denver metro",
    ageRange: "7–18",
    season: "Spring/Summer/Fall",
    costRange: "$150–$300",
    website: "https://firstteecolorado.org/"
  },
  {
    rank: 10,
    name: "Denver Youth Tennis",
    sports: "Tennis lessons",
    location: "Denver Parks and Recreation",
    ageRange: "5–15",
    season: "Spring/Summer",
    costRange: "$120–$200",
    website: "https://www.denveryouthsports.org/content/25628/About-DPR-Youth-Tennis"
  },
  {
    rank: 11,
    name: "Colorado Rapids Youth Soccer Club",
    sports: "Soccer (competitive and recreational)",
    location: "Denver metro",
    ageRange: "6–18",
    season: "Year‑round",
    costRange: "$200–$600",
    website: "https://www.coloradorapids.com/youth"
  },
  {
    rank: 12,
    name: "Bear Creek Youth Lacrosse",
    sports: "Lacrosse",
    location: "Bear Creek area",
    ageRange: "6–14",
    season: "Spring/Fall",
    costRange: "$300–$500",
    website: "https://bearcreeklacrosse.com/"
  },
  {
    rank: 13,
    name: "Denver Soccer Club",
    sports: "Soccer",
    location: "Denver metro",
    ageRange: "6–14",
    season: "Spring/Fall",
    costRange: "$200–$500",
    website: "https://denversoccerclub.com/"
  },
  {
    rank: 14,
    name: "Colorado Rush Soccer Club",
    sports: "Soccer",
    location: "Littleton area",
    ageRange: "6–18",
    season: "Year‑round",
    costRange: "$300–$800",
    website: "https://coloradorush.com/"
  },
  {
    rank: 15,
    name: "Cherry Creek Lacrosse",
    sports: "Lacrosse",
    location: "Cherry Creek",
    ageRange: "6–18",
    season: "Spring/Fall",
    costRange: "$300–$600",
    website: "https://www.cherrycreeklacrosse.org/"
  },
  {
    rank: 16,
    name: "Foothills Swim Team",
    sports: "Swimming (competitive)",
    location: "Littleton",
    ageRange: "5–21",
    season: "Year‑round",
    costRange: "$900–$2000",
    website: "https://www.foothillsswimteam.com/"
  },
  {
    rank: 17,
    name: "Ken Caryl Swim Team",
    sports: "Swimming (recreational)",
    location: "Ken Caryl Ranch",
    ageRange: "5–18",
    season: "Summer",
    costRange: "$200–$400",
    website: "https://ken-carylranch.org/"
  },
  {
    rank: 18,
    name: "Colorado Athletic Club – Monaco Marlins",
    sports: "Swimming lessons, swim team",
    location: "Denver (Monaco)",
    ageRange: "5–18",
    season: "Summer and year‑round training",
    costRange: "$35 registration + $350 per season",
    website: "https://wellbridge.com/colorado-athletic-club-monaco/swim-team/"
  },
  {
    rank: 19,
    name: "CSU Spur Youth Programs",
    sports: "Multi (science, ag, sports science)",
    location: "Denver National Western Complex",
    ageRange: "8–18",
    season: "Summer",
    costRange: "$100–$200",
    website: "https://csuspur.org/"
  },
  {
    rank: 20,
    name: "Denver Parks Specialty Camps",
    sports: "Multi (various specialty camps)",
    location: "Denver recreation centers",
    ageRange: "6–12",
    season: "Summer",
    costRange: "$100–$250",
    website: "https://www.denvergov.org/parksandrecreation"
  }
];

// Calendar data: registration windows and deadlines
const calendarData = [
  { sport: "Basketball", season: "Winter", registrationOpens: "October", registrationDeadline: "November" },
  { sport: "Flag Football", season: "Spring", registrationOpens: "January", registrationDeadline: "February" },
  { sport: "Flag Football", season: "Fall", registrationOpens: "July", registrationDeadline: "August" },
  { sport: "Soccer", season: "Spring", registrationOpens: "January", registrationDeadline: "February" },
  { sport: "Soccer", season: "Fall", registrationOpens: "July", registrationDeadline: "August" },
  { sport: "Baseball", season: "Spring", registrationOpens: "January", registrationDeadline: "February" },
  { sport: "Lacrosse", season: "Spring", registrationOpens: "December", registrationDeadline: "January" },
  { sport: "Track", season: "Spring", registrationOpens: "February", registrationDeadline: "March" },
  { sport: "Camps", season: "Summer", registrationOpens: "March", registrationDeadline: "May" }
];

// Discounts and savings strategies
const discountData = [
  {
    title: "MY Denver Card",
    description: "Provides free recreation center access, swimming and discounted youth programming for ages 5–18. Check the city website for details."
  },
  {
    title: "Volunteer Coaching",
    description: "Many leagues offer 30–50% fee reductions or credits when parents volunteer as coaches or team managers."
  },
  {
    title: "Early Registration",
    description: "Register before the official deadline to save $20–$50 per season in most programs."
  },
  {
    title: "YMCA Financial Assistance",
    description: "The YMCA offers sliding scale fees based on income; members often receive 25–40% off program fees."
  },
  {
    title: "Scholarships and Aid",
    description: "Ask leagues about financial assistance or youth access funds; most recreation departments and clubs have scholarship pools."
  }
];

// Development plan: outline across age bands
const developmentPlan = [
  {
    phase: "Age 10–12",
    goals: [
      "Play multiple sports to build coordination and confidence",
      "Focus on fundamentals: agility, balance, teamwork",
      "Limit to 2 sports per season to avoid overscheduling"
    ],
    recommendedSports: [
      { sport: "Soccer", rationale: "Teamwork and footwork" },
      { sport: "Basketball", rationale: "Hand‑eye coordination and team play" },
      { sport: "Flag Football", rationale: "Team strategy and agility" },
      { sport: "Track", rationale: "Endurance and speed" }
    ]
  },
  {
    phase: "Age 13–15",
    goals: [
      "Select two primary sports you enjoy most",
      "Add strength and agility training",
      "Participate in school teams and consider club participation"
    ],
    recommendedSports: [
      { sport: "Soccer", rationale: "Large high school and college pipeline" },
      { sport: "Lacrosse", rationale: "Growing competitive opportunities" },
      { sport: "Basketball", rationale: "Leadership and quick decision making" }
    ]
  },
  {
    phase: "Age 16–18",
    goals: [
      "Focus on varsity or club level for primary sport",
      "Refine strength, conditioning, and sports IQ",
      "Engage in recruiting camps if college athletics is a goal"
    ],
    recommendedSports: [
      { sport: "Soccer", rationale: "Strong college recruiting path" },
      { sport: "Lacrosse", rationale: "Emerging college scholarships" },
      { sport: "Basketball", rationale: "Broad opportunity across divisions" }
    ]
  }
];

// Parent scouting guide content
const guideData = [
  {
    heading: "Qualities of Good Coaches",
    points: [
      "Focus on positive reinforcement and building confidence",
      "Provide equal playing time and encourage all players",
      "Emphasize fundamentals and skill development over winning",
      "Communicate clearly with parents and players"
    ]
  },
  {
    heading: "Warning Signs to Avoid",
    points: [
      "Coaches who frequently yell or demean players",
      "Programs that emphasize early specialization for young kids",
      "Little to no practice time on fundamentals",
      "Excessive travel demands for a beginner program"
    ]
  },
  {
    heading: "League Selection Criteria",
    points: [
      "Practices limited to once per week for younger ages",
      "Games scheduled on weekends for convenience",
      "Locations within a short drive (<20 minutes)",
      "Transparent cost structure and clear registration deadlines"
    ]
  },
  {
    heading: "Budget Planning",
    points: [
      "Target $700–$1000 total per year for leagues, camps and equipment",
      "Allocate roughly $350–$500 to leagues and $200–$300 to camps",
      "Factor in equipment costs ($100–$200) as your child grows",
      "Use discounts and scholarships to keep costs manageable"
    ]
  }
];