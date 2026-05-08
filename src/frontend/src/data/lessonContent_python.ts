// Python module: 35 scenario-based lessons for IT Fresher Hub
import type { LessonContent } from "@/types";

export const PYTHON_LESSONS: LessonContent[] = [
  {
    title: "What is Python? Your First Language",
    content:
      "<p>Rahul just got hired as a junior IT analyst at TechSolutions Pvt. Ltd. On his first day, his team lead Priya hands him a list of 500 employee names in a text file and says, 'Find everyone whose name starts with A and send me the count by lunch.' Rahul opens Notepad and stares at the file. Then his colleague Arjun leans over and types 10 lines of Python and gets the answer in 2 seconds. Rahul makes a decision: he's learning Python.</p><p>Python is a high-level, general-purpose programming language created by Guido van Rossum in 1991. 'High-level' means it reads almost like plain English — you write <code>print('Hello')</code> and it prints Hello. There's no need to manage memory manually or write pages of setup code. Python is interpreted, meaning you can run code line by line and see results instantly, which makes it perfect for learning and experimentation.</p><p>Companies use Python for everything: automating boring tasks (like Rahul's name search), building websites (Instagram runs on Python), analyzing data, creating AI models, and even controlling hardware. Whether you end up in development, testing, data analysis, or DevOps, Python is the Swiss Army knife every IT professional should have.</p>",
    funFact:
      "Python is named after Monty Python's Flying Circus, the British comedy show — not the snake. Guido van Rossum was reading scripts from the show while writing Python and wanted a name that was 'short, unique, and slightly mysterious.'",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question: "What makes Python a 'high-level' language?",
      options: [
        "It runs faster than other languages",
        "Its syntax reads close to plain English and hides low-level complexity",
        "It only works on high-end computers",
        "It was written by senior engineers",
      ],
      correctAnswer:
        "Its syntax reads close to plain English and hides low-level complexity",
      explanation:
        "High-level languages abstract away memory management and hardware details so you can focus on solving problems. Python's readable syntax is one of the main reasons it dominates beginner and professional programming alike.",
    },
  },
  {
    title: "Setting Up Python on Your Computer",
    content:
      "<p>Sneha is excited to start coding but completely lost when her senior tells her to 'set up a Python environment.' She's never installed a programming language before. Sound familiar? Let's walk through exactly what Sneha did — step by step — so you never feel lost at that stage.</p><p>First, visit python.org and download the latest stable version (3.x). During installation on Windows, check the box that says 'Add Python to PATH' — this is the most common mistake beginners make. Without it, your terminal won't know where Python is installed. On Mac, Python 3 comes pre-installed in newer versions, but it's still best to install the latest from python.org. Once installed, open your terminal (Command Prompt on Windows, Terminal on Mac) and type <code>python --version</code>. If you see something like <code>Python 3.11.4</code>, you're set.</p><p>Next, install VS Code (Visual Studio Code) — it's the most popular free code editor used by professionals worldwide. Install the Python extension inside VS Code for features like code highlighting, autocomplete, and debugging. Finally, open VS Code, create a file called <code>hello.py</code>, type <code>print('Hello World')</code>, and press the Run button. If you see Hello World in the terminal panel, congratulations — Sneha (and you) are officially Python developers.</p>",
    funFact:
      "VS Code went from zero to the world's most-used code editor in under 5 years after Microsoft released it in 2015. It has over 30,000 extensions in its marketplace — there's literally an extension for writing code in Klingon.",
    xpReward: 50,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "During Python installation on Windows, you must check the box that says 'Add Python to ___' to use it from the terminal.",
      correctAnswer: "PATH",
      explanation:
        "The PATH environment variable tells your operating system where to look for programs. Without adding Python to PATH, your terminal can't find the python command and you'll get a 'command not found' error.",
    },
  },
  {
    title: "Your First Python Script: Hello Corporate World",
    content:
      "<p>It's Rahul's second week at TechSolutions. His manager asks him to write a small script that prints a welcome message for new employees joining the system. It needs to show the company name, the employee name, and today's date. This is Rahul's first 'real' Python task. Here's exactly what he writes.</p><p>Every Python journey begins with <code>print()</code> — the function that displays output. But Rahul's script needs more than a static message. He uses Python's <code>datetime</code> module (a built-in toolbox) to get today's date: <code>from datetime import date</code> and then <code>today = date.today()</code>. His full script looks like: <code>name = 'Rahul'</code>, then <code>print(f'Welcome to TechSolutions, {name}!')</code> and <code>print(f'Your joining date is: {today}')</code>. The <code>f</code> before the string is called an f-string — it lets you embed variable values directly inside text using curly braces.</p><p>When Rahul runs the script, the terminal shows: <em>Welcome to TechSolutions, Rahul! Your joining date is: 2024-01-15</em>. His manager is impressed. 'You already know f-strings on week two?' she says. This is the power of understanding even the basics — it immediately makes you useful in a real workplace.</p>",
    funFact:
      "F-strings were introduced in Python 3.6 (released 2016) and quickly became the most popular way to format strings in Python. Before that, developers used awkward methods like <code>'Hello %s' % name</code> or <code>'Hello {}'.format(name)</code> — both much harder to read.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants to print 'Hello Priya' using a variable. Which code is correct?",
      options: [
        "print('Hello' + Priya)",
        "name = 'Priya' then print(f'Hello {name}')",
        "print(Hello {name})",
        "echo 'Hello Priya'",
      ],
      correctAnswer: "name = 'Priya' then print(f'Hello {name}')",
      explanation:
        "F-strings (formatted string literals) let you embed variables directly using curly braces inside a string prefixed with f. This is the cleanest and most Pythonic way to build dynamic strings.",
    },
  },
  {
    title: "Variables and Data Types in Python",
    content:
      "<p>Priya is building a simple employee tracking script. She needs to store an employee's name, age, salary, and whether they are active. In Python, storing data is done through variables — named containers that hold values. Unlike some languages, Python doesn't require you to declare the type upfront. You just write <code>name = 'Priya'</code> and Python figures out it's text.</p><p>Python's main data types: <strong>str</strong> (text, like <code>'Rahul'</code>), <strong>int</strong> (whole numbers, like <code>25</code>), <strong>float</strong> (decimals, like <code>45000.50</code>), and <strong>bool</strong> (True or False). Priya's script looks like: <code>employee_name = 'Arjun'</code>, <code>age = 27</code>, <code>salary = 52000.00</code>, <code>is_active = True</code>. To check what type a variable is, use <code>type(age)</code> — it returns <code>&lt;class 'int'&gt;</code>. This is incredibly useful for debugging when you get errors about wrong data types.</p><p>One common fresher mistake Priya had to correct in a colleague's code: mixing types without conversion. If someone types their age into a form, Python stores it as a string (<code>'27'</code>), not a number. Trying to do math on it gives an error. The fix: <code>age = int(input('Enter age: '))</code> — the <code>int()</code> function converts the string to a number. Understanding data types saves hours of debugging later.</p>",
    funFact:
      "Python uses 'duck typing' — if it walks like a duck and quacks like a duck, Python treats it like a duck. Technically this means Python checks what an object can DO rather than what TYPE it is. This flexibility is one of the reasons Python code is so concise.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun stores <code>score = '95'</code> from user input and tries <code>score + 5</code>. What happens?",
      options: [
        "It returns 100",
        "It returns '955'",
        "It raises a TypeError",
        "It returns 0",
      ],
      correctAnswer: "It raises a TypeError",
      explanation:
        "When input() captures data, it returns a string. You cannot add a string and an integer directly. The fix is <code>int(score) + 5</code> which converts '95' to the integer 95 before adding.",
    },
  },
  {
    title: "Working with Strings in Python",
    content:
      "<p>Sneha is tasked with cleaning a dataset of customer names imported from Excel. Some names have extra spaces, some are all lowercase, some mix upper and lower case. Her manager wants them all in Title Case (First Letter Capitalized) with no extra whitespace. This is a perfect job for Python's string methods.</p><p>Python strings come with a powerful toolkit built in. <code>'  rahul sharma  '.strip()</code> removes leading and trailing spaces — result: <code>'rahul sharma'</code>. <code>'rahul sharma'.title()</code> capitalizes the first letter of each word — result: <code>'Rahul Sharma'</code>. Other essential methods: <code>.upper()</code> makes everything UPPERCASE, <code>.lower()</code> makes it lowercase, <code>.replace('old', 'new')</code> swaps text, and <code>.split(',')</code> breaks a string into a list by a separator. Sneha's cleaning code: <code>clean_name = raw_name.strip().title()</code> — chaining methods one after another in a single line.</p><p>String slicing is another power tool: <code>name = 'Priya Sharma'</code> then <code>name[0:5]</code> returns <code>'Priya'</code> — you're extracting characters from index 0 to 4. Negative indexing works backwards: <code>name[-6:]</code> returns <code>'Sharma'</code>. Sneha also uses <code>len(name)</code> to count characters, useful for validating that names aren't too long for database fields. In one afternoon, she cleans 500 names that would've taken a manual worker two days.</p>",
    funFact:
      "Python strings are 'immutable' — once created, they can't be changed in place. When you do <code>name.upper()</code>, Python creates a brand new string in memory. This is why you must do <code>name = name.upper()</code> to save the change — the original variable still points to the old value otherwise.",
    xpReward: 65,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To remove extra spaces from both sides of a string in Python, use the string method <code>._____()</code>.",
      correctAnswer: "strip",
      explanation:
        "The .strip() method removes leading and trailing whitespace (spaces, tabs, newlines). Use .lstrip() for left-only or .rstrip() for right-only. It's essential for cleaning user input and imported data.",
    },
  },
  {
    title: "Numbers and Math Operations",
    content:
      "<p>Rahul is building a salary calculator for the HR team. He needs to compute basic salary, HRA (40% of basic), PF deduction (12% of basic), and net take-home pay. This is pure math — and Python handles it beautifully with its built-in arithmetic operators.</p><p>Python's math operators: <code>+</code> (add), <code>-</code> (subtract), <code>*</code> (multiply), <code>/</code> (divide, always returns a float), <code>//</code> (floor division, rounds down), <code>%</code> (modulo, returns remainder), and <code>**</code> (exponentiation). Rahul's salary script: <code>basic = 30000</code>, <code>hra = basic * 0.40</code>, <code>pf = basic * 0.12</code>, <code>net = basic + hra - pf</code>. Then <code>print(f'Net Salary: ₹{net:.2f}')</code> — the <code>:.2f</code> inside the f-string formats the number to exactly 2 decimal places. Output: <em>Net Salary: ₹33600.00</em>. HR is thrilled.</p><p>The <code>math</code> module extends Python's capabilities: <code>import math</code> then <code>math.sqrt(144)</code> returns <code>12.0</code>, <code>math.ceil(4.2)</code> returns <code>5</code>, <code>math.floor(4.9)</code> returns <code>4</code>. For random numbers — useful in testing — <code>import random</code> and <code>random.randint(1, 100)</code> gives a random integer between 1 and 100. These are the building blocks behind everything from salary tools to game logic to statistical models.</p>",
    funFact:
      "Python's <code>**</code> operator can calculate astronomically large numbers without overflow errors. Try <code>2 ** 1000</code> in a Python shell — it will give you the exact 302-digit answer. Most other languages would crash with an 'integer overflow' error on numbers that large.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question: "What does <code>17 % 5</code> return in Python?",
      options: ["3", "2", "3.4", "1"],
      correctAnswer: "2",
      explanation:
        "The % operator returns the remainder after division. 17 divided by 5 is 3 with a remainder of 2. So 17 % 5 = 2. This is called the modulo operator and is very useful for checking if a number is even/odd or for cycling through ranges.",
    },
  },
  {
    title: "Boolean Logic and Comparisons",
    content:
      "<p>Arjun is writing a script to automatically flag employees who are eligible for promotion. The rules: they must have over 2 years of experience AND a performance score above 80, OR be nominated by their manager. This is boolean logic — the foundation of all decision-making in code.</p><p>Python comparison operators return True or False: <code>==</code> (equal to), <code>!=</code> (not equal), <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>. Boolean operators combine conditions: <code>and</code> (both must be True), <code>or</code> (at least one must be True), <code>not</code> (reverses True to False). Arjun's eligibility check: <code>eligible = (years_exp > 2 and score > 80) or manager_nominated</code>. With <code>years_exp = 3</code>, <code>score = 75</code>, and <code>manager_nominated = True</code>, <code>eligible</code> becomes <code>True</code> because the second condition (manager_nominated) is True even though the first combined condition is False.</p><p>A subtle but critical point: Python evaluates boolean expressions using short-circuit logic. In <code>A and B</code>, if A is False, Python doesn't even check B — the whole thing is already False. In <code>A or B</code>, if A is True, Python skips B. This matters in production code: if A is a cheap check and B is an expensive database query, put A first. This kind of optimization thinking is what separates good developers from great ones.</p>",
    funFact:
      "The words 'True' and 'False' in Python are capitalized — unlike most languages where they're lowercase. This tripped up so many programmers that Python 2 originally allowed <code>True = False</code> to reassign them. Python 3 fixed this by making True and False reserved keywords that can't be overwritten.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya writes <code>x = 5</code>. What does <code>x > 3 and x < 10</code> return?",
      options: ["False", "True", "Error", "None"],
      correctAnswer: "True",
      explanation:
        "5 > 3 is True AND 5 < 10 is True. Since both conditions are True, the 'and' operator returns True. This is a common pattern for checking if a value falls within a range.",
    },
  },
  {
    title: "If/Else: Making Decisions in Code",
    content:
      "<p>Sneha's company has a leave approval system. If an employee has more than 5 leave days remaining, their request is auto-approved. If they have 1 to 5 days left, it goes to manager review. If they have 0 days, it's rejected with a message. Sneha is asked to write the logic. This is the classic if/elif/else structure — Python's way of making decisions.</p><p>The structure: <code>if condition:</code> runs if the condition is True. <code>elif another_condition:</code> (else if) runs if the first was False but this is True. <code>else:</code> runs if everything above was False. Sneha's code: <code>if leaves_remaining > 5: print('Auto-approved')</code>, <code>elif leaves_remaining >= 1: print('Sent to manager review')</code>, <code>else: print('Rejected — no leaves remaining')</code>. Python uses indentation (4 spaces) to define what's inside each block — there are no curly braces like in Java or JavaScript. Getting indentation wrong is a SyntaxError.</p><p>Nested if-else is also common: checking conditions inside conditions. But experienced developers avoid deep nesting (if inside if inside if) because it makes code hard to read. Instead, they use 'early returns' or combine conditions with <code>and</code>/<code>or</code>. When Sneha's first version had 4 levels of nesting, Arjun refactored it to 2. 'Flat is better than nested' — that's actually written in Python's official philosophy document, The Zen of Python.</p>",
    funFact:
      "Python has no switch/case statement (until Python 3.10 introduced 'match'). For years, Python developers used if/elif chains where other languages used switch. The new 'match' statement is far more powerful — it can match patterns, not just values.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In Python, the keyword used for 'else if' (checking a second condition if the first was False) is _____.",
      correctAnswer: "elif",
      explanation:
        "Python uses 'elif' (short for else if) instead of the 'else if' used in many other languages. You can have as many elif blocks as you need between the initial if and the final else.",
    },
  },
  {
    title: "For Loops: Automating Repetitive Tasks",
    content:
      "<p>Rahul has a list of 200 employee emails and needs to send each one a welcome message. Typing the same code 200 times would be insane. This is exactly what for loops are built for — executing the same block of code once for each item in a collection.</p><p>A for loop in Python: <code>for email in email_list:</code> then <code>    send_email(email, 'Welcome!')</code>. Python automatically takes each item from <code>email_list</code> one by one and assigns it to the variable <code>email</code>. When the list runs out, the loop stops. It's clean, readable, and handles 200 emails just as easily as 2. For loops work with any iterable — lists, tuples, strings, ranges, dictionaries, and more.</p><p>The <code>range()</code> function is a for-loop power tool: <code>for i in range(5):</code> runs 5 times with i being 0, 1, 2, 3, 4. <code>range(1, 101)</code> goes from 1 to 100. <code>range(0, 10, 2)</code> goes 0, 2, 4, 6, 8 (step of 2). In his onboarding automation, Rahul also uses <code>enumerate()</code>: <code>for index, email in enumerate(email_list):</code> gives both the position and the value. He prints: <code>print(f'Sending email {index+1} of {len(email_list)}')</code> so the HR team can see progress. From 200 manual emails to a 5-minute automated script — this is why companies want Python skills.</p>",
    funFact:
      "Python's for loop is actually a 'for-each' loop — it iterates over items directly, not over indices. This is opposite to C/Java-style for loops that count <code>i</code> from 0 to n. Python's approach is safer (no off-by-one errors) and more readable. The traditional <code>for(int i=0; i<n; i++)</code> style doesn't exist in Python.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question: "What does <code>range(2, 10, 3)</code> produce?",
      options: [
        "2, 3, 4, 5, 6, 7, 8, 9",
        "2, 5, 8",
        "3, 6, 9",
        "2, 4, 6, 8, 10",
      ],
      correctAnswer: "2, 5, 8",
      explanation:
        "range(start, stop, step) generates numbers starting at 2, stopping before 10, counting by 3. So: 2, 2+3=5, 5+3=8, 8+3=11 (too large, stop). Result: 2, 5, 8.",
    },
  },
  {
    title: "While Loops: Repeating Until a Condition",
    content:
      "<p>Priya is building a login system for an internal tool. Users get 3 attempts to enter the correct password. If they fail all 3, they're locked out. A for loop won't work well here — she doesn't just want to repeat 3 times regardless; she wants to repeat UNTIL either the password is correct OR attempts run out. This calls for a while loop.</p><p>A while loop runs as long as a condition is True: <code>attempts = 0</code>, <code>while attempts < 3:</code>, <code>    password = input('Enter password: ')</code>, <code>    if password == 'secure123': print('Access granted'); break</code>, <code>    attempts += 1</code>, <code>    print(f'Wrong. {3 - attempts} attempts left')</code>. After the loop: <code>if attempts == 3: print('Account locked')</code>. The <code>break</code> statement exits the loop immediately when the correct password is entered. The <code>+=</code> shorthand adds 1 to attempts (same as <code>attempts = attempts + 1</code>).</p><p>The most important rule with while loops: always ensure the condition will eventually become False, or include a <code>break</code>. An infinite loop (<code>while True:</code> without a break) will freeze your program and eat 100% CPU. Rahul learned this the hard way when his first while loop caused his laptop fan to sound like a jet engine. <code>continue</code> is another control keyword: it skips the rest of the current iteration and jumps back to the condition check — useful for skipping invalid inputs without breaking the entire loop.</p>",
    funFact:
      "The first recorded infinite loop in programming history was deliberate — early batch-processing systems used infinite loops to keep machines running continuously, waiting for jobs. Today, servers literally run in infinite loops (while True: listen for request) to stay alive — they just have proper break conditions built in.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question: "Which keyword immediately exits a while loop when executed?",
      options: ["exit", "stop", "break", "return"],
      correctAnswer: "break",
      explanation:
        "The 'break' statement immediately terminates the innermost loop. Execution jumps to the first line after the loop. It's commonly used when you've found what you're looking for and don't need to continue iterating.",
    },
  },
  {
    title: "Lists: Storing Multiple Values",
    content:
      "<p>Arjun is building a task tracker for his team. He needs to store multiple tasks, add new ones, remove completed ones, and check if a specific task exists. In Python, the go-to data structure for an ordered, changeable collection of items is the list.</p><p>Creating a list: <code>tasks = ['Fix bug #101', 'Review PR', 'Write tests', 'Deploy to staging']</code>. Access by index (starting at 0): <code>tasks[0]</code> returns <code>'Fix bug #101'</code>. <code>tasks[-1]</code> returns the last item. Add a task: <code>tasks.append('Update documentation')</code>. Remove a specific task: <code>tasks.remove('Review PR')</code>. Remove by index: <code>tasks.pop(2)</code> removes and returns the item at index 2. Check existence: <code>'Deploy to staging' in tasks</code> returns True or False. Get length: <code>len(tasks)</code>. Sort alphabetically: <code>tasks.sort()</code>. Reverse: <code>tasks.reverse()</code>.</p><p>Lists are versatile but come with a gotcha: they're mutable (changeable) and passed by reference. If Arjun does <code>backup = tasks</code> and then changes <code>tasks</code>, <code>backup</code> changes too — they point to the same list in memory. To make an independent copy: <code>backup = tasks.copy()</code> or <code>backup = tasks[:]</code>. Sneha caught this bug in Arjun's early code when a 'backup' list kept changing unexpectedly — it saved hours of debugging. Understanding references vs copies is a critical Python concept that trips up even experienced developers.</p>",
    funFact:
      "Python lists can hold mixed data types — <code>[1, 'hello', True, 3.14, None]</code> is valid. Most languages require all items to be the same type. This flexibility is powerful but means you need to be careful when doing operations on list items — checking types prevents unexpected errors.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To add an item to the end of a Python list called <code>tasks</code>, use <code>tasks._____(item)</code>.",
      correctAnswer: "append",
      explanation:
        "The .append() method adds a single item to the end of a list. If you want to add multiple items at once, use .extend(). If you want to insert at a specific position, use .insert(index, item).",
    },
  },
  {
    title: "Tuples and Sets: When to Use Them",
    content:
      "<p>Priya notices that in the employee system, some data should never change — like the company's founding year, the list of office locations, or predefined department codes. She also has a list of employee IDs where duplicates are meaningless and she only cares about unique values. For these scenarios, Python offers tuples and sets.</p><p>A <strong>tuple</strong> is like a list but immutable (can't be changed after creation): <code>office_locations = ('Mumbai', 'Bangalore', 'Delhi', 'Hyderabad')</code>. Uses parentheses instead of square brackets. Since it can't change, it's faster than a list and signals to other developers: 'this data is constant, don't try to modify it.' Tuples are perfect for fixed configurations, database records returned from queries, and function return values when returning multiple items.</p><p>A <strong>set</strong> stores only unique values in no particular order: <code>dept_ids = {101, 102, 103, 101, 102}</code> automatically becomes <code>{101, 102, 103}</code> — duplicates are dropped. Sneha uses this to deduplicate her email list: <code>unique_emails = set(email_list)</code>. Sets support math-like operations: <code>set1 & set2</code> (intersection — items in both), <code>set1 | set2</code> (union — all items), <code>set1 - set2</code> (difference — items in set1 but not set2). These operations are incredibly fast, making sets the right choice when checking membership in large collections. Arjun uses <code>employee_id in id_set</code> instead of searching through a list — it's instant regardless of set size.</p>",
    funFact:
      "Checking if an item exists in a set (e.g., <code>x in my_set</code>) runs in O(1) time — it's instant, no matter how large the set. Checking in a list (e.g., <code>x in my_list</code>) runs in O(n) time — it has to check every item. For a list of 1 million items, the set is millions of times faster.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha has <code>ids = [1, 2, 2, 3, 3, 3, 4]</code>. What does <code>len(set(ids))</code> return?",
      options: ["7", "4", "3", "1"],
      correctAnswer: "4",
      explanation:
        "Converting the list to a set removes all duplicates. The unique values are {1, 2, 3, 4} — that's 4 items. Using len() on the set gives 4.",
    },
  },
  {
    title: "Dictionaries: Key-Value Data Storage",
    content:
      "<p>Rahul needs to store detailed information about each employee — name, department, salary, and experience. Using a plain list doesn't work well because you'd need to remember that index 0 is name, index 1 is department, etc. Python's dictionary solves this elegantly with key-value pairs — like a real dictionary where you look up a word (key) to get its definition (value).</p><p>Creating a dictionary: <code>employee = {'name': 'Rahul', 'dept': 'Engineering', 'salary': 45000, 'years_exp': 2}</code>. Access by key: <code>employee['name']</code> returns <code>'Rahul'</code>. Safer access (no error if key missing): <code>employee.get('bonus', 0)</code> returns 0 if 'bonus' doesn't exist. Add/update: <code>employee['bonus'] = 5000</code>. Remove: <code>del employee['bonus']</code> or <code>employee.pop('bonus')</code>. Check if key exists: <code>'salary' in employee</code>. Loop through: <code>for key, value in employee.items():</code> gives both key and value together.</p><p>Dictionaries can be nested: <code>team = {'rahul': employee, 'priya': another_employee}</code>. This structure mirrors JSON — the universal data format used in APIs. When Rahul's company starts consuming data from an external HR API, the responses come back as Python dictionaries (after JSON parsing). Understanding dictionaries deeply means you'll immediately be productive working with real-world API data, database records, and configuration files from day one.</p>",
    funFact:
      "Python dictionaries maintain insertion order since Python 3.7. Before that, iterating over a dictionary gave keys in random order, causing endless bugs in code that relied on order. This was such a common pain point that Python officially changed the specification to guarantee order.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul does <code>emp = {'name': 'Priya', 'dept': 'QA'}</code>. What does <code>emp.get('salary', 0)</code> return?",
      options: ["None", "KeyError", "0", "''"],
      correctAnswer: "0",
      explanation:
        "The .get(key, default) method returns the value for the key if it exists, or the default value if it doesn't. Since 'salary' is not in the dictionary, it returns 0 instead of raising a KeyError like emp['salary'] would.",
    },
  },
  {
    title: "List Comprehensions: Pythonic Shortcuts",
    content:
      "<p>Sneha has a list of 1000 employee salaries and needs to create a new list containing only the salaries above ₹50,000, each multiplied by 1.1 (a 10% raise). Her first approach: create an empty list, loop through salaries, check condition, append to new list — 5 lines of code. Her senior Priya shows her to do it in one line using a list comprehension. Sneha's jaw drops.</p><p>List comprehensions condense a for loop + optional filter into a single line: <code>[expression for item in iterable if condition]</code>. Sneha's raise calculation: <code>raises = [s * 1.1 for s in salaries if s > 50000]</code>. This creates a new list of salaries above 50k with a 10% raise applied. Compared to the 5-line for loop, this is more readable and runs slightly faster (Python optimizes comprehensions internally). You can even transform: <code>names_upper = [name.upper() for name in names]</code> converts every name to uppercase in one line.</p><p>The same syntax works for dictionary comprehensions and set comprehensions: <code>{k: v*2 for k, v in prices.items()}</code> creates a new dict with all values doubled. <code>{name.lower() for name in name_list}</code> creates a set of lowercase unique names. The golden rule: use comprehensions when the logic is simple enough to fit comfortably on one line without sacrificing readability. If you find yourself squinting to understand it, switch back to a regular for loop — clarity beats cleverness every time.</p>",
    funFact:
      "List comprehensions in Python were inspired by mathematical set-builder notation: {x² | x ∈ ℕ, x < 10} (read: 'the set of x-squared for all natural numbers x less than 10'). Python's syntax reads almost the same way: <code>[x**2 for x in range(10)]</code>.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Complete this list comprehension to get all even numbers from 1 to 20: <code>[x for x in range(1, 21) if x ___ 2 == 0]</code>",
      correctAnswer: "%",
      explanation:
        "The modulo operator (%) returns the remainder of division. x % 2 == 0 is True when x is even (divisible by 2 with no remainder). So this comprehension collects [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].",
    },
  },
  {
    title: "Defining Your Own Functions",
    content:
      "<p>Arjun notices that his team's script calculates the same tax deduction formula in 7 different places. When the tax rate changes, someone has to update all 7 spots — and inevitably one gets missed, causing wrong calculations for weeks before anyone notices. Arjun's solution: define the calculation once as a function and call it everywhere. Fix it once, it's fixed everywhere.</p><p>Defining a function: <code>def calculate_tax(salary):</code> on the first line, then the body indented below. The <code>def</code> keyword declares a function. The name follows Python naming conventions (lowercase with underscores). Arjun's function: <code>def calculate_tax(salary):</code>, <code>    tax_rate = 0.12</code>, <code>    return salary * tax_rate</code>. Call it anywhere: <code>rahul_tax = calculate_tax(45000)</code>. Functions can do anything — calculations, printing, calling other functions, reading files. The <code>return</code> statement sends a value back to whoever called the function.</p><p>Functions enforce the DRY principle: Don't Repeat Yourself. Every experienced developer follows this rule ruthlessly. If you're copying and pasting code, that's a signal to create a function. Functions also make code testable — you can verify one function in isolation rather than testing the entire program. When Sneha later writes automated tests, each function becomes a test unit. Understanding functions deeply is the foundation for everything that comes next: modules, classes, APIs, and large codebases.</p>",
    funFact:
      "Python functions are 'first-class objects' — you can assign them to variables, pass them as arguments to other functions, and return them from functions. <code>double = lambda x: x*2</code> then <code>apply = double</code> then <code>apply(5)</code> returns 10. This enables powerful patterns like callbacks and decorators.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun writes <code>def greet(name): print(f'Hello {name}')</code> and calls <code>result = greet('Priya')</code>. What is the value of <code>result</code>?",
      options: ["'Hello Priya'", "None", "Priya", "Error"],
      correctAnswer: "None",
      explanation:
        "The function uses print() but has no return statement. In Python, a function without an explicit return statement returns None by default. To actually capture the string, the function would need: return f'Hello {name}'",
    },
  },
  {
    title: "Function Parameters and Return Values",
    content:
      "<p>Priya is building a reusable report generator. Different reports need different formats — some need a title, some need both title and subtitle, some need to specify the page width. She needs her function to be flexible. Python's function parameters offer several powerful ways to handle this: required parameters, default values, keyword arguments, and variable-length parameters.</p><p>Default parameters: <code>def generate_report(title, subtitle='', width=80):</code>. Now you can call it as <code>generate_report('Q4 Sales')</code> (uses defaults for subtitle and width), or <code>generate_report('Q4 Sales', width=120)</code> (skips subtitle, overrides width). Keyword arguments let you pass values by name in any order — crucial for functions with many parameters. Multiple return values: <code>def get_stats(data): return min(data), max(data), sum(data)/len(data)</code>. Call it: <code>lo, hi, avg = get_stats(scores)</code> — Python 'unpacks' the returned tuple into three variables simultaneously.</p><p><code>*args</code> and <code>**kwargs</code> are advanced patterns Arjun uses for his logging utility. <code>def log(*messages):</code> accepts any number of positional arguments — <code>log('step 1', 'step 2', 'step 3')</code> works fine. <code>def configure(**settings):</code> accepts any number of keyword arguments — <code>configure(color='red', width=100, bold=True)</code>. These patterns are used extensively in frameworks like Django and Flask where functions need to accept dynamic sets of options. Understanding them makes reading professional library documentation much easier.</p>",
    funFact:
      "Python's ability to return multiple values is actually a tuple under the hood. When you write <code>return a, b, c</code>, Python packs them into the tuple <code>(a, b, c)</code>. The unpacking assignment <code>x, y, z = function()</code> then splits the tuple back apart. This elegant behavior is used everywhere in Python code.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To accept any number of keyword arguments in a function, use <code>def func(**_____)</code> in the parameter definition.",
      correctAnswer: "kwargs",
      explanation:
        "**kwargs (keyword arguments) collects all extra keyword arguments into a dictionary. The name 'kwargs' is a convention — you could write **options or **params. Inside the function, kwargs is a regular dictionary you can iterate over.",
    },
  },
  {
    title: "Variable Scope: Local vs Global",
    content:
      "<p>Rahul runs into a mysterious bug: a variable called <code>counter</code> inside his function isn't updating the <code>counter</code> variable he defined at the top of the script. They seem like the same variable but they're not. His senior Sneha diagnoses it in seconds: 'You have a scope issue.' Understanding variable scope is essential for writing correct Python code.</p><p>A variable defined inside a function is <strong>local</strong> — it exists only while that function runs and is invisible outside. A variable defined at the top level of a script is <strong>global</strong> — visible everywhere. When Rahul writes <code>counter = 0</code> at the top and then inside a function does <code>counter = counter + 1</code>, Python creates a new local variable called counter instead of modifying the global one. The fix: add <code>global counter</code> as the first line inside the function, which tells Python to use the existing global variable.</p><p>However, Sneha's advice: avoid global variables whenever possible. They make code hard to understand and test — a function that modifies global state can cause unpredictable effects from anywhere in the program. Better approach: pass the value as a parameter and return the updated value. <code>def increment(counter): return counter + 1</code> then <code>counter = increment(counter)</code>. This 'pure function' style — same input always gives same output, no side effects — is what professional codebases use. It's also the foundation of functional programming, a paradigm that's gaining popularity in industry.</p>",
    funFact:
      "Python has four scope levels, remembered by the acronym LEGB: Local (inside current function), Enclosing (outer function if nested), Global (module level), Built-in (Python's own names like len and print). Python searches for variable names in this order — which is why you can't name a variable 'len' without shadowing the built-in function.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Inside a function, you want to modify a global variable <code>total</code>. What must you declare at the start of the function?",
      options: ["extern total", "global total", "public total", "shared total"],
      correctAnswer: "global total",
      explanation:
        "The 'global' keyword inside a function tells Python to use the global variable instead of creating a new local one. Without it, assigning to 'total' inside the function creates a brand-new local variable that disappears when the function ends.",
    },
  },
  {
    title: "Lambda Functions and Map/Filter",
    content:
      "<p>Arjun's data processing code is full of tiny one-line functions defined with <code>def</code>: functions like <code>def double(x): return x * 2</code> that he uses exactly once. His code reviewer Priya points out that for simple single-use functions, Python has a more concise syntax: lambda functions.</p><p>A lambda function is an anonymous (unnamed) single-expression function: <code>double = lambda x: x * 2</code>. This is equivalent to defining a <code>def</code> function but in one line. Lambdas are most powerful when combined with built-in functions: <code>map()</code> applies a function to every item in a list, returning a new iterable. <code>list(map(lambda x: x*2, [1,2,3,4]))</code> returns <code>[2, 4, 6, 8]</code>. <code>filter()</code> selects items where the function returns True: <code>list(filter(lambda x: x > 3, [1,2,3,4,5]))</code> returns <code>[4, 5]</code>.</p><p>Arjun uses <code>sorted()</code> with a lambda key to sort his employee list by salary: <code>sorted(employees, key=lambda emp: emp['salary'], reverse=True)</code> — this returns employees from highest to lowest salary in one line. The <code>key</code> parameter accepts any function that returns the value to sort by. Without lambda, you'd need to define a separate named function just for this. Lambdas are everywhere in professional Python: sorting, filtering, transforming data pipelines, and as callbacks in GUI frameworks. Recognizing and writing them fluently marks you as someone who's moved past beginner level.</p>",
    funFact:
      "Lambda calculus (the mathematical basis for lambda functions) was invented in the 1930s by Alonzo Church — decades before computers existed. Church was trying to formalize the concept of computation using functions alone. It later became the theoretical foundation for all functional programming languages.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What does <code>list(filter(lambda x: x % 2 == 0, [1,2,3,4,5,6]))</code> return?",
      options: ["[1,3,5]", "[2,4,6]", "[1,2,3,4,5,6]", "[0,2,4,6]"],
      correctAnswer: "[2,4,6]",
      explanation:
        "filter() keeps only the items where the function returns True. x % 2 == 0 is True for even numbers. So filter keeps 2, 4, 6 from the list and drops 1, 3, 5.",
    },
  },
  {
    title: "Python's Built-in Functions",
    content:
      "<p>Sneha discovers that many tasks she's been writing multi-line code for can be done in a single built-in function call. Python comes with over 60 built-in functions available without any import. Knowing these saves enormous amounts of time and makes code far more readable. This is the difference between writing code and writing Pythonic code.</p><p>Essential built-ins every IT professional should know: <code>len(x)</code> — length of strings, lists, dicts. <code>range(start, stop, step)</code> — generate sequences. <code>type(x)</code> — check data type. <code>int()</code>, <code>str()</code>, <code>float()</code>, <code>bool()</code> — convert between types. <code>input(prompt)</code> — get user input. <code>print(*args, sep=' ', end='\\n')</code> — display output. <code>max(iterable)</code>, <code>min(iterable)</code>, <code>sum(iterable)</code> — statistics in one call. <code>sorted(iterable, key, reverse)</code> — sort anything. <code>enumerate(iterable)</code> — get index+value pairs. <code>zip(a, b)</code> — pair items from two iterables. <code>isinstance(obj, type)</code> — check if object is a certain type. <code>abs(-5)</code> returns 5. <code>round(3.14159, 2)</code> returns 3.14.</p><p>Arjun's team regularly uses <code>zip()</code> to pair employee names with their IDs: <code>pairs = list(zip(names, ids))</code> creates a list of tuples like <code>[('Rahul', 101), ('Priya', 102)]</code>. He then loops: <code>for name, emp_id in pairs:</code>. This elegant pattern is used in data processing, matrix operations, and CSV handling. Building fluency with built-ins is one of the fastest ways to level up from 'Python beginner' to 'Python professional.'</p>",
    funFact:
      "Python's <code>id()</code> built-in returns the memory address of an object — it's unique for every object currently in memory. This is how Python's 'is' operator works: <code>a is b</code> checks if both variables point to the exact same memory location, not just if they have the same value. <code>a == b</code> checks value equality.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What does <code>list(zip([1,2,3], ['a','b','c']))</code> return?",
      options: [
        "[1,'a',2,'b',3,'c']",
        "[(1,'a'), (2,'b'), (3,'c')]",
        "[[1,'a'],[2,'b'],[3,'c']]",
        "Error",
      ],
      correctAnswer: "[(1,'a'), (2,'b'), (3,'c')]",
      explanation:
        "zip() pairs up corresponding elements from two (or more) iterables into tuples. The result is an iterator of tuples. Wrapping with list() materializes it. This is used constantly for pairing parallel data like names+scores or keys+values.",
    },
  },
  {
    title: "Reading Files in Python",
    content:
      "<p>Rahul receives a text file every Monday morning containing the previous week's server log. He needs to parse it, count how many ERROR lines there are, and report to his manager. Doing this manually would take 30 minutes every week. With Python file reading, it takes 30 seconds to write the script once — and then just one click every Monday forever.</p><p>Opening and reading a file in Python: <code>with open('server.log', 'r') as f:</code> then <code>    lines = f.readlines()</code>. The <code>with</code> statement is critical — it automatically closes the file when the block ends, even if an error occurs. Without it, unclosed files can cause memory leaks in long-running programs. The <code>'r'</code> mode means read-only. <code>f.read()</code> reads the entire file as one string. <code>f.readlines()</code> reads into a list where each item is one line. <code>f.readline()</code> reads one line at a time.</p><p>Rahul's error counter: <code>error_count = sum(1 for line in lines if 'ERROR' in line)</code>. But for very large log files (gigabytes), loading all lines into memory at once is impractical. The professional approach: iterate the file object directly: <code>for line in f:</code> — Python reads one line at a time, keeping memory usage minimal. Rahul also learns to handle encodings: <code>open('file.txt', 'r', encoding='utf-8')</code> prevents errors when files contain special characters. This detail has saved many a Monday morning in production environments.</p>",
    funFact:
      "The 'with' statement in Python implements the 'context manager protocol' — it calls special methods __enter__ and __exit__ automatically. File objects implement this protocol so they close themselves when the with block exits. You can create your own context managers for anything that needs setup/teardown: database connections, network sockets, locks, etc.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To safely open a file and ensure it closes automatically, use the <code>_____</code> statement: <code>with open('data.txt', 'r') as f:</code>",
      correctAnswer: "with",
      explanation:
        "The 'with' statement (context manager) ensures that resources like files are properly cleaned up regardless of whether the code inside completes successfully or raises an exception. It's the preferred way to handle file I/O in professional Python code.",
    },
  },
  {
    title: "Writing Files and CSV Handling",
    content:
      "<p>Priya's task: export a formatted report of all employees and their monthly KPIs into a CSV file so the HR team can open it in Excel. CSV (Comma Separated Values) is the universal data exchange format between systems — virtually every tool in existence can read and write it. Python's built-in <code>csv</code> module makes this straightforward.</p><p>Writing a text file: <code>with open('report.txt', 'w') as f:</code> then <code>    f.write('Monthly Report\\n')</code>. Mode <code>'w'</code> creates the file (or overwrites if it exists). Mode <code>'a'</code> appends to the end without overwriting. Writing a CSV: <code>import csv</code>, then <code>with open('employees.csv', 'w', newline='') as f:</code> (the <code>newline=''</code> prevents extra blank lines on Windows), <code>    writer = csv.writer(f)</code>, <code>    writer.writerow(['Name', 'Department', 'KPI Score'])</code> — the header row — then loop through employees and <code>    writer.writerow([emp['name'], emp['dept'], emp['kpi']])</code>.</p><p>Reading a CSV is equally simple: <code>reader = csv.DictReader(f)</code> reads each row as a dictionary where keys are the column headers. <code>for row in reader: print(row['Name'])</code>. Priya uses this to load the HR database dump every morning. CSV handling is a core skill in virtually every IT role — data analysis, automation, reporting, ETL processes, and system integrations all rely on it. Companies often exchange data between systems via CSV drops because it's universally supported, even between systems that have completely different data formats internally.</p>",
    funFact:
      "Despite being called 'Comma Separated Values,' CSV files don't always use commas. Microsoft Excel's regional settings often export CSV with semicolons in European countries (because commas are used as decimal separators there). This causes legendary data-import disasters when files move between regions. Always specify your delimiter explicitly: <code>csv.writer(f, delimiter=';')</code>.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun opens a file with mode <code>'a'</code>. What happens to existing content?",
      options: [
        "It is deleted and replaced",
        "It is preserved and new content is added at the end",
        "The file becomes read-only",
        "An error is raised if the file exists",
      ],
      correctAnswer: "It is preserved and new content is added at the end",
      explanation:
        "Mode 'a' (append) opens the file for writing but starts writing at the END of the file. Existing content is untouched. This is used for log files where you want to keep adding new entries without losing history. Mode 'w' would overwrite everything.",
    },
  },
  {
    title: "Working with JSON Data",
    content:
      "<p>Sneha's team integrates their internal HR system with an external benefits platform. The benefits platform sends employee eligibility data as JSON via their API. Sneha needs to parse this JSON, extract specific fields, and update the internal database. JSON (JavaScript Object Notation) is the internet's universal data language — almost every web API communicates using it.</p><p>Python's <code>json</code> module bridges JSON and Python seamlessly. JSON objects become Python dictionaries, JSON arrays become lists, true/false become True/False. Reading JSON from a string: <code>import json</code>, then <code>data = json.loads(json_string)</code> — the 's' in loads means 'from string.' Reading from a file: <code>with open('data.json') as f: data = json.load(f)</code> — no 's'. Writing Python data to JSON string: <code>json.dumps(data, indent=2)</code> — the 's' in dumps means 'to string,' and <code>indent=2</code> makes it human-readable. Writing to file: <code>json.dump(data, f, indent=2)</code>.</p><p>Sneha's API response parsing: <code>response_text = api_call.text</code>, <code>employees = json.loads(response_text)</code>, then <code>for emp in employees: if emp['eligible']: add_to_benefits(emp['id'], emp['plan'])</code>. A common gotcha: dates in JSON are strings, not Python date objects. <code>'2024-01-15'</code> needs to be converted: <code>from datetime import datetime; dt = datetime.strptime(emp['join_date'], '%Y-%m-%d')</code>. Understanding the JSON-Python bridge is essential for any modern IT role — APIs, microservices, config files, and data pipelines all speak JSON.</p>",
    funFact:
      "JSON was invented by Douglas Crockford around 2001 as a lightweight alternative to XML for data exchange. It's based on JavaScript syntax but is now language-independent. The entire concept was so simple that Crockford said he didn't invent JSON — he just 'discovered' it, pointing out that JavaScript objects already worked this way.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "To convert a Python dictionary to a JSON-formatted string, which function do you use?",
      options: ["json.load()", "json.loads()", "json.dump()", "json.dumps()"],
      correctAnswer: "json.dumps()",
      explanation:
        "json.dumps() (dump to string) converts a Python object to a JSON string. json.dump() writes to a file. json.loads() parses a JSON string into Python. json.load() reads from a file. The 's' at the end always means working with strings, not files.",
    },
  },
  {
    title: "Importing Modules: Using Python's Library",
    content:
      "<p>Rahul is amazed to discover that almost everything he needs to do — send emails, work with dates, generate random data, do complex math, work with files and folders, make HTTP requests — Python already has a library for it. He doesn't need to write everything from scratch. This is the power of Python's standard library and the wider Python ecosystem.</p><p>Python's standard library (comes pre-installed): <code>os</code> — interact with the operating system (list directories, check if files exist, get environment variables). <code>datetime</code> — work with dates and times. <code>json</code> — parse and create JSON. <code>csv</code> — read and write CSV files. <code>math</code> — advanced math functions. <code>random</code> — generate random data. <code>re</code> — regular expressions for pattern matching. <code>sys</code> — access Python interpreter internals. <code>time</code> — time-related functions including <code>time.sleep(seconds)</code> for pauses.</p><p>Import syntax options: <code>import os</code> (use as <code>os.path.exists()</code>), <code>from os import path</code> (use as <code>path.exists()</code> directly), <code>from datetime import datetime, date</code> (import specific names), <code>import numpy as np</code> (alias — now use <code>np.array()</code>). Rahul's daily script uses <code>os.listdir('logs/')</code> to get all files in the logs folder, <code>datetime.now()</code> to timestamp his report, and <code>os.path.join()</code> to build file paths correctly across Windows/Mac/Linux (never hardcode path separators!). Knowing the standard library saves days of work every month.</p>",
    funFact:
      "Python's standard library is so extensive it's called 'batteries included' — you can do almost anything without installing third-party packages. The official Python documentation lists 200+ standard library modules. Compare this to Node.js, which ships with a much smaller core and relies heavily on npm packages for basic functionality.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To get the current date and time in Python, you import from the <code>datetime</code> module and call <code>datetime._____()</code>.",
      correctAnswer: "now",
      explanation:
        "datetime.now() returns the current local date and time as a datetime object. You can format it with strftime(): datetime.now().strftime('%Y-%m-%d %H:%M:%S') gives a readable timestamp string like '2024-01-15 09:30:00'.",
    },
  },
  {
    title: "Creating Your Own Python Module",
    content:
      "<p>Arjun's team has grown from 3 to 12 developers. Everyone is writing the same utility functions — date formatters, salary calculators, employee validators — in their own scripts. When the validation logic changes, someone has to update 8 different files. Arjun proposes a shared module: one file containing all common utilities, imported by everyone. This is how professional Python projects are organized.</p><p>Creating a module is simply creating a <code>.py</code> file with useful functions. Arjun creates <code>hr_utils.py</code>: <code>def format_employee_name(name): return name.strip().title()</code>, <code>def calculate_net_salary(basic): return basic + (basic * 0.40) - (basic * 0.12)</code>, <code>def validate_email(email): return '@' in email and '.' in email.split('@')[1]</code>. Now any script in the same folder can do: <code>from hr_utils import calculate_net_salary, format_employee_name</code> and use them directly.</p><p>The <code>if __name__ == '__main__':</code> block at the bottom of a module is a Python idiom every professional must know. Code inside this block runs only when the file is executed directly, not when it's imported. Arjun adds test code there: <code>if __name__ == '__main__': print(calculate_net_salary(50000))</code> — this lets him test the module by running it directly while ensuring the test code doesn't execute when other scripts import it. Python packages (folders containing multiple modules with an <code>__init__.py</code> file) extend this concept to larger projects — the same principle that underlies every Python framework and library you'll ever use.</p>",
    funFact:
      "The <code>if __name__ == '__main__'</code> pattern works because Python sets the special variable __name__ to '__main__' only when a file is run directly. When imported, __name__ is set to the module's filename (without .py). This elegant mechanism lets every Python file serve dual purpose: a reusable library AND a runnable script.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Code inside <code>if __name__ == '__main__':</code> runs when:",
      options: [
        "The file is imported by another script",
        "The file is executed directly",
        "The function is called",
        "Python starts up",
      ],
      correctAnswer: "The file is executed directly",
      explanation:
        "When you run a Python file directly (python my_file.py), Python sets __name__ to '__main__'. When the same file is imported elsewhere, __name__ is set to the module name. This lets you write test/demo code that only runs when you intend it to.",
    },
  },
  {
    title: "Error Handling with Try/Except",
    content:
      "<p>Priya's data processing script runs beautifully on test data. On production day, it crashes on line 47 with a <code>FileNotFoundError</code> because one employee's linked document doesn't exist. The whole batch fails. A junior dev spent three hours finding that one missing file. Priya rewrites the script with proper error handling so it logs the problematic records and continues processing the rest — professional-grade resilience.</p><p>Python's error handling uses try/except blocks: code that might fail goes in <code>try:</code>, and what to do if it fails goes in <code>except:</code>. Priya's fix: <code>try:</code>, <code>    with open(filepath) as f: data = f.read()</code>, <code>except FileNotFoundError:</code>, <code>    log_error(f'File not found: {filepath}')</code>, <code>    continue</code>. Multiple exception types: <code>except (ValueError, TypeError) as e: print(f'Data error: {e}')</code>. The <code>else:</code> clause runs if no exception occurred. The <code>finally:</code> clause always runs — perfect for cleanup like closing database connections: <code>finally: db.close()</code>.</p><p>Catching specific exceptions rather than a bare <code>except:</code> is critical. A bare <code>except:</code> catches everything including keyboard interrupts and system exits — your program won't stop even when you press Ctrl+C. Best practice: catch the specific exception you expect, log it with enough context to debug later, and decide whether to continue or raise the error. <code>raise</code> re-raises the current exception if you want calling code to handle it instead. Production Python code lives and dies by its error handling quality — fragile scripts cause 3am wake-up calls for on-call engineers.</p>",
    funFact:
      "Python's exception hierarchy is a class tree. All exceptions inherit from BaseException. The most common exceptions — FileNotFoundError, ValueError, TypeError, KeyError — all inherit from Exception. This means <code>except Exception</code> catches most errors but not system-level ones like SystemExit and KeyboardInterrupt, which is why it's considered safer than bare <code>except:</code>.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Which try/except clause ALWAYS runs, whether an exception occurred or not?",
      options: ["except", "else", "finally", "always"],
      correctAnswer: "finally",
      explanation:
        "The 'finally' clause executes regardless of whether an exception was raised, caught, or if no exception occurred at all. It's used for cleanup operations (closing files, database connections, releasing locks) that must happen no matter what.",
    },
  },
  {
    title: "Classes and Objects: OOP Basics",
    content:
      "<p>Sneha's HR system is getting complex. She has functions like <code>get_employee_name()</code>, <code>calculate_employee_salary()</code>, <code>promote_employee()</code> — all operating on employee data dictionaries. Her code reviewer Arjun suggests: 'Why not group the data and the functions that operate on it together? That's what classes are for.' This is the foundation of Object-Oriented Programming (OOP).</p><p>A class is a blueprint for creating objects. An object bundles data (attributes) and behavior (methods) together. Sneha's Employee class: <code>class Employee:</code>, <code>    def __init__(self, name, dept, salary):</code> (the constructor, called when creating an object), <code>        self.name = name</code>, <code>        self.dept = dept</code>, <code>        self.salary = salary</code>. Now <code>def get_summary(self):</code>, <code>        return f'{self.name} - {self.dept} - ₹{self.salary}'</code>. Creating an employee object: <code>emp1 = Employee('Rahul', 'Engineering', 45000)</code>. Calling the method: <code>emp1.get_summary()</code> returns <code>'Rahul - Engineering - ₹45000'</code>.</p><p><code>self</code> is the reference to the specific instance — it's what makes each object's data separate even though they share the same class. When you have <code>emp1 = Employee('Rahul', ...)</code> and <code>emp2 = Employee('Priya', ...)</code>, they're both Employee objects but have completely independent data. OOP shines when you need many instances of the same kind of thing: employees, products, transactions, users. The real power comes with inheritance and polymorphism — concepts that enable reusing and extending code without duplication.</p>",
    funFact:
      "Python was designed to support multiple programming paradigms — procedural, OOP, and functional — without forcing you into any one style. Guido van Rossum has said he views Python as a 'pragmatic language' where you pick the right tool for each problem. Many Python scripts never use classes at all and are perfectly professional — unlike Java, where everything must be a class.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In a Python class, the special method <code>__init__</code> is called the _____, and it runs automatically when a new object is created.",
      correctAnswer: "constructor",
      explanation:
        "The __init__ method (pronounced 'dunder init') is the constructor — it initializes the object's attributes when it's created. The 'self' parameter is automatically passed Python and refers to the specific instance being created. Every attribute you want the object to have should be set here.",
    },
  },
  {
    title: "Constructors and Instance Variables",
    content:
      "<p>Rahul is expanding the Employee class into a full HR system. Each employee needs attributes like name, department, salary, join date, and performance rating. He also needs a way to give all employees in the same department a default meeting schedule. This requires understanding the difference between instance variables (unique per object) and class variables (shared by all objects of the class).</p><p>Instance variables are set with <code>self.variable = value</code> in <code>__init__</code> — they belong to each specific object. Class variables are defined directly in the class body (outside methods) and shared by all instances: <code>class Employee:</code>, <code>    company_name = 'TechSolutions'</code>, <code>    employee_count = 0</code>, <code>    def __init__(self, name, salary):</code>, <code>        self.name = name</code>, <code>        self.salary = salary</code>, <code>        Employee.employee_count += 1</code>. Every time a new employee is created, the class-level counter increments. Access it via any instance (<code>emp1.employee_count</code>) or the class itself (<code>Employee.employee_count</code>).</p><p>Constructors can have default values: <code>def __init__(self, name, salary, dept='General'):</code>. If dept isn't provided at creation, it defaults to 'General'. Rahul also learns about <code>__str__</code> — another dunder method that defines how an object looks when printed: <code>def __str__(self): return f'Employee: {self.name}'</code>. Now <code>print(emp1)</code> shows <code>Employee: Rahul</code> instead of the cryptic <code>&lt;__main__.Employee object at 0x7f...&gt;</code>. These quality-of-life improvements make class-based code genuinely pleasant to work with.</p>",
    funFact:
      "Python's dunder (double underscore) methods like __init__, __str__, __len__, __add__ are called 'magic methods' or 'special methods.' By implementing them in your classes, you can make your objects work with Python's built-in syntax: if you implement __len__, your object supports len(). If you implement __add__, your objects support the + operator. This is how NumPy arrays support <code>arr1 + arr2</code>.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya defines <code>company = 'TechSolutions'</code> directly inside a class body (not inside a method). This is a _____ variable.",
      options: ["local", "instance", "class", "global"],
      correctAnswer: "class",
      explanation:
        "Variables defined directly in the class body (outside any method) are class variables — shared by all instances. Instance variables are created with 'self.variable = value' inside methods. Changing a class variable affects all objects that haven't overridden it individually.",
    },
  },
  {
    title: "Inheritance: Reusing Code Smartly",
    content:
      "<p>Sneha's HR system now has three employee types: regular employees, managers, and interns. Managers have everything a regular employee has, plus a team size and a budget. Interns have a fixed stipend and a graduation date. Writing three completely separate classes would mean massive duplication. Inheritance solves this: define common behavior once in a parent class, then extend it in child classes.</p><p>Inheritance in Python: <code>class Manager(Employee):</code> — Manager inherits everything from Employee. The constructor: <code>def __init__(self, name, salary, team_size):</code>, <code>    super().__init__(name, salary)</code> — <code>super()</code> calls the parent's __init__ to set up the inherited attributes, then add the new ones: <code>    self.team_size = team_size</code>. Now Manager has name, salary (from Employee) AND team_size. Add Manager-specific methods: <code>def conduct_review(self): return f'{self.name} reviews {self.team_size} employees'</code>.</p><p>The same pattern for Intern: <code>class Intern(Employee):</code>, calling <code>super().__init__(name, stipend)</code> then adding <code>self.graduation_year = graduation_year</code>. Sneha can now write a function that accepts any employee type: <code>def print_summary(emp: Employee):</code> — this function works whether emp is an Employee, Manager, or Intern, because they all have the inherited attributes and methods. Python checks inheritance with <code>isinstance(manager1, Employee)</code> which returns True even though manager1 is a Manager instance. This is the foundation of polymorphism — code that works with any object of a compatible type.</p>",
    funFact:
      "Python supports multiple inheritance — a class can inherit from multiple parent classes simultaneously: <code>class C(A, B):</code>. This is powerful but comes with complexity when both parents define the same method. Python resolves conflicts using the MRO (Method Resolution Order), which you can inspect with <code>ClassName.__mro__</code>. Most professional code avoids multiple inheritance except for mixins — small classes designed specifically to be mixed in.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Inside a child class's __init__, to call the parent class's __init__, use <code>_____().__init__(args)</code>.",
      correctAnswer: "super",
      explanation:
        "super() returns a proxy object that delegates method calls to the parent class. super().__init__() is the standard way to call the parent constructor, ensuring the inherited attributes are initialized before you add the child-specific ones.",
    },
  },
  {
    title: "Polymorphism and Encapsulation",
    content:
      "<p>Arjun is building a payroll system that processes different employee types. The calculation logic differs: regular employees get basic + HRA, managers get basic + HRA + management allowance, interns get a fixed stipend. He doesn't want 'if isinstance(emp, Manager)' checks scattered through the code. The OOP solution: polymorphism — each class defines its own version of the same method, and Python calls the right one automatically.</p><p>Polymorphism via method overriding: each class defines <code>def calculate_pay(self):</code> with its own logic. Employee: <code>return self.salary * 1.4</code>. Manager: <code>return self.salary * 1.4 + 10000</code>. Intern: <code>return self.stipend</code>. Now Arjun's payroll loop: <code>for emp in all_employees: print(emp.calculate_pay())</code> — Python automatically calls each object's own version of <code>calculate_pay</code>. No if/elif chains needed. Adding a new employee type doesn't change the loop at all — just define the new class with its own <code>calculate_pay</code>.</p><p>Encapsulation protects data from direct external modification. Python convention: prefix attributes with underscore to signal 'private': <code>self._salary = salary</code>. Double underscore causes name mangling: <code>self.__salary</code> becomes inaccessible as <code>emp.__salary</code> externally. Use properties for controlled access: <code>@property def salary(self): return self._salary</code> and <code>@salary.setter def salary(self, value): if value > 0: self._salary = value</code>. Now <code>emp.salary = -1000</code> is silently rejected. This is professional-grade data protection — the same pattern used in Django models, SQLAlchemy, and every serious Python framework.</p>",
    funFact:
      "Python's approach to private attributes is sometimes called 'we're all adults here' — it uses convention (underscore prefix) rather than strict enforcement. The philosophy: good programmers follow conventions. If someone ignores the underscore convention and directly accesses _private attributes, that's their problem to debug when the internals change. This contrasts with Java's hard enforcement via private/public keywords.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Different classes define the same method name with different logic. Calling that method on different objects executes their own version. This concept is called:",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
      correctAnswer: "Polymorphism",
      explanation:
        "Polymorphism means 'many forms' — the same method name behaves differently depending on the type of object it's called on. It eliminates type-checking if/elif chains and makes code extensible: adding new types doesn't require changing existing code.",
    },
  },
  {
    title: "Making API Calls with the requests Library",
    content:
      "<p>Priya's team needs live weather data for their logistics application — drivers need to know if it's safe to travel a certain route. Weather data comes from an external weather API. Her task: write Python code that calls the API, parses the response, and returns the temperature and conditions for a given city. This is her introduction to real-world API integration using the <code>requests</code> library.</p><p>Install requests: <code>pip install requests</code>. Making a GET request: <code>import requests</code>, <code>response = requests.get('https://api.weather.com/v1/current?city=Mumbai&key=YOUR_KEY')</code>. Check if it succeeded: <code>response.status_code == 200</code> (200 means OK). Parse JSON response: <code>data = response.json()</code> — this converts the response body from JSON to a Python dictionary automatically. Access the data: <code>temp = data['current']['temp_c']</code>, <code>condition = data['current']['condition']['text']</code>.</p><p>Error handling for API calls is non-negotiable in production: <code>try: response = requests.get(url, timeout=10)</code> — always include a timeout to prevent your program from hanging indefinitely if the server doesn't respond. <code>response.raise_for_status()</code> raises an HTTPError for 4xx/5xx responses. <code>except requests.ConnectionError: print('Network issue')</code>, <code>except requests.Timeout: print('Request timed out')</code>. For APIs that require authentication, pass headers: <code>requests.get(url, headers={'Authorization': 'Bearer TOKEN'})</code>. POST requests for sending data: <code>requests.post(url, json={'key': 'value'})</code>. These patterns handle 95% of all API integrations you'll encounter.</p>",
    funFact:
      "The requests library is so well-designed that its documentation famously begins: 'Requests is the only Non-GMO HTTP library for Python, safe for human consumption.' It was created by Kenneth Reitz in 2011 and has been downloaded over 500 million times — making it one of the most-installed Python packages ever. Its motto: 'HTTP for Humans.'",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "After a successful API call, <code>response = requests.get(url)</code>, how do you parse the JSON response into a Python dictionary?",
      options: [
        "json.loads(response)",
        "response.json()",
        "response.text()",
        "parse_json(response)",
      ],
      correctAnswer: "response.json()",
      explanation:
        "The requests Response object has a .json() method that automatically parses the response body as JSON and returns a Python dictionary or list. It's equivalent to json.loads(response.text) but cleaner and handles encoding automatically.",
    },
  },
  {
    title: "Data Analysis with pandas",
    content:
      "<p>Rahul's company has 5 years of sales data in a CSV — 100,000 rows, 15 columns. The analytics team asks: which region has the highest average sale value? Which product category declined in Q3? What's the month-over-month growth? Answering these in plain Python would take hundreds of lines. With pandas, Rahul writes each answer in 2-3 lines. This is why data analysts and engineers reach for pandas every single day.</p><p>Install: <code>pip install pandas</code>. Load data: <code>import pandas as pd</code>, <code>df = pd.read_csv('sales.csv')</code>. The result is a DataFrame — a powerful table structure. Explore it: <code>df.head()</code> shows the first 5 rows. <code>df.info()</code> shows column names, data types, and null counts. <code>df.describe()</code> gives statistical summary (mean, min, max, etc.). Filter rows: <code>df[df['region'] == 'South']</code>. Select column: <code>df['sale_value']</code>. Group and aggregate: <code>df.groupby('region')['sale_value'].mean()</code> — this one line answers 'average sale by region.'</p><p>More power: <code>df.sort_values('sale_value', ascending=False).head(10)</code> shows top 10 sales. <code>df['month'] = pd.to_datetime(df['date']).dt.month</code> extracts month from date column. <code>df.pivot_table(values='sale_value', index='month', columns='category', aggfunc='sum')</code> creates a pivot table like Excel. <code>df.to_csv('output.csv', index=False)</code> saves results. Rahul answers all three questions in 15 minutes of pandas work — what used to require an Excel expert and half a day now takes a lunch break. This is the skill that gets freshers promoted to data analyst roles.</p>",
    funFact:
      "The name 'pandas' comes from 'PANel DAta System' — a term from econometrics for multidimensional structured data sets. Its creator, Wes McKinney, built the first version in 2008 while working at a hedge fund, needing a better tool for financial data analysis. He open-sourced it and it became one of the most transformative tools in data science history.",
    xpReward: 90,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To load a CSV file into a pandas DataFrame, use <code>df = pd.read_csv('_____')</code> where the argument is the filename.",
      correctAnswer: "filename.csv",
      explanation:
        "pd.read_csv() is one of the most-used functions in data analysis. It reads a CSV file and returns a DataFrame. You can also use pd.read_excel() for Excel files, pd.read_json() for JSON, and pd.read_sql() for database queries — all returning DataFrames ready for analysis.",
    },
  },
  {
    title: "Data Visualization with matplotlib",
    content:
      "<p>After Rahul's pandas analysis reveals regional sales trends, his manager wants charts for the board presentation. 'Can you make a bar chart comparing regions, and a line graph showing monthly trend?' Rahul reaches for matplotlib — Python's foundational visualization library that powers everything from simple charts to publication-quality scientific figures.</p><p>Install: <code>pip install matplotlib</code>. Basic line plot: <code>import matplotlib.pyplot as plt</code>, <code>months = [1,2,3,4,5,6]</code>, <code>sales = [120000, 135000, 98000, 145000, 162000, 180000]</code>, <code>plt.plot(months, sales, marker='o', color='blue', linewidth=2)</code>, <code>plt.title('Monthly Sales 2024')</code>, <code>plt.xlabel('Month')</code>, <code>plt.ylabel('Sales (₹)')</code>, <code>plt.grid(True)</code>, <code>plt.savefig('sales_trend.png', dpi=150, bbox_inches='tight')</code>. The figure is saved as a PNG ready for presentation.</p><p>Bar chart for regions: <code>regions = ['North', 'South', 'East', 'West']</code>, <code>avg_sales = [145000, 178000, 122000, 165000]</code>, <code>plt.bar(regions, avg_sales, color=['#2196F3','#4CAF50','#FF9800','#9C27B0'])</code>. Subplots for multiple charts in one figure: <code>fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))</code> then plot on ax1 and ax2 separately. Real-world tip: save figures as PNG for reports, PDF for print. Rahul's board presentation impresses the CEO, who asks: 'Your team built this analysis tool?' Rahul smiles — it was 40 lines of Python. Matplotlib combined with pandas is the foundation of every BI (Business Intelligence) dashboard that doesn't use a paid tool.</p>",
    funFact:
      "Matplotlib was originally created in 2003 by John D. Hunter to replicate MATLAB's plotting capabilities in Python (hence the 'mat' prefix). Hunter passed away in 2012, and the community named the annual John Hunter Excellence in Plotting Contest in his honor. His original goal — make scientific visualization free and accessible — has been achieved spectacularly.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "To save a matplotlib chart as an image file, which function do you use?",
      options: ["plt.save()", "plt.export()", "plt.savefig()", "plt.write()"],
      correctAnswer: "plt.savefig()",
      explanation:
        "plt.savefig('filename.png') saves the current figure to a file. Common arguments: dpi (dots per inch — 150-300 for quality), bbox_inches='tight' (removes extra whitespace), format='pdf'/'png'/'svg'. Call it BEFORE plt.show() or plt.close().",
    },
  },
  {
    title: "Web Scraping Basics with BeautifulSoup",
    content:
      "<p>Sneha's manager asks her to compile a competitive analysis — collect product names and prices from a competitor's public website. The website doesn't have an API. Doing it manually would take days. Web scraping lets Python visit the website, read the HTML, and extract exactly the data she needs — all automatically.</p><p>Install: <code>pip install requests beautifulsoup4</code>. Fetch the page: <code>import requests; from bs4 import BeautifulSoup</code>, <code>response = requests.get('https://example-store.com/products')</code>, <code>soup = BeautifulSoup(response.text, 'html.parser')</code>. Now soup is a searchable representation of the HTML. Find elements: <code>soup.find('h1')</code> returns the first h1 tag. <code>soup.find_all('div', class_='product-card')</code> returns all product cards. Extract text: <code>card.find('span', class_='price').text.strip()</code>. Store in a list: <code>products = [{'name': card.find('h2').text, 'price': card.find('.price').text} for card in cards]</code>.</p><p>Important professional ethics and legality: always check a website's <code>robots.txt</code> file (e.g., <code>example.com/robots.txt</code>) — it specifies what automated access is allowed. Don't overload servers: add <code>time.sleep(1)</code> between requests. Never scrape personal data without clear legal basis. Use official APIs when available — they're faster and more reliable. Sneha's script runs overnight, collects 2000 product records, and saves them to CSV. Her manager presents the analysis the next morning, completely unaware of how it was collected. This is one of the most practically impactful Python skills in modern business.</p>",
    funFact:
      "The name 'BeautifulSoup' comes from a poem in Lewis Carroll's Alice's Adventures in Wonderland: 'Beautiful Soup, so rich and green, Waiting in a hot tureen!' The library's creator, Leonard Richardson, chose the name because the library turns messy, malformed HTML (a 'tag soup') into something beautiful and navigable.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "After parsing HTML with BeautifulSoup, to find ALL elements with class 'product', you use:",
      options: [
        "soup.find('product')",
        "soup.find_all(class_='product')",
        "soup.select_all('.product')",
        "soup.get_all('product')",
      ],
      correctAnswer: "soup.find_all(class_='product')",
      explanation:
        "soup.find_all() returns a list of ALL matching elements. soup.find() returns only the FIRST match. The class_ parameter (with underscore) is used because 'class' is a reserved Python keyword. You can also use soup.select('.product') with CSS selector syntax.",
    },
  },
  {
    title: "Python for Automation: Real Scripts",
    content:
      "<p>Arjun is the unofficial 'script guy' on his team. Every Monday, he runs a script that: backs up all config files to a timestamped folder, checks which services are running, sends a Slack summary to the team channel, and generates a weekly PDF report. What used to take a senior engineer 90 minutes every Monday now runs automatically at 8am while Arjun is still on his commute. This is Python automation at its most valuable.</p><p>File system automation with <code>os</code> and <code>shutil</code>: <code>import os, shutil</code>. <code>os.makedirs('backup/2024-01-15', exist_ok=True)</code> creates a timestamped backup folder. <code>shutil.copy('config.yaml', 'backup/2024-01-15/')</code> copies the file. Loop through all configs: <code>for f in os.listdir('configs/'): shutil.copy(f'configs/{f}', backup_dir)</code>. The <code>subprocess</code> module runs shell commands from Python: <code>import subprocess; result = subprocess.run(['systemctl', 'status', 'nginx'], capture_output=True, text=True)</code>. <code>result.stdout</code> contains the command output as a string you can parse and analyze.</p><p>Scheduling: the <code>schedule</code> library (pip install schedule) lets scripts run on a timer: <code>import schedule; schedule.every().monday.at('08:00').do(run_weekly_backup)</code>, then <code>while True: schedule.run_pending(); time.sleep(60)</code>. For production environments, use cron jobs (Linux) or Windows Task Scheduler instead. Arjun's automation portfolio on GitHub — a collection of these practical scripts — gets more recruiter attention than his formal qualifications. 'Show me scripts that solve real problems' is what senior engineers want to see from candidates.</p>",
    funFact:
      "Amazon has a term for toil — repetitive manual operational work that could be automated. They explicitly measure how much time each team spends on toil and set a target of no more than 50% of an engineer's time. The other 50% must go to improving systems. Python automation scripts are the primary weapon against toil in IT operations teams worldwide.",
    xpReward: 90,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To copy a file in Python using the shutil module, use <code>shutil._____(source, destination)</code>.",
      correctAnswer: "copy",
      explanation:
        "shutil.copy(src, dst) copies a file from source to destination. shutil.copy2() also preserves metadata (timestamps). shutil.copytree() copies entire directory trees. shutil.move() moves (cut+paste) instead of copying. shutil.rmtree() deletes an entire directory tree.",
    },
  },
  {
    title: "Python Capstone: Student Grade Analyzer Project",
    content:
      "<p>You've completed all 34 Python lessons — now it's time to build something real that combines everything. This project is designed to be showcase-worthy: a Student Grade Analyzer that reads a CSV of student scores, performs analysis, generates a formatted report, and visualizes results. Here's what Rahul built for his portfolio, exactly as he would present it in an interview.</p><p><strong>Project Structure:</strong> Create a folder <code>grade_analyzer/</code> with: <code>data/grades.csv</code> (your CSV input), <code>src/analyzer.py</code> (an Analyzer class using OOP), <code>src/report.py</code> (CSV + text report writer), <code>src/visualizer.py</code> (matplotlib charts), <code>main.py</code> (ties everything together), and <code>requirements.txt</code> (pandas, matplotlib). The CSV has columns: StudentName, Subject, Score, Grade, Semester. <strong>Features to implement:</strong> Load CSV with pandas. Calculate class average, highest/lowest score, pass/fail rate (pass = score >= 40). Group by subject and semester. Generate a text report saved to <code>output/report.txt</code>. Plot a bar chart of average scores by subject saved as <code>output/chart.png</code>. Handle missing data gracefully with try/except. Use at least one class (Analyzer), one module import, one list comprehension, and f-strings throughout.</p><p><strong>Bonus features for a standout project:</strong> Add a command-line interface: <code>python main.py --input data/grades.csv --semester 2</code> using <code>argparse</code>. Generate a PDF report using <code>reportlab</code>. Add color to bar chart bars based on grade — green for A, yellow for B, red for F. Push the finished project to GitHub with a README describing what it does, how to run it, and example output images. This is Rahul's first Python project on his resume. In his next interview, when he shows the recruiter his GitHub, they open the project, see the charts in the README, and say: 'You actually built something. Most freshers just list Python on their CV.' He gets the offer.</p>",
    funFact:
      "The most common interview question for Python roles at Indian IT companies (TCS, Infosys, Wipro, HCL) is not a trick algorithmic puzzle — it's 'show me a Python project you've built from scratch and explain every line.' Having one solid, well-structured GitHub project beats having Python listed on your resume 10 times. Build it, document it, and be able to walk through every design decision.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "For your capstone project on GitHub, what makes a README truly impressive to recruiters?",
      options: [
        "A long list of technologies used",
        "A description, setup instructions, example output screenshots, and what problem it solves",
        "Copying the code directly into the README",
        "Linking to Stack Overflow answers you used",
      ],
      correctAnswer:
        "A description, setup instructions, example output screenshots, and what problem it solves",
      explanation:
        "Recruiters and engineers evaluate GitHub projects in 30 seconds. A README with a clear problem statement, how-to-run instructions, and screenshots of actual output shows professionalism and communication skills — qualities as important as the code itself. This is what separates candidates who get callbacks from those who don't.",
    },
  },
];
