// Java Course — 30 scenario-based lessons for IT Fresher Hub
import type { LessonContent } from "@/types";

export const JAVA_LESSONS: LessonContent[] = [
  // ─── Lesson 1 ────────────────────────────────────────────────────────────
  {
    title: "What is Java? Write Once, Run Anywhere",
    content:
      "Rahul just joined TechCorp as a Java trainee. On Day 1, his senior Priya drops a bombshell: 'The same Java code you write on your Windows laptop will run on a Linux server and on an Android phone without changing a single line.' Rahul's jaw drops. This is Java's superpower — Write Once, Run Anywhere (WORA).\n\nJava achieves this through the Java Virtual Machine (JVM). When you write Java code, the compiler converts it to something called bytecode — not machine code specific to one OS, but a universal middle language. The JVM on any machine then reads this bytecode and translates it for that specific hardware. Windows JVM, Linux JVM, Android JVM — they all understand the same bytecode.\n\nJava was created by James Gosling at Sun Microsystems in 1995 and has since become one of the most widely used languages on the planet. It powers Android apps, banking backends, e-commerce platforms, and enterprise systems. When Priya shows Rahul the company's codebase — 2 million lines of Java running on 50 Linux servers — he realizes why learning Java is not just a skill, it's a career gateway.",
    funFact:
      "Java was originally called 'Oak' after an oak tree outside James Gosling's office. The name 'Java' came from Java coffee — which explains the steaming coffee cup logo! It was renamed because Oak was already trademarked.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul writes Java code on Windows. His TechCorp server runs Linux. What makes the same code run on both without changes?",
      options: [
        "Java automatically rewrites the code for each OS",
        "The JVM reads universal bytecode and translates it per platform",
        "Java only runs on Windows servers",
        "You must recompile the code for each operating system",
      ],
      correctAnswer:
        "The JVM reads universal bytecode and translates it per platform",
      explanation:
        "Java compiles source code to bytecode, a universal middle format. The JVM on each platform (Windows, Linux, Android) translates this bytecode to native instructions. That is the Write Once, Run Anywhere promise.",
    },
  },

  // ─── Lesson 2 ────────────────────────────────────────────────────────────
  {
    title: "JDK vs JRE vs JVM: Understanding the Java Ecosystem",
    content:
      "Rahul's first task is to install Java on his machine. His team lead Arjun warns him: 'Don't install the wrong thing!' There are three terms every Java developer must know cold: JVM, JRE, and JDK — and they are like Russian nesting dolls.\n\nThe JVM (Java Virtual Machine) is the innermost doll — the engine that actually runs your bytecode. The JRE (Java Runtime Environment) wraps around the JVM and adds the standard libraries your programs need to run (like java.util, java.io). If you only want to run Java programs — not write them — install the JRE. The JDK (Java Development Kit) is the outermost doll — it includes the JRE plus compiler (javac), debugger, and developer tools. If you are writing Java code, you always install the JDK.\n\nArjun explains it with an analogy: JVM is the car engine. JRE is the complete car ready to drive. JDK is the car plus the full mechanic's toolkit. Rahul installs JDK 17 (a Long-Term Support version favoured by enterprises) and everything makes sense. When he runs `java -version` and sees the output, it is his first win of the day.",
    funFact:
      "There are over 9 million Java developers worldwide, making it consistently one of the top 3 most popular programming languages since the late 1990s. Java 17 is the LTS version most enterprises standardize on for production systems.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun asks Rahul to set up a machine that will only run pre-built Java applications, not write new code. What should Rahul install?",
      options: ["JDK", "JVM only", "JRE", "Eclipse IDE"],
      correctAnswer: "JRE",
      explanation:
        "The JRE (Java Runtime Environment) includes the JVM plus the standard libraries needed to run Java applications. The JDK is only needed when you are developing and compiling Java code.",
    },
  },

  // ─── Lesson 3 ────────────────────────────────────────────────────────────
  {
    title: "Installing Java and Setting Up Your IDE",
    content:
      "Rahul needs to set up his development environment. Priya walks him through it: download JDK 17 from oracle.com or adoptium.net, run the installer, then set the JAVA_HOME environment variable so the terminal knows where Java lives. On Windows that means adding C:\\Program Files\\Java\\jdk-17 to system variables.\n\nNext comes the IDE. An IDE (Integrated Development Environment) is your coding headquarters — code editor, compiler, debugger, and file manager all in one. For Java, three IDEs dominate the industry: IntelliJ IDEA (Rahul's team uses this — it is the industry favourite), Eclipse (widely used in older enterprise projects), and VS Code with Java extensions (lightweight option). IntelliJ catches errors as you type, suggests completions, and lets you run or debug with one click.\n\nPriya's pro tip for Rahul: 'Learn keyboard shortcuts. Ctrl+Shift+N to find a file, Shift+F10 to run, Shift+F9 to debug, Alt+Enter to fix errors. Developers who use the mouse too much are slow developers.' Rahul sets up IntelliJ, creates his first project, and is ready to write real code.",
    funFact:
      "JetBrains, the company behind IntelliJ IDEA, is headquartered in Prague, Czech Republic. Their IDE has become so popular that even Google uses a customized version (Android Studio) as the official IDE for Android development.",
    xpReward: 60,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "The environment variable that tells your terminal where Java is installed is called ______.",
      correctAnswer: "JAVA_HOME",
      explanation:
        "JAVA_HOME is a critical environment variable that points to your JDK installation directory. Many Java tools and build systems (Maven, Gradle) rely on JAVA_HOME to locate the Java runtime.",
    },
  },

  // ─── Lesson 4 ────────────────────────────────────────────────────────────
  {
    title: "Your First Java Program: Hello Corporate World",
    content:
      'Rahul opens IntelliJ and creates his first Java file. Every Java program starts with a class, and the class name must match the filename exactly — this is not optional. The entry point of every Java application is the main method with its exact signature. This is where execution begins when you run the program.\n\nHere is Rahul\'s first program:\n\n<pre><code>public class HelloCorporateWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, Corporate World!");\n        System.out.println("Rahul is ready to code!");\n    }\n}</code></pre>\n\nBreaking it down: `public class HelloCorporateWorld` defines a class. `public static void main(String[] args)` is the mandatory entry point. `System.out.println` prints a line to the console. Rahul hits Run and sees his message appear. It is a small win, but Priya tells him: \'Every expert was once a beginner who ran their first Hello World. The rest is just more lines of the same logic.\'',
    funFact:
      "The tradition of 'Hello, World!' as the first program dates back to Brian Kernighan's 1972 book about the B programming language. It has been used as the introductory program in virtually every programming language ever since.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul creates a file called StudentRecord.java. What must the class inside this file be named?",
      options: ["Main", "studentRecord", "StudentRecord", "JavaClass"],
      correctAnswer: "StudentRecord",
      explanation:
        "In Java, the public class name must exactly match the filename (case-sensitive). If the file is StudentRecord.java, the class must be named StudentRecord. This is a compiler rule, not a style preference.",
    },
  },

  // ─── Lesson 5 ────────────────────────────────────────────────────────────
  {
    title: "Variables, Data Types, and Type Casting in Java",
    content:
      "Rahul is asked to write code that stores an employee's name, age, and salary. He quickly learns that Java is a statically-typed language — before you can store a value, you must declare what type of data it will hold.\n\nJava's primitive data types are the building blocks:\n\n<pre><code>int age = 25;              // whole numbers\ndouble salary = 45000.50;  // decimal numbers\nboolean isActive = true;   // true or false\nchar grade = 'A';          // single character\nString name = \"Rahul\";    // text (technically an object)</code></pre>\n\nType casting becomes important when Rahul tries to divide salary by months — an int divided by an int gives an int, dropping the decimals! Explicit casting fixes this:\n\n<pre><code>int totalPay = 540000;\nint months = 12;\ndouble monthlyPay = (double) totalPay / months; // = 45000.0</code></pre>\n\nPriya explains the golden rule: Java will automatically 'widen' types (int to double, for example) but will never 'narrow' without an explicit cast — because narrowing can lose data.",
    funFact:
      "Java's String is not a primitive — it is a class. This is why String has methods like .length() and .toUpperCase(). Strings in Java are also immutable — once created, the value cannot be changed. Every 'change' creates a brand new String object in memory.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul writes: int result = 7 / 2; What is the value of result?",
      options: ["3.5", "3", "4", "Error"],
      correctAnswer: "3",
      explanation:
        "When both operands are integers in Java, integer division is performed and the decimal part is truncated. 7 / 2 = 3, not 3.5. To get 3.5, you would cast one operand: (double) 7 / 2 or use 7.0 / 2.",
    },
  },

  // ─── Lesson 6 ────────────────────────────────────────────────────────────
  {
    title: "Operators and Expressions in Java",
    content:
      "Sneha from the QA team challenges Rahul: 'Can you write code that calculates the discount on a product?' Rahul now needs to understand Java operators — the symbols that let you compute, compare, and make decisions.\n\nArithmetic operators handle math: + - * / % (modulo). The modulo operator % returns the remainder — so 10 % 3 = 1. Comparison operators (==, !=, <, >, <=, >=) return boolean true/false. Logical operators (&&, ||, !) combine conditions:\n\n<pre><code>double price = 1200.0;\ndouble discountPercent = 15.0;\ndouble discountAmount = price * discountPercent / 100;\ndouble finalPrice = price - discountAmount;\n\nboolean isPremiumUser = true;\nboolean hasValidCoupon = false;\nboolean getsExtraDiscount = isPremiumUser && hasValidCoupon; // false\n\nSystem.out.println(\"Final Price: \" + finalPrice); // 1020.0</code></pre>\n\nThe compound assignment operators (+=, -=, *=, /=) are shortcuts: `salary += 5000` is identical to `salary = salary + 5000`. The increment operator ++ is especially common in loops — `count++` adds 1 to count.",
    funFact:
      "The % modulo operator is surprisingly powerful in real-world programming. It is used to check if a number is even or odd (n % 2 == 0), to cycle through array indices, to generate hash table positions, and to implement circular buffers in networking code.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul writes: int x = 10; x += 5; x *= 2; What is the final value of x?",
      options: ["25", "30", "20", "15"],
      correctAnswer: "30",
      explanation:
        "Start with x = 10. After x += 5, x becomes 15. After x *= 2, x becomes 30. Compound operators modify the variable in place.",
    },
  },

  // ─── Lesson 7 ────────────────────────────────────────────────────────────
  {
    title: "If/Else and Switch Statements",
    content:
      'Rahul is writing a leave approval system. If an employee has worked more than 6 months, they qualify for earned leave. Otherwise, they get only casual leave. This is exactly what if/else is built for — making decisions in code.\n\n<pre><code>int monthsWorked = 8;\nString leaveType;\n\nif (monthsWorked >= 6) {\n    leaveType = "Earned Leave";\n} else if (monthsWorked >= 3) {\n    leaveType = "Casual Leave";\n} else {\n    leaveType = "No Leave Eligible";\n}\n\nSystem.out.println("Eligible for: " + leaveType); // Earned Leave</code></pre>\n\nFor situations with multiple specific values to check, switch statements are cleaner. Rahul uses it to print day names:\n\n<pre><code>int day = 3;\nswitch (day) {\n    case 1: System.out.println("Monday"); break;\n    case 2: System.out.println("Tuesday"); break;\n    case 3: System.out.println("Wednesday"); break;\n    default: System.out.println("Other day"); break;\n}</code></pre>\n\nPriya warns Rahul: always include `break` in switch cases. Without it, Java \'falls through\' to the next case — a common bug that has caused real production incidents at many companies.',
    funFact:
      'Java 14 introduced \'switch expressions\' — a modern, cleaner syntax. `String result = switch(day) { case 1 -> "Monday"; case 2 -> "Tuesday"; default -> "Other"; };` No break needed! Java keeps evolving to make code safer and less error-prone.',
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In a switch statement, what happens if you forget the `break` keyword after a case?",
      options: [
        "Compilation error",
        "The program skips the case entirely",
        "Execution falls through into the next case",
        "The switch exits automatically",
      ],
      correctAnswer: "Execution falls through into the next case",
      explanation:
        "Without break, Java continues executing the next case regardless of whether it matches. This fall-through behavior is intentional in some patterns but is a notorious source of bugs when forgotten.",
    },
  },

  // ─── Lesson 8 ────────────────────────────────────────────────────────────
  {
    title: "For, While, and Do-While Loops",
    content:
      'Priya hands Rahul a task: print payslips for all 100 employees. Writing 100 System.out.println calls is absurd. Loops exist precisely for this — repeat an action N times or until a condition changes.\n\nThe for loop is perfect when you know the count:\n\n<pre><code>for (int i = 1; i <= 100; i++) {\n    System.out.println("Generating payslip for Employee #" + i);\n}</code></pre>\n\nThe while loop runs as long as a condition is true — great when you don\'t know the count upfront:\n\n<pre><code>int attempts = 0;\nwhile (attempts < 3) {\n    System.out.println("Login attempt " + (attempts + 1));\n    attempts++;\n}</code></pre>\n\nThe do-while loop executes the body at least once before checking the condition — useful for menus where the user must see the options before deciding:\n\n<pre><code>int choice;\ndo {\n    System.out.println("1. View Dashboard  2. Logout");\n    choice = scanner.nextInt();\n} while (choice != 2);</code></pre>\n\nArjun\'s rule: use `for` when count is known, `while` when condition-driven, `do-while` when at-least-one-run is required.',
    funFact:
      "The `break` and `continue` keywords inside loops are your emergency exits. `break` exits the loop entirely. `continue` skips the rest of the current iteration and jumps to the next one. They are useful but overuse makes code hard to read — senior developers use them sparingly.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul needs to keep prompting a user for valid input until they enter a number greater than 0. Which loop is most appropriate?",
      options: ["for loop", "while loop", "do-while loop", "switch statement"],
      correctAnswer: "do-while loop",
      explanation:
        "A do-while loop executes the body first and then checks the condition. This is perfect for input validation — you always need to display the prompt at least once before you can check if the input is valid.",
    },
  },

  // ─── Lesson 9 ────────────────────────────────────────────────────────────
  {
    title: "Arrays: Storing Multiple Values",
    content:
      'Rahul needs to store the quarterly sales figures for 4 quarters. Using 4 separate variables (q1, q2, q3, q4) feels messy. Arrays let him store multiple values of the same type under one name, accessed by index.\n\n<pre><code>double[] quarterlySales = {125000.0, 148000.0, 162000.0, 193000.0};\n\n// Access by index (starts at 0)\nSystem.out.println("Q1 Sales: " + quarterlySales[0]); // 125000.0\nSystem.out.println("Q4 Sales: " + quarterlySales[3]); // 193000.0\n\n// Loop through array\ndouble totalSales = 0;\nfor (int i = 0; i < quarterlySales.length; i++) {\n    totalSales += quarterlySales[i];\n}\nSystem.out.println("Annual Total: " + totalSales); // 628000.0</code></pre>\n\nJava also supports the enhanced for-each loop for cleaner iteration:\n\n<pre><code>for (double sales : quarterlySales) {\n    System.out.println("Quarter: " + sales);\n}</code></pre>\n\nThe most critical rule: Java arrays start at index 0, not 1. An array of 4 elements has indices 0, 1, 2, 3. Trying to access index 4 throws an ArrayIndexOutOfBoundsException — one of the most common runtime errors beginners face.',
    funFact:
      "Java has multi-dimensional arrays: `int[][] matrix = new int[3][3];` creates a 3x3 grid. This is used in image processing (each pixel is a position in a 2D array), game development (game boards), and machine learning (neural network weight matrices).",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul declares: String[] employees = new String[5]; What is the index of the last valid element?",
      options: ["5", "4", "6", "0"],
      correctAnswer: "4",
      explanation:
        "Arrays in Java are zero-indexed. A String array of size 5 has valid indices 0, 1, 2, 3, and 4. Accessing index 5 throws ArrayIndexOutOfBoundsException. Always remember: last index = array.length - 1.",
    },
  },

  // ─── Lesson 10 ───────────────────────────────────────────────────────────
  {
    title: "Methods: Reusable Blocks of Logic",
    content:
      'Rahul notices he is writing the same salary calculation logic in three different places in his code. Priya stops him: \'Never repeat yourself. Extract it into a method!\' Methods are reusable blocks of code you define once and call many times.\n\n<pre><code>public class SalaryCalculator {\n\n    // Method definition\n    public static double calculateNetSalary(double gross, double taxPercent) {\n        double tax = gross * taxPercent / 100;\n        return gross - tax;\n    }\n\n    public static void main(String[] args) {\n        // Method calls\n        double rahulSalary = calculateNetSalary(50000, 10);\n        double priyaSalary = calculateNetSalary(75000, 15);\n\n        System.out.println("Rahul Net: " + rahulSalary); // 45000.0\n        System.out.println("Priya Net: " + priyaSalary); // 63750.0\n    }\n}</code></pre>\n\nMethod anatomy: `public` (who can call it), `static` (no object needed), `double` (return type), `calculateNetSalary` (name), `(double gross, double taxPercent)` (parameters). The `return` keyword sends a value back to the caller. Methods without a return value use `void` as the return type.',
    funFact:
      "In Java, every method call uses a 'call stack' — a stack data structure where each method call is pushed on top. When the method returns, it is popped off. A StackOverflowError happens when the call stack gets too deep, usually from infinite recursion. Your IDE actually shows you this stack when debugging.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "A method that performs an action but does not return any value should have ______ as its return type.",
      correctAnswer: "void",
      explanation:
        "void means the method does not return a value. Examples: System.out.println() returns void. Methods like calculateTax() that compute and return a result would use the actual type (double, int, String, etc.).",
    },
  },

  // ─── Lesson 11 ───────────────────────────────────────────────────────────
  {
    title: "Classes and Objects: The Foundation of OOP",
    content:
      'Arjun explains the most important concept in Java: Object-Oriented Programming. \'Think of a class as a blueprint and an object as the actual thing built from that blueprint,\' he tells Rahul. A House blueprint defines the layout — every house built from that blueprint is an object with its own unique address, colour, and residents.\n\n<pre><code>// Class = blueprint\npublic class Employee {\n    String name;\n    int employeeId;\n    double salary;\n    String department;\n\n    void displayInfo() {\n        System.out.println("ID: " + employeeId + " | Name: " + name\n            + " | Dept: " + department);\n    }\n}\n\n// Main class — creating objects from the blueprint\npublic class Main {\n    public static void main(String[] args) {\n        Employee rahul = new Employee();\n        rahul.name = "Rahul Sharma";\n        rahul.employeeId = 1001;\n        rahul.salary = 50000;\n        rahul.department = "Engineering";\n\n        Employee sneha = new Employee();\n        sneha.name = "Sneha Patel";\n        sneha.employeeId = 1002;\n        sneha.salary = 48000;\n        sneha.department = "QA";\n\n        rahul.displayInfo();\n        sneha.displayInfo();\n    }\n}</code></pre>\n\nEvery `new Employee()` creates a distinct object in memory with its own copy of the fields. Changes to rahul\'s data do not affect sneha\'s — they are independent objects of the same class.',
    funFact:
      "Java is almost entirely object-oriented — almost everything is an object. The few exceptions are primitive types (int, double, boolean, etc.). For this reason, Java provides 'wrapper classes' like Integer, Double, and Boolean — object versions of primitives used in collections and generics.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul creates two Employee objects: emp1 and emp2. He sets emp1.salary = 60000. What is emp2.salary?",
      options: [
        "60000 — they share the same memory",
        "0 or null — each object has its own separate fields",
        "Error — you cannot create two objects from one class",
        "It depends on the JVM version",
      ],
      correctAnswer: "0 or null — each object has its own separate fields",
      explanation:
        "Each object created with `new` gets its own independent copy of all instance fields. Setting emp1.salary only affects emp1. emp2.salary remains at its default value (0 for int/double, null for String) until explicitly assigned.",
    },
  },

  // ─── Lesson 12 ───────────────────────────────────────────────────────────
  {
    title: "Constructors: Initializing Your Objects",
    content:
      'Rahul notices that after creating an Employee object he always has to set the name, ID, salary, and department in four separate lines. Priya introduces him to constructors — special methods that initialize objects the moment they are created.\n\n<pre><code>public class Employee {\n    String name;\n    int employeeId;\n    double salary;\n    String department;\n\n    // Constructor — same name as class, no return type\n    public Employee(String name, int employeeId, double salary, String dept) {\n        this.name = name;\n        this.employeeId = employeeId;\n        this.salary = salary;\n        this.department = dept;\n    }\n\n    void displayInfo() {\n        System.out.println(employeeId + " - " + name + " (" + department + ")");\n    }\n}\n\n// Now object creation is clean and complete in one line\nEmployee rahul = new Employee("Rahul Sharma", 1001, 50000, "Engineering");\nEmployee priya = new Employee("Priya Singh", 1002, 65000, "DevOps");\nrahul.displayInfo();\npriya.displayInfo();</code></pre>\n\nThe `this` keyword refers to the current object — it distinguishes the instance field `this.name` from the constructor parameter `name`. Constructor overloading lets you define multiple constructors with different parameter lists — a default constructor with no arguments for convenience, and a full constructor for complete initialization.',
    funFact:
      "If you do not write any constructor, Java automatically provides a default no-argument constructor. But the moment you write even one custom constructor, Java no longer provides the default one. This trips up many beginners when they write `new Employee()` after defining a parameterized constructor and get a 'no suitable constructor' compilation error.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Inside a constructor, the keyword ______ refers to the current object and is used to distinguish instance fields from constructor parameters with the same name.",
      correctAnswer: "this",
      explanation:
        "The `this` keyword is a reference to the current object. `this.name = name` means: set the current object's name field to the value of the name parameter. Without `this`, both sides refer to the parameter and the field never gets assigned.",
    },
  },

  // ─── Lesson 13 ───────────────────────────────────────────────────────────
  {
    title: "Access Modifiers: public, private, protected",
    content:
      "Arjun calls a team review. Sneha from QA finds a bug: someone accidentally set an employee's salary to a negative number directly — `emp.salary = -50000`. 'This is why we have access modifiers,' Arjun explains. Access modifiers control who can see and change your class's fields and methods.\n\n`public` — accessible from anywhere in the entire application. `private` — accessible only within the same class. This is the most restrictive and most protective. `protected` — accessible within the same package and all subclasses. `default` (no keyword) — accessible only within the same package.\n\n<pre><code>public class Employee {\n    public int employeeId;     // anyone can read/write\n    private double salary;     // only this class can access\n    protected String dept;     // this class + subclasses\n\n    // Controlled access through a method\n    public void setSalary(double amount) {\n        if (amount > 0) {\n            this.salary = amount;\n        } else {\n            System.out.println(\"Error: Salary cannot be negative!\");\n        }\n    }\n\n    public double getSalary() {\n        return salary;\n    }\n}</code></pre>\n\nBy making `salary` private and providing setSalary() with validation, invalid data is prevented from entering the object. This is the foundation of encapsulation.",
    funFact:
      "The rule of thumb in enterprise Java: make every field private by default, then open up only what must be accessible. Google's Java Style Guide, used internally for billions of lines of code, mandates private fields with public getter/setter methods as the standard pattern.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul marks Employee's salary field as private. Later he tries to write emp.salary = 80000 from a different class. What happens?",
      options: [
        "The assignment succeeds silently",
        "The value is set to 0",
        "A compilation error occurs — private fields cannot be accessed outside the class",
        "A runtime NullPointerException is thrown",
      ],
      correctAnswer:
        "A compilation error occurs — private fields cannot be accessed outside the class",
      explanation:
        "private fields are strictly class-scoped. Accessing emp.salary from outside the Employee class causes a compile error. You must use public getter/setter methods to interact with private fields.",
    },
  },

  // ─── Lesson 14 ───────────────────────────────────────────────────────────
  {
    title: "Encapsulation: Protecting Your Data",
    content:
      'Encapsulation is one of the four pillars of OOP. It means bundling data (fields) and the methods that operate on that data together inside a class — and controlling access through well-defined public methods. Think of it as a medicine capsule: the active ingredient (data) is safely enclosed, and you interact with it only through the prescribed method (swallowing, not cutting it open).\n\nRahul refactors the Employee class to be fully encapsulated:\n\n<pre><code>public class Employee {\n    private String name;\n    private int employeeId;\n    private double salary;\n\n    public Employee(String name, int id, double salary) {\n        this.name = name;\n        this.employeeId = id;\n        setSalary(salary); // use setter even in constructor for validation\n    }\n\n    public String getName() { return name; }\n    public int getEmployeeId() { return employeeId; }\n    public double getSalary() { return salary; }\n\n    public void setSalary(double salary) {\n        if (salary >= 0) {\n            this.salary = salary;\n        } else {\n            throw new IllegalArgumentException("Salary must be non-negative");\n        }\n    }\n\n    public void applyRaise(double percent) {\n        this.salary += this.salary * percent / 100;\n    }\n}</code></pre>\n\nPriya highlights the benefits: the object\'s internal state is always valid. Business rules live in one place. The class can change its internal implementation without breaking external code. This is how enterprise Java code stays maintainable for years.',
    funFact:
      "In large enterprise codebases at companies like Infosys, TCS, and Wipro, a single class like CustomerAccount can have 100+ lines just of getters and setters. IDEs like IntelliJ can auto-generate them — right-click, Generate, Getter and Setter. This saves enormous time but understanding why they exist is the real skill.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What is the main advantage of making Employee fields private and providing public getter/setter methods?",
      options: [
        "The program runs faster with private fields",
        "It allows validation and controlled access, preventing invalid data from entering the object",
        "It reduces the number of lines of code",
        "Private fields are automatically saved to the database",
      ],
      correctAnswer:
        "It allows validation and controlled access, preventing invalid data from entering the object",
      explanation:
        "Encapsulation's core benefit is data integrity. By routing all access through methods, you can validate input (like rejecting negative salaries), enforce business rules, and change internal implementation without breaking callers.",
    },
  },

  // ─── Lesson 15 ───────────────────────────────────────────────────────────
  {
    title: "Inheritance: Extending Existing Classes",
    content:
      'TechCorp has different types of employees: regular full-time employees, contractors with an hourly rate, and managers with team bonuses. They all share basic properties (name, ID, department) but each has unique attributes. Inheritance solves this elegantly — a child class inherits all fields and methods of the parent, then adds its own.\n\n<pre><code>// Parent class\npublic class Employee {\n    protected String name;\n    protected int employeeId;\n    protected String department;\n\n    public Employee(String name, int id, String dept) {\n        this.name = name;\n        this.employeeId = id;\n        this.department = dept;\n    }\n\n    public void displayInfo() {\n        System.out.println(employeeId + " - " + name + " (" + department + ")");\n    }\n}\n\n// Child class — inherits all Employee fields/methods\npublic class Manager extends Employee {\n    private double teamBonus;\n    private int teamSize;\n\n    public Manager(String name, int id, String dept, double bonus, int team) {\n        super(name, id, dept); // calls parent constructor\n        this.teamBonus = bonus;\n        this.teamSize = team;\n    }\n\n    public double getTotalCompensation(double baseSalary) {\n        return baseSalary + teamBonus;\n    }\n}</code></pre>\n\nThe `extends` keyword establishes inheritance. `super()` calls the parent constructor. Manager inherits displayInfo() automatically — Rahul can call `arjun.displayInfo()` without rewriting it.',
    funFact:
      "Java allows only single inheritance for classes — one parent class per child. But a class can implement multiple interfaces (covered in Lesson 18). This design was deliberate: multiple inheritance in C++ caused the notorious 'Diamond Problem' where ambiguity arises about which parent's method to use. Java elegantly sidesteps this.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul writes: `public class Manager extends Employee`. What does the Manager class automatically get?",
      options: [
        "Nothing — it must redefine everything",
        "Only Employee's public fields",
        "All of Employee's non-private fields and methods",
        "Only Employee's methods, not its fields",
      ],
      correctAnswer: "All of Employee's non-private fields and methods",
      explanation:
        "Through inheritance, Manager gets all public and protected fields and methods from Employee. Private members are not inherited. Manager can then add its own fields (teamBonus, teamSize) and methods on top of what it inherits.",
    },
  },

  // ─── Lesson 16 ───────────────────────────────────────────────────────────
  {
    title: "Method Overriding: Customizing Inherited Behavior",
    content:
      'Rahul inherits the displayInfo() method from Employee in his Manager class. But for managers, he wants to also show the team bonus in the display. He does not want to rename the method — he wants the same method name but different behavior. This is method overriding.\n\n<pre><code>public class Employee {\n    protected String name;\n    protected int employeeId;\n\n    public void displayInfo() {\n        System.out.println(employeeId + " - " + name);\n    }\n}\n\npublic class Manager extends Employee {\n    private double teamBonus;\n\n    @Override  // annotation tells compiler this is intentional override\n    public void displayInfo() {\n        super.displayInfo();  // first call parent\'s version\n        System.out.println("  Team Bonus: INR " + teamBonus);\n    }\n}\n\n// Calling the method:\nEmployee arjun = new Manager();\narjun.displayInfo(); // calls Manager\'s version, not Employee\'s!</code></pre>\n\nThe `@Override` annotation is technically optional but critically important — if you misspell the method name, `@Override` triggers a compile error warning you. Without it, you silently create a new method instead of overriding, which causes subtle bugs that take hours to find in production.',
    funFact:
      "The `@Override` annotation was added in Java 5. Before that, developers had to trust their own spelling. A famous production bug at a US financial firm was caused by a missing @Override — the developer wrote `public int hashcode()` instead of `public int hashCode()`, silently bypassing a critical security check for 18 months.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul adds @Override to a method but spells it calculateSalrry() instead of calculateSalary(). What happens at compile time?",
      options: [
        "The program compiles and runs normally",
        "A compile error — @Override requires the method to exist in the parent",
        "The JVM automatically corrects the typo",
        "A runtime error when the method is called",
      ],
      correctAnswer:
        "A compile error — @Override requires the method to exist in the parent",
      explanation:
        "@Override tells the compiler 'this method must exist in the parent class.' If no matching method is found (due to a typo), the compiler immediately flags an error. This is exactly why @Override is considered mandatory in professional Java code.",
    },
  },

  // ─── Lesson 17 ───────────────────────────────────────────────────────────
  {
    title: "Polymorphism: One Interface, Many Forms",
    content:
      'Polymorphism is the most powerful concept in OOP. Poly means \'many\', morphism means \'forms\'. It allows one reference type to behave differently depending on the actual object it holds. Rahul sees this in action during a code review.\n\n<pre><code>// Parent type reference holding child type objects\nEmployee[] teamMembers = {\n    new Employee("Rahul", 1001, "Engineering"),\n    new Manager("Arjun", 1002, "Engineering", 20000.0, 8),\n    new Contractor("Sneha", 1003, "QA", 850.0)\n};\n\n// Same method call — different behavior based on actual type\nfor (Employee emp : teamMembers) {\n    emp.displayInfo();  // polymorphic dispatch!\n    // Employee.displayInfo() for Rahul\n    // Manager.displayInfo() for Arjun\n    // Contractor.displayInfo() for Sneha\n}</code></pre>\n\nJava decides which version of displayInfo() to call at runtime based on the actual object type — this is called dynamic dispatch or runtime polymorphism. Arjun explains why this matters: \'We can add a new employee type — say, Intern — and the loop works without any changes. The system is open for extension but closed for modification. That is the Open-Closed Principle.\'',
    funFact:
      "Polymorphism is the foundation of Java frameworks. Spring's dependency injection works because you declare a variable as an interface type (UserRepository) and Spring injects the actual implementation at runtime (MySQLUserRepository or MongoUserRepository). Your code never changes — only the injected object does.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul has `Employee emp = new Manager(...)`. When he calls `emp.displayInfo()`, which version executes?",
      options: [
        "Employee's displayInfo() — because the variable type is Employee",
        "Manager's displayInfo() — because the actual object type is Manager",
        "Both versions run simultaneously",
        "A compilation error — Employee reference cannot hold a Manager",
      ],
      correctAnswer:
        "Manager's displayInfo() — because the actual object type is Manager",
      explanation:
        "Java uses the actual runtime type of the object (Manager), not the declared reference type (Employee), to determine which overridden method to call. This is called dynamic method dispatch and is the mechanism behind runtime polymorphism.",
    },
  },

  // ─── Lesson 18 ───────────────────────────────────────────────────────────
  {
    title: "Abstract Classes and Interfaces",
    content:
      'Priya introduces Rahul to two advanced OOP tools. Abstract classes are classes that cannot be instantiated directly — they exist only to be extended. They can have both concrete methods (with implementation) and abstract methods (just a signature, no body). Subclasses must implement every abstract method.\n\n<pre><code>// Abstract class — cannot do `new Shape()`\npublic abstract class Shape {\n    protected String color;\n\n    // Concrete method — inherited as-is\n    public void displayColor() {\n        System.out.println("Color: " + color);\n    }\n\n    // Abstract method — subclasses MUST implement\n    public abstract double calculateArea();\n}\n\npublic class Circle extends Shape {\n    private double radius;\n\n    @Override\n    public double calculateArea() {\n        return Math.PI * radius * radius;\n    }\n}\n\n// Interface — a pure contract, all methods are abstract by default\npublic interface Printable {\n    void print();  // automatically public abstract\n    void preview();\n}\n\n// A class can extend one class AND implement multiple interfaces\npublic class Document extends File implements Printable, Serializable {\n    @Override public void print() { ... }\n    @Override public void preview() { ... }\n}</code></pre>\n\nKey difference: abstract class = partial blueprint with some implementation. Interface = pure contract with no state. Java allows only one parent class but many interfaces.',
    funFact:
      "Java 8 added default methods to interfaces — interface methods with a body. This allowed Java to add new methods to existing interfaces (like Comparator) without breaking all the classes that already implemented them. A pragmatic evolution to support backwards compatibility in a language used by billions of lines of code.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul's class needs to extend Employee and also implement both Auditable and Printable. Which statement is valid in Java?",
      options: [
        "class Staff extends Employee, Auditable implements Printable",
        "class Staff extends Employee implements Auditable, Printable",
        "class Staff implements Employee, Auditable, Printable",
        "class Staff extends Employee extends Auditable implements Printable",
      ],
      correctAnswer:
        "class Staff extends Employee implements Auditable, Printable",
      explanation:
        "Java allows extending exactly one class and implementing multiple interfaces. The syntax is: class ChildClass extends ParentClass implements Interface1, Interface2. Auditable and Printable are interfaces so they go after `implements`.",
    },
  },

  // ─── Lesson 19 ───────────────────────────────────────────────────────────
  {
    title: "Exception Handling: try, catch, finally",
    content:
      'Rahul\'s code crashes in production — a divide-by-zero error brings down the payroll service at 9 PM. Arjun calls him urgently. \'This is why we use exception handling,\' he says. Exceptions are runtime errors that disrupt normal program flow. Java forces you to handle them.\n\n<pre><code>public class PayrollService {\n\n    public static double calculatePerDaySalary(double monthlySalary, int workingDays) {\n        try {\n            if (workingDays <= 0) {\n                throw new IllegalArgumentException("Working days cannot be zero or negative");\n            }\n            return monthlySalary / workingDays;\n\n        } catch (IllegalArgumentException e) {\n            System.out.println("Validation Error: " + e.getMessage());\n            return 0;\n\n        } catch (Exception e) {\n            System.out.println("Unexpected Error: " + e.getMessage());\n            return 0;\n\n        } finally {\n            // This block ALWAYS runs — use for cleanup\n            System.out.println("Payroll calculation attempt completed.");\n        }\n    }\n}\n</code></pre>\n\nThe `try` block contains code that might fail. `catch` blocks handle specific exception types — more specific exceptions must come before more general ones. `finally` runs no matter what — connection closing, file flushing, log writing. The `throw` keyword manually raises an exception with a custom message.',
    funFact:
      "Java exceptions form a hierarchy. At the top is Throwable. Error (JVM out of memory) and Exception split below it. RuntimeException (unchecked — no need to declare them) and checked exceptions (must be declared with `throws` or caught) split under Exception. Understanding this hierarchy is a standard Java interview question.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In a try-catch-finally block, when does the `finally` block execute?",
      options: [
        "Only when an exception is thrown",
        "Only when no exception is thrown",
        "Always — whether an exception occurs or not",
        "Only when the catch block runs successfully",
      ],
      correctAnswer: "Always — whether an exception occurs or not",
      explanation:
        "The finally block is guaranteed to execute regardless of whether an exception was thrown or caught. This makes it the right place for cleanup code like closing database connections, releasing file handles, or flushing output streams.",
    },
  },

  // ─── Lesson 20 ───────────────────────────────────────────────────────────
  {
    title: "ArrayList: Dynamic Arrays in Java",
    content:
      'Rahul needs to store a list of employees but does not know how many there will be. Regular arrays have a fixed size — awkward when data grows dynamically. ArrayList is the solution: a resizable array that grows automatically.\n\n<pre><code>import java.util.ArrayList;\n\npublic class DepartmentRoster {\n    public static void main(String[] args) {\n        ArrayList&lt;String&gt; engineering = new ArrayList&lt;&gt;();\n\n        // Adding elements\n        engineering.add("Rahul Sharma");\n        engineering.add("Priya Singh");\n        engineering.add("Arjun Kumar");\n\n        System.out.println("Team size: " + engineering.size()); // 3\n        System.out.println("First: " + engineering.get(0));     // Rahul Sharma\n\n        // Removing an element\n        engineering.remove("Arjun Kumar");\n        System.out.println("After removal: " + engineering); // [Rahul Sharma, Priya Singh]\n\n        // Iterating\n        for (String member : engineering) {\n            System.out.println("Team member: " + member);\n        }\n\n        // Check membership\n        boolean hasRahul = engineering.contains("Rahul Sharma"); // true\n    }\n}</code></pre>\n\nArrayList vs Array: ArrayList is dynamic (grows/shrinks), supports convenient methods (add, remove, contains, size), but is slightly slower for raw index access. For most business applications, ArrayList is preferred over raw arrays.',
    funFact:
      "ArrayList internally uses a regular array. When it fills up, it creates a new array 1.5 times larger and copies all elements over — an operation called resizing. This is why bulk operations with ArrayList (adding millions of items in a loop) can be slow. For large data sets, you can pre-size it: `new ArrayList<>(10000)` to avoid repeated resizing.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul has an ArrayList with 3 elements. He calls `list.get(3)`. What happens?",
      options: [
        "Returns null",
        "Returns the last element",
        "Throws IndexOutOfBoundsException",
        "Adds a new empty element at index 3",
      ],
      correctAnswer: "Throws IndexOutOfBoundsException",
      explanation:
        "ArrayList indices are zero-based. A list with 3 elements has valid indices 0, 1, and 2. Calling get(3) is out of bounds and throws IndexOutOfBoundsException. Always check list.size() before accessing by index.",
    },
  },

  // ─── Lesson 21 ───────────────────────────────────────────────────────────
  {
    title: "HashMap: Key-Value Storage in Java",
    content:
      'Rahul needs to look up an employee\'s salary by their employee ID quickly. An ArrayList would require scanning every element. A HashMap stores key-value pairs and retrieves values in near-constant time — like a dictionary where you look up a word (key) to get its definition (value).\n\n<pre><code>import java.util.HashMap;\n\npublic class SalaryLedger {\n    public static void main(String[] args) {\n        HashMap&lt;Integer, Double&gt; salaryMap = new HashMap&lt;&gt;();\n\n        // Storing: employeeId -> salary\n        salaryMap.put(1001, 50000.0);\n        salaryMap.put(1002, 65000.0);\n        salaryMap.put(1003, 48000.0);\n\n        // Retrieving\n        double rahulSalary = salaryMap.get(1001); // 50000.0\n        System.out.println("Rahul\'s Salary: " + rahulSalary);\n\n        // Safe retrieval with default\n        double unknown = salaryMap.getOrDefault(9999, 0.0); // 0.0 if not found\n\n        // Checking existence\n        boolean exists = salaryMap.containsKey(1002); // true\n\n        // Iterating all entries\n        for (Map.Entry&lt;Integer, Double&gt; entry : salaryMap.entrySet()) {\n            System.out.println("ID: " + entry.getKey() + " Salary: " + entry.getValue());\n        }\n\n        System.out.println("Total employees: " + salaryMap.size()); // 3\n    }\n}</code></pre>\n\nHashMap keys must be unique — adding the same key overwrites the previous value. HashMap does not guarantee insertion order. If you need ordered keys, use TreeMap (sorted) or LinkedHashMap (insertion order).',
    funFact:
      "HashMap uses a hashing algorithm to decide where to store each key-value pair internally. In the best case, lookups are O(1) — constant time regardless of how many entries exist. Java 8 improved HashMap's worst-case performance from O(n) to O(log n) by converting internal linked lists to balanced trees when a bucket gets too full.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul calls `salaryMap.put(1001, 75000.0)` when key 1001 already exists with value 50000.0. What is the result?",
      options: [
        "An exception is thrown — duplicate keys are not allowed",
        "A second entry with key 1001 is added",
        "The old value 50000.0 is replaced with 75000.0",
        "The put() is silently ignored",
      ],
      correctAnswer: "The old value 50000.0 is replaced with 75000.0",
      explanation:
        "In HashMap, keys are unique. Calling put() with an existing key overwrites the previous value and returns the old value. If you need to handle this case, use putIfAbsent() which only inserts if the key does not already exist.",
    },
  },

  // ─── Lesson 22 ───────────────────────────────────────────────────────────
  {
    title: "HashSet and Iterator",
    content:
      'Sneha asks Rahul to find all unique skill tags across hundreds of employee profiles — without duplicates. A HashSet is perfect: it stores unique elements only, automatically discarding duplicates.\n\n<pre><code>import java.util.HashSet;\nimport java.util.Iterator;\n\npublic class SkillTracker {\n    public static void main(String[] args) {\n        HashSet&lt;String&gt; skillPool = new HashSet&lt;&gt;();\n\n        // Adding skills from various profiles\n        skillPool.add("Java");\n        skillPool.add("SQL");\n        skillPool.add("Java");   // duplicate — silently ignored\n        skillPool.add("Python");\n        skillPool.add("SQL");    // duplicate — silently ignored\n        skillPool.add("DevOps");\n\n        System.out.println("Unique skills: " + skillPool.size()); // 4\n        System.out.println(skillPool); // [Java, SQL, Python, DevOps] (order not guaranteed)\n\n        boolean hasJava = skillPool.contains("Java"); // true — O(1) lookup\n\n        // Iterator pattern — safe removal during iteration\n        Iterator&lt;String&gt; iterator = skillPool.iterator();\n        while (iterator.hasNext()) {\n            String skill = iterator.next();\n            if (skill.equals("DevOps")) {\n                iterator.remove(); // safe removal\n            }\n        }\n        System.out.println("After removal: " + skillPool);\n    }\n}</code></pre>\n\nThe Iterator pattern is the safe way to remove elements while iterating. Removing directly from a collection inside a for-each loop throws ConcurrentModificationException — a common bug in beginner code.',
    funFact:
      "HashSet is actually implemented as a HashMap internally — your elements are stored as keys, and the values are all a dummy constant object (Boolean.TRUE). Java reuses proven data structures rather than reinventing them, which is why HashSet enjoys the same O(1) average performance as HashMap.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        'Rahul adds the String "Java" to a HashSet three times. How many times does "Java" appear in the set?',
      options: [
        "Three times — each add creates a new entry",
        "Once — HashSet stores only unique elements",
        "Twice — the first duplicate is ignored but not the second",
        "An exception is thrown on the second duplicate",
      ],
      correctAnswer: "Once — HashSet stores only unique elements",
      explanation:
        "HashSet guarantees element uniqueness. Adding a duplicate silently succeeds but does not add a second copy. The add() method returns false when the element already exists, which you can check to detect duplicates if needed.",
    },
  },

  // ─── Lesson 23 ───────────────────────────────────────────────────────────
  {
    title: "Generics: Writing Type-Safe Code",
    content:
      'Before Java 5, collections stored Objects — you could mix Strings, Integers, and custom objects in the same list. Retrieving required casting and was error-prone. Generics solved this by letting you specify the exact type a collection or method works with at compile time.\n\nRahul writes a generic utility method that works with any type:\n\n<pre><code>import java.util.ArrayList;\nimport java.util.List;\n\npublic class DataUtils {\n\n    // Generic method — T is a type parameter, filled in at call time\n    public static &lt;T&gt; void printList(List&lt;T&gt; items) {\n        for (T item : items) {\n            System.out.println(item);\n        }\n    }\n\n    // Generic class\n    public static class Pair&lt;A, B&gt; {\n        private A first;\n        private B second;\n\n        public Pair(A first, B second) {\n            this.first = first;\n            this.second = second;\n        }\n\n        public A getFirst() { return first; }\n        public B getSecond() { return second; }\n    }\n\n    public static void main(String[] args) {\n        List&lt;String&gt; names = new ArrayList&lt;&gt;();\n        names.add("Rahul");\n        names.add("Priya");\n        printList(names);  // works with String list\n\n        List&lt;Integer&gt; ids = List.of(1001, 1002, 1003);\n        printList(ids);    // works with Integer list\n\n        Pair&lt;String, Integer&gt; employee = new Pair&lt;&gt;("Rahul", 1001);\n        System.out.println(employee.getFirst() + ": " + employee.getSecond());\n    }\n}</code></pre>\n\nGenerics enforce type safety at compile time — trying to add an Integer to `List<String>` is immediately caught as a compile error, not a runtime crash.',
    funFact:
      "Generics in Java use 'type erasure' — the generic type information (`<String>`, `<Integer>`) exists only at compile time and is erased in the compiled bytecode. At runtime, `ArrayList<String>` and `ArrayList<Integer>` are identical to the JVM. This design maintains backwards compatibility with pre-Java-5 code.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul declares `List<String> names = new ArrayList<>();` and tries `names.add(42)`. What happens?",
      options: [
        '42 is automatically converted to the String "42"',
        "A runtime ClassCastException is thrown",
        "A compile error — int 42 is not a String",
        "The list stores both Strings and integers freely",
      ],
      correctAnswer: "A compile error — int 42 is not a String",
      explanation:
        "Generics enforce type safety at compile time. `List<String>` will only accept String values. Attempting to add an int literal causes an immediate compile error. This is exactly the benefit of generics — catching type mismatches before the code ever runs.",
    },
  },

  // ─── Lesson 24 ───────────────────────────────────────────────────────────
  {
    title: "File I/O: Reading and Writing Files in Java",
    content:
      'Arjun tasks Rahul with writing a program that generates daily reports and saves them to a log file. Java\'s java.io and java.nio.file packages handle file operations. Modern Java uses BufferedReader and BufferedWriter for text files — buffering makes I/O dramatically faster.\n\n<pre><code>import java.io.*;\nimport java.nio.file.*;\n\npublic class ReportLogger {\n\n    // Writing to a file\n    public static void writeReport(String filename, String content) {\n        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename, true))) {\n            writer.write(content);\n            writer.newLine();\n            System.out.println("Report saved to " + filename);\n        } catch (IOException e) {\n            System.err.println("Error writing file: " + e.getMessage());\n        }\n    }\n\n    // Reading from a file\n    public static void readReport(String filename) {\n        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch (FileNotFoundException e) {\n            System.err.println("File not found: " + filename);\n        } catch (IOException e) {\n            System.err.println("Error reading file: " + e.getMessage());\n        }\n    }\n\n    public static void main(String[] args) {\n        writeReport("daily_report.txt", "2025-05-01: 142 transactions processed");\n        writeReport("daily_report.txt", "2025-05-01: All payroll jobs completed");\n        readReport("daily_report.txt");\n    }\n}</code></pre>\n\nThe try-with-resources syntax `try (Resource r = ...)` automatically closes the file when the block exits, even if an exception occurs. This prevents file handle leaks — a common source of production issues.',
    funFact:
      'Java 11 added Files.readString() and Files.writeString() for simple file operations: `String content = Files.readString(Path.of("file.txt"))`. Before this, reading a file required 6+ lines of boilerplate. Modern Java keeps reducing verbosity while maintaining the robustness the language is known for.',
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul uses try-with-resources for file writing. What happens to the BufferedWriter when the try block finishes?",
      options: [
        "It remains open until the JVM garbage collects it",
        "It is automatically closed when the try block exits",
        "You must call writer.close() manually in a finally block",
        "It closes only if no exception was thrown",
      ],
      correctAnswer: "It is automatically closed when the try block exits",
      explanation:
        "Try-with-resources automatically calls close() on any AutoCloseable resource when the block exits — whether normally or via exception. This eliminates the need for explicit finally blocks to close files and prevents resource leaks.",
    },
  },

  // ─── Lesson 25 ───────────────────────────────────────────────────────────
  {
    title: "JDBC: Connecting Java to a Database",
    content:
      'Rahul\'s biggest milestone: connecting his Java application to a real MySQL database. JDBC (Java Database Connectivity) is the standard API that lets Java programs talk to any relational database using SQL.\n\n<pre><code>import java.sql.*;\n\npublic class EmployeeDAO {\n    private static final String URL = "jdbc:mysql://localhost:3306/techcorp";\n    private static final String USER = "appuser";\n    private static final String PASS = "secret123";\n\n    public void getAllEmployees() {\n        String sql = "SELECT id, name, department, salary FROM employees";\n\n        try (Connection conn = DriverManager.getConnection(URL, USER, PASS);\n             PreparedStatement stmt = conn.prepareStatement(sql);\n             ResultSet rs = stmt.executeQuery()) {\n\n            while (rs.next()) {\n                int id = rs.getInt("id");\n                String name = rs.getString("name");\n                String dept = rs.getString("department");\n                double salary = rs.getDouble("salary");\n                System.out.printf("%-5d %-20s %-15s %.2f%n", id, name, dept, salary);\n            }\n\n        } catch (SQLException e) {\n            System.err.println("Database error: " + e.getMessage());\n        }\n    }\n\n    public void addEmployee(String name, String dept, double salary) {\n        String sql = "INSERT INTO employees (name, department, salary) VALUES (?, ?, ?)";\n\n        try (Connection conn = DriverManager.getConnection(URL, USER, PASS);\n             PreparedStatement stmt = conn.prepareStatement(sql)) {\n\n            stmt.setString(1, name);\n            stmt.setString(2, dept);\n            stmt.setDouble(3, salary);\n            int rowsAffected = stmt.executeUpdate();\n            System.out.println(rowsAffected + " row(s) inserted.");\n\n        } catch (SQLException e) {\n            System.err.println("Insert failed: " + e.getMessage());\n        }\n    }\n}</code></pre>\n\nUse PreparedStatement — never concatenate user input directly into SQL strings. String concatenation opens SQL injection vulnerabilities — a top security risk that has caused massive data breaches globally.',
    funFact:
      'SQL injection consistently ranks in the OWASP Top 10 list of critical web application security risks. A PreparedStatement sends the SQL structure and data separately to the database, making injection impossible. Never use `"SELECT * FROM users WHERE name = \'" + name + "\'"` in production code — it is a career-ending security mistake.',
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why should Rahul use PreparedStatement instead of concatenating the SQL string with user input?",
      options: [
        "PreparedStatement is faster to type",
        "It prevents SQL injection attacks by separating SQL structure from data",
        "Concatenation causes syntax errors in Java",
        "PreparedStatement automatically formats dates",
      ],
      correctAnswer:
        "It prevents SQL injection attacks by separating SQL structure from data",
      explanation:
        "PreparedStatement sends the SQL query template and parameters separately to the database engine, which treats parameters strictly as data, never as executable SQL. This is the primary defense against SQL injection — a critical security vulnerability.",
    },
  },

  // ─── Lesson 26 ───────────────────────────────────────────────────────────
  {
    title: "Introduction to Spring Boot",
    content:
      "Arjun tells Rahul: 'Nobody writes raw Java web servers anymore. We use Spring Boot.' Spring Boot is the most popular Java framework for building web applications and microservices. It provides auto-configuration, embedded servers, and production-ready features out of the box — removing hundreds of lines of XML configuration that traditional Spring required.\n\nTo create a Spring Boot project, go to start.spring.io, select your dependencies (Spring Web, Spring Data JPA, MySQL Driver), and download the generated project. Open it in IntelliJ.\n\n<pre><code>// The entry point of every Spring Boot application\n@SpringBootApplication\npublic class TechCorpApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(TechCorpApplication.class, args);\n    }\n}\n\n// Application properties — src/main/resources/application.properties\n// spring.datasource.url=jdbc:mysql://localhost:3306/techcorp\n// spring.datasource.username=appuser\n// spring.datasource.password=secret123\n// spring.jpa.hibernate.ddl-auto=update\n// server.port=8080</code></pre>\n\nThe @SpringBootApplication annotation combines three annotations: @Configuration (marks this as a config class), @EnableAutoConfiguration (tells Spring to configure everything it can automatically), and @ComponentScan (tells Spring to find and wire all your components). Run the main method and Spring Boot starts an embedded Tomcat server at localhost:8080 — no separate server installation needed.",
    funFact:
      "Spring Boot was released in 2014 and transformed enterprise Java development. Before Spring Boot, setting up a Java web application required configuring XML files, deploying to external application servers, and days of setup. Spring Boot reduced this to minutes. Today, over 60% of Java developers use Spring Boot in production.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul creates a Spring Boot app. Where does he configure the database URL and credentials?",
      options: [
        "Hardcode them directly in the main() method",
        "In src/main/resources/application.properties",
        "In the pom.xml file",
        "In a separate database.java class",
      ],
      correctAnswer: "In src/main/resources/application.properties",
      explanation:
        "Spring Boot reads configuration from application.properties (or application.yml) in the resources directory. This separates configuration from code — you can change database credentials for different environments (dev, staging, production) without recompiling the application.",
    },
  },

  // ─── Lesson 27 ───────────────────────────────────────────────────────────
  {
    title: "Creating a REST API with Spring Boot",
    content:
      'Rahul\'s big assignment: build a REST API that the React frontend can call to get employee data. REST (Representational State Transfer) APIs communicate over HTTP using JSON. Spring Boot makes this remarkably easy.\n\n<pre><code>import org.springframework.web.bind.annotation.*;\nimport org.springframework.http.ResponseEntity;\nimport java.util.List;\n\n@RestController\n@RequestMapping("/api/employees")\npublic class EmployeeController {\n\n    private final EmployeeService service;\n\n    public EmployeeController(EmployeeService service) {\n        this.service = service;\n    }\n\n    // GET /api/employees — returns all employees\n    @GetMapping\n    public List&lt;Employee&gt; getAllEmployees() {\n        return service.findAll();\n    }\n\n    // GET /api/employees/1001 — returns one employee\n    @GetMapping("/{id}")\n    public ResponseEntity&lt;Employee&gt; getEmployee(@PathVariable int id) {\n        return service.findById(id)\n            .map(ResponseEntity::ok)\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    // POST /api/employees — creates a new employee\n    @PostMapping\n    public ResponseEntity&lt;Employee&gt; createEmployee(@RequestBody Employee emp) {\n        Employee saved = service.save(emp);\n        return ResponseEntity.status(201).body(saved);\n    }\n\n    // DELETE /api/employees/1001 — removes an employee\n    @DeleteMapping("/{id}")\n    public ResponseEntity&lt;Void&gt; deleteEmployee(@PathVariable int id) {\n        service.delete(id);\n        return ResponseEntity.noContent().build();\n    }\n}</code></pre>\n\nEach HTTP method maps to a CRUD operation: GET=Read, POST=Create, PUT=Update, DELETE=Delete. Spring Boot automatically serializes Java objects to JSON and deserializes incoming JSON to Java objects.',
    funFact:
      "When you annotate a class with @RestController, Spring automatically converts the return value of every method to JSON using Jackson — a JSON library bundled with Spring Boot. What takes 5 minutes to configure manually in raw Java takes exactly 0 minutes in Spring Boot. This is auto-configuration at work.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha calls Rahul's API: GET /api/employees/9999 where employee 9999 does not exist. What should the API return?",
      options: [
        "HTTP 200 with null body",
        "HTTP 404 Not Found",
        "HTTP 500 Internal Server Error",
        "HTTP 201 Created",
      ],
      correctAnswer: "HTTP 404 Not Found",
      explanation:
        "HTTP 404 (Not Found) is the correct response when a requested resource does not exist. Returning 200 with null is misleading. Returning 500 implies a server error when the request itself is the issue. Proper HTTP status codes are essential for API consumers to handle responses correctly.",
    },
  },

  // ─── Lesson 28 ───────────────────────────────────────────────────────────
  {
    title: "Java in Enterprise: MVC Architecture",
    content:
      'On Rahul\'s second sprint review, Arjun praises his code but points out a problem: \'Your controller is doing database queries, business calculations, and response formatting all in one place. That is not MVC.\' MVC (Model-View-Controller) is the architectural pattern that separates an application into three distinct layers.\n\nModel is the data layer — Entity classes, repositories, database operations. Controller handles HTTP requests and responses — nothing else. Service (sometimes called Business Logic Layer) sits between Controller and Model, containing all business rules.\n\n<pre><code>// MODEL — Entity class mapped to database table\n@Entity\n@Table(name = "employees")\npublic class Employee {\n    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private int id;\n    private String name;\n    private String department;\n    private double salary;\n    // getters, setters...\n}\n\n// REPOSITORY — data access (Spring Data JPA auto-implements this)\npublic interface EmployeeRepository extends JpaRepository&lt;Employee, Integer&gt; {\n    List&lt;Employee&gt; findByDepartment(String department);\n}\n\n// SERVICE — business logic\n@Service\npublic class EmployeeService {\n    @Autowired\n    private EmployeeRepository repo;\n\n    public double getDepartmentSalaryBudget(String dept) {\n        return repo.findByDepartment(dept)\n            .stream()\n            .mapToDouble(Employee::getSalary)\n            .sum();\n    }\n}\n\n// CONTROLLER — handles HTTP only\n@RestController\n@RequestMapping("/api")\npublic class EmployeeController {\n    @Autowired\n    private EmployeeService service;\n\n    @GetMapping("/budget/{dept}")\n    public double getBudget(@PathVariable String dept) {\n        return service.getDepartmentSalaryBudget(dept);\n    }\n}</code></pre>',
    funFact:
      "Spring Data JPA is almost magical: by extending JpaRepository and declaring method names like `findByDepartmentAndSalaryGreaterThan(String dept, double salary)`, Spring automatically generates the SQL query at startup — no SQL writing needed. This method naming convention is called Derived Query Methods and is one of the most developer-friendly features in modern Java.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun finds salary calculation logic inside EmployeeController. Where should this logic live in MVC?",
      options: [
        "Inside the Entity class as a static method",
        "In the EmployeeRepository directly",
        "In a dedicated EmployeeService class",
        "In a utility class inside the controller package",
      ],
      correctAnswer: "In a dedicated EmployeeService class",
      explanation:
        "In MVC architecture, business logic belongs in the Service layer. Controllers handle only HTTP concerns (request parsing, response building). Repositories handle only data access. Services contain all business rules — salary calculations, validation, workflow logic — making the codebase clean, testable, and maintainable.",
    },
  },

  // ─── Lesson 29 ───────────────────────────────────────────────────────────
  {
    title: "Java Interview Preparation: Top Questions",
    content:
      'Rahul has his first technical interview next week. Priya runs a mock interview session. These are the Java questions that appear most frequently in fresher and junior developer interviews at top IT companies.\n\nQuestion 1: What is the difference between == and .equals() in Java?\n\n<pre><code>String a = new String("Rahul");\nString b = new String("Rahul");\nSystem.out.println(a == b);       // false — different memory addresses\nSystem.out.println(a.equals(b));  // true  — same character sequence</code></pre>\n\nQuestion 2: What is the difference between ArrayList and LinkedList?\nArrayList: fast random access O(1), slow insertions in the middle O(n). LinkedList: fast insertions/deletions O(1), slow random access O(n). Use ArrayList for most cases.\n\nQuestion 3: What is the difference between abstract class and interface?\nAbstract class: can have state (fields), constructors, concrete methods, one parent only. Interface: no state (before Java 8), no constructors, multiple implementation allowed.\n\nQuestion 4: What is the String Pool?\n\n<pre><code>String s1 = "Hello";    // stored in String Pool\nString s2 = "Hello";    // reuses same pool object\nString s3 = new String("Hello"); // forces new heap object\nSystem.out.println(s1 == s2);    // true — same pool object\nSystem.out.println(s1 == s3);    // false — different heap object</code></pre>\n\nQuestion 5: What is Java garbage collection? JVM automatically reclaims memory from objects no longer referenced. You cannot force GC but can suggest it with `System.gc()` — though JVM is free to ignore the hint.',
    funFact:
      "The most common mistake in Java interviews is using == to compare Strings. This is so frequently tested because it reveals whether candidates truly understand how Java manages memory. String literals go into the String Pool (shared), while `new String()` creates a new heap object. Always use .equals() for String value comparison.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        'In a Java interview, Rahul is asked: String s1 = "Java"; String s2 = "Java"; Is s1 == s2 true or false?',
      options: [
        "false — Strings should never be compared with ==",
        "true — String literals with the same value share the same String Pool reference",
        "It depends on the JVM version",
        "A NullPointerException would be thrown",
      ],
      correctAnswer:
        "true — String literals with the same value share the same String Pool reference",
      explanation:
        "String literals in Java are stored in the String Pool. When two literal Strings have the same content, they reference the same object in the pool, so == returns true. However, always use .equals() in production code because the behavior changes for Strings created with `new String()`.",
    },
  },

  // ─── Lesson 30 ───────────────────────────────────────────────────────────
  {
    title: "Java Capstone: Simple Student Management System",
    content:
      'Rahul\'s final challenge: build a complete console-based Student Management System that demonstrates every Java concept learned in this course. This is his portfolio project — the kind of project that impresses interviewers.\n\nSystem requirements: add students, view all students, search by ID, calculate class average GPA, save data to a file.\n\n<pre><code>import java.util.*;\nimport java.io.*;\n\n// Model\nclass Student {\n    private int id;\n    private String name;\n    private String course;\n    private double gpa;\n\n    public Student(int id, String name, String course, double gpa) {\n        this.id = id; this.name = name;\n        this.course = course; this.gpa = gpa;\n    }\n    public int getId() { return id; }\n    public String getName() { return name; }\n    public double getGpa() { return gpa; }\n\n    @Override\n    public String toString() {\n        return String.format("[%d] %-20s %-15s GPA: %.2f", id, name, course, gpa);\n    }\n}\n\n// Service\nclass StudentService {\n    private List&lt;Student&gt; students = new ArrayList&lt;&gt;();\n    private int nextId = 1;\n\n    public void addStudent(String name, String course, double gpa) {\n        if (gpa &lt; 0 || gpa &gt; 10)\n            throw new IllegalArgumentException("GPA must be between 0 and 10");\n        students.add(new Student(nextId++, name, course, gpa));\n        System.out.println("Student added successfully!");\n    }\n\n    public void displayAll() {\n        if (students.isEmpty()) {\n            System.out.println("No students enrolled yet.");\n            return;\n        }\n        students.forEach(System.out::println);\n    }\n\n    public Optional&lt;Student&gt; findById(int id) {\n        return students.stream().filter(s -&gt; s.getId() == id).findFirst();\n    }\n\n    public double classAverage() {\n        return students.stream().mapToDouble(Student::getGpa).average().orElse(0);\n    }\n\n    public void saveToFile(String filename) throws IOException {\n        try (PrintWriter pw = new PrintWriter(new FileWriter(filename))) {\n            students.forEach(pw::println);\n        }\n        System.out.println("Data saved to " + filename);\n    }\n}\n\n// Main — entry point and menu\npublic class StudentManagementSystem {\n    public static void main(String[] args) {\n        StudentService service = new StudentService();\n        Scanner sc = new Scanner(System.in);\n\n        service.addStudent("Rahul Sharma", "Java Development", 8.5);\n        service.addStudent("Priya Singh", "DevOps", 9.1);\n        service.addStudent("Sneha Patel", "QA Testing", 8.8);\n        service.addStudent("Arjun Kumar", "Cloud Computing", 9.3);\n\n        System.out.println("\\n=== TechCorp Student Directory ===");\n        service.displayAll();\n        System.out.printf("%nClass Average GPA: %.2f%n", service.classAverage());\n\n        service.findById(2).ifPresentOrElse(\n            s -&gt; System.out.println("Found: " + s),\n            () -&gt; System.out.println("Student not found")\n        );\n\n        try { service.saveToFile("students.txt"); }\n        catch (IOException e) { System.err.println("Save failed: " + e.getMessage()); }\n    }\n}</code></pre>\n\nThis project demonstrates: classes, encapsulation, ArrayList, Optional, streams, lambdas, exception handling, and file I/O — the core Java skillset every fresher needs to demonstrate in interviews.',
    funFact:
      "Java Stream API (introduced in Java 8) transforms how Java developers process collections. Operations like `students.stream().filter(...).mapToDouble(...).average()` replace verbose for-loops with elegant, readable pipelines. Functional programming in Java — using lambdas and streams — is now expected knowledge for any Java interview at service companies like Infosys, TCS, Wipro, and Cognizant.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul's StudentService uses `students.stream().mapToDouble(Student::getGpa).average().orElse(0)`. What does `orElse(0)` handle?",
      options: [
        "It sets the default GPA to 0 for all students",
        "It handles the case where the students list is empty and average() returns an empty Optional",
        "It converts the result from double to int",
        "It filters out students with GPA less than 0",
      ],
      correctAnswer:
        "It handles the case where the students list is empty and average() returns an empty Optional",
      explanation:
        "Stream's average() returns an OptionalDouble because the average of an empty stream is undefined. orElse(0) provides a fallback value when the Optional is empty — preventing a NoSuchElementException when no students are enrolled. This is the safe, idiomatic way to handle potentially absent values in Java.",
    },
  },
];
