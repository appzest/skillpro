// const { get } = require("request");

// require("dotenv").config();

// async function getCourses(req, res) {
//   try {
//     const data = [
//       {
//         subCategoryTitle: "Most Recommended",
//         spanCount: 2,
//         layoutManager: "grid",
//         courses: [
//           {
//             id: 1,
//             courseName: "ChatGPT",
//             courseLogo:
//               "https://cdn.leadmint.io/SkillPro/Assets/LearnChatGPT.png",
//             tag: "Trending",
//           },
//           {
//             id: 2,
//             courseName: "Generative AI",
//             courseLogo:
//               "https://cdn.leadmint.io/SkillPro/Assets/GenerativeAI.png",
//             tag: "Trending",
//           },
//           {
//             id: 3,
//             courseName: "Graphic Design",
//             courseLogo:
//               "https://cdn.leadmint.io/SkillPro/Assets/GraphicDesign.png",
//             tag: "Designing",
//           },
//           {
//             id: 4,
//             courseName: "Web Design",
//             courseLogo:
//               "https://cdn.leadmint.io/SkillPro/Assets/WebsiteDesign.png",
//             tag: "Designing",
//           },
//         ],
//       },
//       {
//         subCategoryTitle: "Learners Choice",
//         spanCount: 1,
//         layoutManager: "linear",
//         courses: [
//           {
//             id: 5,
//             courseName: "Facebook Ads",
//             courseLogo:
//               "https://cdn.leadmint.io/SkillPro/Assets/LearnMetaAds.png",
//             tag: "Ads",
//           },
//           {
//             id: 6,
//             courseName: "Google Ads",
//             courseLogo:
//               "https://cdn.leadmint.io/SkillPro/Assets/LearnGoogleAds.png",
//             tag: "Ads",
//           },
//           {
//             id: 7,
//             courseName: "AI Agents",
//             courseLogo:
//               "https://cdn.leadmint.io/SkillPro/Assets/LearnAIAgents.png",
//             tag: "AI",
//           },
//         ],
//       },
//     ];

//     return res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching courses:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// module.exports = getCourses;
require("dotenv").config();
const con = require("../../database/connection");
const conAdmin = require("../../database/connectionAdmin");
var getIP = require("ipware")().get_ip;
const moment = require("moment-timezone");

module.exports = {
  saveData: function (req, callback) {
    const data =
    [
  {
    "Id": 1,
    "courseName": "Generative AI",
    "courseLogo": "https://cdn.leadmint.io/SkillPro/Assets/GenerativeAI.png",
    "tag": "Learn AI 🤖",
    "description": "<h2>What You Will Learn:</h2><ul><li>How AI creates content and images</li><li>Tools to boost work, shop, or business</li><li>Use AI for social posts and ideas</li><li>Time-saving ways to get more done</li><li>Start exploring AI to earn more</li></ul>"
  },
  {
    "Id": 2,
    "courseName": "GPT",
    "courseLogo": "https://cdn.leadmint.io/SkillPro/Assets/LearnChatGPT.png",
    "tag": "Learn AI 🤖",
    "description": "<h2>What You Will Learn:</h2><ul><li>Save time in daily tasks</li><li>Write better messages and replies</li><li>Get help in studies or work</li><li>Use it for business content</li><li>Start using AI like a smart tool</li></ul>"
  },
  {
    "Id": 3,
    "courseName": "Graphic Design",
    "courseLogo": "https://cdn.leadmint.io/SkillPro/Assets/GraphicDesign.png",
    "tag": "Learn Designing 🎨",
    "description": "<h2>What You Will Learn:</h2><ul><li>Create posters, cards, and logos</li><li>Use free design tools easily</li><li>Make festival and shop creatives</li><li>Practice with real design projects</li><li>Start earning from your designs</li></ul>"
  },
  {
    "Id": 4,
    "courseName": "Web Design",
    "courseLogo": "https://cdn.leadmint.io/SkillPro/Assets/WebsiteDesign.png",
    "tag": "Learn Designing 🎨",
    "description": "<h2>What You Will Learn:</h2><ul><li>Make websites without coding</li><li>Create for shops or schools</li><li>Use simple tools like Wix & Google</li><li>Design for mobile and laptop view</li><li>Build your online portfolio</li></ul>"
  },
  {
    "Id": 5,
    "courseName": "Facebook Ads",
    "courseLogo": "https://cdn.leadmint.io/SkillPro/Assets/LearnMetaAds.png",
    "tag": "Learn Ads 💰",
    "description": "<h2>What You Will Learn:</h2><ul><li>Run simple Facebook campaigns</li><li>Reach more local customers</li><li>Create ads with photos or video</li><li>Use targeting to boost results</li><li>Grow your business online</li></ul>"
  },
  {
    "Id": 6,
    "courseName": "Google Ads",
    "courseLogo": "https://cdn.leadmint.io/SkillPro/Assets/LearnGoogleAds.png",
    "tag": "Learn Ads 💰",
    "description": "<h2>What You Will Learn:</h2><ul><li>Appear on Google search results</li><li>Target local and active buyers</li><li>Create ad text and keywords</li><li>Understand basic ad spending</li><li>Get more visitors to your shop/site</li></ul>"
  },
  {
    "Id": 7,
    "courseName": "AI Agents",
    "courseLogo": "https://cdn.leadmint.io/SkillPro/Assets/LearnAIAgents.png",
    "tag": "Learn AI 🤖",
    "description": "<h2>What You Will Learn:</h2><ul><li>What AI agents can do for you</li><li>Create simple chatbots or helpers</li><li>Automate tasks like replies</li><li>Use tools without any coding</li><li>Save time and do more smartly</li></ul>"
  }
]




    callback(200, data);
  },
};
