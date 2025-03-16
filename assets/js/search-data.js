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
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
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
          section: "News",},{id: "projects-manipulation-of-deformable-objects",
          title: 'Manipulation of Deformable Objects',
          description: "such as cables and ropes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-dexterous-manipulation",
          title: 'Dexterous Manipulation',
          description: "contact-rich manipulation and in-hand manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-micro-manipulation",
          title: 'Micro Manipulation',
          description: "universal dexterous micro manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-human-robot-interaction",
          title: 'Human-Robot Interaction',
          description: "in manufacturing industry",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-exoskeleton-robots",
          title: 'Exoskeleton Robots',
          description: "rehabilitation and human augmentation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-medical-assistance-robots",
          title: 'Medical Assistance Robots',
          description: "including ultrasound and surgical robots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-multi-agent-system",
          title: 'Multi-Agent System',
          description: "robot soccer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
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
