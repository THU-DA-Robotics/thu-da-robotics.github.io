// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-members",
          title: "Members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "news-we-won-the-1st-place-of-2024-icra-robotic-grasping-of-manipulation-competition-rgmc-in-hand-manipulation-track-amp-amp-most-elegant-solution-congratulations-sparkles-smile",
          title: 'We won the 1st place of 2024 ICRA Robotic Grasping of Manipulation Competition...',
          description: "",
          section: "News",},{id: "news-four-papers-accepted-by-iros-2024-congratulations-sparkles-smile",
          title: 'Four papers accepted by IROS 2024! Congratulations! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-our-paper-generalizable-whole-body-global-manipulation-of-deformable-linear-objects-by-dual-arm-robot-in-3-d-constrained-environments-has-been-accepted-by-ijrr-congratulations-sparkles-smile",
          title: 'Our paper “Generalizable whole-body global manipulation of deformable linear objects by dual-arm robot...',
          description: "",
          section: "News",},{id: "news-our-paper-learning-to-assist-different-wearers-in-multitasks-efficient-and-individualized-human-in-the-loop-adaptation-framework-for-lower-limb-exoskeleton-has-been-accepted-by-tro-congratulations-sparkles-smile",
          title: 'Our paper “Learning to assist different wearers in multitasks: efficient and individualized human-in-the-loop...',
          description: "",
          section: "News",},{id: "news-prof-xiang-li-has-been-invited-to-join-the-ijrr-editorial-board-as-an-associate-editor",
          title: 'Prof. Xiang Li has been invited to join the IJRR editorial board as...',
          description: "",
          section: "News",},{id: "news-the-nsfc-rgc-joint-project-entitled-towards-shared-autonomy-collaborative-robotic-ultrasound-scanning-with-safe-and-anytime-intervention-has-been-awarded-congratulations-to-prof-xiang-li-the-pi-at-the-mainland-side-and-prof-zheng-li-the-pi-at-the-hong-kong-side-tada-tada-tada",
          title: 'The NSFC-RGC joint project entitled “Towards Shared–Autonomy: Collaborative Robotic Ultrasound Scanning with Safe...',
          description: "",
          section: "News",},{id: "news-our-paper-cell-cryopreservation-in-a-microfluidic-chip-with-vision-based-fluid-control-and-region-reaching-has-been-accepted-by-tase-congratulations-sparkles-smile",
          title: 'Our paper “Cell cryopreservation in a microfluidic chip with vision-based fluid control and...',
          description: "",
          section: "News",},{id: "news-mingrui-yu-has-been-awarded-the-china-national-scholarship-for-graduate-students-congratulations-sparkles-smile",
          title: 'Mingrui Yu has been awarded the China National Scholarship for Graduate Students. Congratulations!...',
          description: "",
          section: "News",},{id: "news-prof-xiang-li-has-been-invited-to-join-the-tro-editorial-board-as-an-associate-editor",
          title: 'Prof. Xiang Li has been invited to join the TRO editorial board as...',
          description: "",
          section: "News",},{id: "news-mingrui-yu-has-been-awarded-the-tsinghua-jiang-nanxiang-scholarship-congratulations-sparkles-smile",
          title: 'Mingrui Yu has been awarded the Tsinghua Jiang Nanxiang Scholarship. Congratulations! :sparkles: :smile:...',
          description: "",
          section: "News",},{id: "news-shihefeng-wang-has-been-awarded-the-tsinghua-wang-dazhong-scholarship-congratulations-sparkles-smile",
          title: 'Shihefeng Wang has been awarded the Tsinghua Wang Dazhong Scholarship. Congratulations! :sparkles: :smile:...',
          description: "",
          section: "News",},{id: "news-our-paper-upper-limb-rehabilitation-with-a-dual-mode-individualized-exoskeleton-robot-a-generative-model-based-solution-has-been-accepted-by-ijrr-congratulations-sparkles-smile",
          title: 'Our paper “Upper-limb rehabilitation with a dual-mode individualized exoskeleton robot: a generative-model-based solution”...',
          description: "",
          section: "News",},{id: "news-congratulations-to-prof-xiang-li-for-being-selected-as-an-outstanding-associate-editor-for-ieee-robotics-and-automation-letters-ra-l",
          title: 'Congratulations to Prof. Xiang Li for being selected as an Outstanding Associate Editor...',
          description: "",
          section: "News",},{id: "projects-manipulation-of-deformable-objects",
          title: 'Manipulation of Deformable Objects',
          description: "such as cables and ropes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-dexterous-manipulation",
          title: 'Dexterous Manipulation',
          description: "contact-rich manipulation and in-hand manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-micro-manipulation",
          title: 'Micro Manipulation',
          description: "universal dexterous micro manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-human-robot-interaction",
          title: 'Human-Robot Interaction',
          description: "in manufacturing industry",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-exoskeleton-robots",
          title: 'Exoskeleton Robots',
          description: "rehabilitation and human augmentation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-medical-assistance-robots",
          title: 'Medical Assistance Robots',
          description: "including ultrasound and surgical robots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-multi-agent-system",
          title: 'Multi-Agent System',
          description: "robot soccer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
