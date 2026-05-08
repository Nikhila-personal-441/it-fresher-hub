// GitHub module - 35 scenario-based lessons for IT Fresher Hub
import type { LessonContent } from "@/types";

export const GITHUB_LESSONS: LessonContent[] = [
  {
    title: "What is Version Control and Why Every Developer Needs It",
    content:
      "Rahul just joined his first IT job at a startup. On Day 3, his senior Priya asked him to 'fix the login bug in the latest version of the app.' Rahul opened his laptop, found three folders named 'project_final', 'project_final_v2', and 'project_final_REALLYFINAL' — and had no idea which one was actual latest code. Sound familiar? This is exactly the chaos version control solves.\n\nVersion control is like a time machine for your code. Every time you save a 'version', the system remembers exactly what changed, who changed it, and when. If a bug slips in, you can rewind to yesterday's clean version in seconds. If two developers work on the same file, the system smartly merges their changes without overwriting each other's work.\n\nGit is the world's most popular version control system, created by Linus Torvalds (the same person who built Linux) in 2005. GitHub is the cloud platform where teams host their Git repositories online. Together, they're used by over 100 million developers worldwide. Knowing Git and GitHub isn't optional for an IT career — it's as essential as knowing how to use email.",
    funFact:
      "Git was created in just 10 days by Linus Torvalds in April 2005 after the Linux kernel community lost access to their previous version control tool. He wrote a replacement so fast it shocked the entire programming world.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul accidentally deleted the working login feature while coding. With version control, what is the fastest fix?",
      options: [
        "Rewrite the entire feature from memory",
        "Call Priya and ask her to resend the file",
        "Revert to the last saved version using version control",
        "Leave the bug and submit anyway",
      ],
      correctAnswer: "Revert to the last saved version using version control",
      explanation:
        "Version control lets you instantly roll back to any previous saved state. One command restores yesterday's working code — no manual rewriting needed. This is the single biggest reason every developer must use version control.",
    },
  },
  {
    title: "Installing Git on Your Computer",
    content:
      "Before Rahul could impress his team with Git skills, he needed to install it. It's a one-time setup and takes under 5 minutes. On Windows, download the installer from git-scm.com, run it, and use all the default options — the defaults are fine for beginners. On Mac, open Terminal and type xcode-select --install, which installs Git along with Apple's developer tools. On Linux (Ubuntu/Debian), run sudo apt install git in your terminal.\n\nAfter installing, the most important step is configuration. Git needs to know WHO you are so every commit is signed with your name. Run these two commands in any terminal: git config --global user.name \"Your Name\" and git config --global user.email \"you@example.com\". Use the same email you'll use for your GitHub account — this links your commits to your profile.\n\nVerify everything worked by running git --version in your terminal. You should see something like git version 2.42.0. If you see a version number, you're ready to start. Rahul saw git version 2.41.0 and felt his first rush of developer pride — that blinking cursor in a terminal is where real coding careers begin.",
    funFact:
      "Git is installed on over 1 billion developer machines worldwide. The word 'git' is British slang for 'an unpleasant person' — Linus Torvalds jokingly named it after himself, saying he names projects after himself.",
    xpReward: 50,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "After installing Git, Rahul types ___ in the terminal to verify the installation was successful.",
      correctAnswer: "git --version",
      explanation:
        "The command 'git --version' prints the installed Git version (like 'git version 2.42.0'). If Git isn't installed, you get an error instead. Always verify installations — it saves debugging time later.",
    },
  },
  {
    title: "git init: Starting Your First Repository",
    content:
      "Rahul created a new folder for his first solo project — a simple employee attendance tracker. He opened the terminal, navigated into the folder, and ran one magic command: git init. Instantly, Git created a hidden .git folder inside his project directory. That hidden folder IS the repository — it stores your entire history, all branches, all commits. Never delete the .git folder or your history is gone.\n\nAfter git init, Git is watching the folder but hasn't recorded anything yet. Think of it like hiring a security camera — it's installed and ready, but hasn't captured any footage. Your files are 'untracked', meaning Git sees them but isn't managing them yet. Run git status and you'll see all your files listed in red under 'Untracked files'.\n\nHere's the full workflow Rahul used: mkdir attendance-tracker to create the folder, cd attendance-tracker to enter it, git init to start tracking. Git responds with 'Initialized empty Git repository in .../attendance-tracker/.git/' — that confirmation message means your project is now under version control. From this point, every save you tell Git about becomes a permanent part of your project's history.",
    funFact:
      "The .git folder is hidden by default on all operating systems. On Mac/Linux, run ls -la to see hidden files. On Windows, enable 'Show hidden files' in File Explorer. This folder can be tiny (a few KB) for small projects or gigabytes for large ones like the Linux kernel.",
    xpReward: 50,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Rahul creates a new project folder. The command he must run inside that folder to start Git tracking is ___.",
      correctAnswer: "git init",
      explanation:
        "git init initializes a new Git repository in the current directory by creating a hidden .git folder. This is always the first Git command you run in a new project — it sets up everything Git needs to start tracking changes.",
    },
  },
  {
    title: "Your First Commit: Saving Your Work",
    content:
      "Rahul wrote his first Python file for the attendance tracker. Now he wanted Git to remember this version forever. In Git, saving is a two-step process: staging and committing. Think of it like packing a box before shipping — you first decide what goes in the box (staging), then you seal it and label it (committing).\n\nStep 1 — Stage your files: Run git add filename.py to add one file, or git add . (with a dot) to add everything. The dot means 'all files in this folder and subfolders'. Staging lets you be selective — maybe you only want to commit your finished feature, not the half-written experimental code in another file.\n\nStep 2 — Commit with a message: Run git commit -m \"Add attendance tracker base code\". The -m flag lets you write your commit message inline. Every commit must have a message — it's the label on your box that tells future-you (and your teammates) what this version contains. Rahul typed his first commit and saw: '1 file changed, 47 insertions(+)'. That output shows Git recorded 47 lines of new code. His code was now saved in history forever — even if he deleted every file from the folder, Git could restore it.",
    funFact:
      "The word 'commit' in Git terminology comes from database terminology — 'committing' a transaction makes it permanent and irreversible. Once you commit in Git, that version is saved forever in your local history (unless you explicitly rewrite history, which is advanced and risky).",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul edited 5 files but only wants to commit 2 of them. Which commands should he use?",
      options: [
        "git add . then git commit -m 'message'",
        "git add file1.py file2.py then git commit -m 'message'",
        "git commit file1.py file2.py -m 'message'",
        "git save file1.py file2.py",
      ],
      correctAnswer: "git add file1.py file2.py then git commit -m 'message'",
      explanation:
        "git add lets you selectively stage specific files. By naming only file1.py and file2.py, only those 2 files go into the commit. The other 3 edited files remain unstaged and won't be part of this commit — perfect for keeping commits focused and clean.",
    },
  },
  {
    title: "git status and git log: Understanding Your History",
    content:
      "Rahul had been coding for a week and made multiple commits. But he was confused — which files had he changed since his last commit? And what were all his commits so far? Two commands answered everything: git status and git log.\n\ngit status shows the current state of your working directory. Files in red are modified but not staged. Files in green are staged and ready to commit. If it says 'nothing to commit, working tree clean', your code matches the last commit perfectly. Rahul ran it and saw attendance.py in red — he'd edited it but not staged it yet. This command is your 'sanity check' — run it before every add and commit.\n\ngit log shows your full commit history. Each entry shows: a commit hash (long alphanumeric ID like a3f2d9c), the author's name and email, the date and time, and the commit message. For cleaner output, use git log --oneline which shows one line per commit. Rahul saw his 5 commits listed in reverse order (newest first): a3f2d9c Add CSV export feature, 8b1c4e2 Fix attendance calculation bug, etc. That history told the whole story of his project in seconds.",
    funFact:
      "Every Git commit has a unique 40-character SHA-1 hash like 'a3f2d9c6e1234...'. This hash is calculated from the file contents, your name, the timestamp, and the parent commit. If any of those change even slightly, the hash changes completely — which is why Git history is tamper-proof.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants a quick one-line summary of all his previous commits. Which command gives him that?",
      options: [
        "git status --summary",
        "git log --oneline",
        "git history --short",
        "git commits --list",
      ],
      correctAnswer: "git log --oneline",
      explanation:
        "git log --oneline shows each commit on a single line with its shortened hash and message. Perfect for quickly scanning your project history. The full 'git log' shows complete details but can be overwhelming — --oneline is the practical everyday version.",
    },
  },
  {
    title: "Creating Your GitHub Account and Profile",
    content:
      "After a week of local Git practice, Rahul's manager Arjun told him: 'Post your code on GitHub — that's where the team reviews everything.' GitHub is the cloud home for Git repositories. Think of Git as your local photo album and GitHub as Google Photos — your photos (code) live on your device AND in the cloud, accessible from anywhere, shareable with anyone.\n\nCreating an account: Go to github.com, click 'Sign up', enter your email (use a professional one — this account will be on your resume), choose a username carefully (it becomes your URL: github.com/your-username), and complete email verification. Your username is your developer brand — Rahul chose 'rahul-dev' to keep it professional and memorable.\n\nYour profile is your developer resume. Fill in your bio ('Java developer | IT Fresher | Building attendance tools'), add your location, and link your LinkedIn. A profile photo makes your profile 5x more likely to be viewed by recruiters. Rahul spent 20 minutes polishing his profile and within a month, two recruiters messaged him based on his GitHub alone. Your GitHub profile speaks louder than any resume bullet point — it shows real work, not just words.",
    funFact:
      "GitHub was founded in 2008 and acquired by Microsoft in 2018 for $7.5 billion. Today it hosts over 330 million repositories and is used by 100+ million developers. When you apply for IT jobs, most companies will Google your name — a polished GitHub profile is often the first thing they find.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul is choosing his GitHub username. Which option is most professional and career-appropriate?",
      options: [
        "xXRahul_coolcoder_2003Xx",
        "rahul-iyer-dev",
        "coderboy123456",
        "r@hul.java",
      ],
      correctAnswer: "rahul-iyer-dev",
      explanation:
        "GitHub usernames become your public URL and developer identity. Professional names use hyphens, include your actual name, and optionally a skill. Avoid numbers, special characters (@ doesn't work), and generic names. Recruiters DO check GitHub — your username is your first impression.",
    },
  },
  {
    title: "Creating a Repository on GitHub",
    content:
      "Rahul wanted to put his attendance tracker on GitHub. On GitHub, a 'repository' (repo) is a project folder stored in the cloud with full version history. Creating one takes 30 seconds. Click the '+' icon at the top right of GitHub, select 'New repository', give it a name (use lowercase with hyphens: attendance-tracker), add a description ('Employee attendance tracker built in Python'), choose Public or Private, and click 'Create repository'.\n\nPublic vs Private: Public repos are visible to everyone — great for portfolio projects you want employers to see. Private repos are only visible to you and people you invite — use these for work projects or anything confidential. Rahul made his attendance tracker public since it was his personal learning project.\n\nAfter creation, GitHub shows you setup instructions. Since Rahul already had a local Git repo, he followed the 'push an existing repository' path. GitHub gave him two commands: git remote add origin https://github.com/rahul-iyer-dev/attendance-tracker.git and git push -u origin main. The first command tells his local Git 'the cloud version of this project lives at THIS URL'. The second uploads everything. 'Origin' is just the nickname for your GitHub remote — you'll see it everywhere in Git commands.",
    funFact:
      "GitHub stores repositories using Git's object storage model — it doesn't store full file copies for each commit, just the differences (called 'deltas'). This is why a repo with 1,000 commits doesn't take 1,000x the storage of one commit — Git is extremely space-efficient.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Rahul runs git remote add ___ https://github.com/rahul-iyer-dev/attendance-tracker.git to connect his local repo to GitHub.",
      correctAnswer: "origin",
      explanation:
        "'origin' is the conventional nickname for your primary remote repository. You could technically name it anything, but 'origin' is the universal standard that all Git documentation and teams use. When you run 'git push', Git pushes to 'origin' by default.",
    },
  },
  {
    title: "git push: Uploading Your Code to GitHub",
    content:
      "Rahul had connected his local project to GitHub. Now he needed to actually upload his commits. The command is git push origin main. Breaking this down: git push is the action (upload), origin is the remote destination (your GitHub URL), main is the branch name (the default branch is called 'main' in modern Git).\n\nFirst push: When pushing for the very first time, use git push -u origin main. The -u flag sets 'upstream' — it tells Git 'from now on, whenever I say git push, I mean push to origin/main'. After the first push with -u, you can just type git push for all future pushes.\n\nGitHub authentication: When you push, GitHub asks for your credentials. With modern GitHub, passwords don't work — you need either a Personal Access Token (PAT) or SSH keys. PAT: Go to GitHub Settings → Developer Settings → Personal Access Tokens → Generate new token. Copy it and use it as your password when prompted. SSH keys are more advanced but more convenient long-term. Rahul used PAT first, then switched to SSH after getting comfortable. His first successful push showed the progress bar and 'Branch main set up to track remote branch main from origin' — his code was now on the internet!",
    funFact:
      "GitHub deprecated password authentication in August 2021 for security reasons. Over 100 million accounts use Personal Access Tokens or SSH keys instead. This change happened because bots were attempting password attacks at massive scale — token-based auth is far more secure.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "After the first push with -u flag, Rahul commits new changes. What is the shortest command to push them to GitHub?",
      options: [
        "git push origin main",
        "git push -u origin main",
        "git push",
        "git upload main",
      ],
      correctAnswer: "git push",
      explanation:
        "After setting the upstream with -u on the first push, Git remembers where to push. From then on, 'git push' alone is enough — no need to specify origin or main. The -u flag is a one-time setup that makes all future pushes shorter and faster.",
    },
  },
  {
    title: "git pull and git clone: Getting Code from GitHub",
    content:
      "Priya, Rahul's senior, pushed a major update to their shared project. Rahul needed to get her changes onto his machine. The command is git pull origin main. This downloads all new commits from GitHub and merges them into your local branch. Think of it like syncing your Google Drive folder — GitHub has the latest version, and git pull downloads it to match.\n\nThe golden rule: Always pull before you push. If you push without pulling first and there are new commits on GitHub, Git will reject your push with 'Updates were rejected because the remote contains work that you do not have locally.' Running git pull first merges those changes, then you can push cleanly.\n\ngit clone is different — it's for getting a project you've never had before. When Rahul joined a new team project, Arjun sent him the repository URL. Rahul ran git clone https://github.com/team/project.git. This downloaded the entire repository (all files + full history) into a new folder. Clone = download a fresh copy. Pull = update an existing copy. Interview tip: be ready to explain this difference — it trips up many freshers in technical rounds.",
    funFact:
      "The largest Git repository in the world is Microsoft's Windows source code — it's approximately 300 GB with 3.5 million files. Git wasn't built for repos this size, so Microsoft had to engineer a special Virtual File System (VFS for Git) just to make it workable.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul is joining a new company project for the first time and needs to get the entire codebase on his laptop. Which command should he use?",
      options: [
        "git pull origin main",
        "git download origin",
        "git clone https://github.com/company/project.git",
        "git fetch --all",
      ],
      correctAnswer: "git clone https://github.com/company/project.git",
      explanation:
        "git clone downloads an entire repository that you don't yet have locally — it creates a new folder, downloads all files, and sets up the remote connection automatically. git pull is for updating a repo you already have. For a brand-new project, always clone first.",
    },
  },
  {
    title: "Writing a Great README File",
    content:
      "Arjun reviewed Rahul's GitHub repo and gave feedback: 'The code looks good, but I have no idea what this project does or how to run it. Add a README.' The README.md file is the front page of every GitHub repository — it's the first thing anyone sees when they visit your project page. 'MD' stands for Markdown, a simple formatting language where # Title makes a heading, **bold** makes text bold, and backticks make code blocks.\n\nA great README includes: Project name and one-sentence description at the top. A 'What it does' section explaining the purpose. A 'How to install and run' section with exact commands. A 'Screenshots' section if it's a UI project. Technologies used (Python, SQL, React, etc.). Your name and contact/LinkedIn.\n\nRahul wrote his README and saw the difference immediately — his GitHub profile went from looking like a random dump of files to a polished, professional project showcase. Recruiters spend an average of 8 seconds deciding if a GitHub repo is worth exploring. A clean README with clear sections makes them stay. Rahul's tip: write your README as if explaining to a smart friend who doesn't know your project — no jargon, just clarity.",
    funFact:
      "README files date back to the 1970s when mainframe systems came with printed documentation. The term README was a convention to tell users 'read this file first before doing anything.' GitHub just made it beautiful by rendering Markdown automatically as a webpage.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants to make the project name appear as a large heading in his README.md file. What Markdown syntax does he use?",
      options: [
        "# Project Name",
        "**Project Name**",
        "# Project Name",
        "== Project Name ==",
      ],
      correctAnswer: "# Project Name",
      explanation:
        "In Markdown, a # followed by a space creates an H1 heading — the largest text. ## is H2, ### is H3, and so on. GitHub automatically renders .md files as formatted HTML, so # Project Name becomes a large, bold page title. Markdown is simple but powerful for documentation.",
    },
  },
  {
    title: "Creating Branches: Working Without Breaking Things",
    content:
      "The attendance tracker was working perfectly in production. Rahul needed to add a new 'leave management' feature, but he was terrified of breaking the existing code. Priya explained branches: 'Create a branch. It's like a parallel universe for your code — changes there don't affect the main working version until you're ready to merge.'\n\nA branch is an independent line of development. The main branch is your 'production-ready' code — the version that actually works. When adding a feature or fixing a bug, create a new branch: git branch feature-leave-management. This creates a new branch that starts as an exact copy of main, but all new commits go into the feature branch only.\n\nGood branching conventions used by real companies: feature/leave-management for new features, bugfix/login-crash for bug fixes, hotfix/payment-error for urgent production fixes. Never commit directly to main in a professional environment — your team lead will notice and it's considered bad practice. Rahul created his branch, coded for 3 days, and when it was ready, merged it back. Main was untouched the whole time — exactly as Priya had promised.",
    funFact:
      "Git branching is nearly instantaneous and uses almost no disk space. This is because a branch is just a pointer to a specific commit — it's a 41-byte file. Contrast this with older systems like SVN where branching could take minutes and consume gigabytes.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Rahul wants to create a new branch called 'feature-leave-management'. The correct command is git ___.",
      correctAnswer: "branch feature-leave-management",
      explanation:
        "git branch <name> creates a new branch but does NOT switch to it. You're still on your current branch after running this. To create AND immediately switch, use 'git checkout -b feature-leave-management' or the modern 'git switch -c feature-leave-management'.",
    },
  },
  {
    title: "Switching Branches: git checkout and git switch",
    content:
      "Rahul created his feature branch but was still on main. He could see the branch existed when he ran git branch (which lists all branches, with an asterisk on the current one), but he needed to switch to it to start working. Two commands do this: the classic git checkout feature-leave-management and the modern git switch feature-leave-management.\n\ngit checkout is the old command that did too many things — it both switches branches AND restores files. This confused many developers. Git 2.23 (2019) introduced git switch specifically for changing branches and git restore for restoring files. Both work, but git switch is clearer and recommended for new developers.\n\nTo create and switch in one step: git switch -c feature-leave-management (the -c means 'create'). To go back to main: git switch main. Important: before switching branches, either commit your changes or stash them (using git stash). If you have uncommitted changes and try to switch branches, Git may refuse or carry those changes into the other branch — causing confusion. Rahul learned this the hard way when his half-finished leave feature accidentally appeared in the main branch because he forgot to commit before switching.",
    funFact:
      "The 'checkout' command in Git is infamous for doing too many different things — switching branches, creating branches, restoring files, and even checking out specific commits. It's one of the most confusing commands for beginners. That's why git introduced 'git switch' and 'git restore' in 2019 to separate these concerns clearly.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants to create a new branch called 'bugfix-login' AND immediately start working on it. The single most efficient command is:",
      options: [
        "git branch bugfix-login",
        "git switch bugfix-login",
        "git switch -c bugfix-login",
        "git checkout bugfix-login --create",
      ],
      correctAnswer: "git switch -c bugfix-login",
      explanation:
        "git switch -c creates a new branch and immediately switches to it in one command. Without -c, 'git switch' only switches to an existing branch. The equivalent old command is 'git checkout -b bugfix-login'. The -c flag is short for --create.",
    },
  },
  {
    title: "Merging Branches: Combining Your Work",
    content:
      "After 3 days of coding on the feature branch, Rahul's leave management feature was complete, tested, and working. Now he needed to bring those changes back into the main branch. This is merging — taking the commits from one branch and replaying them onto another.\n\nThe process: First switch to the branch you want to merge INTO: git switch main. Then run: git merge feature-leave-management. Git takes all commits from the feature branch and applies them to main. If there are no conflicting changes, it's a 'fast-forward' or 'automatic merge' and completes instantly with a success message.\n\nGit merge strategies: Fast-forward merge happens when main hasn't changed since you created the branch — Git just moves the main pointer forward to include your new commits. Three-way merge happens when main also had new commits while you were working — Git creates a special 'merge commit' that combines both timelines. After merging successfully, clean up by deleting the feature branch: git branch -d feature-leave-management. Keeping old merged branches clutters your repo. Rahul merged his feature, deleted the branch, pushed main to GitHub, and the production app now had leave management — no breakage, no drama.",
    funFact:
      "Git's merge algorithm is so mathematically elegant that it's studied in computer science research. It uses a concept called the 'three-way merge' — finding the common ancestor of two commits and intelligently combining changes. This algorithm has fewer than 1 in a billion chance of a merge error on typical code.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul finished his feature branch. To merge it into main, what is the correct sequence of commands?",
      options: [
        "git merge main feature-leave-management",
        "git switch feature-leave-management, then git merge main",
        "git switch main, then git merge feature-leave-management",
        "git push feature-leave-management to main",
      ],
      correctAnswer: "git switch main, then git merge feature-leave-management",
      explanation:
        "You always merge FROM the feature branch INTO main, which means you must first be ON main. Switch to main first, then run git merge <feature-branch-name>. Doing it the other way would merge main into your feature branch — the opposite of what you want.",
    },
  },
  {
    title: "Resolving Merge Conflicts Like a Pro",
    content:
      "Rahul and Sneha were both working on utils.py. Rahul edited the calculate_leave() function on his branch. Sneha edited the same function on her branch. When Arjun tried to merge both into main, Git couldn't auto-decide which version to keep — and threw a MERGE CONFLICT. This is the moment that makes freshers panic. It shouldn't — conflicts are normal and fixable in minutes.\n\nWhen a conflict occurs, Git marks the conflicting section in the file like this: <<<<<<< HEAD shows YOUR version, ======= is the divider, >>>>>>> feature-branch shows the INCOMING version. Open the file, read both versions, and manually decide what the final code should be. Delete all the conflict markers (<<<<<<<, =======, >>>>>>>) and write the correct combined code.\n\nAfter resolving: Stage the fixed file with git add utils.py and complete the merge with git commit. VS Code has a built-in conflict resolver that shows both versions side by side with clickable 'Accept Current Change' / 'Accept Incoming Change' buttons — much easier than editing raw conflict markers. Rahul used VS Code to resolve his first conflict in 3 minutes. Sneha was impressed. Arjun was satisfied. Nobody's code was lost — both changes were combined correctly.",
    funFact:
      "In a survey of 85,000 developers, merge conflicts were voted as the #3 most frustrating part of collaborative coding. But developers who master conflict resolution are consistently rated more productive by their teams — because they unblock others instead of waiting for help.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "During a merge conflict, Rahul sees conflict markers in the file. After manually fixing the file, what are the next two steps?",
      options: [
        "git reset then git merge again",
        "git add <file> then git commit",
        "git conflict --resolve then git push",
        "git checkout --theirs then git push",
      ],
      correctAnswer: "git add <file> then git commit",
      explanation:
        "After manually editing the conflict markers and writing the correct final code, you must: 1) Stage the resolved file with 'git add', and 2) Complete the merge with 'git commit'. Git will auto-suggest a merge commit message. These two steps tell Git the conflict is resolved and the merge is complete.",
    },
  },
  {
    title: "Branch Strategies: Feature Branch Workflow",
    content:
      "After 2 months at the company, Rahul noticed the team followed a specific pattern: no one ever committed directly to main, every feature got its own branch, and all branches merged via Pull Requests. Arjun explained: 'This is the Feature Branch Workflow — the standard used by most companies.'\n\nThe rules are simple: main contains only production-ready, reviewed code. Every new feature/bug gets a dedicated branch with a descriptive name. Branches are short-lived — they should exist for days, not weeks. All merges happen via Pull Requests (covered in an upcoming lesson) so the team can review before merging.\n\nSome companies use a more structured approach called Gitflow with specific branch types: main for production releases, develop for the next release (all features merge here first), feature/xxx for individual features, release/x.x for preparing releases, hotfix/xxx for emergency production fixes. Gitflow is common in larger companies with scheduled releases. Startups and modern tech companies often use a simpler 'trunk-based development' where everything merges to main frequently with feature flags controlling visibility. When Rahul understood these workflows, his code reviews improved dramatically — he finally understood why the team did things the way they did.",
    funFact:
      "The Feature Branch Workflow was popularized by GitHub itself and is often called 'GitHub Flow'. It's purposely simple: one rule — anything in main is deployable. This single rule disciplines the entire team to keep production stable.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In the Feature Branch Workflow, what should the main branch always represent?",
      options: [
        "The latest experimental code",
        "All unfinished features in progress",
        "Only production-ready, deployable code",
        "The personal backup of each developer",
      ],
      correctAnswer: "Only production-ready, deployable code",
      explanation:
        "The core principle of Feature Branch Workflow is: main = deployable at any time. This discipline means no broken code ever reaches production. Features are developed in branches and only merged to main after review and testing — keeping main always stable.",
    },
  },
  {
    title: "Forking: Contributing to Others' Projects",
    content:
      "Rahul discovered a popular open-source tool on GitHub that his team used daily. He found a bug and wanted to fix it — but it was someone else's repository. He couldn't just push to a repo he doesn't own. The solution: forking. Clicking 'Fork' on GitHub creates your own personal copy of that repository under your GitHub account. It's like photocopying a book — you get a complete copy you can write all over.\n\nAfter forking, Rahul had his own version: github.com/rahul-iyer-dev/popular-tool (copied from github.com/original-owner/popular-tool). He cloned his fork to his laptop, made the bug fix on a new branch, and pushed to HIS fork. The original repository was never touched.\n\nThe relationship: the original repo is called the upstream repository. Your fork is the origin. When the original project releases new updates, you can pull those changes into your fork using: git remote add upstream https://github.com/original-owner/popular-tool.git then git fetch upstream then git merge upstream/main. This keeps your fork up-to-date with the original. The Fork model is the backbone of all open-source collaboration — it lets millions of developers contribute to projects without needing direct write access.",
    funFact:
      "GitHub's 'fork' button has been clicked over 2 billion times. The most-forked repository in GitHub history is freeCodeCamp, which has been forked over 38,000 times. When Linus Torvalds released Linux on GitHub, it received over 20,000 forks in a single day.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul forked a repository and cloned his fork. He wants to stay updated with the original project's new commits. What does he add?",
      options: [
        "Another origin remote pointing to his fork",
        "An upstream remote pointing to the original repository",
        "A backup remote for offline use",
        "A mirror remote on Bitbucket",
      ],
      correctAnswer: "An upstream remote pointing to the original repository",
      explanation:
        "When you fork, 'origin' points to your fork. To pull updates from the original project, you add a second remote called 'upstream' pointing to the original repository. Then 'git fetch upstream' downloads the original's new commits, and 'git merge upstream/main' applies them to your fork.",
    },
  },
  {
    title: "Pull Requests: Proposing Your Changes",
    content:
      "Rahul fixed the bug in his forked repository and pushed it to his GitHub fork. Now he needed to propose his fix to the original project's maintainers. This is where Pull Requests (PRs) come in — the most important collaboration feature in GitHub.\n\nA Pull Request says: 'I made some changes on my branch/fork. Please review them and pull them into your main branch.' On GitHub, click 'New Pull Request', select the base branch (where you want changes to go) and the compare branch (your changes), write a title and description explaining WHAT you changed and WHY. Good PR descriptions include: what the bug was, how you fixed it, how to test the fix, and any screenshots if it's a UI change.\n\nIn a company, PRs are mandatory — no code goes to main without a PR. Arjun's team rule: every PR needs at least 2 approvals before merging. This ensures code quality, catches bugs early, and spreads knowledge across the team. Rahul's first company PR had 8 review comments. He fixed them all, replied to each comment explaining his decision, and got his PR merged in 2 days. The discipline of writing clear PRs made Rahul a better communicator and a better coder simultaneously.",
    funFact:
      "GitHub introduced Pull Requests in 2008, and they fundamentally changed how the software industry collaborates. Before PRs, teams emailed patches as .diff files — imagine trying to review code through email! Today, over 400 million pull requests are opened on GitHub every year.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul is writing a Pull Request description for a bug fix. Which description is most professional and helpful for reviewers?",
      options: [
        "Fixed stuff",
        "Fixed the login bug that caused a crash when email had uppercase letters. Added lowercase conversion in the validation function. Tested on Chrome, Firefox, and Safari.",
        "See the code changes for details",
        "Bug fix PR please merge",
      ],
      correctAnswer:
        "Fixed the login bug that caused a crash when email had uppercase letters. Added lowercase conversion in the validation function. Tested on Chrome, Firefox, and Safari.",
      explanation:
        "Good PR descriptions explain: 1) What was the bug, 2) How you fixed it, 3) How it was tested. Reviewers should understand the change without reading every line of code. 'Fixed stuff' gives zero context. Professional teams reject vague PRs — they waste reviewer time and slow delivery.",
    },
  },
  {
    title: "Code Reviews: Giving and Receiving Feedback",
    content:
      "Priya assigned Rahul as a reviewer on Sneha's Pull Request. Rahul had never done a code review before and felt awkward commenting on a senior's code. Arjun coached him: 'Code reviews aren't criticism — they're collaboration. Your job is to catch bugs, suggest improvements, and ensure code quality. Be specific, be kind, and always explain why.'\n\nGiving good feedback: Be specific, not vague. Instead of 'This is wrong', write 'This function will fail if the input is an empty string — add a null check on line 12.' Use 'Suggestion:' prefix for optional improvements vs 'Issue:' for actual bugs. Approve explicitly when satisfied.\n\nReceiving feedback: Don't take it personally — it's about the code, not you. Respond to every comment, even if just 'Fixed in latest commit.' If you disagree, explain your reasoning politely. Sneha's PR had 3 legitimate issues Rahul caught — a missing error handler, an N+1 database query, and a variable named 'x' that should be 'employee_id'. Sneha thanked him. Rahul realized code review was his chance to learn from better code AND teach through questions. Arjun later told him: 'Developers who can both write and review code are twice as valuable as those who can only write it.'",
    funFact:
      "Google's internal study found that code review is the single most effective software quality practice — more effective than testing, pair programming, or formal inspections. Teams that do consistent code review have 60% fewer production bugs. The investment in review time pays back 4x in saved debugging time.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul sees potentially problematic code in Sneha's PR. Which comment style is most helpful?",
      options: [
        "This is wrong.",
        "I don't like this approach.",
        "Issue: This query runs inside a loop — it will hit the database N times for N employees. Consider fetching all employees in one query before the loop (line 34).",
        "Why did you write it this way?",
      ],
      correctAnswer:
        "Issue: This query runs inside a loop — it will hit the database N times for N employees. Consider fetching all employees in one query before the loop (line 34).",
      explanation:
        "Good code review comments are: specific (line number), explain the problem (N+1 query issue), and suggest a solution. Vague comments like 'This is wrong' don't help the developer improve. Specific comments with solutions are immediately actionable and educational.",
    },
  },
  {
    title: "GitHub Issues: Tracking Bugs and Features",
    content:
      "The attendance tracker was being used by 50 employees. Sneha reported: 'When I mark someone present twice, the count doubles.' Rahul's manager Arjun said 'Log it as a GitHub Issue.' GitHub Issues are the built-in task/bug-tracking system built directly into every repository — no external tools needed for small teams.\n\nCreating an Issue: Click 'Issues' tab on any repo, click 'New Issue'. Write a clear title ('Duplicate attendance count when marking present twice') and description with steps to reproduce, expected behavior, and actual behavior. Add labels like 'bug', 'enhancement', or 'documentation'. Assign it to yourself or a team member. Set a milestone if it's part of a release.\n\nGood issue titles are specific and searchable. Bad: 'Bug in attendance'. Good: 'Double-counting bug when employee is marked present twice in same day'. Issues can be linked to PRs — when Rahul fixed the bug and created a PR, he wrote 'Fixes #23' in the PR description. GitHub automatically closes Issue #23 when the PR merges. This auto-linking creates a clean audit trail: you can see exactly which code change fixed which bug. Rahul's team tracked 40+ issues over 3 months — every bug, feature request, and improvement documented, linked, and resolved.",
    funFact:
      "GitHub Issues were inspired by bug trackers like Bugzilla and JIRA, but designed to be much simpler. Interestingly, many open-source projects have thousands of open issues — the Linux kernel has over 1,000 open issues at any time. An open issue doesn't mean the project is broken — it means the community is actively engaged and tracking improvements.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul writes a PR that fixes Issue #23. What should he write in the PR description to automatically close the issue when the PR merges?",
      options: [
        "See Issue 23",
        "Related to #23",
        "Fixes #23",
        "Closes Issue Number 23",
      ],
      correctAnswer: "Fixes #23",
      explanation:
        "GitHub recognizes specific keywords like 'Fixes #23', 'Closes #23', or 'Resolves #23' in PR descriptions and commit messages. When the PR is merged to the default branch, GitHub automatically closes the linked issue. This creates automatic traceability between code changes and the problems they solve.",
    },
  },
  {
    title: "GitHub Project Boards: Visual Task Management",
    content:
      "Arjun's team had 30 open issues across 3 ongoing features. Tracking them in a list felt chaotic. He set up GitHub Project Boards — a built-in Kanban board that connects directly to your issues and PRs. Think of it as Trello, built into GitHub, with zero cost.\n\nA typical project board has columns: To Do (planned work), In Progress (being worked on right now), In Review (PR submitted, awaiting review), Done (merged and complete). You add issues and PRs as cards and drag them between columns as work progresses. Cards can be automatically moved — set up automation so 'when a PR is merged, move the card to Done'.\n\nRahul was assigned three issues for the sprint. He moved them to 'In Progress', linked his PRs, and the team could see his progress in real-time on the board. During the daily standup, instead of verbally listing what he was working on, he just shared his screen showing the board. Arjun appreciated the clarity. Sprint planning became 10 minutes instead of 45. The visual layout made blockers obvious — if someone had 5 cards in 'In Progress' for a week, something was wrong. GitHub Projects boards are free for public repos and basic private repos — perfect for small teams just getting started.",
    funFact:
      "The Kanban method originated at Toyota factories in the 1940s to streamline car manufacturing. Taiichi Ohno developed it to prevent overproduction and visualize workflow. Software teams adopted it in the 2000s, and today it's used by millions of development teams. GitHub Projects brings this factory-floor insight directly into developer workflows.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul sees that Sneha has 7 cards stuck in 'In Progress' for two weeks. What does this signal?",
      options: [
        "Sneha is very productive",
        "Sneha is blocked or needs help — this is a visible workflow problem",
        "The board is not updated regularly",
        "Sneha is working on many projects simultaneously, which is fine",
      ],
      correctAnswer:
        "Sneha is blocked or needs help — this is a visible workflow problem",
      explanation:
        "One of the key benefits of visual project boards is making blockers visible. Tasks stuck in 'In Progress' for too long signal that someone is blocked, overwhelmed, or needs help. A good team lead or Scrum Master notices this immediately and asks 'What do you need to get these moving?' — preventing delays before they become crises.",
    },
  },
  {
    title: "GitHub Actions: Automating Your Workflow",
    content:
      "Every time Rahul pushed code, Arjun manually ran tests to make sure nothing was broken. After the third time, Arjun said 'This is exactly what GitHub Actions is for — let's automate this.' GitHub Actions is a built-in CI/CD (Continuous Integration/Continuous Deployment) platform that automatically runs tasks whenever code is pushed, a PR is created, or any GitHub event occurs.\n\nHow it works: Create a file at .github/workflows/test.yml in your repo. This YAML file defines triggers (when to run), jobs (what to run), and steps. A simple example: 'On every push to main, install Python dependencies, then run pytest.' GitHub provides virtual machines (called runners) that execute these steps automatically in the cloud.\n\nRahul created his first workflow file with 15 lines of YAML. From that day forward: every time he or anyone pushed code, GitHub automatically ran all tests within 90 seconds and posted a green checkmark (pass) or red X (fail) directly on the PR. No more manual testing. If tests fail, the PR is blocked from merging. This is called 'CI' — Continuous Integration. Companies use Actions for running tests, checking code style (linting), building Docker images, deploying to servers, and sending Slack notifications. GitHub Actions has 2,000+ free pre-built 'actions' in the marketplace that you can drop into your workflow.",
    funFact:
      "GitHub Actions runs over 1 billion workflow minutes per month. The free tier gives you 2,000 minutes/month for private repos — enough for hundreds of automated test runs. Public repos get unlimited free minutes, which is why many open-source projects use GitHub Actions as their entire CI/CD system.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul's GitHub Actions workflow shows a red X on his PR. What does this mean?",
      options: [
        "The PR was rejected by a team member",
        "GitHub is down",
        "The automated tests or checks failed for his code changes",
        "The branch has conflicts",
      ],
      correctAnswer:
        "The automated tests or checks failed for his code changes",
      explanation:
        "A red X in GitHub Actions means the automated workflow (CI pipeline) detected a problem — tests failed, linting errors, or build failures. The PR is typically blocked from merging until the checks pass. Rahul must fix the failing tests, push again, and wait for the green checkmark before his PR can be reviewed and merged.",
    },
  },
  {
    title: "GitHub Pages: Publishing Your Website Free",
    content:
      "Rahul built a portfolio website as HTML/CSS files. Priya suggested: 'Put it on GitHub Pages — it's free hosting directly from your repository, no server needed.' GitHub Pages turns any public repository into a live website accessible at username.github.io/repo-name. For a special repo named exactly username.github.io, it serves at username.github.io — your personal domain.\n\nSetup: Create a repo (or use existing), push your HTML/CSS files. Go to the repo Settings → Pages → Under 'Source', select your branch (usually main) and folder (usually root or /docs). Click Save. Within 5 minutes, your site is live. GitHub shows you the URL at the top of the Pages settings.\n\nRahul's portfolio was live at rahul-iyer-dev.github.io within 10 minutes. He put this URL on his resume and LinkedIn. At his next interview, the interviewer said 'I saw your portfolio site before this call — nice work on the attendance tracker.' GitHub Pages supports static websites (HTML, CSS, JavaScript) including sites built with React (after building/exporting), Jekyll blogs, documentation sites, and project demos. It doesn't support server-side code like Python or Node.js — but for portfolios, documentation, and project demos, it's perfect and completely free.",
    funFact:
      "GitHub Pages hosts millions of websites globally, serving over 1 trillion page views per year — all for free. Major organizations like Bootstrap, React, Vue.js, and even some government agencies use GitHub Pages to host their official documentation. It's one of the best-kept secrets in web development for budget-conscious developers.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul creates a GitHub repository named exactly 'rahul-iyer-dev.github.io'. Where will his website be accessible?",
      options: [
        "github.com/rahul-iyer-dev",
        "rahul-iyer-dev.github.io",
        "pages.github.com/rahul-iyer-dev",
        "rahul-iyer-dev.pages.io",
      ],
      correctAnswer: "rahul-iyer-dev.github.io",
      explanation:
        "GitHub Pages has a special convention: a repository named exactly '<username>.github.io' serves at https://<username>.github.io — your personal root domain. This is your developer homepage. Any other repo (e.g., 'portfolio') serves at username.github.io/portfolio. The root domain is ideal for personal portfolios and resumes.",
    },
  },
  {
    title: "Branch Protection Rules: Preventing Mistakes",
    content:
      "A junior developer on Arjun's team accidentally pushed broken code directly to main during a late-night session. The production app went down at 2 AM. The entire team spent 4 hours fixing it. Next morning, Arjun set up Branch Protection Rules. Rahul watched and learned how to prevent this forever.\n\nBranch protection rules are configured per branch (usually main) in GitHub Settings → Branches → Add rule. Critical rules Arjun enabled: Require a pull request before merging — no direct pushes to main, period. Require approvals — minimum 2 approvals on every PR before it can merge. Require status checks to pass — all GitHub Actions (tests, linting) must be green. Dismiss stale reviews — if someone pushes new changes after approval, the approval resets and requires fresh review.\n\nWith these rules, pushing directly to main became impossible — even Arjun couldn't bypass them (he configured it to apply to administrators too, which takes real discipline). Every change now required a PR, reviews, and passing tests. The tradeoff: merging takes a bit longer. The benefit: zero production outages from accidental bad pushes. Rahul's team went from 1-2 production incidents per month to zero for 6 consecutive months after enabling branch protection.",
    funFact:
      "According to GitHub's State of the Octoverse report, repositories with branch protection rules have 47% fewer critical bugs reaching production. The 5-minute investment in setting up protection rules saves teams an average of 8 hours per prevented incident — one of the highest ROI configurations in software development.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "With branch protection requiring 2 approvals, a developer has 1 approval and pushes a new commit. What happens to the existing approval?",
      options: [
        "The 1 approval still counts toward the 2 required",
        "The approval is automatically dismissed and 2 fresh approvals are required",
        "The branch protection rule is disabled for this PR",
        "The commit is rejected by GitHub",
      ],
      correctAnswer:
        "The approval is automatically dismissed and 2 fresh approvals are required",
      explanation:
        "When 'Dismiss stale reviews' is enabled in branch protection rules, adding new commits after an approval invalidates that approval. This prevents a sneaky pattern where someone gets approval for good code, then pushes bad code after. Every new commit requires fresh eyes — the reviewers must re-approve the updated version.",
    },
  },
  {
    title: "Git Tags and Releases: Versioning Your Software",
    content:
      "After 3 months, Arjun's team shipped a stable, feature-complete version of the attendance tracker. It was time to mark it officially as 'Version 1.0.0'. Git tags are permanent bookmarks in your commit history — unlike branches that move forward with each commit, a tag permanently marks a specific commit as a named point in history.\n\nCreating a tag: git tag v1.0.0 creates a lightweight tag on the current commit. For a proper release, use an annotated tag: git tag -a v1.0.0 -m \"First stable release with attendance tracking and leave management\". Push tags to GitHub with git push origin --tags (tags aren't pushed with regular git push).\n\nGitHub Releases build on top of tags — go to the Releases page on your repo, click 'Create a new release', select your tag, write release notes listing new features and bug fixes, and optionally attach downloadable files (like .zip builds or installers). Version numbering follows Semantic Versioning (SemVer): MAJOR.MINOR.PATCH — 1.0.0 means first major version, 0 minor changes since v1.0, 0 patches. When Rahul saw his project listed in GitHub Releases with a proper version number, it felt like shipping real software — because it was.",
    funFact:
      "Semantic Versioning (SemVer) was formalized by Tom Preston-Werner, one of GitHub's co-founders, in 2010. It defines that MAJOR version changes mean breaking API changes, MINOR versions add features without breaking anything, and PATCH versions are bug fixes only. Nearly every software package in the world follows this convention.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul releases version 1.2.3. He then fixes a critical bug without adding any new features. What should the next version number be?",
      options: ["2.0.0", "1.3.0", "1.2.4", "1.2.3-hotfix"],
      correctAnswer: "1.2.4",
      explanation:
        "In Semantic Versioning: PATCH (the third number) increments for bug fixes that don't add features or break existing functionality. Since Rahul only fixed a bug, the PATCH number goes from 3 to 4, giving 1.2.4. MINOR (second number) increments for new features. MAJOR (first number) increments for breaking changes.",
    },
  },
  {
    title: "GitHub CLI: GitHub from Your Terminal",
    content:
      'Rahul noticed Priya never left her terminal. She created PRs, reviewed issues, and cloned repos \u2014 all without opening a browser. Her secret: GitHub CLI (gh), GitHub\'s official command-line tool. Install it from cli.github.com and run gh auth login to connect it to your account.\n\nUseful GitHub CLI commands Rahul learned: gh repo create my-project --public \u2014 creates a GitHub repo from terminal. gh pr create --title "Add leave management" --body "Fixes #23" \u2014 opens a PR without touching the browser. gh pr list \u2014 see all open PRs in the current repo. gh pr review 42 --approve \u2014 approve PR #42 directly from terminal. gh issue create --title "Login crash" --label bug \u2014 create an issue. gh repo clone user/repo \u2014 clone any repo quickly.\n\nThe CLI shines when you\'re in a flow state \u2014 switching to the browser to create a PR breaks your concentration. With gh pr create, you write your PR title and description in your terminal\'s text editor (vim or nano) and submit without context-switching. Rahul practiced CLI for one week and his productivity jumped noticeably \u2014 what took 5 browser clicks took 1 CLI command. Priya told him: \'Developers who master the terminal work 30% faster. The terminal is always faster once you know it.\'',
    funFact:
      "GitHub CLI was released in September 2020 after years of community requests. Within 6 months, it had been downloaded over 1 million times. Professional developers at companies like Netflix, Spotify, and Airbnb use GitHub CLI in their daily workflow, often integrating it into custom shell scripts and automation pipelines.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Rahul wants to create a new public GitHub repository named 'expense-tracker' using the CLI without opening a browser. The command is gh repo create expense-tracker ___.",
      correctAnswer: "--public",
      explanation:
        "The --public flag tells GitHub CLI to create a public repository. Without it, the CLI prompts interactively. You can also use --private for private repos. The full command 'gh repo create expense-tracker --public' creates the repo on GitHub and optionally initializes it locally — all without leaving the terminal.",
    },
  },
  {
    title: "Finding Open Source Projects to Contribute To",
    content:
      "Six months into his job, Rahul wanted to build a reputation beyond his company work. Priya suggested open source: 'Contribute to projects you actually use. It shows technical skills AND that you can work with strangers on real codebases.' But how do you find something appropriate as a beginner?\n\nStrategy 1 — Issues labeled 'good first issue': GitHub has a searchable label system. Search label:\"good first issue\" language:python on github.com/explore. These are issues maintainers specifically tagged as beginner-friendly — documentation fixes, small bug fixes, adding tests. Rahul found 3 Python projects within 15 minutes with open good-first-issues.\n\nStrategy 2 — Tools you already use: If you use a library or tool daily, you understand it deeply. Check its GitHub Issues. Rahul used the requests Python library every day — he found an open documentation issue explaining a confusing parameter. He fixed it, submitted a PR, and it was merged in 2 days. His name was now permanently in the commit history of a project used by millions.\n\nStrategy 3 — GitHub Explore: Visit github.com/explore for trending repositories and topic-based collections. Filter by language, topic, and size. Start with projects that have 100-10,000 stars — large enough to be active, small enough that maintainers respond. Rahul's first contribution was 4 lines of documentation — but it led to a second contribution, then a third, and within 3 months he was reviewing PRs himself.",
    funFact:
      "GitHub's 2023 State of the Octoverse found that 94% of Fortune 500 companies use open source software. Contributing to open source gives you access to code quality and practices from world-class engineering teams — something no bootcamp or university course can replicate.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul is a beginner looking for his first open source contribution. Which GitHub issue label should he filter for?",
      options: [
        "help wanted",
        "critical bug",
        "good first issue",
        "breaking change",
      ],
      correctAnswer: "good first issue",
      explanation:
        "'good first issue' is a widely-used label that maintainers add to issues they believe are appropriate for newcomers — typically small in scope, well-defined, and with enough context to get started without deep codebase knowledge. Filtering for this label is the fastest path to finding your first contribution opportunity.",
    },
  },
  {
    title: "The Fork-Clone-Branch-PR Workflow",
    content:
      "Rahul was ready for his first real open source contribution. Arjun walked him through the complete workflow step by step. This is the universal process for contributing to any project you don't own:\n\nStep 1 — Fork: Click Fork on the GitHub repo to create your copy. Step 2 — Clone: git clone https://github.com/rahul-iyer-dev/popular-tool.git — download your fork locally. Step 3 — Add upstream: git remote add upstream https://github.com/original-owner/popular-tool.git — connect to the original so you can stay updated. Step 4 — Sync: git fetch upstream && git merge upstream/main — make sure you're working from the latest code. Step 5 — Branch: git switch -c fix-documentation-typo — never work on main in your fork. Step 6 — Code: Make your changes. Step 7 — Commit: git add . && git commit -m \"Fix typo in API docs for requests parameter\". Step 8 — Push: git push origin fix-documentation-typo — push to YOUR fork. Step 9 — Pull Request: On GitHub, create PR from your fork's branch to the original repo's main.\n\nRahul followed these exact 9 steps for his first contribution. The PR was merged 18 hours later with the comment 'Great fix, thanks!' — two words that felt like a standing ovation to a first-timer.",
    funFact:
      "This Fork-Clone-Branch-PR workflow is so universally followed that it has an unofficial name: the 'GitHub Flow' or 'Forking Workflow'. When you apply for developer jobs, interviewers often ask you to describe this workflow. Being able to explain it clearly (as Rahul can now) immediately signals that you've actually contributed to real projects.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In the Fork-Clone-Branch-PR workflow, Rahul pushes his changes. Where should he push to?",
      options: [
        "The original repository directly",
        "The upstream remote",
        "His own fork on GitHub (origin)",
        "A new temporary repository",
      ],
      correctAnswer: "His own fork on GitHub (origin)",
      explanation:
        "You never have write access to the original (upstream) repository when contributing to others' projects. You push to your fork (origin), then create a Pull Request from your fork's branch to the original repository's main branch. The maintainer reviews your PR and decides whether to accept it.",
    },
  },
  {
    title: "Writing Good Commit Messages",
    content:
      "Arjun reviewed Rahul's commit history and found messages like 'fix', 'update', 'changes', and 'test stuff'. He called Rahul over: 'If I need to understand what you changed 3 months from now, your commit messages tell me NOTHING. Let's fix this.'\n\nThe golden rule: Write commit messages for your future self and your teammates. A good commit message answers: What does this commit DO? And optionally, WHY was it necessary? The format most companies use: start with a verb in imperative mood (as if giving an instruction): 'Add', 'Fix', 'Update', 'Remove', 'Refactor'. Keep the first line under 72 characters. If more context needed, leave a blank line and write a paragraph.\n\nBefore vs After for Rahul's commits: BAD — 'fix' / GOOD — 'Fix duplicate attendance count for same-day entries'. BAD — 'update' / GOOD — 'Update leave balance calculation to use working days only'. BAD — 'test stuff' / GOOD — 'Add unit tests for attendance calculation edge cases'. For multi-line commits: git commit -m \"Fix login crash for uppercase emails\" -m \"The login validator was case-sensitive. Email addresses are case-insensitive per RFC 5321. Added .lower() normalization before validation.\" Using -m twice creates a subject line and body paragraph. Rahul rewrote his commit habits in one week. His PRs started getting approved faster — because reviewers could understand what each commit did without reading the code.",
    funFact:
      "A famous blog post by Tim Pope (2008) titled 'A Note About Git Commit Messages' established the 50/72 rule — subject line under 50 chars, body lines wrapped at 72 chars. This post is still referenced in company engineering guidelines worldwide, 16 years after it was written. Good commit messages are a form of technical writing that separates senior devs from juniors.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Which commit message best follows professional standards and best practices?",
      options: [
        "stuff",
        "Fixed it",
        "Fix authentication failure when email contains plus sign",
        "I fixed the bug that was reported by QA team in issue tracker",
      ],
      correctAnswer: "Fix authentication failure when email contains plus sign",
      explanation:
        "Good commit messages: start with an imperative verb (Fix), are specific about what changed and in what context, are concise (under 72 chars), and don't use past tense ('Fixed') or first person ('I fixed'). The message 'Fix authentication failure when email contains plus sign' is specific, clear, and scannable in git log output.",
    },
  },
  {
    title: "Contributing Guidelines and Code of Conduct",
    content:
      "Before Rahul submitted his first open source PR, he almost made a mistake: he added a feature that the maintainers explicitly said they didn't want. The project's CONTRIBUTING.md file clearly stated 'We don't accept feature additions from external contributors without prior discussion in an Issue.' Rahul had skipped reading it. He learned to always read contributing guidelines FIRST.\n\nCONTRIBUTING.md tells you exactly how to contribute to a specific project: What types of contributions are welcome. How to set up the development environment. Code style and formatting requirements. Branch naming conventions. PR description template. How to run tests before submitting. Some projects have strict commit message formats, specific testing requirements, or mandatory sign-offs. Ignoring these gets your PR rejected no matter how good the code is.\n\nCODE_OF_CONDUCT.md defines behavior standards for the community. Most projects adopt the Contributor Covenant, which prohibits harassment, discriminatory language, and unconstructive criticism. Violations can get you permanently banned. Reading both files before contributing shows respect for the maintainers and the community — and dramatically increases your PR acceptance rate. Rahul's second PR, where he followed every guideline precisely, was approved in 4 hours. His first (abandoned) PR took 3 days and was still rejected.",
    funFact:
      "The Contributor Covenant, the most widely-used open source Code of Conduct, was created by Coraline Ada Ehmke in 2014. It's now adopted by over 200,000 open source projects including Kubernetes, Angular, React, Ruby, and the Linux kernel. A safe, welcoming community is critical for attracting diverse contributors.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Before making his first open source contribution, what file should Rahul read first?",
      options: [
        "README.md only",
        "LICENSE file",
        "CONTRIBUTING.md",
        "Any random .md file in the repo",
      ],
      correctAnswer: "CONTRIBUTING.md",
      explanation:
        "CONTRIBUTING.md contains the specific rules and processes for contributing to that project — what's accepted, how to set up the environment, code style requirements, and PR guidelines. Following these instructions precisely is the difference between a PR that gets merged quickly and one that gets immediately closed. Always read it before writing a single line of code.",
    },
  },
  {
    title: "Your First Open Source Contribution",
    content:
      "This lesson walks through Rahul's actual first successful open source contribution, from zero to merged PR, in real time. He found a Python data validation library on GitHub with 2,400 stars. It had a 'good first issue' labeled 'Add type hints to utility functions' — exactly the kind of task perfect for a beginner who knew Python but was new to open source.\n\nRahul's process: Read CONTRIBUTING.md (15 minutes). Fork and clone the repo. Run the test suite locally: pytest tests/ — all 47 tests passed. Read the existing code to understand style conventions. Made the change: added proper type hints to 3 utility functions (23 lines changed). Ran tests again — still 47 passing. Ran the linter: flake8 utils.py — no errors. Committed: git commit -m \"Add type hints to string utility functions\". Pushed to his fork. Created PR with description explaining each function changed and why the types were chosen.\n\nThe maintainer responded in 6 hours: 'Thanks for this! One question — can you also add a return type for the validate_email function?' Rahul made the small fix within 20 minutes. The maintainer approved and merged. The PR was live in the main branch with Rahul's name permanently in the commit history. The key insight Rahul shared with his team: 'My first contribution was tiny — 23 lines. But it gave me the confidence and knowledge to make bigger contributions. Every expert was a beginner once.'",
    funFact:
      "According to GitHub, the average time from first open source contribution to first job offer is 8 months for developers who contribute consistently. Recruiters at companies like Stripe, GitLab, and HashiCorp actively scout GitHub for contributors to projects they use internally — your open source profile IS your job application.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Before submitting his open source PR, what should Rahul always run to avoid embarrassing rejections?",
      options: [
        "git push --force",
        "The project's test suite and linter locally",
        "git log to check commit history",
        "git diff to verify changes are correct",
      ],
      correctAnswer: "The project's test suite and linter locally",
      explanation:
        "Running tests and the linter before submitting prevents the most common PR rejection reasons: failing CI tests and code style violations. Maintainers expect contributors to verify their changes work before submitting. Submitting a PR that breaks existing tests is a red flag that shows lack of diligence — and wastes the maintainer's review time.",
    },
  },
  {
    title: "Optimizing Your GitHub Profile for Recruiters",
    content:
      "Sneha got a cold message from a recruiter: 'Saw your GitHub profile — we're looking for developers with your background.' She wasn't actively job searching but was curious how the recruiter found her. The recruiter said: 'We search GitHub for active developers with public repos in specific technologies. Your Python projects and open source contributions came up.'\n\nProfile optimization checklist Rahul built based on Sneha's experience: Profile photo — use a real, professional photo. Profiles with photos get 5x more recruiter messages. Bio — include your role, key skills, and a hook: 'Python developer | Building attendance and HR tools | Open to opportunities'. Location — add city; recruiters often filter by location. Website — link your GitHub Pages portfolio or LinkedIn. Pinned repos — pin your 6 best projects (covered in next lesson). Active commit history — the green squares on your contribution graph signal active engagement.\n\nRahul updated his profile in 30 minutes following this checklist. Within 3 weeks, he had 4 unsolicited recruiter messages — one leading to an interview at a company he'd been trying to get into for a year. His GitHub profile became his most powerful job search tool, working 24/7 without him doing anything after the initial setup.",
    funFact:
      "A LinkedIn study found that developers with active GitHub profiles are 3x more likely to receive recruiter outreach than those without. Unlike a resume, GitHub shows verifiable evidence of your skills — actual code, actual commits, actual contributions. You can't fake a green contribution graph or a merged open source PR.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Which GitHub profile element has the single biggest impact on recruiter discovery?",
      options: [
        "Number of followers",
        "How many repositories you've starred",
        "A professional photo, clear bio with skills, and active public repositories",
        "Having a long list of languages in your profile",
      ],
      correctAnswer:
        "A professional photo, clear bio with skills, and active public repositories",
      explanation:
        "Recruiters searching GitHub use filters for location, bio keywords, and language. A professional photo increases click-through rate significantly. A bio with skills (Python, SQL, etc.) makes you discoverable in keyword searches. Active public repos with good README files prove your skills with evidence. These three together are the foundation of a recruiter-ready GitHub profile.",
    },
  },
  {
    title: "Pinning Your Best Repositories",
    content:
      "Rahul had 23 repositories on GitHub — some complete projects, some half-finished experiments, a few just homework practice. When a recruiter visited his profile, they saw all 23 repos with no clear priority. Priya told him: 'GitHub lets you pin 6 repos to the top of your profile. Think of them as your portfolio highlights. Which 6 projects would you show in an interview?'\n\nSelecting which to pin: Choose projects that showcase your best technical skills, have a clear README, are actually functional (not half-built), and demonstrate breadth (different technologies or problem domains). Avoid pinning homework assignments, tutorial follow-alongs, or empty repos. For each pinned repo, GitHub shows the repo name, description, primary language, stars, and forks — make sure each pinned repo has a compelling one-line description.\n\nRahul's 6 pinned repos: 1) attendance-tracker (Python, PostgreSQL) 2) personal-portfolio (HTML/CSS, live on GitHub Pages) 3) sql-salary-analyser (Python, SQLite, data analysis) 4) requests contribution (his open source merged PR) 5) company-leave-api (REST API project) 6) data-validation-challenge (competitive programming). The result: any recruiter visiting his profile in 10 seconds could see he worked across Python, SQL, APIs, and web — exactly what companies look for in a versatile junior developer.",
    funFact:
      "GitHub's own research shows that developers with 6 pinned repos get 40% more profile views than those with no pinned repos, and stay on profile pages 3x longer. The pinning feature was one of the most-requested GitHub features — it was released in 2016 and immediately used by millions of developers to curate their professional identity.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul has a well-built project with no README and one old project with an excellent README and clear screenshots. Which should he pin?",
      options: [
        "The well-built project — technical quality matters most",
        "The old project with the excellent README",
        "Neither — unpin everything to appear humble",
        "Both — always pin as many as possible",
      ],
      correctAnswer: "The old project with the excellent README",
      explanation:
        "A good README dramatically amplifies a project's impact. Recruiters spend 8 seconds deciding if a repo is worth exploring — a clear description, screenshots, and installation instructions keep them engaged. The technically perfect project with no README looks like nothing special. Always pair good code with good documentation — the combination is what impresses.",
    },
  },
  {
    title: "The GitHub Contribution Graph: Making It Green",
    content:
      "The contribution graph on every GitHub profile shows a year of daily activity as green squares — darker green means more activity that day. When Rahul first set it up, his graph was mostly grey. Arjun showed him his own graph — almost entirely dark green. 'Does it matter?' Rahul asked. Arjun replied: 'Recruiters notice it. More importantly, it reflects whether you're actually coding regularly.'\n\nWhat counts as a contribution: Commits pushed to any repository (public and private if enabled in settings). Pull Requests created and merged. Issues created and commented on. Code reviews submitted. A commit to a private repo counts if you go to Settings → Contributions → enable 'Private Contributions'.\n\nBuilding a green graph through genuine work: Set a daily coding habit — even 30 minutes of pushing commits to a personal project. Work on open source issues regularly. Document your learning in public repos. The key word is genuine — don't create fake 'empty commit' scripts to game the graph. Recruiters can spot inflated graphs (100 commits on one repo with no meaningful code). Rahul built a daily coding habit: 6:30 AM, 30 minutes minimum. Within 2 months, his graph showed consistent green. At his next interview, the interviewer zoomed into his GitHub profile and said 'I see you code every day — that kind of discipline is exactly what we look for in a hire.'",
    funFact:
      "The GitHub contribution graph was introduced in 2013 and immediately became controversial — some developers felt it gamified coding in unhealthy ways, while others found it motivating. Today it's accepted as a useful (though imperfect) signal of developer engagement. GitHub itself warns: 'It measures frequency, not quality' — one great commit beats 50 trivial ones.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul commits to a private repository every day but his contribution graph stays empty. What setting is he missing?",
      options: [
        "He needs to make all repos public",
        "He needs to enable 'Private Contributions' in his GitHub profile settings",
        "Private repo commits never count toward the graph",
        "He needs to push more than one commit per day",
      ],
      correctAnswer:
        "He needs to enable 'Private Contributions' in his GitHub profile settings",
      explanation:
        "By default, GitHub only shows contributions to public repos. Go to your profile → Edit Profile → enable 'Include private contributions on my profile'. This shows contribution squares for private repos without revealing what you worked on. It's especially important for developers doing company work in private repos — their real activity otherwise stays hidden.",
    },
  },
  {
    title: "GitHub as Your Developer Portfolio",
    content:
      "Rahul's friend from college applied to the same company. Both had similar resumes — same college, same CGPA, similar tech stack. The difference: Rahul had an active GitHub with 15 public repos, 2 open source contributions, and a GitHub Pages portfolio. His friend had nothing. Rahul got the interview. His friend didn't.\n\nYour GitHub profile is a live, verifiable portfolio that proves what you can do — not just what you claim. Here's how to build it systematically: Document EVERY project you build during learning — even simple ones. Write proper README files with problem statement, solution, tech stack, and screenshots. Make sure every project runs (test it from scratch on a fresh machine). Add a live demo link where possible (GitHub Pages for front-end, or a free tier on Heroku/Railway for back-end).\n\nPortfolio must-haves for IT freshers in 2024: A web project (HTML/CSS/JS or React). A Python script that solves a real problem. A database project (SQL queries, data analysis). A GitHub Pages portfolio site linking all your projects. At least one open source contribution (even a documentation fix). A solid README for each project. Rahul's GitHub profile became his most-used resume — he linked it in every job application, his LinkedIn profile, and his email signature. Three companies told him directly: 'Your GitHub profile is what got you the initial phone screen.'",
    funFact:
      "Stack Overflow's 2023 Developer Survey found that 70% of professional developers use GitHub as their primary code hosting platform. Among hiring managers, 89% say they look at a candidate's GitHub profile during hiring evaluation. A polished GitHub profile can single-handedly override a weak resume — and a blank GitHub profile can weaken an otherwise strong one.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants his GitHub to look impressive to recruiters. Which combination represents the strongest portfolio signal?",
      options: [
        "100 repos with no README files",
        "5 repos with excellent README files, live demos, and one open source merged PR",
        "A profile with 500 followers but no code",
        "One large private repo",
      ],
      correctAnswer:
        "5 repos with excellent README files, live demos, and one open source merged PR",
      explanation:
        "Quality over quantity. Five polished, documented, functional projects demonstrate far more skill than 100 empty or undocumented repos. Live demos prove the code actually works. An open source contribution proves you can work with real codebases and collaborate professionally. These three elements together make a recruiter-compelling profile.",
    },
  },
  {
    title: "GitHub Capstone: Create and Publish an Open Source Project",
    content:
      "This is it \u2014 your final challenge. Everything you've learned in this module comes together in one capstone project. Rahul decided to build and publish an open source Python tool: a command-line 'Daily Standup Logger' that helps developers track what they did each day and generate weekly summaries for standups. Here's the complete journey:\n\nPhase 1 \u2014 Setup (Day 1): Create GitHub repo standup-logger with proper description. Clone locally. Create initial folder structure: src/, tests/, docs/. Write initial README.md with project description, features, and installation. Set up .gitignore for Python. Create LICENSE file (MIT is standard for open source). First commit: 'Initial project setup with README and structure'.\n\nPhase 2 \u2014 Development (Days 2-5): Work on feature/core-logging branch. Build the logging functionality, weekly summary generator, and CLI interface. Write tests. Make 8-10 meaningful commits with clear messages. Open PR to main with detailed description.\n\nPhase 3 \u2014 Polish (Day 6): Add CONTRIBUTING.md with setup instructions for contributors. Add CODE_OF_CONDUCT.md. Create GitHub Issues for planned future features (label them 'good first issue' to invite contributors). Set up a basic GitHub Actions workflow to run tests on every push. Tag the release as v1.0.0 with release notes. Enable GitHub Pages for project documentation.\n\nPhase 4 \u2014 Publish: Share the project on LinkedIn and Twitter with a clear description of what it does and what you learned building it. Add it to your pinned repos. Rahul published his standup-logger and got his first external star from a developer in Brazil within 3 days. Two weeks later, someone submitted a PR adding timezone support. His project had its first external contributor. That moment \u2014 seeing someone else care enough about your work to improve it \u2014 is what open source is really about.",
    funFact:
      "Linus Torvalds open-sourced Linux in 1991 with a note on a newsgroup saying 'I'm doing a free operating system (just a hobby)'. That hobby now powers 90% of all servers, 82% of smartphones, and all 500 of the world's fastest supercomputers. Your project won't be Linux — but you don't know who might see it, use it, or build on it. Open source starts with one person deciding to share.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul finishes his open source project. Which final step transforms it from a private project into a genuine open source contribution to the community?",
      options: [
        "Making the repository public on GitHub",
        "Adding a LICENSE file, CONTRIBUTING.md, good first issue labels, and sharing it publicly",
        "Posting the GitHub link in a WhatsApp group",
        "Getting at least 100 stars before calling it open source",
      ],
      correctAnswer:
        "Adding a LICENSE file, CONTRIBUTING.md, good first issue labels, and sharing it publicly",
      explanation:
        "A project is technically open source when it has a license (without one, others can't legally use your code). But a GREAT open source project also has a CONTRIBUTING.md (so people know how to help), good first issue labels (welcoming new contributors), and is actively shared (so people know it exists). Stars don't define open source — the license, documentation, and community invitation do.",
    },
  },
];
