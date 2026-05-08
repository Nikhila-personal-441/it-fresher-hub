// DevOps lessons — 35 scenario-based lessons featuring Arjun as a new DevOps engineer
import type { LessonContent } from "@/types";

export const DEVOPS_LESSONS: LessonContent[] = [
  // ── LESSON 1 ────────────────────────────────────────────────────────────────
  {
    title: "What is DevOps? Breaking the Dev-Ops Barrier",
    content:
      "Arjun joined a software company fresh out of college and was confused on his first day — developers were complaining that 'ops never deploys fast enough,' and the ops team was saying 'developers keep breaking production.' Sound familiar? This exact wall between software developers and IT operations is what DevOps was created to tear down.\n\nDevOps is not a tool or a job title — it is a culture and philosophy. It combines Development (writing code) and Operations (deploying and maintaining systems) into one continuous, collaborative process. Instead of devs throwing code 'over the wall' to ops once a month, DevOps teams ship small changes daily, automatically, with safety nets at every step.\n\nThe results are dramatic. Before DevOps, Amazon deployed code every few months. After adopting DevOps, they deploy every 11.7 seconds on average. Arjun quickly realized: DevOps is the difference between 'we update the app once a quarter' and 'we fixed that bug before your coffee got cold.'",
    funFact:
      "The term 'DevOps' was coined by Patrick Debois in 2009 at the first 'DevOpsDays' conference in Ghent, Belgium. That one conference sparked a global movement that transformed how software is built worldwide.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's team ships code once a month and deployments always break. What is the root problem DevOps solves?",
      options: [
        "Developers writing bad code",
        "The wall between development and operations teams",
        "Slow internet connections in the office",
        "Insufficient server hardware",
      ],
      correctAnswer: "The wall between development and operations teams",
      explanation:
        "DevOps breaks down the silos between dev and ops, enabling continuous collaboration, faster deployments, and shared ownership of production systems.",
    },
  },

  // ── LESSON 2 ────────────────────────────────────────────────────────────────
  {
    title: "DevOps vs Traditional IT: The Culture Shift",
    content:
      "Arjun's senior colleague Priya had worked at a traditional IT company for five years before joining their DevOps-first team. She described the old world: 'We had a dedicated release team that only deployed on Friday nights. The checklist had 200 steps. If anything failed, we rolled back and waited two more weeks.' The whole process was so risky because changes were so big and infrequent.\n\nIn traditional IT, teams are siloed: developers write features, QA testers check them in isolation, a release team handles deployments, and operations monitors production. Communication happens through tickets and formal handoffs, which means bugs found late are expensive to fix. The classic waterfall model — requirements → design → code → test → deploy — takes months per cycle.\n\nDevOps flips this by making releases small, frequent, and automated. Instead of deploying 500 changes at once and hoping nothing breaks, you deploy 5 changes every day. If one breaks, you know exactly what caused it and you can fix or revert it in minutes. Priya laughed when she told Arjun: 'I used to dread Fridays. Now deployments are as boring as sending an email.'",
    funFact:
      "High-performing DevOps teams deploy code 208 times more frequently than low-performing teams and recover from failures 2,604 times faster, according to the annual DORA (DevOps Research and Assessment) State of DevOps Report.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In traditional IT, a production outage takes 6 hours to fix because the release team is separate from developers. What DevOps principle solves this?",
      options: [
        "Buying faster servers",
        "Shared ownership: developers and ops work as one team",
        "Hiring more QA testers",
        "Writing more documentation",
      ],
      correctAnswer: "Shared ownership: developers and ops work as one team",
      explanation:
        "DevOps eliminates silos. Developers own their code all the way to production, so they are incentivized to write reliable, deployable software — and they fix issues fast because it is their problem too.",
    },
  },

  // ── LESSON 3 ────────────────────────────────────────────────────────────────
  {
    title: "CI/CD: The Heart of DevOps",
    content:
      "On Arjun's second week, his team lead Sneha explained the most important DevOps concept: CI/CD. 'Every time you push code to GitHub,' she said, 'our pipeline automatically builds it, runs all tests, and if everything passes, deploys it to staging. No human involvement needed.' Arjun stared at his screen: a single git push had triggered 47 automated steps and the feature was live in 8 minutes.\n\nCI stands for Continuous Integration: developers merge code into a shared main branch frequently (multiple times per day). Each merge triggers an automated build-and-test process. This catches integration bugs early — before they become expensive disasters. CD stands for Continuous Delivery (or Deployment): after CI succeeds, code is automatically packaged and deployed to staging, and then to production either automatically (Continuous Deployment) or with one manual approval click (Continuous Delivery).\n\nWithout CI/CD, integrating code from 10 developers who worked in isolation for two weeks is a nightmare — aptly called 'integration hell.' With CI/CD, merging is trivial because it happens every few hours. Sneha summarized it perfectly: 'CI/CD is like brushing your teeth daily instead of once a year. Small, regular maintenance beats one massive painful session every time.'",
    funFact:
      "Netflix runs over 4,000 production deployments every single day using CI/CD pipelines. Their 'chaos engineering' practice also intentionally breaks systems in production to ensure resilience — a philosophy called 'embrace failure.'",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's team merges code once a month and spends a week fixing merge conflicts. Which practice directly solves this?",
      options: [
        "Continuous Deployment to production",
        "Continuous Integration — merging small changes frequently",
        "Containerization with Docker",
        "Infrastructure as Code with Terraform",
      ],
      correctAnswer:
        "Continuous Integration — merging small changes frequently",
      explanation:
        "CI requires developers to merge into the main branch frequently (daily or more). Automated tests run on each merge, catching conflicts and bugs immediately rather than accumulating them for weeks.",
    },
  },

  // ── LESSON 4 ────────────────────────────────────────────────────────────────
  {
    title: "The DevOps Toolchain Overview",
    content:
      "Arjun was handed a whiteboard diagram on day three. It showed a circle with the words Plan → Code → Build → Test → Release → Deploy → Operate → Monitor — and then back to Plan. This is the DevOps infinity loop, and every section has tools that power it.\n\nFor planning, teams use Jira or Azure Boards to track user stories and sprints. For code, developers use Git (GitHub, GitLab, or Bitbucket) to version-control everything. Build and test phases use Jenkins, GitHub Actions, or CircleCI to compile code and run automated tests. Docker packages the application into containers. Kubernetes (K8s) orchestrates those containers across servers. Terraform provisions cloud infrastructure. Prometheus and Grafana monitor everything in production.\n\nArjun asked: 'Do I need to learn ALL of these?' Sneha replied: 'Not all at once. Learn Git and Docker first — they appear in every stage. Then CI/CD tools. Then monitoring. Master the fundamentals and the rest clicks into place.' The DevOps toolchain is not about using every tool; it is about choosing the right ones and connecting them into a smooth, automated pipeline.",
    funFact:
      "Kubernetes (K8s) was created at Google, inspired by their internal system called 'Borg' that managed 2 billion containers every week. Google donated it to the Cloud Native Computing Foundation (CNCF) in 2014, and it became the industry standard for container orchestration.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to pick the first two tools to learn for DevOps. What does Sneha recommend?",
      options: [
        "Kubernetes and Terraform",
        "Jenkins and Ansible",
        "Git and Docker",
        "Prometheus and Grafana",
      ],
      correctAnswer: "Git and Docker",
      explanation:
        "Git (version control) and Docker (containerization) appear in every stage of the DevOps pipeline. Mastering these fundamentals makes every other DevOps tool easier to understand.",
    },
  },

  // ── LESSON 5 ────────────────────────────────────────────────────────────────
  {
    title: "DevOps Culture: Collaboration and Shared Ownership",
    content:
      "Six months into the job, Arjun was on-call when a production database query started timing out at 2 AM. He called the backend developer Rahul instead of filing a ticket. Rahul looked at the slow query, pushed a fix in 20 minutes, and the pipeline deployed it automatically. Total downtime: 28 minutes. Arjun thought back to how his friend at a traditional company once waited 3 days for the ops team to even acknowledge a similar ticket.\n\nDevOps culture has three pillars. First, shared ownership: the team that builds it runs it ('you build it, you run it'). Developers care about reliability because they are the ones woken up at 2 AM when their code breaks. Second, blameless post-mortems: when something goes wrong, the team analyses what failed in the system — not who failed. This psychological safety encourages honesty and faster learning. Third, continuous improvement: every sprint includes time to improve tooling, reduce technical debt, and automate repetitive tasks.\n\nThe cultural change is often harder than the technical change. Sneha told Arjun: 'I have seen companies buy all the DevOps tools and still fail because the culture did not change. DevOps starts in people's heads, not in their tool subscriptions.'",
    funFact:
      "Google's 'Project Aristotle' found that psychological safety — feeling safe to take risks and speak up without fear of punishment — is the single most important factor in high-performing teams. This is why blameless post-mortems are a cornerstone of elite DevOps culture.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Production breaks at 2 AM. In a true DevOps culture, who is responsible for fixing it?",
      options: [
        "Only the operations team",
        "The manager who approved the deployment",
        "The team that built and owns the service",
        "A separate incident response team",
      ],
      correctAnswer: "The team that built and owns the service",
      explanation:
        "'You build it, you run it' is the DevOps mantra. Shared ownership means the development team is responsible for their service end-to-end, including 2 AM incidents. This incentivizes writing reliable, observable code.",
    },
  },

  // ── LESSON 6 ────────────────────────────────────────────────────────────────
  {
    title: "Linux for DevOps: Essential Commands",
    content:
      "Arjun's first real task as a DevOps engineer was to SSH into a production server and check why a deployment was stuck. He had only used Windows his whole life. 'Do not panic,' Sneha said. 'Linux is just a very honest operating system. It does exactly what you tell it, nothing more.' She handed him a cheat sheet.\n\nThe most essential commands Arjun learned that day: <code>ls -la</code> (list all files including hidden ones with details), <code>cd /var/log/app</code> (navigate to the application logs directory), <code>tail -f app.log</code> (watch a log file update in real-time — the -f flag means 'follow'), <code>grep 'ERROR' app.log</code> (search for error messages in the log), <code>ps aux | grep java</code> (find a running Java process), and <code>kill -9 &lt;PID&gt;</code> (force-kill a stuck process by its process ID).\n\nWithin an hour, Arjun had found the stuck Java process (PID 4821), killed it, restarted the service with <code>systemctl restart app-service</code>, and watched the deployment complete. 'You just did ops,' Sneha said. Linux is the language of servers — and servers are where DevOps lives.",
    funFact:
      "About 96.3% of the top one million web servers run Linux. When you visit YouTube, Instagram, or any major website, you are almost certainly being served content from a Linux machine. Learning Linux is not optional for DevOps — it is the foundation.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants to watch a log file update in real-time as a deployment runs. Which command does he use?",
      options: [
        "cat app.log",
        "tail -f app.log",
        "grep app.log",
        "ls -la app.log",
      ],
      correctAnswer: "tail -f app.log",
      explanation:
        "The 'tail -f' command shows the last lines of a file and 'follows' it — printing new lines as they are written. This is the standard way to monitor live log output during deployments or debugging.",
    },
  },

  // ── LESSON 7 ────────────────────────────────────────────────────────────────
  {
    title: "Linux File System and Permissions",
    content:
      "One morning, Arjun tried to start the app service and got: <code>Permission denied: cannot read /etc/app/config.yml</code>. He was confused — the file was right there! Sneha explained: 'In Linux, every file has an owner and a set of permissions. The config file is owned by root, and your user account does not have read access.' This is Linux's security model, and it is vital for DevOps.\n\nLinux permissions are displayed as a 10-character string like <code>-rw-r--r--</code>. Breaking it down: the first character is the file type (- for file, d for directory). The next three are owner permissions (r=read, w=write, x=execute). Then group permissions. Then everyone else's. So <code>-rw-r--r--</code> means: the owner can read and write; the group and others can only read.\n\nThe command <code>chmod 755 deploy.sh</code> sets permissions numerically (7=rwx for owner, 5=r-x for group, 5=r-x for others). <code>chown arjun:devteam config.yml</code> changes the file owner to arjun and group to devteam. Once Arjun ran <code>sudo chmod 644 /etc/app/config.yml</code> to give his process read access, the service started perfectly. Understanding file permissions prevents 40% of 'why won't this start?' problems in DevOps.",
    funFact:
      "The famous Linux directory /etc (pronounced 'et-cetera' or 'etsy') historically stands for 'Editable Text Configuration.' It stores all system-wide configuration files — every DevOps engineer spends a lot of time here diagnosing issues.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To give a shell script owner=rwx, group=r-x, others=r-x, Arjun runs: chmod ___ deploy.sh",
      correctAnswer: "755",
      explanation:
        "In Linux permissions: r=4, w=2, x=1. Owner needs rwx = 4+2+1 = 7. Group needs r-x = 4+0+1 = 5. Others need r-x = 4+0+1 = 5. So chmod 755 gives the right permissions to execute the script.",
    },
  },

  // ── LESSON 8 ────────────────────────────────────────────────────────────────
  {
    title: "Process Management in Linux",
    content:
      "During a load test, Arjun noticed the application server was sluggish. He needed to find which process was eating all the CPU. His go-to command: <code>top</code> — a real-time process viewer showing CPU %, memory %, and process names. He saw a Java process consuming 98% CPU. He noted the PID (3847) and investigated further with <code>ps aux --sort=-%cpu | head -10</code> to see the top 10 CPU-hungry processes.\n\nLinux processes have states: Running (actively using CPU), Sleeping (waiting for I/O), Stopped (paused), and Zombie (finished but not cleaned up by parent). Every process has a parent — the <code>pstree</code> command shows this hierarchy visually. When you start an app service, it spawns child processes for each connection or worker thread.\n\nKey process commands: <code>jobs</code> (list background jobs in your shell), <code>bg</code> (send to background), <code>fg</code> (bring to foreground), <code>nohup ./start.sh &amp;</code> (run a process that survives after you log out — critical for servers). Arjun learned to use <code>htop</code> (an improved, colorful version of top with mouse support) for daily monitoring. 'Process management,' Sneha said, 'is how you know your server is healthy.'",
    funFact:
      "Process ID 1 on any Linux system is the 'init' process (now usually 'systemd'). It is the mother of all processes — every other process on the system is its descendant. When systemd crashes, the entire OS panics. This is why it is called 'PID 1' — the first and most important.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to start a long-running deployment script on a remote server and keep it running after he closes his SSH session. Which command does he use?",
      options: [
        "ps aux ./deploy.sh",
        "run ./deploy.sh --keep",
        "nohup ./deploy.sh &",
        "chmod +x ./deploy.sh",
      ],
      correctAnswer: "nohup ./deploy.sh &",
      explanation:
        "The 'nohup' command ('no hangup') prevents the process from receiving the SIGHUP signal when the terminal closes. The '&' sends it to the background. Together, the script runs even after Arjun disconnects his SSH session.",
    },
  },

  // ── LESSON 9 ────────────────────────────────────────────────────────────────
  {
    title: "Shell Scripting for DevOps Automation",
    content:
      'Every week, Arjun manually backed up the database, compressed the logs, and emailed the team a status report. It took 45 minutes each time. Sneha watched him do it once and said: \'Write a shell script. You should be automating everything you do more than twice.\' Two hours later, Arjun had a script that did all three tasks in 90 seconds — scheduled automatically via cron.\n\nA shell script is a text file containing a sequence of shell commands. The first line is always a \'shebang\': <code>#!/bin/bash</code> — it tells the OS which interpreter to use. Variables are set with <code>DB_NAME="production_db"</code> and used with <code>$DB_NAME</code>. Conditionals use <code>if [ $EXIT_CODE -eq 0 ]; then echo "Success"; else echo "Failed"; fi</code>. Loops use <code>for file in /logs/*.log; do gzip $file; done</code>.\n\nArjun\'s backup script looked like this: <code>#!/bin/bash&#10;DATE=$(date +%Y-%m-%d)&#10;mysqldump production > backup_$DATE.sql&#10;gzip backup_$DATE.sql&#10;echo "Backup $DATE complete" | mail -s "Backup Done" team@company.com</code>. He scheduled it with <code>crontab -e</code> and the line <code>0 2 * * * /home/arjun/scripts/backup.sh</code> runs it every day at 2 AM. \'That,\' Sneha said, \'is 45 minutes back every week. That is DevOps.\'',
    funFact:
      "Shell scripts power the backbone of internet infrastructure. Linux package managers (apt, yum), system startup sequences, and many cloud provider CLI tools are entirely written in shell script. When AWS boots an EC2 instance, it runs shell scripts to configure your environment.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To schedule a script to run every day at midnight, Arjun's crontab entry starts with: ___ 0 * * * /scripts/daily.sh",
      correctAnswer: "0",
      explanation:
        "Cron syntax is: minute hour day-of-month month day-of-week command. '0 0 * * *' means: at minute 0, hour 0 (midnight), every day of month, every month, every day of week. The first '0' is the minute field.",
    },
  },

  // ── LESSON 10 ───────────────────────────────────────────────────────────────
  {
    title: "SSH: Securely Connecting to Servers",
    content:
      "Arjun needed to access a production server in AWS to diagnose a live issue. In the old days, people used Telnet — which sent your password over the network in plain text, readable by anyone who intercepted it. Today, SSH (Secure Shell) encrypts everything using public-key cryptography, making it impossible to eavesdrop.\n\nSSH uses a key pair: a private key (you keep this secret on your laptop) and a public key (you put this on every server you want to access). When you connect, the server sends a random challenge encrypted with your public key. Only your private key can decrypt it, proving you are who you claim to be — no password ever travels over the network. Arjun generated his key pair with <code>ssh-keygen -t ed25519 -C \"arjun@company.com\"</code> which created two files: <code>~/.ssh/id_ed25519</code> (private) and <code>~/.ssh/id_ed25519.pub</code> (public).\n\nTo connect: <code>ssh -i ~/.ssh/id_ed25519 ubuntu@10.0.1.45</code>. To copy files: <code>scp deploy.tar.gz ubuntu@10.0.1.45:/opt/app/</code>. Arjun also set up an SSH config file at <code>~/.ssh/config</code> so he could type <code>ssh prod-server</code> instead of the full command. Sneha warned: 'Never share your private key. Never store it unencrypted on a shared machine. Treat it like your bank card PIN.'",
    funFact:
      "SSH was invented by Tatu Ylönen in 1995 after his university network was attacked and passwords were stolen via a packet sniffer. He wrote the first SSH implementation in two months specifically to solve this problem. It is now used for billions of connections daily.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "When Arjun SSHes into a server, which file does he NEVER share with anyone?",
      options: [
        "~/.ssh/id_ed25519.pub (public key)",
        "~/.ssh/config (config file)",
        "~/.ssh/id_ed25519 (private key)",
        "~/.ssh/known_hosts (known hosts file)",
      ],
      correctAnswer: "~/.ssh/id_ed25519 (private key)",
      explanation:
        "The private key is the secret half of your key pair. Sharing it would let anyone impersonate you and log into every server where your public key is registered. The public key (.pub) is safe to share widely — that is its purpose.",
    },
  },

  // ── LESSON 11 ───────────────────────────────────────────────────────────────
  {
    title: "Git for DevOps: Branching Strategies",
    content:
      "On Arjun's first sprint, he accidentally pushed a half-finished feature directly to the main branch. The CI pipeline ran, tests failed, and the entire team's build broke. 'Never push to main directly,' Sneha said firmly. 'We use feature branches.' This painful lesson introduced Arjun to the most important DevOps skill: branching.\n\nA branch is a parallel universe of your codebase. You create one with <code>git checkout -b feature/user-auth</code>. All your changes stay isolated in this branch. When your feature is complete and tested, you open a Pull Request to merge it back into main. This keeps main always in a deployable state — the golden rule of CI/CD.\n\nCommon branching patterns: Feature Branching (one branch per feature, merged via PR), GitFlow (feature branches + develop branch + release branches + hotfix branches), and Trunk-Based Development (everyone merges to main daily, uses feature flags to hide unfinished work). For most teams, Trunk-Based Development with feature flags is the fastest path to continuous deployment. Arjun's team used it: short-lived branches that lived less than 24 hours, merged quickly before they drifted too far from main. 'If your branch is older than a day,' Sneha said, 'it is already a problem.'",
    funFact:
      "Linus Torvalds (creator of Linux) created Git in just 10 days in 2005 after the Linux kernel project lost access to their previous version control system. He built it specifically to handle the Linux kernel's scale — thousands of contributors, millions of lines of code.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To create and immediately switch to a new feature branch, Arjun types: git checkout ___ feature/payment-api",
      correctAnswer: "-b",
      explanation:
        "The '-b' flag in 'git checkout -b <branch-name>' creates a new branch and immediately switches to it. Without '-b', you would only switch to an existing branch — and get an error if it does not exist.",
    },
  },

  // ── LESSON 12 ───────────────────────────────────────────────────────────────
  {
    title: "Git Merge vs Rebase: When to Use Each",
    content:
      "Arjun had been working on a feature branch for two days when he noticed main had 15 new commits ahead of him. He needed to incorporate those changes. He had two options: merge or rebase. 'This is one of the most debated topics in Git,' Rahul told him with a grin. 'Let me show you the difference.'\n\nGit Merge (<code>git merge main</code>) creates a new 'merge commit' that ties the two branches' histories together. The result preserves exactly what happened and when — every commit, every branch point. The downside: the history graph gets complex with many merge commits, especially in active teams. This is non-destructive and safe for shared branches.\n\nGit Rebase (<code>git rebase main</code>) rewrites your branch commits as if they had been started from the current tip of main. The result is a perfectly linear history — clean and easy to read. The downside: it rewrites commit history, which is dangerous for shared branches (it creates new commit hashes, causing conflicts for anyone else who has the old commits). The golden rule Rahul taught Arjun: 'Rebase your own private feature branches before merging. Never rebase a shared branch that others are working on. Merge is always safe; rebase is a power tool.'",
    funFact:
      "The phrase 'golden rule of rebasing' in the Git community is: never rebase public history. In 2012, a developer at a major tech company accidentally rebased the main branch with thousands of commits. It took three senior engineers an entire day to untangle the resulting chaos.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants to clean up his private feature branch's commits before opening a PR, making the history linear. What should he use?",
      options: [
        "git merge main",
        "git rebase main",
        "git reset --hard main",
        "git cherry-pick main",
      ],
      correctAnswer: "git rebase main",
      explanation:
        "Rebase rewrites the feature branch commits on top of the current main, creating a clean linear history. Since it is Arjun's private branch that no one else is using, rebasing is safe and preferred before creating a pull request.",
    },
  },

  // ── LESSON 13 ───────────────────────────────────────────────────────────────
  {
    title: "Pull Requests and Code Review in DevOps",
    content:
      "After finishing his first feature, Arjun opened his first Pull Request (PR) on GitHub. He was nervous — three senior engineers would review his code. Within an hour he had 12 comments. Not 'your code is wrong' comments, but 'have you considered...' and 'this could be simplified to...' and 'what happens if this function receives null?' By the time the PR was approved, Arjun had learned more than in two days of reading documentation.\n\nA Pull Request is a formal request to merge code from a feature branch into main. It is the primary quality gate in DevOps. Good PRs are small (ideally under 400 lines changed), have a clear description ('This PR adds JWT authentication for the /api/user endpoint'), include tests, and link to the relevant Jira ticket. Small PRs get reviewed faster and catch bugs more reliably — studies show reviewers miss 70% of bugs in PRs over 400 lines.\n\nSneha set up branch protection rules: no one could push directly to main, every PR needed at least two approvals, and the CI pipeline had to pass before merging. She also added a PR template so every PR had sections for 'What changed', 'How to test', and 'Screenshots' for UI changes. Arjun adopted the habit of reviewing at least two other PRs before his own got attention — it was unspoken but understood: code review is a team sport, not a solo performance.",
    funFact:
      "Google requires every single code change — no matter how small — to be reviewed by at least one other engineer. This includes bug fixes, documentation changes, and even typo corrections. In a 2018 study, Google found this practice catches an average of 4.5 defects per 1000 lines of code reviewed.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's PR changes 1,200 lines of code across 15 files. The reviewer says it is 'too large to review properly.' What should Arjun do next time?",
      options: [
        "Request a different reviewer who works faster",
        "Break the feature into smaller PRs of under 400 lines each",
        "Add more comments to the code to help the reviewer",
        "Merge without review since the feature is urgent",
      ],
      correctAnswer:
        "Break the feature into smaller PRs of under 400 lines each",
      explanation:
        "Smaller PRs are reviewed more thoroughly and merged faster. A good rule: each PR should do one thing. Large PRs overwhelm reviewers — research shows review quality drops sharply above 400 lines, leading to missed bugs.",
    },
  },

  // ── LESSON 14 ───────────────────────────────────────────────────────────────
  {
    title: "Git Hooks: Automating Quality Checks",
    content:
      "Arjun kept accidentally committing code with debug print statements left in — <code>console.log('TESTING 123')</code> in production-bound JavaScript. His team lead was not amused. Sneha showed him Git hooks: 'These are scripts that Git runs automatically at specific points. Set one up as a pre-commit hook and it will check your code before the commit is even created.'\n\nGit hooks live in the <code>.git/hooks/</code> directory of any repository. They are just shell scripts named after the event they hook into. The pre-commit hook runs before a commit is created — perfect for linting, formatting, and blocking debug statements. Arjun created <code>.git/hooks/pre-commit</code>: <code>#!/bin/bash&#10;if grep -r 'console.log' src/ --include='*.js'; then&#10;  echo 'ERROR: Remove console.log before committing!'&#10;  exit 1&#10;fi</code>. Made it executable with <code>chmod +x .git/hooks/pre-commit</code>. Now any commit with console.log was blocked.\n\nOther useful hooks: <code>commit-msg</code> enforces commit message format (e.g., 'feat: add user login' — Conventional Commits standard), <code>pre-push</code> runs the full test suite before pushing to prevent broken code reaching the server, and <code>post-checkout</code> auto-installs dependencies when switching branches. For team-wide hooks, Arjun used Husky (a Node.js tool) to commit hook scripts to the repository so every team member automatically gets them.",
    funFact:
      "The Conventional Commits specification (e.g., 'feat:', 'fix:', 'chore:') was adopted by Angular, Vue, and thousands of open-source projects. When followed, it enables automated changelog generation and semantic version bumping — a single git push can automatically release a new npm package version.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants to run linting automatically before every commit and block the commit if linting fails. Which Git hook does he use?",
      options: ["commit-msg", "pre-push", "pre-commit", "post-commit"],
      correctAnswer: "pre-commit",
      explanation:
        "The pre-commit hook runs immediately before Git creates a commit. If the script exits with a non-zero status code, the commit is aborted. This is the standard place for linting, formatting checks, and blocking forbidden patterns.",
    },
  },

  // ── LESSON 15 ───────────────────────────────────────────────────────────────
  {
    title: "GitHub Flow vs Git Flow",
    content:
      "Arjun's team was debating which branching strategy to adopt. Priya, who had worked at a larger enterprise, advocated for Git Flow. Sneha preferred GitHub Flow. 'Let me show you the difference,' Sneha said, drawing on the whiteboard.\n\nGit Flow (created by Vincent Driessen in 2010) uses multiple long-lived branches: <code>main</code> (production), <code>develop</code> (integration), <code>feature/*</code> (new features), <code>release/*</code> (stabilization before release), and <code>hotfix/*</code> (urgent production fixes). It is well-suited for software with scheduled release cycles — mobile apps, packaged software, or anything with versioned releases shipped to customers. The complexity is worth it when you maintain multiple live versions simultaneously.\n\nGitHub Flow is simpler: one main branch + short-lived feature branches + pull requests. That is it. Features are developed in branches, reviewed via PR, merged to main, and deployed immediately. It assumes you deploy continuously — which is the DevOps ideal. Arjun's team chose GitHub Flow because they deployed multiple times per day. Sneha summarized: 'Git Flow is for companies that ship software on a CD. GitHub Flow is for companies that ship software on the internet. We ship on the internet.' The right answer depends on your release cadence — there is no universally 'better' strategy.",
    funFact:
      "GitHub itself uses GitHub Flow — not Git Flow. They deploy to production over 60 times per day. Every time a PR is merged to main, it goes through automated testing and, if it passes, is automatically deployed to production within minutes.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's team deploys multiple times per day using CI/CD. Which branching strategy is most appropriate?",
      options: [
        "Git Flow with develop, release, and hotfix branches",
        "GitHub Flow with short-lived feature branches merged to main",
        "No branching — everyone commits to main directly",
        "A separate branch for each developer",
      ],
      correctAnswer:
        "GitHub Flow with short-lived feature branches merged to main",
      explanation:
        "GitHub Flow's simplicity — branch, PR, merge, deploy — aligns perfectly with continuous deployment. Git Flow's multiple long-lived branches add complexity only justified when maintaining multiple software versions simultaneously.",
    },
  },

  // ── LESSON 16 ───────────────────────────────────────────────────────────────
  {
    title: "Docker: Containerizing Applications",
    content:
      "Arjun spent an entire afternoon trying to run Rahul's Node.js app on his laptop. 'It works on my machine!' Rahul said. Arjun had Node version 14, but the app needed version 18. He had PostgreSQL 12, but the app needed 14. After two hours of version conflicts, Sneha walked over and said four words: 'We should use Docker.'\n\nDocker packages an application together with its entire environment — OS libraries, runtime, dependencies, configuration — into a portable unit called a container. The container runs identically on any machine with Docker installed, whether it is a developer's MacBook, a colleague's Windows PC, or a production server in AWS. 'It works on my machine' becomes 'it works everywhere because it IS the machine.'\n\nUnder the hood, Docker uses Linux kernel features (namespaces and cgroups) to isolate processes. A container is not a virtual machine — it shares the host OS kernel but has its own isolated filesystem, network, and process space. This makes containers extremely lightweight: a Docker container starts in milliseconds and uses megabytes of RAM, versus minutes and gigabytes for a VM. After Arjun dockerized Rahul's app, setting it up went from a 2-hour nightmare to a single command: <code>docker run -p 3000:3000 rahul/node-app:1.0</code>.",
    funFact:
      "Docker was released in 2013 and went from zero to 100 million downloads in under two years — the fastest adoption of any developer tool in history at that time. Its mascot, Moby the whale, carries shipping containers on its back — a perfect metaphor for portable, standardized software packages.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's app works on his laptop but fails on the production server due to different Node.js versions. What does Docker solve?",
      options: [
        "It installs the same Node.js version on every server automatically",
        "It packages the app with its entire environment so it runs identically everywhere",
        "It prevents version mismatches by locking npm packages",
        "It creates a virtual machine with the exact same specs as Arjun's laptop",
      ],
      correctAnswer:
        "It packages the app with its entire environment so it runs identically everywhere",
      explanation:
        "A Docker container includes the application and all its dependencies — including the exact runtime version, OS libraries, and configuration. It runs identically regardless of the host machine's software, eliminating environment-mismatch bugs.",
    },
  },

  // ── LESSON 17 ───────────────────────────────────────────────────────────────
  {
    title: "Writing a Dockerfile",
    content:
      "Sneha handed Arjun his next task: 'Containerize our Python Flask API.' Arjun opened the project and created a new file called <code>Dockerfile</code> (no extension). This file is a recipe that tells Docker how to build a container image for the application.\n\nArjun's Dockerfile: <code>FROM python:3.11-slim</code> (start from an official lightweight Python base image), <code>WORKDIR /app</code> (set working directory inside the container), <code>COPY requirements.txt .</code> (copy the requirements file first — this layer is cached if requirements haven't changed), <code>RUN pip install --no-cache-dir -r requirements.txt</code> (install dependencies), <code>COPY . .</code> (copy all app source code), <code>EXPOSE 5000</code> (document that the app listens on port 5000), <code>CMD [\"python\", \"app.py\"]</code> (default command when container starts).\n\nDocker builds images in layers. Each instruction creates a new layer, and Docker caches layers that haven't changed. This is why Arjun copies <code>requirements.txt</code> BEFORE copying source code — dependencies change rarely, so that layer stays cached. If he copied everything at once and changed one line of code, Docker would reinstall all dependencies every build. He built the image with <code>docker build -t flask-api:1.0 .</code> and ran it with <code>docker run -p 5000:5000 flask-api:1.0</code>. The API was running locally in under 90 seconds.",
    funFact:
      "Docker images for popular languages like Python and Node.js come in 'slim' and 'alpine' variants. A standard Python image is about 900MB. Python-slim is 125MB. Python-alpine (using Alpine Linux) is just 18MB. Choosing the right base image can cut your deployment time by 80% and reduce your attack surface.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In his Dockerfile, Arjun copies requirements.txt BEFORE copying source code. Why?",
      options: [
        "Docker requires requirements.txt to be processed first",
        "To leverage Docker layer caching — dependencies change rarely, source code changes often",
        "Requirements.txt is alphabetically first",
        "Source code cannot be copied until dependencies are installed",
      ],
      correctAnswer:
        "To leverage Docker layer caching — dependencies change rarely, source code changes often",
      explanation:
        "Docker caches each layer. If you COPY requirements.txt then RUN pip install as separate steps, the pip install layer is only rebuilt when requirements.txt changes. Copying source code separately means code changes don't invalidate the dependencies layer, making builds much faster.",
    },
  },

  // ── LESSON 18 ───────────────────────────────────────────────────────────────
  {
    title: "Docker Compose: Multi-Container Apps",
    content:
      "The Flask API worked perfectly in Docker, but it needed a PostgreSQL database and a Redis cache. Running three separate <code>docker run</code> commands with the right network flags and environment variables was getting unwieldy. Arjun was typing out a 200-character docker run command when Sneha stopped him: 'Use Docker Compose. Define the whole stack in one file.'\n\nDocker Compose uses a YAML file (<code>docker-compose.yml</code>) to define multiple services, their relationships, volumes, and networks. Arjun's compose file defined three services: <code>api</code> (the Flask app, built from the Dockerfile, port 5000), <code>db</code> (official postgres:14 image, with environment variables for username/password/database), and <code>redis</code> (official redis:7 image). He set <code>depends_on: [db, redis]</code> on the API service so it waited for the database and cache to start.\n\nWith Docker Compose, the entire three-service stack started with one command: <code>docker-compose up</code>. To stop everything: <code>docker-compose down</code>. To rebuild and restart: <code>docker-compose up --build</code>. The Compose file lived in the Git repository, so any developer could clone the project and have a complete local development environment — database, cache, and all — running in 3 minutes. Arjun committed the compose file, pushed it, and messaged the team: 'Local dev setup is now one command. You're welcome.'",
    funFact:
      "Docker Compose was originally a separate open-source project called 'Fig,' created by Orchard (later acquired by Docker Inc. in 2014). Interestingly, 'Fig' was written in Python — and so was the original Docker Compose. Only in newer versions was it rewritten in Go.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "The single Docker Compose command to start all services defined in docker-compose.yml is: docker-compose ___",
      correctAnswer: "up",
      explanation:
        "docker-compose up starts all services defined in your docker-compose.yml. Add '-d' to run in detached (background) mode. Use 'docker-compose down' to stop and remove containers, networks, and volumes created by 'up'.",
    },
  },

  // ── LESSON 19 ───────────────────────────────────────────────────────────────
  {
    title: "Docker Registries: Docker Hub and ECR",
    content:
      "Arjun built a Docker image on his laptop and needed to deploy it to the production server in AWS. He couldn't just copy the image — it was 800MB. Sneha introduced him to Docker registries: 'Think of it like GitHub, but for Docker images instead of source code. You push your image to a registry, and any server can pull it from there.'\n\nDocker Hub is the default public registry. <code>docker push arjun/flask-api:1.0</code> uploads the image, and <code>docker pull arjun/flask-api:1.0</code> downloads it on any other machine. Free for public images; paid plans for private repos. It hosts official images for every major technology — the <code>postgres</code>, <code>redis</code>, and <code>python</code> images Arjun used all came from Docker Hub.\n\nFor production at companies, private registries are essential — you do not want competitors pulling your proprietary app image. AWS provides ECR (Elastic Container Registry). After configuring credentials with <code>aws ecr get-login-password | docker login --username AWS --password-stdin &lt;your-ecr-url&gt;</code>, the push and pull workflow is identical. Arjun set up a CI/CD pipeline that automatically built the Docker image, pushed it to ECR with the Git commit hash as the tag (<code>flask-api:a3f9d21</code>), and then updated the production Kubernetes cluster to use the new tag. Immutable tags — using commit hashes instead of 'latest' — meant he could trace exactly which code version was running in production at any time.",
    funFact:
      "The Docker Hub image for the 'hello-world' container — used to verify Docker is installed correctly — has been pulled over 10 billion times. The entire image is just 13KB and does nothing except print a message. It is the most downloaded piece of software on the internet that does the least.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun tags production Docker images with Git commit hashes (e.g., api:a3f9d21) instead of 'api:latest'. What is the advantage?",
      options: [
        "Commit hashes are shorter and easier to type",
        "Immutable tags let him trace exactly which code version is running in production",
        "Docker Hub requires commit hash tags for private images",
        "ECR does not support the 'latest' tag",
      ],
      correctAnswer:
        "Immutable tags let him trace exactly which code version is running in production",
      explanation:
        "The 'latest' tag always points to the most recent build, making it ambiguous — 'which latest?' Commit hash tags are immutable: api:a3f9d21 always means that exact commit. This is essential for debugging, rollbacks, and audit trails.",
    },
  },

  // ── LESSON 20 ───────────────────────────────────────────────────────────────
  {
    title: "Container vs Virtual Machine",
    content:
      "During a sprint retrospective, Priya raised a question: 'We have containers now, but we also have VMs in AWS. Are we paying for both? Why?' Arjun had been wondering the same thing. Sneha drew a comparison on the whiteboard that clicked for everyone in the room.\n\nA Virtual Machine (VM) uses a hypervisor to emulate an entire computer — CPU, memory, storage, network card, and a full OS (kernel and all). An AWS EC2 instance is a VM. Each VM takes minutes to start, uses gigabytes of RAM just for the OS, and typically runs one application per VM for isolation. The advantage: complete isolation — each VM is entirely independent, even at the OS level.\n\nA container shares the host OS kernel. It has its own isolated filesystem and process space, but there is no second OS. This makes containers: fast to start (milliseconds vs minutes), lightweight (megabytes of RAM vs gigabytes), and highly portable. The relationship in practice: VMs provide the foundation, containers run on top of them. Arjun's production setup had 3 EC2 VMs (the underlying hardware+OS), each running 15 Docker containers — 45 containers on 3 VMs. Without containers, he would have needed 45 VMs. Containers let you pack more applications onto each VM, dramatically reducing cloud costs.",
    funFact:
      "Netflix runs all their microservices in containers on AWS. They have over 700 microservices. Before containers, each service required its own VM — that would be 700+ EC2 instances. With containers, they pack multiple services per instance, saving millions of dollars annually in infrastructure costs.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why can Arjun run 15 Docker containers on a single EC2 VM, but not 15 separate VMs on the same hardware?",
      options: [
        "AWS limits EC2 instances to 15 sub-VMs",
        "Containers share the host OS kernel, using much less memory than full VMs",
        "Docker containers run faster than VMs so they need less CPU",
        "EC2 VMs cannot run other VMs inside them",
      ],
      correctAnswer:
        "Containers share the host OS kernel, using much less memory than full VMs",
      explanation:
        "Each VM needs its own full OS, which consumes 1-2GB of RAM just to boot. Containers share the host OS kernel, so they only use memory for the application itself — often 50-200MB. This is why you can run many more containers than VMs on the same hardware.",
    },
  },

  // ── LESSON 21 ───────────────────────────────────────────────────────────────
  {
    title: "CI with Jenkins: Setting Up Your First Pipeline",
    content:
      "The team decided to standardize deployments using Jenkins — a popular open-source CI server. Arjun was tasked with setting up the first pipeline. Jenkins runs on a server and listens for Git events — every push to GitHub triggers a build. The configuration lives in a file called <code>Jenkinsfile</code>, committed to the repository alongside the code.\n\nArjun's first Jenkinsfile had four stages: <code>Checkout</code> (Jenkins clones the repository), <code>Build</code> (runs <code>docker build -t flask-api:$BUILD_NUMBER .</code>), <code>Test</code> (runs <code>pytest tests/</code> inside the container), and <code>Deploy</code> (pushes the image to ECR and updates the staging server). Each stage shows green or red in the Jenkins UI — like a traffic light for your code. If the Test stage fails, Deploy never runs.\n\nJenkins has thousands of plugins: one integrates with GitHub to trigger builds on pull requests, another sends Slack notifications when a build fails, another publishes test coverage reports. Arjun set up a pipeline that ran on every PR and posted results as a GitHub status check — the 'CI checks must pass' requirement Sneha had configured earlier. The first time a broken PR was automatically blocked by Jenkins before any human even saw it, Arjun felt the magic of CI: the machine is reviewing code quality 24/7, for free.",
    funFact:
      "Jenkins was originally created as 'Hudson' at Sun Microsystems in 2004 by Kohsuke Kawaguchi. After Oracle acquired Sun in 2010, a fork was created and renamed 'Jenkins.' Today Jenkins has over 1,800 plugins and runs in over 300,000 organizations worldwide.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Arjun's Jenkins pipeline, the Test stage fails. What happens to the Deploy stage?",
      options: [
        "Deploy runs anyway but marks itself as unstable",
        "Deploy is skipped and the pipeline fails at the Test stage",
        "Deploy runs with the last successful build's artifact",
        "Jenkins asks Arjun to manually approve the Deploy stage",
      ],
      correctAnswer:
        "Deploy is skipped and the pipeline fails at the Test stage",
      explanation:
        "In a Jenkins pipeline, stages run sequentially. If any stage fails (exits with a non-zero status code), subsequent stages are skipped and the entire pipeline is marked as failed. This prevents broken code from ever being deployed.",
    },
  },

  // ── LESSON 22 ───────────────────────────────────────────────────────────────
  {
    title: "GitHub Actions: Modern CI/CD",
    content:
      "After six months with Jenkins, the team switched to GitHub Actions — GitHub's built-in CI/CD system. 'No more maintaining a separate Jenkins server,' Sneha announced. With GitHub Actions, the pipeline configuration lives directly in the repository as YAML files in <code>.github/workflows/</code>, and GitHub's own servers run the pipelines. Zero infrastructure to manage.\n\nArjun created <code>.github/workflows/deploy.yml</code>. The file started with <code>on: push: branches: [main]</code> — trigger on every push to main. It defined one <code>job</code> called <code>build-and-deploy</code> with <code>runs-on: ubuntu-latest</code>. The steps: checkout the code, set up Python 3.11, install dependencies, run pytest, build the Docker image, push to ECR, and deploy to ECS. Each step was either a shell command or a reusable <code>uses: actions/setup-python@v5</code> action from the GitHub Marketplace.\n\nGitHub Actions has three killer features over Jenkins: no server to maintain, native GitHub integration (PRs show pipeline status inline), and the Marketplace with thousands of pre-built actions for common tasks. The tradeoff: it is tied to GitHub and has per-minute pricing for private repositories. For most teams, GitHub Actions is the default choice today — and Jenkins remains relevant for large enterprises with complex, multi-cloud requirements. Arjun's pipeline went from 400 lines of Groovy Jenkinsfile to 60 lines of clean YAML.",
    funFact:
      "GitHub Actions was launched in October 2018 and in just two years became the most popular CI/CD platform for open-source projects, overtaking Travis CI (which had been the dominant choice for nearly a decade). GitHub's deep integration advantage proved insurmountable for competitors.",
    xpReward: 90,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "GitHub Actions workflow files are stored in the directory: .github/___/",
      correctAnswer: "workflows",
      explanation:
        "GitHub automatically detects workflow files placed in the .github/workflows/ directory of a repository. Any YAML file in this directory becomes a workflow that GitHub Actions can execute. The file name becomes the workflow's name in the GitHub UI.",
    },
  },

  // ── LESSON 23 ───────────────────────────────────────────────────────────────
  {
    title: "Pipeline Stages: Build, Test, Deploy",
    content:
      "Priya asked Arjun to present how their CI/CD pipeline worked to new team members. He broke it into three fundamental stages that every serious pipeline must have, explaining each with their real pipeline as an example.\n\nBuild Stage: Compile the code and package it. For Java, <code>mvn package</code> creates a JAR file. For Python, <code>docker build</code> creates a container image. For JavaScript, <code>npm run build</code> produces optimized static files. The output is an artifact — a deployable package. Critically, the same artifact built once is promoted through all environments. You never rebuild for each environment because rebuilding could produce a slightly different binary.\n\nTest Stage: Run all automated tests against the artifact. Unit tests (test individual functions in isolation — fast, many), integration tests (test component interactions — slower, fewer), end-to-end tests (test the full user journey via a browser — slowest, fewest). This pyramid approach maximizes coverage while keeping pipeline fast. If any test fails, the pipeline stops — no broken code moves forward.\n\nDeploy Stage: Push the artifact to the target environment. First to Dev (automatic on every merge), then to Staging (automatic or one-click), then to Production (with approval or automatic for high-trust teams). Each environment is an exact replica of the previous — same Docker image, just different configuration. Arjun's rule: 'If it works in staging, it works in prod. If there is a discrepancy, fix the environment, not the code.'",
    funFact:
      "Amazon's deployment pipeline famously has a concept called 'The Andon Cord' — borrowed from Toyota's manufacturing floor, where any worker can pull a cord to stop the production line. Any Amazon engineer can halt all deployments company-wide with one command. This power comes with responsibility: false alarms are tracked and reviewed.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's team builds a Docker image in CI and promotes the SAME image to dev, staging, and production. Why not rebuild for each environment?",
      options: [
        "Building is expensive and wastes CI minutes",
        "Rebuilding could produce a slightly different binary, violating the 'same artifact' guarantee",
        "Docker does not support multiple tags per image",
        "Each environment uses a different Dockerfile anyway",
      ],
      correctAnswer:
        "Rebuilding could produce a slightly different binary, violating the 'same artifact' guarantee",
      explanation:
        "If you rebuild from source in each environment, subtle differences (different package versions, different build tool versions) can creep in. The gold standard is: build once, test that artifact, deploy that exact artifact everywhere. What you tested is exactly what runs in production.",
    },
  },

  // ── LESSON 24 ───────────────────────────────────────────────────────────────
  {
    title: "Automated Testing in CI/CD Pipelines",
    content:
      "After a bad week where three bugs escaped to production, Sneha called a team meeting: 'Our test coverage is at 23%. That explains everything.' She challenged Arjun to lead the effort to bring it to 80%. 'You cannot deploy with confidence,' she said, 'if you do not know whether your code works.'\n\nArjun started with unit tests — the fastest and most valuable. For the Python API, each function got a test using pytest: <code>def test_user_creation_returns_201():</code>. Unit tests mock external dependencies (database, APIs) so they run in milliseconds and can run thousands per second. Next, integration tests: Arjun spun up a real PostgreSQL container in the CI pipeline and ran tests that actually wrote to the database. These took 30 seconds but caught bugs that unit tests missed.\n\nFor end-to-end (E2E) tests, Arjun used Playwright to script a real browser: log in, create a record, verify it appears in the list, delete it. These ran only on PRs to main (not every commit) because they took 8 minutes. The result: a test pyramid — thousands of fast unit tests at the base, hundreds of integration tests in the middle, dozens of E2E tests at the top. When the coverage hit 80%, the team's deployment confidence visibly shifted. They started deploying to production on Fridays (previously forbidden) because they trusted the tests to catch regressions. Sneha announced: 'Tests are not QA's job. Tests are engineering infrastructure.'",
    funFact:
      "Test-Driven Development (TDD) — writing tests BEFORE writing the implementation code — was popularized by Kent Beck and is a core practice in extreme programming. Studies show TDD reduces bug density by 40-80% at the cost of a 15-35% increase in initial development time. Most elite teams consider this a net positive tradeoff.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun has unit tests (2000, run in 10s), integration tests (150, run in 30s), and E2E tests (20, run in 8min). For fastest feedback on every commit, which runs first?",
      options: [
        "E2E tests — they catch the most realistic bugs",
        "Integration tests — they test real system interactions",
        "Unit tests — they are fastest and give immediate feedback",
        "All tests in parallel simultaneously",
      ],
      correctAnswer:
        "Unit tests — they are fastest and give immediate feedback",
      explanation:
        "The testing pyramid principle: run fast tests first for immediate feedback. Unit tests run in seconds, so they give instant signal on whether basic logic is broken. E2E tests run last (or on a scheduled basis) because their slowness would make every commit take 8+ minutes.",
    },
  },

  // ── LESSON 25 ───────────────────────────────────────────────────────────────
  {
    title: "Deployment Strategies: Blue/Green, Canary, Rolling",
    content:
      "The team was preparing for a major release — a new authentication system. 'If this breaks in production, 50,000 users cannot log in,' Priya said nervously. Arjun had been researching deployment strategies for exactly this scenario. 'We don't have to go all-in at once,' he told the team. 'Let me show you three options.'\n\nBlue/Green Deployment: You maintain two identical production environments — Blue (current live) and Green (new version). You deploy the new version to Green, run smoke tests, then switch the load balancer to send 100% of traffic to Green. If anything goes wrong, one switch sends traffic back to Blue. Rollback takes seconds. Downside: requires double the infrastructure temporarily.\n\nCanary Deployment: Named after 'canary in a coal mine.' You route a small percentage of real traffic (1-5%) to the new version, monitor error rates and latency, and gradually increase if metrics look good: 1% → 5% → 25% → 100%. If the canary fails, only 1% of users were affected. This is how Netflix deploys — they run A/B tests and canary releases simultaneously on millions of users.\n\nRolling Deployment: Replace instances one by one. If you have 10 servers, update 1 at a time. At any point, some servers run the old version and some run the new. Simpler than Blue/Green, uses existing infrastructure, but rollback is slower. Arjun's team chose Canary for the auth release: they sent 2% of traffic to the new version, watched Grafana dashboards for 30 minutes, saw perfect metrics, and gradually rolled it out. Zero incidents.",
    funFact:
      "Facebook's 'Big Blue Switch' strategy during major deployments involves running both old and new code simultaneously, comparing outputs in real-time, and only switching traffic when confidence reaches 99.9%. This shadow testing approach means major Facebook features have been running in production for weeks before users see them.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants to test a new payment API on 2% of real users before full rollout, monitoring for errors. Which strategy does he use?",
      options: [
        "Blue/Green deployment",
        "Rolling deployment",
        "Canary deployment",
        "Hotfix deployment",
      ],
      correctAnswer: "Canary deployment",
      explanation:
        "Canary deployment routes a small percentage of real traffic to the new version, allowing real-world testing with minimal blast radius. If the canary (small %) shows problems, only that tiny fraction of users is affected, and the rollback is instant.",
    },
  },

  // ── LESSON 26 ───────────────────────────────────────────────────────────────
  {
    title: "Infrastructure as Code with Terraform",
    content:
      "Arjun was asked to set up a new staging environment — same as production: 3 EC2 instances, an RDS PostgreSQL database, a Redis cluster, a load balancer, and an S3 bucket. He clicked through the AWS console for four hours and finally had it running. Two weeks later, a junior dev accidentally deleted the load balancer. 'Can you recreate the staging environment?' Sneha asked. Arjun stared at his notes and shrugged. 'Sort of... it will take three more hours.'\n\nInfrastructure as Code (IaC) solves this by defining cloud infrastructure in code files — declaratively, not through GUI clicks. Terraform is the most popular IaC tool, created by HashiCorp. Arjun wrote a <code>main.tf</code> file that declared the desired state of the entire staging environment in ~150 lines of HCL (HashiCorp Configuration Language). <code>resource \"aws_instance\" \"app_server\" { ami = \"ami-0abc123\" instance_type = \"t3.micro\" count = 3 }</code> — and 3 EC2 instances would be created.\n\nThe Terraform workflow: <code>terraform init</code> (download providers), <code>terraform plan</code> (show what will be created/changed/deleted — like a git diff for infrastructure), <code>terraform apply</code> (execute the plan). The state file tracks what Terraform manages. Now when someone deletes the load balancer, Arjun runs <code>terraform apply</code> in 90 seconds and it is back. More importantly, the entire environment — staging and production — is version-controlled in Git. 'Infrastructure is code now,' Sneha said. 'PR review applies to servers, not just software.'",
    funFact:
      "Before IaC, a Google SRE (Site Reliability Engineer) famously described their provisioning process as 'snowflake servers' — each server was manually configured and unique, like a snowflake. No two were identical. IaC introduced 'cattle not pets': servers are disposable and interchangeable, replaced rather than repaired.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Before running terraform apply, Arjun always runs another command first to preview what will change. What is it?",
      options: [
        "terraform init",
        "terraform validate",
        "terraform plan",
        "terraform refresh",
      ],
      correctAnswer: "terraform plan",
      explanation:
        "terraform plan shows a detailed preview of what Terraform will create, modify, or destroy — without making any actual changes. It is like 'git diff' for infrastructure. Reviewing the plan before applying prevents accidental destruction of production resources.",
    },
  },

  // ── LESSON 27 ───────────────────────────────────────────────────────────────
  {
    title: "Ansible for Configuration Management",
    content:
      "Terraform provisions the servers — creates the EC2 instances, sets up networking, creates databases. But once the server exists, someone needs to install the application, configure Nginx, set environment variables, and start services. Doing this manually on 10 servers is repetitive and error-prone. This is where Ansible enters.\n\nAnsible is a configuration management tool that automates server configuration using human-readable YAML files called 'playbooks.' Unlike Terraform, Ansible is agentless — it connects to servers via SSH and runs commands remotely. No agent software needs to be installed on target servers. Arjun's playbook for setting up app servers started with: define <code>hosts: app_servers</code>, then <code>tasks:</code> — install Nginx, copy the app configuration file, set environment variables from a secrets vault, start the app service, enable the app to start on reboot.\n\nRunning <code>ansible-playbook -i inventory.yml setup_app.yml</code> configured all 10 servers identically in 3 minutes. Idempotence is Ansible's superpower: running the playbook 10 times produces the same result as running it once. If a configuration drifts (someone manually changes an Nginx setting), the next playbook run corrects it. Arjun combined Terraform (provision) with Ansible (configure) in his pipeline: Terraform creates the servers, outputs their IPs, Ansible reads those IPs from Terraform's output and configures them. Infrastructure provisioned and configured in a single pipeline run.",
    funFact:
      "Ansible was acquired by Red Hat in 2015 for $150 million, just two years after its creation. Its key selling point over Chef and Puppet (older competitors) was being agentless — you only need Python and SSH on the target, which is true by default for almost all Linux servers.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun runs his Ansible playbook to configure 10 servers. He runs it again the next day with no changes. What happens?",
      options: [
        "Ansible reinstalls everything from scratch on all 10 servers",
        "Ansible reports an error because nothing has changed",
        "Ansible checks each task and skips ones that are already in the desired state",
        "Ansible only runs on servers that have been restarted",
      ],
      correctAnswer:
        "Ansible checks each task and skips ones that are already in the desired state",
      explanation:
        "Idempotence is a core Ansible principle. Each task checks if the desired state already exists before taking action. 'Install nginx' checks if nginx is installed; if it is, the task shows 'ok' instead of 'changed'. Running a playbook multiple times is always safe.",
    },
  },

  // ── LESSON 28 ───────────────────────────────────────────────────────────────
  {
    title: "Environment Management: Dev, Staging, Production",
    content:
      "During a team standup, Rahul said 'it works in dev' but Priya had just confirmed the same feature was broken in staging. 'How can the same code behave differently?' Arjun asked. Sneha sighed: 'Because the environments are not identical. Dev has old test data, staging has a different database version, and the config files are different. We need to fix this.'\n\nProfessional DevOps teams maintain three environments: Development (dev) runs locally or on a shared dev server — developers test features here first. Configuration points to mock services or local databases. Staging mirrors production exactly — same Docker images, same database version, same server specs, same networking configuration. It is the final checkpoint before production. Production is the live environment serving real users. No experiments, no unreviewed code, no manual changes.\n\nThe key principle: identical environments. The only differences between staging and production should be scale (production has more instances) and the configuration pointing at real third-party services. Arjun implemented this by using environment variables for all configuration: <code>DATABASE_URL</code>, <code>REDIS_URL</code>, <code>STRIPE_API_KEY</code>, <code>APP_ENV</code>. The same Docker image ran in all three environments — only the environment variables changed. He stored these in AWS SSM Parameter Store, with different parameter paths per environment (<code>/dev/db-url</code>, <code>/staging/db-url</code>, <code>/prod/db-url</code>). If something passed staging testing, it worked in production — guaranteed.",
    funFact:
      "The XKCD webcomic #1172 captures every DevOps engineer's nightmare: 'This change should be safe — it is an unused server in a test environment.' 24 hours later, the server turned out to be critical. Environment parity exists to prevent 'works in dev, breaks in prod' surprises that have caused real production disasters.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's Flask app connects to different databases in dev, staging, and production. What is the correct way to manage this?",
      options: [
        "Three separate Dockerfiles with hardcoded database URLs",
        "Environment variables (DATABASE_URL) with different values per environment",
        "An if-else block in the code checking the hostname",
        "Comments in the code that developers change manually before deployment",
      ],
      correctAnswer:
        "Environment variables (DATABASE_URL) with different values per environment",
      explanation:
        "The Twelve-Factor App methodology (the gold standard for cloud-native apps) mandates storing config in environment variables. This keeps the same code artifact running across all environments, with only externally-provided configuration changing. Hardcoding is a security and maintainability anti-pattern.",
    },
  },

  // ── LESSON 29 ───────────────────────────────────────────────────────────────
  {
    title: "Cloud Provisioning with IaC",
    content:
      'The company was expanding — a new product required a completely separate AWS infrastructure: its own VPC (Virtual Private Cloud), subnets, security groups, EC2 instances, RDS database, and CloudFront CDN. In the old days, setting this up would have taken a week of console-clicking. Arjun provisioned the entire thing in three hours using Terraform, including all the networking.\n\nThe AWS Terraform provider is comprehensive. A typical production VPC setup involves: <code>aws_vpc</code> (the private network container), <code>aws_subnet</code> (public and private subnets across two availability zones for redundancy), <code>aws_internet_gateway</code> (allows internet traffic), <code>aws_route_table</code> (routing rules), <code>aws_security_group</code> (firewall rules — allow port 80/443 from anywhere, deny everything else), and <code>aws_db_instance</code> for the RDS database in the private subnet (not internet-accessible).\n\nThe game-changer for Arjun was Terraform modules — pre-written, tested infrastructure templates. Instead of writing all the VPC code himself, he used the official Terraform AWS VPC module: <code>module "vpc" { source = "terraform-aws-modules/vpc/aws" version = "5.0.0" ... }</code>. Three lines replaced 200 lines of low-level resource definitions. The Terraform Registry has modules for virtually every AWS service. Arjun\'s three-hour setup used modules for VPC, ECS cluster, RDS, and ALB (Application Load Balancer). He committed the Terraform code to Git, had it code-reviewed like software, and the infrastructure was documented forever.',
    funFact:
      "Terraform's state file (terraform.tfstate) is the source of truth for what infrastructure exists. If it is accidentally deleted, Terraform loses track of all managed resources — it cannot delete or modify them. Companies store state files in S3 with versioning and DynamoDB state locking to prevent concurrent modification disasters.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to create a production VPC with all standard networking components. What is the fastest approach?",
      options: [
        "Write all VPC Terraform resources manually from the official docs",
        "Use the Terraform AWS VPC module from the Terraform Registry",
        "Create the VPC in the AWS console and import it into Terraform",
        "Use Ansible to configure networking instead",
      ],
      correctAnswer:
        "Use the Terraform AWS VPC module from the Terraform Registry",
      explanation:
        "Terraform modules are pre-built, community-tested infrastructure templates. The official aws-modules/vpc module encapsulates dozens of resources (subnets, route tables, gateways, NACLs) behind a simple interface. Using a proven module is faster than writing it manually and avoids common mistakes.",
    },
  },

  // ── LESSON 30 ───────────────────────────────────────────────────────────────
  {
    title: "IaC Best Practices and Version Control",
    content:
      "After six months of Terraform usage, Arjun's infrastructure code had grown to 15 files and 1,200 lines. He was reviewing a PR from a junior engineer that accidentally introduced a Terraform change that would destroy and recreate the production RDS database — with all user data. 'This is exactly why we have code review for infrastructure,' Sneha said. 'That change would have wiped production in seconds.'\n\nIaC best practices Arjun established for the team: First, store Terraform state remotely in S3 with DynamoDB locking — never locally. Second, use workspace separation: <code>terraform workspace new staging</code> creates isolated state for each environment. Third, always run <code>terraform plan</code> before <code>apply</code> — and review the plan. The plan clearly shows 'destroy: 1' operations in red. Fourth, tag every resource with environment, team, and cost-center metadata — AWS bills are chaotic without tagging. Fifth, use <code>prevent_destroy = true</code> lifecycle rules on databases and stateful resources as a safety net against accidental deletion.\n\nFor code organization, Arjun restructured into modules: <code>/modules/vpc/</code>, <code>/modules/ecs/</code>, <code>/modules/rds/</code>, and environment directories <code>/environments/staging/</code>, <code>/environments/production/</code> that called the modules. This pattern — called 'DRY Terraform' — meant changing the ECS module configuration in one place updated both staging and production consistently. The junior engineer's database-destroying change was caught in PR review before it could run, and a required manager-approval step was added to any plan that contained destroy operations on databases.",
    funFact:
      "In 2017, a routine AWS Terraform infrastructure update at GitLab accidentally set the RDS instance count to 0, destroying their production database. The incident wiped 300GB of production data. GitLab famously live-streamed the recovery process for 5+ hours, losing 6 hours of user data. This incident directly led to widespread adoption of prevent_destroy lifecycle rules.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants to prevent accidental deletion of the production RDS database via Terraform. What lifecycle rule does he add?",
      options: [
        "deletion_protection = true in the aws_db_instance",
        "prevent_destroy = true in the lifecycle block",
        "force_destroy = false in the resource config",
        "deletion_policy = blocked in terraform.tfvars",
      ],
      correctAnswer: "prevent_destroy = true in the lifecycle block",
      explanation:
        "Adding 'lifecycle { prevent_destroy = true }' to any Terraform resource makes Terraform refuse to execute a plan that would destroy that resource. It throws an error during 'plan' stage, before any destructive action is taken — a safety net for stateful, irreplaceable resources like production databases.",
    },
  },

  // ── LESSON 31 ───────────────────────────────────────────────────────────────
  {
    title: "Monitoring with Prometheus and Grafana",
    content:
      "A user reported the app was 'slow' on a Friday afternoon. Without monitoring, Arjun had no idea where the slowness was — was it the API, the database, the cache, the network? He was flying blind. That was the last straw. Sneha approved the monitoring project over the weekend.\n\nPrometheus is an open-source monitoring and alerting system. It works by 'scraping' metrics from applications: every 15 seconds, Prometheus polls each service's <code>/metrics</code> HTTP endpoint and stores the data. Applications expose metrics using a Prometheus client library (available for every language): request count, response time, error rate, memory usage, queue depth — anything measurable. Arjun added the Python Prometheus client to the Flask API and exposed ~20 metrics with 5 lines of code.\n\nGrafana is the visualization layer — it connects to Prometheus as a data source and renders beautiful, interactive dashboards. Arjun built a dashboard with four panels: Request Rate (requests/second over time), Latency (P50, P90, P99 response times), Error Rate (5xx responses as a percentage), and Database Query Time. The PromQL query for error rate: <code>rate(flask_http_request_total{status=~\"5..\"}[5m]) / rate(flask_http_request_total[5m]) * 100</code>. The very next time the app slowed down, Arjun opened Grafana in 10 seconds and saw the database query time spike from 20ms to 2000ms. Root cause found: a missing index. Fixed in 15 minutes. Before monitoring: 4-hour debug session. After: 15-minute targeted fix.",
    funFact:
      "The 'Four Golden Signals' of monitoring, defined in Google's SRE Book, are: Latency (how long requests take), Traffic (how many requests), Errors (rate of failed requests), and Saturation (how full the system is). Any production service should have Grafana dashboards for all four before it goes live.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants Prometheus to monitor his Flask API. What does he need to add to the API?",
      options: [
        "A Prometheus agent installed on the EC2 server",
        "A /metrics HTTP endpoint that exposes application metrics",
        "A database table to store metrics data",
        "A webhook that sends metrics to Prometheus on each request",
      ],
      correctAnswer:
        "A /metrics HTTP endpoint that exposes application metrics",
      explanation:
        "Prometheus uses a pull model — it scrapes metrics from each service's /metrics endpoint at regular intervals. Using the Prometheus Python client library, adding 5-10 lines of code to the Flask app exposes a /metrics endpoint with dozens of metrics automatically.",
    },
  },

  // ── LESSON 32 ───────────────────────────────────────────────────────────────
  {
    title: "Centralized Logging: ELK Stack Basics",
    content:
      "Arjun had 10 servers all writing their own log files. When a bug was reported, he had to SSH into each server individually, search through logs, and manually correlate events across machines. Tracing one user's journey through three microservices required cross-referencing three different log files on three different servers. It took hours. 'This is why the ELK stack exists,' Sneha said.\n\nELK stands for Elasticsearch, Logstash, and Kibana (now officially LKES or 'ELK' with Beats). Here is how it works: Filebeat (a lightweight log shipper installed on each server) continuously reads log files and forwards them to Logstash. Logstash parses and transforms the logs (extracts structured fields from unstructured text, enriches with metadata). Elasticsearch stores the logs in a searchable index — think of it as a turbocharged database optimized for full-text search. Kibana is the UI for searching, filtering, and visualizing the logs.\n\nWith ELK, Arjun could type <code>request_id: \"abc-123\"</code> in Kibana's search and see all log lines from all 10 servers related to that specific user request, sorted chronologically. He could query <code>level: ERROR AND timestamp: [now-1h TO now]</code> to see all errors across the entire fleet in the last hour. The setup time was half a day; the time saved per incident was hours. Within two weeks, every post-mortem started with a Kibana dashboard link rather than a frantic SSH session.",
    funFact:
      "Elasticsearch is based on Apache Lucene, the same search engine technology that powers Wikipedia's search and many early search engines. It can search through petabytes of log data in milliseconds by maintaining inverted indexes — a data structure where each word maps to every document containing it.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In the ELK stack, which component is responsible for collecting and forwarding logs FROM each server TO the central stack?",
      options: ["Kibana", "Elasticsearch", "Logstash", "Filebeat"],
      correctAnswer: "Filebeat",
      explanation:
        "Filebeat is a lightweight log shipper that runs on each server, tails log files, and forwards them to Logstash or Elasticsearch. It uses very little CPU/memory, making it suitable for production servers. Logstash processes the logs, Elasticsearch stores them, and Kibana visualizes them.",
    },
  },

  // ── LESSON 33 ───────────────────────────────────────────────────────────────
  {
    title: "Alerting and On-Call: Incident Response",
    content:
      "Arjun was on-call for the first time when his phone buzzed at 11 PM: 'ALERT: Error rate exceeded 5% — 847 users affected.' His Prometheus alert rule had fired and sent a notification to PagerDuty, which escalated to his phone. This was exactly the system he had built — now he was experiencing it from the receiving end.\n\nAlerts in Prometheus are defined as rules: <code>alert: HighErrorRate, expr: rate(errors[5m]) > 0.05, for: 2m, labels: {severity: critical}</code> — if the error rate exceeds 5% for 2 consecutive minutes, fire a critical alert. The <code>for</code> duration prevents false alarms from brief spikes. Alerts route to different channels based on severity: 'warning' goes to Slack, 'critical' goes to PagerDuty (which calls your phone at 3 AM if needed).\n\nThe incident response process Arjun followed: Acknowledge the alert (stops escalation), Triage (check Grafana — is it getting worse?), Mitigate (roll back the last deployment if it coincides with the start of errors), Investigate (check ELK logs for the root cause), Fix (deploy a fix or permanently revert), Post-mortem (write a blameless analysis: what happened, why it happened, what changes prevent recurrence). Arjun rolled back the deployment at 11:14 PM, error rate returned to 0.1% at 11:18 PM. He wrote the post-mortem the next morning: root cause was a missing null check in a new feature. 'On-call makes you write better code,' Sneha told him. 'The developer who woke up at 2 AM is very motivated to not repeat the mistake.'",
    funFact:
      "PagerDuty, the most popular on-call management platform, processes over 90 million alerts per year. Their research found that alert fatigue — too many low-quality alerts — is the top reason on-call engineers burn out. The antidote: every alert should be actionable and require a human response. If an alert fires and there is nothing to do, delete it.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's Prometheus alert for high CPU fires 50 times a day but the CPU always recovers on its own. What is the problem and fix?",
      options: [
        "The servers need more CPU — scale up",
        "Alert fatigue from too many false positives — add a 'for: 10m' duration to require the condition to persist",
        "Prometheus is misconfigured and should be reinstalled",
        "CPU alerts should be disabled in production",
      ],
      correctAnswer:
        "Alert fatigue from too many false positives — add a 'for: 10m' duration to require the condition to persist",
      explanation:
        "Transient CPU spikes that resolve themselves do not require human intervention. Adding 'for: 10m' means the alert only fires if the condition persists for 10 consecutive minutes — indicating a real problem. This eliminates noisy false positives that desensitize engineers to alerts.",
    },
  },

  // ── LESSON 34 ───────────────────────────────────────────────────────────────
  {
    title: "SRE vs DevOps: Site Reliability Engineering",
    content:
      "During a company all-hands, the CTO announced: 'We are hiring our first SRE team.' Arjun was confused — how was SRE different from what his DevOps team already did? He researched it and brought his findings to the team.\n\nDevOps is a culture and philosophy — break down silos, automate everything, deploy frequently. It is more of a 'how we work' concept. SRE (Site Reliability Engineering) is how Google operationalized DevOps principles with specific, quantifiable practices. Google created SRE in 2003 by hiring software engineers to solve operations problems — instead of traditional ops people who managed manually, Google's SREs automated everything because automation was in their DNA.\n\nSRE introduces precise tools: Service Level Indicators (SLIs) — measurable metrics like 'percentage of successful requests.' Service Level Objectives (SLOs) — targets like '99.9% of requests succeed (the three-nines target).' Error Budgets — if your SLO is 99.9% uptime, your error budget is 0.1% downtime per month — about 43 minutes. You can spend that budget on risky deployments. If you have exhausted it, you slow down releases and focus on reliability. This made conversations between devs (who want to ship) and ops (who want stability) data-driven instead of political. Arjun's team adopted error budgets: when they burned 80% of their monthly error budget in week two, they postponed non-critical features and focused entirely on reliability for the rest of the month. It worked.",
    funFact:
      "Google's SRE Book, published in 2016 and available free online at sre.google, is considered the bible of modern site reliability engineering. Its opening line: 'Hope is not a strategy.' It details how Google runs the most reliable large-scale systems in the world and has been read by millions of engineers worldwide.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's team has a 99.9% uptime SLO. They have already used 90% of their monthly error budget in week two. What should the team do?",
      options: [
        "Ignore the error budget — it is just a guideline",
        "Pause non-critical feature releases and focus on reliability improvements",
        "Increase the SLO to 99.99% to get more error budget",
        "Deploy more aggressively to catch remaining bugs faster",
      ],
      correctAnswer:
        "Pause non-critical feature releases and focus on reliability improvements",
      explanation:
        "An error budget nearly exhausted in week two means the remaining 10% must last the rest of the month. SRE practice: when error budget is low, halt risky deployments and invest in reliability. This protects users and gives the team time to address the root causes of the budget burn.",
    },
  },

  // ── LESSON 35 ───────────────────────────────────────────────────────────────
  {
    title: "DevOps Capstone: CI/CD Pipeline for a Web App",
    content:
      "It was Arjun's six-month review. Sneha asked him to present his capstone: build a complete, production-grade CI/CD pipeline for a new Python Flask web application from scratch. He had one week. Here is what he built, step by step.\n\nStep 1 — Codebase and Git: Created a GitHub repository with the Flask app, Dockerfile, and docker-compose.yml for local dev. Added a <code>.github/workflows/ci.yml</code> GitHub Actions pipeline. Step 2 — CI Pipeline: On every pull request: checkout code, install dependencies, run pytest (unit + integration tests against a PostgreSQL container service), build Docker image, push to ECR with commit SHA tag. PRs blocked from merging unless CI passes. Step 3 — Infrastructure: Terraform provisions a VPC, two EC2 instances (app servers), one RDS PostgreSQL, one Application Load Balancer, and an S3 bucket for static assets. <code>prevent_destroy = true</code> on the RDS. Step 4 — CD Pipeline: On merge to main: pull the ECR image, run canary deployment (10% → 50% → 100% over 30 minutes via ALB weighted target groups), auto-rollback if error rate exceeds 2% during rollout. Step 5 — Observability: Prometheus scrapes /metrics from both app servers, Grafana dashboard shows the four golden signals, PagerDuty alerts for critical errors, Filebeat ships logs to Elasticsearch/Kibana.\n\nThe review audience of 12 engineers was silent for a moment. Then the director of engineering said: 'This is what junior-to-mid DevOps growth looks like. Well done, Arjun.' The pipeline was reviewed, minor improvements suggested, and deployed as the new standard template for all future projects. Arjun went from not knowing what SSH was to owning a production-grade DevOps pipeline in six months.",
    funFact:
      "The DORA (DevOps Research and Assessment) 2023 report identifies four key metrics that predict software delivery performance: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. Teams at the elite level deploy on-demand (multiple times per day) with a lead time under one hour, a change failure rate below 5%, and restore service in under one hour. These are the benchmarks Arjun's pipeline is designed to achieve.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Arjun's capstone CI/CD pipeline, a canary deployment reaches 50% traffic and the error rate jumps from 0.2% to 4%. What happens automatically?",
      options: [
        "The deployment continues to 100% as planned",
        "The pipeline pauses and waits for Arjun to manually approve or reject",
        "The pipeline triggers an automatic rollback to the previous version",
        "PagerDuty sends an alert and the deployment pauses indefinitely",
      ],
      correctAnswer:
        "The pipeline triggers an automatic rollback to the previous version",
      explanation:
        "The pipeline monitors error rate during canary rollout. If it exceeds the 2% threshold, the automated health check fails and the pipeline triggers a rollback — routing all traffic back to the previous stable version. This is the key benefit of automated canary deployments: self-healing rollouts with minimal blast radius.",
    },
  },
];
