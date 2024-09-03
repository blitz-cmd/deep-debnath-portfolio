/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Deep Debnath",
  title: "Hi all, I'm Deep",
  subTitle: emoji(
    "DevOps Engineer 🚀 with 2+ years of cloud-native experience on AWS ☁️. Expert in Docker, Kubernetes, and Terraform 🛠️. Skilled in automation, optimization, and problem-solving 🧠. Let's build something extraordinary together! 💪"
  ),
  resumeLink:
    "https://drive.google.com/file/d/13NcUCF6h4L17xUjY-kQow_l7k15LA7Mr/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/blitz-cmd",
  linkedin: "https://www.linkedin.com/in/deep-debnath-504/",
  gmail: "deepdebnath613@gmail.com",
  leetcode: "https://leetcode.com/u/blitzi504/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technologies",
  subTitle: "Exploring the diverse range of skills I've acquired and developed.",
  skills: [
    emoji(
      "⚡ Leveraged automation tools and scripting to seamlessly transition applications and infrastructure to new environments."
    ),
    emoji("⚡ Designed and optimized systems to handle increased workloads and user demands through infrastructure scaling and performance tuning."),
    emoji(
      "⚡ Implemented robust CI/CD pipelines to ensure efficient and reliable software delivery to various platforms."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Automation",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Collaboration",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/bvcoe.png"),
      subHeader: "Bachelor of Engineering in Information Technology",
      duration: "Augest 2018 - July 2022",
      desc: "Bachelor of Engineering in Information Technology (BE IT) from Mumbai University provides a strong foundation in computer science and its applications. Graduates emerge with a comprehensive understanding of software development, networking, database management, and other IT-related concepts.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Automation",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs1.png"),
      date: "July 2022 - Present",
      desc: "1. Migrated legacy on-prem application to AWS cloud-native platform using technologies like EC2, S3, NLB, API Gateway, Lambda and ECS for 90% scalability boost & higher loan processing volume. <br>2. Implemented multi-layered API Gateway security using multi-factor authentication via Cognito, granular access control through IAM Roles and Policies, and dynamic API key rotation using Secrets Manager, achieving 100% compliance with industry security standards. <br>3. Engineered an automated build script utilizing Bash Script and ECS for Lambda packages, strengthened security protocols and achieved 99% compliance with the client's stringent cybersecurity standards. <br>4. Reduced manual efforts by 95% through a proprietary script that transitions business rules to JSONLogic in Python and Cloud9 for streamlined decision processes. <br>5. Designed and implemented a robust real-time monitoring framework with CloudWatch and Kibana; achieved 99.95% service uptime and reduced incident response time by 50%. <br>6. Boosted deployment efficiency by 97% & enhanced automation using Node.js and GitHub Actions for the client via parallel processing. <br>7. Orchestrated optimization of project strategies with TCS SME team, aligning with client tech objectives;  enhanced innovation output by 30% and accelerated project completion by 20%.",
    },
    {
      role: "AWS Intern",
      company: "Whizlabs",
      companylogo: require("./assets/images/whizlabs.png"),
      date: "September 2021 - February 2022",
      desc: "1. Built various AWS labs which had impacted more than 1000 new learners. 2. Integrated various AWS services like AWS Lambda, Boto3 SDK, CloudWatch, IAM, etc. to provide seamless service to the customer. <br>3. Solved production issues by finding the root cause and preventing any damage to the organization. <br>4. Troubleshoot customer problems and assisted them with innovative solutions. <br>5. Used software like Confluence & Jira to follow Agile Methodology in the development.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Portfolio",
  subtitle: "Explore a selection of my recent projects and creative works.",
  projects: [
    {
      image: require("./assets/images/app.png"),
      projectName: "FarmForecast App",
      projectDesc: "Rice Crop Yield Predictor is a Machine Learning-driven Android application that predicts rice crop yields with real-time data visualization sourced from IoT sensors; improved prediction accuracy by 25% using AWS services for enhanced data processing.",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/blitz-cmd"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/portfolio.png"),
      projectName: "Portfolio App",
      projectDesc: "Constructed a high-performance portfolio website using Vue.js, executed a fully automated CI/CD pipeline with GitHub Actions, deployed to AWS EC2 using Kubernetes, and optimized image management with Docker Hub.",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/blitz-cmd"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Career Achievements",
  subtitle:
    "My journey as a DevOps Engineer has been marked by unwavering dedication to learning and skill enhancement, along with enthusiastic participation in design events. As a result, I have collected a list of notable awards and certifications:",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      subtitle:
        "Certified by AWS in Cloud Computing; demonstrated expertise in AWS services.",
      image: require("./assets/images/SAA-C03.png"),
      imageAlt: "SAA-C03 logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/12X1CRtVPrtec07mZsoyn5V7TPKuIhxMp/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      subtitle:
        "Certified by AWS in Cloud Computing; demonstrated expertise in AWS services.",
      image: require("./assets/images/clf-c02.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1INZYAdPOgZbheq1tM4xMKf6BWCF9jvV_/view?usp=sharing"
        }
      ]
    },

    {
      title: "Applause Award - Tata Consultancy Services (TCS)",
      subtitle: "Recognized for resolving a critical technical challenge related to AWS by implementing an innovative solution.",
      image: require("./assets/images/tcs.png"),
      imageAlt: "Logo",
      footerLink: [
        {
          name: "More Info",
          url: "https://drive.google.com/file/d/1y6xkmZGNXCx3irMEG9MKRClz0AAH0Vp4/view?usp=sharing"
        }
      ]
    },
    
    {
      title: "On the Spot (Team) Award - Tata Consultancy Services (TCS)",
      subtitle: "Award for delivering high-impact cloud solutions leveraging AWS CDK and Python.",
      image: require("./assets/images/tcs.png"),
      imageAlt: "Logo",
      footerLink: [
        {
          name: "More Info",
          url: "https://drive.google.com/file/d/1vP423BsilA-BNfgHNaGPmYC4dN2ysHxt/view?usp=sharing"
        }
      ]
    },
    {
      title: "Appreciation Certificate - Tata Consultancy Services (TCS)",
      subtitle: "Acknowledged exemplary collaboration and innovative problem-solving within the project team.",
      image: require("./assets/images/tcs.png"),
      imageAlt: "Logo",
      footerLink: [
        {
          name: "More Info",
          url: "https://drive.google.com/file/d/1aL6ioyDzt24vA_J2a1jnXq7lWMngfgyG/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest",
      slides_url: "https://bit.ly/slides",
      event_url: "https://www.facebook.com//"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Reach Out to me!",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "📞 +91-9967926830",
  email_address: "📧 deepdebnath613@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
