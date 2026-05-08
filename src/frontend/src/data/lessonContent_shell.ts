// Shell Scripting lessons — 30 scenario-based modules
// Arjun is a DevOps engineer automating real tasks
import type { LessonContent } from "@/types";

export const SHELL_LESSONS: LessonContent[] = [
  // ── Lesson 1 ──────────────────────────────────────────────────────────────
  {
    title: "What is a Shell? Your Command-Line Superpower",
    content:
      "Arjun joined a DevOps team on his first day and watched his senior type a few lines in a black window — within seconds, 50 servers were updated. No clicking, no menus, no waiting. Just raw power. That black window is a shell, and what Arjun saw is called shell scripting.\n\nA shell is a command-line interface that lets you talk directly to the operating system. Instead of pointing and clicking, you type text commands and the OS executes them instantly. The shell acts as a translator between you and the OS kernel. Popular shells include Bash (Bourne Again Shell, default on most Linux systems), Zsh (default on macOS), and Fish.\n\nWhy does this matter for a fresher? Because in every IT company — whether you are a developer, tester, DevOps engineer, or cloud admin — you WILL encounter terminals. Servers don't have fancy GUIs. You SSH into them and type commands. Mastering the shell is the single skill that makes you look 10x more competent than your peers on day one.",
    funFact:
      "The first Unix shell, the Thompson Shell, was written by Ken Thompson at Bell Labs in 1971. It had no scripting — you could only type one command at a time. Today, Bash scripts can automate entire company infrastructures with a single file.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to restart Nginx on 100 servers at midnight. What is the best approach?",
      options: [
        "Log into each server manually and click restart",
        "Write a shell script that loops through all servers and runs the restart command",
        "Ask each server's owner to restart it manually",
        "Wait until morning and do it during office hours",
      ],
      correctAnswer:
        "Write a shell script that loops through all servers and runs the restart command",
      explanation:
        "Shell scripts automate repetitive tasks. One script can loop through all 100 servers and execute the restart command — completing in minutes what would take hours manually. This is the core value of shell scripting in DevOps.",
    },
  },

  // ── Lesson 2 ──────────────────────────────────────────────────────────────
  {
    title: "Bash vs Zsh: Choosing Your Shell",
    content:
      "Arjun's colleague Priya uses a Mac and her terminal looks completely different — colorful prompts, auto-suggestions, and fancy themes. Arjun's Linux terminal looks plain. The difference? She's using Zsh with Oh-My-Zsh, while Arjun has plain Bash. Both are shells, but they have different strengths.\n\nBash (Bourne Again Shell) is the most universal shell. It comes pre-installed on virtually every Linux system and most servers in the world. If you write a Bash script, it will run almost everywhere. Bash has been around since 1989 and is the industry standard for DevOps automation. Syntax: #!/bin/bash at the top of your script.\n\nZsh is a modern shell that extends Bash with better auto-completion, spelling correction, plugin support, and theming via Oh-My-Zsh. macOS switched to Zsh as the default in 2019. For everyday terminal use, Zsh feels much more productive. But for scripts that run on servers, always write in Bash — servers rarely have Zsh installed. The golden rule: use Zsh for daily terminal work, write scripts in Bash for portability.",
    funFact:
      "Oh-My-Zsh, the popular Zsh configuration framework, has over 170,000 GitHub stars and is maintained entirely by volunteers. It took just one developer, Robby Russell, a few hours to write the first version in 2009.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun writes a script that will run on 50 different Linux production servers. Which shell should he use for maximum compatibility?",
      options: ["Zsh", "Fish", "Bash", "PowerShell"],
      correctAnswer: "Bash",
      explanation:
        "Bash is pre-installed on virtually every Linux server and is the standard for DevOps scripts. Zsh and Fish may not be installed on production servers. Always use Bash (#!/bin/bash) when writing scripts that need to run on multiple systems.",
    },
  },

  // ── Lesson 3 ──────────────────────────────────────────────────────────────
  {
    title: "Terminal Basics: Navigating the File System",
    content:
      "Arjun SSHes into a Linux server for the first time. There are no folders to click, no icons on a desktop. Just a blinking cursor and a prompt: arjun@server:~$ He needs to find a config file buried somewhere in the file system. This is where navigation commands save you.\n\nEssential navigation commands:\n- pwd — Print Working Directory. Shows where you are right now. Like checking your current location on a map.\n- ls — List files. ls -la shows hidden files and detailed info (permissions, size, owner).\n- cd /var/log — Change Directory. Move to /var/log. Use cd .. to go up one level. cd ~ takes you home.\n- tree — Shows the directory structure as a visual tree. Great for understanding large projects.\n\nLinux file system structure to know: / is root (top of everything), /etc holds config files, /var/log holds log files, /home/username is your home directory, /tmp is for temporary files, /usr/bin holds executable programs. Knowing this structure means you'll always know where to look when debugging a server.",
    funFact:
      "The Linux file system hierarchy is defined by the Filesystem Hierarchy Standard (FHS). Even though there are hundreds of Linux distributions (Ubuntu, CentOS, Arch, etc.), they all follow the same folder structure — so skills transfer perfectly.",
    xpReward: 60,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Arjun needs to see all files in the current directory including hidden ones with full details. He should run: ls ___",
      correctAnswer: "-la",
      explanation:
        "The -l flag shows long format (permissions, owner, size, date) and the -a flag shows all files including hidden ones (files starting with a dot like .bashrc). Combined as -la, it gives the full picture of a directory.",
    },
  },

  // ── Lesson 4 ──────────────────────────────────────────────────────────────
  {
    title: "File Operations: mkdir, touch, cp, mv, rm",
    content:
      "Arjun's team deploys code by organizing files into specific directories. Each release gets a folder like /releases/v2.1.0/ Arjun needs to create directories, move files, copy configs, and clean up old releases — all from the terminal. These five commands are his Swiss Army knife.\n\nmkdir — Make Directory. mkdir /releases/v2.1.0 creates a folder. mkdir -p /a/b/c creates all parent folders at once even if they don't exist yet.\ntouch — Creates an empty file or updates timestamps. touch deploy.log instantly creates a blank log file.\ncp — Copy. cp config.yml /etc/app/config.yml copies a file. cp -r /old-dir /new-dir copies entire directories recursively.\nmv — Move or rename. mv app.log app.log.bak renames it. mv /tmp/build /releases/v2.1.0/ moves the build to the releases folder.\nrm — Remove. rm old-log.txt deletes a file. rm -rf /releases/v1.0.0/ removes a directory and everything inside it — use with extreme caution!\n\nPro tip: Always double-check your path before running rm -rf. There's a famous case where a typo of rm -rf / wiped an entire production server. Always use echo first to verify the path.",
    funFact:
      "The rm -rf / mistake (accidentally deleting the root filesystem) was so common that modern Linux systems now require a --no-preserve-root flag to actually do it. The OS literally protects you from yourself.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to create the directory structure /deployments/2024/june/ where none of the folders exist yet. What single command does this?",
      options: [
        "mkdir /deployments/2024/june/",
        "mkdir -p /deployments/2024/june/",
        "touch /deployments/2024/june/",
        "cp -r /deployments/2024/june/",
      ],
      correctAnswer: "mkdir -p /deployments/2024/june/",
      explanation:
        "The -p flag tells mkdir to create all parent directories as needed. Without -p, mkdir would fail because /deployments and /deployments/2024 don't exist yet. The -p flag creates the entire path in one command.",
    },
  },

  // ── Lesson 5 ──────────────────────────────────────────────────────────────
  {
    title: "Viewing and Reading Files: cat, less, head, tail",
    content:
      "A production server just threw an error at 2 AM. Arjun SSHes in and needs to read the log file fast. The log file is 500MB — he can't open it in a text editor. He needs the right command for the right situation.\n\ncat — Concatenate and print. cat config.yml dumps the entire file to the terminal instantly. Great for small files. For large files, it floods your terminal. cat file1 file2 > combined.txt merges two files into one.\n\nless — Interactive pager. less app.log opens the file page by page. Press space to go forward, b to go back, /error to search for the word 'error', q to quit. This is the best command for reading large files.\n\nhead — View the beginning. head -n 20 app.log shows the first 20 lines. Useful for checking file headers or config file beginnings.\n\ntail — View the end. tail -n 50 app.log shows the last 50 lines. The game-changer: tail -f app.log follows the file in real-time — you see new lines appear as they're written. This is how DevOps engineers watch live logs during deployments.",
    funFact:
      "The command tail -f (follow) is so essential in DevOps that many engineers keep a dedicated terminal tab open just for it during every deployment. It's the live TV of server monitoring.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun is watching a deployment happen live and wants to see new log entries appear in real-time as the application writes them. Which command should he use?",
      options: [
        "cat /var/log/app.log",
        "less /var/log/app.log",
        "head -n 100 /var/log/app.log",
        "tail -f /var/log/app.log",
      ],
      correctAnswer: "tail -f /var/log/app.log",
      explanation:
        "tail -f (follow) continuously monitors a file and prints new lines as they are added. It's the standard tool for watching live logs during deployments. The terminal updates in real-time without needing to re-run the command.",
    },
  },

  // ── Lesson 6 ──────────────────────────────────────────────────────────────
  {
    title: "Searching Files: grep, find, locate",
    content:
      "Arjun gets a ticket: 'Find all config files containing the database password string across the entire server.' The server has thousands of files. Manually opening each one would take days. With grep and find, it takes seconds.\n\ngrep — Global Regular Expression Print. Searches for text patterns inside files. grep 'DB_PASSWORD' /etc/app/config.yml finds that line instantly. grep -r 'DB_PASSWORD' /etc/ searches recursively through every file in /etc/ grep -i 'error' app.log searches case-insensitively. grep -n 'timeout' config.yml shows line numbers. grep -v 'DEBUG' app.log shows all lines EXCEPT those containing DEBUG.\n\nfind — Search for files by name, type, size, or date. find /var/log -name '*.log' finds all .log files under /var/log. find /home -type f -mtime -7 finds files modified in the last 7 days. find / -name 'config.yml' 2>/dev/null searches the whole system, suppressing permission errors.\n\nlocate — Much faster than find because it uses a pre-built database. locate nginx.conf instantly finds all files named nginx.conf. But it uses an index that updates nightly — so newly created files might not appear. Run sudo updatedb to force a refresh.",
    funFact:
      "The grep command was invented by Ken Thompson in 1973 in a single night. He wrote it to solve a specific problem Doug McIlroy had, and it took him less than an hour. It's now one of the most-used commands in the world.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to find all lines containing the word 'FAILED' (case insensitive) in all log files under /var/log recursively. Which command is correct?",
      options: [
        "find /var/log -name 'FAILED'",
        "grep -ri 'FAILED' /var/log",
        "locate FAILED /var/log",
        "cat /var/log | grep FAILED",
      ],
      correctAnswer: "grep -ri 'FAILED' /var/log",
      explanation:
        "grep -r searches recursively through all files in a directory, and -i makes it case-insensitive. So grep -ri 'FAILED' /var/log will find every line containing 'failed', 'Failed', 'FAILED', etc., in every file under /var/log.",
    },
  },

  // ── Lesson 7 ──────────────────────────────────────────────────────────────
  {
    title: "File Permissions: chmod, chown, chgrp",
    content:
      "Arjun deploys a script to production but gets 'Permission denied' when it tries to write logs. His team lead explains the Linux permission system — and it clicks immediately why security matters on shared servers.\n\nEvery file in Linux has three permission sets: owner (the creator), group (a team of users), and others (everyone else). Each set has three permissions: r (read=4), w (write=2), x (execute=1). Run ls -la and you see -rwxr-xr-- — the first character is file type, then 3 chars each for owner/group/others.\n\nchmod — Change permissions. chmod 755 deploy.sh means: owner gets rwx (7=4+2+1), group gets r-x (5=4+0+1), others get r-x. The script is executable by everyone but only writable by the owner. chmod +x script.sh just adds execute permission for everyone. For sensitive files like private keys: chmod 600 id_rsa — only the owner can read or write.\n\nchown — Change owner. chown arjun:devteam deploy.sh sets the owner to 'arjun' and the group to 'devteam'. chgrp changes just the group. These commands require sudo when changing ownership of system files.",
    funFact:
      "SSH private keys (id_rsa files) MUST have permissions 600 or SSH will refuse to use them and show 'WARNING: UNPROTECTED PRIVATE KEY FILE!' This is a built-in security feature — a world-readable private key is no longer private!",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun has a shell script deploy.sh. He needs the owner to read/write/execute it, the group to only read/execute it, and others to have no permissions at all. What chmod number is correct?",
      options: [
        "chmod 777 deploy.sh",
        "chmod 755 deploy.sh",
        "chmod 750 deploy.sh",
        "chmod 644 deploy.sh",
      ],
      correctAnswer: "chmod 750 deploy.sh",
      explanation:
        "750 breaks down as: owner=7 (rwx: read+write+execute), group=5 (r-x: read+execute), others=0 (---: no permissions). This is a common and secure permission set for deployment scripts that a team needs to run but outsiders should not access.",
    },
  },

  // ── Lesson 8 ──────────────────────────────────────────────────────────────
  {
    title: "Process Management: ps, kill, top, htop",
    content:
      "Arjun's application suddenly stops responding. Users are complaining. He SSHes in and needs to figure out what's consuming all the CPU, whether the application process is still running, and how to kill a frozen process — all without rebooting the server.\n\nps — Process Status. Snapshot of currently running processes. ps aux shows ALL processes from ALL users with CPU and memory usage. ps aux | grep nginx filters for just the nginx process. Each process has a PID (Process ID) — you'll need this to kill it.\n\ntop — Real-time process monitor. Like Task Manager but in the terminal. Shows CPU, memory, and the most resource-hungry processes live. Press M to sort by memory, P to sort by CPU, q to quit. htop is a colorful, more user-friendly version of top — install it with sudo apt install htop.\n\nkill — Terminate a process. kill 1234 sends a gentle SIGTERM signal to PID 1234, asking it to shut down cleanly. kill -9 1234 sends SIGKILL — an immediate, forced termination. Use -9 only when the process ignores regular kill. killall nginx kills all processes named nginx at once.\n\nBonus: nohup ./script.sh & runs a script in the background, immune to hangups — perfect for long-running tasks.",
    funFact:
      "Process ID 1 in Linux is always 'init' or 'systemd' — the parent of all other processes. You can never kill PID 1. Attempting to kill it will either be ignored or cause the system to reboot as a safety measure.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun finds a frozen Java process with PID 4892 that won't respond to a normal kill signal. What command forces it to terminate immediately?",
      options: ["kill 4892", "kill -9 4892", "stop 4892", "ps -kill 4892"],
      correctAnswer: "kill -9 4892",
      explanation:
        "kill -9 sends the SIGKILL signal, which cannot be ignored or blocked by the process. It is an immediate, forceful termination handled by the OS kernel itself. Use it as a last resort when kill (SIGTERM) doesn't work.",
    },
  },

  // ── Lesson 9 ──────────────────────────────────────────────────────────────
  {
    title: "Piping and Redirection: Chaining Commands",
    content:
      "Arjun's manager asks for a count of all ERROR lines in today's application log, sorted by frequency, saved to a report file. Without piping and redirection, he'd need 5 separate commands and manual copy-pasting. With piping, it's one elegant line.\n\nThe pipe operator | takes the output of one command and feeds it as input to the next. It's like an assembly line. cat app.log | grep 'ERROR' | wc -l — cat reads the file, grep filters for ERROR lines, wc -l counts them. The data flows left to right through each command.\n\nRedirection operators:\n> — Redirect output to a file, overwriting it. ls -la > filelist.txt\n>> — Append to a file. echo 'Deployment complete' >> deploy.log\n2> — Redirect error messages. find / -name config 2>/dev/null suppresses permission errors.\n2>&1 — Redirect errors to the same place as regular output. ./script.sh > output.log 2>&1 captures both output and errors in one file.\n\nReal DevOps pipeline: grep 'ERROR' app.log | awk '{print $5}' | sort | uniq -c | sort -rn | head -10 > top_errors.txt — this finds errors, extracts the error type, counts occurrences, sorts by frequency, shows top 10, and saves to a file. One line, zero clicks.",
    funFact:
      "The pipe concept was invented by Doug McIlroy in 1964. He wrote a memo to his managers at Bell Labs describing his vision of programs that 'pass data from one to the next like a garden hose.' That single idea transformed software development forever.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Arjun wants to count how many lines contain 'FAILED' in deploy.log. Complete the command: grep 'FAILED' deploy.log ___ wc -l",
      correctAnswer: "|",
      explanation:
        "The pipe operator | takes the output of grep (all lines matching 'FAILED') and passes it as input to wc -l (which counts lines). This chaining of commands is the core of Unix philosophy: small tools that do one thing well, combined to solve complex problems.",
    },
  },

  // ── Lesson 10 ──────────────────────────────────────────────────────────────
  {
    title: "Your First Bash Script",
    content:
      "Arjun's team manually runs the same 5 commands every Friday to generate a server health report — it takes 20 minutes and they often forget a step. Arjun decides to automate it with his very first Bash script. This changes everything.\n\nA Bash script is simply a text file containing a sequence of shell commands. When you run it, Bash executes them line by line. Here's Arjun's first script — health_report.sh:\n\n#!/bin/bash\n# Server Health Report - runs every Friday\necho '=== Server Health Report ==='\necho 'Date:' $(date)\necho '--- Disk Usage ---'\ndf -h\necho '--- Memory Usage ---'\nfree -h\necho '--- Top 5 CPU Processes ---'\nps aux --sort=-%cpu | head -6\necho '--- Report Complete ==='\n\nTo run it: first make it executable with chmod +x health_report.sh, then execute with ./health_report.sh That's it — one command now does 20 minutes of work. The # character adds comments (lines the shell ignores). The $(date) syntax runs a command and embeds its output — called command substitution. The --sort=-%cpu flag sorts processes by CPU descending.",
    funFact:
      "The most viewed Bash script repository on GitHub has been forked over 25,000 times. It's a collection of 'bash-it' scripts that automate common developer tasks. One developer's automation becomes thousands of developers' productivity boost.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun writes a script and tries to run it with ./health_report.sh but gets 'Permission denied'. What does he need to do first?",
      options: [
        "Run it as root with sudo",
        "Move the file to /usr/bin/",
        "Make it executable with chmod +x health_report.sh",
        "Rename it with a .exe extension",
      ],
      correctAnswer: "Make it executable with chmod +x health_report.sh",
      explanation:
        "Shell scripts need the execute permission set before they can be run directly. chmod +x adds the execute bit for the owner (and others by default). Without this, the OS refuses to run the file as a program.",
    },
  },

  // ── Lesson 11 ──────────────────────────────────────────────────────────────
  {
    title: "The Shebang Line and Making Scripts Executable",
    content:
      "Arjun notices that when his colleague Priya runs his script on her Mac, she gets weird errors. Same script, different outputs. The culprit? He forgot the shebang line, so the Mac used its default Zsh shell instead of Bash, and the syntax differed slightly.\n\nThe shebang (also called hashbang) is the first line of any script: #!/bin/bash The #! is the shebang symbol. The path after it tells the OS exactly which interpreter to use. When you run ./script.sh, the OS reads this line first and launches that specific program to interpret the rest of the file.\n\nCommon shebangs:\n#!/bin/bash — Standard Bash (works on all Linux servers)\n#!/usr/bin/env bash — Finds Bash wherever it's installed (more portable, preferred for cross-platform scripts)\n#!/usr/bin/python3 — Python 3 script\n#!/usr/bin/env node — Node.js script\n#!/bin/sh — POSIX-compatible sh (most basic, most portable)\n\nWithout a shebang, the OS guesses the interpreter, which leads to unpredictable behavior. Always include it. The three steps to create and run any script: 1) Write the file with a shebang, 2) chmod +x scriptname.sh, 3) ./scriptname.sh If the script is in your PATH, you can run it without the ./ prefix.",
    funFact:
      "The name 'shebang' comes from 'sharp bang' — sharp (#) and bang (!) were common developer slang for the hash and exclamation mark characters. Some also call it a 'hashbang' or 'crunchbang'.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants his script to work on any Linux system regardless of where Bash is installed (some systems have it at /usr/local/bin/bash, others at /bin/bash). Which shebang is most portable?",
      options: [
        "#!/bin/bash",
        "#!/usr/bin/env bash",
        "#!/usr/local/bin/bash",
        "#!/bin/sh",
      ],
      correctAnswer: "#!/usr/bin/env bash",
      explanation:
        "#!/usr/bin/env bash uses the 'env' command to locate bash in the system's PATH, making it work regardless of where bash is installed. #!/bin/bash hardcodes the path, which can break on systems where bash lives elsewhere (like macOS with Homebrew or NixOS).",
    },
  },

  // ── Lesson 12 ──────────────────────────────────────────────────────────────
  {
    title: "Variables in Bash",
    content:
      "Arjun's deployment script has the same directory path typed 15 times. When the path changes (which it will, because it always does), he has to find and replace it in 15 places and inevitably misses one. Variables fix this permanently.\n\nIn Bash, creating a variable is simple: APP_DIR='/var/www/myapp' No spaces around the = sign — this is the most common beginner mistake. To use the variable, prefix it with $: echo $APP_DIR or cd $APP_DIR Use ${APP_DIR} (with curly braces) when the variable name is immediately followed by text: mv ${APP_DIR}/old ${APP_DIR}_backup\n\nTypes of variables:\nLocal variables: exist only in the current script or shell session.\nEnvironment variables: available to all child processes. Set with export DB_HOST='localhost' Common ones: $HOME, $USER, $PATH, $PWD\nCommand substitution variables: CURRENT_DATE=$(date +%Y-%m-%d) stores the output of a command.\n\nArjun's improved script:\nAPP_DIR='/var/www/myapp'\nBACKUP_DIR='/backups'\nDATE=$(date +%Y%m%d)\ncp -r $APP_DIR ${BACKUP_DIR}/app_${DATE}\nNow changing the path means editing one line. The backup file is automatically named app_20240615. Clean, maintainable, professional.",
    funFact:
      "By convention, shell variables that are meant to be environment variables (exported, used system-wide) are written in ALL_CAPS (like $PATH, $HOME, $USER). Local script variables are often written in lowercase. This isn't a rule — it's a readability convention followed industry-wide.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Arjun wants to store today's date formatted as 2024-06-15 in a variable called TODAY. Complete: TODAY=___(date +%Y-%m-%d)",
      correctAnswer: "$",
      explanation:
        "The $(...) syntax is command substitution — it runs the command inside and replaces itself with the output. So TODAY=$(date +%Y-%m-%d) runs the date command and stores its output (like '2024-06-15') in the TODAY variable. This is one of the most useful patterns in Bash scripting.",
    },
  },

  // ── Lesson 13 ──────────────────────────────────────────────────────────────
  {
    title: "Reading User Input in Scripts",
    content:
      "Arjun writes a deployment script, but his team asks: 'Can the script ask us which environment to deploy to — dev, staging, or production?' Instead of making separate scripts, Arjun adds interactive prompts using the read command.\n\nThe read command pauses the script and waits for the user to type something:\necho 'Enter deployment environment (dev/staging/prod):'\nread ENV\necho \"Deploying to: $ENV\"\nWhatever the user types is stored in the ENV variable.\n\nUseful read options:\nread -p 'Enter username: ' USERNAME — The -p flag shows the prompt on the same line as the input.\nread -s -p 'Enter password: ' PASSWORD — The -s flag silences input (characters don't appear) — essential for passwords.\nread -t 10 -p 'Confirm deployment? (y/n): ' CONFIRM — The -t 10 flag auto-times-out after 10 seconds — useful for automated scripts that might need manual override.\n\nArjun's deployment script now asks: which environment, which version, and confirms before proceeding. If the user types anything other than 'y', the deployment is cancelled. This kind of confirmation prompt prevents countless accidental production deployments — a common nightmare in DevOps teams.",
    funFact:
      "Many companies have 'two-person rules' for production deployments where two engineers must approve. Some enforce this in scripts using read prompts that require multiple confirmations with different passwords. Low-tech but effective.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's script needs to ask for a database password without showing the characters on screen as the user types. Which command is correct?",
      options: [
        "read DB_PASSWORD",
        "read -p 'Password: ' DB_PASSWORD",
        "read -s -p 'Password: ' DB_PASSWORD",
        "input -hidden DB_PASSWORD",
      ],
      correctAnswer: "read -s -p 'Password: ' DB_PASSWORD",
      explanation:
        "The -s flag makes read silent — characters typed are not echoed to the terminal. The -p flag displays the prompt text on the same line. Combined, the user sees 'Password: ' but their typing is invisible, which is essential for security.",
    },
  },

  // ── Lesson 14 ──────────────────────────────────────────────────────────────
  {
    title: "If/Else Conditions in Bash",
    content:
      "Arjun's deployment script blindly deploys even if the previous build failed. One bad deploy wipes production for an hour. He needs the script to check the previous step before proceeding — this is where conditionals come in.\n\nBash if/else syntax:\nif [ condition ]; then\n  # commands if true\nelif [ other_condition ]; then\n  # commands if elif is true\nelse\n  # commands if all false\nfi\n\nCommon conditions:\nString comparison: [ \"$ENV\" == 'production' ], [ -z \"$VAR\" ] (empty string), [ -n \"$VAR\" ] (not empty)\nNumeric comparison: [ $COUNT -gt 5 ] (greater than), [ $CODE -eq 0 ] (equal), [ $SIZE -le 100 ] (less than or equal)\nFile checks: [ -f filename ] (file exists), [ -d dirname ] (directory exists), [ -x script.sh ] (file is executable)\n\nArjun's improved script:\nif [ ! -d '$DEPLOY_DIR' ]; then\n  echo 'ERROR: Deploy directory not found!'\n  exit 1\nfi\nif [ '$ENV' == 'production' ]; then\n  echo 'WARNING: Deploying to PRODUCTION!'\n  read -p 'Type YES to confirm: ' CONFIRM\n  [ '$CONFIRM' != 'YES' ] && exit 1\nfi",
    funFact:
      "The [ ] brackets in Bash are actually an alias for the 'test' command. When you write [ -f file.txt ], Bash is actually calling 'test -f file.txt'. You can use either syntax. The double brackets [[ ]] are a Bash extension that adds more features and is generally preferred.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants his script to exit with an error message if a required config file /etc/app/config.yml does not exist. Which condition check is correct?",
      options: [
        "if [ -f /etc/app/config.yml ]; then",
        "if [ ! -f /etc/app/config.yml ]; then",
        "if [ -d /etc/app/config.yml ]; then",
        "if [ -x /etc/app/config.yml ]; then",
      ],
      correctAnswer: "if [ ! -f /etc/app/config.yml ]; then",
      explanation:
        "The -f flag checks if a file exists and is a regular file. The ! negates the condition. So '[ ! -f filename ]' is true when the file does NOT exist. Inside this if block, you'd put your error message and 'exit 1' to stop the script.",
    },
  },

  // ── Lesson 15 ──────────────────────────────────────────────────────────────
  {
    title: "For Loops in Bash Scripts",
    content:
      'Arjun needs to deploy the same application to 10 different servers. Without loops, his script would repeat the same SSH command 10 times — 50 lines of nearly identical code. With a for loop, it\'s 5 lines and infinitely scalable.\n\nBasic for loop:\nfor SERVER in web01 web02 web03 web04 web05; do\n  echo "Deploying to $SERVER"\n  ssh arjun@$SERVER \'sudo systemctl restart app\'\ndone\n\nLoop over a range:\nfor i in {1..10}; do\n  echo "Processing item $i"\ndone\n\nLoop over files:\nfor LOG_FILE in /var/log/*.log; do\n  echo "Archiving $LOG_FILE"\n  gzip $LOG_FILE\ndone\n\nC-style for loop:\nfor ((i=0; i<5; i++)); do\n  echo "Attempt $i"\ndone\n\nLoop over a file\'s lines (most powerful):\nwhile IFS= read -r SERVER; do\n  ssh arjun@$SERVER \'df -h\'\ndone < servers.txt\nThis reads server names from a text file — add a new server to the file, no script changes needed. This pattern is how real DevOps teams manage server lists.',
    funFact:
      "Large cloud companies use Bash loops in their deployment pipelines to manage fleets of thousands of servers. A single for loop at Netflix can update configurations across their entire global CDN infrastructure in minutes.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun has a file servers.txt with 50 server hostnames (one per line) and wants to run 'df -h' on each. Which approach reads from the file correctly?",
      options: [
        "for SERVER in servers.txt; do ssh $SERVER 'df -h'; done",
        "for SERVER in $(cat servers.txt); do ssh $SERVER 'df -h'; done",
        "while IFS= read -r SERVER; do ssh $SERVER 'df -h'; done < servers.txt",
        "loop servers.txt | ssh 'df -h'",
      ],
      correctAnswer:
        "while IFS= read -r SERVER; do ssh $SERVER 'df -h'; done < servers.txt",
      explanation:
        "while IFS= read -r SERVER reads the file line by line, handling spaces in hostnames correctly (IFS= prevents word splitting, -r prevents backslash interpretation). The < servers.txt redirects the file as input to the while loop. This is the industry-standard pattern for iterating over lines in a file.",
    },
  },

  // ── Lesson 16 ──────────────────────────────────────────────────────────────
  {
    title: "While Loops and Until Loops",
    content:
      "Arjun writes a script that needs to wait until a service is ready before proceeding with deployment. The service might take 10 seconds or 2 minutes to start — it's unpredictable. A while loop with a sleep and health check solves this elegantly.\n\nWhile loop — runs AS LONG AS the condition is true:\nRETRIES=0\nwhile ! curl -s http://localhost:8080/health > /dev/null; do\n  echo 'Service not ready, waiting...'\n  sleep 5\n  RETRIES=$((RETRIES+1))\n  if [ $RETRIES -ge 12 ]; then\n    echo 'ERROR: Service failed to start after 60s'\n    exit 1\n  fi\ndone\necho 'Service is ready!'\nThis keeps checking every 5 seconds, up to 12 retries (60 seconds total), then fails with an error. This exact pattern is used in real CI/CD pipelines.\n\nUntil loop — runs UNTIL the condition becomes true (the opposite of while):\nQUEUE_SIZE=100\nuntil [ $QUEUE_SIZE -eq 0 ]; do\n  QUEUE_SIZE=$(get_queue_size)\n  echo \"Queue size: $QUEUE_SIZE\"\n  sleep 10\ndone\necho 'Queue drained!'\n\nLoop control: break exits the loop immediately. continue skips to the next iteration. These give you precise control over complex loop logic.",
    funFact:
      "The health-check while loop pattern is so common in DevOps that Kubernetes (the industry-standard container orchestration platform) has it built in as a native feature called 'readiness probes' and 'liveness probes'. Understanding shell scripting helps you understand WHY tools like Kubernetes exist.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants a loop that keeps retrying a database connection until it succeeds. The loop should run AS LONG AS the connection fails. Which loop type is most semantically appropriate?",
      options: [
        "for loop with a fixed count",
        "until loop (runs until condition is true)",
        "while loop (runs while condition is true, i.e., while connection fails)",
        "Both while and until work identically here",
      ],
      correctAnswer:
        "while loop (runs while condition is true, i.e., while connection fails)",
      explanation:
        "while ! connect_to_db reads as 'while the connection fails, keep trying' — which matches our intent perfectly. An until loop would be 'until connect_to_db succeeds', which is logically equivalent but reads less naturally. In practice, while is more commonly used for this pattern.",
    },
  },

  // ── Lesson 17 ──────────────────────────────────────────────────────────────
  {
    title: "Case Statements: The Shell's Switch",
    content:
      "Arjun's deployment script has grown an ugly chain of if/elif/elif/elif for handling different environments: dev, staging, uat, production. His team lead looks at it and says 'Use a case statement — it's cleaner and faster.' The case statement is Bash's equivalent of switch/case in other languages.\n\nCase statement syntax:\ncase $ENV in\n  dev)\n    SERVER='dev.company.com'\n    PORT=3000\n    ;;\n  staging)\n    SERVER='staging.company.com'\n    PORT=8080\n    ;;\n  production)\n    SERVER='prod.company.com'\n    PORT=443\n    echo 'WARNING: Production deployment!'\n    ;;\n  *)\n    echo 'Unknown environment: $ENV'\n    exit 1\n    ;;\nesac\n\nThe *) is the default/catch-all case — like else. Each case ends with ;; Patterns support wildcards: start|restart) matches either start or restart, *.log) matches any string ending in .log.\n\nCase statements are also significantly faster than long if/elif chains when checking many conditions, because Bash can jump directly to the matching pattern rather than evaluating each condition sequentially.",
    funFact:
      "In Bash, case statements use pattern matching, not just exact string matching. This means you can write cases like [yY][eE][sS]) to match 'yes', 'YES', 'Yes', 'yEs', etc. — all in one case arm. This is far cleaner than writing multiple elif conditions.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In a case statement, what symbol ends each case pattern's block of commands? (It appears twice at the end of each case arm)",
      correctAnswer: ";;",
      explanation:
        "Each case arm in Bash ends with ;; (double semicolon). This tells Bash to stop executing and exit the case statement after this arm matches. Without ;;, Bash would fall through to the next arm (unlike in C/JavaScript). The case statement itself ends with 'esac' (case spelled backwards).",
    },
  },

  // ── Lesson 18 ──────────────────────────────────────────────────────────────
  {
    title: "Exit Codes and Error Handling",
    content:
      "Arjun's automated deployment script runs at 3 AM via cron. One night, the build fails silently — the script continues and deploys a broken build to production. Users are down for 4 hours. The root cause: no exit code checking. This is the most important lesson in professional shell scripting.\n\nEvery command in Linux returns an exit code when it finishes: 0 means success, any non-zero number means failure. Check the exit code of the last command with $?: cp config.yml /etc/app/ ; echo $? — prints 0 if copy succeeded, 1 if failed.\n\nProfessional error handling patterns:\nset -e — Put this at the top of your script. It makes the script EXIT IMMEDIATELY if any command fails. This is the single most important line in production scripts.\nset -u — Exits if you use an undefined variable. Catches typos like $SEVER instead of $SERVER\nset -o pipefail — Makes pipe failures count as errors. Without this, false | echo 'ok' exits 0 because the last command succeeded.\n\nCombine them at the top of every production script: set -euo pipefail\n\nTrap on exit: trap 'echo \"Script failed at line $LINENO\"' ERR — runs a command whenever an error occurs, telling you exactly which line failed. Essential for debugging in production.",
    funFact:
      "The exit code 137 means a process was killed by signal 9 (SIGKILL). If you see exit code 137 in your logs, your application was forcibly terminated — usually because it ran out of memory and the OS killed it. Understanding exit codes can save hours of debugging.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants his production deploy script to stop immediately if any single command fails, rather than blindly continuing. What line should he add at the top of the script?",
      options: [
        "exit 1",
        "set -euo pipefail",
        "trap exit ERR",
        "if [ $? -ne 0 ]; then exit 1; fi",
      ],
      correctAnswer: "set -euo pipefail",
      explanation:
        "set -euo pipefail is the professional standard for robust scripts: -e exits on any command failure, -u exits on undefined variables, -o pipefail makes pipe errors count. Adding this one line to the top of your script catches a huge class of bugs that would otherwise cause silent failures in production.",
    },
  },

  // ── Lesson 19 ──────────────────────────────────────────────────────────────
  {
    title: "Functions in Bash",
    content:
      "Arjun's deployment script has grown to 300 lines. The same error-notification code appears in 8 different places — if he wants to change the Slack message format, he has to edit 8 locations. Functions solve this: write once, call anywhere.\n\nDefining and calling functions:\nnotify_slack() {\n  local MESSAGE=$1\n  local STATUS=$2\n  curl -s -X POST https://hooks.slack.com/... \\\n    -d \"{\\\"text\\\":\\\"[$STATUS] $MESSAGE\\\"}\"\n}\n\n# Call it anywhere:\nnotify_slack 'Deployment started' 'INFO'\nnotify_slack 'Deploy failed!' 'ERROR'\n\nKey concepts:\nlocal VARNAME — declares a variable as local to the function. Without local, variables are global and can accidentally overwrite script-level variables.\n$1, $2, $3 — positional parameters (arguments passed to the function).\n$@ — all arguments as separate words. $# — count of arguments.\nreturn 0 — return exit code (0 for success, non-zero for error). Functions cannot return strings — use echo and command substitution instead: RESULT=$(my_function)\n\nArjun now structures his script with functions: check_dependencies(), pull_latest_code(), run_tests(), deploy(), notify_slack(). The main script calls them in order — readable as a story.",
    funFact:
      "The POSIX standard technically calls them 'shell functions', not 'functions'. But the important distinction from other languages: Bash functions don't have truly scoped variables unless you use 'local'. Forgetting 'local' is a classic source of subtle bugs in complex scripts.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun writes a function with a variable 'COUNT=0' but forgets to use 'local'. His script also has a COUNT variable at the top level. What happens?",
      options: [
        "The function creates a separate copy, no conflict",
        "Bash throws an error about duplicate variable names",
        "The function modifies the global COUNT, potentially breaking other parts of the script",
        "The function COUNT is automatically local",
      ],
      correctAnswer:
        "The function modifies the global COUNT, potentially breaking other parts of the script",
      explanation:
        "In Bash, variables are global by default. When a function modifies a variable without the 'local' keyword, it modifies the global variable. This is a common source of hard-to-debug bugs in complex scripts. Always use 'local' for variables that should be confined to a function.",
    },
  },

  // ── Lesson 20 ──────────────────────────────────────────────────────────────
  {
    title: "Arrays in Bash",
    content:
      "Arjun's script needs to manage a dynamic list of servers — some get added, some get removed, and he needs to iterate through only the ones that are currently online. A single variable can only hold one value. Bash arrays solve this.\n\nDeclaring and using arrays:\n# Declare an indexed array\nSERVERS=('web01' 'web02' 'web03' 'db01')\n\n# Access by index (0-based)\necho ${SERVERS[0]}  # web01\necho ${SERVERS[2]}  # web03\n\n# All elements\necho ${SERVERS[@]}\n\n# Array length\necho ${#SERVERS[@]}  # 4\n\n# Loop over array\nfor SERVER in \"${SERVERS[@]}\"; do\n  echo \"Pinging $SERVER\"\ndone\n\n# Add element\nSERVERS+=('web04')\n\n# Associative array (key-value pairs, like a dictionary)\ndeclare -A SERVER_PORTS\nSERVER_PORTS['web01']=8080\nSERVER_PORTS['db01']=5432\necho ${SERVER_PORTS['web01']}  # 8080\n\nReal scenario: Arjun builds a script that reads all server names from a config, pings each one, and stores only the responsive servers in an ONLINE_SERVERS array. Then the deployment loop iterates only over ONLINE_SERVERS — automatically skipping dead servers.",
    funFact:
      "Unlike most programming languages, Bash arrays are 'sparse' — you can have elements at index 0, 1, and 500 without filling indexes 2-499. This is rarely useful but explains why ${#array[@]} (count) can differ from the highest index. Always use [@] expansion with quotes to handle elements with spaces correctly.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Arjun has SERVERS=('web01' 'web02' 'web03'). To get the number of servers in the array, he uses: echo ___SERVERS[@]}",
      correctAnswer: "${#",
      explanation:
        "The ${#ARRAY[@]} syntax returns the number of elements in an array. The # character before the array name means 'length of'. So ${#SERVERS[@]} would return 3 for an array with 3 elements. Compare to ${SERVERS[@]} which returns all elements.",
    },
  },

  // ── Lesson 21 ──────────────────────────────────────────────────────────────
  {
    title: "String Manipulation in Bash",
    content:
      "Arjun gets a file with server names in the format PROD-WEB-SERVER-01 but his deploy script expects them as prod-web-server-01 (lowercase). He also needs to extract just the number at the end, and build a URL by replacing SERVER with HOST. Pure Bash string manipulation handles all of this without any external tools.\n\nEssential string operations:\nNAME='PROD-WEB-SERVER-01'\n\n# Length\necho ${#NAME}        # 19\n\n# Lowercase / Uppercase\necho ${NAME,,}       # prod-web-server-01\necho ${NAME^^}       # PROD-WEB-SERVER-01\n\n# Extract substring (offset:length)\necho ${NAME:5:3}     # WEB\n\n# Remove prefix (shortest match)\necho ${NAME#PROD-}   # WEB-SERVER-01\n\n# Remove suffix\necho ${NAME%-01}     # PROD-WEB-SERVER\n\n# Replace first match\necho ${NAME/SERVER/HOST}   # PROD-WEB-HOST-01\n\n# Replace all matches\necho ${NAME//WEB/APP}      # PROD-APP-SERVER-01\n\n# Default value if empty\necho ${PORT:-8080}   # Uses 8080 if PORT is unset\n\nThe ${VAR:-default} pattern is extremely useful in scripts — it provides a fallback value without needing an if statement. Arjun uses it for all optional parameters: ENV=${1:-dev} means 'use the first argument if provided, otherwise default to dev'.",
    funFact:
      "Bash's built-in string manipulation was added to avoid spawning external processes like 'sed' and 'awk' for simple operations. Every external process takes ~5-10ms to launch. In a script that processes thousands of strings, using built-in ${} operations instead of external commands can cut runtime by 10x.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun has FILENAME='deploy-script-v2.3.sh'. He needs to extract just the extension 'sh'. Which expression works?",
      options: [
        "${FILENAME#*.}",
        "${FILENAME%.*}",
        "${FILENAME##*.}",
        "${FILENAME/sh/}",
      ],
      correctAnswer: "${FILENAME##*.}",
      explanation:
        "## removes the longest matching prefix up to and including the pattern. ##*. removes everything up to and including the last dot, leaving only 'sh'. Using # (single) would remove only up to the FIRST dot, giving '3.sh' instead. This is a standard pattern for extracting file extensions in Bash.",
    },
  },

  // ── Lesson 22 ──────────────────────────────────────────────────────────────
  {
    title: "Regular Expressions: Pattern Matching",
    content:
      "Arjun needs to validate that a version number entered by the user matches the format 'v1.2.3' before deploying. He also needs to extract IP addresses from log files and validate email addresses. Regular expressions (regex) are the universal language for pattern matching.\n\nBash regex with [[ =~ ]]:\n# Validate version format v1.2.3\nVERSION='v2.14.0'\nif [[ $VERSION =~ ^v[0-9]+\\.[0-9]+\\.[0-9]+$ ]]; then\n  echo 'Valid version format'\nelse\n  echo 'ERROR: Invalid version format'\nfi\n\nEssential regex patterns to memorize:\n^ — Start of string. $ — End of string.\n. — Any single character. \\. — Literal dot.\n[0-9] — Any digit. [a-z] — Any lowercase letter.\n+ — One or more of the preceding. * — Zero or more. ? — Zero or one.\n{3} — Exactly 3. {2,4} — Between 2 and 4.\n\nIP address pattern: [0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\nEmail pattern: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n\nCapture groups: [[ $LINE =~ ([0-9]+)\\.([0-9]+) ]] — ${BASH_REMATCH[1]} and ${BASH_REMATCH[2]} hold the captured groups.",
    funFact:
      "Regular expressions were invented by mathematician Stephen Kleene in the 1950s as a way to describe regular languages in formal language theory. Ken Thompson later implemented them in the QED text editor in 1968, and they've been in every Unix tool ever since — grep, sed, awk, Perl, Python, JavaScript all use the same core concepts.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun writes: if [[ $EMAIL =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$ ]]. What does the ^ at the start and $ at the end ensure?",
      options: [
        "They are required syntax for Bash regex",
        "^ means the pattern must match from the start of the string, $ means it must match to the end",
        "^ inverts the match, $ ends the regex block",
        "They match special characters in email addresses",
      ],
      correctAnswer:
        "^ means the pattern must match from the start of the string, $ means it must match to the end",
      explanation:
        "Without ^ and $, the regex would match any string that CONTAINS a valid email pattern — so 'hello user@example.com world' would pass validation. With ^ and $, the entire string must match the pattern from start to finish. This is critical for input validation.",
    },
  },

  // ── Lesson 23 ──────────────────────────────────────────────────────────────
  {
    title: "grep and sed: Text Processing Powerhouses",
    content:
      "Arjun inherits a legacy script that has hardcoded IP addresses scattered across 50 config files. The server IPs are changing next week. Manually editing each file would take hours and introduce typos. grep and sed handle this in seconds.\n\ngrep advanced usage:\ngrep -r 'old-server.internal' /etc/app/    # Find all occurrences\ngrep -rn 'old-server.internal' /etc/app/   # With line numbers\ngrep -rl 'old-server.internal' /etc/app/   # Only filenames\ngrep -E '(ERROR|WARN|FATAL)' app.log      # Extended regex (multiple patterns)\ngrep -A 3 -B 3 'ERROR' app.log           # Show 3 lines after and before each match\n\nsed (Stream EDitor) — modify text in files and streams:\n# Replace text in a file (in-place with -i)\nsed -i 's/old-server.internal/new-server.internal/g' config.yml\n\n# Replace across all files in a directory:\ngrep -rl 'old-server.internal' /etc/app/ | xargs sed -i 's/old-server.internal/new-server.internal/g'\n\n# Delete lines matching a pattern:\nsed -i '/^#/d' config.yml    # Remove all comment lines\n\n# Print only matching lines (like grep):\nsed -n '/ERROR/p' app.log\n\n# Add a line after a pattern:\nsed -i '/\\[database\\]/a host = localhost' config.ini\n\nThe xargs command takes input from a pipe and builds command arguments from it — essential for combining grep and sed.",
    funFact:
      "sed was written by Lee McMahon at Bell Labs in 1974. Its syntax s/old/new/g (substitute, global) is used virtually unchanged in vim, Perl, Ruby, and JavaScript today. Learning one tool's regex syntax teaches you all of them.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to replace ALL occurrences of 'localhost' with '192.168.1.100' in the file database.conf, in-place (modifying the file directly). Which command is correct?",
      options: [
        "sed 's/localhost/192.168.1.100/' database.conf",
        "sed -i 's/localhost/192.168.1.100/g' database.conf",
        "grep -i 'localhost' database.conf | sed 's/localhost/192.168.1.100/'",
        "replace localhost 192.168.1.100 database.conf",
      ],
      correctAnswer: "sed -i 's/localhost/192.168.1.100/g' database.conf",
      explanation:
        "sed -i modifies the file in-place (instead of printing to stdout). The s/old/new/g pattern means substitute (s), replace the pattern 'localhost' with '192.168.1.100', and g means global (replace ALL occurrences on each line, not just the first). Without -i, sed only prints the result without changing the file.",
    },
  },

  // ── Lesson 24 ──────────────────────────────────────────────────────────────
  {
    title: "awk: Advanced Text Processing",
    content:
      "Arjun's manager asks for a CSV report: server name, CPU usage, and memory usage, extracted from the output of ps aux. The output has inconsistent spacing and he needs specific columns. awk is the precision tool for structured text processing.\n\nawk processes text line by line and splits each line into fields. By default, fields are whitespace-separated and accessed as $1, $2, $3 etc. $0 is the whole line.\n\n# Print columns 1 and 2 from a file\nawk '{print $1, $2}' data.txt\n\n# ps aux: print user ($1), PID ($2), CPU ($3), command ($11)\nps aux | awk '{print $1, $2, $3\"%\", $11}'\n\n# Filter: only print lines where CPU ($3) > 10\nps aux | awk '$3 > 10 {print $1, $2, $3\"%\"}'\n\n# Custom field separator (for CSV)\nawk -F',' '{print $1, $3}' data.csv\n\n# Sum a column\nawk '{sum += $3} END {print \"Total:\", sum}' data.txt\n\n# Calculate average\nawk '{sum += $3; count++} END {print \"Average:\", sum/count}' data.txt\n\n# Print lines between two patterns\nawk '/START/,/END/ {print}' app.log\n\nReal power: ps aux | awk 'NR>1 && $3>5 {printf \"%-20s %5s%% %5s%%\\n\", $11, $3, $4}' | sort -k2 -rn — formats a sorted process table with only high-CPU processes.",
    funFact:
      "awk is named after its three creators: Alfred Aho, Peter Weinberger, and Brian Kernighan (AWK). Kernighan is also co-author of 'The C Programming Language', the most influential programming book ever written. These Bell Labs engineers basically built modern computing.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun has a log file where each line has: timestamp, level, message separated by spaces. He only wants to print lines where the level ($2) is 'ERROR'. Which awk command is correct?",
      options: [
        "awk '{print $2 == ERROR}' app.log",
        "awk '$2 == \"ERROR\" {print $0}' app.log",
        "awk -F'ERROR' '{print}' app.log",
        "awk '/ERROR/ {print $2}' app.log",
      ],
      correctAnswer: "awk '$2 == \"ERROR\" {print $0}' app.log",
      explanation:
        "In awk, conditions go before the action block {}. '$2 == \"ERROR\"' is the condition (field 2 equals ERROR), and '{print $0}' is the action (print the whole line). This is a field-based filter — more precise than grep which would match ERROR anywhere in the line.",
    },
  },

  // ── Lesson 25 ──────────────────────────────────────────────────────────────
  {
    title: "Cron Jobs: Scheduling Automated Tasks",
    content:
      "Arjun's team manually runs the server health report every day at 9 AM. But Arjun was on leave last Tuesday and the report didn't run. His manager asks him to automate it — no manual intervention ever again. The answer is cron, the Linux task scheduler.\n\nCron reads a crontab (cron table) file that defines when to run which commands. Edit your crontab with crontab -e. Each line is a job in the format:\n# MIN  HOUR  DAY  MONTH  WEEKDAY  COMMAND\n#  *    *     *    *      *        command\n\nExamples:\n# Run health_report.sh every day at 9 AM\n0 9 * * * /home/arjun/scripts/health_report.sh >> /var/log/health.log 2>&1\n\n# Run backup every Sunday at 2 AM\n0 2 * * 0 /home/arjun/scripts/backup.sh\n\n# Run every 15 minutes\n*/15 * * * * /home/arjun/scripts/check_disk.sh\n\n# Run on the 1st of every month at midnight\n0 0 1 * * /home/arjun/scripts/monthly_report.sh\n\n# Run every weekday (Mon-Fri) at 8:30 AM\n30 8 * * 1-5 /home/arjun/scripts/standup_reminder.sh\n\nBest practices: always use full paths in cron (cron has a minimal PATH), redirect output to a log file (>> /var/log/jobname.log 2>&1), and use crontab -l to list current jobs. The site crontab.guru lets you verify cron expressions visually.",
    funFact:
      "The word 'cron' comes from the Greek word 'chronos' meaning time. Cron was originally written by Ken Thompson in 1975 and is essentially unchanged in modern systems. It's been running critical scheduled tasks for nearly 50 years.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants to schedule his disk_cleanup.sh script to run every day at 11:30 PM. What is the correct crontab entry?",
      options: [
        "30 23 * * * /scripts/disk_cleanup.sh",
        "23 30 * * * /scripts/disk_cleanup.sh",
        "0 11 30 * * /scripts/disk_cleanup.sh",
        "* * 23 30 * /scripts/disk_cleanup.sh",
      ],
      correctAnswer: "30 23 * * * /scripts/disk_cleanup.sh",
      explanation:
        "Crontab format is MIN HOUR DAY MONTH WEEKDAY. 11:30 PM is hour 23, minute 30. So: '30 23 * * *' means minute 30, hour 23, any day, any month, any weekday. The * means 'every' for that field. Always remember: MINUTE comes before HOUR.",
    },
  },

  // ── Lesson 26 ──────────────────────────────────────────────────────────────
  {
    title: "Log Management Scripts",
    content:
      "Arjun's server runs out of disk space at 3 AM because log files have been growing for months with no cleanup. The server crashes, waking up 3 engineers. Next morning, his team lead says 'Write a log management script — this will never happen again.'\n\nArjun writes log_manager.sh:\n\n#!/usr/bin/env bash\nset -euo pipefail\n\nLOG_DIR='/var/log/myapp'\nMAX_SIZE_MB=100\nDAYS_TO_KEEP=30\nARCHIVE_DIR='/var/log/archive'\n\nlog_info() { echo \"[$(date '+%Y-%m-%d %H:%M:%S')] INFO: $1\"; }\nlog_error() { echo \"[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1\" >&2; }\n\n# Archive logs older than DAYS_TO_KEEP\nlog_info 'Archiving old logs...'\nfind $LOG_DIR -name '*.log' -mtime +$DAYS_TO_KEEP -exec gzip {} \\;\nfind $LOG_DIR -name '*.log.gz' -mtime +$DAYS_TO_KEEP -exec mv {} $ARCHIVE_DIR \\;\n\n# Delete archives older than 90 days\nfind $ARCHIVE_DIR -name '*.gz' -mtime +90 -delete\n\n# Check disk usage and alert if over threshold\nUSAGE=$(df -BM $LOG_DIR | awk 'NR==2 {gsub(/M/,\"\",$3); print $3}')\nif [ $USAGE -gt $MAX_SIZE_MB ]; then\n  log_error \"Log dir exceeds ${MAX_SIZE_MB}MB (current: ${USAGE}MB)\"\n  ls -lS $LOG_DIR/*.log | head -1 | awk '{print $9}' | xargs logrotate\nfi\nlog_info 'Log management complete'",
    funFact:
      "Linux has a built-in tool called 'logrotate' specifically designed for log management. It's configured via /etc/logrotate.d/ files and handles rotation, compression, and deletion automatically. Arjun's script and logrotate together give defense-in-depth for log management.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants to find all .log files in /var/log/myapp that are older than 30 days and compress them with gzip. Which find command is correct?",
      options: [
        "find /var/log/myapp -name '*.log' -mtime 30 -exec gzip {} \\;",
        "find /var/log/myapp -name '*.log' -mtime +30 -exec gzip {} \\;",
        "find /var/log/myapp -name '*.log' -days 30 | gzip",
        "find /var/log/myapp -older 30 -name '*.log' | xargs gzip",
      ],
      correctAnswer:
        "find /var/log/myapp -name '*.log' -mtime +30 -exec gzip {} \\;",
      explanation:
        "The -mtime +30 flag means 'modified more than 30 days ago'. Without the +, -mtime 30 means 'exactly 30 days ago'. The -exec gzip {} \\; runs gzip on each found file, where {} is replaced by the filename and \\; ends the -exec expression. This is a standard pattern for applying a command to multiple found files.",
    },
  },

  // ── Lesson 27 ──────────────────────────────────────────────────────────────
  {
    title: "Disk Usage Monitoring Script",
    content:
      "After the disk-space crash, the manager requests a proactive monitoring script that alerts via Slack when disk usage hits 80%, and sends a critical alert at 90%. This script runs every 30 minutes via cron.\n\nKey script components:\nWARN_THRESHOLD=80 and CRIT_THRESHOLD=90 at the top for easy tuning.\nA send_slack() function that POSTs a JSON payload to the Slack webhook API.\nProcess substitution to loop over live df output: done < <(df -h | grep -v tmpfs) avoids temporary files.\nawk to extract the usage percentage from each line.\nConditional alerts: sends WARNING at 80%, CRITICAL at 90%.\nCrontab: */30 * * * * /home/arjun/scripts/disk_monitor.sh\n\nProcess substitution, where the output of a command is treated as a file handle using <(command), is Bash-specific but extremely powerful. It allows piping data into while loops cleanly. This technique appears in production DevOps scripts at Netflix, Shopify, and Google SRE teams.",
    funFact:
      "The process substitution syntax <(command) is a Bash-specific feature that treats the output of a command as a file. It allows you to use a command's output where a filename is expected, without creating a temporary file. This is much cleaner than tmp files and runs entirely in memory.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's disk monitor needs to run every 30 minutes. He adds it to crontab. Which crontab entry runs a script every 30 minutes, all day?",
      options: [
        "30 * * * * /scripts/disk_monitor.sh",
        "*/30 * * * * /scripts/disk_monitor.sh",
        "* 30 * * * /scripts/disk_monitor.sh",
        "0,30 * * * * /scripts/disk_monitor.sh",
      ],
      correctAnswer: "*/30 * * * * /scripts/disk_monitor.sh",
      explanation:
        "*/30 in the minutes field means 'every 30 minutes' (at :00 and :30 of every hour). '30 * * * *' would run at exactly :30 of every hour — only once per hour. '0,30 * * * *' is also correct (explicitly at :00 and :30). */30 is the clearest way to express 'every 30 minutes'.",
    },
  },

  // ── Lesson 28 ──────────────────────────────────────────────────────────────
  {
    title: "Process and Service Management Scripts",
    content:
      "An application occasionally crashes silently when its process dies but systemd does not restart it because it was not configured as a systemd service. A watchdog script checks if the app is running and restarts it if not.\n\nWatchdog script key components:\n- APP_CMD variable holds the full command to start the application\n- pgrep -f checks if a process matching APP_CMD is currently running\n- RESTART_COUNT_FILE tracks how many times the script has tried restarting\n- MAX_RESTARTS=3 prevents infinite restart loops on a broken app\n- nohup $APP_CMD >> /var/log/app.log 2>&1 & restarts in the background, immune to hangups\n- log() function timestamps every action to the log file\n\nWorkplace scenario: This pattern is used in legacy environments where apps cannot be refactored as systemd services. In modern environments, use systemd with Restart=on-failure and RestartSec=5 instead. Understanding watchdog scripts teaches you exactly what systemd does internally — making you better at configuring systemd services when you encounter them.",
    funFact:
      "Modern Linux systems use systemd which has built-in process monitoring (Restart=on-failure, RestartSec=5). Arjun's watchdog script essentially reimplements what systemd already does. In production, converting your app to a proper systemd service is always better than a watchdog script — but understanding watchdogs teaches you what systemd does internally.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun uses 'pgrep -f \"my-java-app\"' in his watchdog script. What does the -f flag do?",
      options: [
        "It searches for the process by file path instead of name",
        "It matches the pattern against the full command line, not just the process name",
        "It forces pgrep to run as root",
        "It shows the full process details",
      ],
      correctAnswer:
        "It matches the pattern against the full command line, not just the process name",
      explanation:
        "By default, pgrep matches only against the process name (limited to 15 characters on some systems). The -f flag makes pgrep match against the complete command line including arguments. This is essential for Java apps where the process is always named 'java' but the specific .jar file distinguishes which app is running.",
    },
  },

  // ── Lesson 29 ──────────────────────────────────────────────────────────────
  {
    title: "Automated Backup Scripts",
    content:
      "Arjun's company loses a critical MySQL database on a Friday afternoon \u2014 no recent backup exists. The data loss costs the company three days of business. After this incident, Arjun is tasked with building an automated backup system that runs nightly, retains 7 days of daily backups, and stores compressed archives remotely.\n\n#!/usr/bin/env bash\nset -euo pipefail\n\nDB_HOST='localhost'\nDB_USER='backup_user'\nDB_PASS='secret'\nDB_NAME='production_db'\nBACKUP_DIR='/backups/mysql'\nREMOTE_BUCKET='s3://company-backups/mysql'\nDAYS_RETAIN=7\nDATE=$(date +%Y%m%d_%H%M%S)\nBACKUP_FILE=\"${BACKUP_DIR}/${DB_NAME}_${DATE}.sql.gz\"\n\nmkdir -p $BACKUP_DIR\n\necho 'Starting database backup...'\nmysqldump -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME | gzip > $BACKUP_FILE\necho \"Backup created: $BACKUP_FILE ($(du -sh $BACKUP_FILE | cut -f1))\"\n\n# Verify backup is non-empty\nif [ ! -s $BACKUP_FILE ]; then\n  echo 'ERROR: Backup file is empty!' >&2\n  exit 1\nfi\n\n# Upload to S3\naws s3 cp $BACKUP_FILE $REMOTE_BUCKET/\necho 'Backup uploaded to S3'\n\n# Delete local backups older than DAYS_RETAIN days\nfind $BACKUP_DIR -name '*.sql.gz' -mtime +$DAYS_RETAIN -delete\necho \"Cleaned up backups older than $DAYS_RETAIN days\"\n\necho 'Backup complete!'",
    funFact:
      "The 3-2-1 backup rule is the industry standard: keep 3 copies of your data, on 2 different media types, with 1 copy off-site. Arjun's script follows this: local disk (copy 1) and AWS S3 (copy 2, off-site). Adding one more local storage device would complete the 3-2-1 strategy.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's backup script uses '[ ! -s $BACKUP_FILE ]' to validate the backup. What does the -s flag check?",
      options: [
        "That the file exists and is a symbolic link",
        "That the file exists and has a size greater than zero (non-empty)",
        "That the file is a valid SQL file",
        "That the file was successfully uploaded",
      ],
      correctAnswer:
        "That the file exists and has a size greater than zero (non-empty)",
      explanation:
        "The -s flag in test/[ ] checks that the file exists AND has a size greater than 0 (non-empty). So [ ! -s $BACKUP_FILE ] is true when the file is empty or doesn't exist — meaning the backup failed. This is a critical validation: mysqldump can succeed with exit code 0 but produce an empty file if the connection drops mid-dump.",
    },
  },

  // ── Lesson 30 ──────────────────────────────────────────────────────────────
  {
    title: "Shell Capstone: Automated Server Setup Script",
    content:
      "Arjun's company is launching a new product and needs to set up 10 identical application servers \u2014 each needs Node.js, Nginx, MySQL client, the app user created, firewall rules configured, and the application deployed. Doing this manually would take 4 hours per server. Arjun writes the ultimate capstone script: server_setup.sh \u2014 a complete automated server provisioner.\n\n#!/usr/bin/env bash\nset -euo pipefail\ntrap 'echo \"ERROR at line $LINENO. Exit code: $?\"' ERR\n\n# \u2500\u2500 Configuration \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nAPP_USER='appuser'\nAPP_DIR='/opt/myapp'\nNODE_VERSION='20'\nDOMAIN=${1:-'app.company.com'}\nLOG='/var/log/server_setup.log'\n\nlog() { echo \"[$(date +%H:%M:%S)] $*\" | tee -a $LOG; }\nrequire_root() { [ \"$(id -u)\" -eq 0 ] || { log 'Must run as root'; exit 1; }; }\n\nrequire_root\nlog '=== Server Setup Starting ==='\n\n# \u2500\u2500 System Update \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlog 'Updating system packages...'\napt-get update -qq && apt-get upgrade -y -qq\n\n# \u2500\u2500 Install Dependencies \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlog 'Installing Nginx, curl, git, ufw...'\napt-get install -y -qq nginx curl git ufw mysql-client\n\n# \u2500\u2500 Install Node.js \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlog \"Installing Node.js $NODE_VERSION...\"\ncurl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -\napt-get install -y -qq nodejs\nlog \"Node version: $(node --version)\"\n\n# \u2500\u2500 Create App User \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlog \"Creating user $APP_USER...\"\nid $APP_USER &>/dev/null || useradd -m -s /bin/bash $APP_USER\nmkdir -p $APP_DIR && chown $APP_USER:$APP_USER $APP_DIR\n\n# \u2500\u2500 Firewall Setup \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlog 'Configuring firewall...'\nufw --force reset\nufw default deny incoming\nufw default allow outgoing\nufw allow ssh\nufw allow 'Nginx Full'\nufw --force enable\n\nlog '=== Server Setup Complete ==='",
    funFact:
      "Netflix's Chaos Engineering team regularly runs automated scripts that intentionally break production servers to test resilience. Their 'Chaos Monkey' script randomly terminates production instances to ensure the system can handle failures. It's an automated shell script that makes engineers sleep better by breaking things on purpose.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's capstone script has 'trap \"echo ERROR at line $LINENO. Exit code: $?\" ERR' at the top. What does this accomplish?",
      options: [
        "It catches keyboard interrupts (Ctrl+C) and prints an error",
        "It runs the echo command whenever any command fails, showing exactly which line caused the error",
        "It prevents the script from running if there are syntax errors",
        "It logs all commands to a debug file",
      ],
      correctAnswer:
        "It runs the echo command whenever any command fails, showing exactly which line caused the error",
      explanation:
        "The trap command sets a handler for signals. 'trap COMMAND ERR' runs COMMAND whenever any command exits with a non-zero status (error). $LINENO is a special Bash variable that contains the current line number. Combined with set -e (exit on error), this pattern tells you exactly where your script failed — invaluable for debugging production issues at 3 AM.",
    },
  },
];
