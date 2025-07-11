export type PictureInfo = {
    link: string;
    repo: string;
    title: string;
    piPath: string;
    tags: string[];
};

export type PictureData = PictureInfo[];

const pictureInfoData = [
  {
    // link: "https://old.cragady.github.io/",
    // repo: "https://github.com/Cragady/old.Cragady.github.io",
    link: "/projects/OldPortfolios",
    repo: "/projects/OldPortfolios",
    title: "Basic Portfolio",
    piPath: "/images/basic-portfolio.PNG",
    tags: [
      "portfolio",
      "no-script",
      "basic",
      "html",
      "css"
    ]
  },
  {
    // link: "https://cragady.github.io/Bootstrap-Portfolio/",
    // repo: "https://github.com/Cragady/Bootstrap-Portfolio",
    link: "/projects/OldPortfolios",
    repo: "/projects/OldPortfolios",
    title: "Bootstrap Portfolio",
    piPath: "/images/bootstrap-portfolio.PNG",
    tags: [
      "portfolio",
      "no-script",
      "no-css",
      "bootstrap",
      "html"
    ]
  },
  {
    // link: "https://cragady.github.io/Responsive-Portfolio/",
    // repo: "https://github.com/Cragady/Responsive-Portfolio",
    link: "/projects/OldPortfolios",
    repo: "/projects/OldPortfolios",
    title: "Responsive Portfolio",
    piPath: "/images/responsive-portfolio.PNG",
    tags: [
      "portfolio",
      "no-script",
      "basic",
      "html",
      "css"
    ]
  },
  {
    link: "https://cragady.github.io/Word-Guess-Game",
    repo: "https://github.com/Cragady/Word-Guess-Game",
    title: "Hangman",
    piPath: "/images/hangman-game.PNG",
    tags: [
      "javascript",
      "vanilla-js",
      "html",
      "css",
      "bootstrap"
    ]
  },
  {
    link: "https://cragady.github.io/unit-4-game",
    repo: "https://github.com/Cragady/unit-4-game",
    title: "RPG Game",
    piPath: "/images/RPG-game.PNG",
    tags: [
      "javascript",
      "jquery",
      "html",
      "css",
      "bootstrap"
    ]
  },
  {
    link: "https://cragady.github.io/TriviaGame",
    repo: "https://github.com/Cragady/TriviaGame",
    title: "Trivia Game",
    piPath: "/images/trivia-game.PNG",
    tags: [
      "javascript",
      "jquery",
      "html",
      "css",
      "bootstrap"
    ]
  },
  {
    link: "https://cragady.github.io/RPS-Multiplayer",
    repo: "https://github.com/Cragady/RPS-Multiplayer",
    title: "Rock Paper Scissors",
    piPath: "/images/RPS-game.PNG",
    tags: [
      "javascript",
      "jquery",
      "firebase",
      "html",
      "css",
      "bootstrap"
    ]
  },
  {
    link: "https://cragady.github.io/giphy-games",
    repo: "https://github.com/Cragady/giphy-games",
    title: "Giphy Api",
    piPath: "/images/giphy-gifs.PNG",
    tags: [
      "javascript",
      "jquery",
      "api",
      "html",
      "css",
      "bootstrap"
    ]
  },
  {
    link: "https://cragady.github.io/08_project-1",
    repo: "https://github.com/Cragady/08_project-1",
    title: "Chef in your Pantry (Group)",
    piPath: "/images/chef-in-your-pantry.PNG",
    tags: [
      "javascript",
      "jquery",
      "api",
      "html",
      "css",
      "bootstrap",
      "hardware-interface"
    ]
  },
  {
    link: "https://github.com/Cragady/liri-node-app",
    repo: "https://github.com/Cragady/liri-node-app",
    title: "liri.js CLI",
    piPath: "/images/liriJS.PNG",
    tags: [
      "javascript",
      "node",
      "cli",
      "api",
      "npm"
    ]
  },
  {
    link: "https://github.com/Cragady/Word-Guess-Cli",
    repo: "https://github.com/Cragady/Word-Guess-Cli",
    title: "Word-Guess CLI",
    piPath: "/images/word-guess-pic.PNG",
    tags: [
      "javascript",
      "node",
      "cli",
      "npm"
    ]
  },
  {
    link: "https://github.com/Cragady/bamazon-cli",
    repo: "https://github.com/Cragady/bamazon-cli",
    title: "Bamazon CLI",
    piPath: "/images/bamazon.PNG",
    tags: [
      "javascript",
      "node",
      "cli",
      "npm",
      "mysql"
    ]
  },
  {
    link: "https://immense-reef-53914.herokuapp.com",
    repo: "https://github.com/Cragady/FriendFinder",
    title: "Friend Finder",
    piPath: "/images/friend-finder2.PNG",
    tags: [
      "javascript",
      "jquery",
      "node",
      "express",
      "npm",
      "mysql",
      "html",
      "css",
      "bootstrap"
    ]
  },
  {
    link: "https://infinite-escarpment-10093.herokuapp.com",
    repo: "https://github.com/Cragady/burger",
    title: "Burger",
    piPath: "/images/burgers.png",
    tags: [
      "javascript",
      "jquery",
      "node",
      "express",
      "npm",
      "mysql",
      "api",
      "html",
      "css",
      "bootstrap",
      "handlebars"
    ]
  },
  {
    link: "https://arcane-sea-52510.herokuapp.com",
    repo: "https://github.com/Cragady/burger-sequel",
    title: "Burger Sequel",
    piPath: "/images/Burgers2.PNG",
    tags: [
      "javascript",
      "jquery",
      "node",
      "express",
      "npm",
      "mysql",
      "api",
      "html",
      "css",
      "bootstrap",
      "handlebars",
      "sequelize",
      "orm"
    ]
  },
  {
    link: "https://calm-ocean-96864.herokuapp.com",
    repo: "https://github.com/user-outerface/project-2",
    title: "Book-MarkY!",
    piPath: "/images/Book-MarkY!.PNG",
    tags: [
      "javascript",
      "jquery",
      "node",
      "express",
      "npm",
      "mysql",
      "api",
      "html",
      "css",
      "bootstrap",
      "handlebars",
      "sequelize",
      "orm",
      "mongodb",
      "passport",
      "user-login"
    ]
  },
  {
    link: "https://cragady.github.io/Portfolio/",
    repo: "https://github.com/Cragady/Portfolio",
    title: "Old Personal Portfolio",
    piPath: "/images/old-personal-portfolio.PNG",
    tags: [
      "portfolio",
      "javascript",
      "jquery",
      "html",
      "css",
      "bootstrap"
    ]
  },
  {
    link: "https://nameless-sands-15542.herokuapp.com",
    repo: "https://github.com/Cragady/Scraper",
    title: "News Scraper",
    piPath: "/images/web-scraper.PNG",
    tags: [
      "javascript",
      "jquery",
      "node",
      "express",
      "npm",
      "api",
      "html",
      "css",
      "bootstrap",
      "handlebars",
      "mongodb",
      "mongoose",
      "orm",
      "user-login"
    ]
  },
  {
    link: "https://cragady.github.io/Clicky-Game",
    repo: "https://github.com/Cragady/Clicky-Game",
    title: "Clicky Game",
    piPath: "/images/clicky.PNG",
    tags: [
      "javascript",
      "es6",
      "react",
      "html",
      "css",
      "bootstrap",
      "yarn"
    ]
  },
  {
    link: "https://pure-lake-85163.herokuapp.com",
    repo: "https://github.com/Cragady/NYT-Scrubber",
    title: "NYT Scrubber",
    piPath: "/images/nyt-scrubber.PNG",
    tags: [
      "mern",
      "javascript",
      "es6",
      "react",
      "express",
      "node",
      "mongodb",
      "mongoose",
      "axios",
      "api",
      "orm",
      "yarn"
    ]
  },
  {
    link: "https://fathomless-lake-80884.herokuapp.com",
    repo: "https://github.com/user-outerface/project-3",
    title: "IntroNerd",
    piPath: "/images/intronerd.PNG",
    tags: [
      "mern",
      "javascript",
      "es6",
      "mongodb",
      "express",
      "react",
      "node",
      "mongoose",
      "axios",
      "api",
      "orm",
      "yarn",
      "user-login"
    ]
  }
];

export { pictureInfoData };
