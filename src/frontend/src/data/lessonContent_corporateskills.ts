// Corporate Skills lesson content for IT Fresher Hub
import type { LessonContent } from "@/types";

export const CORPORATE_SKILLS_LESSONS: LessonContent[] = [
  {
    title: "First Day Survival Guide: What to Expect",
    content:
      "Rahul arrived at his first IT job trembling. He did not know where to sit, who to talk to, or what to do. Sound familiar? The first day is mostly HR formalities — ID card, onboarding paperwork, laptop setup, and a team introduction. Nobody expects you to deliver code on Day 1.\n\nThe most important thing you can do on your first day is observe and listen. Notice how people address each other — is it formal or casual? How do they communicate — email, Slack, or Teams? Are meetings loud or quiet? These cues tell you the company culture faster than any handbook.\n\nCome prepared with a small notebook, your official documents, and a positive attitude. Introduce yourself briefly and confidently: name, college, and the role you have joined. Avoid controversial opinions on your first day. Ask your buddy or manager what a successful first week looks like — this question alone impresses most managers.",
    funFact:
      "Studies show that employees who have a structured first day are 58% more likely to still be with the company after three years. First impressions are truly lasting.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul's manager asks what he wants to achieve in his first week. What is the best response?",
      options: [
        "I want to fix the biggest bug in the codebase",
        "I want to understand the team processes, tools, and my role clearly",
        "I want to avoid all meetings to focus on self-study",
        "I want to show my coding skills immediately",
      ],
      correctAnswer:
        "I want to understand the team processes, tools, and my role clearly",
      explanation:
        "Showing eagerness to understand processes and fit into the team is exactly what managers want from freshers. Rushing to prove yourself technically on Day 1 often creates more problems than it solves.",
    },
  },
  {
    title: "Dress Code: Decoding Business Casual and Formal",
    content:
      "Priya wore a bright floral top with torn jeans to her first client meeting. She was not wrong to dress casually — her office was business casual every day. But client meetings follow a different standard, and nobody told her in advance. This is a common fresher trap.\n\nBusiness Formal means full suit or formal shirt with trousers for men, and formal saree, salwar, or formal western for women. Think board meetings, client presentations, and job interviews. Business Casual is relaxed but still professional — chinos, polo shirts, formal kurti, or neat jeans (no rips). Most IT offices in India follow business casual daily.\n\nWhen unsure, always dress one level above what you think is required. It is far better to be the best-dressed person in the room than the worst. Keep your clothes clean, ironed, and well-fitted. Avoid strong perfume, excessive jewellery, and flashy logos in formal settings. Your appearance signals professionalism before you even speak.",
    funFact:
      "Research from Princeton University found that people form opinions about your competence and trustworthiness within 100 milliseconds of seeing you — long before you say a word.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "You have a video call with a US client at 3 PM and your office is business casual. What should you wear?",
      options: [
        "Your regular casual clothes since it is just a video call",
        "Business formal — treat client meetings as formal regardless of medium",
        "Whatever your teammates are wearing",
        "Anything colorful to stand out on camera",
      ],
      correctAnswer:
        "Business formal — treat client meetings as formal regardless of medium",
      explanation:
        "Client-facing interactions always warrant business formal attire, even on video calls. Clients judge professionalism visually, and dressing well signals respect for the meeting.",
    },
  },
  {
    title: "Punctuality and Professionalism",
    content:
      "Arjun joined a 10 AM standup at 10:07, interrupting the scrum master mid-sentence. Everyone noticed. Being late is not just a time issue — it signals that you value your time more than others'. In corporate culture, being on time means being 5 minutes early.\n\nPunctuality applies beyond meetings. Deliver tasks on the promised date even if it means staying late. Respond to messages within a reasonable window — in most IT offices, 2–4 hours is acceptable for non-urgent messages, and 24 hours for emails. Silence is unprofessional; even a quick acknowledgement keeps trust intact.\n\nProfessionalism is a broader concept: honouring commitments, maintaining composure under pressure, treating everyone with equal respect regardless of designation, and taking ownership of mistakes without blame-shifting. Arjun eventually became known as the most reliable person on his team — not the fastest coder, but the one who always delivered what he promised, when he promised it. That reputation got him his first promotion.",
    funFact:
      "A Harvard Business School study found that being consistently reliable is rated more important than raw technical skill by 67% of hiring managers when considering promotions.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In corporate culture, being _______ means arriving 5 minutes before the scheduled time.",
      correctAnswer: "on time",
      explanation:
        "In professional settings, 'on time' really means a few minutes early. This shows respect for others' schedules and demonstrates reliability — a trait managers value enormously.",
    },
  },
  {
    title: "Corporate Email Etiquette: Writing Emails That Get Replies",
    content:
      "Sneha sent a 12-line email with no subject line, multiple unrelated questions, and a vague 'please help' closing. Nobody replied for three days. Her mistake was not the content — it was the structure. A corporate email must be scannable, specific, and have a clear ask.\n\nUse this format every time: Subject line that summarises the email in 6–8 words. Opening line stating context. Body with the issue or request in 3–5 lines maximum. A specific closing ask with a deadline if needed. Example subject: 'Approval needed: Test plan for Module 3 by Friday'. Emails with specific subject lines are opened 3x more often.\n\nAlways read your email once before sending. Check: Is the tone professional? Have you addressed the right person? Are any attachments actually attached? Is your ask clear? The rule of thumb — if you need to explain your email in a follow-up, your email was unclear. Keep it simple, direct, and respectful.",
    funFact:
      "The average corporate employee receives 121 emails per day and spends 28% of their workweek on email. A well-structured email that takes 30 seconds to read gets a reply; a rambling one gets ignored.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha needs approval from her manager for a production deployment tomorrow. Which subject line is most effective?",
      options: [
        "Hi",
        "Deployment",
        "Approval needed: Production deployment for App v2.1 — by EOD today",
        "Important email please read",
      ],
      correctAnswer:
        "Approval needed: Production deployment for App v2.1 — by EOD today",
      explanation:
        "A great subject line tells the reader exactly what is needed and when, without opening the email. It respects their time and dramatically increases response rates.",
    },
  },
  {
    title: "CC, BCC, Reply All: Email Mistakes Freshers Make",
    content:
      "Rahul used 'Reply All' to respond to a company-wide email with 'Thanks!' — and 500 people received a notification. He became famous for the wrong reason. Understanding CC, BCC, and Reply All is non-negotiable in corporate life.\n\nTO is for the primary recipient — the person you expect action from. CC (Carbon Copy) is for people who need to stay informed but are not required to act. BCC (Blind Carbon Copy) hides the recipient's address from others — useful for protecting privacy in mass emails. Reply All sends your response to every single person in the thread; only use it when every person genuinely needs to see your reply.\n\nAnother common mistake: replying to an email without reading the entire thread, causing you to ask a question already answered two replies ago. Always scroll to the bottom of the thread before composing. Also, never use email to vent frustration — once sent, it is a permanent record that can be forwarded, printed, and used in HR proceedings.",
    funFact:
      "In 2016, a US government department accidentally sent a 'Reply All' that triggered 2 million emails in a single day, effectively crashing their email server. Always pause before hitting Reply All.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "You are sending a project update to your client. Your manager should stay informed but not receive direct replies. Which field do you use for your manager?",
      options: [
        "TO — alongside the client",
        "CC — so manager is informed without being a primary recipient",
        "BCC — so client does not see the manager",
        "Send a separate email to the manager",
      ],
      correctAnswer:
        "CC — so manager is informed without being a primary recipient",
      explanation:
        "CC is perfect when someone needs visibility but is not the decision-maker or primary action-taker. The client sees the manager is copied, which also adds accountability.",
    },
  },
  {
    title: "Professional Communication on Slack and Teams",
    content:
      "Priya typed 'can u help' to a senior developer on Slack at 11 PM and got no reply. The next day she complained he was unhelpful. The problem was not his responsiveness — it was her message. Effective Slack and Teams communication follows specific rules that preserve professionalism and respect boundaries.\n\nAlways front-load your context. Instead of 'can u help?', write: 'Hi Arjun, I am getting a 404 error when calling the /users API endpoint after the latest deployment. I have checked the route config and it looks correct. Could you help me debug this?' This single message gives the developer everything needed to start helping immediately.\n\nSet your status to indicate availability — 'In a meeting', 'Deep work', 'Available'. Respect DND (Do Not Disturb) settings. Use threads for replies instead of cluttering the main channel. Avoid sending a message that is just 'Hello' and waiting — combine your greeting with the actual ask. Treat chat messages like mini-emails: professional, specific, and respectful of the reader's time.",
    funFact:
      "The term 'nohello.com' is an actual website documenting why sending just 'Hi' on chat and waiting is considered rude in tech culture. Most developers know this site by heart.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun messages his lead at 9 PM: 'hello sir'. The lead does not reply till morning. Who is at fault?",
      options: [
        "The lead, for not checking messages after hours",
        "Neither — this is fine professional behaviour",
        "Arjun — he should have front-loaded his question with context and respected working hours",
        "HR, for not setting communication policies",
      ],
      correctAnswer:
        "Arjun — he should have front-loaded his question with context and respected working hours",
      explanation:
        "Sending a context-free greeting outside working hours puts unfair pressure on the receiver. Include your full question in the first message, and respect that people have personal time after work.",
    },
  },
  {
    title: "Meeting Etiquette: How to Behave in Meetings",
    content:
      "Sneha joined a client call while eating lunch, with her camera off, in a noisy environment. Her senior had to apologise to the client on her behalf. Meeting etiquette is one of the fastest ways freshers either build or destroy their professional reputation.\n\nBefore the meeting: test your audio and video, find a quiet space, close unrelated browser tabs, and read the agenda if one was shared. During the meeting: camera on for small meetings, microphone muted when not speaking, no phone scrolling, take notes in a notepad. If joining late, do it silently — do not announce yourself mid-discussion.\n\nNever speak over someone. Wait for a natural pause before contributing. If you must leave early, message the organiser beforehand. After the meeting, respond to any action items assigned to you. The rule is simple: treat every meeting as if your career depends on the impression you make — because in the early months, it genuinely does.",
    funFact:
      "Microsoft's Work Trend Index 2023 found that employees attend an average of 3x more meetings than they did in 2020. Standing out as someone who is always prepared and professional in meetings directly accelerates career growth.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "You are in a 10-person project call and you need to cough. What is correct meeting etiquette?",
      options: [
        "Cough loudly — it is natural",
        "Quickly mute yourself, cough, then unmute",
        "Leave the meeting to cough",
        "Ask the organiser to pause",
      ],
      correctAnswer: "Quickly mute yourself, cough, then unmute",
      explanation:
        "Unexpected sounds disrupt meetings for everyone. Muting during natural interruptions shows awareness and respect. This small habit is noticed and appreciated.",
    },
  },
  {
    title: "How to Participate (Not Just Attend) Meetings",
    content:
      "Rahul attended every standup for two months but never spoke unless directly asked. His manager wrote in his review: 'Rahul needs to contribute more actively.' Attending meetings silently is not participation. Meetings are opportunities to demonstrate your understanding and grow your visibility.\n\nBefore the meeting, prepare one relevant question or observation about the agenda topic. Even if you are a fresher, you can say: 'I was reading about this and found that X approach is used by some teams. Is that something we have considered?' This shows initiative without overstepping.\n\nDuring discussions, take brief notes and summarise points aloud: 'So the decision is to use Option B with a two-week deadline — am I understanding correctly?' This is called active listening and it is a power skill. If you disagree, use the phrase 'I may be missing context, but...' before raising your point — it is respectful and keeps the conversation collaborative. Speak up at least once in every meeting you attend.",
    funFact:
      "Research shows that people who speak up at least once in a meeting are perceived as 40% more competent by their peers, regardless of what they actually said. Presence and vocal contribution matter.",
    xpReward: 100,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Acknowledging what was said and confirming understanding aloud during a meeting is called _______ listening.",
      correctAnswer: "active",
      explanation:
        "Active listening means engaging with what is being said — summarising, confirming, and asking clarifying questions. It signals intelligence and professionalism to managers and peers.",
    },
  },
  {
    title: "Saying No Professionally",
    content:
      "Priya said yes to every task her team gave her, even when her plate was overflowing. By week three, she had missed three deadlines. She thought saying no would make her seem lazy. In reality, saying yes to everything and delivering nothing is far worse.\n\nThe professional way to say no is to acknowledge, explain, and offer an alternative. Example: 'I would love to help with that report. I currently have the API integration due by Thursday. Could I pick this up on Friday, or could someone else handle it sooner if it is urgent?' This approach shows self-awareness, responsibility, and teamwork — all at once.\n\nSaying no professionally is a skill, not a personality trait. You need to know your current workload, articulate it clearly, and suggest alternatives. Always loop in your manager if you are getting conflicting priorities from multiple people — it is their job to resolve resource conflicts, not yours to suffer through them silently.",
    funFact:
      "Warren Buffett famously said: 'The difference between successful people and very successful people is that very successful people say no to almost everything.' Strategic use of no protects your ability to do great work.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Your manager and a senior developer both assign you urgent tasks at the same time. What should you do?",
      options: [
        "Pick the one that seems easier and do that first",
        "Tell both you will get to it and attempt both simultaneously",
        "Inform both parties, explain the conflict, and ask your manager to prioritise",
        "Ignore both until they follow up",
      ],
      correctAnswer:
        "Inform both parties, explain the conflict, and ask your manager to prioritise",
      explanation:
        "Priority conflicts need managerial input. Escalating transparently shows maturity and prevents you from making the wrong call. Managers appreciate being kept in the loop.",
    },
  },
  {
    title: "Giving and Receiving Constructive Feedback",
    content:
      "Arjun reviewed Sneha's code and said, 'This is really bad, why did you write it this way?' Sneha shut down and stopped asking for reviews. The problem was not the feedback itself — it was the delivery. In corporate environments, feedback is a professional transaction, not a personal judgment.\n\nWhen giving feedback, use the SBI model: Situation (when this happened), Behaviour (what I observed), Impact (what resulted). Example: 'In yesterday's code review (Situation), the function names were single letters like a, b, c (Behaviour), which made it very difficult for the team to understand the logic quickly (Impact). Could we use descriptive names going forward?' This is direct, specific, and constructive.\n\nWhen receiving feedback, resist the defensive instinct. Say: 'Thank you for pointing that out — could you show me a better approach?' Even if you disagree, acknowledge before responding. Never dismiss feedback publicly. Process it, reflect, and follow up with your improved work. Feedback receptivity is one of the top qualities managers use to identify high-potential employees.",
    funFact:
      "Google's Project Aristotle, which studied 180 teams for years, found that psychological safety — the ability to give and receive feedback without fear — was the single biggest predictor of team success.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Your manager tells you that your last report had three major errors. What is the best response?",
      options: [
        "'I was rushing because you gave me too little time'",
        "'Thank you for the feedback. Could you walk me through the errors so I can fix them and avoid them next time?'",
        "'I will redo it' and walk away",
        "Apologise repeatedly and say it will not happen again",
      ],
      correctAnswer:
        "'Thank you for the feedback. Could you walk me through the errors so I can fix them and avoid them next time?'",
      explanation:
        "Acknowledging feedback and asking to learn from it shows maturity and growth mindset. It transforms criticism into a development opportunity and impresses managers.",
    },
  },
  {
    title: "Managing Your Time: The Eisenhower Matrix",
    content:
      "Rahul spent his entire morning fixing a minor UI colour issue while a critical production bug sat unresolved. He was busy, not productive. The Eisenhower Matrix is a simple tool that changes how you prioritise work.\n\nThe matrix has four quadrants. Quadrant 1 — Urgent and Important: do this immediately (production outages, client escalations, deadlines today). Quadrant 2 — Not Urgent but Important: schedule this (learning, documentation, planning, code reviews). Quadrant 3 — Urgent but Not Important: delegate this if possible (most meeting invites, non-critical emails). Quadrant 4 — Not Urgent and Not Important: eliminate this (social media during work, office gossip).\n\nFreshers spend too much time in Q1 and Q4. The secret to high performance is investing heavily in Q2 — proactive work that prevents Q1 crises. Rahul learned to block two hours every morning for the most important task before checking messages. This one habit made him the most productive member of his team within six months.",
    funFact:
      "President Dwight Eisenhower, who managed two of history's most complex operations — World War II and the US presidency — is credited with this prioritisation method. It is now taught in every top MBA programme.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Writing documentation for a feature you just built — where does this fall in the Eisenhower Matrix?",
      options: [
        "Q1 — Urgent and Important",
        "Q2 — Not Urgent but Important",
        "Q3 — Urgent but Not Important",
        "Q4 — Not Urgent and Not Important",
      ],
      correctAnswer: "Q2 — Not Urgent but Important",
      explanation:
        "Documentation is critical but rarely urgent. Most freshers skip Q2 tasks and wonder why they are always firefighting. Investing in Q2 is what separates good engineers from great ones.",
    },
  },
  {
    title: "Calendar Management: Meetings vs Deep Work",
    content:
      "Priya accepted every meeting invite she received. By Wednesday, she had 6 hours of meetings and zero coding time. She was exhausted and her sprint tasks were stalled. Calendar management is a survival skill in corporate IT.\n\nBlock 'Deep Work' time on your calendar every day — at least two hours of uninterrupted focus for complex tasks. Make these blocks visible to your team so they know not to schedule over them. When you must decline a meeting, respond with: 'I have a prior commitment during that slot. Could I get the notes, or could we find a 15-minute window for just my piece?' This is professional, not rude.\n\nGroup meetings together when possible — back-to-back meetings on Tuesday morning means your Monday afternoon and Wednesday stay clean. Use calendar colours to categorise — red for client calls, blue for internal, green for deep work. The goal is not to avoid meetings; it is to own your time so you can do great work, which is ultimately what you are paid for.",
    funFact:
      "Cal Newport, author of Deep Work, found that 4 hours of deep focused work produces more output than 8 hours of fragmented, interrupted work. Protecting your focus time is not selfish — it is strategic.",
    xpReward: 100,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Blocking uninterrupted time for complex tasks on your calendar is called _______ work time.",
      correctAnswer: "deep",
      explanation:
        "Deep work time is when you make your most significant progress. Protecting this time from meetings and interruptions is a critical career skill for IT professionals.",
    },
  },
  {
    title: "Dealing with Meeting Overload",
    content:
      "Arjun's calendar showed 5 meetings on Thursday — a daily standup, a sprint planning, a client sync, an architecture review, and a team retrospective. That is 6 hours in meetings for a developer whose primary job is building software. Meeting overload is real, and learning to navigate it is essential.\n\nFirst, evaluate every recurring meeting. Is your attendance mandatory or just nice-to-have? Send a message to the organiser: 'I want to make sure I am adding value here. Am I needed for every session or just specific agenda items?' Many meetings will either stop including you or become shorter once you signal awareness.\n\nFor meetings without an agenda, it is professional to reply: 'Could you share a brief agenda before the call so I can come prepared?' This nudges organisers toward better meeting hygiene and positions you as someone serious about productive use of time. If you lead meetings, use the 15-minute rule — if a decision can be made async via a poll or document, do not call a meeting. Most meetings are emails waiting to happen.",
    funFact:
      "Atlassian's research found that 35 billion hours are wasted in unnecessary meetings every year in the US alone, and 91% of employees have daydreamed in a meeting. Meeting overload is an epidemic, and managing it is a superpower.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "You receive a meeting invite with no agenda. What is the most professional response?",
      options: [
        "Decline it immediately",
        "Accept without questioning",
        "Reply asking for a brief agenda so you can come prepared",
        "Forward it to your team",
      ],
      correctAnswer: "Reply asking for a brief agenda so you can come prepared",
      explanation:
        "Asking for an agenda shows professionalism and encourages meeting organisers to plan better. It also ensures you know if your attendance is genuinely required.",
    },
  },
  {
    title: "Single-Tasking vs Multitasking: The Science",
    content:
      "Sneha prided herself on replying to Slack messages while writing code and listening to a meeting. She felt efficient. But her code had bugs, her Slack replies were incomplete, and she retained almost nothing from the meeting. This is the multitasking trap.\n\nNeuroscience is clear: the human brain does not multitask. It task-switches — rapidly shifting focus between tasks. Every switch costs cognitive energy and leaves a 'residue' of the previous task cluttering your working memory. Studies show that multitasking reduces IQ by the equivalent of losing a night of sleep.\n\nSingle-tasking means doing one thing with full attention until it is done or a natural stopping point is reached. It feels slower but is significantly faster. Sneha started using the Pomodoro Technique: 25 minutes of single-task focus, 5 minute break, repeat. Within a month, her code quality improved, her bug count dropped, and her manager noticed. The best tool for productivity is focus — and focus is a choice.",
    funFact:
      "A study from the University of California found that after an interruption, it takes an average of 23 minutes to fully return to the original task. Even one notification can destroy an hour of deep work.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul codes for 25 minutes, rests for 5, codes again for 25. What productivity technique is this?",
      options: [
        "Time boxing",
        "Eisenhower Method",
        "Pomodoro Technique",
        "GTD — Getting Things Done",
      ],
      correctAnswer: "Pomodoro Technique",
      explanation:
        "The Pomodoro Technique breaks work into focused 25-minute sprints with short breaks. It leverages single-tasking and prevents mental fatigue, significantly improving code quality and output.",
    },
  },
  {
    title: "Work-Life Balance: Setting Boundaries Early",
    content:
      "Rahul answered work messages at midnight, skipped lunch, and worked weekends to 'prove himself'. After four months he was burned out, resentful, and had started making errors. His manager, noticing the decline, had to intervene. Overworking in your first months sets a precedent that is very hard to reverse.\n\nSetting boundaries early is not laziness — it is sustainability. Communicate your availability clearly: 'I am available from 9 AM to 7 PM on weekdays. For urgent production issues I am reachable, but routine messages will be answered the next morning.' Most mature managers respect this. Managers who do not respect basic boundaries are a red flag worth evaluating.\n\nBuilding recovery time into your week — exercise, hobbies, time with family — directly improves cognitive performance at work. Companies that demand 24/7 availability are sacrificing the quality of your output for the illusion of effort. Your best work comes from a rested, motivated mind. Protect it.",
    funFact:
      "Microsoft's 2021 research found that employees who overwork consistently show measurable declines in problem-solving ability within 4-6 weeks. Sustainable performance requires genuine rest.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Your manager sends work messages at 10 PM daily. You want to set a boundary. What is the professional approach?",
      options: [
        "Ignore the messages and hope they stop",
        "Reply immediately to every message to show dedication",
        "Have a calm 1:1 conversation clarifying your availability and agreeing on urgent escalation paths",
        "Complain to HR immediately",
      ],
      correctAnswer:
        "Have a calm 1:1 conversation clarifying your availability and agreeing on urgent escalation paths",
      explanation:
        "Professional boundary-setting requires a direct, respectful conversation. Most managers do not realise their impact until it is raised. Offering a clear escalation path for genuine urgency makes the boundary easy to accept.",
    },
  },
  {
    title: "Team Dynamics: Understanding Your Role",
    content:
      "Priya joined a 7-person Agile team and immediately started challenging every design decision in sprint planning. Her ideas were good, but her timing and approach alienated her teammates. Understanding team dynamics before asserting yourself is crucial for freshers.\n\nEvery team has formal roles (developer, QA, scrum master) and informal roles (the planner, the communicator, the tech lead, the culture keeper). When you join, your first goal is to understand these dynamics — who do people go to for decisions? Who keeps morale high? Who is the technical authority? Respecting these existing dynamics while finding your place takes patience.\n\nAs a fresher, your initial role is contributor and learner. Earn trust through consistent delivery. Build relationships by helping teammates without being asked. Ask questions that show curiosity, not ones that challenge authority. Once you have built credibility — usually in 3-6 months — your voice carries much more weight. Priya learned this the hard way but eventually became her team's most respected contributor.",
    funFact:
      "Google's Aristotle Project studied 180 teams and found that who is on the team matters less than how the team interacts. Freshers who master team dynamics advance faster than those who focus only on technical skills.",
    xpReward: 100,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "As a fresher, your initial team role is _______ and learner — contributing reliably before asserting strong opinions.",
      correctAnswer: "contributor",
      explanation:
        "Starting as a reliable contributor and learner allows you to earn trust and understand team context. This foundation makes your future contributions far more effective and well-received.",
    },
  },
  {
    title: "Working with Cross-Functional Teams",
    content:
      "Arjun's task required coordination with the UI team, the data team, and the DevOps team. He completed his backend code but forgot to align with DevOps on the deployment configuration. The release failed on day one. Cross-functional collaboration is one of the most critical skills in modern IT.\n\nCross-functional teams bring together people with different specialities toward a shared goal. The challenge is that each function has its own terminology, priorities, and workflows. A developer prioritises feature completeness; a QA engineer prioritises stability; a DevOps engineer prioritises reliability. Conflicts arise when these priorities collide without communication.\n\nBest practices: identify all stakeholders at the start of your task, schedule short sync calls early rather than late, document decisions so everyone has the same understanding, and escalate blockers early. The phrase 'I was waiting for them to reach out' is not an excuse in cross-functional work — you own the coordination. Arjun's second release was flawless because he scheduled a 15-minute cross-team sync three days before the release date.",
    funFact:
      "McKinsey research found that companies with highly collaborative cross-functional teams are 5x more likely to deliver projects on time and within budget. Communication is literally the most valuable engineering tool.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "You have a feature ready but it needs database migration from the DBA team and infrastructure changes from DevOps. When should you start coordinating?",
      options: [
        "The day before the release",
        "After your feature code is fully tested and merged",
        "At the start of the sprint, as soon as the task is assigned",
        "Only if there are blockers",
      ],
      correctAnswer:
        "At the start of the sprint, as soon as the task is assigned",
      explanation:
        "Early coordination prevents last-minute blockers. DBA and DevOps teams have their own queues. Flagging dependencies early ensures they have time to prepare without rushing.",
    },
  },
  {
    title: "Remote Work Best Practices for IT Freshers",
    content:
      "Sneha started her IT job fully remote. Within a month, she felt invisible. Her manager could not gauge her progress, her teammates did not know her, and she was not getting the informal mentoring that happens naturally in offices. Remote work requires deliberate effort to remain visible and connected.\n\nSet up a dedicated workspace — not your bed. Dress appropriately for video calls; appearing professional signals to your own brain that it is work time. Over-communicate your progress: send a brief daily update to your manager even if not asked — 'Today I completed X, tomorrow I will work on Y, current blockers: none.' This replaces the casual visibility of office presence.\n\nProactively reach out for virtual coffees and pair-programming sessions. Join team Slack channels actively. Respond to messages promptly during work hours. Use video in meetings — remote workers who keep cameras on are perceived as more engaged and advance faster. Remote work rewards those who are intentional about connection and communication, not just those who work hard in isolation.",
    funFact:
      "Buffer's State of Remote Work 2023 found that 22% of remote workers struggle most with loneliness and 19% with collaboration. Freshers in remote roles who proactively build relationships are 60% more likely to receive strong performance ratings.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "You are working remotely and your manager asks how things are going. You have not shared any updates in a week. What is the best proactive habit to adopt?",
      options: [
        "Send updates only when asked",
        "Send a daily end-of-day message with completed work, next day plan, and blockers",
        "Wait for weekly team meetings to share progress",
        "Assume your commits and Jira updates are enough",
      ],
      correctAnswer:
        "Send a daily end-of-day message with completed work, next day plan, and blockers",
      explanation:
        "In remote settings, managers cannot see your effort. Daily updates replace the visibility of office presence and build trust rapidly, which is critical for freshers establishing their reputation.",
    },
  },
  {
    title: "Handling Difficult Colleagues Professionally",
    content:
      "Rahul's colleague, a senior developer, dismissed his ideas in every meeting and often took credit for Rahul's solutions in client presentations. Rahul was furious but did not know how to address it without seeming confrontational. Handling difficult colleagues is an inevitable part of corporate life.\n\nStep one: address the behaviour, not the person, in a private conversation. Example: 'Hey, in yesterday's client call, the caching approach I shared in our team discussion was presented without mentioning my contribution. I would appreciate being credited when my ideas are used publicly.' This is specific, calm, and professional.\n\nIf the behaviour continues, escalate to your manager factually — not emotionally. Document incidents with dates and specifics. Avoid venting to other colleagues, as gossip travels fast and damages your own reputation more than the difficult colleague's. Focus on your own output quality; your work will speak for itself. Most importantly, never let a difficult colleague derail your attitude — your professionalism in adversity is what managers remember most.",
    funFact:
      "A study by the American Psychological Association found that one toxic team member can reduce team performance by up to 30-40%. Learning to navigate difficult people is as important as any technical skill.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A colleague regularly interrupts you and dismisses your ideas in meetings. What is your first step?",
      options: [
        "Start interrupting them back",
        "Complain to your manager immediately",
        "Have a private, calm conversation addressing the specific behaviour and its impact",
        "Avoid speaking in meetings to reduce conflict",
      ],
      correctAnswer:
        "Have a private, calm conversation addressing the specific behaviour and its impact",
      explanation:
        "Direct, private conversations resolve most interpersonal issues before they escalate. Specific feedback about behaviour — not character — is harder to dismiss and more likely to create change.",
    },
  },
  {
    title: "Team Retrospectives: Reflecting and Improving",
    content:
      "At the end of every two-week sprint, Priya's team held a retrospective. She initially saw it as a waste of time until her lead explained: a team that never reflects is a team that keeps making the same mistakes. Retrospectives are one of the most powerful improvement tools in Agile.\n\nThe standard retrospective format asks three questions: What went well? What did not go well? What should we do differently next sprint? The goal is not blame — it is collective improvement. When you share what did not go well, frame it as a team challenge: 'Our test environment keeps being unavailable which slows QA. Can we allocate dedicated QA infrastructure?' Not 'the DevOps team keeps breaking things.'\n\nAs a fresher, actively participate in retros. Share one genuine observation, even if small. Listen to patterns that repeat — they reveal the team's real bottlenecks. If your team does not hold retrospectives, suggest them. Teams that retro regularly ship 20-30% faster because they address root causes instead of repeatedly fighting the same fires.",
    funFact:
      "Spotify's engineering culture — widely studied in the industry — attributes much of its delivery speed to ruthless retrospective discipline. Their teams run retros even after successful sprints to find ways to improve further.",
    xpReward: 100,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Retrospectives ask: what went well, what did not go well, and what should we do _______ next sprint?",
      correctAnswer: "differently",
      explanation:
        "The three retro questions drive continuous improvement. The 'do differently' question turns reflections into actionable commitments, which is what separates teams that improve from teams that complain.",
    },
  },
  {
    title: "Setting Career Goals: The SMART Framework",
    content:
      "Arjun told his manager 'I want to grow in my career' during his first one-on-one. His manager asked: 'What does that mean specifically?' Arjun had no answer. Vague aspirations produce vague results. The SMART framework transforms wishes into achievable plans.\n\nSMART goals are Specific (exactly what you want), Measurable (how you will know you achieved it), Achievable (realistic given your resources), Relevant (aligned with your career direction), and Time-bound (with a clear deadline). Compare: 'I want to be better at cloud' vs 'I want to earn the AWS Cloud Practitioner certification by June 30th by studying 45 minutes daily.'\n\nWrite your SMART goals at the start of each quarter and review them monthly. Share them with your manager — this signals ambition and makes your manager an ally in your growth. Arjun's first SMART goal was: 'Complete 3 Python automation scripts for internal tools by the end of the quarter.' He nailed it, mentioned it in his performance review, and got an Exceptional rating from a manager who had previously seen him as directionless.",
    funFact:
      "Research published in the Journal of Applied Psychology found that people who write specific, time-bound goals are 33% more likely to achieve them than those with general intentions.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question: "Which goal is SMART?",
      options: [
        "I want to learn DevOps",
        "I want to get better at coding this year",
        "I will complete the Docker fundamentals course on Udemy and deploy one containerised app on AWS by March 31st",
        "I should improve my technical skills",
      ],
      correctAnswer:
        "I will complete the Docker fundamentals course on Udemy and deploy one containerised app on AWS by March 31st",
      explanation:
        "This goal is Specific (Docker + deployment), Measurable (course completed + app deployed), Achievable (one course + one project), Relevant (IT skill), and Time-bound (March 31st). Every element of SMART is satisfied.",
    },
  },
  {
    title: "Your First Performance Review",
    content:
      "Sneha received her first performance review with no preparation. Her manager mentioned a missed deadline from two months ago that Sneha had forgotten. She had no record of her achievements to counter-balance it. She left the review feeling deflated despite having done genuinely good work. Preparation changes everything.\n\nStart a 'wins document' from your very first week — a running list of tasks completed, problems solved, feedback received, and improvements made. Before your review, summarise the highlights and share them with your manager as a 'self-assessment'. Most review systems include a formal self-assessment anyway — take it seriously.\n\nDuring the review, ask two questions: 'What should I focus on to perform at the next level?' and 'What do you wish I did more or less of?' These questions signal growth mindset and give you a concrete development roadmap. Disagree calmly with assessments you believe are factually incorrect, supporting your position with your wins document. After the review, send a brief email summarising the agreed action points — this creates accountability and protects you.",
    funFact:
      "A LinkedIn Workplace Learning report found that 94% of employees say they would stay at a company longer if it invested in their career development. Your performance review is your primary tool for securing that investment.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What should Sneha maintain from Day 1 to ensure she is well-prepared for her performance review?",
      options: [
        "A list of her colleagues' mistakes for comparison",
        "A wins document tracking tasks completed, problems solved, and feedback received",
        "Emails from her manager praising her",
        "A diary of all meetings attended",
      ],
      correctAnswer:
        "A wins document tracking tasks completed, problems solved, and feedback received",
      explanation:
        "A wins document gives you concrete, specific evidence of your contributions. Without it, reviews are based on recent memory — which is often dominated by the most recent events, not your best work.",
    },
  },
  {
    title: "Asking for a Raise: Timing and Strategy",
    content:
      "Rahul asked for a raise the week his team missed a major sprint delivery. He was turned down and it damaged his relationship with his manager. The request was not wrong — the timing and preparation were. Asking for a raise is a business negotiation, not an emotional plea.\n\nTime your request strategically: after a successful project delivery, after a strong performance review, or when you have recently taken on significantly expanded responsibilities. Never ask during crisis periods, before your annual review cycle, or right after a visible mistake.\n\nPrepare a business case, not an emotional argument. Document your contributions: 'Since my last review, I have delivered X, led Y, and reduced Z by N%. I would like to discuss an adjustment in my compensation to reflect these expanded contributions.' Research market rates for your role on platforms like Glassdoor, AmbitionBox, or Levels.fyi. Know your number before the conversation. If the answer is no, ask specifically: 'What would need to happen for a raise to be reconsidered, and when would that be reviewed?' This creates a clear roadmap.",
    funFact:
      "An analysis by Salary.com found that employees who negotiate their first salary earn on average $5,000-$10,000 more per year. Over a career, not negotiating costs an average of $600,000 in lifetime earnings.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question: "When is the ideal time to ask for a raise?",
      options: [
        "As soon as you feel underpaid",
        "After a successful project delivery with documented contributions",
        "During your company's busiest period",
        "Right after your teammate gets promoted",
      ],
      correctAnswer:
        "After a successful project delivery with documented contributions",
      explanation:
        "Strategic timing — when your value is most visible — significantly increases the chance of a yes. Coupling timing with documented evidence transforms the conversation from a request into a business case.",
    },
  },
  {
    title: "Building Your Personal Brand at Work",
    content:
      "Priya was an excellent developer but almost nobody outside her immediate team knew her name. When a high-visibility project opened up, her manager did not think to nominate her. Your personal brand at work determines which opportunities find you, not just how you perform in the ones you already have.\n\nBuilding a work brand means being associated with a specific expertise or quality. Choose two things you want to be known for — maybe 'Python automation' and 'clear documentation'. Then actively demonstrate these: volunteer for relevant tasks, share learnings in team channels, write a short internal blog post about something you solved, present your work in team demos.\n\nVisibility compounds. Priya started sharing a weekly 'Friday learning' message in her team channel — a short practical tip from her week. Within two months, her name was known across three teams. She was invited to the high-visibility project. Building a brand is not about self-promotion; it is about consistently delivering value in visible ways.",
    funFact:
      "Amazon's leadership culture explicitly rewards 'Insist on the Highest Standards' and 'Deliver Results' as visible behaviours, not just outputs. Personal brand is built by consistently demonstrating observable standards.",
    xpReward: 100,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Building a personal brand means being associated with a specific _______ or quality that you consistently demonstrate.",
      correctAnswer: "expertise",
      explanation:
        "Personal brand is about being reliably known for something specific and valuable. Expertise-based brands — built through consistent visible contribution — open career opportunities that skill alone does not.",
    },
  },
  {
    title: "Finding and Working with Mentors",
    content:
      "Arjun wanted a mentor but did not know how to ask. He awkwardly emailed a senior engineer: 'Will you be my mentor?' The engineer, not knowing what that meant in terms of time commitment, never replied. The approach was wrong, not the desire. Finding and activating a mentor relationship is a skill.\n\nInstead of a formal request, start with a specific ask: 'I am working on my first CI/CD pipeline setup and I found your talk on the internal wiki really helpful. Would you have 20 minutes sometime to share any pitfalls I should avoid?' A specific, low-commitment request is almost always granted. After that first conversation, follow up with what you did with the advice. Ask for one more meeting. Relationships build naturally from there.\n\nA great mentor can accelerate your learning by years. They give you the unwritten rules, introduce you to their network, and advocate for you in rooms you are not in. Look for mentors inside and outside your team — a senior in another division gives you perspective your immediate manager cannot. Nurture these relationships by adding value: share articles, send updates on your progress, and acknowledge their impact on your career.",
    funFact:
      "A study by Sun Microsystems found that employees who had mentors were promoted 5x more often than those without mentors, and were 20% more likely to get salary increases. Mentorship is the highest-ROI career investment.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "How should Priya first approach a potential mentor she admires?",
      options: [
        "'Will you be my mentor?' in a cold email",
        "A specific, low-commitment ask: 'Would you have 20 minutes to share your experience with X?'",
        "Ask their manager to assign them as her mentor",
        "Follow their work silently and hope they notice her",
      ],
      correctAnswer:
        "A specific, low-commitment ask: 'Would you have 20 minutes to share your experience with X?'",
      explanation:
        "Specific, low-commitment asks are almost always granted. They demonstrate preparation and respect for the mentor's time. Formal mentor requests feel high-commitment and often go unanswered.",
    },
  },
  {
    title: "Understanding Office Politics",
    content:
      "Sneha declared she 'hated politics' and refused to engage in any workplace dynamics. Six months in, she was blindsided when a colleague she had ignored was promoted over her and became her team lead. Office politics is not about manipulation — it is about understanding how influence, decisions, and relationships actually work in your organisation.\n\nPolitics exists in every organisation because decisions are made by humans, and humans are influenced by relationships, history, and perception. Ignoring this is not purity — it is naivety. Understand who makes decisions, what each influential person values, and how information flows. Observe which voices carry weight in meetings and why.\n\nThe healthy way to navigate politics: build genuine relationships, deliver excellent work consistently, remain neutral in interpersonal conflicts, align your work with organisational goals, and communicate your contributions upward. Never gossip, never take sides publicly, and never speak negatively about colleagues to others. Your reputation for integrity is more valuable than any short-term political win.",
    funFact:
      "A study in the Journal of Organisational Behaviour found that employees who understand and navigate office politics ethically earn on average 15% more and are promoted 2x faster than those who disengage from organisational dynamics entirely.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Two senior managers have a visible conflict. Both ask Rahul for his opinion on the other person. What should Rahul do?",
      options: [
        "Align with the more senior of the two managers",
        "Share honest opinions to seem trustworthy",
        "Remain neutral and avoid taking sides publicly — focus on work",
        "Report the conflict to HR",
      ],
      correctAnswer:
        "Remain neutral and avoid taking sides publicly — focus on work",
      explanation:
        "Taking sides in senior conflicts is high-risk for freshers. The conflict may resolve, and you will be stuck with the label of having taken a side. Neutrality preserves your relationships with both parties.",
    },
  },
  {
    title: "Conflict Resolution at Work",
    content:
      "Rahul and Priya disagreed strongly on the architecture for a new microservice. The disagreement escalated into tension that affected the whole team's energy. Conflict in teams is inevitable — how it is resolved determines whether it becomes growth or dysfunction.\n\nStep one: separate the technical disagreement from the personal relationship. The conflict is about ideas, not people. Approach Priya privately: 'I think we both want the best outcome for the project. Could we sit down and walk through both approaches together, including tradeoffs?' This reframes conflict as collaboration.\n\nUse objective criteria to resolve technical disagreements: performance benchmarks, cost analysis, maintainability scoring, or industry standards. If the disagreement cannot be resolved between the two of you, agree to bring it to a neutral third party — typically your tech lead or architect. Document the agreed solution and move forward. After resolution, check in with the person: 'I am glad we worked through that — I think we ended up in a better place.' This rebuilds rapport and prevents residual tension.",
    funFact:
      "The Thomas-Kilmann Conflict Model identifies 5 conflict styles: competing, accommodating, avoiding, compromising, and collaborating. Studies show that 'collaborating' produces the best long-term outcomes in technical teams.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul and Priya cannot agree on a technical approach after a direct discussion. What is the best next step?",
      options: [
        "Rahul unilaterally implements his approach since he feels he is right",
        "The disagreement stays unresolved to avoid escalation",
        "Both agree to bring the decision to a neutral tech lead or architect with documented tradeoffs",
        "Priya should defer since Rahul has been at the company longer",
      ],
      correctAnswer:
        "Both agree to bring the decision to a neutral tech lead or architect with documented tradeoffs",
      explanation:
        "Escalating with documented tradeoffs is the professional resolution path. It takes egos out of the decision, produces a reasoned outcome, and preserves the relationship between both engineers.",
    },
  },
  {
    title: "Ethics at Work: Whistleblowing and Confidentiality",
    content:
      "Arjun discovered that his manager was sharing proprietary client data with a competitor. He was terrified about what to do — report it and risk his job, or stay silent and be complicit. This is not a rare scenario. Ethics at work means knowing what to do when doing the right thing is uncomfortable.\n\nConfidentiality means protecting your company's and clients' information — code, business plans, salaries, client databases, internal communications. Sharing these without authorization is a breach that can result in termination and legal action. Always ask: 'Am I authorised to share this, and with whom?' If unsure, do not share.\n\nWhistleblowing means reporting unethical or illegal conduct through appropriate channels — typically HR, a compliance hotline, or senior leadership outside your reporting chain. Most companies have whistleblower protection policies that prevent retaliation. Document everything before reporting: dates, descriptions, evidence. If internal channels are compromised, external options include regulatory authorities. Arjun reported the incident to HR with his documented evidence. His manager was investigated, and Arjun was protected. Doing the right thing, done professionally, is almost always the best long-term choice.",
    funFact:
      "The Whistleblower Protection Act in the US and similar laws globally protect employees who report workplace misconduct. Over 40% of corporate fraud is detected through internal employee reports, not external audits.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "You notice a colleague copy-pasting customer data into a personal spreadsheet and emailing it to an external address. What should you do?",
      options: [
        "Ignore it — it is not your business",
        "Confront the colleague loudly in the office",
        "Document what you observed and report it to HR or your manager through proper channels",
        "Email the customer yourself to warn them",
      ],
      correctAnswer:
        "Document what you observed and report it to HR or your manager through proper channels",
      explanation:
        "Data breaches have legal and reputational consequences for the company and its clients. Reporting through proper channels with documentation is the professional and ethical response.",
    },
  },
  {
    title: "Harassment Policies and Your Rights",
    content:
      "Sneha's colleague made repeated comments about her appearance that made her uncomfortable. She did not know if it 'counted' as harassment or what she could do. Many freshers suffer silently because they do not know their rights or the processes available to them.\n\nWorkplace harassment includes unwelcome comments, jokes, physical contact, or behaviour related to gender, caste, religion, race, disability, or sexual orientation. In India, the POSH Act (Prevention of Sexual Harassment) requires every organisation with 10+ employees to have an Internal Complaints Committee (ICC). This committee handles complaints confidentially and both parties have rights during the process.\n\nIf you experience harassment: document every incident with date, time, witnesses, and description. Report to your ICC, HR, or a trusted senior — you are protected from retaliation by law. If your organisation lacks proper mechanisms, external authorities and labour boards can be approached. Harassment of any kind is never acceptable, never your fault, and the system exists to protect you. Sneha filed a formal complaint, the behaviour stopped, and she retained her position with full support from HR.",
    funFact:
      "The POSH Act 2013 in India covers all women employees including interns, contract workers, and remote workers. Every IT company with 10 or more employees is legally required to comply. Knowing this law empowers you.",
    xpReward: 100,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In India, the _______ Act requires companies to have an Internal Complaints Committee for handling workplace sexual harassment complaints.",
      correctAnswer: "POSH",
      explanation:
        "The POSH (Prevention of Sexual Harassment) Act 2013 is India's primary legal protection for employees facing harassment at work. Knowing this law helps you understand your rights and the process available to you.",
    },
  },
  {
    title: "Corporate Skills Capstone: Your 1-Year Career Roadmap",
    content:
      "Congratulations — you have completed all 30 Corporate Skills lessons. Now it is time to build your personal 1-Year Career Roadmap. This is the project that will make your learning tangible, actionable, and impressive to any interviewer or mentor.\n\nYour roadmap has four quarterly milestones. Q1 (0-3 months): Master your team's tools and processes, complete 2 SMART professional goals, build one genuine mentor relationship, and maintain a wins document. Q2 (3-6 months): Lead one initiative or own one feature end-to-end, present in at least one team demo, resolve a cross-functional challenge independently, and earn one technical certification. Q3 (6-9 months): Mentor a newer joiner, contribute to one internal process improvement, build visible expertise in one domain through sharing or writing, and negotiate your first professional growth conversation. Q4 (9-12 months): Prepare a comprehensive self-assessment for your annual review with quantified achievements, identify your next role or promotion target, and set SMART goals for Year 2.\n\nDocument this roadmap in a personal Notion page, Google Doc, or GitHub wiki. Review it monthly. Share it with your mentor. This single document demonstrates more corporate maturity than most freshers show in their entire first year.",
    funFact:
      "LinkedIn data shows that professionals who set and document career goals in their first year earn 25% more after 5 years compared to those who navigate their careers reactively. Your roadmap is an investment in your future self.",
    xpReward: 200,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya is in her 6th month. According to the 1-Year Roadmap, what should she focus on in Q2 (months 3-6)?",
      options: [
        "Staying quiet and observing team dynamics",
        "Leading one initiative, presenting in a demo, resolving cross-functional challenges, and earning a certification",
        "Asking for a raise and a promotion",
        "Completing all remaining Jira backlog tasks",
      ],
      correctAnswer:
        "Leading one initiative, presenting in a demo, resolving cross-functional challenges, and earning a certification",
      explanation:
        "Q2 is when you transition from learner to contributor-leader. Taking ownership of initiatives, building visibility through presentations, and earning certifications are the hallmarks of a high-potential fresher in their first six months.",
    },
  },
];
