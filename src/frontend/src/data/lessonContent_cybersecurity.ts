// Cybersecurity module — 35 scenario-based lessons
// Character: Sneha (security analyst at TechCorp MNC)
import type { LessonContent } from "@/types";

export const CYBERSECURITY_LESSONS: LessonContent[] = [
  // ─── LESSON 1 ─────────────────────────────────────────────────────────────
  {
    title: "What is Cybersecurity? Protecting the Digital World",
    content:
      "Sneha joined TechCorp as a security analyst on her first day and was handed a laptop with one instruction: 'Keep us safe.' But safe from what, exactly? Cybersecurity is the practice of protecting computers, networks, programs, and data from digital attacks, damage, or unauthorized access. Every time you log into your bank app, send an email, or even turn on your laptop, cybersecurity is working silently in the background.\n\nImagine TechCorp's entire business — client contracts, employee salaries, source code — stored digitally. Without cybersecurity, a single attacker could steal all of it in minutes. Sneha's job is like being a guard at a bank vault, except the vault has thousands of doors and new ones appear every day.\n\nCybersecurity covers three main areas: protecting infrastructure (servers, networks), protecting applications (software, APIs), and protecting data (databases, files). It also includes educating employees, because the biggest vulnerability is often a person clicking a suspicious email link. Sneha quickly learned that security is not a product you buy — it's a continuous process you practice every single day.",
    funFact:
      "Cybercrime costs the world over $8 trillion per year — that's more than the GDP of Japan. If cybercrime were a country, it would be the world's third-largest economy.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha's manager says 'Security is a process, not a product.' What does this mean?",
      options: [
        "You just need to buy antivirus software once and you are safe forever",
        "Security requires ongoing practices, monitoring, and improvement — not a one-time purchase",
        "Only expensive hardware can protect a company",
        "Security is only the IT team's responsibility",
      ],
      correctAnswer:
        "Security requires ongoing practices, monitoring, and improvement — not a one-time purchase",
      explanation:
        "Threats evolve constantly. A firewall bought in 2020 won't stop a 2025 attack without updates, patching, and monitoring. Security is a living practice — it requires continuous effort from every team member.",
    },
  },

  // ─── LESSON 2 ─────────────────────────────────────────────────────────────
  {
    title: "The CIA Triad: Confidentiality, Integrity, Availability",
    content:
      "On her second day, Sneha's manager drew three letters on a whiteboard: C, I, A. Not the spy agency — the foundation of everything in cybersecurity. The CIA Triad is the core model that guides all security decisions. Confidentiality means only authorized people can see sensitive data. Integrity means data must not be altered without authorization. Availability means systems must be accessible when needed.\n\nHere is how Sneha applies the CIA Triad at TechCorp: A customer database must be Confidential (only HR and CRM team can access it), Integrity-protected (no one can silently change a salary record), and Available (payroll must run on time — a crashed system on payday is catastrophic). If any one of these three breaks down, TechCorp has a security incident.\n\nReal-world trade-offs exist. Maximum confidentiality (encrypt everything, no access to anyone) kills availability. Maximum availability (everyone accesses everything instantly) destroys confidentiality. Sneha's job is to find the right balance. For example, employee records need high confidentiality and integrity; the company's public website needs high availability but lower confidentiality. Every security decision is measured against these three pillars.",
    funFact:
      "The CIA Triad was formally described in the 1970s and is still the foundational model used by CISSP, ISO 27001, and NIST frameworks today. Some modern frameworks add a fourth pillar: Non-repudiation (you cannot deny you performed an action).",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A hacker breaks into TechCorp's database and changes Rahul's salary from ₹50,000 to ₹5,000 without anyone noticing. Which CIA pillar has been violated?",
      options: ["Confidentiality", "Integrity", "Availability", "All three"],
      correctAnswer: "Integrity",
      explanation:
        "Integrity means data cannot be modified without authorization. The hacker altered data silently — this is a classic integrity violation. Confidentiality would be violated if they read the data; Availability if they deleted or blocked access.",
    },
  },

  // ─── LESSON 3 ─────────────────────────────────────────────────────────────
  {
    title: "Types of Cyber Threats: Know Your Enemy",
    content:
      "Sneha spent her first week studying an 'Adversary Playbook' — a catalog of the threats TechCorp faces daily. There are six major categories of cyber threats every security analyst must know cold. Malware includes viruses, worms, ransomware, and trojans — malicious software designed to damage, steal, or hold data hostage. Phishing is the #1 attack method: fake emails designed to trick users into clicking malicious links or revealing passwords.\n\nSocial Engineering manipulates people psychologically — a caller pretending to be IT support to get Sneha's login credentials. Man-in-the-Middle (MitM) attacks intercept communication between two parties, like eavesdropping on a Wi-Fi network. Denial of Service (DoS/DDoS) floods a server with traffic until it crashes — effectively making TechCorp's website unavailable. Finally, Insider Threats come from employees, contractors, or ex-employees who misuse their access intentionally or accidentally.\n\nSneha's first real incident: a junior developer received an email saying 'Your GitHub account will be deleted — click here to verify.' He almost clicked. Sneha caught it — a perfect phishing attempt. The email came from 'support@gith-ub.com' — note the hyphen. One small detail, potentially catastrophic consequences. Knowing your threats in detail is the first step to stopping them.",
    funFact:
      "91% of all cyberattacks begin with a phishing email. Training employees to recognize phishing is statistically the single highest-impact security investment a company can make.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "An attacker calls TechCorp's help desk pretending to be Arjun, a senior developer, and convinces them to reset his password. What type of attack is this?",
      options: ["Malware", "DDoS", "Social Engineering", "SQL Injection"],
      correctAnswer: "Social Engineering",
      explanation:
        "Social engineering exploits human trust rather than technical vulnerabilities. The attacker used manipulation (pretending to be Arjun) to gain unauthorized access. This is why identity verification protocols during help desk calls are critical.",
    },
  },

  // ─── LESSON 4 ─────────────────────────────────────────────────────────────
  {
    title: "Attack Vectors: How Hackers Get In",
    content:
      "An attack vector is the path or method an attacker uses to reach their target. Sneha maps out TechCorp's attack surface — every possible entry point a hacker could exploit. The results are eye-opening: 14 public-facing web applications, 3 email servers, 200+ employee laptops, 60 mobile devices, 3 cloud environments, and 2 third-party vendors with network access.\n\nCommon attack vectors include: Email attachments (ransomware hidden in a 'invoice.pdf'), Unpatched software (a known CVE in an old version of Apache), Weak credentials (admin/admin on an internal dashboard), Removable media (a USB drive dropped in the parking lot, which a curious employee plugs in), Supply chain attacks (a compromise in a third-party library used in TechCorp's app), and Remote Desktop Protocol (RDP) exposed to the internet.\n\nSneha runs a monthly 'Attack Surface Reduction' exercise. Every system exposed to the internet gets reviewed: Is this port really needed? Can this service be moved behind VPN? Can this old API endpoint be retired? By reducing the attack surface — the total number of entry points — she makes the attacker's job exponentially harder. A door you close is a door they cannot walk through.",
    funFact:
      "The infamous SolarWinds hack (2020) compromised 18,000 organizations including the US government by injecting malicious code into a software update — a supply chain attack. The attackers were inside systems for 9 months before anyone noticed.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "The total number of points where an unauthorized user could enter or extract data from a system is called the ________ surface.",
      correctAnswer: "attack",
      explanation:
        "Attack surface refers to the sum of all entry points an attacker can exploit. Reducing the attack surface — closing unused ports, retiring old services, patching software — is a fundamental defensive strategy.",
    },
  },

  // ─── LESSON 5 ─────────────────────────────────────────────────────────────
  {
    title: "The Hacker Mindset: Thinking Like an Attacker to Defend Better",
    content:
      "Sneha's manager told her something she never forgot: 'You cannot defend what you have not tried to break.' This is the core of ethical hacking — the practice of using attacker techniques, with permission, to find vulnerabilities before real attackers do. The hacker mindset is about asking 'What if?' relentlessly. What if I supply a 10,000-character username? What if I send a negative quantity in a purchase order? What if I modify the JWT token in my browser?\n\nHackers are categorized by intent: White Hat (ethical hackers — Sneha's team), Black Hat (malicious attackers), and Grey Hat (somewhere in between — they find vulnerabilities but may not always report them properly). Bug bounty programs pay white hats to find vulnerabilities — Google pays up to $31,337 for a single Chrome bug.\n\nTo think like an attacker, Sneha follows a mental checklist: What is the target? What information can I gather (reconnaissance)? What is the weakest link — the human, the software, the network? How can I get in without triggering alerts? How do I maintain access once in? Understanding these stages (the 'Kill Chain') lets defenders build countermeasures at every step. If you can model the attacker's playbook, you can interrupt it at multiple points.",
    funFact:
      "Kevin Mitnick, once the most wanted hacker in the US, served 5 years in prison — then became one of the world's highest-paid cybersecurity consultants. He famously said 'The human element is truly security's weakest link.'",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha submits a form with the username field filled with 5,000 special characters to test if the app crashes. What technique is she using?",
      options: [
        "Social Engineering",
        "Fuzzing / Boundary Testing",
        "Port Scanning",
        "SQL Injection",
      ],
      correctAnswer: "Fuzzing / Boundary Testing",
      explanation:
        "Fuzzing involves sending unexpected, random, or oversized inputs to find crashes and vulnerabilities. Attackers use it to discover buffer overflows and input validation failures. Defenders test their own apps with fuzzing to find and fix these before attackers do.",
    },
  },

  // ─── LESSON 6 ─────────────────────────────────────────────────────────────
  {
    title: "Firewalls: Your Network's Bouncer",
    content:
      "TechCorp's network processes thousands of connections every second — employees, customers, cloud services, monitoring tools. Sneha's first hardware responsibility was configuring the company's next-generation firewall (NGFW). A firewall is a network security device (hardware or software) that monitors and controls incoming and outgoing traffic based on predefined security rules — like a nightclub bouncer checking IDs at the door.\n\nFirewalls work by inspecting packets — the small chunks of data that travel across networks. A basic packet filter checks source IP, destination IP, and port. For example: Block all traffic from country X. Allow port 443 (HTTPS) from anywhere. Block port 22 (SSH) unless from the office VPN. Modern NGFWs go further — they do Deep Packet Inspection (DPI), examining the actual content of packets, not just their headers. They can detect malware signatures, block specific applications, and identify protocol anomalies.\n\nSneha's rule: Default Deny. The firewall denies all traffic by default, and only explicitly permitted traffic is allowed through. This 'whitelist' approach is far safer than 'blacklist' (blocking only known bad traffic, which misses everything unknown). She configures rules for: internal dev servers to reach GitHub, customer portal to reach the database on specific port, and absolutely no direct internet access to the production database server.",
    funFact:
      "The concept of a firewall in computing comes directly from the physical world — fire-resistant walls in buildings that prevent fire from spreading. The term was first used in network security in the late 1980s.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp's firewall is set to 'default deny.' A new microservice needs to call an external payment API on port 443. What must Sneha do?",
      options: [
        "Disable the firewall temporarily",
        "Add a specific allow rule for the microservice's IP to reach the payment API on port 443",
        "Change the firewall to default allow",
        "Nothing — port 443 is always open",
      ],
      correctAnswer:
        "Add a specific allow rule for the microservice's IP to reach the payment API on port 443",
      explanation:
        "Default deny means nothing passes unless explicitly permitted. Sneha must add a precise allow rule: source = microservice IP, destination = payment API IP, port = 443. This grants least-privilege access — only what is needed, nothing more.",
    },
  },

  // ─── LESSON 7 ─────────────────────────────────────────────────────────────
  {
    title: "VPNs: Securing Communication Over Public Networks",
    content:
      "TechCorp went fully remote during a project crunch. Developers like Priya were connecting to internal systems from home, coffee shops, and airport lounges. Sneha immediately set up a company VPN — Virtual Private Network — to protect every connection. A VPN creates an encrypted tunnel between a user's device and the company's network. All traffic passes through this tunnel, invisible to anyone sniffing the coffee shop Wi-Fi.\n\nHere is how it works technically: Priya's laptop connects to TechCorp's VPN server. The VPN client encrypts all her outgoing traffic, wraps it inside VPN packets (encapsulation), and sends it to the VPN server. The server decrypts the outer layer and routes the original traffic to its destination — the internal Jenkins server, for example. From the outside world, Priya's traffic looks like one encrypted connection to TechCorp's VPN server. Her real requests are completely hidden.\n\nCommon VPN protocols include: OpenVPN (open-source, very secure, used in corporate settings), WireGuard (modern, extremely fast, simpler code base), and IPSec (used heavily in site-to-site VPNs connecting two office networks). Sneha also explains the difference: Site-to-Site VPNs connect two office networks permanently; Remote Access VPNs let individuals like Priya connect from anywhere. One important caveat — a VPN is not a privacy magic wand. It trusts your VPN provider (or your company), so choosing the right VPN matters enormously.",
    funFact:
      "WireGuard VPN protocol has only 4,000 lines of code compared to OpenVPN's 70,000+. The smaller codebase means fewer potential vulnerabilities and dramatically faster auditing. It is now built directly into the Linux kernel.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya is working from a coffee shop and connects to TechCorp's VPN before accessing internal systems. What does the VPN primarily protect against?",
      options: [
        "Malware on Priya's laptop",
        "Eavesdropping on the coffee shop's Wi-Fi network",
        "Phishing emails sent to Priya",
        "DDoS attacks on TechCorp's servers",
      ],
      correctAnswer: "Eavesdropping on the coffee shop's Wi-Fi network",
      explanation:
        "A VPN encrypts traffic between Priya's device and TechCorp's network. Anyone intercepting packets on the coffee shop Wi-Fi sees only encrypted gibberish. Without VPN, all her HTTP traffic and even some HTTPS metadata would be visible to anyone on the same Wi-Fi.",
    },
  },

  // ─── LESSON 8 ─────────────────────────────────────────────────────────────
  {
    title: "Intrusion Detection Systems (IDS/IPS)",
    content:
      "Firewalls are great at blocking known bad traffic at the perimeter, but what about attacks that come through allowed channels? What if malware is already inside the network? Sneha deployed an IDS — Intrusion Detection System — to watch traffic inside TechCorp's network for suspicious patterns. Unlike a firewall (which blocks at the gate), an IDS is like CCTV cameras throughout the building.\n\nThere are two types: Network-based IDS (NIDS) monitors all network traffic; Host-based IDS (HIDS) monitors a specific computer's activity — system calls, file changes, login attempts. IDS systems detect threats in two ways: Signature-based detection (comparing traffic against a database of known attack patterns — fast but misses new attacks) and Anomaly-based detection (learning what 'normal' looks like and flagging deviations — catches new attacks but can produce false positives).\n\nIPS (Intrusion Prevention System) is the active version — it does not just alert, it automatically blocks the suspicious traffic. Sneha configures TechCorp's IPS to: Block any IP that tries more than 5 failed SSH logins in 10 seconds (brute force detection), alert when a server starts sending data to an unknown external IP (possible data exfiltration), and block traffic matching known ransomware communication patterns. The key metric is balancing sensitivity — too sensitive and legitimate traffic gets blocked; too lenient and real attacks slip through.",
    funFact:
      "Modern AI-powered IDS systems can detect zero-day attacks by recognizing behavioral patterns that deviate from normal, even when the attack signature has never been seen before. Darktrace, a UK cybersecurity company, calls this 'autonomous response.'",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp's IDS alerts Sneha that an internal server is sending 2GB of data to an unknown IP in Eastern Europe at 3 AM. What type of attack does this suggest?",
      options: [
        "DDoS attack against TechCorp",
        "Possible data exfiltration — malware sending stolen data to attacker's server",
        "A firewall misconfiguration",
        "Normal backup procedure",
      ],
      correctAnswer:
        "Possible data exfiltration — malware sending stolen data to attacker's server",
      explanation:
        "Large data transfers to unknown external IPs at odd hours are a classic sign of data exfiltration — malware (or a compromised insider) extracting sensitive data to an attacker-controlled server. The IDS catches the anomaly; Sneha must investigate immediately.",
    },
  },

  // ─── LESSON 9 ─────────────────────────────────────────────────────────────
  {
    title: "Network Scanning with Nmap",
    content:
      "Sneha's first tool of trade as a security analyst: Nmap (Network Mapper). It is the Swiss Army knife of network reconnaissance — used by both attackers to find targets and defenders to audit their own networks. Before you can secure a network, you must know what is on it. Nmap lets Sneha discover every device, open port, running service, and operating system on TechCorp's network.\n\nBasic Nmap commands Sneha uses daily:\n<pre><code># Discover all live hosts on a network\nnmap -sn 192.168.1.0/24\n\n# Scan open ports on a single host\nnmap 192.168.1.105\n\n# Detailed scan: OS detection, version detection, scripts\nnmap -A -T4 192.168.1.105\n\n# Scan specific ports\nnmap -p 22,80,443,3306 192.168.1.105\n\n# Stealth SYN scan (less noisy)\nnmap -sS 192.168.1.105</code></pre>\n\nSneha's regular audit revealed a shocking find: an old Windows Server 2008 machine running SQL Server 2005 — both unsupported and riddled with known vulnerabilities — had been sitting quietly on the network for years, forgotten after a project was cancelled. Without Nmap, it would have remained a ticking time bomb. She scheduled immediate decommissioning. This is why regular network scanning is not optional — it is essential hygiene.",
    funFact:
      "Nmap has appeared in over 30 movies and TV shows including The Matrix Reloaded, Bourne Ultimatum, and Mr. Robot. In The Matrix, Trinity uses a real version of Nmap to actually hack a power grid — the filmmakers consulted with real security experts.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Sneha wants to discover all live hosts on the 10.0.0.0/24 network without scanning ports. She uses: nmap ________ 10.0.0.0/24",
      correctAnswer: "-sn",
      explanation:
        "The -sn flag (ping scan / no port scan) tells Nmap to only discover live hosts without scanning ports. It is faster and less intrusive — perfect for a quick inventory of what is on the network.",
    },
  },

  // ─── LESSON 10 ────────────────────────────────────────────────────────────
  {
    title: "Wireshark: Analyzing Network Traffic",
    content:
      "Sneha received an alert: a developer's laptop is generating unusual network traffic. She fires up Wireshark — the world's most popular network protocol analyzer — to capture and examine every packet flowing to and from that machine. Wireshark shows the raw reality of network communication: every HTTP request, DNS lookup, TCP handshake, and data transfer, broken down to individual bytes.\n\nWireshark's display filters are Sneha's superpower:\n<pre><code>// Filter only HTTP traffic\nhttp\n\n// Filter traffic to/from a specific IP\nip.addr == 192.168.1.50\n\n// Filter all DNS queries\ndns\n\n// Show only failed TCP connections (RST packets)\ntcp.flags.reset == 1\n\n// Follow a TCP stream - reassemble full conversation\n// Right-click a packet > Follow > TCP Stream</code></pre>\n\nWhat Sneha found: the developer's laptop was making repeated DNS lookups for a domain that matched a known Command and Control (C2) server pattern — a sign of malware 'phoning home.' The malware was encoded in a macro inside a Word document the developer had opened from a client email. Wireshark caught what the antivirus missed because the malware used legitimate-looking traffic patterns. The developer's machine was immediately isolated and reimaged. Lesson: packet-level visibility reveals what high-level logs often miss.",
    funFact:
      "Gerald Combs created Wireshark (originally called Ethereal) in 1998 while working at an internet service provider. He needed a cheap network analyzer and could not afford commercial tools. Today it has millions of users and is the industry standard for network forensics.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha wants to see only DNS traffic in Wireshark to investigate suspicious domain lookups. Which display filter should she use?",
      options: ["ip.dns == 1", "dns", "tcp.port == 53", "filter.dns.query"],
      correctAnswer: "dns",
      explanation:
        "The display filter 'dns' shows only DNS protocol packets in Wireshark. Note: tcp.port == 53 would technically capture DNS-over-TCP but misses the more common DNS-over-UDP. The simple 'dns' filter catches both and is the standard approach.",
    },
  },

  // ─── LESSON 11 ────────────────────────────────────────────────────────────
  {
    title: "The OWASP Top 10: Most Common Web Vulnerabilities",
    content:
      "TechCorp launched a new customer portal last quarter. Within two weeks, Sneha was handed a penetration test report listing 6 vulnerabilities — 4 of which were on the OWASP Top 10. OWASP (Open Web Application Security Project) publishes a list of the 10 most critical web application security risks, updated every few years based on real attack data from across the industry. Every web developer and security analyst must know this list cold.\n\nThe OWASP Top 10 (2021 edition) covers: Broken Access Control (users accessing data they should not), Cryptographic Failures (sensitive data not encrypted), Injection (SQL, command injection), Insecure Design (security not considered during architecture), Security Misconfiguration (default credentials left on, verbose error messages), Vulnerable and Outdated Components (old libraries with known CVEs), Identification and Authentication Failures (weak session management), Software and Data Integrity Failures (untrusted updates/plugins), Security Logging and Monitoring Failures, and Server-Side Request Forgery (SSRF).\n\nSneha's response was to create a 'OWASP Checklist' for every new feature at TechCorp. Before any code goes to production, the developer self-certifies against every OWASP category. It is not foolproof, but it has caught 12 vulnerabilities before deployment in six months. The OWASP Top 10 is the starting point for any secure application development program.",
    funFact:
      "Broken Access Control jumped from position #5 in OWASP 2017 to position #1 in 2021, appearing in 94% of tested applications. It is the most widespread vulnerability because access control logic is often added as an afterthought rather than designed upfront.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A TechCorp developer hard-codes AWS credentials directly in the source code and pushes it to a public GitHub repo. Which OWASP Top 10 category does this fall under?",
      options: [
        "Injection",
        "Cryptographic Failures",
        "Security Misconfiguration",
        "Broken Access Control",
      ],
      correctAnswer: "Cryptographic Failures",
      explanation:
        "Cryptographic Failures (formerly 'Sensitive Data Exposure') covers cases where sensitive data — including credentials, API keys, and tokens — is exposed without adequate protection. Credentials in plaintext in source code is a textbook cryptographic/data exposure failure. This happens more often than you would think.",
    },
  },

  // ─── LESSON 12 ────────────────────────────────────────────────────────────
  {
    title: "SQL Injection: The Most Dangerous Web Attack",
    content:
      "Sneha was reviewing TechCorp's login page when she tried something simple in the username field: ' OR '1'='1. The application immediately logged her in as the first user in the database — no password required. This is SQL Injection — one of the oldest and most devastating web vulnerabilities, still in the OWASP Top 10 after 20+ years.\n\nHere is why it happens. The application was building the SQL query by concatenating user input directly:\n<pre><code>-- Vulnerable query (DO NOT USE)\nSELECT * FROM users \nWHERE username = '[INPUT]' AND password = '[INPUT]';\n\n-- What happens with input: ' OR '1'='1\nSELECT * FROM users \nWHERE username = '' OR '1'='1' AND password = '';\n-- '1'='1' is always true -- returns ALL users\n\n-- The fix: Parameterized Queries (Prepared Statements)\n-- Python example\ncursor.execute(\n  \"SELECT * FROM users WHERE username = %s AND password = %s\",\n  (username, password)  -- input is treated as DATA, never as SQL code\n)</code></pre>\n\nSneha found three other SQL injection points in TechCorp's portal: the search field, the product filter, and the profile update form. Each one could have allowed an attacker to dump the entire database, delete all records, or bypass authentication. She immediately filed a P0 (critical priority) bug, halted the portal, and supervised the fix personally. Prevention is non-negotiable: always use parameterized queries, never concatenate user input into SQL.",
    funFact:
      "The Heartland Payment Systems breach (2008) exposed 130 million credit card numbers through SQL injection. It was, at the time, the largest criminal breach of credit card data in history. The attacker was sentenced to 20 years in federal prison.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What is the most effective technical defense against SQL Injection attacks?",
      options: [
        "Blocking special characters like quotes using a blacklist",
        "Using parameterized queries (prepared statements)",
        "Adding CAPTCHA to the login page",
        "Encrypting the database",
      ],
      correctAnswer: "Using parameterized queries (prepared statements)",
      explanation:
        "Parameterized queries separate SQL code from user data. The database treats user input purely as a value, never as executable SQL. Character blacklists can be bypassed with encoding tricks. Parameterized queries are the definitive fix.",
    },
  },

  // ─── LESSON 13 ────────────────────────────────────────────────────────────
  {
    title: "Cross-Site Scripting (XSS): Injecting Malicious Scripts",
    content:
      "TechCorp's support portal allowed agents to post comments on tickets. Sneha tested it by posting this in the comment field: <pre><code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code></pre> An alert box popped up in the browser. This is Cross-Site Scripting (XSS) — a vulnerability where an attacker injects malicious JavaScript into a web page that other users then execute in their browsers.\n\nThere are three types of XSS: Reflected XSS — the malicious script is in a URL parameter, executed when the victim clicks the link; Stored XSS (the more dangerous type Sneha found) — the script is saved in the database and executes for every user who views the page; and DOM-based XSS — the attack occurs entirely in the browser via JavaScript manipulation.\n\nWhat can an attacker do with XSS? Steal session cookies (log in as the victim), redirect users to phishing sites, capture keystrokes, take screenshots, and even install browser-based malware. The fix is Output Encoding — before displaying user-supplied content on a page, convert special HTML characters to their safe equivalents:\n<pre><code>// Vulnerable (DO NOT USE)\ndiv.innerHTML = userInput;\n\n// Safe - encode output\ndiv.textContent = userInput; // browser treats as text, not HTML\n\n// In templates, use framework escaping:\n// React: JSX escapes by default - {userInput} is safe\n// Django: {{ value }} is auto-escaped\n// Never use: dangerouslySetInnerHTML or |safe unless you know exactly what you are doing</code></pre>",
    funFact:
      "The largest XSS attack in history was the Samy worm in 2005 — a MySpace XSS that spread to one million profiles in under 20 hours, making it the fastest-spreading virus of all time. Samy Kamkar was sentenced to 3 years probation and 720 hours of community service.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha finds that a support ticket comment with a malicious script executes for every agent who opens the ticket. What type of XSS is this?",
      options: ["Reflected XSS", "Stored XSS", "DOM-based XSS", "CSRF"],
      correctAnswer: "Stored XSS",
      explanation:
        "Stored XSS (also called Persistent XSS) saves the malicious script in the server's database. Every user who views the affected page executes the script. This is the most dangerous type because it does not require victims to click a crafted link.",
    },
  },

  // ─── LESSON 14 ────────────────────────────────────────────────────────────
  {
    title: "CSRF: Tricking Users into Malicious Actions",
    content:
      "Sneha discovered a subtle but dangerous vulnerability in TechCorp's admin panel: the password change form had no CSRF protection. Cross-Site Request Forgery (CSRF) is an attack that tricks a logged-in user into unknowingly submitting a malicious request. Here is the scenario: Arjun is logged into TechCorp's admin panel in Tab 1. An attacker sends him a link to a 'funny meme' website. When Arjun opens it, the site silently sends a request to TechCorp's admin panel to change Arjun's password — using Arjun's active session cookies.\n\nHere is the malicious HTML hidden on the attacker's website:\n<pre><code>&lt;!-- Hidden on attacker's site, executes when Arjun visits --&gt;\n&lt;form action=\"https://techcorp.com/admin/change-password\" \n      method=\"POST\" id=\"csrf-form\"&gt;\n  &lt;input name=\"new_password\" value=\"hacker123\" /&gt;\n&lt;/form&gt;\n&lt;script&gt;document.getElementById('csrf-form').submit();&lt;/script&gt;</code></pre>\n\nThe defense is a CSRF Token — a unique, unpredictable value generated per session and embedded in every form. The server rejects any request that does not include the valid token. Since the attacker's site cannot read TechCorp's cookies (same-origin policy), it cannot forge the token. Modern frameworks like Django, Rails, and Spring include CSRF protection by default. Sneha's lesson: never trust a request just because it comes with valid session cookies — always verify intent with CSRF tokens.",
    funFact:
      "Netflix had a CSRF vulnerability in 2006 that would have allowed attackers to change a victim's email and mailing address — meaning an attacker could change where Netflix DVDs were delivered (back when Netflix was a DVD service). One click on a malicious link and your DVDs start going to a stranger.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question: "What is the primary defense mechanism against CSRF attacks?",
      options: [
        "Using HTTPS instead of HTTP",
        "Requiring users to re-enter their password for every action",
        "Including a unique CSRF token in every state-changing form or request",
        "Blocking third-party cookies in the browser",
      ],
      correctAnswer:
        "Including a unique CSRF token in every state-changing form or request",
      explanation:
        "A CSRF token is a random, session-specific value the server generates and embeds in forms. The server validates the token on submission. Since an attacker's site cannot read the victim's tokens (cross-origin restriction), forged requests get rejected.",
    },
  },

  // ─── LESSON 15 ────────────────────────────────────────────────────────────
  {
    title: "HTTPS and TLS: Encrypting Web Communication",
    content:
      "Sneha noticed TechCorp's internal HR portal was still running on HTTP. She immediately escalated this as a critical issue. HTTP transmits everything in plaintext — usernames, passwords, session cookies — readable by anyone on the same network. HTTPS (HTTP Secure) wraps HTTP inside TLS (Transport Layer Security), encrypting all communication between the browser and server.\n\nHow TLS works (simplified TLS 1.3 handshake):\n<pre><code>1. Client Hello  -- Browser sends: \"I support TLS 1.3, here are my cipher suites\"\n2. Server Hello  -- Server picks cipher, sends its digital certificate\n3. Certificate Verification -- Browser verifies cert is signed by a trusted CA\n4. Key Exchange  -- Browser and server derive a shared session key (using ECDHE)\n   -- No actual key is transmitted over the wire!\n5. Encrypted Communication -- All further traffic encrypted with session key\n\n// Result: Even if someone captures ALL packets, they see only encrypted gibberish\n// TLS 1.3 reduced handshake from 2 round-trips to 1 -- significantly faster</code></pre>\n\nSneha set up SSL certificates using Let's Encrypt (free, auto-renewing) for all internal services. She also implemented HSTS (HTTP Strict Transport Security) — a header telling browsers to ONLY connect via HTTPS for the next year, preventing downgrade attacks. One more thing she checked: all TLS certificates used SHA-256 or better (not the deprecated SHA-1), and TLS 1.0/1.1 were disabled. Old TLS versions have known vulnerabilities; only TLS 1.2 and 1.3 are considered secure.",
    funFact:
      "Let's Encrypt, the free SSL certificate authority, issued its billionth certificate in 2020. Before it existed (2015), getting an SSL certificate cost hundreds of dollars per year and required manual renewal. Let's Encrypt made HTTPS adoption skyrocket from 39% to over 85% of web traffic.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp's HR portal runs on HTTP. Priya logs in from the office network. What can someone with Wireshark on the same network see?",
      options: [
        "Nothing — the browser encrypts data automatically",
        "Priya's username and password in plaintext",
        "Only the URL, not the login credentials",
        "Encrypted packets that cannot be read",
      ],
      correctAnswer: "Priya's username and password in plaintext",
      explanation:
        "HTTP sends all data unencrypted. Anyone on the same network using a packet sniffer like Wireshark can see login credentials, session cookies, and all submitted data in plaintext. HTTPS/TLS encrypts this data so intercepted packets are unreadable.",
    },
  },

  // ─── LESSON 16 ────────────────────────────────────────────────────────────
  {
    title: "Password Security: Why 'Password123' is Terrible",
    content:
      "After an audit, Sneha's team found that 23% of TechCorp employees used passwords from the top 1000 most common passwords list. 'Password123', 'Techcorp@1', 'Welcome2024' — all cracked in under a second by automated tools. This is not a people problem; it is a policy problem. Sneha redesigned TechCorp's password policy from scratch based on NIST's 2024 guidelines.\n\nKey password security principles:\n<pre><code>NIST SP 800-63B Guidelines (2024):\n-- Minimum 8 characters; encourage 15+ for high-value accounts\n-- Check against breached password databases (Have I Been Pwned API)\n-- Do NOT require periodic password changes (promotes weak patterns like 'Summer2024!')\n-- DO require change if breach is detected\n-- Allow spaces and all printable characters\n-- Do NOT use complexity rules like 'must have uppercase+number+symbol'\n   (these lead to predictable patterns and only marginally improve entropy)\n\nPassword Entropy:\n-- 'abcd1234' = ~26 bits of entropy (crackable in seconds)\n-- 'correct horse battery staple' = ~44 bits (passphrase, much stronger)\n-- Random 20-char password = ~131 bits (practically uncrackable)</code></pre>\n\nSneha also deployed a Password Manager policy — all developers must use 1Password or Bitwarden, and must use unique, randomly generated 20-character passwords for every service. If a password is reused and one service is breached, all accounts are at risk (credential stuffing attacks). With a password manager, Priya has 150 unique passwords and only needs to remember one master password. This is the modern standard.",
    funFact:
      "The 'correct horse battery staple' passphrase comes from the iconic XKCD comic #936. It demonstrates that four random common words (44 bits of entropy) is stronger than a 'complex' 8-character password like 'Tr0ub4dor&3' (28 bits) — and infinitely more memorable.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "According to NIST 2024 guidelines, which password policy is actually COUNTER-productive to security?",
      options: [
        "Checking new passwords against known breached password lists",
        "Requiring passwords to be changed every 90 days",
        "Enforcing a minimum length of 15 characters",
        "Allowing passphrases with spaces",
      ],
      correctAnswer: "Requiring passwords to be changed every 90 days",
      explanation:
        "Mandatory periodic password rotation causes users to make predictable changes: 'Summer2024' becomes 'Fall2024' becomes 'Winter2025'. NIST found this practice reduces security. Change passwords only when a breach is suspected or detected.",
    },
  },

  // ─── LESSON 17 ────────────────────────────────────────────────────────────
  {
    title: "Multi-Factor Authentication (MFA): Adding Extra Layers",
    content:
      "TechCorp suffered a credential stuffing attack — attackers used breached username/password pairs from another company's data breach to try logging into TechCorp systems. 47 accounts were compromised within hours. But every account with MFA enabled? Not a single one was breached. This incident made Sneha's case for mandatory MFA across all systems.\n\nMFA requires a user to present two or more factors from different categories:\n<pre><code>Authentication Factors:\n1. Something you KNOW  -- Password, PIN, security question\n2. Something you HAVE  -- Phone (TOTP app), hardware key (YubiKey), SMS\n3. Something you ARE   -- Fingerprint, face ID, retinal scan\n4. Somewhere you ARE   -- GPS location, office network IP (less common)\n\nMFA strength ranking (strongest to weakest):\n  Hardware Key (FIDO2/WebAuthn)  -- Best: phishing-resistant, no codes to steal\n  TOTP App (Google Authenticator, Authy)  -- Good: code changes every 30 seconds\n  Push Notification (Duo, Okta Verify)  -- Good but vulnerable to MFA fatigue attacks\n  SMS OTP  -- Weakest MFA: SIM-swapping attacks can intercept it\n  Email OTP  -- Better than nothing, but email itself may be compromised</code></pre>\n\nSneha rolled out Okta as TechCorp's Identity Provider (IdP) with TOTP as the MFA default. For privileged accounts (sysadmins, DBAs), she mandated hardware YubiKeys — immune to phishing because the key cryptographically binds to the exact domain. An attacker cannot phish a YubiKey code on a fake domain. The 47 compromised accounts are now protected; the credential stuffing attack would have zero effect today.",
    funFact:
      "Microsoft reported that MFA blocks 99.9% of automated account compromise attacks. Despite this, as of 2024 less than 30% of enterprise users globally have MFA enabled on all accounts — leaving the vast majority of corporate accounts protected by passwords alone.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "An attacker intercepts Arjun's SMS OTP through a SIM-swap attack. Which MFA method would have prevented this?",
      options: [
        "Email OTP instead of SMS",
        "A longer SMS OTP code",
        "Hardware security key (FIDO2/YubiKey)",
        "Security question as the second factor",
      ],
      correctAnswer: "Hardware security key (FIDO2/YubiKey)",
      explanation:
        "FIDO2/WebAuthn hardware keys are phishing-resistant and SIM-swap-proof. They use public-key cryptography — the key performs a cryptographic challenge tied to the exact domain. Even if an attacker steals your password and SIM, they cannot authenticate without the physical hardware key.",
    },
  },

  // ─── LESSON 18 ────────────────────────────────────────────────────────────
  {
    title: "OAuth 2.0: Secure Authorization for APIs",
    content:
      "TechCorp's new mobile app needed to let users sign in with Google and access their Google Drive files. Sneha was asked to implement this securely. The solution: OAuth 2.0 — the industry-standard protocol for authorization. OAuth allows third-party apps to access user resources without ever seeing the user's password.\n\nThe OAuth 2.0 Authorization Code Flow (most secure for web/mobile apps):\n<pre><code>Step 1: User clicks 'Sign in with Google'\nStep 2: App redirects user to Google's authorization server\n        GET https://accounts.google.com/oauth2/v2/auth\n          ?client_id=TECHCORP_APP_ID\n          &redirect_uri=https://techcorp.com/callback\n          &scope=profile email drive.readonly\n          &response_type=code\n          &state=RANDOM_CSRF_TOKEN  // prevents CSRF on OAuth flow\n\nStep 3: User logs into Google, approves requested scopes\nStep 4: Google redirects back with an authorization CODE\n        https://techcorp.com/callback?code=AUTH_CODE&state=TOKEN\n\nStep 5: Backend exchanges code for ACCESS TOKEN (server-to-server, never in browser)\n        POST https://oauth2.googleapis.com/token\n          {client_id, client_secret, code, grant_type: 'authorization_code'}\n\nStep 6: Backend uses access token to call Google APIs on behalf of user</code></pre>\n\nKey security rules Sneha enforces: always use PKCE for mobile apps (prevents code interception), always validate the state parameter (prevents CSRF), use minimum required scopes (principle of least privilege), and store access tokens securely — never in localStorage (XSS can steal them), use HttpOnly cookies instead.",
    funFact:
      "OAuth 2.0 author Eran Hammer resigned from the working group in 2012 and posted a scathing blog post calling OAuth 2.0 'a design by committee' and 'a bad protocol.' Despite this, it became the universal standard for API authorization — used by Google, Facebook, GitHub, Microsoft, and virtually every major API.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In OAuth 2.0, why does TechCorp's backend exchange the authorization code for an access token server-to-server, rather than doing it in the browser?",
      options: [
        "It is faster to do it server-side",
        "Browser cannot make POST requests",
        "The client_secret must never be exposed in the browser — doing it server-side keeps the secret private",
        "Browsers cannot handle OAuth tokens",
      ],
      correctAnswer:
        "The client_secret must never be exposed in the browser — doing it server-side keeps the secret private",
      explanation:
        "The token exchange requires the client_secret — a credential that identifies TechCorp's app to Google. If this exchange happened in the browser, any user could extract the client_secret from browser DevTools. By doing it server-to-server, the secret stays on TechCorp's backend only.",
    },
  },

  // ─── LESSON 19 ────────────────────────────────────────────────────────────
  {
    title: "JWT Tokens: Stateless Authentication Explained",
    content:
      'TechCorp\'s REST API serves millions of requests. Traditional session-based authentication requires the server to look up a session in the database on every request — expensive at scale. Sneha implemented JWT (JSON Web Token) — a stateless alternative where the authentication proof travels with every request.\n\nA JWT has three parts, separated by dots:\n<pre><code>// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE3MDAwMDAwMDB9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n\nPart 1 (Header): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\n  Decoded: {"alg": "HS256", "typ": "JWT"}\n\nPart 2 (Payload): eyJ1c2VySWQiOiIxMjMiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE3MDAwMDAwMDB9\n  Decoded: {"userId": "123", "role": "admin", "exp": 1700000000}\n  -- This is Base64 encoded, NOT encrypted -- anyone can read it!\n\nPart 3 (Signature): SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n  = HMAC_SHA256(base64(header) + \'.\' + base64(payload), SECRET_KEY)\n  -- Server verifies this signature to ensure payload was not tampered with\n\nSecurity Rules:\n-- Never put sensitive data in JWT payload (it is readable by anyone)\n-- Use short expiry times (15-60 minutes for access tokens)\n-- Use RS256 (asymmetric) in production instead of HS256 (symmetric)\n-- Store JWTs in HttpOnly cookies, not localStorage (XSS-resistant)</code></pre>\n\nSneha caught a critical bug: a junior developer had set the JWT expiry to 365 days. If a token was ever stolen, the attacker would have access for a year. She reduced it to 15 minutes for access tokens and 7 days for refresh tokens, implementing proper token rotation.',
    funFact:
      "There is a notorious JWT vulnerability called the 'alg:none' attack. Some early JWT libraries accepted tokens signed with algorithm 'none' — meaning no signature at all. An attacker could forge any JWT payload without knowing the secret key. Always explicitly validate the algorithm server-side.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        'Rahul decodes the JWT payload and finds: {"userId": "456", "role": "user"}. He changes it to {"userId": "456", "role": "admin"} and re-encodes it. What prevents this attack from working?',
      options: [
        "JWTs are encrypted and cannot be decoded",
        "The server validates the JWT signature — changing the payload invalidates the signature since Rahul does not know the secret key",
        "The userId field cannot be changed",
        "JWT tokens expire after 5 minutes",
      ],
      correctAnswer:
        "The server validates the JWT signature — changing the payload invalidates the signature since Rahul does not know the secret key",
      explanation:
        "The JWT signature is computed using the payload + secret key. Changing the payload produces a different hash. Without the secret key, Rahul cannot generate a valid signature for his modified payload. The server rejects any token where the computed signature does not match.",
    },
  },

  // ─── LESSON 20 ────────────────────────────────────────────────────────────
  {
    title: "Identity and Access Management (IAM)",
    content:
      "TechCorp had a messy access control problem: developers had database admin rights, interns had access to financial reports, and a former employee's account was still active three months after they left. This is an IAM nightmare. Identity and Access Management (IAM) is the framework for ensuring the right people have the right access to the right resources — and nothing more.\n\nCore IAM principles Sneha implemented:\n<pre><code>1. Principle of Least Privilege (PoLP)\n   -- Every user/service gets only the minimum access needed\n   -- Developer: read-only access to prod DB, full access to dev DB\n   -- Support agent: read customer records, cannot delete them\n\n2. Role-Based Access Control (RBAC)\n   -- Assign permissions to ROLES, assign users to roles\n   -- Roles: Developer, QA, Support, Admin, Finance\n   -- Changing a user's role instantly changes all their permissions\n\n3. Just-In-Time (JIT) Access\n   -- No permanent admin access -- request elevated access for specific task\n   -- Auto-expires after 4 hours\n   -- Full audit log of what was done during elevated session\n\n4. Access Review Cycle\n   -- Every quarter: managers review and certify all team members' access\n   -- Automated: deactivate accounts within 24 hours of HR offboarding event\n\n5. Separation of Duties (SoD)\n   -- No single person can approve their own expense report\n   -- No single person can both write code AND deploy to production</code></pre>\n\nSneha's IAM overhaul reduced TechCorp's attack surface by 67% — simply by removing access that people should not have had in the first place.",
    funFact:
      "The 2020 Twitter hack (in which accounts of Barack Obama, Elon Musk, and others tweeted a Bitcoin scam) exploited a social engineering attack against Twitter employees with access to internal IAM tools. The attackers did not need to hack the accounts — they just gained access to the admin panel that could override them.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A developer at TechCorp is given access to production database admin rights 'just in case.' Three months later, they accidentally delete a production table. Which IAM principle failure led to this?",
      options: [
        "Separation of Duties",
        "Principle of Least Privilege",
        "Multi-Factor Authentication",
        "Role-Based Access Control",
      ],
      correctAnswer: "Principle of Least Privilege",
      explanation:
        "Least Privilege dictates that the developer should only have the minimum access required for their actual job. A developer rarely needs production database admin rights. Giving it 'just in case' violates PoLP and creates unnecessary risk of accidental or malicious damage.",
    },
  },

  // ─── LESSON 21 ────────────────────────────────────────────────────────────
  {
    title: "Kali Linux: The Hacker's Operating System",
    content:
      "Sneha's penetration testing toolkit runs on Kali Linux — a Debian-based Linux distribution specifically designed for security professionals. It comes pre-loaded with 600+ security tools: network scanners, password crackers, exploitation frameworks, wireless auditing tools, and more. Understanding Kali is essential for any cybersecurity analyst.\n\nEssential Kali tools Sneha uses:\n<pre><code># Network Reconnaissance\nnmap -sV -O target.com          # Service version + OS detection\nnetdiscover -r 192.168.1.0/24  # ARP-based host discovery\n\n# Web Application Testing  \nburpsuite                       # Intercept and modify HTTP requests\nnikkto -h http://target.com     # Web server vulnerability scanner\n\n# Password Attacks\nhydra -l admin -P /wordlists/rockyou.txt ssh://target  # Brute force SSH\njohntheripper hash.txt          # Offline password hash cracking\n\n# Exploitation Framework\nmsfconsole                      # Metasploit Framework\n  use exploit/multi/handler\n  set payload linux/x64/meterpreter/reverse_tcp\n  set LHOST 192.168.1.100\n  run\n\n# Wireless Auditing\naircrack-ng                     # WPA/WPA2 password recovery\nairodump-ng wlan0mon            # Capture wireless packets</code></pre>\n\nImportant: Kali Linux is a tool for authorized security testing ONLY. Using these tools against systems without explicit written permission is illegal under the Computer Fraud and Abuse Act (CFAA) in the US and the IT Act in India. Sneha always gets a signed 'Rules of Engagement' document before any penetration test.",
    funFact:
      "Kali Linux is maintained by Offensive Security, the same organization that offers the OSCP (Offensive Security Certified Professional) certification — considered the gold standard of penetration testing credentials. The OSCP exam is a grueling 24-hour live hacking challenge.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha wants to use Metasploit to test TechCorp's servers for vulnerabilities. What is the most critical prerequisite before starting?",
      options: [
        "Installing the latest version of Kali Linux",
        "Having written authorization (Rules of Engagement) from TechCorp's management",
        "Having at least 16GB of RAM",
        "Disabling the company firewall first",
      ],
      correctAnswer:
        "Having written authorization (Rules of Engagement) from TechCorp's management",
      explanation:
        "Using exploitation tools without explicit written authorization is illegal, even against systems you work for. A signed Rules of Engagement document defines the scope, timing, and boundaries of the test. This protects both the tester and the organization legally.",
    },
  },

  // ─── LESSON 22 ────────────────────────────────────────────────────────────
  {
    title: "Vulnerability Scanning with Nessus and OpenVAS",
    content:
      'TechCorp has 340 servers, 200 workstations, and 15 network devices. Sneha cannot manually check every device for known vulnerabilities. She uses vulnerability scanners — automated tools that compare system configurations against databases of thousands of known CVEs (Common Vulnerabilities and Exposures) and flag what needs patching.\n\nNessus (by Tenable) is the industry-leading commercial vulnerability scanner. OpenVAS is the open-source alternative. Both work similarly:\n<pre><code>Vulnerability Scan Workflow:\n\n1. Discovery Phase\n   -- Scanner identifies all live hosts in scope\n   -- Maps open ports and running services\n\n2. Vulnerability Check Phase\n   -- Compares each service version against CVE database\n   -- Tests for common misconfigurations\n   -- Checks for default credentials\n\n3. Reporting Phase  \n   -- Assigns CVSS scores: 0-3.9 Low, 4-6.9 Medium, 7-8.9 High, 9-10 Critical\n   -- Provides remediation steps for each finding\n\nNessus CLI example:\nnessuscli scan new --name "TechCorp Q4 Audit" \\\n  --policy "Basic Network Scan" \\\n  --targets "10.0.0.0/24"</code></pre>\n\nSneha\'s latest scan found 3 Critical findings: an Apache Struts version vulnerable to remote code execution (the same bug that caused the Equifax breach), an unpatched OpenSSH with CVE score 9.8, and a Cisco switch with default credentials still in place. Each Critical gets a 24-hour remediation SLA. The scan runs monthly — a consistent cadence of vulnerability management is what keeps TechCorp\'s risk level manageable.',
    funFact:
      "The Equifax breach (2017) exposed data of 147 million Americans. The vulnerability — Apache Struts CVE-2017-5638 — had a patch available for 2 months before the attack. Equifax's security team had been warned twice. The breach cost Equifax $700 million in settlements.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "A vulnerability with a CVSS score of 9.8 is categorized as ________.",
      correctAnswer: "Critical",
      explanation:
        "The CVSS (Common Vulnerability Scoring System) scale: 0-3.9 = Low, 4.0-6.9 = Medium, 7.0-8.9 = High, 9.0-10.0 = Critical. A score of 9.8 means the vulnerability is remotely exploitable with no authentication required and results in complete system compromise.",
    },
  },

  // ─── LESSON 23 ────────────────────────────────────────────────────────────
  {
    title: "Penetration Testing: Ethical Hacking Explained",
    content:
      "TechCorp hired Sneha's team to conduct a formal penetration test — a simulated cyberattack designed to find and exploit vulnerabilities before real attackers do. A pentest is fundamentally different from a vulnerability scan: scanners find known issues automatically; pentesters think creatively, chain vulnerabilities together, and simulate what a real motivated attacker would do.\n\nThe five phases of a professional penetration test:\n<pre><code>Phase 1: Reconnaissance\n-- OSINT (Open-Source Intelligence): LinkedIn, job postings, GitHub, Shodan\n-- Goal: understand TechCorp's tech stack, employee names, email formats\n-- Tools: theHarvester, Maltego, Shodan\n\nPhase 2: Scanning and Enumeration\n-- Nmap, Nessus, Nikto -- detailed mapping of all attack surface\n-- Identify running services and versions\n\nPhase 3: Exploitation\n-- Attempt to exploit discovered vulnerabilities\n-- Metasploit, manual SQL injection, XSS, broken auth\n-- Goal: gain initial foothold\n\nPhase 4: Post-Exploitation and Privilege Escalation\n-- From initial foothold, try to reach crown jewels\n-- Pivot through network, escalate from user to admin\n-- Demonstrate business impact: 'We could have exfiltrated customer DB'\n\nPhase 5: Reporting\n-- Executive Summary: business risk in plain English\n-- Technical Findings: each vulnerability with CVSS score + proof-of-concept\n-- Remediation Roadmap: prioritized by risk level</code></pre>\n\nSneha's pentest found a critical chain: an outdated PHP app on a forgotten subdomain had an RCE vulnerability. From there, the pentesters pivoted to an internal network segment, found a misconfigured Redis instance with no authentication, and used it to gain access to the application server. Three vulnerabilities individually were 'medium' severity; chained together, they were catastrophic.",
    funFact:
      "Google's Project Zero team of elite security researchers (6-person team) has found critical zero-day vulnerabilities in Chrome, iOS, Windows, and Android — and reported them to vendors before attackers could exploit them. They give vendors 90 days to patch before public disclosure.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In a pentest, Sneha gains access to a low-privilege user account on a web server. She then finds a misconfigured sudo rule that lets her run any command as root. What phase is this?",
      options: [
        "Reconnaissance",
        "Scanning",
        "Post-Exploitation and Privilege Escalation",
        "Reporting",
      ],
      correctAnswer: "Post-Exploitation and Privilege Escalation",
      explanation:
        "Post-exploitation covers everything after gaining initial access: maintaining persistence, moving laterally through the network, and escalating privileges. Going from a low-privilege user to root via a misconfigured sudo rule is a classic local privilege escalation technique.",
    },
  },

  // ─── LESSON 24 ────────────────────────────────────────────────────────────
  {
    title: "Password Cracking: How It Works and How to Prevent It",
    content:
      "TechCorp's old employee portal stored passwords as MD5 hashes. When Sneha's pentest team obtained a database dump, they cracked 80% of passwords in under 3 hours. Understanding how password cracking works is essential for defending against it.\n\nPassword cracking techniques and countermeasures:\n<pre><code>1. Dictionary Attack\n   -- Try common passwords from wordlists (rockyou.txt: 14M passwords)\n   -- Tool: hashcat -a 0 -m 0 hashes.txt rockyou.txt\n   -- Defense: block common passwords at registration\n\n2. Brute Force\n   -- Try every possible combination (a, b, ..., aa, ab, ...)\n   -- hashcat benchmarks: MD5 = 68 BILLION hashes/second on RTX 4090\n   -- 8-char alphanumeric MD5 cracked in < 1 hour\n   -- Defense: use strong hashing algorithms\n\n3. Rainbow Table Attack\n   -- Pre-computed table of hash:password pairs\n   -- Defense: Password SALTING (add random value before hashing)\n     sha256('password' + 'xK9mP2') = completely different hash than unsalted\n\n4. Credential Stuffing\n   -- Use breached username:password lists from other sites\n   -- Defense: MFA, breach monitoring (Have I Been Pwned API)\n\nStrong Password Hashing (use THESE, not MD5/SHA1):\n  bcrypt -- work factor is configurable, 10+ rounds recommended\n  Argon2 -- winner of Password Hashing Competition 2015, best choice\n  scrypt -- memory-hard, resists GPU-accelerated cracking\n\n// bcrypt example (Node.js)\nconst hash = await bcrypt.hash(password, 12); // 12 rounds</code></pre>",
    funFact:
      "rockyou.txt — the most famous password wordlist used in security research — was obtained from the 2009 RockYou data breach, which exposed 32 million plaintext passwords. It contains 14.3 million passwords and is still the most effective dictionary attack wordlist for testing password strength.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp stores passwords as SHA-256 hashes without salting. An attacker gets the database and uses a pre-computed rainbow table to crack hashes instantly. What would have prevented this?",
      options: [
        "Using MD5 instead of SHA-256",
        "Adding a unique random salt to each password before hashing",
        "Encrypting the database",
        "Using longer passwords",
      ],
      correctAnswer:
        "Adding a unique random salt to each password before hashing",
      explanation:
        "Salting adds a unique random value to each password before hashing. Even if two users have the same password, their salted hashes are different. This completely defeats rainbow table attacks since pre-computed tables would need to include every possible salt value — computationally infeasible.",
    },
  },

  // ─── LESSON 25 ────────────────────────────────────────────────────────────
  {
    title: "Security Auditing: Checking Your Own Systems",
    content:
      "Sneha runs a quarterly security audit of TechCorp's entire infrastructure. Unlike a pentest (which actively exploits vulnerabilities), a security audit is a systematic review of controls, configurations, and policies against a security standard. Think of it as a fire drill versus actually fighting a fire.\n\nSneha's security audit checklist:\n<pre><code>1. Access Control Audit\n   -- Review all user accounts: are former employees deactivated?\n   -- Check for accounts with excessive privileges\n   -- Review service accounts: are passwords rotated?\n   -- Verify MFA is enforced for all privileged accounts\n\n2. Patch Management Audit\n   -- List all systems and their current patch level\n   -- Identify systems running end-of-life software\n   -- Verify patch deployment SLAs are being met\n\n3. Network Configuration Audit\n   -- Firewall rule review: any rules that should be removed?\n   -- Network segmentation: are dev/prod/DMZ properly isolated?\n   -- VPN configuration: are only required ports open?\n\n4. Logging and Monitoring Audit\n   -- Are all critical systems sending logs to SIEM?\n   -- Are alert rules covering key attack scenarios?\n   -- Are logs retained for required duration (90 days minimum)?\n\n5. Encryption Audit\n   -- All databases encrypted at rest?\n   -- All external communications using TLS 1.2+?\n   -- Certificate expiry review (auto-renew configured?)\n\nOutput: Audit Report with risk ratings, findings, owner assignments, \nand remediation deadlines. Track to closure.</code></pre>",
    funFact:
      "Uber paid a hacker $100,000 in 2016 to delete stolen data and keep quiet about a breach affecting 57 million users. Uber's then-CSO was later criminally convicted of obstruction of justice for concealing the breach from regulators. Security audits catch cover-ups too.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "A security audit checks controls against a standard. A penetration test actively ________ vulnerabilities to demonstrate real-world impact.",
      correctAnswer: "exploits",
      explanation:
        "A security audit reviews and verifies controls (are the right policies in place?). A penetration test actively exploits discovered vulnerabilities to demonstrate what a real attacker could achieve. Both are necessary — audits ensure controls exist; pentests verify they actually work.",
    },
  },

  // ─── LESSON 26 ────────────────────────────────────────────────────────────
  {
    title: "AWS Security Best Practices",
    content:
      'TechCorp migrated 80% of its infrastructure to AWS. Sneha became the cloud security lead and discovered something alarming on day one: the AWS root account had been used to create IAM users manually, no CloudTrail logging was enabled, and three S3 buckets were publicly accessible. Cloud security misconfigurations are consistently the #1 cause of cloud data breaches.\n\nSneha\'s AWS Security Hardening Checklist:\n<pre><code># 1. Account-Level Security\naws iam enable-mfa-device --virtual-mfa-device-arn ... # MFA on root account\naws organizations create-policy --type SCP  # Service Control Policies\n# Never use root account for daily operations -- create IAM user instead\n\n# 2. CloudTrail (Audit Logging)\naws cloudtrail create-trail --name "techcorp-audit" \\\n  --s3-bucket-name "techcorp-logs" \\\n  --include-global-service-events\naws cloudtrail start-logging --name "techcorp-audit"\n# Every API call in your account is now logged\n\n# 3. S3 Bucket Security  \naws s3api put-bucket-acl --bucket my-bucket --acl private\naws s3api put-public-access-block --bucket my-bucket \\\n  --public-access-block-configuration \\\n  BlockPublicAcls=true,BlockPublicPolicy=true\n\n# 4. GuardDuty (Threat Detection)\naws guardduty create-detector --enable\n# AI-powered threat detection: unusual API calls, crypto mining, data exfiltration\n\n# 5. Security Hub (Unified Security View)\naws securityhub enable-security-hub\n# Aggregates findings from GuardDuty, Inspector, Config, Macie</code></pre>',
    funFact:
      "The Capital One data breach (2019) exposed 100 million customer records. The attacker exploited a Server-Side Request Forgery (SSRF) vulnerability to access AWS instance metadata, steal IAM credentials, and exfiltrate data from S3. The misconfigured WAF and over-permissive IAM role were the root causes.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha finds that three TechCorp S3 buckets are publicly accessible. Customer data is potentially exposed. Which AWS service should she have been using to continuously monitor for public S3 buckets?",
      options: [
        "AWS CloudWatch",
        "AWS Config with managed rules",
        "AWS ElasticSearch",
        "AWS Lambda",
      ],
      correctAnswer: "AWS Config with managed rules",
      explanation:
        "AWS Config tracks configuration changes across AWS resources and can enforce compliance rules. The managed rule 's3-bucket-public-read-prohibited' automatically flags any S3 bucket configured for public access. Config provides continuous compliance monitoring rather than point-in-time checks.",
    },
  },

  // ─── LESSON 27 ────────────────────────────────────────────────────────────
  {
    title: "Cloud IAM: Managing Cloud Permissions Safely",
    content:
      'Cloud IAM (Identity and Access Management) is the foundation of cloud security. In AWS, every action is an API call, and every API call must be authorized by an IAM policy. Get IAM wrong and everything else is irrelevant. Sneha spent two weeks auditing TechCorp\'s AWS IAM setup and found widespread policy of \'when in doubt, give AdministratorAccess.\'\n\nSneha\'s IAM redesign using least-privilege principles:\n<pre><code>// BAD - What Sneha found\n{\n  "Effect": "Allow",\n  "Action": "*",        // All actions\n  "Resource": "*"       // All resources\n}\n// This is AdministratorAccess -- the nuclear option\n\n// GOOD - Least privilege for a Lambda reading from DynamoDB\n{\n  "Effect": "Allow",\n  "Action": [\n    "dynamodb:GetItem",\n    "dynamodb:Query",\n    "dynamodb:Scan"\n  ],\n  "Resource": "arn:aws:dynamodb:us-east-1:123456789:table/Orders"\n  // Only this specific table, only read operations\n}\n\n// Use IAM Roles for EC2/Lambda, NEVER use long-term access keys on instances\n// Access keys in code = credentials will be committed to GitHub\n\n// AWS IAM Access Analyzer -- detects overly permissive policies automatically\naws accessanalyzer create-analyzer --analyzer-name "techcorp-analyzer" \\\n  --type ACCOUNT\n\n// Check what a role actually has permission to do\naws iam simulate-principal-policy \\\n  --policy-source-arn "arn:aws:iam::123456:role/Lambda-Role" \\\n  --action-names "s3:DeleteBucket" "dynamodb:DeleteTable"</code></pre>',
    funFact:
      "AWS IAM has over 13,000 distinct permissions across its services. The average AWS customer uses less than 5% of the permissions they have granted. IAM Access Analyzer automatically finds and alerts on policies granting more permissions than are actually being used.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A Lambda function only needs to read objects from one specific S3 bucket. Which IAM policy is correct?",
      options: [
        "Allow action s3:* on resource *",
        "Allow action s3:GetObject on the specific bucket ARN only",
        "Attach AdministratorAccess to keep things simple",
        "Allow all S3 actions on the specific bucket",
      ],
      correctAnswer:
        "Allow action s3:GetObject on the specific bucket ARN only",
      explanation:
        "Least privilege: grant only the specific action needed (s3:GetObject = read objects) on the specific resource (the exact bucket ARN). If the Lambda is compromised, the blast radius is limited to reading that one bucket — not deleting all S3 buckets or accessing other services.",
    },
  },

  // ─── LESSON 28 ────────────────────────────────────────────────────────────
  {
    title: "Encryption at Rest and in Transit",
    content:
      'TechCorp stores sensitive customer PII (Personally Identifiable Information) and financial data. Sneha\'s first question: is this data encrypted when stored (at rest) and when moving between systems (in transit)? Encryption is the process of converting data into an unreadable format using a key — without the key, the ciphertext is useless to an attacker.\n\nEncryption at Rest — protecting stored data:\n<pre><code>// AWS S3 Server-Side Encryption\naws s3api put-bucket-encryption --bucket my-bucket \\\n  --server-side-encryption-configuration \'{\n    "Rules": [{"ApplyServerSideEncryptionByDefault": {"SSEAlgorithm": "aws:kms"}}]\n  }\'\n\n// AWS RDS Encryption (must be enabled at creation)\naws rds create-db-instance --storage-encrypted true \\\n  --kms-key-id "arn:aws:kms:us-east-1:123:key/abc"\n\n// Disk encryption on EC2\naws ec2 create-volume --encrypted true --kms-key-id KEY_ARN\n\n// Application-level encryption for ultra-sensitive fields\n// (SSN, credit card numbers -- encrypt before storing in DB)\nfrom cryptography.fernet import Fernet\nkey = Fernet.generate_key()\nf = Fernet(key)\nencrypted_ssn = f.encrypt(b"123-45-6789")\n\nEncryption in Transit:\n-- All APIs: HTTPS with TLS 1.2+ (never HTTP)\n-- Database connections: ssl_mode=require in connection string\n-- Internal microservices: mutual TLS (mTLS) in zero-trust architecture\n-- Message queues (Kafka, SQS): TLS enabled on broker endpoints</code></pre>\n\nKey Management is as important as encryption itself. Sneha uses AWS KMS (Key Management Service) — keys are stored in hardware security modules (HSMs), never exposed in plaintext, and all key usage is logged in CloudTrail.',
    funFact:
      "AES-256 (Advanced Encryption Standard with 256-bit key) would take longer than the age of the universe to brute-force even with the world's fastest supercomputers. It is the global standard for symmetric encryption used by governments, banks, and every major technology company.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp's database is encrypted at rest. An attacker gains access to the EC2 instance running the application server with the database credentials. Are they still blocked by encryption?",
      options: [
        "Yes — encryption at rest protects against all unauthorized access",
        "No — encryption at rest protects against physical disk theft, not against an attacker with valid credentials accessing a running system",
        "Yes — the attacker needs the KMS key separately",
        "No — but they still cannot read the data without re-encrypting it",
      ],
      correctAnswer:
        "No — encryption at rest protects against physical disk theft, not against an attacker with valid credentials accessing a running system",
      explanation:
        "Encryption at rest means the data is encrypted when not being used (stored on disk). A running application decrypts data in memory to use it. An attacker with application-level credentials can query the database normally — the application decrypts on their behalf. Encryption at rest protects against physical media theft or compromised storage infrastructure, not application-level access.",
    },
  },

  // ─── LESSON 29 ────────────────────────────────────────────────────────────
  {
    title: "GDPR and Data Privacy Compliance",
    content:
      "TechCorp signed its first European client. Sneha immediately flagged a compliance requirement: GDPR (General Data Protection Regulation) — the EU's sweeping data privacy law that applies to any organization processing data about EU residents, regardless of where the company is based. Non-compliance penalties: up to €20 million or 4% of global annual turnover, whichever is higher.\n\nGDPR's core requirements that Sneha maps to TechCorp's systems:\n<pre><code>1. Lawful Basis for Processing\n   -- You must have a legal reason to process personal data\n   -- Options: consent, contract performance, legitimate interest, legal obligation\n   -- Consent must be: specific, informed, freely given, and revocable\n\n2. Data Minimization\n   -- Collect only what you actually need\n   -- If you don't need date of birth, don't collect it\n\n3. Data Subject Rights (must be technically implemented)\n   -- Right to Access: user can request all their data (respond in 30 days)\n   -- Right to Erasure ('right to be forgotten'): delete user's data on request\n   -- Right to Portability: export data in machine-readable format (JSON/CSV)\n   -- Right to Rectification: user can correct inaccurate data\n\n4. Breach Notification\n   -- Report data breach to supervisory authority within 72 hours\n   -- Notify affected users without undue delay if high risk\n\n5. Data Processing Agreements (DPAs)\n   -- Required with every vendor who processes EU personal data\n   -- AWS, Salesforce, etc. provide standard DPAs\n\n6. Data Protection Officer (DPO)\n   -- Required for large-scale processing of sensitive data</code></pre>",
    funFact:
      "Meta was fined €1.2 billion by Ireland's Data Protection Commission in 2023 for transferring EU user data to US servers without adequate safeguards — the largest GDPR fine ever issued. Total GDPR fines across all companies since 2018 exceed €4 billion.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A TechCorp EU customer emails and asks for all personal data TechCorp holds about them to be deleted. Under GDPR, how quickly must TechCorp respond?",
      options: [
        "Within 24 hours",
        "Within 30 days (with possible 2-month extension for complex cases)",
        "Within 90 days",
        "Within 7 business days",
      ],
      correctAnswer:
        "Within 30 days (with possible 2-month extension for complex cases)",
      explanation:
        "GDPR Article 12 requires responses to data subject rights requests within one calendar month (30 days). This can be extended by two more months for complex or numerous requests, but the data subject must be informed of the extension within the first month.",
    },
  },

  // ─── LESSON 30 ────────────────────────────────────────────────────────────
  {
    title: "Security Compliance Frameworks (ISO 27001, SOC 2)",
    content:
      "TechCorp's enterprise sales team lost a $2M contract because TechCorp could not provide a SOC 2 report. The enterprise prospect's security team required it as part of vendor due diligence. Sneha was tasked with getting TechCorp SOC 2 Type II compliant — a 12-month journey that transformed the company's security posture.\n\nKey compliance frameworks and their differences:\n<pre><code>ISO 27001\n-- International standard for Information Security Management Systems (ISMS)\n-- Certification by accredited audit bodies\n-- Annual surveillance audits + 3-year recertification\n-- Covers: risk management, asset management, access control, cryptography,\n   supplier relationships, incident management\n-- Recognized globally; preferred in Europe and Asia-Pacific\n-- Cost: $30,000-$100,000+ for certification\n\nSOC 2 (Service Organization Control 2)\n-- US standard developed by AICPA\n-- Based on 5 Trust Service Criteria (TSC): Security, Availability,\n   Processing Integrity, Confidentiality, Privacy\n-- Type I: point-in-time assessment (controls are designed correctly)\n-- Type II: 6-12 month observation period (controls operate effectively)\n-- Preferred by US enterprise customers for SaaS vendors\n\nNIST Cybersecurity Framework (CSF)\n-- US voluntary framework; widely adopted\n-- 5 Functions: Identify, Protect, Detect, Respond, Recover\n-- Not a certification -- used as internal improvement roadmap\n\nPCI DSS\n-- Required for any organization handling credit/debit card data\n-- 12 requirements covering network security, encryption, access control\n-- Non-compliance can result in loss of ability to process card payments</code></pre>",
    funFact:
      "Amazon Web Services, Microsoft Azure, and Google Cloud all maintain SOC 2 Type II, ISO 27001, and PCI DSS compliance. When you build on these platforms, you inherit much of their compliance posture — but you are still responsible for your own application and data handling practices.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp's US enterprise customer demands proof that TechCorp's security controls have been operating effectively for the past 12 months, not just designed correctly. Which report satisfies this?",
      options: [
        "SOC 2 Type I report",
        "ISO 27001 certificate",
        "SOC 2 Type II report",
        "NIST CSF self-assessment",
      ],
      correctAnswer: "SOC 2 Type II report",
      explanation:
        "SOC 2 Type II covers an observation period (typically 6-12 months) where an auditor verifies that security controls operated effectively throughout the period — not just that they were designed correctly at one point in time. Enterprise customers specifically ask for Type II because it demonstrates sustained security operations.",
    },
  },

  // ─── LESSON 31 ────────────────────────────────────────────────────────────
  {
    title: "Security Incident Lifecycle: Detect, Respond, Recover",
    content:
      "It was 2 AM when Sneha's phone buzzed with a PagerDuty alert: GuardDuty detected cryptocurrency mining activity on three TechCorp EC2 instances. A real incident had just started. Sneha activated TechCorp's Incident Response Plan — a documented, rehearsed playbook for exactly this scenario.\n\nThe NIST Incident Response Lifecycle:\n<pre><code>Phase 1: PREPARATION (before incidents happen)\n-- Incident Response Plan documented and tested\n-- SIEM/alerting configured\n-- IR team roles defined (Incident Commander, Technical Lead, Communications)\n-- Forensic toolkit ready (write blockers, memory capture tools)\n\nPhase 2: DETECTION and ANALYSIS\n-- GuardDuty alert: CryptoCurrency:EC2/BitcoinTool.B!DNS\n-- Validate: is this a true positive or false alarm?\n-- Determine scope: which systems are affected?\n-- Assign severity level: P1 (Critical) based on active compromise\n\nPhase 3: CONTAINMENT\n-- Immediate: isolate affected EC2 instances from network\n-- Short-term: revoke IAM credentials associated with compromised instances\n-- Evidence preservation: take memory snapshots BEFORE isolating (forensics)\n-- Block attacker's C2 IP at firewall level\n\nPhase 4: ERADICATION\n-- Identify root cause: an exposed Docker API port (2375) with no auth\n-- Remove malware: terminate compromised instances, deploy fresh AMIs\n-- Patch the vulnerability: close port 2375, require TLS for Docker API\n\nPhase 5: RECOVERY\n-- Restore services from known-good snapshots\n-- Enhanced monitoring for 30 days post-incident\n-- Verify no persistence mechanisms remain\n\nPhase 6: POST-INCIDENT REVIEW (Lessons Learned)\n-- What happened? Timeline reconstruction\n-- Why did it happen? Root cause analysis (5 Whys)\n-- How do we prevent recurrence? Action items with owners and deadlines\n-- Update IR playbook based on learnings</code></pre>",
    funFact:
      "The average time to identify a breach globally is 204 days (IBM Cost of a Data Breach Report 2023). The average time to contain it after identification is another 73 days. Organizations with a formal IR plan contain breaches 54 days faster than those without one.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha isolates a compromised EC2 instance to prevent the attacker from communicating. Before isolating, she takes a memory snapshot. Why is capturing memory BEFORE isolation critical?",
      options: [
        "Memory snapshots are faster to take on a running system",
        "Volatile memory contains attacker's tools, active connections, and encryption keys that disappear when the instance is stopped",
        "AWS requires memory snapshots before isolation for billing purposes",
        "It is required by GDPR compliance",
      ],
      correctAnswer:
        "Volatile memory contains attacker's tools, active connections, and encryption keys that disappear when the instance is stopped",
      explanation:
        "RAM (volatile memory) holds critical forensic evidence: running malware processes, network connections to the attacker's C2, decrypted files, credentials in memory. When the instance stops, RAM is wiped. Capturing it first preserves invaluable evidence for forensic analysis and legal proceedings.",
    },
  },

  // ─── LESSON 32 ────────────────────────────────────────────────────────────
  {
    title: "Digital Forensics Basics",
    content:
      "After the cryptomining incident, TechCorp needed to know: how did the attacker get in, what did they access, and was any data stolen? This is Digital Forensics — the process of collecting, preserving, and analyzing digital evidence to reconstruct events, identify attackers, and support legal proceedings.\n\nSneha's forensic investigation workflow:\n<pre><code>1. Evidence Preservation (Order of Volatility -- most volatile first)\n   a. CPU registers and cache (already lost on isolation)\n   b. Memory (RAM) -- captured before shutdown\n   c. Network connections -- netstat output captured\n   d. Running processes -- ps aux captured\n   e. Disk image -- byte-for-byte copy using dd or FTK Imager\n\n# Create forensic disk image (read-only, hash-verified)\ndd if=/dev/sda of=/forensics/evidence.img bs=64k\nmd5sum /dev/sda > /forensics/hash_original.md5\nmd5sum /forensics/evidence.img > /forensics/hash_copy.md5\n# Hashes must match -- proves evidence integrity\n\n2. Timeline Analysis\n# Examine Linux auth logs\ncat /var/log/auth.log | grep 'Failed\\|Accepted'\n# Check bash history (attackers often forget to clear this)\ncat /root/.bash_history\n# Last login times\nlast -a\n\n3. Malware Analysis\n# Upload sample to VirusTotal (online multi-AV scanner)\ncurl -X POST https://www.virustotal.com/vtapi/v2/file/scan \\\n  -F \"file=@/forensics/suspicious_binary\"\n\n4. Chain of Custody\n-- Every piece of evidence must have documented:\n   Who collected it, when, from where, how it was stored\n-- Without chain of custody, evidence is inadmissible in court</code></pre>",
    funFact:
      "Digital forensics played a key role in the Sony PlayStation Network breach investigation (2011) — 77 million accounts compromised. Forensic analysis of Sony's servers revealed the attacker had actually breached the network a week earlier through a known Apache vulnerability that Sony had not patched.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha creates a forensic disk image using dd and verifies it with MD5 checksums. The MD5 of the original disk and the image match. What does this prove?",
      options: [
        "The image is free from malware",
        "The forensic copy is an exact bit-for-bit duplicate — evidence integrity is maintained",
        "The disk encryption is working",
        "The original disk is not corrupted",
      ],
      correctAnswer:
        "The forensic copy is an exact bit-for-bit duplicate — evidence integrity is maintained",
      explanation:
        "MD5/SHA256 checksums of forensic images serve as a tamper-evident seal. Matching hashes prove the image is an exact bit-for-bit copy of the original — no data was added, removed, or altered during the collection process. This is essential for evidence admissibility in legal proceedings.",
    },
  },

  // ─── LESSON 33 ────────────────────────────────────────────────────────────
  {
    title: "SIEM Tools: Splunk and IBM QRadar Overview",
    content:
      'TechCorp has 340 servers, each generating thousands of log events per second. No human can read all of them. Sneha deployed a SIEM — Security Information and Event Management — to centralize, correlate, and analyze logs from across the entire infrastructure in real time. A SIEM is the nerve center of a Security Operations Center (SOC).\n\nHow SIEM works:\n<pre><code>Log Sources --> SIEM --> Correlation Engine --> Alerts --> Analyst Response\n\nLog Sources Sneha ingests into Splunk:\n-- AWS CloudTrail (all API calls)\n-- VPC Flow Logs (network traffic metadata)\n-- Application logs (Apache, Nginx access logs)\n-- Authentication logs (Active Directory, Okta)\n-- Database audit logs (PostgreSQL, MySQL)\n-- Endpoint logs (Windows Event Logs, Linux syslog)\n-- Firewall and IDS/IPS logs\n\nSplunk Search Processing Language (SPL) examples:\n# Find all failed SSH logins\nindex=linux_logs sourcetype=syslog "Failed password" \n| stats count by src_ip \n| where count > 10\n| sort -count\n\n# Detect possible data exfiltration\nindex=network sourcetype=vpc_flow \n| stats sum(bytes_out) as total_out by dest_ip \n| where total_out > 1000000000  -- 1GB\n| lookup geo_ip dest_ip OUTPUT country\n| where country != "India"\n\n# Login from multiple countries in 1 hour (impossible travel)\nindex=auth sourcetype=okta_logs \n| transaction user_id maxspan=1h\n| where eventcount > 1\n| lookup geo_ip src_ip OUTPUT country\n| stats dc(country) as unique_countries by user_id\n| where unique_countries > 1</code></pre>',
    funFact:
      "Splunk Enterprise processes over 1 petabyte of data per day for some of its largest customers, including 92 of the Fortune 100 companies. At $1,800+ per GB/day, it is also one of the most expensive enterprise software licenses — leading to the rise of open-source alternatives like OpenSearch and Wazuh.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha's Splunk alert fires: a user account logged in from India at 9 AM, then from Germany at 10 AM. What does this indicate?",
      options: [
        "The user is using a VPN in Germany",
        "Impossible travel — the account may be compromised since a human cannot travel from India to Germany in 1 hour",
        "The user has two computers",
        "Normal behavior for a global company",
      ],
      correctAnswer:
        "Impossible travel — the account may be compromised since a human cannot travel from India to Germany in 1 hour",
      explanation:
        "Impossible travel detection is a powerful SIEM correlation rule. If an account authenticates from two geographically distant locations within an impossibly short timeframe, it strongly suggests credential compromise — the attacker in Germany used stolen credentials while the legitimate user was in India.",
    },
  },

  // ─── LESSON 34 ────────────────────────────────────────────────────────────
  {
    title: "Cybersecurity Certifications: CEH, CISSP, CompTIA Security+",
    content:
      "Sneha's manager asked her to create a learning roadmap for TechCorp's security team of six people with varying skill levels. Cybersecurity certifications are not just credentials — they ensure team members have standardized, verified knowledge across core security domains. Sneha created a tiered certification roadmap.\n\nTop cybersecurity certifications and their positioning:\n<pre><code>ENTRY LEVEL (0-2 years experience)\n\nCompTIA Security+ (SY0-701)\n-- Most recognized entry-level security cert globally\n-- Covers: threats, vulnerabilities, network security, cryptography, IAM\n-- No prerequisites; 90-question exam; 3-year validity with CEUs\n-- Cost: ~$400 USD\n-- Ideal for: Sneha's junior analysts and developers wanting security foundation\n\nCEH (Certified Ethical Hacker) -- EC-Council\n-- Practical hacking skills: reconnaissance, exploitation, malware analysis\n-- Covers same tools Sneha uses: Nmap, Metasploit, Wireshark\n-- Requires 2 years security experience OR EC-Council training\n-- Cost: ~$1,000 USD\n-- Ideal for: moving into penetration testing role\n\nMID LEVEL (3-5 years experience)\nOSCP (Offensive Security Certified Professional)\n-- 24-hour hands-on hacking exam -- most respected pen testing cert\n-- No multiple choice -- you must actually compromise lab machines\n-- Highly respected by employers; demonstrates real-world skill\n\nADVANCED LEVEL (5+ years)\nCISSP (Certified Information Systems Security Professional) -- ISC2\n-- The gold standard of security management certs\n-- 8 security domains: Security and Risk Management, Asset Security,\n   Cryptography, Network Security, Identity Management, etc.\n-- Requires 5 years paid security experience\n-- 125-175 adaptive questions (CAT exam)\n-- Cost: ~$700 USD + $125/year maintenance\n-- Ideal for: Sneha's path to CISO</code></pre>",
    funFact:
      "The average salary for a CISSP-certified professional in India is ₹28-45 LPA, compared to ₹8-15 LPA for a non-certified security professional with similar experience. In the US, CISSP holders earn an average of $131,000/year, making it one of the highest ROI certifications in IT.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun has 1 year of IT experience and wants to break into cybersecurity. Which certification is the best starting point for him?",
      options: [
        "CISSP — the most comprehensive security certification",
        "OSCP — proves real hacking skills",
        "CompTIA Security+ — most recognized entry-level certification with no strict prerequisites",
        "CEH — covers ethical hacking which is the most practical",
      ],
      correctAnswer:
        "CompTIA Security+ — most recognized entry-level certification with no strict prerequisites",
      explanation:
        "CompTIA Security+ is specifically designed for early-career professionals. It has no strict prerequisites, covers foundational security concepts across all domains, is vendor-neutral, and is recognized by the US Department of Defense. CISSP requires 5 years experience; OSCP and CEH require prior security knowledge.",
    },
  },

  // ─── LESSON 35 ────────────────────────────────────────────────────────────
  {
    title: "Cybersecurity Capstone: Security Audit Report for a Sample Company",
    content:
      "Congratulations on reaching the capstone! Sneha is now tasked with writing a full Security Audit Report for 'RetailCo' — a fictional e-commerce company. This capstone consolidates every concept from this course into a real-world deliverable that you can adapt for your portfolio or first professional engagement.\n\nRetailCo Profile: 150 employees, e-commerce platform (AWS), processes credit cards (PCI DSS scope), has EU customers (GDPR scope), 3 developers, 1 DBA, no dedicated security team until now.\n\nSecurity Audit Report Structure:\n<pre><code>EXECUTIVE SUMMARY\n  Audit Period: Q4 2025\n  Scope: AWS infrastructure, web application, internal network, policies\n  Overall Risk Rating: HIGH\n  Critical Findings: 4 | High: 8 | Medium: 12 | Low: 6\n  Key Recommendation: Implement MFA, patch 3 critical CVEs, hire security lead\n\nFINDING #1 -- CRITICAL (CVSS 9.8)\n  Title: No MFA on AWS Root Account and IAM Admin Users\n  Description: AWS root account and 3 IAM admin users have no MFA\n  Risk: Single compromised password = full AWS account takeover\n  Evidence: IAM console screenshots, CloudTrail showing root account usage\n  Remediation: Enable virtual MFA on root (immediate); enforce MFA policy\n    on all IAM users via SCP (within 72 hours)\n  Owner: Cloud Team Lead | Due Date: 2025-11-05\n\nFINDING #2 -- CRITICAL\n  Title: SQL Injection in Product Search API\n  Payload tested: /api/search?q='; DROP TABLE products;--\n  Evidence: Returned database error revealing table structure\n  Remediation: Parameterized queries in all DB calls (within 1 week)\n\nFINDING #3 -- HIGH\n  Title: S3 Bucket with Customer Order History Publicly Accessible\n  Bucket: retailco-order-exports (contains PII: names, addresses, orders)\n  GDPR Impact: Data breach notification may be required\n  Remediation: Block public access immediately; audit all S3 buckets\n\nFINDING #4 -- HIGH\n  Title: Outdated WordPress (5.8.3) with 6 Known CVEs\n  Current: 5.8.3 | Latest: 6.4.3 | Critical CVE: CVE-2023-2745 (RCE)\n  Remediation: Update immediately; enable auto-updates\n\nREMEDIATION ROADMAP\n  Week 1 (P0): MFA everywhere, patch RCE, close public S3\n  Month 1 (P1): SQL injection fixes, WAF deployment, CloudTrail enable\n  Quarter 1 (P2): SOC 2 Type I readiness, GDPR data mapping exercise\n  Year 1 (P3): SOC 2 Type II certification, hire security engineer\n\nSIGNOFF\n  Auditor: Sneha Sharma, CEH, Security+\n  Date: 2025-11-01\n  Next Audit: 2026-04-01</code></pre>\n\nYour capstone project: replicate this audit for a real or simulated company. Use Nmap for network scanning, OpenVAS for vulnerability scanning, Wireshark for traffic analysis, and OWASP ZAP for web application testing. Write your findings in this exact format. This is the artifact that lands your first cybersecurity job.",
    funFact:
      "Junior penetration testers and security analysts who present a portfolio of documented security audit reports during interviews are hired 3x more often than those who only have certifications. A well-written security audit report demonstrates not just technical skill but the communication ability to explain risk to business stakeholders — the skill that separates good analysts from great ones.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In your Security Audit Report, you find that RetailCo's publicly accessible S3 bucket contains customer PII including names and addresses. What is the FIRST action you recommend in the remediation roadmap?",
      options: [
        "Hire a security engineer to review the bucket contents",
        "Immediately block public access to the S3 bucket and assess if GDPR breach notification is required",
        "Encrypt the bucket contents",
        "Move the bucket to a different AWS region",
      ],
      correctAnswer:
        "Immediately block public access to the S3 bucket and assess if GDPR breach notification is required",
      explanation:
        "A publicly accessible S3 bucket containing customer PII is an active data exposure — every minute it is public, it may be indexed by search engines and accessed by anyone. Immediate containment (block public access) is the priority. Since EU customer data is involved, GDPR breach notification assessment (72-hour window) must happen simultaneously.",
    },
  },
];
