// HTML & CSS scenario-based lesson content for IT Fresher Hub
// Scenario: Priya is a fresher hired as a front-end trainee at TechNova Solutions
import type { LessonContent } from "@/types";

export const HTML_CSS_LESSONS: LessonContent[] = [
  // ─── 01 ───────────────────────────────────────────────────────────────────
  {
    title: "What is HTML? Building the Web's Skeleton",
    content:
      "Priya just joined TechNova Solutions as a front-end trainee. On Day 1, her team lead Arjun hands her a blank text file and says: 'Build the company's internal portal homepage — start with HTML.' Priya stares at the screen. What even IS HTML?\n\nHTML stands for HyperText Markup Language. It is the backbone of every webpage on the internet. When you open any website, your browser downloads an HTML file and reads the tags inside it to figure out what to display. Think of HTML as the skeleton of a human body — it provides the structure. CSS is the skin and clothes (visual styling), and JavaScript is the muscles that make things move.\n\nHTML uses tags — keywords wrapped in angle brackets like <p>, <h1>, <img>. These tags tell the browser 'this is a paragraph', 'this is a heading', 'this is an image'. The browser reads these instructions and renders them visually. Priya writes her first line: <h1>Welcome to TechNova Portal</h1> and when she opens it in a browser, a bold heading appears instantly. That moment of 'I made this!' is where every developer's journey begins.",
    funFact:
      "HTML was invented by Tim Berners-Lee in 1991 while working at CERN. He needed a way for scientists to share research documents across computers. The first ever website — info.cern.ch — is still live today! It's just a simple HTML page with text and links.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's manager asks what HTML stands for. Which answer is correct?",
      options: [
        "High Text Markup Language",
        "HyperText Markup Language",
        "HyperText Making Language",
        "Hyperlink and Text Markup Language",
      ],
      correctAnswer: "HyperText Markup Language",
      explanation:
        "HTML stands for HyperText Markup Language. 'HyperText' means text with links that connect pages together. 'Markup Language' means you annotate content with tags to describe its structure and meaning to the browser.",
    },
  },

  // ─── 02 ───────────────────────────────────────────────────────────────────
  {
    title: "HTML Document Structure: The Boilerplate",
    content:
      "Arjun shows Priya a blank HTML file and says: 'Before writing a single word of content, you need the boilerplate. Every HTML document starts the same way.' Priya looks confused. What is a boilerplate?\n\nEvery valid HTML page starts with <!DOCTYPE html> — this tells the browser it is an HTML5 document. Then comes the <html> tag wrapping everything. Inside it are two major sections: <head> (invisible metadata about the page — title, charset, CSS links) and <body> (everything the user actually sees — text, images, buttons). The <meta charset='UTF-8'> tag ensures characters like emojis and Indian language text render correctly. The <title> tag sets what appears on the browser's tab.\n\nPriya creates her first proper file: <!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>TechNova Portal</title></head><body><h1>Welcome!</h1></body></html>. Arjun reviews it and says 'Perfect — the viewport meta tag especially is critical for mobile responsiveness.' Without it, the page zooms out weirdly on phones. Priya has her foundation.",
    funFact:
      "The 'viewport meta tag' was introduced by Apple for the original iPhone in 2007. Before smartphones, websites assumed a 1024px-wide screen. When iPhones launched, websites would appear tiny — zoomed out to fit the screen. The viewport tag tells the browser to scale the page correctly for the device's actual width.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's page shows weird characters instead of Hindi text. Which tag in <head> will fix this?",
      options: [
        "<meta name='language' content='hindi'>",
        "<meta charset='UTF-8'>",
        "<meta name='charset' content='hindi'>",
        "<link charset='UTF-8'>",
      ],
      correctAnswer: "<meta charset='UTF-8'>",
      explanation:
        "The charset meta tag tells the browser how to interpret the bytes in the HTML file. UTF-8 supports virtually every language and character set including Hindi, Chinese, Arabic, and emojis. Without it, special characters appear as garbled symbols.",
    },
  },

  // ─── 03 ───────────────────────────────────────────────────────────────────
  {
    title: "Tags and Elements: The Building Blocks",
    content:
      "It is Week 1 at TechNova. Priya needs to add an employee profile section to the portal. Arjun explains the difference between a tag and an element — a concept that trips up many freshers.\n\nA tag is just the angle-bracket label: <p> is an opening tag, </p> is a closing tag. An element is the complete package: opening tag + content + closing tag. So <p>Hello World</p> is one paragraph element. Some elements are 'void elements' with no closing tag because they don't wrap content — like <img>, <br>, <hr>, and <input>. These stand alone and self-close.\n\nAttributes give elements extra information. In <img src='photo.jpg' alt='Employee Photo'>, 'src' and 'alt' are attributes. 'src' says where the image file is. 'alt' provides text that screen readers announce for visually impaired users — this is important for accessibility. Priya builds the profile card: <div class='profile'><img src='arjun.jpg' alt='Arjun Kumar, Team Lead'><h3>Arjun Kumar</h3><p>Team Lead — Front-end</p></div>. Her first card is done.",
    funFact:
      "The <div> tag was introduced in HTML 3.2 (1997) as a generic container with no semantic meaning. It quickly became the most overused tag in web history — a joke in the developer community being that some developers use <div> for everything, even when better semantic tags exist. This is called 'divitis'.",
    xpReward: 60,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "An HTML tag that has no content and no closing tag (like <br> or <img>) is called a ________ element.",
      correctAnswer: "void",
      explanation:
        "Void elements are HTML elements that cannot have any child content. They stand alone without a closing tag — examples include <br> (line break), <img> (image), <input> (form input), <hr> (horizontal rule), and <meta>. They are self-contained by definition.",
    },
  },

  // ─── 04 ───────────────────────────────────────────────────────────────────
  {
    title: "Headings, Paragraphs, and Text Formatting",
    content:
      "Priya is building the 'About TechNova' page for the portal. Her manager Sneha says: 'Make the content readable — use headings to organize it and highlight important words.' Priya knows about headings from Word documents, but HTML headings are different.\n\nHTML has six heading levels: <h1> through <h6>. Think of them like a newspaper: the headline is <h1> (biggest, most important), section titles are <h2>, sub-sections are <h3>, and so on. Rule: use only ONE <h1> per page — it is the main title. This matters for SEO (Google reads headings to understand your page). <h2>–<h6> can repeat.\n\nFor text formatting: <p> creates paragraphs with breathing space around them. <strong> bolds important text (semantically means 'important'). <em> italicizes text (semantically means 'emphasis'). <br> adds a single line break inside a paragraph. <hr> draws a horizontal dividing line. Priya writes: <h1>About TechNova Solutions</h1><h2>Our Mission</h2><p>We build <strong>enterprise software</strong> that helps businesses <em>scale efficiently</em>.</p>. The page now has structure and visual hierarchy.",
    funFact:
      "Using proper heading structure (h1, h2, h3 in order) is not just good style — it is a legal requirement in many countries under accessibility laws. Screen readers navigate pages by jumping between headings. A blind user relies on your h1-h6 structure to understand the page the same way a sighted user scans visually.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's page has three <h1> tags. Her SEO consultant says this is wrong. How many <h1> tags should a page ideally have?",
      options: ["As many as needed", "Exactly 2", "Only 1", "At least 3"],
      correctAnswer: "Only 1",
      explanation:
        "Each page should have exactly one <h1> — the main title or topic of the page. This helps search engines understand what the page is about. Multiple <h1> tags confuse both search engines and screen readers. Use <h2>–<h6> for section titles and sub-sections.",
    },
  },

  // ─── 05 ───────────────────────────────────────────────────────────────────
  {
    title: "Links and Images: Connecting the Web",
    content:
      "Priya is linking different pages of the TechNova portal together — the dashboard, employee directory, and announcements board. She asks Arjun: 'How do I make a clickable link in HTML?' He smiles — this is the most fundamental feature of the web.\n\nThe <a> tag (anchor tag) creates links. The href attribute holds the destination URL. <a href='https://technova.in'>Visit TechNova</a> creates a blue underlined link. For internal pages: <a href='employees.html'>Employee Directory</a>. Adding target='_blank' opens the link in a new browser tab — useful for external links. The rel='noopener noreferrer' attribute should always accompany target='_blank' for security reasons.\n\nImages use the <img> tag with two required attributes: src (where the image file is) and alt (a text description). Always write meaningful alt text: alt='Arjun Kumar smiling at camera' is good; alt='image' is useless. Images can be local files (<img src='images/logo.png'>) or external URLs (<img src='https://technova.in/logo.png'>). Priya also learns that <img> is a void element — no closing tag needed. She builds the navigation bar with linked pages and adds the company logo. The portal starts looking real.",
    funFact:
      "The 'href' in anchor tags stands for 'Hypertext REFerence' — it literally means a reference to another hypertext document. Tim Berners-Lee's original concept of 'hypertext' was that documents could reference each other, creating a web of connected information. That is exactly what makes the internet an interconnected web rather than separate islands of information.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya adds a link to an external news site. It should open in a new tab securely. Which is correct?",
      options: [
        "<a href='url' newtab='true'>",
        "<a href='url' target='_blank' rel='noopener noreferrer'>",
        "<a href='url' open='new'>",
        "<a href='url' target='new' safe='true'>",
      ],
      correctAnswer: "<a href='url' target='_blank' rel='noopener noreferrer'>",
      explanation:
        "target='_blank' opens in a new tab. The rel='noopener noreferrer' is critical for security — without it, the linked page can access your page via window.opener, creating a vulnerability called 'reverse tabnapping'. Always pair target='_blank' with rel='noopener noreferrer'.",
    },
  },

  // ─── 06 ───────────────────────────────────────────────────────────────────
  {
    title: "HTML Lists: Ordered and Unordered",
    content:
      "Sneha asks Priya to add a features list and a step-by-step onboarding guide to the portal. 'Perfect use case for HTML lists!' Arjun says. Priya discovers that HTML has two main types of lists — and choosing the right one matters.\n\nUnordered lists (<ul>) use bullet points and are for items without a specific order — like a feature list or navigation menu. Each item is wrapped in <li> (list item). Ordered lists (<ol>) are for sequential steps — like installation instructions or numbered procedures — and automatically display 1, 2, 3... numbering. You can even customize: <ol type='A'> for A, B, C or <ol start='5'> to begin at step 5.\n\nLists can be nested! Priya adds the features section: <ul><li>Employee Directory<ul><li>Search by name</li><li>Filter by department</li></ul></li><li>Leave Management</li></ul>. The nested list creates a sub-bullet inside the main bullet. For the onboarding guide she uses: <ol><li>Create your company email</li><li>Set up VPN<ol><li>Download the installer</li><li>Enter server address</li></ol></li><li>Log into the portal</li></ol>. Lists also power navigation menus — most nav bars are just CSS-styled <ul> elements!",
    funFact:
      "The most famous use of HTML lists you have seen every day is Google's search results page. Each search result is an <li> element inside a <ul>. When you think about styled lists, you probably imagine bullets — but with CSS you can make a list look like a horizontal navigation bar, a card grid, or a dropdown menu. Lists are incredibly versatile.",
    xpReward: 55,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to list the steps to reset a password in order. Which HTML tag should she use?",
      options: ["<ul>", "<list>", "<ol>", "<dl>"],
      correctAnswer: "<ol>",
      explanation:
        "Use <ol> (ordered list) when sequence matters — like steps, rankings, or procedures. The browser automatically numbers each <li> item. Use <ul> (unordered list) for items where order doesn't matter, like feature lists or navigation links. <dl> is a definition list for terms and descriptions.",
    },
  },

  // ─── 07 ───────────────────────────────────────────────────────────────────
  {
    title: "HTML Tables: Displaying Structured Data",
    content:
      "Priya's next task is building the 'Employee Leave Tracker' — a grid showing employee names, leave taken, leave remaining, and department. Her first instinct is to use <div> tags arranged in rows. Arjun stops her: 'For tabular data, always use a proper HTML table.'\n\nAn HTML table uses several tags working together. <table> wraps the whole thing. <thead> holds the header row. <tbody> holds the data rows. <tr> is a table row. <th> is a header cell (bold and centered by default). <td> is a data cell. The structure is: <table><thead><tr><th>Name</th><th>Department</th><th>Leave Taken</th></tr></thead><tbody><tr><td>Arjun Kumar</td><td>Front-end</td><td>3 days</td></tr></tbody></table>.\n\nCells can span multiple columns with colspan or multiple rows with rowspan. <td colspan='2'>Approved</td> makes one cell take up two column widths. Priya also adds a <caption> tag (a screen-reader-friendly title for the table): <caption>Employee Leave Summary — Q2 2024</caption>. Tables have fallen out of favor for layout (that is CSS Grid's job now), but for actual tabular data — spreadsheet-style content — they remain the correct semantic choice.",
    funFact:
      "In the early 2000s, before CSS layouts were reliable, web developers used HTML tables to create entire page layouts — placing navigation in one column, content in another, footer in a row below. This practice called 'table-based layout' was abandoned by 2010. Some legacy enterprise systems still use it, and developers who maintain them describe it as a painful experience.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants the 'Employee Name' header cell to span across two columns. Which attribute does she use?",
      options: ["rowspan='2'", "colspan='2'", "span='2'", "width='2'"],
      correctAnswer: "colspan='2'",
      explanation:
        "colspan='2' makes a table cell span across two columns horizontally. rowspan='2' would make it span two rows vertically. Use these to create merged cells in complex tables, like a header that covers two sub-columns below it.",
    },
  },

  // ─── 08 ───────────────────────────────────────────────────────────────────
  {
    title: "HTML Forms: Getting User Input",
    content:
      "Week 2 at TechNova. Priya is asked to build the 'New Employee Registration' form. This is her first encounter with HTML forms — the most interactive part of any HTML page. Forms are how users send data to a server.\n\nThe <form> tag wraps all form elements. The action attribute specifies where to send the data (a server URL). The method attribute is either 'get' (data visible in URL, for searches) or 'post' (data hidden in request body, for sensitive info like passwords). Inside forms, <input> handles most user input: type='text' for text, type='email' for email (auto-validates format), type='password' for hidden text, type='checkbox' for toggles, type='radio' for single-selection from a group, type='submit' for the submit button.\n\nThe <label> tag is crucial — it links to an input via the 'for' attribute matching the input's 'id'. Clicking the label focuses the input, which is great for usability. Priya builds: <form action='/register' method='post'><label for='name'>Full Name</label><input type='text' id='name' name='name'><label for='email'>Email</label><input type='email' id='email' name='email'><button type='submit'>Register Employee</button></form>. Her first interactive form is working.",
    funFact:
      "The HTML form element was introduced in HTML 2.0 in 1995. Before forms existed, websites were completely read-only — you could browse content but never interact with it or send data. Forms literally transformed the web from a library into an interactive platform, enabling email, e-commerce, social media, and everything that followed.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's registration form sends passwords. Which HTTP method should the form use?",
      options: ["get", "post", "send", "push"],
      correctAnswer: "post",
      explanation:
        "Use method='post' for any sensitive or large data. POST sends data in the request body (hidden from the URL and browser history). GET appends data to the URL — so a password sent via GET would appear as ?password=secret123 in the browser address bar and in server logs. Always use POST for login, registration, and payment forms.",
    },
  },

  // ─── 09 ───────────────────────────────────────────────────────────────────
  {
    title: "Form Validation with HTML5 Attributes",
    content:
      "Priya's registration form is live on the staging server. But during testing, Rahul (the QA engineer) submits the form with an empty name field and an invalid email address. The form accepts the bad data and sends it to the server. 'You need to validate inputs before submission!' Rahul says.\n\nHTML5 introduced built-in validation attributes that work without any JavaScript. The 'required' attribute makes a field mandatory — the form will refuse to submit if it's empty. The 'minlength' and 'maxlength' attributes set character limits. The 'pattern' attribute accepts a regex for complex rules. The 'min' and 'max' attributes work on number and date inputs. And 'type=email' automatically validates email format.\n\nPriya updates her form: <input type='text' id='name' name='name' required minlength='2' maxlength='50'> for the name field. <input type='email' id='email' name='email' required> auto-validates email format. <input type='number' name='experience' min='0' max='30'> for years of experience. <input type='date' name='joiningDate' min='2024-01-01' required> for join date. Now when Rahul submits an empty form, a browser tooltip appears saying 'Please fill out this field.' Zero JavaScript needed.",
    funFact:
      "Before HTML5 (pre-2010), every website had to write custom JavaScript code to validate forms — checking if an email contained '@', if a number was in range, if required fields were filled. Entire JavaScript libraries (like jQuery Validate) existed solely for form validation. HTML5's native validation attributes replaced thousands of lines of code with a few simple HTML attributes.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To make an input field mandatory so the form cannot be submitted without filling it, you add the ________ attribute to the input tag.",
      correctAnswer: "required",
      explanation:
        "The 'required' attribute is a boolean attribute — just adding it (without a value) makes the field mandatory. The browser will display an error message and prevent form submission if the field is empty. It works on input, select, and textarea elements.",
    },
  },

  // ─── 10 ───────────────────────────────────────────────────────────────────
  {
    title: "Semantic HTML5: Writing Meaningful Code",
    content:
      "After two weeks, Arjun does a code review of Priya's portal pages. He notices that she has wrapped everything in <div> tags — the navigation, the main content, the sidebar, the footer. He circles the code and writes: 'Divitis! Use semantic HTML5 elements.'\n\nSemantic HTML means using tags that describe their purpose, not just their appearance. Instead of <div id='header'>, use <header>. Instead of <div id='nav'>, use <nav>. Instead of <div id='main'>, use <main>. Instead of <div id='footer'>, use <footer>. HTML5 also added <article> (self-contained content like a blog post), <section> (a thematic grouping of content), <aside> (related but not essential content, like a sidebar), and <figure>/<figcaption> (images with captions).\n\nWhy does it matter? Three reasons. First: accessibility — screen readers navigate by semantic landmarks, letting blind users jump straight to <main> or <nav>. Second: SEO — Google understands semantic structure and ranks semantically correct pages higher. Third: maintainability — a colleague reading <header> instantly knows what it is, while <div id='top-wrapper-section'> requires guessing. Priya refactors the portal using proper semantics. Arjun approves the new PR.",
    funFact:
      "Screen readers used by visually impaired users have a 'landmarks' navigation mode — they jump between <header>, <nav>, <main>, <aside>, and <footer> directly, skipping all the content in between to find what they need. If your page only uses <div> tags, a screen reader user has to listen to every single element on the page to navigate — imagine having to sit through an entire movie to find one scene.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Which HTML5 semantic element should wrap a standalone blog post or news article?",
      options: ["<div>", "<section>", "<article>", "<main>"],
      correctAnswer: "<article>",
      explanation:
        "<article> is for self-contained content that makes sense on its own — like a blog post, news article, forum post, or product card. <section> is for thematic groupings within a page. <main> is for the primary content of the page (used once). <div> has no semantic meaning and should be a last resort.",
    },
  },

  // ─── 11 ───────────────────────────────────────────────────────────────────
  {
    title: "HTML5 Media: Audio and Video",
    content:
      "Month 2 at TechNova. Priya is assigned to build a training portal section where new hires watch onboarding videos and listen to recorded team meetings. Her previous approach of using YouTube embeds for everything is not scalable. Arjun introduces her to HTML5 native media elements.\n\nThe <video> element replaces old Flash video players entirely. Basic usage: <video src='onboarding.mp4' controls width='640' height='360'></video>. The 'controls' attribute adds play/pause/volume controls automatically. Add 'autoplay' to start playing immediately (avoid this — it is annoying to users!). Add 'muted' to autoplay without sound (browsers allow muted autoplay but block audio autoplay). Add 'loop' for continuous play. For fallback across browsers, provide multiple formats: <video controls><source src='onboarding.mp4' type='video/mp4'><source src='onboarding.webm' type='video/webm'>Your browser does not support video.</video>.\n\nThe <audio> element works identically for sound: <audio controls><source src='meeting-recording.mp3' type='audio/mpeg'>Your browser does not support audio.</audio>. Both elements support poster (a thumbnail image shown before the video plays). Priya creates a beautiful video library page for the training portal using these elements.",
    funFact:
      "Before HTML5 introduced native <video> in 2009, playing video on websites required Adobe Flash Player, a third-party browser plugin. Apple famously refused to support Flash on the iPhone (Steve Jobs wrote an open letter about it in 2010 called 'Thoughts on Flash'). This forced the entire web to switch to HTML5 video. Adobe officially killed Flash in December 2020.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants a training video to start playing automatically on page load without sound. Which combination of attributes should she use?",
      options: [
        "autoplay only",
        "autoplay and muted",
        "autoplay and controls",
        "loop and controls",
      ],
      correctAnswer: "autoplay and muted",
      explanation:
        "Browsers block autoplay with audio to prevent annoying experiences. To autoplay a video, it must also be muted. 'autoplay muted' together is the correct combination for video that should start immediately (like a hero background video). Always give users a way to unmute — usually with a toggle button.",
    },
  },

  // ─── 12 ───────────────────────────────────────────────────────────────────
  {
    title: "What is CSS? Styling Your Web Pages",
    content:
      "Priya's portal has great HTML structure but looks like a plain text document — black text on a white background, no colors, no layout, no personality. Arjun says: 'Time to add CSS. This is where your page goes from a skeleton to a real design.'\n\nCSS stands for Cascading Style Sheets. While HTML says WHAT the content is, CSS says HOW it should look. CSS controls colors, fonts, spacing, layout, animations, and responsiveness. The 'Cascading' part means styles flow downward through rules — later rules override earlier ones if they target the same element, and more specific rules override general ones.\n\nThere are three ways to add CSS. Inline: <p style='color: red;'>. Internal: <style> tag in <head>. External: a separate .css file linked with <link rel='stylesheet' href='style.css'>. External CSS is always the best approach — it keeps HTML and CSS separate, and one CSS file can style an entire website of 100 pages. Priya links an external stylesheet and writes her first rules: body { font-family: Arial, sans-serif; background-color: #f5f5f5; } h1 { color: #2563eb; } — and suddenly, the portal looks like a real website.",
    funFact:
      "CSS was proposed by Hakon Wium Lie in 1994 while working at CERN alongside Tim Berners-Lee. Before CSS, all styling was done with HTML attributes like <font color='red'> and bgcolor — which meant styling had to be duplicated on every single page. The separation of HTML (structure) and CSS (presentation) was a revolutionary idea that made the modern web possible.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya has a CSS rule in a linked stylesheet AND an inline style on the same element. Which takes priority?",
      options: [
        "The stylesheet rule always wins",
        "The inline style always wins",
        "Whichever comes first wins",
        "They combine automatically",
      ],
      correctAnswer: "The inline style always wins",
      explanation:
        "Inline styles have the highest specificity — they override both internal and external stylesheet rules. This is why inline styles should be avoided except for very specific one-off cases. The CSS cascade order from lowest to highest priority is: browser defaults < external stylesheet < internal <style> tag < inline styles < !important.",
    },
  },

  // ─── 13 ───────────────────────────────────────────────────────────────────
  {
    title: "CSS Selectors: Targeting Elements",
    content:
      "Priya has written some CSS but she's applying the same styles to everything by repeating code. Arjun does a review: 'You need to master selectors — how to target exactly the right elements without over-selecting.' This is where CSS becomes powerful.\n\nThe basic selectors: Element selector (p { }) targets all paragraphs. Class selector (.card { }) targets all elements with class='card'. ID selector (#header { }) targets the single element with id='header'. Combining them: a.active { } targets only <a> tags that also have class 'active'. The descendant combinator (nav a { }) targets all <a> tags inside any <nav>. The child combinator (ul > li { }) targets only direct <li> children of <ul>, not deeply nested ones.\n\nPowerful selectors: The attribute selector (input[type='email'] { }) targets inputs with a specific type. The pseudo-class a:hover { } applies when the user hovers over a link. The :first-child and :last-child selectors target first and last siblings. The :nth-child(2n) selector targets every even element (great for alternating table row colors). Priya uses .employee-card:hover { transform: translateY(-4px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); } to add a satisfying hover lift effect to all cards at once.",
    funFact:
      "CSS specificity is calculated like a point system. ID selectors score 100 points, class selectors score 10, element selectors score 1. So '#nav .item a:hover' scores 100+10+1+10=121 points. The highest-scoring rule wins the conflict. Some developers accidentally create 'specificity wars' — overriding rules with higher and higher specificity until the code becomes unmaintainable. This is why modern CSS uses low-specificity classes rather than IDs.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants to style only the direct <li> children of a <ul>, not nested <li> elements inside them. Which selector should she use?",
      options: ["ul li { }", "ul > li { }", "ul + li { }", "ul ~ li { }"],
      correctAnswer: "ul > li { }",
      explanation:
        "The child combinator (>) selects only direct children. 'ul > li' matches <li> elements that are immediate children of <ul>. 'ul li' (descendant combinator) would select ALL <li> elements inside the <ul>, including deeply nested ones. The '+' is the adjacent sibling combinator and '~' is the general sibling combinator.",
    },
  },

  // ─── 14 ───────────────────────────────────────────────────────────────────
  {
    title: "Colors, Backgrounds, and Gradients",
    content:
      "TechNova's brand colors are deep blue (#1E3A5F) and vibrant orange (#F97316). Priya needs to apply the brand identity across the portal. Her senior Sneha has given her the brand guidelines doc. Now she needs to implement them in CSS.\n\nCSS supports multiple color formats. Hex codes (#1E3A5F) are the most common — 6 characters representing red, green, and blue values in base-16. RGB gives three 0-255 values: rgb(30, 58, 95). RGBA adds opacity: rgba(30, 58, 95, 0.8) means 80% opaque. HSL (hue, saturation, lightness) is most intuitive for designers: hsl(210, 52%, 25%).\n\nBackgrounds: background-color sets a solid fill. background-image: url('hero.jpg') sets an image. background-size: cover fills the container completely (good for hero sections). background-position: center centers the image. background-repeat: no-repeat prevents tiling. Gradients are backgrounds too: background: linear-gradient(135deg, #1E3A5F, #F97316) creates a diagonal blue-to-orange gradient for the hero banner. background: radial-gradient(circle, #F97316, #1E3A5F) radiates from center outward. Priya builds a stunning hero banner with the company gradient. The portal now feels like a real product.",
    funFact:
      "CSS named colors were originally inspired by VGA color names from the 1980s. There are 140 named CSS colors — including oddities like 'rebeccapurple' (#663399), which was added in 2014 in memory of Rebecca Meyer, the daughter of CSS developer Eric Meyer who passed away at age 6. It is the only named CSS color named after a real person.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants a hero background image that always covers the entire container without repeating, centered. Which CSS properties achieve this?",
      options: [
        "background-size: contain; background-repeat: repeat",
        "background-size: cover; background-repeat: no-repeat; background-position: center",
        "background-size: 100%; background-position: top left",
        "background: fill; background-repeat: none",
      ],
      correctAnswer:
        "background-size: cover; background-repeat: no-repeat; background-position: center",
      explanation:
        "background-size: cover scales the image to fully cover the container (may crop edges). background-repeat: no-repeat prevents tiling. background-position: center keeps the focal point of the image visible. This three-property combination is the standard for full-bleed background images in hero sections.",
    },
  },

  // ─── 15 ───────────────────────────────────────────────────────────────────
  {
    title: "Typography: Fonts, Sizes, and Line Heights",
    content:
      "Priya is struggling with the portal's readability. The text feels cramped and hard to read. In a meeting, the UX designer Rahul walks her through typography — the art and science of making text readable and beautiful.\n\nFonts in CSS: font-family sets the typeface. You list fallbacks: font-family: 'Poppins', 'Segoe UI', Arial, sans-serif — if Poppins is unavailable, try Segoe UI, then Arial, then any sans-serif. To use Google Fonts, add a <link> in HTML and reference by name. Font size: font-size: 16px is the browser default body text (never go below 16px for body). Better: use rem units (relative to root font size) — font-size: 1.125rem is 18px if root is 16px. This scales with user accessibility settings.\n\nCritical typography properties: line-height: 1.6 (no units!) sets comfortable line spacing — 1.4-1.7 is the readable sweet spot. letter-spacing: 0.02em adds slight space between characters. text-align: left/center/right/justify. font-weight: 400 (regular), 600 (semi-bold), 700 (bold). Priya applies: body { font-family: 'Poppins', sans-serif; font-size: 1rem; line-height: 1.6; color: #1a1a2e; } h1 { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.02em; }. The portal suddenly looks polished.",
    funFact:
      "The reason most websites use 16px as the default body font size is because that is the browser default — and the browser default exists because that is the optimal size for reading on a typical screen from a typical distance. Studies show that text below 14px increases reading errors and eye strain significantly, especially for users over 40. Never reduce base font size for 'aesthetic' reasons.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To set font size using units relative to the root element's font size (so it respects user accessibility settings), Priya should use ________ units instead of px.",
      correctAnswer: "rem",
      explanation:
        "rem (root em) is relative to the font-size of the <html> element (usually 16px by default). 1.5rem = 24px. Unlike px (fixed), rem scales when users change their browser's base font size in accessibility settings. em is relative to the parent element's font size, which can cascade and cause unexpected results.",
    },
  },

  // ─── 16 ───────────────────────────────────────────────────────────────────
  {
    title: "The CSS Box Model: Margins, Padding, Borders",
    content:
      "Priya is trying to space out elements on the portal but the spacing looks wrong — sometimes too cramped, sometimes spilling outside their containers. Arjun draws a box on the whiteboard: 'Every element in CSS is a box. Understanding the box model is fundamental to everything.'\n\nEvery HTML element is a rectangular box consisting of four layers from inside out: Content (the actual text or image), Padding (space between content and border — transparent but colored with background), Border (the line around the element), Margin (transparent space outside the border, separating this element from others). When you set width: 300px, by default that is only the content width — padding and border add to the total size (this is content-box sizing).\n\nThe box-sizing: border-box property changes this so width: 300px means the total element width including padding and border. Arjun strongly recommends: * { box-sizing: border-box; } as the first rule in every stylesheet. Priya applies it and immediately the layout stops behaving unexpectedly. She adds to the employee card: padding: 24px gives internal breathing room. border: 1px solid #e5e7eb adds a subtle border. margin-bottom: 16px separates cards. border-radius: 8px rounds the corners. The cards now look clean and professional.",
    funFact:
      "The box-sizing: border-box was inspired by Internet Explorer's quirks mode from the early 2000s. IE calculated box widths including padding and border by default — which was actually more intuitive. When CSS standards finalized border-box as an opt-in property, developers discovered they preferred IE's behavior! It is now universally recommended to apply border-box globally via * { box-sizing: border-box; }.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A card has width: 200px, padding: 20px, and border: 2px. With the default box-sizing, what is the total rendered width?",
      options: ["200px", "240px", "244px", "242px"],
      correctAnswer: "244px",
      explanation:
        "Default box-sizing is content-box: width only sets the content area. Total width = content (200px) + left padding (20px) + right padding (20px) + left border (2px) + right border (2px) = 244px. With box-sizing: border-box, setting width: 200px would make the total rendered width exactly 200px, with content shrinking to fit.",
    },
  },

  // ─── 17 ───────────────────────────────────────────────────────────────────
  {
    title: "CSS Display: Block, Inline, Inline-Block",
    content:
      "Priya is trying to put navigation links side by side, but they keep stacking vertically. She tries giving them a width and height, but nothing happens. Arjun explains: 'It is a display problem. Understanding display values is essential for any layout.'\n\nBlock elements (div, p, h1, section, article, ul, li) take up the full width of their container and always start on a new line. You can set width, height, margin, and padding on them freely. Inline elements (span, a, strong, em) only take up as much space as their content, flow horizontally with text, and ignore width and height settings.\n\nInline-block is the hybrid: elements flow horizontally like inline elements, but you can set width, height, top/bottom margins and padding like block elements. Priya wraps her nav links in <a class='nav-link'> and applies: .nav-link { display: inline-block; padding: 8px 16px; margin-right: 8px; }. The links now sit side by side horizontally. She also learns display: none (completely hides an element, removing it from layout flow — used for modals and dropdown menus) and visibility: hidden (hides but preserves the space in layout). These two behave very differently.",
    funFact:
      "The difference between display: none and visibility: hidden trips up developers all the time. Imagine a row of chairs in a cinema. visibility: hidden is like making a person invisible — the chair is still there, it is just empty. display: none is like removing the chair entirely — other chairs shift to fill the gap. This distinction matters hugely for layout when you are toggling elements visible and invisible.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya uses display: none on a sidebar during mobile view. A user reports that on a screen reader, the sidebar content is still being read aloud. What should she use instead?",
      options: [
        "visibility: hidden",
        "opacity: 0",
        "display: none is correct, the screen reader should skip it",
        "position: absolute; left: -9999px",
      ],
      correctAnswer:
        "display: none is correct, the screen reader should skip it",
      explanation:
        "display: none is actually correct here — it removes the element from both the visual layout AND the accessibility tree, so screen readers skip it. visibility: hidden hides visually but keeps it in the accessibility tree (screen readers still announce it). opacity: 0 makes invisible but interactive and announced. For truly hiding from all users, display: none is the right choice.",
    },
  },

  // ─── 18 ───────────────────────────────────────────────────────────────────
  {
    title: "CSS Flexbox: One-Dimensional Layouts",
    content:
      "Priya needs to build the portal's dashboard — a row of metric cards that should center horizontally, be evenly spaced, and wrap onto the next row on smaller screens. She tries float-based layouts (old CSS) and it is a nightmare. Arjun says: 'Stop fighting with floats. Use Flexbox — it is made for exactly this.'\n\nFlexbox is a one-dimensional layout system — it arranges items in either a row or a column. Apply it to a container: .dashboard { display: flex; }. Now all direct children become flex items arranged in a horizontal row by default. flex-direction: row (horizontal) or column (vertical). justify-content controls horizontal alignment: flex-start (left), center (middle), flex-end (right), space-between (even gaps between items), space-around (equal space around each item). align-items controls vertical alignment within the row: flex-start (top), center (middle), flex-end (bottom), stretch (fill height).\n\nFor the dashboard: .dashboard { display: flex; flex-wrap: wrap; gap: 16px; } and .metric-card { flex: 1 1 200px; } — flex: 1 1 200px means 'can grow, can shrink, starts at 200px wide.' This makes cards fill available space but wrap when they cannot fit. Priya's dashboard now perfectly distributes cards on desktop (4 per row) and wraps to 2-per-row on tablets and 1-per-row on mobile — all with a few lines of CSS.",
    funFact:
      "Before Flexbox (which became widely supported around 2014-2015), developers used 'float: left' to create multi-column layouts. Floats were invented for wrapping text around images (like magazines), not page layout — but developers forced them into layout duty for 15 years because there was no better option. Flexbox and Grid finally gave CSS real layout tools, making float-based layouts obsolete overnight.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants the three metric cards inside a flex container to have equal spacing between them, but no space on the outer edges. Which value should she use?",
      options: [
        "justify-content: space-around",
        "justify-content: space-between",
        "justify-content: center",
        "justify-content: space-evenly",
      ],
      correctAnswer: "justify-content: space-between",
      explanation:
        "space-between puts equal space between items with no space at the outer edges. space-around puts equal space around each item (so outer edges get half the space of inner gaps). space-evenly puts equal space everywhere including outer edges. center groups all items in the middle with no gaps. For that classic 'items spread across the container' look, space-between is the right choice.",
    },
  },

  // ─── 19 ───────────────────────────────────────────────────────────────────
  {
    title: "CSS Grid: Two-Dimensional Layouts",
    content:
      "The portal now needs a full page layout: a header spanning the full width, a sidebar on the left, main content on the right, and a footer spanning the full width. Flexbox handles one dimension at a time. For this two-dimensional layout, Arjun introduces CSS Grid.\n\nCSS Grid creates a two-dimensional grid of rows and columns. On the container: .layout { display: grid; grid-template-columns: 250px 1fr; grid-template-rows: auto 1fr auto; gap: 0; height: 100vh; }. The '1fr' unit means 'take up one fraction of the remaining space.' grid-template-areas lets you name regions and place them visually: .layout { grid-template-areas: 'header header' 'sidebar main' 'footer footer'; }. Then assign elements: header { grid-area: header; } sidebar { grid-area: sidebar; } main { grid-area: main; } footer { grid-area: footer; }.\n\nThe power of Grid: items can span multiple rows and columns. An element with grid-column: 1 / 3 spans from column line 1 to 3 (covers both columns). grid-column: 1 / -1 spans all columns regardless of count. Priya builds the entire portal layout in 15 lines of CSS — something that would have taken 100+ lines with older CSS techniques. Grid and Flexbox are complementary: Grid for overall page structure, Flexbox for component-level layouts within each grid area.",
    funFact:
      "CSS Grid was largely designed by Rachel Andrew and Jen Simmons based on real-world layout needs. Before Grid, magazine-style layouts (multiple columns, items spanning rows) were nearly impossible in pure CSS — developers used JavaScript libraries like Masonry.js to achieve them. Grid brought native support for what designers had always envisioned, and its adoption caused one developer to tweet: 'CSS Grid is the layout system CSS always deserved and has finally shipped.'",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya has a 3-column grid and wants the header to span all 3 columns. Which CSS shorthand achieves this?",
      options: [
        "grid-column: span 3",
        "grid-column: full",
        "flex: 3",
        "column-span: all",
      ],
      correctAnswer: "grid-column: span 3",
      explanation:
        "grid-column: span 3 tells the element to span 3 columns from its starting position. You can also use grid-column: 1 / 4 (from line 1 to line 4) or grid-column: 1 / -1 (from first line to last line, works for any number of columns). The 'span' keyword is more readable when you know how many columns to span.",
    },
  },

  // ─── 20 ───────────────────────────────────────────────────────────────────
  {
    title: "CSS Positioning: Static, Relative, Absolute, Fixed",
    content:
      "Priya is trying to add a notification badge on the user avatar in the portal header — a small red circle showing '3' for 3 new notifications. She cannot figure out how to position it on top of the avatar image. Arjun says: 'This is a classic positioning pattern. Learn the four position values.'\n\nposition: static is the default — elements flow normally in the document. position: relative moves an element from its normal position using top/right/bottom/left, but its original space is preserved in the layout. Crucially, it becomes a positioning context for absolutely-positioned children. position: absolute removes the element from normal flow and positions it relative to its nearest positioned ancestor. If no positioned ancestor exists, it uses the viewport. position: fixed positions relative to the viewport — it stays put when scrolling (used for sticky headers, floating chat buttons).\n\nFor the notification badge: .avatar-wrapper { position: relative; } .badge { position: absolute; top: -4px; right: -4px; background: red; width: 18px; height: 18px; border-radius: 50%; }. The badge sits in the top-right corner of the avatar, precisely where Priya wanted. Arjun also shows position: sticky — the element scrolls normally until it hits a threshold (top: 0), then sticks like fixed. Perfect for sticky table headers.",
    funFact:
      "The z-index property only works on positioned elements (anything that is not position: static). It controls the stacking order — higher z-index appears on top. This creates 'stacking contexts' — a common source of bugs where a popup appears behind a sidebar because of mismatched z-index values. The highest z-index used in production websites is often comically large — some developers have used z-index: 9999999 in a desperate attempt to get something to appear on top.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants the portal header to stay at the top of the screen even when users scroll down. Which position value achieves this?",
      options: [
        "position: absolute",
        "position: relative",
        "position: fixed",
        "position: sticky",
      ],
      correctAnswer: "position: fixed",
      explanation:
        "position: fixed positions an element relative to the browser viewport and it stays there when scrolling. position: sticky is similar but scrolls with the page until it reaches a threshold, then sticks — useful for table headers or nav sections within a scrollable container. For a site header that always stays at the top of the screen, position: fixed with top: 0; width: 100% is the standard approach.",
    },
  },

  // ─── 21 ───────────────────────────────────────────────────────────────────
  {
    title: "Responsive Design: Media Queries",
    content:
      "The TechNova portal looks great on desktop. But during a client demo, someone opens it on their phone and the layout is completely broken — text overflows, cards are squished, buttons are too small to tap. Arjun is calm: 'We need media queries. Time to make this responsive.'\n\nMedia queries let you apply CSS rules conditionally based on the viewport width. @media (max-width: 768px) { } contains rules that apply only when the screen is 768px wide or narrower. Common breakpoints: 1200px (large desktop), 1024px (desktop), 768px (tablet), 480px (mobile). Priya adds: @media (max-width: 768px) { .dashboard { flex-direction: column; } .sidebar { display: none; } .metric-card { width: 100%; } }.\n\nMedia queries also work for print (@media print { }), dark mode (@media (prefers-color-scheme: dark) { }), and reduced motion (@media (prefers-reduced-motion: reduce) { }). The viewport meta tag in HTML is required for media queries to work on mobile — without it, the phone pretends to be a 980px-wide desktop and never triggers mobile breakpoints. Priya tests on Chrome DevTools using the device emulator and incrementally adjusts breakpoints until the portal looks good at every screen size.",
    funFact:
      "The term 'responsive web design' was coined by designer Ethan Marcotte in a 2010 article on A List Apart. Before this, websites had separate mobile versions at 'm.website.com' that had to be maintained independently. Marcotte proposed using CSS media queries to make one site adapt to all screens — a concept so valuable it became the universal standard within two years of the article's publication.",
    xpReward: 90,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Priya writes CSS rules that should apply only when the screen width is 600px or less. She should use: @media (________ : 600px) { }",
      correctAnswer: "max-width",
      explanation:
        "max-width: 600px means 'apply these rules when the viewport is at most 600px wide' — i.e., on screens 600px and narrower (mobile). min-width: 600px would mean 'apply when viewport is at least 600px' — i.e., on screens 600px and wider (desktop-first approach). Most modern responsive designs use min-width (mobile-first), but max-width is common when retrofitting existing desktop sites.",
    },
  },

  // ─── 22 ───────────────────────────────────────────────────────────────────
  {
    title: "CSS Animations and Transitions",
    content:
      "Priya has built a solid portal, but it feels static and lifeless. Rahul (the UX designer) says: 'We need motion — subtle animations make the experience feel premium and polished. But done wrong, they feel cheap and distracting.' He walks Priya through CSS transitions and animations.\n\nTransitions animate between two states. .btn { background: #1E3A5F; transition: background 0.2s ease, transform 0.2s ease; } .btn:hover { background: #F97316; transform: translateY(-2px); } — hovering the button smoothly animates the color and lifts it 2 pixels. Transition syntax: property, duration, timing-function (ease, linear, ease-in-out). The 'ease' timing mimics natural physics (starts fast, slows down).\n\nFor more complex animations, use @keyframes: @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } .card { animation: fadeIn 0.4s ease-out; }. The card fades in from slightly below when the page loads. animation-delay staggers multiple cards: .card:nth-child(2) { animation-delay: 0.1s; } .card:nth-child(3) { animation-delay: 0.2s; }. Priya adds these subtle animations and the portal immediately feels like a modern web app.",
    funFact:
      "The human brain processes motion through the peripheral vision even when focused elsewhere. This is why subtle animations draw attention effectively. But too many animations trigger what researchers call 'animation fatigue' — users find the page overwhelming and mentally exhausting. The golden rule in animation design: less than 300ms for micro-interactions, animate only transform and opacity (never layout properties like width or height), and always respect prefers-reduced-motion for users with vestibular disorders.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya adds animations, but some users report dizziness. What CSS media query should she use to disable animations for these users?",
      options: [
        "@media (no-animation: true)",
        "@media (prefers-reduced-motion: reduce)",
        "@media (accessibility: motion-sensitive)",
        "@media (animation-disabled: yes)",
      ],
      correctAnswer: "@media (prefers-reduced-motion: reduce)",
      explanation:
        "prefers-reduced-motion: reduce matches users who have enabled 'Reduce Motion' in their OS accessibility settings (available on Windows, macOS, iOS, Android). These users may have vestibular disorders, epilepsy, or motion sickness triggered by screen animations. Best practice: wrap all non-essential animations inside @media (prefers-reduced-motion: no-preference) so they only play for users who have NOT requested reduced motion.",
    },
  },

  // ─── 23 ───────────────────────────────────────────────────────────────────
  {
    title: "CSS Variables: Reusable Styling Values",
    content:
      "TechNova rebrand! The brand team announces new colors — the primary blue changes from #1E3A5F to #0F4C81. Priya's heart sinks. That color appears in 47 places across 12 CSS files. She spends two hours doing find-and-replace, misses three instances, and the portal has inconsistent colors. Arjun watches sympathetically: 'This is exactly why we use CSS variables.'\n\nCSS custom properties (CSS variables) are values defined once and reused everywhere. You define them inside a :root selector (which targets the <html> element, making variables available globally): :root { --color-primary: #0F4C81; --color-accent: #F97316; --font-heading: 'Poppins', sans-serif; --spacing-md: 16px; --border-radius: 8px; }. Then use them: .btn { background: var(--color-primary); padding: var(--spacing-md); border-radius: var(--border-radius); }.\n\nNow for the next rebrand, Priya changes one line. Done. CSS variables also enable dark mode elegantly: [data-theme='dark'] { --color-primary: #60a5fa; --bg-color: #0f172a; }. Toggle a data attribute on <html> and every styled element updates instantly. They cascade like regular CSS — you can override in a specific scope: .hero { --color-primary: white; }. This makes the hero section use white for all elements that reference --color-primary.",
    funFact:
      "CSS custom properties were proposed in 2012 and achieved wide browser support in 2017. Before they existed, developers used a CSS preprocessor called SASS or LESS to write variables in a non-standard superset of CSS that compiled down to regular CSS. Now that native CSS variables are universal, the need for preprocessors for variable support has largely disappeared.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To define a CSS variable called 'brand-color' with value #0F4C81, you write inside :root { ________ : #0F4C81; }",
      correctAnswer: "--brand-color",
      explanation:
        "CSS custom properties (variables) always start with two dashes: --variable-name. This double-dash prefix distinguishes them from standard CSS properties. You define them (--brand-color: #0F4C81) and use them (color: var(--brand-color)). The var() function also supports a fallback: var(--brand-color, blue) uses blue if --brand-color is not defined.",
    },
  },

  // ─── 24 ───────────────────────────────────────────────────────────────────
  {
    title: "Pseudo-Classes and Pseudo-Elements",
    content:
      "Priya is polishing the portal's interactive elements. She wants the active navigation link to look different, form inputs to change border color when focused, and a decorative line to appear before every section heading. But she does not want to add extra HTML elements. Arjun shows her pseudo-classes and pseudo-elements.\n\nPseudo-classes target elements based on their state or position. :hover applies when the mouse is over an element. :focus applies when an element is keyboard-focused (critical for accessibility). :active applies during click. :visited tracks visited links. :checked targets checked checkboxes. :disabled targets disabled inputs. :nth-child(n) targets specific positions. :first-child and :last-child target extremes. Priya uses: .nav-link:hover { color: var(--color-accent); } input:focus { border-color: var(--color-primary); outline: 2px solid var(--color-primary); outline-offset: 2px; }\n\nPseudo-elements create virtual elements without touching HTML. ::before inserts a virtual element before the content. ::after inserts one after. They require content: '' (even empty string) to render. h2::before { content: ''; display: block; width: 40px; height: 3px; background: var(--color-accent); margin-bottom: 8px; } — this adds an orange accent bar before every h2 heading. Also: ::placeholder styles input placeholder text, ::selection styles highlighted text, ::first-line styles just the first line of a paragraph.",
    funFact:
      "CSS :focus styles were removed from many early 2000s websites because designers found the default blue outline 'ugly.' This created a massive accessibility disaster — keyboard users (including people who cannot use a mouse) had no visual indicator of where they were on the page. Browser vendors eventually added :focus-visible which only shows focus styles for keyboard navigation but hides them for mouse clicks, solving both the aesthetic and accessibility concerns simultaneously.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants to add a decorative orange dot before every list item without adding extra HTML. Which CSS technique should she use?",
      options: [
        "li:before { }",
        "li::before { content: '•'; color: orange; }",
        "li:first-child { }",
        "li[before] { content: dot; }",
      ],
      correctAnswer: "li::before { content: '•'; color: orange; }",
      explanation:
        "The ::before pseudo-element inserts a virtual element as the first child of the selected element. The content property is required and can be a string ('•'), empty (''), a URL, or counter(). Combined with position: absolute, it can create complex decorative effects without touching HTML. Note the double colon (::) distinguishes pseudo-elements from pseudo-classes (:).",
    },
  },

  // ─── 25 ───────────────────────────────────────────────────────────────────
  {
    title: "Bootstrap: The Most Popular CSS Framework",
    content:
      "A new team member joins TechNova who previously worked at a startup. He has built their entire frontend using Bootstrap. Priya is asked to maintain part of it. 'What is Bootstrap?' she asks Arjun. 'The most widely used CSS framework in the world,' he replies.\n\nBootstrap is a pre-built CSS (and JavaScript) library from Twitter that gives you hundreds of ready-made components and a responsive grid system. Instead of writing all your CSS from scratch, you add Bootstrap classes to HTML elements: <button class='btn btn-primary'> gives a styled blue button instantly. <div class='container'> creates a centered, max-width container. The 12-column grid system: <div class='row'><div class='col-md-8'>Main</div><div class='col-md-4'>Sidebar</div></div> creates a sidebar layout that stacks vertically on mobile (col-md means 'apply 8/4 split on medium screens and above').\n\nBootstrap provides alert boxes, cards, modals, navigation bars, dropdowns, forms, badges, progress bars, and more — all styled and responsive out of the box. The tradeoff: Bootstrap sites can look similar to each other without heavy customization (the 'Bootstrap look'). It also adds weight (the full bundle is ~300KB). Modern Bootstrap 5 dropped jQuery dependency and works with pure CSS variables for theming. Priya sets up Bootstrap for the legacy section: <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'>.",
    funFact:
      "Bootstrap was created by Twitter employees Mark Otto and Jacob Thornton in 2010 as an internal tool to maintain consistency across Twitter's internal tools. They open-sourced it in 2011, and it became the most starred project on GitHub by 2012 — less than one year after release. At its peak, over 20% of all websites on the internet used Bootstrap, making it the most impactful CSS framework ever created.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Bootstrap's 12-column grid, Priya wants a sidebar that takes 4 columns on desktop but full width on mobile. Which class combination should the sidebar div have?",
      options: [
        "col-4",
        "col-sm-4 col-mobile-12",
        "col-12 col-md-4",
        "col-lg-4 col-full",
      ],
      correctAnswer: "col-12 col-md-4",
      explanation:
        "Bootstrap uses a mobile-first approach. col-12 sets full width (all 12 columns) by default (mobile). col-md-4 overrides to 4 columns on medium screens (768px+) and larger. Bootstrap breakpoints: col (all), col-sm (576px+), col-md (768px+), col-lg (992px+), col-xl (1200px+). Applied classes cascade upward — col-md-4 also applies on large and xl screens unless overridden.",
    },
  },

  // ─── 26 ───────────────────────────────────────────────────────────────────
  {
    title: "CSS Best Practices: Clean, Maintainable Code",
    content:
      "Three months into the project, TechNova's portal CSS has grown to 2,000 lines. A new developer joins and says: 'I cannot understand this CSS at all — there are styles everywhere, some are duplicated, and nothing is organized.' Arjun calls a CSS refactoring session. He teaches the team CSS best practices.\n\nOrganization: Structure CSS in layers — custom properties (variables) first, base resets, layout components, UI components, utilities, then page-specific overrides. Use consistent naming conventions — BEM (Block__Element--Modifier) is popular: .card { } .card__title { } .card--featured { }. Group related properties: position-related properties together, box-model together, typography together, visual (colors, shadows) together.\n\nMaintainability rules: Avoid !important (it breaks the cascade and signals bad architecture). Keep specificity low — prefer class selectors over complex selectors. Do not repeat values — use variables. Write comments for non-obvious rules: /* Negative margin compensates for parent padding */. Avoid deep nesting — if your selector is .sidebar .nav .item .link:hover, you have a specificity problem. Remove unused CSS regularly (tools like PurgeCSS can automate this). Arjun also shows the shorthand consolidation: margin: 16px 8px (top-bottom 16px, left-right 8px) instead of four separate margin properties.",
    funFact:
      "The largest CSS file ever discovered in the wild was 61,000 lines in a major enterprise application. The developers had been adding styles for years without ever removing old ones. When the team finally refactored it, the production CSS went from 61,000 lines to 4,200 lines — an 93% reduction — with no visual change to the website. CSS bloat is a real performance problem: large CSS files delay rendering because the browser must download and parse the entire file before displaying anything.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In BEM (Block Element Modifier) naming, a button that is part of a card and is in a 'disabled' state would be named: .card________button--disabled (fill in the BEM separator between 'card' and 'button')",
      correctAnswer: "__",
      explanation:
        "BEM uses __ (double underscore) to separate Block from Element: .card__button means 'the button element of the card block'. It uses -- (double hyphen) for Modifiers: .card__button--disabled means 'the disabled state of the button element inside the card block'. BEM makes CSS self-documenting — you know the component structure just from reading the class names.",
    },
  },

  // ─── 27 ───────────────────────────────────────────────────────────────────
  {
    title: "Building a Portfolio Page",
    content:
      "Priya is preparing for her 6-month performance review. Arjun recommends: 'Build a personal portfolio website — it showcases your work and is impressive for future employers.' Priya decides to apply everything she has learned. She opens VS Code and starts from scratch.\n\nThe portfolio structure: Hero section (name, role, CTA button), About section (photo, bio, skills), Projects section (card grid of work), Experience section (timeline), and Contact section (form + social links). She uses semantic HTML5: <header> for the sticky nav, <main> with <section> elements for each part, <footer> for links. Her hero uses: <section class='hero'><h1>Priya Sharma</h1><p class='hero-subtitle'>Front-End Developer at TechNova Solutions</p><a href='#projects' class='btn btn-primary'>View My Work</a></section>.\n\nFor layout, she uses CSS Grid for the overall page and Flexbox for the projects card grid. CSS custom properties define her personal brand: --color-primary: #6366f1; --color-accent: #f59e0b; --font-heading: 'Inter', sans-serif;. The projects section: .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; } — this creates a responsive grid that automatically adjusts columns based on screen width, with no media queries needed! The auto-fit and minmax combination is one of the most powerful one-liners in CSS.",
    funFact:
      "The CSS value repeat(auto-fit, minmax(300px, 1fr)) is often called 'the holy grail of responsive grids.' It creates a responsive grid that automatically adjusts the number of columns based on available space — no media queries needed. If the container is 900px, you get 3 columns of 300px. If it shrinks to 600px, it shifts to 2 columns. Below 300px, it goes to 1 column. All without writing a single @media query.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants the projects grid to automatically adjust from 4 columns to 1 column based on screen width without writing any media queries. Which CSS grid shorthand achieves this?",
      options: [
        "grid-template-columns: auto 1fr auto 1fr",
        "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))",
        "grid-template-columns: repeat(4, 25%)",
        "grid-columns: flexible 250px",
      ],
      correctAnswer:
        "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))",
      explanation:
        "repeat(auto-fit, minmax(250px, 1fr)) is the responsive grid magic combination. auto-fit creates as many columns as fit. minmax(250px, 1fr) means each column is at least 250px and at most 1 fraction of available space. Result: on wide screens you get many 250px+ columns; on narrow screens the columns wrap and eventually become single-column. All automatic, zero media queries.",
    },
  },

  // ─── 28 ───────────────────────────────────────────────────────────────────
  {
    title: "Creating a Landing Page",
    content:
      "TechNova is launching a new SaaS product — 'WorkflowAI' — and needs a landing page. Priya is assigned as the lead front-end developer. Her manager Sneha hands her a Figma design and says: 'Make it pixel-perfect, fast, and convincing.' This is the biggest solo project Priya has handled.\n\nA landing page's single goal is conversion — getting visitors to click the CTA (Call To Action). Structure: Navigation (logo + nav links + CTA button), Hero (bold headline + subheadline + CTA + hero image/illustration), Social Proof (logos of companies using the product), Features (icon + title + description grid), Pricing (3 tiers: Free, Pro, Enterprise), FAQ (accordion), and Footer. Every section should have a clear visual hierarchy and guide the eye toward the next CTA.\n\nPriya uses a split hero layout: .hero { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }. Left side: headline + description + buttons. Right side: product screenshot with a subtle floating animation (@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }). The pricing section uses CSS Grid with the Pro tier card scaled up (transform: scale(1.05)) and highlighted (background: var(--color-primary); color: white) to draw attention. She also adds a sticky 'Get started for free' CTA in the nav that appears after scrolling past the hero using JavaScript's IntersectionObserver API.",
    funFact:
      "Landing page design is a science backed by A/B testing data from millions of experiments. The single most impactful improvement a landing page can make: changing the CTA button text. 'Submit' converts poorly. 'Get started for free' converts 3x better. 'Start saving 10 hours a week' converts 5x better. Words that promise value and reduce friction drive clicks. Front-end developers who understand conversion psychology are far more valuable than those who only know code.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's landing page loads slowly because of a large hero image. Which HTML attribute should she add to images below the fold to speed up initial load?",
      options: [
        "preload='true'",
        "loading='lazy'",
        "defer='image'",
        "async='load'",
      ],
      correctAnswer: "loading='lazy'",
      explanation:
        "The loading='lazy' attribute on <img> tells the browser to defer loading the image until it is near the viewport (about to be scrolled into view). This significantly speeds up initial page load because the browser does not download off-screen images upfront. Only the hero image (above the fold) should load eagerly (loading='eager' or no attribute). All images below the fold should use loading='lazy'.",
    },
  },

  // ─── 29 ───────────────────────────────────────────────────────────────────
  {
    title: "Mobile-First Design Approach",
    content:
      "Priya has been building desktop layouts first, then adding media queries to break them down for mobile. During a review, Arjun challenges her: 'Flip your thinking. TechNova's analytics show 68% of users access the portal from mobile. We should design mobile-first.' This changes her entire workflow.\n\nMobile-first means writing your base CSS for mobile screens and using min-width media queries to add desktop styles as the screen grows. Instead of: .sidebar { width: 300px; } @media (max-width: 768px) { .sidebar { display: none; } } — she writes: .sidebar { display: none; } @media (min-width: 768px) { .sidebar { display: block; width: 300px; } }. The mobile style is the default; desktop is an enhancement.\n\nMobile-first advantages: Forces you to prioritize content — if it doesn't fit on mobile, cut it. Results in smaller CSS files because mobile styles are simpler. Faster paint on mobile because the browser does not need to override desktop styles. Better performance on low-power devices. Priya rebuilds the portal navigation: mobile gets a hamburger menu (hidden nav, visible menu icon). On desktop (min-width: 768px), the hamburger hides and the full nav appears. She also learns touch-friendly sizing: minimum 44x44px tap targets, adequate spacing between clickable elements, and removing :hover-only interactions (hover doesn't exist on touch screens).",
    funFact:
      "Google moved to mobile-first indexing in 2019, meaning Google's search crawler primarily uses the mobile version of websites to determine search rankings. If your website is a beautiful desktop site but broken on mobile, Google will rank you lower regardless of the desktop experience. This policy accelerated the adoption of responsive, mobile-first design across the entire web.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In a mobile-first approach, which media query would Priya use to apply a 4-column grid layout only on screens wider than 1024px?",
      options: [
        "@media (max-width: 1024px)",
        "@media (min-width: 1024px)",
        "@media (screen: large)",
        "@media (device-width > 1024px)",
      ],
      correctAnswer: "@media (min-width: 1024px)",
      explanation:
        "Mobile-first uses min-width breakpoints. @media (min-width: 1024px) means 'apply these styles on screens 1024px and wider' — i.e., on desktop. The base styles (no media query) apply to mobile. max-width is used in desktop-first (which is the older approach). Mobile-first + min-width creates naturally progressive enhancement: simple mobile layout as base, complex desktop layout as enhancement.",
    },
  },

  // ─── 30 ───────────────────────────────────────────────────────────────────
  {
    title:
      "HTML/CSS Capstone: Deploy Your Responsive Portfolio on GitHub Pages",
    content:
      "Six months have passed. Priya has transformed from a fresher who did not know what HTML stood for into a confident front-end developer who has built a real company portal. Now Arjun gives her the ultimate challenge: 'Build your complete personal portfolio from scratch, deploy it on GitHub Pages, and present it at the team meeting. This will go on your resume.' Real stakes. Real deadline. Real project.\n\nThe capstone project scope: A fully responsive portfolio website with at least 5 sections (Hero, About, Projects — minimum 3 projects, Skills, Contact). Built with semantic HTML5, vanilla CSS using custom properties, Flexbox and Grid for layout, and responsive design (mobile, tablet, desktop breakpoints). No CSS frameworks allowed — prove your skills are real. Include at least 2 CSS animations, a working contact form (using Formspree.io for free form submissions), and achieve a Google Lighthouse score above 90 for Performance and Accessibility.\n\nDeployment steps: Create a GitHub account and repository named 'username.github.io'. Push all code to the main branch. In repository Settings > Pages, set source to 'Deploy from a branch' > main. Your site goes live at https://username.github.io within minutes — for free, forever. Add this URL to your LinkedIn profile and resume. Priya's finished portfolio gets 847 views in the first month from recruiters, and she gets 3 interview calls. This is the power of a public portfolio — it makes your skills visible and verifiable to anyone in the world.",
    funFact:
      "GitHub Pages launched in 2008 and has hosted over 1 million websites. It is completely free for public repositories with no bandwidth limits. Many famous projects, personal blogs, open-source documentation sites, and portfolios are hosted there. The URL format username.github.io became recognizable among tech recruiters as a signal that a candidate understands version control and web deployment — two skills that set you apart from applicants who only share PDFs.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya pushes her portfolio to GitHub and enables GitHub Pages. What is the default URL format for her live site?",
      options: [
        "github.com/priya/portfolio",
        "priya.github.io",
        "pages.github.com/priya",
        "priya.github.pages.io",
      ],
      correctAnswer: "priya.github.io",
      explanation:
        "For user/organization GitHub Pages sites, the URL is username.github.io — where 'username' is your GitHub username. The repository must be named exactly 'username.github.io'. For project-level pages (any other repo), the URL is username.github.io/repository-name. The user pages repo (username.github.io) is special — it serves from the root domain without a subfolder path.",
    },
  },
];
