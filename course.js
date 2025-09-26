module.exports = {
    saveData: function (req, callback) {


        const courseId = parseInt(req.body.courseId);

        console.log("Course ID:", courseId);


        const courseDetails = [
            {
                "courseId": 1,
                "title": "Learn Generative AI",
                "sections": [
                    {
                        "title": "Introduction to Generative AI",
                        "icon": "🤖",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What is Generative AI?",
                                "content": "<p><strong>Generative AI</strong> is a smart computer system that can create new things like text, images, music, or videos. It's like your creative friend who can help you write stories, make posters, or even sing songs!</p>"
                            },
                            {
                                "title": "Why is it called 'Generative'?",
                                "content": "<p>'Generative' means 'to create something new'. So, Generative AI is a tool that creates new content every time – not just copies. It’s like an artist or writer who always has fresh ideas.</p>"
                            },
                            {
                                "title": "How is it different from regular AI?",
                                "content": "<p>Regular AI helps you search for information or make choices. Generative AI goes beyond that – it creates something new. Like, regular AI finds a recipe for you. Generative AI can invent a new one based on your ingredients!</p>"
                            },
                            {
                                "title": "Real-world examples you've seen",
                                "content": "<p>You might have used Generative AI without even realizing! When ChatGPT writes a message for you, or when Instagram filters change your face, or when you see cool AI-made images on Facebook – that’s Generative AI in action.</p>"
                            },
                            {
                                "title": "Why should you learn it?",
                                "content": "<p>Learning Generative AI can help you make creative content for your business, like posters or messages. You can even earn money by offering content services to others – all from your phone or computer at home.</p>"
                            },
                            {
                                "title": "What you'll be able to do after this course",
                                "content": "<p>After this course, you'll be able to make images, write messages, create simple AI tools, and use these skills to support your shop, job, or even start a side business.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Understanding AI Basics",
                        "icon": "🧠",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What is Artificial Intelligence?",
                                "content": "<p><strong>Artificial Intelligence (AI)</strong> means teaching computers to think and learn like humans. Just like you learn from experience, AI learns from examples and becomes smarter with time.</p>"
                            },
                            {
                                "title": "How AI learns",
                                "content": "<p>AI learns by looking at lots of examples. Like, to recognize a mango, it sees many mango pictures. To answer messages, it reads lots of conversations. More examples = better learning.</p>"
                            },
                            {
                                "title": "Types of AI you should know",
                                "content": "<p><strong>Narrow AI:</strong> Good at one task (like face recognition)<br><strong>General AI:</strong> Can do many tasks (still not ready)<br><strong>Generative AI:</strong> Creates new content (this is what you're learning here)</p>"
                            },
                            {
                                "title": "Machine Learning explained simply",
                                "content": "<p>Machine Learning means AI improves by learning from patterns – like teaching a child. You don’t give rules for every case; just show examples, and the AI learns from them.</p>"
                            },
                            {
                                "title": "Deep Learning in simple terms",
                                "content": "<p>Deep Learning uses brain-like systems called 'neural networks'. They process things step-by-step, layer-by-layer. This is what powers today's powerful AI tools.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Types of Generative AI",
                        "icon": "🎨",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Text Generation (Like ChatGPT)",
                                "content": "<p>This type of AI creates written content – stories, messages, articles, even computer code. It's like having a smart friend who can write anything for you, in any language or style. For example, you can ask it to write a message for your grocery shop or a poem for a festival.</p>"
                            },
                            {
                                "title": "Image Generation (Like DALL-E, Midjourney)",
                                "content": "<p>This AI makes pictures from your words. You can say, “A tractor in a green field” and get a picture of it. Useful for making shop posters, WhatsApp status images, or product photos for your tailoring or mobile repair business.</p>"
                            },
                            {
                                "title": "Audio Generation",
                                "content": "<p>This AI creates sounds, music, or even speaks in a human voice. You can turn text into speech in Hindi, Tamil, or any language, or make background music for your tuition class videos. Very helpful for local content.</p>"
                            },
                            {
                                "title": "Video Generation",
                                "content": "<p>This AI can make short videos from your words or pictures. For example, make a 30-second video to promote your shop or explain a product. The technology is new but improving fast.</p>"
                            },
                            {
                                "title": "Code Generation",
                                "content": "<p>This AI writes computer code for you. You just explain what you want – like a calculator app or a simple website for your business – and it creates the code. Great for beginners who don’t know programming.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Popular Generative AI Tools",
                        "icon": "🛠️",
                        "type": "free",
                        "contents": [
                            {
                                "title": "ChatGPT (Text Generation)",
                                "content": "<p>This is the most popular AI for writing. Use it for free at <a href='https://chat.openai.com'>chat.openai.com</a>. It helps write shop messages, explain topics, or answer questions – just like talking to a helpful person online.</p>"
                            },
                            {
                                "title": "DALL-E (Image Generation)",
                                "content": "<p>DALL-E makes pictures from your words. You can use it in ChatGPT Plus, or try Bing Image Creator for free. Great for creating festival posters, product images, or WhatsApp greetings for your business.</p>"
                            },
                            {
                                "title": "Canva AI (Design Tool)",
                                "content": "<p>Canva is a popular design app with AI features. Make posters, social media posts, and cards easily. Many features are free – useful for tailoring shops, tuition classes, and small businesses.</p>"
                            },
                            {
                                "title": "Google Gemini (Alternative to ChatGPT)",
                                "content": "<p>Google Gemini is like ChatGPT. Use it free at <a href='https://gemini.google.com'>gemini.google.com</a>. Good for getting information, writing, or research in simple language.</p>"
                            },
                            {
                                "title": "Free alternatives for beginners",
                                "content": "<ul><li>Bing Image Creator (for pictures)</li><li>Google Bard</li><li>Free Canva</li></ul><p>These tools help you try AI without spending money. Start here before you pay for anything.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Getting Started with AI Tools",
                        "icon": "🚀",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Setting up your first AI account",
                                "content": "<p>Start with ChatGPT. Visit <a href='https://chat.openai.com'>chat.openai.com</a>. Click 'Sign Up' and use your email or phone number. It's free and works on most smartphones and computers.</p>"
                            },
                            {
                                "title": "Your first AI conversation",
                                "content": "<p>Ask ChatGPT something simple. For example, “Write a thank you message for my tailoring customers in Hindi” or “Explain solar energy in easy words.” Try different questions and see how it replies.</p>"
                            },
                            {
                                "title": "Creating your first AI image",
                                "content": "<p>Go to Bing Image Creator (free) and type what you want: “A colourful poster for Diwali sale” or “A logo for my mobile repair shop.” Start with easy ideas and enjoy the results.</p>"
                            },
                            {
                                "title": "Common mistakes to avoid",
                                "content": "<ul><li>Don’t ask too many things at once.</li><li>Be clear about what you want.</li><li>AI is not perfect – check its work before using.</li><li>Practice makes you better at using AI.</li></ul>"
                            },
                            {
                                "title": "Practice exercises",
                                "content": "<ul><li>Ask ChatGPT to write a shop opening message in your local language.</li><li>Create a festival poster using image AI.</li><li>Ask AI to explain any topic you want to learn.</li></ul><p>The more you practice, the easier it gets!</p>"
                            }
                        ]
                    },
                    {
                        "title": "AI for Business",
                        "icon": "💼",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "How AI can help your small business",
                                "content": "<p>AI can save you time and effort by writing shop messages, making posters, or answering customer questions. Even a small grocery shop, tuition class, tailoring, or mobile repair business can use AI to look more professional.</p>"
                            },
                            {
                                "title": "Creating marketing content with AI",
                                "content": "<p>Use AI to write WhatsApp offers, make festival posters, or create social media posts. For example, “Write a Pongal offer message for my grocery shop” or “Create a poster for my tailoring business.”</p>"
                            },
                            {
                                "title": "Customer service with AI",
                                "content": "<p>AI can help answer common customer questions, write polite replies, and create FAQs. This saves your time and makes your business look trustworthy.</p>"
                            },
                            {
                                "title": "Product descriptions and catalogs",
                                "content": "<p>If you sell on WhatsApp or Facebook, AI can help write simple, attractive product descriptions and make catalogs. It can even suggest prices by checking what’s popular in your area.</p>"
                            },
                            {
                                "title": "Business planning and research",
                                "content": "<p>Ask AI about new business ideas, market trends, or how to start something new. For example, “What are trending items in rural markets?” or “How to start a tuition class from home?”</p>"
                            },
                            {
                                "title": "Cost-effective AI solutions",
                                "content": "<p>Use free tools like ChatGPT, Bing Image Creator, and Canva. These are enough for most small business needs. Only pay for advanced tools when your business grows.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Creating AI Projects",
                        "icon": "⚙️",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What is an AI project?",
                                "content": "<p>An AI project means using AI tools to solve a real problem or make something useful for yourself or your business. For example, making a WhatsApp auto-reply, creating festival posters, or building a simple chatbot for your tuition class.</p>"
                            },
                            {
                                "title": "Simple project ideas to start with",
                                "content": "<ul><li>WhatsApp auto-reply using ChatGPT</li><li>Poster generator for your shop</li><li>Content calendar for your social media</li><li>Feedback analyzer for your customers</li></ul>"
                            },
                            {
                                "title": "Planning your first project",
                                "content": "<p>Pick a small, useful idea. For example, if you spend too much time sending messages, use AI to make templates. Start simple and improve step by step.</p>"
                            },
                            {
                                "title": "Tools you'll need",
                                "content": "<ul><li>ChatGPT (free)</li><li>Website builder like Wix or WordPress (free)</li><li>Basic copy-paste skills</li></ul><p>No need for coding – many tools are easy and made for beginners.</p>"
                            },
                            {
                                "title": "Step-by-step project creation",
                                "content": "<ol><li>Find a problem you want to solve</li><li>Pick the right AI tool</li><li>Plan your steps</li><li>Test with small examples</li><li>Improve based on results</li><li>Show your project to friends or family for feedback</li></ol>"
                            },
                            {
                                "title": "Common challenges and solutions",
                                "content": "<ul><li><strong>AI gives wrong information:</strong> Always check important facts.</li><li><strong>Results not as expected:</strong> Be clearer in your request.</li><li><strong>Technical problems:</strong> Start with easy tools and learn slowly.</li></ul>"
                            }
                        ]
                    },
                    {
                        "title": "Advanced AI Concepts",
                        "icon": "🔬",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What are GANs?",
                                "content": "<p>GANs (Generative Adversarial Networks) are like two AIs playing a game. One tries to make fake images, the other tries to catch the fake. This makes both better, and the results look more real. Used for making lifelike photos or art.</p>"
                            },
                            {
                                "title": "Understanding VAEs",
                                "content": "<p>VAEs (Variational Autoencoders) are like smart compressors. They learn to make simple versions of things like images, then can recreate or change them. Useful for making new versions of photos or designs.</p>"
                            },
                            {
                                "title": "What are Transformers?",
                                "content": "<p>Transformers are the technology behind ChatGPT and similar tools. They understand how words connect, so they can write and answer like a real person. That's why ChatGPT can talk in a natural way.</p>"
                            },
                            {
                                "title": "Fine-tuning explained",
                                "content": "<p>Fine-tuning means teaching AI with your own data, like your shop’s messages or product photos. This way, AI can talk or create images in your style. Useful if you want AI to sound like your business.</p>"
                            },
                            {
                                "title": "API and integration",
                                "content": "<p>API (Application Programming Interface) lets different apps work together. For example, you can connect AI to your shop website to answer questions automatically. Many AI tools offer this for businesses.</p>"
                            }
                        ]
                    },
                    {
                        "title": "AI Ethics and Safety",
                        "icon": "🛡️",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Why ethics matter in AI",
                                "content": "<p>AI is powerful, so we must use it honestly and carefully. Don’t use AI to cheat or fool people. Respect others’ work and privacy. Good ethics help build trust with your customers and community.</p>"
                            },
                            {
                                "title": "Avoiding misinformation",
                                "content": "<p>Sometimes AI gives wrong or fake information. Always check important details, especially for business or studies. Don’t use AI alone for big decisions.</p>"
                            },
                            {
                                "title": "Respecting copyright",
                                "content": "<p>Some AI content may have copyright rules. If you use AI-made posters or text, check if you can use them freely. When unsure, make your own content or ask for permission.</p>"
                            },
                            {
                                "title": "Privacy considerations",
                                "content": "<p>Don’t give AI tools your personal details, customer data, or important business secrets. Use tools that protect your privacy and check their rules before sharing information.</p>"
                            },
                            {
                                "title": "Being transparent",
                                "content": "<p>If you use AI for your business, be open about it. You can say “Made with AI help.” Customers appreciate honesty, and it builds your reputation.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Future of Generative AI",
                        "icon": "🔮",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What's coming next?",
                                "content": "<p>AI is improving fast. Soon, you’ll see better videos, more real-looking images, and AI that understands your needs better. These tools will become cheaper and easier for everyone to use, including in villages.</p>"
                            },
                            {
                                "title": "How it will affect jobs",
                                "content": "<p>AI will change many jobs, but also create new ones. People who learn to use AI will have better chances. Don’t compete with AI – use it to do your work better!</p>"
                            },
                            {
                                "title": "Opportunities for rural areas",
                                "content": "<p>AI can help people in rural areas get information, make creative content, and start small businesses from home. It gives equal chances to everyone, not just city people.</p>"
                            },
                            {
                                "title": "Staying updated",
                                "content": "<ul><li>Follow AI news in simple language</li><li>Join WhatsApp or Facebook groups about AI</li><li>Watch YouTube videos for beginners</li></ul><p>Keep learning and practicing – AI changes quickly!</p>"
                            },
                            {
                                "title": "Your role in the AI future",
                                "content": "<p>You can help your family and community learn about AI. Use it for good, teach others, and share what you know. Together, we can make AI useful for everyone.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Practical Applications",
                        "icon": "📱",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "AI for education",
                                "content": "<p>Use AI to make simple notes, explain tough topics, create practice questions, or help kids with homework. AI is like a free tutor for students and teachers.</p>"
                            },
                            {
                                "title": "AI for healthcare information",
                                "content": "<p>AI can explain health topics, make posters about health, or answer general questions. But always ask a real doctor for medical advice.</p>"
                            },
                            {
                                "title": "AI for agriculture",
                                "content": "<p>Make easy farming guides, get weather updates, or check market prices using AI. Farmers can use it to make better decisions and learn new techniques.</p>"
                            },
                            {
                                "title": "AI for local government",
                                "content": "<p>AI can help create awareness posters, translate government messages into local languages, or make reports for village meetings. Makes information easy for everyone.</p>"
                            },
                            {
                                "title": "AI for entertainment",
                                "content": "<p>Make stories, poems, or songs in your language. Create content for festivals, social media, or local events. AI helps keep your culture alive.</p>"
                            },
                            {
                                "title": "Building a portfolio",
                                "content": "<p>Keep samples of your AI work. Share them if you want freelance jobs or to show what you can do. A portfolio helps you get more work or even a job.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Getting Help and Resources",
                        "icon": "📚",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Where to find help",
                                "content": "<ul><li>Ask in WhatsApp or Facebook groups</li><li>Watch YouTube videos in your language</li><li>Read simple guides or ask friends who know AI</li></ul><p>Most AI tools have a help section for beginners.</p>"
                            },
                            {
                                "title": "Free learning resources",
                                "content": "<ul><li>YouTube channels for AI beginners</li><li>Free online courses (Coursera, Google, etc.)</li><li>Blogs and practice websites</li></ul><p>Start with free resources. The Fee you paid for this course is enough to get you started. Now you know what to learn and how to use it. Only pay if you want advanced learning.</p>"
                            },
                            {
                                "title": "Joining AI communities",
                                "content": "<p>Find local or online groups – even in your village or town. Share your projects, ask questions, and learn together. Communities make learning fun and easy.</p>"
                            },
                            {
                                "title": "Practice platforms",
                                "content": "<ul><li>Try Hugging Face, Google Colab, or Replit for free AI practice</li><li>Many offer beginner tutorials</li></ul>"
                            },
                            {
                                "title": "Staying motivated",
                                "content": "<ul><li>Set small, simple goals</li><li>Celebrate your progress</li><li>Remember, everyone starts as a beginner</li><li>Focus on how AI can help your life or work</li></ul>"
                            },
                            {
                                "title": "Final words of encouragement",
                                "content": "<p>By starting this course, you’re already ahead! The best way to learn is by doing. Try small projects, make mistakes, and learn from them. AI is for everyone – including you. Good luck on your AI journey!</p>"
                            }
                        ]
                    }
                ]
            },
            {
                "courseId": 2,
                "title": "Learn GPT",
                "sections": [
                    {
                        "title": "Introduction to ChatGPT",
                        "icon": "🤖",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What is ChatGPT?",
                                "content": "<p><strong>ChatGPT</strong> is a chat assistant from <em>OpenAI</em> that understands questions in normal language and responds with helpful details, ideas, or explanations.</p>"
                            },
                            {
                                "title": "Who founded it?",
                                "content": "<p><em>OpenAI</em> was founded in <strong>December 2015</strong> by a team including <strong>Sam Altman, Elon Musk, Ilya Sutskever,</strong> and <strong>Greg Brockman</strong>. Sam Altman serves as CEO today.</p>"
                            },
                            {
                                "title": "When was it launched?",
                                "content": "<p>ChatGPT was first released to the public in <strong>November 2022</strong> and quickly became a global phenomenon for AI chat.</p>"
                            },
                            {
                                "title": "Where can you use it?",
                                "content": "<p>You can use ChatGPT on your phone:<br><a href=\"https://apps.apple.com/in/app/chatgpt/id6448311069\">App Store (iOS)</a><br><a href=\"https://play.google.com/store/apps/details?id=com.openai.chatgpt\">Google Play Store (Android)</a><br>or via the browser at <a href=\"https://chat.openai.com\">chat.openai.com</a>. Desktop tools offer extra features—like the new <strong>Study Mode</strong> for students and teachers.</p>"
                            },
                            {
                                "title": "Latest model",
                                "content": "<p>As of <em>August 2025</em>, the next generation <strong>GPT-5</strong> is expected soon. Most users currently experience <strong>GPT-4o</strong> or <strong>GPT-4.1 Mini</strong>, depending on their plan.</p>"
                            },
                            {
                                "title": "Free vs Plus",
                                "content": "<p>The free version includes access to <strong>GPT-4.1 Mini</strong> and basic browsing but has usage limits.<br><em>ChatGPT Plus</em> costs around <strong>₹1,600/month</strong> (~$20) and offers priority access to GPT-4o or GPT-5, faster responses, and educational tools.</p>"
                            },
                            {
                                "title": "How does it work?",
                                "content": "<p>ChatGPT is trained on a massive collection of text, code, and conversation examples. It uses pattern-learning to answer questions in your words, simply and smartly.</p>"
                            },
                            {
                                "title": "Why it matters",
                                "content": "<p>ChatGPT makes tasks like writing messages, planning schoolwork, translating local languages, or practicing for interviews much easier—especially if you don’t have expensive tools.</p>"
                            },
                            {
                                "title": "Language support",
                                "content": "<p>ChatGPT works in over <strong>50 languages</strong>, including major Indian languages such as <em>Hindi, Tamil, Bengali, Marathi,</em> and <em>Kannada</em>. Newer models like GPT-4o greatly enhance regional language understanding.</p>"
                            },
                            {
                                "title": "How it helps you earn",
                                "content": "<p>You can use ChatGPT to compose content, translate, or tutor others, create quick WhatsApp messages, or learn new digital skills. Even from a village, basic knowledge and ChatGPT can help you start online work or micro-services.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Using ChatGPT Effectively",
                        "icon": "💡",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Common Mistakes to Avoid",
                                "content": "<p>Many users make simple mistakes like being too vague or asking multiple things at once. For example, instead of saying <em>‘Help me’</em>, try <em>‘Write a short message for my shop’s WhatsApp group’</em>. If you don’t get the answer you want, try rephrasing or adding more details.</p>"
                            },
                            {
                                "title": "Getting Better Responses",
                                "content": "<p>To get accurate answers quickly, be clear and specific. Mention what you want, for whom, and in what style. For example: <em>‘Write a formal email to my teacher about being absent’</em> or <em>‘Explain solar panel in simple Hindi for Class 8’</em>.</p>"
                            },
                            {
                                "title": "Personalizing Responses",
                                "content": "<p>You can ask ChatGPT to reply in a friendly, formal, or even regional style. Try: <em>‘Write a friendly birthday wish in Hinglish’</em> or <em>‘Make this message more professional’</em>. You can also request responses in your local language or with a specific tone.</p>"
                            },
                            {
                                "title": "Saving Time with Shortcuts",
                                "content": "<p>For repeated tasks, save your favorite prompts or use copy-paste. For example, keep a template like <em>‘Write a thank you message for my customers’</em> and just change the details each time. Use bullet points or ask for summaries to get quick, short answers.</p>"
                            },
                            {
                                "title": "Asking in Regional Languages",
                                "content": "<p>Type your questions in Hindi, Tamil, Bengali, Marathi, or any Indian language. For best results, mention the language in your prompt: <em>‘Explain GST in simple Tamil’</em> or <em>‘Write a shop opening message in Bengali’</em>. ChatGPT understands and replies in your chosen language.</p>"
                            },
                            {
                                "title": "Using Follow-Up Questions",
                                "content": "<p>If the first answer isn’t perfect, you can ask follow-up questions or request clarifications. For example, say <em>‘Can you make it shorter?’</em> or <em>‘Explain with an example’</em>. This helps you get exactly what you need without starting over.</p>"
                            },
                            {
                                "title": "Checking for Accuracy",
                                "content": "<p>Always review ChatGPT’s responses, especially for important or factual information. If unsure, cross-check with trusted sources or ask ChatGPT to provide references or sources for its answers.</p>"
                            }
                        ]
                    },
                    {
                        "title": "ChatGPT for Daily Use",
                        "icon": "📅",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Make WhatsApp Messages Faster",
                                "content": "<p>Need to send greetings, birthday wishes, or business replies? Ask: <em>‘Write a Diwali wish for my customers’</em> or <em>‘Send a thank you message in Hinglish’</em>.</p>"
                            },
                            {
                                "title": "Earn Money by Helping Others",
                                "content": "<p>Use ChatGPT to help others with typing, email replies, writing bios or product descriptions — charge a small fee and start earning online or in your area.</p>"
                            },
                            {
                                "title": "Get Quick Help with School Work",
                                "content": "<p>Stuck with homework or need help in a topic? Just say: <em>‘Explain evaporation for Class 6’</em> or <em>‘Give me short answer of Mangalyaan mission’</em>.</p>"
                            },
                            {
                                "title": "Use ChatGPT in Your Own Language",
                                "content": "<p>Type your questions in Hindi, Tamil, Bengali or any Indian language. ChatGPT understands and replies in that same language.</p>"
                            },
                            {
                                "title": "Make Attractive Posters & Greetings (Show Off Your Skills!)",
                                "content": "<p>Want to make festival posters or greeting cards for friends or your shop? You can use AI to create beautiful images and text. Just say: <em>‘Make a poster for Ganesh Chaturthi for my general store’</em> or <em>‘Create a birthday card for my sister with photo and message’</em>.<br><br><strong>You will learn how to do this step-by-step in the next chapter!</strong></p>"
                            },
                            {
                                "title": "Translate Between Languages",
                                "content": "<p>Need to convert a message from English to Hindi, or from Tamil to English? Just ask ChatGPT: <em>‘Translate this sentence to Hindi’</em> or <em>‘Write this message in English’</em>. It helps you communicate easily with people from different regions.</p>"
                            },
                            {
                                "title": "Prepare for Government & Competitive Exams",
                                "content": "<p>Practice for exams like SSC, UPSC, or state-level tests by asking for sample questions, explanations, or summaries. For example: <em>‘Give me 5 GK questions for SSC exam’</em> or <em>‘Explain Indian Constitution in simple words’</em>.</p>"
                            },
                            {
                                "title": "Draft Simple Letters & Applications",
                                "content": "<p>Need to write a leave application, complaint letter, or any official document? Ask ChatGPT: <em>‘Write a leave application for fever in Hindi’</em> or <em>‘Draft a complaint letter to electricity board’</em>. It saves time and gives you ready-to-use templates.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Tips & Best Practices",
                        "icon": "⭐",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Be Specific",
                                "content": "<p>The more details you give, the better ChatGPT understands. Try asking: 'Write a 2-line poem in Hinglish.'</p>"
                            },
                            {
                                "title": "Avoid Ambiguity",
                                "content": "<p>Don't be too general. Instead of 'tell me something', say 'give me a tip for saving money on groceries in India.'</p>"
                            },
                            {
                                "title": "Review Before Using",
                                "content": "<p>Always double-check ChatGPT’s answers, especially for important or official work. If unsure, verify with another trusted source.</p>"
                            },
                            {
                                "title": "Use Simple Language",
                                "content": "<p>Write your questions in clear, simple words. This helps ChatGPT understand you better and give more accurate answers.</p>"
                            },
                            {
                                "title": "Ask Follow-up Questions",
                                "content": "<p>If the first answer isn’t perfect, ask again or give more details. You can say: 'Can you explain in simpler words?' or 'Give me more examples.'</p>"
                            }
                        ]
                    },
                    {
                        "title": "Mastering Prompts for Better Results",
                        "icon": "🎯",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Why Prompts Matter",
                                "content": "<p>Prompts are the way you talk to ChatGPT. A good prompt gives better answers. Just like you explain clearly to a friend, being clear with ChatGPT also helps. If your prompt is confusing, the result may not help you.</p>"
                            },
                            {
                                "title": "How to Write a Good Prompt",
                                "content": "<p>Start with what you want, then add for whom, in which style or language. Example format: <em>'Write a [type of content] for [person/use] in [language/style]'</em>. Always include details like place, tone, or audience.</p>"
                            },
                            {
                                "title": "What to Avoid",
                                "content": "<p>Avoid writing prompts like ‘Help me’ or ‘Write something’. These are too general. Don’t ask too many things in one prompt. Instead, focus on one task per prompt and give context or examples if needed.</p>"
                            },
                            {
                                "title": "Prompt Examples for Daily Use",
                                "content": "<p>Here are some ready-made prompts you can use:<br><ul><li><em>'Write a thank you message in Hinglish for my Kirana customers.'</em></li><li><em>'Create a poster for Ganesh Chaturthi for my general store.'</em></li><li><em>'Translate this sentence to Tamil.'</em></li><li><em>'Draft a leave letter for fever in Hindi.'</em></li></ul></p>"
                            },
                            {
                                "title": "Why These Prompts Work",
                                "content": "<p>These prompts work well because they are specific and include language, audience, and purpose. For example, ‘thank you message in Hinglish for Kirana customers’ tells ChatGPT what to write, how to write, and for whom.</p>"
                            },
                            {
                                "title": "Mistakes and Fixes",
                                "content": "<p>If a prompt didn’t work, ask: Did I give enough detail? Did I mix two questions in one? Was I too general? Try fixing it by adding more info or asking in a simpler way.</p>"
                            },
                            {
                                "title": "Personalizing Responses",
                                "content": "<p>You can change the tone to friendly, formal, or fun. Just ask: <em>'Make it friendly'</em> or <em>'Write in Bhojpuri'</em>. ChatGPT listens to your style requests too.</p>"
                            },
                            {
                                "title": "Follow-Up to Improve Answers",
                                "content": "<p>If the first reply is not perfect, ask a follow-up like: <em>'Make it shorter'</em>, <em>'Add bullet points'</em>, or <em>'Translate this reply'</em>. You don’t need to start over.</p>"
                            },
                            {
                                "title": "Create Your Prompt Templates",
                                "content": "<p>Save your best prompts. For example: <em>'Write an ad for my tiffin service in Hindi'</em>. You can reuse them by just changing small details like place or offer.</p>"
                            },
                            {
                                "title": "Practice to Get Better",
                                "content": "<p>Like any skill, you get better with use. Try different types of prompts every day—for school, business, or fun. ChatGPT becomes more useful when you know how to ask.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Advanced Techniques",
                        "icon": "⚙️",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What Are Advanced Techniques?",
                                "content": "<p>These are smart ways to make ChatGPT work better for you. Like giving it a role, asking for step-by-step help, or setting a fixed reply style. Anyone can learn these—no tech knowledge needed.</p>"
                            },
                            {
                                "title": "Using System Roles",
                                "content": "<p>You can ask ChatGPT to act like a teacher, chef, doctor, or even a local shopkeeper. Try: <em>‘You are a Hindi teacher. Explain nouns to a Class 6 student.’</em> This helps you get replies in a proper tone for your need.</p>"
                            },
                            {
                                "title": "Control the Format of Answers",
                                "content": "<p>Want replies in bullet points, tables, or short lines? Just ask: <em>‘Give in bullet points’</em> or <em>‘Make a table comparing LED and CFL bulbs’</em>. This is helpful for saving time and sharing easily.</p>"
                            },
                            {
                                "title": "Step-by-Step Instructions",
                                "content": "<p>For complex tasks, ask ChatGPT to explain in steps. Example: <em>‘Tell me step-by-step how to open a PayTM account’</em>. It gives you simple, clear steps one by one.</p>"
                            },
                            {
                                "title": "Smart Search with ChatGPT",
                                "content": "<p>Instead of searching on Google, ask ChatGPT for summaries or comparisons. Try: <em>‘What’s better for a Kirana store – Paytm or PhonePe?’</em> or <em>‘Tell me pros and cons of opening a juice stall vs tea stall’</em>.</p>"
                            },
                            {
                                "title": "Translation & Proofreading",
                                "content": "<p>Write something and ask ChatGPT to fix it. For example: <em>‘Correct my message: I not come tomorrow because fever’</em>. It will reply with: <em>‘I won’t be able to come tomorrow because I have a fever.’</em></p>"
                            },
                            {
                                "title": "Using Custom Instructions",
                                "content": "<p>You can guide ChatGPT how to behave. Try: <em>‘Always reply in Hinglish unless I say otherwise’</em>. Or: <em>‘Keep answers short and polite’</em>. This saves time for regular users.</p>"
                            },
                            {
                                "title": "When Not to Use ChatGPT",
                                "content": "<p>Don’t use ChatGPT for live cricket scores or government form filling. It’s best for advice, writing, translation, learning, or idea generation—not for real-time info.</p>"
                            },
                            {
                                "title": "Dos and Don'ts of Advanced Use",
                                "content": "<p><strong>Do:</strong> Be clear, try roles, ask for formats, test styles.<br><strong>Don’t:</strong> Give confusing instructions like ‘Be a manager, but also explain like a farmer, in short and long way’. ChatGPT may get confused too.</p>"
                            },
                            {
                                "title": "Practice Task",
                                "content": "<p>Try this: <em>‘You are a job trainer. Help me prepare for a delivery boy interview in Hindi. Ask questions and check my answers.’</em> Practice like this to build real-life skills.</p>"
                            }
                        ]
                    },
                    {
                        "title": "ChatGPT for Coding",
                        "icon": "💻",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Can ChatGPT Help in Coding?",
                                "content": "<p>Yes! Whether you're new to computers or learning coding basics, ChatGPT can help explain, fix, and even write code for you. It's like having a coding teacher in your pocket.</p>"
                            },
                            {
                                "title": "Understanding Code (Even If You’re New)",
                                "content": "<p>Don’t know programming? No problem. Copy any code and ask: <em>‘Explain this in simple Hindi’</em> or <em>‘Tell me what this code does’</em>. ChatGPT breaks it down in easy terms.</p>"
                            },
                            {
                                "title": "Fixing Errors & Debugging Code",
                                "content": "<p>If you see an error, just paste your code and error message. Ask: <em>‘Why is this not working?’</em> or <em>‘Fix this code’</em>. ChatGPT will guide you step-by-step.</p>"
                            },
                            {
                                "title": "Writing Code from Scratch",
                                "content": "<p>Describe your idea and ChatGPT can write basic code. Example: <em>‘Write HTML code for a Diwali greeting page with lights and message’</em> or <em>‘Make a calculator in Python’</em>.</p>"
                            },
                            {
                                "title": "Translate Between Programming Languages",
                                "content": "<p>You can ask: <em>‘Convert this Python code to JavaScript’</em> or <em>‘Turn this into a React app’</em>. Useful when you're shifting to new languages or updating your project.</p>"
                            },
                            {
                                "title": "Learn by Practicing",
                                "content": "<p>Say: <em>‘Give me 3 small practice questions on loops in Python’</em> or <em>‘Explain what is a variable with example’</em>. You can learn concepts and test yourself easily.</p>"
                            },
                            {
                                "title": "When ChatGPT Can’t Help",
                                "content": "<p>It cannot run or test your code, or handle live bugs in your system. Always try code on your own laptop or phone using proper tools to see real results.</p>"
                            },
                            {
                                "title": "Practice Task: Build Something Small",
                                "content": "<p>Try this: <em>‘Help me create a birthday card webpage for my sister using HTML and CSS. Include photo, name, and message.’</em> You’ll learn by doing — with AI support.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Marketing Applications",
                        "icon": "📈",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Marketing with AI: A New Opportunity",
                                "content": "<p>You don’t need to be a big company to use marketing. Even local shop owners or small online sellers can use ChatGPT to promote offers, create messages, and grow business easily.</p>"
                            },
                            {
                                "title": "Write Ads That Work",
                                "content": "<p>Ask ChatGPT to write ads for WhatsApp, posters, or Facebook. Example: <em>‘Write a short ad in Hinglish for grocery home delivery in Ranchi’</em> or <em>‘Create a one-line ad for my coaching centre for Class 10’</em>.</p>"
                            },
                            {
                                "title": "Know Your Customer",
                                "content": "<p>Say: <em>‘Describe the type of customer who will buy budget phones in Bihar’</em>. Based on this, ChatGPT can suggest the right ad tone, timing, and offer type.</p>"
                            },
                            {
                                "title": "Poster Captions & Slogans",
                                "content": "<p>Create punchy lines for posters. Example: <em>‘Give 3 short captions for tea stall banner in Hindi’</em> or <em>‘Write a catchy slogan for my tailoring shop in Patna’</em>.</p>"
                            },
                            {
                                "title": "Personalized Thank You or Offer Messages",
                                "content": "<p>Keep customers coming back. Say: <em>‘Write a thank you message for a repeat customer in Hinglish’</em> or <em>‘Create a WhatsApp message for Diwali offer for existing customers’</em>.</p>"
                            },
                            {
                                "title": "Product Descriptions Made Easy",
                                "content": "<p>If you sell on WhatsApp or Meesho, ask: <em>‘Write a short Hindi description for cotton saree under ₹500’</em> or <em>‘Make this product more attractive for ladies above 30’</em>.</p>"
                            },
                            {
                                "title": "Festival & Seasonal Promotions",
                                "content": "<p>Say: <em>‘Suggest a Holi special offer for beauty parlour’</em> or <em>‘Create Monsoon discount message for mobile accessories shop’</em>. ChatGPT helps you match promotions with festivals or weather.</p>"
                            },
                            {
                                "title": "Dos and Don’ts in AI Marketing",
                                "content": "<p><strong>Do:</strong> Add local flavor, include real offers, keep it short.<br><strong>Don’t:</strong> Copy exactly from others or promise things you can’t deliver.</p>"
                            },
                            {
                                "title": "Practice Task: Promote Your Shop",
                                "content": "<p>Try this: <em>‘Create 1 WhatsApp ad and 1 short caption for Diwali offer at my general store in Hindi’</em>. Practice like this builds your real business skills using AI.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Limitations & Risks",
                        "icon": "⚠️",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Why You Should Know the Limits",
                                "content": "<p>ChatGPT is powerful, but it’s not perfect. Knowing where it can make mistakes helps you use it wisely and safely.</p>"
                            },
                            {
                                "title": "Sometimes It Gives Wrong Info (Hallucination)",
                                "content": "<p>ChatGPT may give answers that sound correct but are actually wrong. Always cross-check facts using trusted websites, teachers, or books.</p>"
                            },
                            {
                                "title": "It Doesn’t Know Today’s News or Events",
                                "content": "<p>ChatGPT doesn’t know real-time updates like today’s weather, live cricket scores, or news headlines. It works based on past data, not current happenings.</p>"
                            },
                            {
                                "title": "It Can’t Understand Emotions or Local Situations",
                                "content": "<p>ChatGPT doesn’t know your real mood, feelings, or surroundings. It only responds to the words you type. Don’t expect it to fully understand personal issues.</p>"
                            },
                            {
                                "title": "You Make the Final Decision",
                                "content": "<p>Use ChatGPT as a helper, not a boss. It can give ideas or drafts, but final choices—like what to post, send, or decide—are your responsibility.</p>"
                            },
                            {
                                "title": "Avoid for Health, Legal, or Money Advice",
                                "content": "<p>Don’t use ChatGPT for serious health, legal, or financial advice. Always talk to a doctor, lawyer, or expert when it really matters.</p>"
                            },
                            {
                                "title": "Protect Your Privacy",
                                "content": "<p>Never share Aadhaar number, phone OTPs, passwords, or bank info with ChatGPT. It’s a tool for learning, not a place for private details.</p>"
                            },
                            {
                                "title": "Practice Task: Spot the Mistake",
                                "content": "<p>Try this: <em>Ask ChatGPT a general knowledge question like ‘Who is the current Railway Minister of India?’</em> Then cross-check the answer on Google or news websites. This helps you learn how to verify AI answers.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Going Beyond",
                        "icon": "🚀",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Use ChatGPT in Your Own Projects",
                                "content": "<p>If you run a business or startup, you can connect ChatGPT to your own website or app. This is done using something called an <strong>API</strong>, like a digital pipe that sends questions and receives answers automatically.</p>"
                            },
                            {
                                "title": "What is an API?",
                                "content": "<p>API means Application Programming Interface. It lets apps talk to each other. Example: You can use OpenAI’s API to make your app reply to user questions like ChatGPT does.</p>"
                            },
                            {
                                "title": "Ideas You Can Build",
                                "content": "<p>Build things like:<ul><li>A chatbot for your website</li><li>An auto-reply system for WhatsApp</li><li>A tool that writes Facebook posts for your shop</li><li>Voice assistant for school kids in local language</li></ul>These projects can help earn money or improve your service.</p>"
                            },
                            {
                                "title": "What is Fine-Tuning?",
                                "content": "<p>You can train a version of ChatGPT with your own data — for example, FAQs for your kirana store, tuition centre, or regional content. This is called fine-tuning and makes the replies more accurate for your business.</p>"
                            },
                            {
                                "title": "Where to Learn More",
                                "content": "<p>Visit <a href='https://platform.openai.com'>platform.openai.com</a> to explore how to create your own AI tools with OpenAI. You can also learn from YouTube or coding websites in Hindi or English.</p>"
                            },
                            {
                                "title": "Practice Task: Think of a Use Case",
                                "content": "<p>Try this: <em>‘What kind of chatbot can I make using ChatGPT for my father’s medical store or my friend’s coaching centre?’</em> ChatGPT will suggest startup-style ideas you can build and test.</p>"
                            },
                            {
                                "title": "Final Tip & Best Wishes",
                                "content": "<p>Congratulations on reaching the end of this course! Remember, the best way to learn is by trying things yourself. Don’t be afraid to experiment and make mistakes—every attempt will teach you something new. Wishing you lots of success as you use ChatGPT to grow your skills and business. Keep learning and keep moving forward!</p>"
                            }
                        ]
                    }
                ]
            },
            {
                "courseId": 3,
                "title": "Learn Graphic Design",
                "sections": [
                    {
                        "title": "Introduction to Graphic Design",
                        "icon": "🎨",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What is Graphic Design?",
                                "content": "<p><strong>Graphic Design</strong> is the art of creating visual content to communicate messages. It's like telling a story through pictures, colors, and text. When you make a poster for your shop, design a business card, or create a social media post - that's graphic design!</p>"
                            },
                            {
                                "title": "Why is it important for your business?",
                                "content": "<p>Good design makes your business look professional and trustworthy. A well-designed poster can attract more customers to your shop. A beautiful business card helps people remember you. In today's digital world, good design is essential for success.</p>"
                            },
                            {
                                "title": "What you can create with graphic design",
                                "content": "<p>You can design: shop posters, business cards, social media posts, WhatsApp status images, festival greetings, product labels, shop banners, and much more. The possibilities are endless!</p>"
                            },
                            {
                                "title": "Do you need expensive equipment?",
                                "content": "<p>No! You can start with just your phone and free apps. Many successful designers started with basic tools. What matters most is your creativity and willingness to learn.</p>"
                            },
                            {
                                "title": "How this course will help you",
                                "content": "<p>This course will teach you the basics of design, how to use free tools, and how to create professional-looking content for your business. You'll learn step by step, with lots of practical examples.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Understanding Design Basics",
                        "icon": "📐",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What makes good design?",
                                "content": "<p>Good design is clear, attractive, and serves its purpose. It should be easy to read, look professional, and make people want to take action (like visiting your shop or buying your product).</p>"
                            },
                            {
                                "title": "The importance of simplicity",
                                "content": "<p>Simple designs are often the most effective. Don't try to put too many things in one design. Focus on one main message and make it clear and easy to understand.</p>"
                            },
                            {
                                "title": "Understanding your audience",
                                "content": "<p>Think about who will see your design. If you're making a poster for your village shop, use language and images that local people will understand. Consider their age, education level, and interests.</p>"
                            },
                            {
                                "title": "Purpose of your design",
                                "content": "<p>Every design should have a clear purpose. Are you trying to sell something? Inform people about an event? Build your brand? Knowing your goal helps you create better designs.</p>"
                            },
                            {
                                "title": "Design principles overview",
                                "content": "<p>We'll learn about balance, contrast, alignment, and other design principles. These are like rules that help make your designs look professional and attractive.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Color Theory for Beginners",
                        "icon": "🌈",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Why colors matter",
                                "content": "<p>Colors can make people feel happy, excited, calm, or hungry! The right colors can make your design more attractive and help convey your message better.</p>"
                            },
                            {
                                "title": "Understanding color psychology",
                                "content": "<p><strong>Red:</strong> Energy, excitement, urgency (good for sales)<br><strong>Blue:</strong> Trust, calm, professional (good for business)<br><strong>Green:</strong> Nature, health, money (good for organic products)<br><strong>Yellow:</strong> Happiness, optimism (good for food items)<br><strong>Orange:</strong> Creativity, enthusiasm (good for events)</p>"
                            },
                            {
                                "title": "Choosing colors for your business",
                                "content": "<p>Think about what your business does. A medical store might use blue for trust, a food stall might use red or orange for appetite, and a beauty salon might use pink for beauty.</p>"
                            },
                            {
                                "title": "Color combinations that work",
                                "content": "<p>Start with 2-3 colors maximum. Some good combinations:<br>• Blue and white (professional)<br>• Red and yellow (food/business)<br>• Green and white (health/nature)<br>• Black and gold (luxury/premium)</p>"
                            },
                            {
                                "title": "Cultural considerations",
                                "content": "<p>In India, certain colors have special meanings. Red is auspicious, green represents prosperity, and white is pure. Consider these meanings when designing for local audiences.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Typography Basics",
                        "icon": "📝",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What is typography?",
                                "content": "<p>Typography is the art of arranging text to make it readable and attractive. It's about choosing the right fonts, sizes, and spacing to make your message clear and appealing.</p>"
                            },
                            {
                                "title": "Choosing the right fonts",
                                "content": "<p><strong>Serif fonts:</strong> Traditional, formal (good for business cards)<br><strong>Sans-serif fonts:</strong> Modern, clean (good for posters)<br><strong>Script fonts:</strong> Elegant, decorative (good for special occasions)<br><strong>Display fonts:</strong> Bold, attention-grabbing (good for headlines)</p>"
                            },
                            {
                                "title": "Font size hierarchy",
                                "content": "<p>Use different sizes to create importance:<br>• Large text for main headlines<br>• Medium text for subheadings<br>• Small text for details and contact information</p>"
                            },
                            {
                                "title": "Readability tips",
                                "content": "<p>• Use simple fonts for small text<br>• Ensure good contrast between text and background<br>• Don't use too many different fonts in one design<br>• Leave enough space between lines and letters</p>"
                            },
                            {
                                "title": "Using Hindi and English fonts",
                                "content": "<p>For bilingual designs, choose fonts that work well together. Many free fonts support both Hindi and English. Test your design to make sure both languages are readable.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Layout and Composition",
                        "icon": "📋",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What is layout?",
                                "content": "<p>Layout is how you arrange elements (text, images, colors) on your design. A good layout guides the viewer's eye and makes information easy to find and understand.</p>"
                            },
                            {
                                "title": "The rule of thirds",
                                "content": "<p>Imagine dividing your design into 9 equal squares (3x3 grid). Place important elements along these lines or at their intersections. This creates a balanced, professional look.</p>"
                            },
                            {
                                "title": "Creating visual hierarchy",
                                "content": "<p>Make the most important information stand out. Use size, color, and position to guide people's attention. The main message should be the first thing people see.</p>"
                            },
                            {
                                "title": "White space is your friend",
                                "content": "<p>Don't fill every inch of your design. Leave some empty space around elements. This makes your design look clean and professional, and helps people focus on the important information.</p>"
                            },
                            {
                                "title": "Alignment matters",
                                "content": "<p>Line up your text and images. Left alignment is easiest to read. Center alignment works well for titles and short text. Right alignment is less common but can work for special effects.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Free Design Tools",
                        "icon": "🛠️",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Canva (Most Popular)",
                                "content": "<p>Canva is perfect for beginners. It has thousands of free templates for posters, business cards, social media posts, and more. You can use it on your phone or computer. Sign up for free at <a href='https://canva.com'>canva.com</a></p>"
                            },
                            {
                                "title": "GIMP (Free Photoshop Alternative)",
                                "content": "<p>GIMP is a powerful free alternative to Photoshop. It's more complex than Canva but gives you more control. Good for editing photos and creating detailed designs. Download from <a href='https://gimp.org'>gimp.org</a></p>"
                            },
                            {
                                "title": "Inkscape (Free Illustrator Alternative)",
                                "content": "<p>Inkscape is great for creating logos and vector graphics. It's free and works well for designs that need to be resized without losing quality. Download from <a href='https://inkscape.org'>inkscape.org</a></p>"
                            },
                            {
                                "title": "Mobile apps for quick designs",
                                "content": "<p>• <strong>Snapseed:</strong> Photo editing (Google)<br>• <strong>PicsArt:</strong> Photo editing and design<br>• <strong>Adobe Express:</strong> Quick designs and templates<br>• <strong>Pixlr:</strong> Online photo editor</p>"
                            },
                            {
                                "title": "Getting started with Canva",
                                "content": "<p>1. Go to canva.com and create a free account<br>2. Choose a template or start from scratch<br>3. Drag and drop elements to customize<br>4. Use the free images and fonts provided<br>5. Download your design when ready</p>"
                            }
                        ]
                    },
                    {
                        "title": "Creating Your First Designs",
                        "icon": "🎯",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Designing a simple poster",
                                "content": "<p>Start with a festival poster for your shop:<br>1. Choose a template or blank canvas<br>2. Add a clear headline (e.g., 'Diwali Special Offer')<br>3. Include your shop name and contact details<br>4. Add relevant images or icons<br>5. Use 2-3 colors maximum<br>6. Make sure text is readable from a distance</p>"
                            },
                            {
                                "title": "Making a business card",
                                "content": "<p>Essential elements for a business card:<br>• Your name and business name<br>• What you do (briefly)<br>• Phone number and address<br>• Email or social media (if applicable)<br>• Simple logo or icon<br>• Clean, professional design</p>"
                            },
                            {
                                "title": "Creating social media posts",
                                "content": "<p>For WhatsApp status or Facebook posts:<br>• Use square or vertical format<br>• Keep text large and readable<br>• Include your business name<br>• Add a call-to-action (visit, call, etc.)<br>• Use bright, attractive colors</p>"
                            },
                            {
                                "title": "Designing a shop banner",
                                "content": "<p>For a shop banner:<br>• Make it large and visible<br>• Include shop name prominently<br>• Add what you sell<br>• Include contact information<br>• Use weather-resistant colors<br>• Keep design simple for distance viewing</p>"
                            },
                            {
                                "title": "Practice exercises",
                                "content": "<p>Try creating:<br>1. A 'Shop Open' sign<br>2. A birthday greeting for customers<br>3. A product price list<br>4. A festival offer poster<br>5. A simple logo for your business</p>"
                            }
                        ]
                    },
                    {
                        "title": "Advanced Design Techniques",
                        "icon": "⚡",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Using layers effectively",
                                "content": "<p>Layers are like transparent sheets stacked on top of each other. Put background elements on bottom layers, text in middle layers, and highlights on top layers. This makes editing easier.</p>"
                            },
                            {
                                "title": "Creating depth and shadows",
                                "content": "<p>Add shadows to make elements look 3D and stand out. Use subtle shadows for text and larger shadows for important elements. This creates visual hierarchy and makes designs more professional.</p>"
                            },
                            {
                                "title": "Working with gradients",
                                "content": "<p>Gradients are smooth color transitions. Use them for backgrounds or to make elements more attractive. Start with simple two-color gradients and avoid using too many colors.</p>"
                            },
                            {
                                "title": "Using filters and effects",
                                "content": "<p>Filters can enhance photos and make designs more attractive. Common effects include blur, brightness adjustment, and color correction. Use them sparingly - less is often more.</p>"
                            },
                            {
                                "title": "Creating custom shapes",
                                "content": "<p>Learn to create basic shapes and combine them to make logos or icons. Start with simple geometric shapes and gradually create more complex designs.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Logo Design Basics",
                        "icon": "🏷️",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What makes a good logo?",
                                "content": "<p>A good logo is simple, memorable, and works in different sizes. It should represent your business and be easy to recognize. Think of famous logos like Apple or Nike - simple but effective.</p>"
                            },
                            {
                                "title": "Types of logos",
                                "content": "<p><strong>Wordmark:</strong> Text-based (like Google)<br><strong>Symbol/Icon:</strong> Picture-based (like Apple)<br><strong>Combination:</strong> Text + symbol (like McDonald's)<br><strong>Emblem:</strong> Text inside a shape (like Starbucks)</p>"
                            },
                            {
                                "title": "Designing your first logo",
                                "content": "<p>1. Start with your business name<br>2. Choose 1-2 colors that represent your business<br>3. Pick a simple font<br>4. Add a simple icon if needed<br>5. Make sure it works in black and white<br>6. Test it at different sizes</p>"
                            },
                            {
                                "title": "Logo design principles",
                                "content": "<p>• Keep it simple - avoid too many elements<br>• Make it scalable - should work small and large<br>• Ensure it's memorable - people should remember it<br>• Make it timeless - avoid trendy elements that date quickly<br>• Ensure it's versatile - works on different backgrounds</p>"
                            },
                            {
                                "title": "Using your logo",
                                "content": "<p>Once you have a logo, use it consistently on all your materials: business cards, posters, social media, shop signs, and packaging. This builds brand recognition.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Design for Different Platforms",
                        "icon": "📱",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Print vs Digital design",
                                "content": "<p><strong>Print design:</strong> Higher resolution (300 DPI), CMYK colors, consider paper size and quality<br><strong>Digital design:</strong> Lower resolution (72 DPI), RGB colors, consider screen sizes and loading speed</p>"
                            },
                            {
                                "title": "Social media design",
                                "content": "<p>Different platforms have different requirements:<br>• <strong>Facebook:</strong> 1200x630 pixels<br>• <strong>Instagram:</strong> 1080x1080 pixels (square)<br>• <strong>WhatsApp:</strong> 800x800 pixels<br>• <strong>YouTube:</strong> 1280x720 pixels</p>"
                            },
                            {
                                "title": "Mobile-first design",
                                "content": "<p>Most people view content on phones, so design for mobile first. Use large text, simple layouts, and touch-friendly buttons. Test your designs on a phone screen.</p>"
                            },
                            {
                                "title": "Designing for local businesses",
                                "content": "<p>Consider your local audience:<br>• Use local language and cultural elements<br>• Include local landmarks or symbols<br>• Consider local color preferences<br>• Make designs relevant to local events and festivals</p>"
                            },
                            {
                                "title": "Accessibility considerations",
                                "content": "<p>Make your designs accessible to everyone:<br>• Use high contrast colors<br>• Make text large enough to read<br>• Don't rely only on color to convey information<br>• Test with people who have vision difficulties</p>"
                            }
                        ]
                    },
                    {
                        "title": "Building Your Portfolio",
                        "icon": "📁",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Why you need a portfolio",
                                "content": "<p>A portfolio shows your best work to potential clients or employers. It's like a resume for your design skills. Even if you're just starting, document your work to show your progress.</p>"
                            },
                            {
                                "title": "What to include in your portfolio",
                                "content": "<p>Include your best 10-15 designs:<br>• Business cards and logos<br>• Posters and banners<br>• Social media posts<br>• Any client work (with permission)<br>• Before and after comparisons<br>• Different styles and techniques</p>"
                            },
                            {
                                "title": "Organizing your work",
                                "content": "<p>Group your designs by type or project. Include brief descriptions of what you were trying to achieve and how you solved design problems. Show your thinking process.</p>"
                            },
                            {
                                "title": "Sharing your portfolio",
                                "content": "<p>You can share your portfolio through:<br>• WhatsApp or social media<br>• Simple website (using free tools)<br>• PDF document<br>• Physical portfolio book<br>• Online platforms like Behance</p>"
                            },
                            {
                                "title": "Getting feedback",
                                "content": "<p>Ask friends, family, and potential clients for feedback on your designs. Listen to their suggestions and use them to improve. Don't take criticism personally - it helps you grow.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Making Money with Design",
                        "icon": "💰",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Freelance opportunities",
                                "content": "<p>You can earn money by designing for others:<br>• Local businesses needing posters or cards<br>• Event organizers needing banners<br>• Social media content for small businesses<br>• Wedding and event invitations<br>• Product packaging and labels</p>"
                            },
                            {
                                "title": "Setting your prices",
                                "content": "<p>Start with reasonable prices for beginners:<br>• Simple poster: ₹200-500<br>• Business card: ₹100-300<br>• Logo: ₹500-2000<br>• Social media post: ₹50-200<br>Increase prices as you gain experience and skills.</p>"
                            },
                            {
                                "title": "Finding clients",
                                "content": "<p>Start locally:<br>• Ask friends and family<br>• Visit local shops and offer services<br>• Use social media to showcase your work<br>• Join local business groups<br>• Create sample designs to show potential clients</p>"
                            },
                            {
                                "title": "Professional practices",
                                "content": "<p>• Always get client approval before finalizing<br>• Keep copies of your work<br>• Set clear deadlines and expectations<br>• Provide multiple design options<br>• Be professional in communication</p>"
                            },
                            {
                                "title": "Scaling your business",
                                "content": "<p>As you grow:<br>• Invest in better tools and software<br>• Learn new skills and techniques<br>• Build a strong online presence<br>• Network with other designers<br>• Consider teaching others</p>"
                            }
                        ]
                    },
                    {
                        "title": "Common Mistakes to Avoid",
                        "icon": "⚠️",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Using too many fonts",
                                "content": "<p>Stick to 2-3 fonts maximum in one design. Too many fonts make your design look messy and unprofessional. Choose fonts that work well together.</p>"
                            },
                            {
                                "title": "Ignoring readability",
                                "content": "<p>Always prioritize readability over style. If people can't read your text, your design fails its purpose. Test your designs with others to ensure they can read everything clearly.</p>"
                            },
                            {
                                "title": "Copying others too much",
                                "content": "<p>It's okay to get inspiration from others, but don't copy exactly. Develop your own style and make designs that are unique to your business or client.</p>"
                            },
                            {
                                "title": "Not considering the audience",
                                "content": "<p>Always think about who will see your design. Use language, colors, and images that your target audience will understand and appreciate.</p>"
                            },
                            {
                                "title": "Rushing the process",
                                "content": "<p>Good design takes time. Don't rush to finish quickly. Take time to plan, experiment, and refine your designs. Quality is more important than speed.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Resources and Learning",
                        "icon": "📚",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Free design resources",
                                "content": "<p>• <strong>Unsplash:</strong> Free high-quality photos<br>• <strong>Pexels:</strong> Free stock photos and videos<br>• <strong>Google Fonts:</strong> Free fonts<br>• <strong>Flaticon:</strong> Free icons<br>• <strong>Color Hunt:</strong> Color palette inspiration</p>"
                            },
                            {
                                "title": "Learning platforms",
                                "content": "<p>• <strong>YouTube:</strong> Free tutorials for all design tools<br>• <strong>Skillshare:</strong> Free and paid design courses<br>• <strong>Udemy:</strong> Affordable design courses<br>• <strong>Canva Design School:</strong> Free tutorials</p>"
                            },
                            {
                                "title": "Design inspiration",
                                "content": "<p>• <strong>Pinterest:</strong> Search for design ideas<br>• <strong>Behance:</strong> Professional design portfolios<br>• <strong>Dribbble:</strong> Design inspiration and trends<br>• <strong>Instagram:</strong> Follow design accounts</p>"
                            },
                            {
                                "title": "Practice exercises",
                                "content": "<p>Daily practice ideas:<br>• Redesign existing posters you see<br>• Create variations of your own designs<br>• Try different color combinations<br>• Experiment with new tools and techniques<br>• Challenge yourself with different project types</p>"
                            },
                            {
                                "title": "Staying updated",
                                "content": "<p>Design trends change regularly. Follow design blogs, join design communities, and keep practicing. The more you design, the better you become.</p>"
                            },
                            {
                                "title": "Final encouragement",
                                "content": "<p>Remember, every great designer started as a beginner. Don't be afraid to make mistakes - they're part of learning. Keep practicing, stay curious, and enjoy the creative process. Your unique perspective and local knowledge can create designs that truly connect with your community!</p>"
                            }
                        ]
                    }
                ]
            },
            {
                "courseId": 4,
                "title": "Learn Web Design",
                "sections": [
                    {
                        "title": "Introduction to Web Design",
                        "icon": "🌐",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What is Web Design?",
                                "content": "<p><strong>Web Design</strong> is the process of creating websites that look good and work well. It's like designing a digital shop or office that people can visit from anywhere in the world using their phones or computers.</p>"
                            },
                            {
                                "title": "Why learn web design?",
                                "content": "<p>In today's digital world, every business needs a website. Whether you have a small shop, offer services, or want to sell products online, a website helps you reach more customers and look professional. It's a valuable skill that can help you earn money.</p>"
                            },
                            {
                                "title": "What you can create",
                                "content": "<p>You can build: business websites, online shops, personal portfolios, blogs, educational websites, restaurant menus, service booking sites, and much more. The possibilities are endless!</p>"
                            },
                            {
                                "title": "Do you need coding knowledge?",
                                "content": "<p>Not necessarily! You can start with no-code tools like Wix, WordPress, or Canva that let you build websites without writing code. However, learning basic coding gives you more control and better opportunities.</p>"
                            },
                            {
                                "title": "How this course will help you",
                                "content": "<p>This course will teach you both no-code and basic coding approaches. You'll learn to create professional websites step by step, with lots of practical examples and real-world projects.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Understanding the Internet",
                        "icon": "🔗",
                        "type": "free",
                        "contents": [
                            {
                                "title": "How the internet works",
                                "content": "<p>The internet is like a huge network of connected computers. When you visit a website, your device (phone/computer) asks another computer (server) to send you the website files. It's like ordering food - you make a request and get what you asked for.</p>"
                            },
                            {
                                "title": "What is a website?",
                                "content": "<p>A website is a collection of files (text, images, videos) stored on a computer server. When someone visits your website, their browser downloads these files and displays them as a webpage. Think of it as a digital folder with information about your business.</p>"
                            },
                            {
                                "title": "Domain names and hosting",
                                "content": "<p><strong>Domain name:</strong> Your website's address (like yourshop.com)<br><strong>Hosting:</strong> The computer where your website files are stored<br><strong>URL:</strong> The complete web address people type to visit your site</p>"
                            },
                            {
                                "title": "Types of websites",
                                "content": "<p><strong>Static websites:</strong> Simple sites with fixed content (like business information)<br><strong>Dynamic websites:</strong> Sites that change based on user interaction (like online shops)<br><strong>E-commerce sites:</strong> Online stores where people can buy products</p>"
                            },
                            {
                                "title": "Mobile vs desktop",
                                "content": "<p>Most people now use phones to browse the internet. Your website must work well on mobile devices. This means it should be easy to read, navigate, and use on small screens.</p>"
                            }
                        ]
                    },
                    {
                        "title": "Planning Your Website",
                        "icon": "📋",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Defining your website's purpose",
                                "content": "<p>Before building, ask yourself:<br>• What do you want to achieve? (sell products, provide information, offer services)<br>• Who is your target audience? (local customers, online shoppers, specific age groups)<br>• What actions do you want visitors to take? (call you, buy something, contact you)</p>"
                            },
                            {
                                "title": "Creating a site map",
                                "content": "<p>A site map is like a blueprint of your website. List all the pages you need:<br>• Home page<br>• About us<br>• Products/Services<br>• Contact information<br>• Any other important pages</p>"
                            },
                            {
                                "title": "Understanding your audience",
                                "content": "<p>Think about your visitors:<br>• What devices do they use? (mostly phones)<br>• What language do they prefer? (Hindi, English, local languages)<br>• What information do they need?<br>• How tech-savvy are they?</p>"
                            },
                            {
                                "title": "Content planning",
                                "content": "<p>Plan what content you'll need:<br>• Text about your business<br>• Photos of your products or shop<br>• Contact details and location<br>• Prices or service information<br>• Customer testimonials or reviews</p>"
                            },
                            {
                                "title": "Setting goals",
                                "content": "<p>Set clear, measurable goals:<br>• Get 10 phone calls per month<br>• Sell 5 products online per week<br>• Get 50 website visitors per day<br>• Increase local business by 20%</p>"
                            }
                        ]
                    },
                    {
                        "title": "No-Code Website Builders",
                        "icon": "🛠️",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What are no-code builders?",
                                "content": "<p>No-code website builders let you create websites without writing any code. You drag and drop elements, choose templates, and customize them. It's like building with digital LEGO blocks!</p>"
                            },
                            {
                                "title": "Wix (Most Popular)",
                                "content": "<p>Wix is very user-friendly and great for beginners. It has hundreds of templates, is mobile-friendly, and offers free hosting. You can start for free and upgrade when needed. Visit <a href='https://wix.com'>wix.com</a></p>"
                            },
                            {
                                "title": "WordPress.com",
                                "content": "<p>WordPress is the most popular website platform. It's free to start, has many themes, and is great for blogs and business sites. Very flexible and powerful. Visit <a href='https://wordpress.com'>wordpress.com</a></p>"
                            },
                            {
                                "title": "Google Sites",
                                "content": "<p>Google Sites is completely free and integrates well with other Google services. It's simple to use and good for basic business websites. Perfect for beginners with limited budgets.</p>"
                            },
                            {
                                "title": "Shopify (For Online Stores)",
                                "content": "<p>If you want to sell products online, Shopify is excellent. It's designed specifically for e-commerce and handles payments, inventory, and shipping. Has a free trial period.</p>"
                            },
                            {
                                "title": "Choosing the right platform",
                                "content": "<p>Consider these factors:<br>• <strong>Budget:</strong> Start with free options<br>• <strong>Purpose:</strong> Business site, online store, or blog?<br>• <strong>Technical skills:</strong> How comfortable are you with technology?<br>• <strong>Future needs:</strong> Will you need advanced features later?</p>"
                            }
                        ]
                    },
                    {
                        "title": "Getting Started with Wix",
                        "icon": "🚀",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Creating your first Wix account",
                                "content": "<p>1. Go to <a href='https://wix.com'>wix.com</a><br>2. Click 'Get Started'<br>3. Choose 'Create a website'<br>4. Sign up with your email or Google account<br>5. Answer a few questions about your needs</p>"
                            },
                            {
                                "title": "Choosing a template",
                                "content": "<p>Wix will show you templates based on your answers. Look for:<br>• Templates that match your business type<br>• Mobile-friendly designs<br>• Clean, professional layouts<br>• Templates in your preferred language</p>"
                            },
                            {
                                "title": "Customizing your template",
                                "content": "<p>Once you choose a template:<br>• Click on text to edit it<br>• Drag elements to move them<br>• Use the left sidebar to add new elements<br>• Change colors and fonts using the design panel</p>"
                            },
                            {
                                "title": "Adding your content",
                                "content": "<p>Replace the template content with your own:<br>• Your business name and description<br>• Your contact information<br>• Photos of your products or shop<br>• Your actual services and prices</p>"
                            },
                            {
                                "title": "Making it mobile-friendly",
                                "content": "<p>Always check the mobile version:<br>• Click the mobile icon in the editor<br>• Make sure text is readable on small screens<br>• Check that buttons are easy to tap<br>• Ensure images look good on mobile</p>"
                            }
                        ]
                    },
                    {
                        "title": "Basic HTML and CSS",
                        "icon": "💻",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What is HTML?",
                                "content": "<p>HTML (HyperText Markup Language) is the structure of a webpage. It's like the skeleton of your website. HTML tells the browser what content to show and how to organize it.</p>"
                            },
                            {
                                "title": "Basic HTML structure",
                                "content": "<p>Every HTML page has this basic structure:<br><code>&lt;!DOCTYPE html&gt;<br>&lt;html&gt;<br>&lt;head&gt;<br>&lt;title&gt;Your Page Title&lt;/title&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>Your content goes here<br>&lt;/body&gt;<br>&lt;/html&gt;</code></p>"
                            },
                            {
                                "title": "Common HTML tags",
                                "content": "<p><code>&lt;h1&gt;</code> - Main heading<br><code>&lt;h2&gt;</code> - Subheading<br><code>&lt;p&gt;</code> - Paragraph<br><code>&lt;img&gt;</code> - Image<br><code>&lt;a&gt;</code> - Link<br><code>&lt;div&gt;</code> - Container</p>"
                            },
                            {
                                "title": "What is CSS?",
                                "content": "<p>CSS (Cascading Style Sheets) controls how your website looks. It's like the paint and decoration of your house. CSS handles colors, fonts, spacing, and layout.</p>"
                            },
                            {
                                "title": "Basic CSS properties",
                                "content": "<p><code>color:</code> - Text color<br><code>background-color:</code> - Background color<br><code>font-size:</code> - Text size<br><code>margin:</code> - Space around elements<br><code>padding:</code> - Space inside elements</p>"
                            }
                        ]
                    },
                    {
                        "title": "Design Principles for Web",
                        "icon": "🎨",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "User experience (UX) basics",
                                "content": "<p>UX is how easy and pleasant it is to use your website. Good UX means visitors can find what they want quickly and easily. Think about what your visitors want to do and make it simple for them.</p>"
                            },
                            {
                                "title": "Navigation design",
                                "content": "<p>Navigation is how people move around your website:<br>• Keep it simple and consistent<br>• Use clear, descriptive menu items<br>• Put important links in easy-to-find places<br>• Make sure it works well on mobile</p>"
                            },
                            {
                                "title": "Color and typography",
                                "content": "<p>Choose colors that match your brand and are easy to read:<br>• Use high contrast for text<br>• Limit your color palette to 2-3 colors<br>• Choose readable fonts<br>• Make text large enough to read on mobile</p>"
                            },
                            {
                                "title": "Visual hierarchy",
                                "content": "<p>Guide visitors' attention to what's most important:<br>• Use larger text for headlines<br>• Use colors to highlight important information<br>• Use spacing to group related content<br>• Make call-to-action buttons stand out</p>"
                            },
                            {
                                "title": "Loading speed",
                                "content": "<p>Fast-loading websites are better for users and search engines:<br>• Optimize images (compress them)<br>• Keep pages simple<br>• Use fast hosting<br>• Test your site speed regularly</p>"
                            }
                        ]
                    },
                    {
                        "title": "Creating Content for Your Website",
                        "icon": "📝",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Writing for the web",
                                "content": "<p>Web writing is different from print:<br>• Keep sentences short and simple<br>• Use bullet points and headings<br>• Write for scanning (people don't read every word)<br>• Include keywords for search engines<br>• Use active voice</p>"
                            },
                            {
                                "title": "Homepage content",
                                "content": "<p>Your homepage should answer these questions quickly:<br>• What do you do?<br>• Why should people choose you?<br>• How can they contact you?<br>• What's your main offer or service?</p>"
                            },
                            {
                                "title": "About page",
                                "content": "<p>Tell your story:<br>• How did you start your business?<br>• What makes you different?<br>• What are your values?<br>• Include photos of you or your team<br>• Share customer testimonials</p>"
                            },
                            {
                                "title": "Product/Service pages",
                                "content": "<p>For each product or service:<br>• Clear description of what you offer<br>• Benefits and features<br>• High-quality photos<br>• Pricing information<br>• How to order or contact you</p>"
                            },
                            {
                                "title": "Contact information",
                                "content": "<p>Make it easy for people to reach you:<br>• Phone number (clickable on mobile)<br>• Email address<br>• Physical address with map<br>• Business hours<br>• WhatsApp number (if you use it)</p>"
                            }
                        ]
                    },
                    {
                        "title": "Images and Media",
                        "icon": "📸",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Choosing the right images",
                                "content": "<p>Good images make your website more attractive:<br>• Use high-quality photos<br>• Show your actual products or shop<br>• Include photos of you or your team<br>• Use images that match your brand<br>• Avoid generic stock photos when possible</p>"
                            },
                            {
                                "title": "Image optimization",
                                "content": "<p>Optimize images for web:<br>• Compress images to reduce file size<br>• Use appropriate formats (JPG for photos, PNG for graphics)<br>• Keep file sizes under 500KB<br>• Use descriptive file names<br>• Add alt text for accessibility</p>"
                            },
                            {
                                "title": "Free image sources",
                                "content": "<p>Where to find free images:<br>• <strong>Unsplash:</strong> High-quality free photos<br>• <strong>Pexels:</strong> Free stock photos and videos<br>• <strong>Pixabay:</strong> Free images and illustrations<br>• <strong>Canva:</strong> Free design elements<br>• Take your own photos</p>"
                            },
                            {
                                "title": "Using videos",
                                "content": "<p>Videos can make your website more engaging:<br>• Keep videos short (under 2 minutes)<br>• Include captions for accessibility<br>• Optimize for mobile viewing<br>• Host on YouTube or Vimeo for better performance<br>• Use videos to show your products or services</p>"
                            },
                            {
                                "title": "Image placement and layout",
                                "content": "<p>Place images strategically:<br>• Use images to break up text<br>• Align images with your content<br>• Make sure images are responsive (work on mobile)<br>• Don't overcrowd pages with too many images<br>• Use images to tell your story</p>"
                            }
                        ]
                    },
                    {
                        "title": "Making Your Website Mobile-Friendly",
                        "icon": "📱",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Why mobile matters",
                                "content": "<p>More than 60% of internet users browse on mobile devices. If your website doesn't work well on phones, you're losing potential customers. Mobile-friendly websites also rank better in Google search results.</p>"
                            },
                            {
                                "title": "Responsive design",
                                "content": "<p>Responsive design means your website automatically adjusts to different screen sizes:<br>• Text becomes larger on mobile<br>• Images resize appropriately<br>• Navigation becomes mobile-friendly<br>• Buttons are easy to tap</p>"
                            },
                            {
                                "title": "Mobile navigation",
                                "content": "<p>Design navigation for mobile:<br>• Use a hamburger menu (three lines) for mobile<br>• Keep menu items short and clear<br>• Make buttons large enough to tap easily<br>• Test navigation on actual mobile devices</p>"
                            },
                            {
                                "title": "Touch-friendly design",
                                "content": "<p>Make your website easy to use with fingers:<br>• Buttons should be at least 44x44 pixels<br>• Leave space between clickable elements<br>• Make text large enough to read (16px minimum)<br>• Avoid hover effects that don't work on mobile</p>"
                            },
                            {
                                "title": "Testing on mobile",
                                "content": "<p>Always test your website on mobile devices:<br>• Use your phone to visit your website<br>• Check that all features work<br>• Test loading speed on mobile data<br>• Ask friends to test on their phones<br>• Use Google's mobile-friendly test tool</p>"
                            }
                        ]
                    },
                    {
                        "title": "Search Engine Optimization (SEO)",
                        "icon": "🔍",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What is SEO?",
                                "content": "<p>SEO helps your website appear in Google search results when people search for your type of business. It's like putting up a sign that helps people find your digital shop.</p>"
                            },
                            {
                                "title": "Keyword research",
                                "content": "<p>Find words people use to search for your business:<br>• Think about what customers would search for<br>• Include local terms (your city/village name)<br>• Use long-tail keywords (specific phrases)<br>• Research using Google Keyword Planner</p>"
                            },
                            {
                                "title": "On-page SEO basics",
                                "content": "<p>Optimize your website content:<br>• Use keywords in page titles and headings<br>• Write descriptive meta descriptions<br>• Include keywords naturally in your content<br>• Use descriptive image alt text<br>• Create quality, helpful content</p>"
                            },
                            {
                                "title": "Local SEO",
                                "content": "<p>For local businesses:<br>• Include your city/village name in content<br>• Create a Google My Business listing<br>• Get listed in local directories<br>• Encourage customer reviews<br>• Include your address and phone number</p>"
                            },
                            {
                                "title": "Technical SEO",
                                "content": "<p>Basic technical improvements:<br>• Make sure your site loads fast<br>• Ensure it's mobile-friendly<br>• Use HTTPS (secure connection)<br>• Create an XML sitemap<br>• Submit your site to Google Search Console</p>"
                            }
                        ]
                    },
                    {
                        "title": "Website Analytics and Performance",
                        "icon": "📊",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Why track website performance?",
                                "content": "<p>Analytics help you understand how your website is performing:<br>• How many people visit your site<br>• Which pages are most popular<br>• How long people stay on your site<br>• Where your visitors come from<br>• What actions they take</p>"
                            },
                            {
                                "title": "Google Analytics setup",
                                "content": "<p>Google Analytics is free and powerful:<br>1. Create a Google Analytics account<br>2. Get your tracking code<br>3. Add the code to your website<br>4. Start collecting data<br>5. Check your reports regularly</p>"
                            },
                            {
                                "title": "Key metrics to watch",
                                "content": "<p>Important numbers to track:<br>• <strong>Page views:</strong> How many pages people visit<br>• <strong>Bounce rate:</strong> Percentage who leave without exploring<br>• <strong>Time on site:</strong> How long people stay<br>• <strong>Conversion rate:</strong> Percentage who take desired action</p>"
                            },
                            {
                                "title": "Improving performance",
                                "content": "<p>Use analytics data to improve:<br>• If bounce rate is high, improve your homepage<br>• If people don't contact you, make contact info more visible<br>• If mobile users leave quickly, improve mobile experience<br>• Test different content to see what works best</p>"
                            },
                            {
                                "title": "Setting up goals",
                                "content": "<p>Define what success looks like:<br>• Phone calls from website<br>• Contact form submissions<br>• Product purchases<br>• Newsletter signups<br>• Time spent on important pages</p>"
                            }
                        ]
                    },
                    {
                        "title": "E-commerce Basics",
                        "icon": "🛒",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What is e-commerce?",
                                "content": "<p>E-commerce means selling products or services online. It allows customers to browse, select, and purchase items from your website without visiting your physical shop.</p>"
                            },
                            {
                                "title": "E-commerce platforms",
                                "content": "<p>Popular platforms for online stores:<br>• <strong>Shopify:</strong> Most popular, easy to use<br>• <strong>WooCommerce:</strong> WordPress plugin, very flexible<br>• <strong>Magento:</strong> Powerful but complex<br>• <strong>BigCommerce:</strong> Good for growing businesses</p>"
                            },
                            {
                                "title": "Setting up online payments",
                                "content": "<p>Payment options to consider:<br>• <strong>UPI:</strong> Popular in India, low fees<br>• <strong>Credit/Debit cards:</strong> Widely accepted<br>• <strong>Digital wallets:</strong> Paytm, PhonePe, etc.<br>• <strong>Cash on delivery:</strong> For local customers</p>"
                            },
                            {
                                "title": "Product management",
                                "content": "<p>Organize your products well:<br>• Clear product photos from multiple angles<br>• Detailed descriptions with features and benefits<br>• Accurate pricing and availability<br>• Product categories for easy navigation<br>• Customer reviews and ratings</p>"
                            },
                            {
                                "title": "Order fulfillment",
                                "content": "<p>Plan how to deliver orders:<br>• Local delivery options<br>• Shipping partners for wider reach<br>• Order tracking for customers<br>• Return and refund policies<br>• Customer service for order issues</p>"
                            }
                        ]
                    },
                    {
                        "title": "Website Security and Maintenance",
                        "icon": "🔒",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Basic security measures",
                                "content": "<p>Protect your website:<br>• Use strong passwords<br>• Keep software updated<br>• Use HTTPS (secure connection)<br>• Regular backups<br>• Choose reliable hosting</p>"
                            },
                            {
                                "title": "Regular maintenance tasks",
                                "content": "<p>Keep your website running smoothly:<br>• Update content regularly<br>• Check for broken links<br>• Monitor website speed<br>• Review and respond to customer feedback<br>• Update contact information</p>"
                            },
                            {
                                "title": "Backup strategies",
                                "content": "<p>Always backup your website:<br>• Use automatic backup services<br>• Keep multiple backup copies<br>• Test your backups regularly<br>• Store backups in different locations<br>• Document your backup process</p>"
                            },
                            {
                                "title": "Common security threats",
                                "content": "<p>Be aware of:<br>• Malware and viruses<br>• Phishing attacks<br>• Weak passwords<br>• Outdated software<br>• Unauthorized access</p>"
                            },
                            {
                                "title": "When to seek professional help",
                                "content": "<p>Consider hiring a professional for:<br>• Complex website features<br>• Security issues<br>• Performance problems<br>• Major redesigns<br>• Advanced SEO optimization</p>"
                            }
                        ]
                    },
                    {
                        "title": "Launching and Promoting Your Website",
                        "icon": "🚀",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Pre-launch checklist",
                                "content": "<p>Before going live:<br>• Test all pages and links<br>• Check mobile responsiveness<br>• Verify contact information<br>• Test contact forms<br>• Review content for errors<br>• Check loading speed</p>"
                            },
                            {
                                "title": "Choosing a domain name",
                                "content": "<p>Select a good domain name:<br>• Keep it short and memorable<br>• Include your business name<br>• Avoid hyphens and numbers<br>• Choose .com if possible<br>• Consider local extensions (.in for India)</p>"
                            },
                            {
                                "title": "Promoting your website",
                                "content": "<p>Get the word out:<br>• Share on social media<br>• Add website link to business cards<br>• Tell customers about your website<br>• List in local directories<br>• Use WhatsApp status updates</p>"
                            },
                            {
                                "title": "Social media integration",
                                "content": "<p>Connect your website with social media:<br>• Add social media buttons<br>• Share website content on social platforms<br>• Include social media links<br>• Create content that drives traffic to your site<br>• Engage with customers on social media</p>"
                            },
                            {
                                "title": "Measuring success",
                                "content": "<p>Track your website's success:<br>• Monitor visitor numbers<br>• Track phone calls and inquiries<br>• Measure online sales (if applicable)<br>• Check search engine rankings<br>• Collect customer feedback</p>"
                            }
                        ]
                    },
                    {
                        "title": "Advanced Topics and Resources",
                        "icon": "📚",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Learning JavaScript",
                                "content": "<p>JavaScript adds interactivity to websites:<br>• Makes websites more dynamic<br>• Allows for interactive features<br>• Improves user experience<br>• Learn basics through free online courses<br>• Practice with simple projects</p>"
                            },
                            {
                                "title": "Content Management Systems",
                                "content": "<p>CMS platforms for advanced users:<br>• <strong>WordPress.org:</strong> Most popular, very flexible<br>• <strong>Joomla:</strong> Good for complex sites<br>• <strong>Drupal:</strong> Powerful but complex<br>• <strong>Wix:</strong> User-friendly with advanced features</p>"
                            },
                            {
                                "title": "Web hosting options",
                                "content": "<p>Choose the right hosting:<br>• <strong>Shared hosting:</strong> Affordable, good for beginners<br>• <strong>VPS hosting:</strong> More control, moderate cost<br>• <strong>Dedicated hosting:</strong> Full control, expensive<br>• <strong>Cloud hosting:</strong> Scalable, pay-as-you-go</p>"
                            },
                            {
                                "title": "Free learning resources",
                                "content": "<p>Continue learning with:<br>• <strong>freeCodeCamp:</strong> Free coding courses<br>• <strong>MDN Web Docs:</strong> Official web documentation<br>• <strong>YouTube:</strong> Free tutorials<br>• <strong>W3Schools:</strong> Interactive tutorials<br>• <strong>GitHub:</strong> Open-source projects</p>"
                            },
                            {
                                "title": "Joining the web design community",
                                "content": "<p>Connect with other designers:<br>• Join Facebook groups for web designers<br>• Participate in online forums<br>• Attend local meetups or workshops<br>• Follow web design blogs and podcasts<br>• Share your work and get feedback</p>"
                            },
                            {
                                "title": "Final words of encouragement",
                                "content": "<p>Congratulations on learning web design! Remember, every expert was once a beginner. Start with simple projects, practice regularly, and don't be afraid to make mistakes. Your website can help your business grow and reach more customers. Keep learning, keep experimenting, and most importantly, keep building!</p>"
                            }
                        ]
                    }
                ]
            },
            {
                "courseId": 5,
                "title": "Learn Facebook Ads",
                "sections": [
                    {
                        "title": "Introduction to Facebook Ads",
                        "icon": "📱",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What are Facebook Ads?",
                                "content": "<p><strong>Facebook Ads</strong> are paid advertisements that appear on Facebook, Instagram, and other platforms owned by Meta. They help you reach potential customers who might be interested in your products or services.</p>"
                            },
                            {
                                "title": "Why use Facebook Ads?",
                                "content": "<p>Facebook Ads can help your business grow by:<br>• Reaching more people than you could otherwise<br>• Targeting specific audiences (age, location, interests)<br>• Getting immediate results<br>• Building brand awareness<br>• Driving sales and leads</p>"
                            },
                            {
                                "title": "Who can benefit from Facebook Ads?",
                                "content": "<p>Facebook Ads work for many types of businesses:<br>• Local shops and restaurants<br>• Service providers (plumbers, electricians, etc.)<br>• Online sellers<br>• Educational institutions<br>• Event organizers<br>• Small manufacturers</p>"
                            },
                            {
                                "title": "How much does it cost?",
                                "content": "<p>You can start with a very small budget:<br>• Minimum daily budget: ₹50-100<br>• You only pay when people see or click your ad<br>• You can set a total budget limit<br>• Start small and increase as you see results</p>"
                            },
                            {
                                "title": "What you'll learn in this course",
                                "content": "<p>By the end of this course, you'll know how to:<br>• Set up a Facebook Ads account<br>• Create effective ad campaigns<br>• Target the right audience<br>• Write compelling ad copy<br>• Track and optimize your results</p>"
                            }
                        ]
                    },
                    {
                        "title": "Understanding Facebook's Platform",
                        "icon": "🔍",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Facebook's advertising ecosystem",
                                "content": "<p>Facebook owns multiple platforms where your ads can appear:<br>• <strong>Facebook:</strong> Main social media platform<br>• <strong>Instagram:</strong> Photo and video sharing<br>• <strong>WhatsApp:</strong> Messaging platform<br>• <strong>Messenger:</strong> Facebook's chat app</p>"
                            },
                            {
                                "title": "How Facebook shows ads",
                                "content": "<p>Facebook uses smart algorithms to show ads to people who are most likely to be interested. It considers:<br>• User interests and behavior<br>• Demographics (age, location, etc.)<br>• Previous interactions with similar ads<br>• Ad quality and relevance</p>"
                            },
                            {
                                "title": "Ad placement options",
                                "content": "<p>Your ads can appear in different places:<br>• <strong>News Feed:</strong> In the main Facebook feed<br>• <strong>Stories:</strong> Full-screen vertical ads<br>• <strong>Marketplace:</strong> Shopping section<br>• <strong>Right Column:</strong> Sidebar on desktop<br>• <strong>Instagram Feed:</strong> In Instagram posts</p>"
                            },
                            {
                                "title": "Understanding the algorithm",
                                "content": "<p>Facebook's algorithm decides who sees your ads based on:<br>• <strong>Relevance Score:</strong> How well your ad matches the audience<br>• <strong>Bid Amount:</strong> How much you're willing to pay<br>• <strong>Ad Quality:</strong> How engaging and relevant your ad is<br>• <strong>User Behavior:</strong> How people interact with similar ads</p>"
                            },
                            {
                                "title": "Facebook's advertising policies",
                                "content": "<p>Facebook has rules about what you can advertise:<br>• No misleading or false claims<br>• No inappropriate content<br>• Must follow local laws<br>• Certain products are restricted<br>• Ads must be relevant and valuable</p>"
                            }
                        ]
                    },
                    {
                        "title": "Setting Up Your Facebook Ads Account",
                        "icon": "⚙️",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Creating a Facebook Business account",
                                "content": "<p>To run ads, you need a Facebook Business account:<br>1. Go to <a href='https://business.facebook.com'>business.facebook.com</a><br>2. Click 'Create Account'<br>3. Enter your business information<br>4. Verify your email address<br>5. Add your business details</p>"
                            },
                            {
                                "title": "Setting up Business Manager",
                                "content": "<p>Business Manager helps you manage your ads:<br>• Add your Facebook page<br>• Connect your Instagram account<br>• Set up payment methods<br>• Add team members (if needed)<br>• Organize your advertising assets</p>"
                            },
                            {
                                "title": "Adding payment information",
                                "content": "<p>You'll need to add a payment method:<br>• Credit or debit card<br>• UPI (for Indian accounts)<br>• PayPal (if available)<br>• Bank account (for larger budgets)<br>• Set spending limits for safety</p>"
                            },
                            {
                                "title": "Verifying your business",
                                "content": "<p>Facebook may ask you to verify your business:<br>• Provide business documents<br>• Verify your phone number<br>• Confirm your business address<br>• This helps prevent fraud and builds trust</p>"
                            },
                            {
                                "title": "Understanding account roles",
                                "content": "<p>Different people can have different access levels:<br>• <strong>Admin:</strong> Full control over the account<br>• <strong>Advertiser:</strong> Can create and manage ads<br>• <strong>Analyst:</strong> Can view reports and data<br>• <strong>Editor:</strong> Can edit content and settings</p>"
                            }
                        ]
                    },
                    {
                        "title": "Understanding Your Audience",
                        "icon": "👥",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Why audience targeting matters",
                                "content": "<p>Targeting the right audience is crucial for success:<br>• Saves money by showing ads to interested people<br>• Increases chances of getting sales or leads<br>• Improves ad performance and relevance<br>• Helps you understand your customers better</p>"
                            },
                            {
                                "title": "Demographic targeting",
                                "content": "<p>Target people based on basic characteristics:<br>• <strong>Age:</strong> Choose age ranges (e.g., 25-45)<br>• <strong>Gender:</strong> Male, female, or all<br>• <strong>Location:</strong> City, state, or specific areas<br>• <strong>Language:</strong> Hindi, English, or local languages</p>"
                            },
                            {
                                "title": "Interest-based targeting",
                                "content": "<p>Target people based on their interests:<br>• <strong>Hobbies:</strong> Cooking, fitness, reading, etc.<br>• <strong>Business interests:</strong> Entrepreneurship, small business<br>• <strong>Lifestyle:</strong> Parenting, travel, technology<br>• <strong>Purchase behavior:</strong> Online shopping, luxury goods</p>"
                            },
                            {
                                "title": "Behavioral targeting",
                                "content": "<p>Target based on online behavior:<br>• <strong>Device usage:</strong> Mobile users, desktop users<br>• <strong>Travel behavior:</strong> Frequent travelers<br>• <strong>Digital activities:</strong> Online banking, mobile gaming<br>• <strong>Seasonal events:</strong> Festival shoppers, holiday travelers</p>"
                            },
                            {
                                "title": "Custom audiences",
                                "content": "<p>Target people you already know:<br>• <strong>Customer lists:</strong> Upload phone numbers or emails<br>• <strong>Website visitors:</strong> People who visited your website<br>• <strong>App users:</strong> People who used your mobile app<br>• <strong>Engagement:</strong> People who interacted with your content</p>"
                            }
                        ]
                    },
                    {
                        "title": "Creating Your First Ad Campaign",
                        "icon": "🎯",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Choosing your campaign objective",
                                "content": "<p>Facebook offers different campaign objectives:<br>• <strong>Awareness:</strong> Let people know about your business<br>• <strong>Traffic:</strong> Send people to your website<br>• <strong>Engagement:</strong> Get likes, comments, shares<br>• <strong>Leads:</strong> Collect contact information<br>• <strong>Sales:</strong> Drive purchases</p>"
                            },
                            {
                                "title": "Setting your budget",
                                "content": "<p>Start with a small, manageable budget:<br>• <strong>Daily budget:</strong> ₹100-500 per day<br>• <strong>Lifetime budget:</strong> Total amount for the campaign<br>• <strong>Bid strategy:</strong> Let Facebook optimize or set manual bids<br>• <strong>Schedule:</strong> When your ads should run</p>"
                            },
                            {
                                "title": "Selecting your audience",
                                "content": "<p>Define who should see your ads:<br>• <strong>Location:</strong> Your city, nearby areas, or specific radius<br>• <strong>Age and gender:</strong> Your target customer profile<br>• <strong>Interests:</strong> Related to your products/services<br>• <strong>Behaviors:</strong> Online shopping, mobile usage, etc.</p>"
                            },
                            {
                                "title": "Choosing ad placements",
                                "content": "<p>Decide where your ads should appear:<br>• <strong>Automatic placements:</strong> Let Facebook choose<br>• <strong>Manual placements:</strong> Select specific platforms<br>• <strong>Device targeting:</strong> Mobile, desktop, or both<br>• <strong>Platform targeting:</strong> Facebook, Instagram, or both</p>"
                            },
                            {
                                "title": "Setting up tracking",
                                "content": "<p>Track how your ads perform:<br>• <strong>Pixel:</strong> Small code to track website visitors<br>• <strong>Conversion tracking:</strong> Track sales or leads<br>• <strong>App events:</strong> Track mobile app actions<br>• <strong>Offline events:</strong> Track in-store purchases</p>"
                            }
                        ]
                    },
                    {
                        "title": "Creating Compelling Ad Content",
                        "icon": "✍️",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Writing effective ad copy",
                                "content": "<p>Your ad text should be:<br>• <strong>Clear and simple:</strong> Easy to understand<br>• <strong>Benefit-focused:</strong> What's in it for the customer?<br>• <strong>Action-oriented:</strong> Tell people what to do<br>• <strong>Localized:</strong> Use local language and references<br>• <strong>Urgent:</strong> Create a sense of urgency</p>"
                            },
                            {
                                "title": "Ad copy examples for local businesses",
                                "content": "<p><strong>Restaurant:</strong> 'Taste authentic local cuisine at our family restaurant. 20% off for first-time visitors. Call now!'<br><br><strong>Shop:</strong> 'Get fresh groceries delivered to your doorstep. Same-day delivery. Order on WhatsApp!'<br><br><strong>Service:</strong> 'Professional plumbing services. 24/7 emergency calls. Licensed and insured.'</p>"
                            },
                            {
                                "title": "Choosing the right images",
                                "content": "<p>Select images that:<br>• <strong>Show your products/services</strong> clearly<br>• <strong>Look professional</strong> and high-quality<br>• <strong>Match your brand</strong> colors and style<br>• <strong>Include people</strong> when appropriate<br>• <strong>Work well on mobile</strong> devices</p>"
                            },
                            {
                                "title": "Video content tips",
                                "content": "<p>If using video ads:<br>• <strong>Keep it short:</strong> 15-30 seconds for best results<br>• <strong>Start strong:</strong> Grab attention in the first 3 seconds<br>• <strong>Include captions:</strong> Many people watch without sound<br>• <strong>Show your product/service</strong> in action<br>• <strong>End with a call-to-action</strong></p>"
                            },
                            {
                                "title": "Call-to-action buttons",
                                "content": "<p>Choose the right button for your goal:<br>• <strong>Learn More:</strong> For awareness campaigns<br>• <strong>Shop Now:</strong> For sales campaigns<br>• <strong>Contact Us:</strong> For lead generation<br>• <strong>Book Now:</strong> For service businesses<br>• <strong>Download:</strong> For apps or resources</p>"
                            }
                        ]
                    },
                    {
                        "title": "Ad Formats and Creative Options",
                        "icon": "🎨",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Single image ads",
                                "content": "<p>Simple and effective for most businesses:<br>• <strong>Best for:</strong> Product showcases, simple offers<br>• <strong>Image size:</strong> 1200x628 pixels<br>• <strong>Text limit:</strong> 125 characters<br>• <strong>Cost:</strong> Usually lowest cost per result<br>• <strong>Tips:</strong> Use high-quality, relevant images</p>"
                            },
                            {
                                "title": "Video ads",
                                "content": "<p>Great for storytelling and demonstrations:<br>• <strong>Best for:</strong> Product demos, brand stories, tutorials<br>• <strong>Duration:</strong> 15 seconds to 10 minutes<br>• <strong>Format:</strong> MP4, MOV, or AVI<br>• <strong>Tips:</strong> Include captions, start with hook, show benefits</p>"
                            },
                            {
                                "title": "Carousel ads",
                                "content": "<p>Show multiple images or products:<br>• <strong>Best for:</strong> Multiple products, step-by-step processes<br>• <strong>Images:</strong> 2-10 images per ad<br>• <strong>Each image:</strong> Can have different text and links<br>• <strong>Great for:</strong> E-commerce, service packages</p>"
                            },
                            {
                                "title": "Stories ads",
                                "content": "<p>Full-screen vertical ads:<br>• <strong>Best for:</strong> Mobile-first audience, immersive content<br>• <strong>Format:</strong> 9:16 aspect ratio<br>• <strong>Duration:</strong> Up to 15 seconds<br>• <strong>Platforms:</strong> Facebook Stories, Instagram Stories</p>"
                            },
                            {
                                "title": "Collection ads",
                                "content": "<p>Showcase products with instant shopping:<br>• <strong>Best for:</strong> E-commerce, product catalogs<br>• <strong>Features:</strong> Instant shopping experience<br>• <strong>Requires:</strong> Product catalog setup<br>• <strong>Great for:</strong> Fashion, electronics, home goods</p>"
                            }
                        ]
                    },
                    {
                        "title": "Budget Management and Bidding",
                        "icon": "💰",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Understanding Facebook's bidding system",
                                "content": "<p>Facebook uses an auction system:<br>• <strong>Advertisers bid</strong> for ad space<br>• <strong>Highest bidder</strong> doesn't always win<br>• <strong>Ad quality</strong> and relevance matter<br>• <strong>User experience</strong> is prioritized<br>• <strong>Bid strategy</strong> affects costs and results</p>"
                            },
                            {
                                "title": "Bid strategies explained",
                                "content": "<p>Choose the right bidding approach:<br>• <strong>Lowest cost:</strong> Get results at lowest possible cost<br>• <strong>Cost cap:</strong> Set maximum cost per result<br>• <strong>Bid cap:</strong> Set maximum bid amount<br>• <strong>Target cost:</strong> Aim for specific cost per result<br>• <strong>Highest value:</strong> Maximize total value</p>"
                            },
                            {
                                "title": "Setting realistic budgets",
                                "content": "<p>Start small and scale up:<br>• <strong>Begin with ₹100-200</strong> per day<br>• <strong>Test for 3-7 days</strong> before making changes<br>• <strong>Monitor results</strong> daily<br>• <strong>Increase budget</strong> for successful campaigns<br>• <strong>Set lifetime limits</strong> to control spending</p>"
                            },
                            {
                                "title": "Budget optimization tips",
                                "content": "<p>Get the most from your budget:<br>• <strong>Use automatic bidding</strong> when starting out<br>• <strong>Focus on best-performing</strong> ad sets<br>• <strong>Pause underperforming</strong> ads quickly<br>• <strong>Test different budgets</strong> to find sweet spot<br>• <strong>Consider seasonal</strong> budget adjustments</p>"
                            },
                            {
                                "title": "Avoiding common budget mistakes",
                                "content": "<p>Don't make these errors:<br>• <strong>Setting budget too high</strong> initially<br>• <strong>Not monitoring</strong> daily spending<br>• <strong>Ignoring cost per result</strong> metrics<br>• <strong>Changing budgets</strong> too frequently<br>• <strong>Not having</strong> emergency stop limits</p>"
                            }
                        ]
                    },
                    {
                        "title": "Campaign Optimization",
                        "icon": "📈",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Understanding ad performance metrics",
                                "content": "<p>Key metrics to track:<br>• <strong>Reach:</strong> How many people saw your ad<br>• <strong>Impressions:</strong> Total number of times ad was shown<br>• <strong>Clicks:</strong> How many people clicked your ad<br>• <strong>Click-through rate (CTR):</strong> Clicks divided by impressions<br>• <strong>Cost per click (CPC):</strong> Average cost per click</p>"
                            },
                            {
                                "title": "Conversion tracking",
                                "content": "<p>Track what happens after people click:<br>• <strong>Website conversions:</strong> Sales, leads, signups<br>• <strong>App installs:</strong> For mobile apps<br>• <strong>Phone calls:</strong> Track call button clicks<br>• <strong>Store visits:</strong> For physical locations<br>• <strong>Custom events:</strong> Specific actions you want to track</p>"
                            },
                            {
                                "title": "A/B testing your ads",
                                "content": "<p>Test different versions to improve performance:<br>• <strong>Test one element</strong> at a time (image, text, audience)<br>• <strong>Run tests for 3-7 days</strong> minimum<br>• <strong>Use statistical significance</strong> to make decisions<br>• <strong>Scale winning</strong> versions<br>• <strong>Document what works</strong> for future campaigns</p>"
                            },
                            {
                                "title": "Audience optimization",
                                "content": "<p>Improve your targeting over time:<br>• <strong>Look at demographics</strong> of people who convert<br>• <strong>Analyze interests</strong> of your best customers<br>• <strong>Create lookalike audiences</strong> based on customers<br>• <strong>Exclude poor-performing</strong> audiences<br>• <strong>Test new targeting</strong> options regularly</p>"
                            },
                            {
                                "title": "Ad creative optimization",
                                "content": "<p>Improve your ad content:<br>• <strong>Test different images</strong> and videos<br>• <strong>Try various headlines</strong> and descriptions<br>• <strong>Experiment with</strong> different calls-to-action<br>• <strong>Use seasonal</strong> and trending content<br>• <strong>Refresh creatives</strong> regularly to avoid fatigue</p>"
                            }
                        ]
                    },
                    {
                        "title": "Advanced Targeting Strategies",
                        "icon": "🎯",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Lookalike audiences",
                                "content": "<p>Find people similar to your best customers:<br>• <strong>Source audience:</strong> Your existing customers or website visitors<br>• <strong>Percentage:</strong> 1-10% (smaller = more similar)<br>• <strong>Location:</strong> Target specific countries or regions<br>• <strong>Exclusions:</strong> Remove existing customers<br>• <strong>Testing:</strong> Try different source audiences</p>"
                            },
                            {
                                "title": "Custom audiences",
                                "content": "<p>Target people you already know:<br>• <strong>Customer lists:</strong> Upload email addresses or phone numbers<br>• <strong>Website visitors:</strong> People who visited your site<br>• <strong>App users:</strong> People who used your mobile app<br>• <strong>Engagement:</strong> People who interacted with your content<br>• <strong>Offline activity:</strong> In-store purchases or events</p>"
                            },
                            {
                                "title": "Detailed targeting",
                                "content": "<p>Narrow down your audience precisely:<br>• <strong>Demographics:</strong> Age, gender, education, job titles<br>• <strong>Interests:</strong> Hobbies, pages they like, activities<br>• <strong>Behaviors:</strong> Purchase behavior, device usage<br>• <strong>Connections:</strong> People connected to your page<br>• <strong>Exclusions:</strong> Remove people who won't convert</p>"
                            },
                            {
                                "title": "Seasonal and event targeting",
                                "content": "<p>Target based on timing and events:<br>• <strong>Festivals:</strong> Diwali, Holi, Eid, Christmas<br>• <strong>Seasons:</strong> Monsoon, summer, winter<br>• <strong>Life events:</strong> Weddings, birthdays, graduations<br>• <strong>Holidays:</strong> National holidays, school breaks<br>• <strong>Local events:</strong> Fairs, exhibitions, sports events</p>"
                            },
                            {
                                "title": "Retargeting strategies",
                                "content": "<p>Re-engage people who showed interest:<br>• <strong>Website visitors:</strong> Show ads to people who visited your site<br>• <strong>Cart abandoners:</strong> Remind people who left items in cart<br>• <strong>Video viewers:</strong> Target people who watched your videos<br>• <strong>Engagement audiences:</strong> People who liked or commented<br>• <strong>Frequency capping:</strong> Limit how often people see your ads</p>"
                            }
                        ]
                    },
                    {
                        "title": "Local Business Advertising",
                        "icon": "🏪",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Why local targeting is crucial",
                                "content": "<p>For local businesses, targeting nearby customers is essential:<br>• <strong>Reduce waste:</strong> Don't spend money on distant customers<br>• <strong>Increase relevance:</strong> Local customers are more likely to buy<br>• <strong>Better ROI:</strong> Higher conversion rates from local audience<br>• <strong>Competitive advantage:</strong> Beat competitors in your area</p>"
                            },
                            {
                                "title": "Setting up location targeting",
                                "content": "<p>Target your local area effectively:<br>• <strong>Radius targeting:</strong> Choose distance from your location<br>• <strong>City targeting:</strong> Target specific cities or towns<br>• <strong>State targeting:</strong> For larger service areas<br>• <strong>Exclude areas:</strong> Remove locations where you don't serve<br>• <strong>Multiple locations:</strong> If you have multiple branches</p>"
                            },
                            {
                                "title": "Local business ad examples",
                                "content": "<p><strong>Restaurant:</strong> 'Authentic local cuisine just 2km away. 20% off for first visit. Free delivery within 5km.'<br><br><strong>Shop:</strong> 'Your neighborhood grocery store. Fresh vegetables daily. Open 7 days a week. 10% off for local residents.'<br><br><strong>Service:</strong> 'Local plumber available 24/7. Same-day service in [City Name]. Licensed and insured.'</p>"
                            },
                            {
                                "title": "Local events and promotions",
                                "content": "<p>Use local events to your advantage:<br>• <strong>Festivals:</strong> Create festival-specific offers<br>• <strong>Local fairs:</strong> Promote participation or special deals<br>• <strong>Sports events:</strong> Target sports fans in your area<br>• <strong>Weather-based:</strong> Promote relevant products for weather<br>• <strong>Community events:</strong> Support local causes and events</p>"
                            },
                            {
                                "title": "Measuring local success",
                                "content": "<p>Track local campaign performance:<br>• <strong>Store visits:</strong> Track people who visit your physical location<br>• <strong>Local phone calls:</strong> Monitor calls from local numbers<br>• <strong>Local website traffic:</strong> Track visitors from your area<br>• <strong>Local engagement:</strong> Measure local social media engagement<br>• <strong>Local sales:</strong> Track sales from local customers</p>"
                            }
                        ]
                    },
                    {
                        "title": "Common Mistakes and How to Avoid Them",
                        "icon": "⚠️",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Targeting too broadly",
                                "content": "<p><strong>Mistake:</strong> Targeting everyone in your city<br><strong>Problem:</strong> Wastes money on uninterested people<br><strong>Solution:</strong> Use specific interests and behaviors to narrow audience<br><strong>Example:</strong> Instead of 'all women 25-45', target 'women 25-45 interested in cooking and local restaurants'</p>"
                            },
                            {
                                "title": "Poor ad creative",
                                "content": "<p><strong>Mistake:</strong> Using low-quality images or unclear text<br><strong>Problem:</strong> People ignore or skip your ads<br><strong>Solution:</strong> Use high-quality images, clear messaging, and strong calls-to-action<br><strong>Tip:</strong> Test different images and copy to see what works best</p>"
                            },
                            {
                                "title": "Not tracking results",
                                "content": "<p><strong>Mistake:</strong> Running ads without monitoring performance<br><strong>Problem:</strong> Don't know what's working or wasting money<br><strong>Solution:</strong> Set up conversion tracking and check results regularly<br><strong>Action:</strong> Review performance daily and make adjustments</p>"
                            },
                            {
                                "title": "Setting unrealistic expectations",
                                "content": "<p><strong>Mistake:</strong> Expecting immediate sales from first campaign<br><strong>Problem:</strong> Disappointment and giving up too soon<br><strong>Solution:</strong> Start with awareness objectives, then move to conversions<br><strong>Timeline:</strong> Give campaigns 1-2 weeks to gather data</p>"
                            },
                            {
                                "title": "Ignoring ad fatigue",
                                "content": "<p><strong>Mistake:</strong> Running same ad for too long<br><strong>Problem:</strong> People get tired of seeing the same ad<br><strong>Solution:</strong> Refresh creatives every 2-4 weeks<br><strong>Strategy:</strong> Create multiple ad variations and rotate them</p>"
                            }
                        ]
                    },
                    {
                        "title": "Scaling Successful Campaigns",
                        "icon": "📈",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "When to scale your campaigns",
                                "content": "<p>Scale when you have:<br>• <strong>Consistent results</strong> over 7-14 days<br>• <strong>Good cost per result</strong> within your target<br>• <strong>Stable performance</strong> with minimal fluctuations<br>• <strong>Room in budget</strong> to increase spending<br>• <strong>Clear understanding</strong> of what's working</p>"
                            },
                            {
                                "title": "How to scale effectively",
                                "content": "<p>Scale gradually and carefully:<br>• <strong>Increase budget by 20-30%</strong> at a time<br>• <strong>Monitor performance</strong> closely after changes<br>• <strong>Scale best-performing</strong> ad sets first<br>• <strong>Test new audiences</strong> with similar characteristics<br>• <strong>Maintain ad quality</strong> as you scale</p>"
                            },
                            {
                                "title": "Horizontal vs vertical scaling",
                                "content": "<p><strong>Horizontal scaling:</strong> Add new audiences or placements<br>• Test new interest groups<br>• Add new locations<br>• Try different ad formats<br><br><strong>Vertical scaling:</strong> Increase budget for existing campaigns<br>• Increase daily budgets<br>• Expand audience sizes<br>• Add more ad variations</p>"
                            },
                            {
                                "title": "Managing multiple campaigns",
                                "content": "<p>Organize your advertising efforts:<br>• <strong>Separate campaigns</strong> by objective or product<br>• <strong>Use clear naming</strong> conventions<br>• <strong>Set different budgets</strong> for different goals<br>• <strong>Track performance</strong> separately<br>• <strong>Optimize each campaign</strong> individually</p>"
                            },
                            {
                                "title": "Avoiding scaling mistakes",
                                "content": "<p>Common scaling pitfalls:<br>• <strong>Scaling too quickly</strong> without testing<br>• <strong>Ignoring seasonality</strong> and market changes<br>• <strong>Not maintaining</strong> ad quality standards<br>• <strong>Scaling poor-performing</strong> campaigns<br>• <strong>Running out of budget</strong> too quickly</p>"
                            }
                        ]
                    },
                    {
                        "title": "Advanced Features and Tools",
                        "icon": "🔧",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Facebook Pixel setup",
                                "content": "<p>The Facebook Pixel tracks website activity:<br>• <strong>Installation:</strong> Add code to your website<br>• <strong>Tracking:</strong> Page views, purchases, leads<br>• <strong>Optimization:</strong> Helps Facebook find better audiences<br>• <strong>Retargeting:</strong> Show ads to website visitors<br>• <strong>Reporting:</strong> See conversion data in detail</p>"
                            },
                            {
                                "title": "Dynamic ads",
                                "content": "<p>Automatically show relevant products:<br>• <strong>Product catalog:</strong> Upload your product list<br>• <strong>Automatic targeting:</strong> Show products to interested people<br>• <strong>Personalization:</strong> Different products for different people<br>• <strong>Efficiency:</strong> Create many ads automatically<br>• <strong>Best for:</strong> E-commerce with many products</p>"
                            },
                            {
                                "title": "Automated rules",
                                "content": "<p>Set up automatic campaign management:<br>• <strong>Budget rules:</strong> Pause campaigns that exceed cost limits<br>• <strong>Performance rules:</strong> Pause underperforming ads<br>• <strong>Schedule rules:</strong> Start/stop campaigns automatically<br>• <strong>Notification rules:</strong> Get alerts about important changes<br>• <strong>Time-saving:</strong> Automate routine tasks</p>"
                            },
                            {
                                "title": "Creative tools and templates",
                                "content": "<p>Use Facebook's built-in tools:<br>• <strong>Creative Hub:</strong> Test ad formats before publishing<br>• <strong>Brand templates:</strong> Consistent branding across ads<br>• <strong>Video creation tools:</strong> Make videos from images<br>• <strong>Text overlay tool:</strong> Add text to images easily<br>• <strong>Format optimization:</strong> Auto-resize for different placements</p>"
                            },
                            {
                                "title": "Business Suite and Analytics",
                                "content": "<p>Advanced management tools:<br>• <strong>Business Suite:</strong> Manage Facebook and Instagram together<br>• <strong>Analytics:</strong> Detailed performance insights<br>• <strong>Audience insights:</strong> Understand your audience better<br>• <strong>Competitive analysis:</strong> See what others are doing<br>• <strong>Reporting:</strong> Create custom reports</p>"
                            }
                        ]
                    },
                    {
                        "title": "Staying Updated and Best Practices",
                        "icon": "📚",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Keeping up with Facebook changes",
                                "content": "<p>Facebook updates frequently:<br>• <strong>Follow official blogs:</strong> Facebook Business and Marketing<br>• <strong>Join Facebook groups:</strong> Connect with other advertisers<br>• <strong>Subscribe to newsletters:</strong> Get updates in your email<br>• <strong>Watch webinars:</strong> Learn new features<br>• <strong>Test new features:</strong> Try new options when available</p>"
                            },
                            {
                                "title": "Industry best practices",
                                "content": "<p>Follow proven strategies:<br>• <strong>Mobile-first design:</strong> Most users are on mobile<br>• <strong>Video content:</strong> Videos perform better than images<br>• <strong>Local optimization:</strong> Include local keywords and references<br>• <strong>Customer testimonials:</strong> Use social proof in ads<br>• <strong>Consistent branding:</strong> Maintain brand identity across ads</p>"
                            },
                            {
                                "title": "Seasonal advertising strategies",
                                "content": "<p>Plan for different seasons:<br>• <strong>Festival season:</strong> Increase budgets for major festivals<br>• <strong>Monsoon preparation:</strong> Target relevant products<br>• <strong>Back-to-school:</strong> Target parents and students<br>• <strong>Wedding season:</strong> Target wedding-related services<br>• <strong>Holiday season:</strong> Plan special offers and campaigns</p>"
                            },
                            {
                                "title": "Building long-term success",
                                "content": "<p>Focus on sustainable growth:<br>• <strong>Build brand awareness:</strong> Don't just focus on sales<br>• <strong>Collect customer data:</strong> Build your audience over time<br>• <strong>Test continuously:</strong> Always be testing new approaches<br>• <strong>Learn from data:</strong> Use insights to improve<br>• <strong>Stay customer-focused:</strong> Put customer needs first</p>"
                            },
                            {
                                "title": "Resources for continued learning",
                                "content": "<p>Keep learning and improving:<br>• <strong>Facebook Blueprint:</strong> Free online courses<br>• <strong>YouTube channels:</strong> Facebook marketing tutorials<br>• <strong>Online communities:</strong> Facebook groups and forums<br>• <strong>Local workshops:</strong> Attend in-person training<br>• <strong>Certification programs:</strong> Get Facebook certified</p>"
                            },
                            {
                                "title": "Final encouragement",
                                "content": "<p>Congratulations on completing this Facebook Ads course! Remember, success in advertising comes from practice, patience, and continuous learning. Start small, test everything, and scale what works. Your local business can reach more customers and grow significantly with the right Facebook advertising strategy. Keep experimenting, stay updated with changes, and most importantly, focus on providing value to your customers. Good luck with your advertising journey!</p>"
                            }
                        ]
                    }
                ]
            },
            {
                "courseId": 6,
                "title": "Learn Google Ads",
                "sections": [
                    {
                        "title": "Introduction to Google Ads",
                        "icon": "🔍",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What are Google Ads?",
                                "content": "<p><strong>Google Ads</strong> are paid advertisements that appear when people search on Google. They show up at the top of search results, helping your business get found by people actively looking for what you offer.</p>"
                            },
                            {
                                "title": "Why use Google Ads?",
                                "content": "<p>Google Ads can help your business by:<br>• Reaching people actively searching for your products/services<br>• Getting immediate visibility in search results<br>• Targeting specific keywords and locations<br>• Driving qualified traffic to your website<br>• Generating leads and sales quickly</p>"
                            },
                            {
                                "title": "How Google Ads work",
                                "content": "<p>When someone searches on Google:<br>1. Google looks at all ads for that search term<br>2. Ranks ads based on bid amount and ad quality<br>3. Shows the best ads at the top of results<br>4. You only pay when someone clicks your ad<br>5. Higher quality ads cost less to run</p>"
                            },
                            {
                                "title": "Types of Google Ads",
                                "content": "<p><strong>Search Ads:</strong> Text ads in search results<br><strong>Display Ads:</strong> Image ads on websites<br><strong>Video Ads:</strong> Ads on YouTube<br><strong>Shopping Ads:</strong> Product listings with images<br><strong>App Ads:</strong> Promote mobile apps</p>"
                            },
                            {
                                "title": "Cost and budgeting",
                                "content": "<p>Google Ads is flexible and affordable:<br>• Start with as little as ₹50-100 per day<br>• You only pay when people click your ads<br>• Set daily and monthly budget limits<br>• Control costs with bid strategies<br>• Pause campaigns anytime</p>"
                            }
                        ]
                    },
                    {
                        "title": "Setting Up Your Google Ads Account",
                        "icon": "⚙️",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Creating your account",
                                "content": "<p>1. Go to <a href='https://ads.google.com'>ads.google.com</a><br>2. Click 'Start Now'<br>3. Sign in with your Google account<br>4. Choose your business type<br>5. Set up billing information<br>6. Verify your account</p>"
                            },
                            {
                                "title": "Account structure",
                                "content": "<p>Google Ads is organized in levels:<br>• <strong>Account:</strong> Your main advertising account<br>• <strong>Campaigns:</strong> Groups of ads with same goal<br>• <strong>Ad Groups:</strong> Related keywords and ads<br>• <strong>Keywords:</strong> Words that trigger your ads<br>• <strong>Ads:</strong> Your actual advertisements</p>"
                            },
                            {
                                "title": "Setting up billing",
                                "content": "<p>Add payment information:<br>• Credit or debit card<br>• UPI (for Indian accounts)<br>• Bank account (for larger budgets)<br>• Set spending limits<br>• Choose billing cycle</p>"
                            },
                            {
                                "title": "Account verification",
                                "content": "<p>Google may ask you to verify:<br>• Your business address<br>• Phone number<br>• Business documents<br>• Website ownership<br>• This helps prevent fraud</p>"
                            },
                            {
                                "title": "Account access levels",
                                "content": "<p>Different people can have different permissions:<br>• <strong>Admin:</strong> Full control over account<br>• <strong>Standard:</strong> Can create and edit campaigns<br>• <strong>Read-only:</strong> Can view reports only<br>• <strong>Email-only:</strong> Receives notifications only</p>"
                            }
                        ]
                    },
                    {
                        "title": "Understanding Keywords",
                        "icon": "🔑",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What are keywords?",
                                "content": "<p>Keywords are words or phrases people type into Google when searching. When someone searches for your keywords, your ad can appear. Choosing the right keywords is crucial for success.</p>"
                            },
                            {
                                "title": "Types of keywords",
                                "content": "<p><strong>Broad Match:</strong> Your ad shows for related searches<br><strong>Phrase Match:</strong> Your ad shows when words appear in order<br><strong>Exact Match:</strong> Your ad shows only for exact searches<br><strong>Negative Keywords:</strong> Prevent your ad from showing for certain terms</p>"
                            },
                            {
                                "title": "Finding good keywords",
                                "content": "<p>Use these tools to find keywords:<br>• <strong>Google Keyword Planner:</strong> Free tool in Google Ads<br>• <strong>Google Trends:</strong> See keyword popularity<br>• <strong>Google Search Console:</strong> See what people search for<br>• <strong>Competitor research:</strong> See what keywords others use</p>"
                            },
                            {
                                "title": "Local keyword examples",
                                "content": "<p>For local businesses, include location:<br>• 'restaurant in Mumbai'<br>• 'plumber near me'<br>• 'grocery store Delhi'<br>• 'coaching classes Bangalore'<br>• 'electrician [your city name]'</p>"
                            },
                            {
                                "title": "Keyword research tips",
                                "content": "<p>Choose keywords that:<br>• Are relevant to your business<br>• Have good search volume<br>• Are specific enough to attract quality customers<br>• Include local terms if you serve a specific area<br>• Match what your customers actually search for</p>"
                            }
                        ]
                    },
                    {
                        "title": "Creating Your First Campaign",
                        "icon": "🚀",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Choosing campaign type",
                                "content": "<p>Select the right campaign type:<br>• <strong>Search Network:</strong> Text ads in search results<br>• <strong>Display Network:</strong> Image ads on websites<br>• <strong>Video:</strong> Ads on YouTube<br>• <strong>Shopping:</strong> Product listings<br>• <strong>Smart Campaigns:</strong> Automated for beginners</p>"
                            },
                            {
                                "title": "Setting campaign goals",
                                "content": "<p>Define what you want to achieve:<br>• <strong>Sales:</strong> Drive purchases<br>• <strong>Leads:</strong> Get contact information<br>• <strong>Website traffic:</strong> Increase visitors<br>• <strong>Brand awareness:</strong> Get your name out there<br>• <strong>Store visits:</strong> Drive foot traffic</p>"
                            },
                            {
                                "title": "Setting your budget",
                                "content": "<p>Start with a manageable budget:<br>• <strong>Daily budget:</strong> ₹100-500 per day<br>• <strong>Monthly budget:</strong> Set a total limit<br>• <strong>Bid strategy:</strong> Let Google optimize or set manual bids<br>• <strong>Start small:</strong> Increase as you see results</p>"
                            },
                            {
                                "title": "Choosing your audience",
                                "content": "<p>Target the right people:<br>• <strong>Location:</strong> Your service area or target market<br>• <strong>Language:</strong> Hindi, English, or local languages<br>• <strong>Device:</strong> Mobile, desktop, or both<br>• <strong>Time:</strong> When your business is open<br>• <strong>Demographics:</strong> Age, gender if relevant</p>"
                            },
                            {
                                "title": "Campaign settings",
                                "content": "<p>Configure important settings:<br>• <strong>Start and end dates:</strong> When campaign runs<br>• <strong>Ad rotation:</strong> How often to show different ads<br>• <strong>Delivery method:</strong> Standard or accelerated<br>• <strong>Network settings:</strong> Search, display, or both<br>• <strong>Location targeting:</strong> Specific areas to target</p>"
                            }
                        ]
                    },
                    {
                        "title": "Writing Effective Ad Copy",
                        "icon": "✍️",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Ad copy structure",
                                "content": "<p>Your ad has three main parts:<br>• <strong>Headline 1:</strong> Main attention-grabbing line (30 characters)<br>• <strong>Headline 2:</strong> Supporting information (30 characters)<br>• <strong>Headline 3:</strong> Additional details (30 characters)<br>• <strong>Description 1:</strong> Main description (90 characters)<br>• <strong>Description 2:</strong> Additional details (90 characters)</p>"
                            },
                            {
                                "title": "Writing compelling headlines",
                                "content": "<p>Make your headlines stand out:<br>• <strong>Include keywords:</strong> Use words people search for<br>• <strong>Highlight benefits:</strong> What's in it for the customer?<br>• <strong>Create urgency:</strong> Limited time, special offers<br>• <strong>Use numbers:</strong> '50% off', '24/7 service'<br>• <strong>Include location:</strong> 'Near you', 'Local service'</p>"
                            },
                            {
                                "title": "Local business ad examples",
                                "content": "<p><strong>Restaurant:</strong><br>H1: Best Local Restaurant<br>H2: Authentic Indian Cuisine<br>H3: 20% Off First Visit<br>D1: Fresh ingredients, family recipes. Free delivery within 5km. Call now!<br>D2: Open 7 days. Vegetarian options available.</p>"
                            },
                            {
                                "title": "Call-to-action buttons",
                                "content": "<p>Choose the right button:<br>• <strong>Call Now:</strong> For immediate contact<br>• <strong>Get Directions:</strong> For physical locations<br>• <strong>Learn More:</strong> For information<br>• <strong>Shop Now:</strong> For online stores<br>• <strong>Book Now:</strong> For appointments</p>"
                            },
                            {
                                "title": "Ad copy best practices",
                                "content": "<p>Follow these guidelines:<br>• <strong>Be specific:</strong> Include prices, offers, locations<br>• <strong>Use local language:</strong> Hindi, English, or regional languages<br>• <strong>Highlight uniqueness:</strong> What makes you different?<br>• <strong>Include contact info:</strong> Phone number or website<br>• <strong>Test different versions:</strong> Try multiple ad variations</p>"
                            }
                        ]
                    },
                    {
                        "title": "Quality Score and Ad Rank",
                        "icon": "⭐",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What is Quality Score?",
                                "content": "<p>Quality Score is Google's rating of your ad quality (1-10). Higher scores mean:<br>• Lower cost per click<br>• Better ad positions<br>• More ad impressions<br>• Better campaign performance<br>• Google rewards quality ads</p>"
                            },
                            {
                                "title": "Factors affecting Quality Score",
                                "content": "<p>Google considers three main factors:<br>• <strong>Expected Click-through Rate:</strong> How likely people are to click<br>• <strong>Ad Relevance:</strong> How well your ad matches the search<br>• <strong>Landing Page Experience:</strong> How good your website is<br>• <strong>Ad Format:</strong> Quality of your ad extensions<br>• <strong>Historical Performance:</strong> How your account has performed</p>"
                            },
                            {
                                "title": "Improving your Quality Score",
                                "content": "<p>Boost your score by:<br>• <strong>Using relevant keywords</strong> in your ad copy<br>• <strong>Creating compelling ads</strong> that people want to click<br>• <strong>Improving your website</strong> loading speed and content<br>• <strong>Using ad extensions</strong> to provide more information<br>• <strong>Regular optimization</strong> of your campaigns</p>"
                            },
                            {
                                "title": "Understanding Ad Rank",
                                "content": "<p>Ad Rank determines your ad position:<br>• <strong>Formula:</strong> Bid × Quality Score = Ad Rank<br>• <strong>Higher bid</strong> can improve position<br>• <strong>Higher Quality Score</strong> can improve position<br>• <strong>Better position</strong> usually means more clicks<br>• <strong>Top positions</strong> get most visibility</p>"
                            },
                            {
                                "title": "Monitoring Quality Score",
                                "content": "<p>Track your Quality Score:<br>• <strong>Check regularly:</strong> Look at keyword Quality Scores<br>• <strong>Identify problems:</strong> Find keywords with low scores<br>• <strong>Take action:</strong> Improve ads and landing pages<br>• <strong>Test changes:</strong> See if improvements help<br>• <strong>Be patient:</strong> Scores improve over time</p>"
                            }
                        ]
                    },
                    {
                        "title": "Bidding Strategies",
                        "icon": "💰",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Understanding bidding",
                                "content": "<p>Bidding is how much you're willing to pay when someone clicks your ad. Your bid affects:<br>• Ad position in search results<br>• How often your ad shows<br>• Cost per click<br>• Overall campaign performance<br>• Return on investment</p>"
                            },
                            {
                                "title": "Manual bidding",
                                "content": "<p>Set your own bid amounts:<br>• <strong>Manual CPC:</strong> Set maximum cost per click<br>• <strong>Enhanced CPC:</strong> Let Google adjust bids slightly<br>• <strong>Manual CPM:</strong> Pay per thousand impressions<br>• <strong>Full control:</strong> You decide exact bid amounts<br>• <strong>More work:</strong> Requires regular monitoring</p>"
                            },
                            {
                                "title": "Automated bidding",
                                "content": "<p>Let Google set bids automatically:<br>• <strong>Target CPA:</strong> Google tries to get conversions at your target cost<br>• <strong>Target ROAS:</strong> Google tries to achieve your target return<br>• <strong>Maximize Clicks:</strong> Google tries to get most clicks within budget<br>• <strong>Maximize Conversions:</strong> Google tries to get most conversions<br>• <strong>Less work:</strong> Google handles bid adjustments</p>"
                            },
                            {
                                "title": "Bid adjustments",
                                "content": "<p>Modify bids for different factors:<br>• <strong>Device:</strong> Bid higher for mobile or desktop<br>• <strong>Location:</strong> Bid higher for important areas<br>• <strong>Time:</strong> Bid higher during business hours<br>• <strong>Audience:</strong> Bid higher for valuable customers<br>• <strong>Demographics:</strong> Bid higher for target age/gender</p>"
                            },
                            {
                                "title": "Bidding best practices",
                                "content": "<p>Follow these guidelines:<br>• <strong>Start conservative:</strong> Begin with lower bids<br>• <strong>Monitor performance:</strong> Check results regularly<br>• <strong>Adjust gradually:</strong> Make small changes<br>• <strong>Focus on ROI:</strong> Consider cost vs. value<br>• <strong>Test different strategies:</strong> Find what works best</p>"
                            }
                        ]
                    },
                    {
                        "title": "Ad Extensions",
                        "icon": "➕",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "What are ad extensions?",
                                "content": "<p>Ad extensions add extra information to your ads, making them larger and more informative. They can:<br>• Increase click-through rates<br>• Provide more information<br>• Improve ad quality<br>• Help with local businesses<br>• Make ads more attractive</p>"
                            },
                            {
                                "title": "Sitelink extensions",
                                "content": "<p>Add links to specific pages:<br>• <strong>Home page:</strong> Link to main website<br>• <strong>About us:</strong> Company information<br>• <strong>Services:</strong> What you offer<br>• <strong>Contact:</strong> How to reach you<br>• <strong>Special offers:</strong> Current promotions</p>"
                            },
                            {
                                "title": "Call extensions",
                                "content": "<p>Add clickable phone numbers:<br>• <strong>Direct calls:</strong> People can call directly from ad<br>• <strong>Track calls:</strong> See how many calls you get<br>• <strong>Mobile friendly:</strong> Works great on phones<br>• <strong>Local businesses:</strong> Perfect for service businesses<br>• <strong>Immediate contact:</strong> Quick way for customers to reach you</p>"
                            },
                            {
                                "title": "Location extensions",
                                "content": "<p>Show your business address:<br>• <strong>Physical location:</strong> Display your address<br>• <strong>Get directions:</strong> People can find your business<br>• <strong>Store visits:</strong> Track people who visit<br>• <strong>Local SEO:</strong> Help with local search rankings<br>• <strong>Trust building:</strong> Shows you're a real business</p>"
                            },
                            {
                                "title": "Price extensions",
                                "content": "<p>Show your products and prices:<br>• <strong>Product showcase:</strong> Display what you sell<br>• <strong>Price transparency:</strong> Show your prices<br>• <strong>Multiple products:</strong> List several items<br>• <strong>E-commerce friendly:</strong> Great for online stores<br>• <strong>Competitive advantage:</strong> Show your best offers</p>"
                            }
                        ]
                    },
                    {
                        "title": "Campaign Optimization",
                        "icon": "📈",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Key metrics to track",
                                "content": "<p>Monitor these important numbers:<br>• <strong>Impressions:</strong> How many times your ad was shown<br>• <strong>Clicks:</strong> How many people clicked your ad<br>• <strong>Click-through rate (CTR):</strong> Clicks divided by impressions<br>• <strong>Cost per click (CPC):</strong> Average cost per click<br>• <strong>Conversions:</strong> Desired actions (calls, sales, etc.)</p>"
                            },
                            {
                                "title": "Regular optimization tasks",
                                "content": "<p>Do these tasks regularly:<br>• <strong>Review performance:</strong> Check results daily/weekly<br>• <strong>Pause poor performers:</strong> Stop underperforming ads<br>• <strong>Add negative keywords:</strong> Prevent irrelevant clicks<br>• <strong>Test new ad copy:</strong> Try different messages<br>• <strong>Adjust bids:</strong> Increase/decrease based on performance</p>"
                            },
                            {
                                "title": "A/B testing",
                                "content": "<p>Test different versions to improve:<br>• <strong>Ad copy:</strong> Test different headlines and descriptions<br>• <strong>Keywords:</strong> Test different keyword match types<br>• <strong>Landing pages:</strong> Test different website pages<br>• <strong>Bid strategies:</strong> Test manual vs. automated bidding<br>• <strong>Ad extensions:</strong> Test different extension combinations</p>"
                            },
                            {
                                "title": "Negative keywords",
                                "content": "<p>Add words to prevent irrelevant clicks:<br>• <strong>Free:</strong> If you don't offer free services<br>• <strong>Cheap:</strong> If you don't want budget customers<br>• <strong>Jobs:</strong> If you're not hiring<br>• <strong>Reviews:</strong> If you don't want review seekers<br>• <strong>Competitor names:</strong> If you don't want competitor clicks</p>"
                            },
                            {
                                "title": "Performance analysis",
                                "content": "<p>Analyze your results to improve:<br>• <strong>Time analysis:</strong> See when you get best results<br>• <strong>Device analysis:</strong> See which devices perform better<br>• <strong>Location analysis:</strong> See which areas work best<br>• <strong>Keyword analysis:</strong> See which keywords convert<br>• <strong>Ad analysis:</strong> See which ads perform best</p>"
                            }
                        ]
                    },
                    {
                        "title": "Local Business Advertising",
                        "icon": "🏪",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Why local targeting matters",
                                "content": "<p>For local businesses, targeting nearby customers is essential:<br>• <strong>Reduce waste:</strong> Don't spend on distant customers<br>• <strong>Higher conversion:</strong> Local customers more likely to buy<br>• <strong>Better ROI:</strong> More efficient use of budget<br>• <strong>Competitive advantage:</strong> Beat local competitors<br>• <strong>Store visits:</strong> Drive foot traffic to your location</p>"
                            },
                            {
                                "title": "Location targeting strategies",
                                "content": "<p>Target your local area effectively:<br>• <strong>Radius targeting:</strong> Target within specific distance<br>• <strong>City targeting:</strong> Target specific cities or towns<br>• <strong>Postal code targeting:</strong> Target specific areas<br>• <strong>Location exclusions:</strong> Remove areas you don't serve<br>• <strong>Multiple locations:</strong> Target all your business locations</p>"
                            },
                            {
                                "title": "Local keyword strategies",
                                "content": "<p>Use location-specific keywords:<br>• <strong>City + service:</strong> 'plumber Mumbai'<br>• <strong>Area + business:</strong> 'restaurant Bandra'<br>• <strong>Near me:</strong> 'grocery store near me'<br>• <strong>Local landmarks:</strong> 'near railway station'<br>• <strong>Regional terms:</strong> Use local language keywords</p>"
                            },
                            {
                                "title": "Local ad extensions",
                                "content": "<p>Use extensions for local businesses:<br>• <strong>Location extensions:</strong> Show your address<br>• <strong>Call extensions:</strong> Add clickable phone number<br>• <strong>Callout extensions:</strong> Highlight local benefits<br>• <strong>Structured snippets:</strong> Show local services<br>• <strong>Price extensions:</strong> Show local pricing</p>"
                            },
                            {
                                "title": "Measuring local success",
                                "content": "<p>Track local campaign performance:<br>• <strong>Store visits:</strong> Track people who visit your location<br>• <strong>Local phone calls:</strong> Monitor calls from local numbers<br>• <strong>Local conversions:</strong> Track local sales or leads<br>• <strong>Location performance:</strong> See which areas work best<br>• <strong>Local search impressions:</strong> Track local visibility</p>"
                            }
                        ]
                    },
                    {
                        "title": "Common Mistakes to Avoid",
                        "icon": "⚠️",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Targeting too broadly",
                                "content": "<p><strong>Mistake:</strong> Targeting everyone in your city<br><strong>Problem:</strong> Wastes money on uninterested people<br><strong>Solution:</strong> Use specific keywords and location targeting<br><strong>Example:</strong> Instead of 'restaurant', use 'authentic Indian restaurant near me'</p>"
                            },
                            {
                                "title": "Poor landing pages",
                                "content": "<p><strong>Mistake:</strong> Sending people to homepage instead of specific page<br><strong>Problem:</strong> People can't find what they're looking for<br><strong>Solution:</strong> Create specific landing pages for each ad<br><strong>Tip:</strong> Landing page should match the ad message</p>"
                            },
                            {
                                "title": "Ignoring negative keywords",
                                "content": "<p><strong>Mistake:</strong> Not adding negative keywords<br><strong>Problem:</strong> Ads show for irrelevant searches<br><strong>Solution:</strong> Regularly add negative keywords<br><strong>Examples:</strong> 'free', 'cheap', 'jobs', 'reviews'</p>"
                            },
                            {
                                "title": "Setting unrealistic budgets",
                                "content": "<p><strong>Mistake:</strong> Starting with too high budget<br><strong>Problem:</strong> Spend money quickly without learning<br><strong>Solution:</strong> Start small and increase gradually<br><strong>Budget:</strong> Begin with ₹100-200 per day</p>"
                            },
                            {
                                "title": "Not tracking conversions",
                                "content": "<p><strong>Mistake:</strong> Only tracking clicks, not conversions<br><strong>Problem:</strong> Don't know if ads are profitable<br><strong>Solution:</strong> Set up conversion tracking<br><strong>Track:</strong> Phone calls, form submissions, sales</p>"
                            }
                        ]
                    },
                    {
                        "title": "Advanced Features",
                        "icon": "🔧",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Remarketing campaigns",
                                "content": "<p>Show ads to people who visited your website:<br>• <strong>Website visitors:</strong> Target people who came to your site<br>• <strong>Cart abandoners:</strong> Remind people who left items in cart<br>• <strong>Previous customers:</strong> Encourage repeat business<br>• <strong>Similar audiences:</strong> Target people like your customers<br>• <strong>Custom audiences:</strong> Upload customer lists</p>"
                            },
                            {
                                "title": "Smart campaigns",
                                "content": "<p>Automated campaigns for beginners:<br>• <strong>Easy setup:</strong> Google handles most settings<br>• <strong>Automated optimization:</strong> Google improves performance<br>• <strong>Simple interface:</strong> Easy to understand<br>• <strong>Good for small businesses:</strong> Perfect for local businesses<br>• <strong>Limited control:</strong> Less customization options</p>"
                            },
                            {
                                "title": "Automated rules",
                                "content": "<p>Set up automatic campaign management:<br>• <strong>Budget rules:</strong> Pause campaigns that exceed limits<br>• <strong>Performance rules:</strong> Pause underperforming ads<br>• <strong>Bid rules:</strong> Automatically adjust bids<br>• <strong>Schedule rules:</strong> Start/stop campaigns automatically<br>• <strong>Notification rules:</strong> Get alerts about important changes</p>"
                            },
                            {
                                "title": "Audience targeting",
                                "content": "<p>Target specific groups of people:<br>• <strong>Demographics:</strong> Age, gender, income level<br>• <strong>Interests:</strong> Hobbies, activities, pages they like<br>• <strong>Behaviors:</strong> Online behavior, purchase history<br>• <strong>Life events:</strong> Recent life changes<br>• <strong>Custom audiences:</strong> Your own customer lists</p>"
                            },
                            {
                                "title": "Cross-device tracking",
                                "content": "<p>Track people across different devices:<br>• <strong>Multi-device journeys:</strong> See how people move between devices<br>• <strong>Better attribution:</strong> Understand conversion paths<br>• <strong>Improved targeting:</strong> Better audience insights<br>• <strong>Cross-device conversions:</strong> Track conversions across devices<br>• <strong>Enhanced reporting:</strong> More accurate performance data</p>"
                            }
                        ]
                    },
                    {
                        "title": "Measuring Success and ROI",
                        "icon": "📊",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Key performance indicators",
                                "content": "<p>Track these important metrics:<br>• <strong>Return on Ad Spend (ROAS):</strong> Revenue ÷ Ad spend<br>• <strong>Cost per Acquisition (CPA):</strong> Cost to get one customer<br>• <strong>Conversion Rate:</strong> Percentage of clicks that convert<br>• <strong>Click-through Rate (CTR):</strong> Percentage of impressions that click<br>• <strong>Quality Score:</strong> Google's rating of your ad quality</p>"
                            },
                            {
                                "title": "Setting up conversion tracking",
                                "content": "<p>Track what happens after people click:<br>• <strong>Website conversions:</strong> Sales, leads, signups<br>• <strong>Phone calls:</strong> Track call button clicks<br>• <strong>App installs:</strong> Track mobile app downloads<br>• <strong>Store visits:</strong> Track people who visit your location<br>• <strong>Custom conversions:</strong> Track specific actions you want</p>"
                            },
                            {
                                "title": "Understanding attribution",
                                "content": "<p>How Google attributes conversions:<br>• <strong>Last Click:</strong> Credits the last ad clicked<br>• <strong>First Click:</strong> Credits the first ad clicked<br>• <strong>Linear:</strong> Credits all ads equally<br>• <strong>Time Decay:</strong> Credits recent ads more<br>• <strong>Data-driven:</strong> Google's smart attribution</p>"
                            },
                            {
                                "title": "Reporting and analysis",
                                "content": "<p>Use reports to improve performance:<br>• <strong>Campaign reports:</strong> Overall campaign performance<br>• <strong>Ad group reports:</strong> Performance by ad group<br>• <strong>Keyword reports:</strong> Performance by keyword<br>• <strong>Audience reports:</strong> Performance by audience<br>• <strong>Geographic reports:</strong> Performance by location</p>"
                            },
                            {
                                "title": "Calculating ROI",
                                "content": "<p>Measure your return on investment:<br>• <strong>Track revenue:</strong> How much money you made<br>• <strong>Track costs:</strong> How much you spent on ads<br>• <strong>Calculate ROI:</strong> (Revenue - Cost) ÷ Cost × 100<br>• <strong>Set targets:</strong> Aim for positive ROI<br>• <strong>Monitor regularly:</strong> Check ROI weekly/monthly</p>"
                            }
                        ]
                    },
                    {
                        "title": "Staying Updated and Best Practices",
                        "icon": "📚",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Keeping up with Google Ads changes",
                                "content": "<p>Google updates frequently:<br>• <strong>Follow official blogs:</strong> Google Ads blog and announcements<br>• <strong>Join Google Ads community:</strong> Connect with other advertisers<br>• <strong>Subscribe to newsletters:</strong> Get updates in your email<br>• <strong>Watch webinars:</strong> Learn about new features<br>• <strong>Test new features:</strong> Try new options when available</p>"
                            },
                            {
                                "title": "Industry best practices",
                                "content": "<p>Follow proven strategies:<br>• <strong>Mobile-first approach:</strong> Most searches are on mobile<br>• <strong>Local optimization:</strong> Include local keywords and targeting<br>• <strong>Quality over quantity:</strong> Focus on relevant keywords<br>• <strong>Regular optimization:</strong> Monitor and improve continuously<br>• <strong>Customer focus:</strong> Put customer needs first</p>"
                            },
                            {
                                "title": "Seasonal advertising strategies",
                                "content": "<p>Plan for different seasons:<br>• <strong>Festival season:</strong> Increase budgets for major festivals<br>• <strong>Monsoon preparation:</strong> Target relevant products<br>• <strong>Back-to-school:</strong> Target parents and students<br>• <strong>Wedding season:</strong> Target wedding-related services<br>• <strong>Holiday season:</strong> Plan special offers and campaigns</p>"
                            },
                            {
                                "title": "Building long-term success",
                                "content": "<p>Focus on sustainable growth:<br>• <strong>Build brand awareness:</strong> Don't just focus on sales<br>• <strong>Collect customer data:</strong> Build your audience over time<br>• <strong>Test continuously:</strong> Always be testing new approaches<br>• <strong>Learn from data:</strong> Use insights to improve<br>• <strong>Stay customer-focused:</strong> Put customer needs first</p>"
                            },
                            {
                                "title": "Resources for continued learning",
                                "content": "<p>Keep learning and improving:<br>• <strong>Google Ads Academy:</strong> Free online courses<br>• <strong>YouTube channels:</strong> Google Ads tutorials<br>• <strong>Online communities:</strong> Google Ads forums and groups<br>• <strong>Local workshops:</strong> Attend in-person training<br>• <strong>Certification programs:</strong> Get Google Ads certified</p>"
                            },
                            {
                                "title": "Final encouragement",
                                "content": "<p>Congratulations on completing this Google Ads course! Remember, success in Google Ads comes from practice, patience, and continuous learning. Start small, test everything, and scale what works. Your local business can reach more customers and grow significantly with the right Google Ads strategy. Keep experimenting, stay updated with changes, and most importantly, focus on providing value to your customers. Good luck with your advertising journey!</p>"
                            }
                        ]
                    }
                ]
            },
            {
                "courseId": 7,
                "title": "Learn AI Agents",
                "sections": [
                    {
                        "title": "Introduction to AI Agents",
                        "icon": "🤖",
                        "type": "free",
                        "contents": [
                            {
                                "title": "What are AI Agents?",
                                "content": "<p><strong>AI Agents</strong> are smart computer programs that can perform tasks automatically without constant human supervision. Think of them as digital assistants that can work on your behalf to complete specific jobs.</p>"
                            },
                            {
                                "title": "How AI Agents work",
                                "content": "<p>AI Agents work by:<br>• Receiving instructions or goals<br>• Gathering information from various sources<br>• Making decisions based on data<br>• Taking actions to achieve goals<br>• Learning from results to improve</p>"
                            },
                            {
                                "title": "Real-world examples",
                                "content": "<p>You've probably used AI Agents already:<br>• <strong>Chatbots:</strong> Customer service on websites<br>• <strong>Recommendation systems:</strong> Netflix, Amazon suggestions<br>• <strong>Virtual assistants:</strong> Siri, Alexa, Google Assistant<br>• <strong>Automated trading:</strong> Stock market bots<br>• <strong>Smart home devices:</strong> Thermostats, security systems</p>"
                            },
                            {
                                "title": "Why learn about AI Agents?",
                                "content": "<p>Understanding AI Agents can help you:<br>• Automate repetitive tasks in your business<br>• Improve customer service<br>• Make better decisions with data<br>• Create new business opportunities<br>• Stay competitive in the digital age</p>"
                            },
                            {
                                "title": "What you'll learn in this course",
                                "content": "<p>By the end of this course, you'll know how to:<br>• Understand different types of AI Agents<br>• Create simple AI tools for your business<br>• Use AI Agents to automate tasks<br>• Build basic chatbots and assistants<br>• Deploy AI solutions safely and ethically</p>"
                            }
                        ]
                    },
                    {
                        "title": "Types of AI Agents",
                        "icon": "📋",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Simple reflex agents",
                                "content": "<p>These are the most basic AI Agents:<br>• <strong>How they work:</strong> Follow simple if-then rules<br>• <strong>Example:</strong> Automatic door that opens when someone approaches<br>• <strong>Use case:</strong> Simple automation tasks<br>• <strong>Limitation:</strong> Can't learn or adapt<br>• <strong>Best for:</strong> Repetitive, predictable tasks</p>"
                            },
                            {
                                "title": "Model-based agents",
                                "content": "<p>More sophisticated agents that understand their environment:<br>• <strong>How they work:</strong> Have a model of how the world works<br>• <strong>Example:</strong> Navigation apps that understand traffic patterns<br>• <strong>Use case:</strong> Planning and decision making<br>• <strong>Advantage:</strong> Can handle uncertainty<br>• <strong>Best for:</strong> Complex environments</p>"
                            },
                            {
                                "title": "Goal-based agents",
                                "content": "<p>Agents that work toward specific objectives:<br>• <strong>How they work:</strong> Have clear goals and work to achieve them<br>• <strong>Example:</strong> Chess-playing computer that aims to win<br>• <strong>Use case:</strong> Problem solving and optimization<br>• <strong>Advantage:</strong> Can plan multiple steps ahead<br>• <strong>Best for:</strong> Strategic tasks</p>"
                            },
                            {
                                "title": "Learning agents",
                                "content": "<p>Agents that improve over time:<br>• <strong>How they work:</strong> Learn from experience and data<br>• <strong>Example:</strong> Recommendation systems that learn your preferences<br>• <strong>Use case:</strong> Personalization and prediction<br>• <strong>Advantage:</strong> Get better with more data<br>• <strong>Best for:</strong> Tasks that benefit from learning</p>"
                            },
                            {
                                "title": "Multi-agent systems",
                                "content": "<p>Multiple agents working together:<br>• <strong>How they work:</strong> Several agents coordinate to solve problems<br>• <strong>Example:</strong> Traffic management systems<br>• <strong>Use case:</strong> Complex systems with many parts<br>• <strong>Advantage:</strong> Can handle large-scale problems<br>• <strong>Best for:</strong> Distributed tasks</p>"
                            }
                        ]
                    },
                    {
                        "title": "AI Agent Components",
                        "icon": "⚙️",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Sensors and perception",
                                "content": "<p>How agents gather information:<br>• <strong>Text input:</strong> Reading messages, documents<br>• <strong>Voice input:</strong> Listening to speech<br>• <strong>Visual input:</strong> Processing images and video<br>• <strong>Data input:</strong> Reading from databases, APIs<br>• <strong>Environmental sensors:</strong> Temperature, movement, etc.</p>"
                            },
                            {
                                "title": "Knowledge and memory",
                                "content": "<p>How agents store and use information:<br>• <strong>Databases:</strong> Store structured information<br>• <strong>Knowledge graphs:</strong> Connect related information<br>• <strong>Machine learning models:</strong> Learn patterns from data<br>• <strong>Rules and logic:</strong> Decision-making frameworks<br>• <strong>Context memory:</strong> Remember recent interactions</p>"
                            },
                            {
                                "title": "Reasoning and decision making",
                                "content": "<p>How agents think and choose actions:<br>• <strong>Rule-based reasoning:</strong> Follow if-then logic<br>• <strong>Statistical reasoning:</strong> Use probability and data<br>• <strong>Machine learning:</strong> Learn from examples<br>• <strong>Optimization:</strong> Find best solutions<br>• <strong>Planning:</strong> Create step-by-step plans</p>"
                            },
                            {
                                "title": "Actuators and actions",
                                "content": "<p>How agents take action:<br>• <strong>Text output:</strong> Send messages, write reports<br>• <strong>Voice output:</strong> Speak responses<br>• <strong>API calls:</strong> Interact with other systems<br>• <strong>Database updates:</strong> Store new information<br>• <strong>Physical actions:</strong> Control devices, robots</p>"
                            },
                            {
                                "title": "Learning and adaptation",
                                "content": "<p>How agents improve over time:<br>• <strong>Supervised learning:</strong> Learn from labeled examples<br>• <strong>Unsupervised learning:</strong> Find patterns in data<br>• <strong>Reinforcement learning:</strong> Learn from rewards/punishments<br>• <strong>Feedback loops:</strong> Use results to improve<br>• <strong>Continuous learning:</strong> Keep learning from new data</p>"
                            }
                        ]
                    },
                    {
                        "title": "Creating Simple AI Agents",
                        "icon": "🛠️",
                        "type": "free",
                        "contents": [
                            {
                                "title": "Planning your first AI Agent",
                                "content": "<p>Start with a simple, well-defined task:<br>• <strong>Choose a specific problem:</strong> What do you want to automate?<br>• <strong>Define inputs:</strong> What information will the agent receive?<br>• <strong>Define outputs:</strong> What should the agent produce?<br>• <strong>Set success criteria:</strong> How will you know it's working?<br>• <strong>Start small:</strong> Begin with basic functionality</p>"
                            },
                            {
                                "title": "Using no-code tools",
                                "content": "<p>Create AI Agents without programming:<br>• <strong>Chatfuel:</strong> Build Facebook Messenger bots<br>• <strong>ManyChat:</strong> Create chatbots for multiple platforms<br>• <strong>Zapier:</strong> Automate workflows between apps<br>• <strong>IFTTT:</strong> Create simple automation rules<br>• <strong>Bubble:</strong> Build web apps with AI features</p>"
                            },
                            {
                                "title": "Simple chatbot example",
                                "content": "<p>Create a basic customer service chatbot:<br>1. <strong>Greet customers:</strong> 'Hello! How can I help you today?'<br>2. <strong>Recognize common questions:</strong> About prices, hours, location<br>3. <strong>Provide answers:</strong> Use predefined responses<br>4. <strong>Collect information:</strong> Name, phone number if needed<br>5. <strong>Transfer to human:</strong> For complex questions</p>"
                            },
                            {
                                "title": "Data collection and processing",
                                "content": "<p>Gather information for your agent:<br>• <strong>Customer feedback:</strong> Common questions and concerns<br>• <strong>Business data:</strong> Products, prices, policies<br>• <strong>Interaction logs:</strong> How people currently contact you<br>• <strong>Success metrics:</strong> What makes interactions successful<br>• <strong>Failure points:</strong> Where current processes break down</p>"
                            },
                            {
                                "title": "Testing and iteration",
                                "content": "<p>Improve your AI Agent:<br>• <strong>Start with friends:</strong> Test with people you know<br>• <strong>Monitor conversations:</strong> See where it fails<br>• <strong>Collect feedback:</strong> Ask users what they think<br>• <strong>Make improvements:</strong> Fix problems and add features<br>• <strong>Scale gradually:</strong> Expand to more users slowly</p>"
                            }
                        ]
                    },
                    {
                        "title": "AI Agents for Business",
                        "icon": "💼",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Customer service automation",
                                "content": "<p>Use AI Agents to handle customer inquiries:<br>• <strong>FAQ bots:</strong> Answer common questions automatically<br>• <strong>Order tracking:</strong> Let customers check order status<br>• <strong>Appointment booking:</strong> Schedule meetings automatically<br>• <strong>Basic troubleshooting:</strong> Help with simple problems<br>• <strong>24/7 availability:</strong> Provide service anytime</p>"
                            },
                            {
                                "title": "Sales and marketing agents",
                                "content": "<p>AI Agents can help with sales:<br>• <strong>Lead qualification:</strong> Identify potential customers<br>• <strong>Product recommendations:</strong> Suggest relevant items<br>• <strong>Follow-up reminders:</strong> Contact customers automatically<br>• <strong>Price optimization:</strong> Adjust prices based on demand<br>• <strong>Campaign management:</strong> Automate marketing tasks</p>"
                            },
                            {
                                "title": "Inventory and supply chain",
                                "content": "<p>Automate business operations:<br>• <strong>Stock monitoring:</strong> Track inventory levels automatically<br>• <strong>Reorder alerts:</strong> Notify when items are low<br>• <strong>Demand forecasting:</strong> Predict future needs<br>• <strong>Supplier communication:</strong> Automate ordering<br>• <strong>Quality control:</strong> Monitor product quality</p>"
                            },
                            {
                                "title": "Financial management",
                                "content": "<p>AI Agents for financial tasks:<br>• <strong>Expense tracking:</strong> Categorize and monitor spending<br>• <strong>Invoice processing:</strong> Automate billing<br>• <strong>Payment reminders:</strong> Follow up on overdue payments<br>• <strong>Budget monitoring:</strong> Track spending against budgets<br>• <strong>Financial reporting:</strong> Generate regular reports</p>"
                            },
                            {
                                "title": "Human resources",
                                "content": "<p>Automate HR processes:<br>• <strong>Recruitment screening:</strong> Filter job applications<br>• <strong>Employee onboarding:</strong> Guide new hires through processes<br>• <strong>Training coordination:</strong> Schedule and track training<br>• <strong>Performance monitoring:</strong> Track employee metrics<br>• <strong>Compliance checking:</strong> Ensure legal requirements are met</p>"
                            }
                        ]
                    },
                    {
                        "title": "Natural Language Processing",
                        "icon": "💬",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Understanding NLP",
                                "content": "<p>Natural Language Processing helps AI understand human language:<br>• <strong>Text analysis:</strong> Understand written messages<br>• <strong>Speech recognition:</strong> Convert speech to text<br>• <strong>Language generation:</strong> Create human-like responses<br>• <strong>Sentiment analysis:</strong> Understand emotions in text<br>• <strong>Translation:</strong> Convert between languages</p>"
                            },
                            {
                                "title": "Building conversational agents",
                                "content": "<p>Create agents that can chat naturally:<br>• <strong>Intent recognition:</strong> Understand what users want<br>• <strong>Entity extraction:</strong> Identify important information<br>• <strong>Context management:</strong> Remember conversation history<br>• <strong>Response generation:</strong> Create appropriate replies<br>• <strong>Fallback handling:</strong> Deal with unclear requests</p>"
                            },
                            {
                                "title": "Multilingual support",
                                "content": "<p>Serve customers in multiple languages:<br>• <strong>Language detection:</strong> Identify user's language<br>• <strong>Translation services:</strong> Convert messages<br>• <strong>Localized responses:</strong> Use appropriate cultural context<br>• <strong>Regional variations:</strong> Handle different dialects<br>• <strong>Language preferences:</strong> Remember user's choice</p>"
                            },
                            {
                                "title": "Voice assistants",
                                "content": "<p>Create agents that can speak and listen:<br>• <strong>Speech-to-text:</strong> Convert spoken words to text<br>• <strong>Text-to-speech:</strong> Convert responses to speech<br>• <strong>Voice recognition:</strong> Identify different speakers<br>• <strong>Noise handling:</strong> Work in noisy environments<br>• <strong>Accent adaptation:</strong> Understand different accents</p>"
                            },
                            {
                                "title": "Advanced NLP features",
                                "content": "<p>More sophisticated language capabilities:<br>• <strong>Summarization:</strong> Create short summaries of long text<br>• <strong>Question answering:</strong> Find answers in documents<br>• <strong>Text classification:</strong> Categorize messages automatically<br>• <strong>Named entity recognition:</strong> Identify people, places, organizations<br>• <strong>Topic modeling:</strong> Understand main themes in text</p>"
                            }
                        ]
                    },
                    {
                        "title": "Machine Learning for AI Agents",
                        "icon": "🧠",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Supervised learning",
                                "content": "<p>Learn from labeled examples:<br>• <strong>Classification:</strong> Categorize inputs (spam/not spam)<br>• <strong>Regression:</strong> Predict numerical values (prices, sales)<br>• <strong>Training data:</strong> Examples with correct answers<br>• <strong>Model training:</strong> Learn patterns from data<br>• <strong>Prediction:</strong> Apply learned patterns to new data</p>"
                            },
                            {
                                "title": "Unsupervised learning",
                                "content": "<p>Find patterns without labels:<br>• <strong>Clustering:</strong> Group similar items together<br>• <strong>Dimensionality reduction:</strong> Simplify complex data<br>• <strong>Anomaly detection:</strong> Find unusual patterns<br>• <strong>Association rules:</strong> Find relationships between items<br>• <strong>Pattern discovery:</strong> Identify hidden structures</p>"
                            },
                            {
                                "title": "Reinforcement learning",
                                "content": "<p>Learn through trial and error:<br>• <strong>Environment:</strong> The world the agent operates in<br>• <strong>Actions:</strong> What the agent can do<br>• <strong>Rewards:</strong> Feedback on how well it's doing<br>• <strong>Policy:</strong> Strategy for choosing actions<br>• <strong>Value function:</strong> Estimate of future rewards</p>"
                            },
                            {
                                "title": "Deep learning",
                                "content": "<p>Advanced neural networks:<br>• <strong>Neural networks:</strong> Simulate brain-like processing<br>• <strong>Deep layers:</strong> Multiple processing layers<br>• <strong>Feature learning:</strong> Automatically find important patterns<br>• <strong>Image recognition:</strong> Identify objects in pictures<br>• <strong>Natural language:</strong> Understand and generate text</p>"
                            },
                            {
                                "title": "Model training and deployment",
                                "content": "<p>From development to production:<br>• <strong>Data preparation:</strong> Clean and format training data<br>• <strong>Model selection:</strong> Choose appropriate algorithms<br>• <strong>Training process:</strong> Teach the model with data<br>• <strong>Validation:</strong> Test on unseen data<br>• <strong>Deployment:</strong> Put model into production use</p>"
                            }
                        ]
                    },
                    {
                        "title": "AI Agent Platforms and Tools",
                        "icon": "🔧",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Cloud-based platforms",
                                "content": "<p>Use existing AI services:<br>• <strong>Google Cloud AI:</strong> Comprehensive AI services<br>• <strong>Amazon AWS:</strong> Machine learning and AI tools<br>• <strong>Microsoft Azure:</strong> AI and cognitive services<br>• <strong>IBM Watson:</strong> Enterprise AI platform<br>• <strong>OpenAI API:</strong> Advanced language models</p>"
                            },
                            {
                                "title": "Open-source frameworks",
                                "content": "<p>Build with free tools:<br>• <strong>TensorFlow:</strong> Google's machine learning framework<br>• <strong>PyTorch:</strong> Facebook's deep learning library<br>• <strong>Scikit-learn:</strong> Python machine learning library<br>• <strong>Rasa:</strong> Open-source chatbot framework<br>• <strong>Hugging Face:</strong> Natural language processing tools</p>"
                            },
                            {
                                "title": "No-code AI platforms",
                                "content": "<p>Create AI without programming:<br>• <strong>Bubble:</strong> Visual web app builder with AI<br>• <strong>Zapier:</strong> Automate workflows between apps<br>• <strong>Make (Integromat):</strong> Visual automation platform<br>• <strong>Chatfuel:</strong> Facebook Messenger bot builder<br>• <strong>ManyChat:</strong> Multi-platform chatbot creator</p>"
                            },
                            {
                                "title": "Specialized tools",
                                "content": "<p>Tools for specific tasks:<br>• <strong>Dialogflow:</strong> Google's conversational AI platform<br>• <strong>Wit.ai:</strong> Facebook's natural language platform<br>• <strong>LUIS:</strong> Microsoft's language understanding service<br>• <strong>Botpress:</strong> Open-source conversational platform<br>• <strong>Landbot:</strong> Visual chatbot builder</p>"
                            },
                            {
                                "title": "Choosing the right platform",
                                "content": "<p>Consider these factors:<br>• <strong>Technical skills:</strong> Your programming ability<br>• <strong>Budget:</strong> Free vs. paid options<br>• <strong>Scalability:</strong> Can it grow with your needs?<br>• <strong>Integration:</strong> Works with your existing tools<br>• <strong>Support:</strong> Documentation and community help</p>"
                            }
                        ]
                    },
                    {
                        "title": "Deployment and Integration",
                        "icon": "🚀",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Deployment strategies",
                                "content": "<p>How to put your AI Agent into use:<br>• <strong>Cloud deployment:</strong> Host on cloud platforms<br>• <strong>On-premises:</strong> Run on your own servers<br>• <strong>Edge deployment:</strong> Run on local devices<br>• <strong>Hybrid approach:</strong> Combine cloud and local<br>• <strong>Containerization:</strong> Package with Docker</p>"
                            },
                            {
                                "title": "API integration",
                                "content": "<p>Connect your agent to other systems:<br>• <strong>REST APIs:</strong> Standard web service communication<br>• <strong>Webhooks:</strong> Real-time notifications<br>• <strong>Database connections:</strong> Access to data storage<br>• <strong>Third-party services:</strong> Payment, messaging, etc.<br>• <strong>Authentication:</strong> Secure access to services</p>"
                            },
                            {
                                "title": "Monitoring and maintenance",
                                "content": "<p>Keep your AI Agent running smoothly:<br>• <strong>Performance monitoring:</strong> Track response times and accuracy<br>• <strong>Error tracking:</strong> Identify and fix problems<br>• <strong>Usage analytics:</strong> Understand how people use it<br>• <strong>Regular updates:</strong> Keep software current<br>• <strong>Backup systems:</strong> Plan for failures</p>"
                            },
                            {
                                "title": "Scalability considerations",
                                "content": "<p>Plan for growth:<br>• <strong>Load balancing:</strong> Distribute work across multiple instances<br>• <strong>Auto-scaling:</strong> Automatically adjust capacity<br>• <strong>Caching:</strong> Store frequently used data<br>• <strong>Database optimization:</strong> Efficient data storage and retrieval<br>• <strong>CDN usage:</strong> Distribute content globally</p>"
                            },
                            {
                                "title": "Security and privacy",
                                "content": "<p>Protect your AI Agent and users:<br>• <strong>Data encryption:</strong> Secure sensitive information<br>• <strong>Access control:</strong> Limit who can use the system<br>• <strong>Audit logging:</strong> Track all activities<br>• <strong>Compliance:</strong> Follow data protection laws<br>• <strong>Regular security updates:</strong> Fix vulnerabilities</p>"
                            }
                        ]
                    },
                    {
                        "title": "Ethics and Responsible AI",
                        "icon": "🛡️",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "AI bias and fairness",
                                "content": "<p>Ensure your AI Agent treats everyone fairly:<br>• <strong>Data bias:</strong> Check if training data is representative<br>• <strong>Algorithm bias:</strong> Ensure fair decision-making<br>• <strong>Testing for bias:</strong> Regularly check for discrimination<br>• <strong>Diverse teams:</strong> Include different perspectives<br>• <strong>Transparency:</strong> Explain how decisions are made</p>"
                            },
                            {
                                "title": "Privacy protection",
                                "content": "<p>Respect user privacy:<br>• <strong>Data minimization:</strong> Collect only necessary information<br>• <strong>Consent management:</strong> Get clear permission for data use<br>• <strong>Data anonymization:</strong> Remove personal identifiers<br>• <strong>Secure storage:</strong> Protect data from breaches<br>• <strong>Right to deletion:</strong> Allow users to remove their data</p>"
                            },
                            {
                                "title": "Transparency and explainability",
                                "content": "<p>Make AI decisions understandable:<br>• <strong>Clear communication:</strong> Explain what the AI is doing<br>• <strong>Decision logging:</strong> Record how decisions were made<br>• <strong>User control:</strong> Let users override AI decisions<br>• <strong>Human oversight:</strong> Keep humans in the loop<br>• <strong>Regular audits:</strong> Review AI behavior regularly</p>"
                            },
                            {
                                "title": "Safety and reliability",
                                "content": "<p>Ensure your AI Agent is safe:<br>• <strong>Fail-safe mechanisms:</strong> Plan for when things go wrong<br>• <strong>Testing protocols:</strong> Thoroughly test before deployment<br>• <strong>Monitoring systems:</strong> Watch for unexpected behavior<br>• <strong>Emergency shutdown:</strong> Ability to stop the system quickly<br>• <strong>Regular updates:</strong> Fix security and safety issues</p>"
                            },
                            {
                                "title": "Social impact",
                                "content": "<p>Consider broader effects:<br>• <strong>Job displacement:</strong> How might this affect employment?<br>• <strong>Accessibility:</strong> Ensure everyone can benefit<br>• <strong>Environmental impact:</strong> Consider energy usage<br>• <strong>Community effects:</strong> Impact on local communities<br>• <strong>Long-term consequences:</strong> Think about future implications</p>"
                            }
                        ]
                    },
                    {
                        "title": "Future of AI Agents",
                        "icon": "🔮",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Emerging trends",
                                "content": "<p>What's coming next in AI Agents:<br>• <strong>Multimodal agents:</strong> Handle text, voice, and images together<br>• <strong>Autonomous systems:</strong> More independent decision-making<br>• <strong>Edge AI:</strong> Processing on local devices<br>• <strong>Federated learning:</strong> Learn without sharing data<br>• <strong>Quantum AI:</strong> Using quantum computing for AI</p>"
                            },
                            {
                                "title": "Industry applications",
                                "content": "<p>How different industries will use AI Agents:<br>• <strong>Healthcare:</strong> Medical diagnosis and patient care<br>• <strong>Education:</strong> Personalized learning assistants<br>• <strong>Agriculture:</strong> Crop monitoring and management<br>• <strong>Manufacturing:</strong> Quality control and optimization<br>• <strong>Transportation:</strong> Autonomous vehicles and logistics</p>"
                            },
                            {
                                "title": "Skills for the future",
                                "content": "<p>What you should learn to stay relevant:<br>• <strong>AI literacy:</strong> Understand how AI works<br>• <strong>Data skills:</strong> Work with and analyze data<br>• <strong>Programming basics:</strong> Understand code and algorithms<br>• <strong>Domain expertise:</strong> Deep knowledge in your field<br>• <strong>Adaptability:</strong> Learn new technologies quickly</p>"
                            },
                            {
                                "title": "Opportunities for entrepreneurs",
                                "content": "<p>Business opportunities with AI Agents:<br>• <strong>AI consulting:</strong> Help businesses implement AI<br>• <strong>Custom AI solutions:</strong> Build agents for specific needs<br>• <strong>AI training:</strong> Teach others about AI<br>• <strong>Data services:</strong> Provide data for AI training<br>• <strong>AI tools and platforms:</strong> Create tools for others</p>"
                            },
                            {
                                "title": "Preparing for the future",
                                "content": "<p>How to get ready for AI-driven changes:<br>• <strong>Stay informed:</strong> Follow AI news and developments<br>• <strong>Experiment:</strong> Try building simple AI tools<br>• <strong>Network:</strong> Connect with AI professionals<br>• <strong>Learn continuously:</strong> Take courses and workshops<br>• <strong>Think strategically:</strong> Plan how AI can help your business</p>"
                            }
                        ]
                    },
                    {
                        "title": "Getting Started and Resources",
                        "icon": "📚",
                        "type": "pro",
                        "contents": [
                            {
                                "title": "Learning path",
                                "content": "<p>Recommended learning sequence:<br>1. <strong>Basics:</strong> Understand AI and machine learning concepts<br>2. <strong>Tools:</strong> Learn to use no-code AI platforms<br>3. <strong>Programming:</strong> Learn Python for AI development<br>4. <strong>Specialization:</strong> Focus on specific AI applications<br>5. <strong>Advanced topics:</strong> Deep learning and neural networks</p>"
                            },
                            {
                                "title": "Free learning resources",
                                "content": "<p>Where to learn for free:<br>• <strong>Coursera:</strong> Free AI and machine learning courses<br>• <strong>edX:</strong> University-level AI courses<br>• <strong>YouTube:</strong> Free tutorials and lectures<br>• <strong>GitHub:</strong> Open-source AI projects and code<br>• <strong>Kaggle:</strong> Data science competitions and datasets</p>"
                            },
                            {
                                "title": "Communities and networking",
                                "content": "<p>Connect with AI professionals:<br>• <strong>LinkedIn groups:</strong> AI and machine learning communities<br>• <strong>Reddit:</strong> r/MachineLearning, r/artificial<br>• <strong>Meetup groups:</strong> Local AI meetups and events<br>• <strong>Discord servers:</strong> AI-focused chat communities<br>• <strong>Conferences:</strong> Attend AI conferences and workshops</p>"
                            },
                            {
                                "title": "Practical projects",
                                "content": "<p>Hands-on learning projects:<br>• <strong>Chatbot:</strong> Build a customer service bot<br>• <strong>Recommendation system:</strong> Suggest products or content<br>• <strong>Data analysis:</strong> Analyze business data<br>• <strong>Image classifier:</strong> Identify objects in images<br>• <strong>Text analyzer:</strong> Process and understand text</p>"
                            },
                            {
                                "title": "Staying updated",
                                "content": "<p>Keep up with AI developments:<br>• <strong>Newsletters:</strong> Subscribe to AI news updates<br>• <strong>Podcasts:</strong> Listen to AI-focused podcasts<br>• <strong>Blogs:</strong> Follow AI researchers and companies<br>• <strong>Research papers:</strong> Read academic AI papers<br>• <strong>Social media:</strong> Follow AI leaders on Twitter/LinkedIn</p>"
                            },
                            {
                                "title": "Final encouragement",
                                "content": "<p>Congratulations on completing this AI Agents course! You've taken the first step into the exciting world of artificial intelligence. Remember, AI is not just for big companies - small businesses and individuals can also benefit from AI tools. Start with simple projects, experiment with different platforms, and gradually build your skills. The future belongs to those who can work effectively with AI. Keep learning, stay curious, and don't be afraid to try new things. Your AI journey is just beginning!</p>"
                            }
                        ]
                    }
                ]
            }



        ];

        //send only courside match

        const matchedCourse = courseDetails.find(course => course.courseId === courseId);

        callback(200, [matchedCourse]);

    },
};
