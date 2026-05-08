// Scenario-based Excel lessons for IT Fresher Hub
import type { LessonContent } from "@/types";

export const EXCEL_LESSONS: LessonContent[] = [
  {
    title: "Why Excel? The Skill Every IT Professional Needs",
    content:
      "Priya just landed her first job as a Business Analyst at a mid-sized IT company in Pune. On her very first day, her manager Arjun drops a file on her desk — a 2,000-row spreadsheet of client billing data — and says, 'Can you make sense of this by EOD?' Priya panics. She had ignored Excel in college, thinking it was 'just for accountants.'\n\nHere's the reality: Excel is the universal language of business. Whether you are in QA tracking bug counts, in HR managing headcount, in Operations monitoring SLAs, or in Finance reconciling invoices — Excel is everywhere. Developers use it to prototype data models. Project managers use it to build project trackers. Support teams use it to analyze ticket trends. It is not glamorous, but it is powerful and unavoidable.\n\nExcel lets you store, organize, analyze, and visualize data without writing a single line of code. A formula that takes you 30 seconds to write can save you 3 hours of manual work. By the time Priya finishes this course, she will not just survive that manager's challenge — she will impress him with a pivot table, a chart, and conditional formatting that makes the data tell its own story.",
    funFact:
      "Excel has over 1.2 billion users worldwide. That makes it the most widely used data tool on the planet — more than any programming language, database, or BI tool combined.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya is a QA Engineer. Which task would she most likely use Excel for?",
      options: [
        "Writing Python automation scripts",
        "Tracking bug counts and test pass/fail rates across sprints",
        "Designing the app UI in Figma",
        "Deploying code to a cloud server",
      ],
      correctAnswer:
        "Tracking bug counts and test pass/fail rates across sprints",
      explanation:
        "QA engineers commonly use Excel to log test cases, track bug status, count defects by severity, and report sprint-wise quality metrics to management — all without needing any coding skills.",
    },
  },
  {
    title: "Navigating Excel: Ribbons, Cells, and Sheets",
    content:
      "Priya opens Excel for the first time at work. She sees a grid of boxes, tabs at the top, and sheet tabs at the bottom. Her first thought: 'This looks like a maze.' Let's break it down so she — and you — never feel lost again.\n\nThe Ribbon is the toolbar at the top, organized into tabs: Home, Insert, Page Layout, Formulas, Data, Review, View. Each tab holds related buttons. 'Home' is your everyday tab — formatting, alignment, copy-paste. 'Formulas' is where all the magic functions live. 'Data' is where you sort, filter, and import data. Think of the Ribbon as a hardware store aisle: organized by category so you find the right tool fast.\n\nThe grid itself is made of Cells, identified by Column letter + Row number. Cell B3 means column B, row 3. The Name Box (top-left corner) shows you which cell you're in. The Formula Bar shows what's inside that cell — either plain text, a number, or a formula. At the bottom, Sheet Tabs let you maintain multiple sheets in one file. Priya creates Sheet1 for 'Raw Data', Sheet2 for 'Summary', and Sheet3 for 'Charts' — a professional habit that keeps work organized.",
    funFact:
      "Excel has 1,048,576 rows and 16,384 columns per sheet. If you filled every cell with data, a single Excel file could theoretically hold over 17 billion data points.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants to write a SUM formula. Which Ribbon tab should she click first?",
      options: ["Home", "Insert", "Formulas", "Page Layout"],
      correctAnswer: "Formulas",
      explanation:
        "The Formulas tab in the Ribbon contains the Function Library, Name Manager, and all built-in functions like SUM, AVERAGE, VLOOKUP, and more. It is the right place to start when working with calculations.",
    },
  },
  {
    title: "Entering and Formatting Data",
    content:
      "Priya's manager gives her an employee list to maintain: Name, Department, Joining Date, and Salary. She starts typing data into cells. But raw data alone looks messy and hard to read. Formatting is what turns a spreadsheet into a professional report.\n\nData types matter in Excel. Text (like 'Priya Sharma') is left-aligned by default. Numbers (like 45000) are right-aligned. Dates need to be entered in a recognized format like DD/MM/YYYY or they'll be stored as plain text, breaking all date calculations. Priya discovers this the hard way when her DATEDIF formula returns an error — the dates were stored as text!\n\nFormatting makes data readable. Select a cell range, go to Home tab, and apply Bold for headers, fill color to highlight important rows, currency format (₹) for salary columns, and date format for joining dates. Use 'Format as Table' (Home > Styles) to get alternating row colors and built-in filter arrows instantly. Priya also learns to Freeze Panes (View > Freeze Panes > Freeze Top Row) so column headers stay visible when scrolling through 2,000 rows of data.",
    funFact:
      "Excel's AutoFill feature is a massive time saver. Type 'January' in a cell, then drag the fill handle (the small green square at the cell's bottom-right corner) — Excel automatically fills in February, March, April, and so on. It works for days, dates, and custom series too.",
    xpReward: 50,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To keep the header row visible while scrolling down 2,000 rows of employee data, Priya should use ________ from the View tab.",
      correctAnswer: "Freeze Panes",
      explanation:
        "Freeze Panes (View > Freeze Panes > Freeze Top Row) locks the first row so it stays visible as you scroll down. It is essential when working with large datasets where you need to always see column headers.",
    },
  },
  {
    title: "Cell References: Relative, Absolute, Mixed",
    content:
      "Priya writes a formula in cell D2 to calculate each employee's tax as 10% of their salary: =C2*0.1. She copies this formula down to D3, D4, D5... and it works perfectly. The formula automatically adjusts to =C3*0.1, =C4*0.1. This is called a Relative Reference — the cell reference shifts relative to where you paste it.\n\nBut then Priya needs to apply a bonus percentage stored in cell F1 to all salaries. She writes =C2*F1 and copies it down. Disaster: D3 becomes =C3*F2, D4 becomes =C4*F3 — pointing to empty cells! The bonus rate reference is moving when it should stay fixed. She needs an Absolute Reference: =C2*$F$1. The dollar signs lock both the column and row of F1, so no matter where the formula is copied, it always points to F1.\n\nMixed References combine both: $F1 locks the column but lets the row move; F$1 locks the row but lets the column move. Priya uses this when building a multiplication table where the row reference should be fixed but the column should move. The shortcut F4 key cycles through all four reference types — press it right after typing a cell reference while editing a formula.",
    funFact:
      "The dollar sign ($) in Excel cell references has nothing to do with money. It is purely a 'lock' symbol that tells Excel: do not change this part when copying. A double-locked reference like $A$1 is called an 'absolute reference.'",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya has a tax rate in cell B1 and salaries in column A from A2 to A100. Which formula in B2 can be correctly copied to B3:B100?",
      options: ["=A2*B1", "=A2*$B$1", "=$A$2*B1", "=A2*B$1"],
      correctAnswer: "=A2*$B$1",
      explanation:
        "=A2*$B$1 uses a relative reference for A2 (so it shifts to A3, A4... as you copy down) and an absolute reference for $B$1 (so it always points to the tax rate cell). This is the correct pattern for applying a fixed rate to a varying list.",
    },
  },
  {
    title: "Basic Calculations: SUM, AVERAGE, COUNT",
    content:
      "Arjun asks Priya to calculate total team salary, average salary, and headcount from a 50-row employee table. Without Excel formulas, she would be adding numbers manually on a calculator. With three functions, she is done in 60 seconds.\n\nSUM adds up a range: =SUM(C2:C51) gives total salary. AVERAGE calculates the mean: =AVERAGE(C2:C51) gives average salary. COUNT counts cells that contain numbers: =COUNT(C2:C51) gives headcount (useful since COUNT ignores blank cells and text). COUNTA counts all non-empty cells including text: =COUNTA(A2:A51) gives the number of employee names entered.\n\nPriya learns the AutoSum shortcut: select the cell below or beside a column/row of numbers and press Alt + = (Windows) — Excel automatically writes the SUM formula for the detected range. She also discovers that these functions update instantly when data changes. When three new employees join and she adds their data, the totals refresh automatically — no need to recalculate anything. This is the core power of formulas: they are live, not static.",
    funFact:
      "The SUM function is the most used Excel formula in the world. Microsoft internal data suggests it appears in over 80% of all spreadsheets. Despite its simplicity, it saves millions of hours of manual addition every single day.",
    xpReward: 50,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To count how many employees have entered their names in cells A2 through A100 (including text values), Priya should use the ________ function.",
      correctAnswer: "COUNTA",
      explanation:
        "COUNTA counts all non-empty cells, including those with text. COUNT only counts numeric cells. Since employee names are text, COUNTA is the correct choice to measure how many rows have been filled in.",
    },
  },
  {
    title: "MIN, MAX, and ROUND Functions",
    content:
      "The HR head Sneha calls Priya and asks: 'What is the highest and lowest salary on the team, and can you round all figures to the nearest thousand for the board presentation?' Three simple functions handle all of this.\n\nMAX returns the largest value in a range: =MAX(C2:C51) finds the highest salary. MIN returns the smallest: =MIN(C2:C51) finds the lowest. LARGE and SMALL let you go beyond just top or bottom — =LARGE(C2:C51,2) gives the second highest salary, useful for ranking employees.\n\nROUND controls decimal places: =ROUND(C2,0) rounds to the nearest whole number. =ROUND(C2,-3) rounds to the nearest thousand — so 47,843 becomes 48,000. ROUNDUP always rounds up: =ROUNDUP(C2,-3) turns 47,001 into 48,000. ROUNDDOWN always rounds down. Sneha's board presentation needs clean numbers, so Priya creates a new 'Presentation' column using =ROUND(C2,-3) for all salaries — leaving the original data untouched. This is a critical habit: never modify raw data, always use formulas in separate columns.",
    funFact:
      "The ROUND function follows standard mathematical rounding — 0.5 rounds up. But Excel also has MROUND which rounds to a specified multiple. =MROUND(C2,500) rounds a salary to the nearest 500, which is useful for creating salary bands.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants to display 47,843 as 48,000 for a board presentation. Which formula does this?",
      options: [
        "=ROUND(47843,3)",
        "=ROUND(47843,-3)",
        "=ROUNDDOWN(47843,3)",
        "=MAX(47843,48000)",
      ],
      correctAnswer: "=ROUND(47843,-3)",
      explanation:
        "A negative number in ROUND's second argument rounds to the left of the decimal point. -3 means round to the nearest thousand. So =ROUND(47843,-3) returns 48000.",
    },
  },
  {
    title: "IF Statements: Making Decisions in Excel",
    content:
      'Priya needs to flag every employee who has completed their probation period (6 months from joining date) as \'Confirmed\' and the rest as \'Probation\'. Doing this manually for 50 people would be tedious and error-prone. The IF function makes this automatic and instant.\n\nIF syntax: =IF(logical_test, value_if_true, value_if_false). A real example: =IF(TODAY()-B2>=180, "Confirmed", "Probation") — if today minus joining date is 180 days or more, show \'Confirmed\', otherwise show \'Probation\'. When Priya copies this down the column, all 50 employees are instantly categorized.\n\nAnother practical use: salary bands. =IF(C2>=70000, "Senior", IF(C2>=40000, "Mid", "Junior")) — this is a nested IF (covered in a later lesson) that assigns a band based on salary range. The power of IF is that it makes your spreadsheet intelligent — it reacts to data instead of just storing it. Every time an employee crosses their 6-month mark or gets a salary revision, the IF formula automatically updates the label. No manual editing needed.',
    funFact:
      "Excel's IF function was one of the original functions introduced in Excel 1.0 in 1985. Nearly 40 years later, it remains the most powerful and versatile single function in the entire Excel library.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants to show 'Eligible' if an employee's score in D2 is 75 or above, and 'Not Eligible' otherwise. Which formula is correct?",
      options: [
        '=IF(D2>75, "Eligible", "Not Eligible")',
        '=IF(D2>=75, "Eligible", "Not Eligible")',
        '=IF(D2=75, "Eligible", "Not Eligible")',
        '=IF(D2<75, "Not Eligible", "Eligible")',
      ],
      correctAnswer: '=IF(D2>=75, "Eligible", "Not Eligible")',
      explanation:
        "The >= operator means 'greater than or equal to'. Since 75 should also be 'Eligible', we need >= not just >. The last option would also work logically, but swapping true/false values like that is confusing and considered bad practice.",
    },
  },
  {
    title: "VLOOKUP: Finding Data Across Sheets",
    content:
      "Rahul is building a payroll sheet. He has employee IDs in column A, and a separate reference sheet with IDs and department names. He does not want to manually type each department 200 times. VLOOKUP solves this: it looks up a value in the first column of a table and returns a value from any other column in the same row.\n\nVLOOKUP syntax: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]). Rahul writes: =VLOOKUP(A2, Departments!A:B, 2, FALSE). Breaking it down: A2 is the employee ID to look up; Departments!A:B is the table where the ID is in column A and department name is in column B; 2 means return the value from the 2nd column of the table; FALSE means find an exact match.\n\nTwo critical rules for VLOOKUP: First, the lookup value must always be in the first column of your table_array — VLOOKUP only looks left-to-right. Second, always use FALSE (exact match) unless you're doing range lookups like tax brackets. A common mistake is using TRUE (approximate match) accidentally, which returns wrong data silently. Rahul now populates all 200 department names in 10 seconds by typing the formula once and copying it down.",
    funFact:
      "VLOOKUP stands for Vertical Lookup — it searches vertically down a column. It was introduced in Excel 1985 and is still used in millions of spreadsheets daily, even though newer functions like XLOOKUP (introduced in 2019) are more flexible and powerful.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul uses =VLOOKUP(A2, Departments!A:C, 3, FALSE) but gets #N/A errors for some employees. What is the most likely cause?",
      options: [
        "VLOOKUP does not work across sheets",
        "The col_index_num should be 2, not 3",
        "Some employee IDs in column A do not exist in the Departments sheet",
        "FALSE should be replaced with TRUE",
      ],
      correctAnswer:
        "Some employee IDs in column A do not exist in the Departments sheet",
      explanation:
        "#N/A (Not Available) in VLOOKUP means the lookup value was not found in the first column of the table. This usually means the ID in the main sheet does not exist in the reference sheet — perhaps due to typos, extra spaces, or genuinely missing records.",
    },
  },
  {
    title: "HLOOKUP and Basic Lookup Functions",
    content:
      'Priya\'s team stores quarterly sales targets in a horizontal table — the months are across the top row (row 1) and the targets are in row 2. She needs to look up target values by month name. VLOOKUP will not work here because the lookup is horizontal, not vertical. Enter HLOOKUP.\n\nHLOOKUP syntax: =HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup]). Priya writes: =HLOOKUP("Q2", B1:E2, 2, FALSE). This finds \'Q2\' in row 1 of the range B1:E2 and returns the value from row 2. It is exactly like VLOOKUP but rotated 90 degrees.\n\nBeyond VLOOKUP and HLOOKUP, there are simpler lookup helpers. MATCH finds the position of a value: =MATCH("Q2", B1:E1, 0) returns the column number where \'Q2\' appears. This is useful on its own for finding positions before doing something with that position. CHOOSE works with numbered options: =CHOOSE(2, "Jan", "Feb", "Mar") returns \'Feb\' — the second item. These building blocks become powerful when combined with other functions, as Priya will discover in the INDEX+MATCH lesson later.',
    funFact:
      "XLOOKUP, released in 2019, can replace both VLOOKUP and HLOOKUP with one function. It searches both rows and columns, handles missing values gracefully, and does not require the lookup column to be first. However, VLOOKUP and HLOOKUP still dominate because billions of existing spreadsheets use them.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        'Priya has month names in row 1 (B1:E1) and targets in row 2. The formula =HLOOKUP("Q3", B1:E2, 2, FALSE) returns the value from row ________ of the lookup range.',
      correctAnswer: "2",
      explanation:
        "The third argument in HLOOKUP is the row_index_num — it tells HLOOKUP which row of the table to return the value from. Row 1 is where the lookup is performed (month names), and row 2 is where the target values are. So row_index_num = 2 returns the target.",
    },
  },
  {
    title: "Sorting Data: Ascending, Descending, Custom",
    content:
      "Arjun hands Priya a list of 300 support tickets exported from Jira — ticket ID, assignee, priority, and resolution time jumbled in random order. 'Can you sort this by priority first, then by resolution time?' he asks. Sorting in Excel is straightforward once you know multi-level sorting.\n\nBasic sort: click anywhere in the data, go to Data tab > Sort A to Z (ascending) or Z to A (descending). For numbers, ascending means smallest to largest. But Priya needs a custom sort: first by Priority (High, Medium, Low — not alphabetical) and then by Resolution Time (fastest first).\n\nCustom sort: Data > Sort > Add Level. She adds Level 1: Column = Priority, Order = Custom List, and types High, Medium, Low in that order. Level 2: Column = Resolution Time, Order = Smallest to Largest. Excel now sorts exactly as Arjun needs. She also learns that clicking a single header and sorting will sort the entire table (not just that column) as long as she clicks inside the data range first — a common mistake is selecting just one column and sorting only that column, which scrambles the row relationships.",
    funFact:
      "Excel's Custom Lists feature remembers sequences you define. Jan, Feb, Mar or Mon, Tue, Wed are built in. You can add your own (like High, Medium, Low or Q1, Q2, Q3, Q4) by going to File > Options > Advanced > Edit Custom Lists.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya selects only column C (Priority) and sorts it. What problem will this cause?",
      options: [
        "Nothing — it is safe to sort one column",
        "The Priority column will sort, but names and dates in other columns will no longer match the correct employee",
        "Excel will automatically sort all columns together",
        "The sort will fail with an error message",
      ],
      correctAnswer:
        "The Priority column will sort, but names and dates in other columns will no longer match the correct employee",
      explanation:
        "Sorting only one column scrambles the relationship between columns. If Priya sorts just Priority, the employee names and ticket IDs stay in their original positions, so rows no longer match. Always include all related columns when sorting — either select the entire table or just click one cell inside the data before sorting.",
    },
  },
  {
    title: "Filtering: Finding What You Need Fast",
    content:
      "Priya now has a clean, sorted ticket list. But her manager only wants to see high-priority tickets assigned to Rahul that took more than 4 hours to resolve. Manually scanning 300 rows is not an option. Filters do this in seconds.\n\nTo enable filters: click anywhere in the data, go to Data tab > Filter. Dropdown arrows appear on each column header. Click the Priority dropdown, uncheck everything except 'High'. Click the Assignee dropdown, uncheck everything except 'Rahul'. Now for Resolution Time: click its dropdown > Number Filters > Greater Than > 4. Excel hides all rows that do not match, showing only the relevant tickets. The row numbers turn blue to indicate rows are filtered (hidden, not deleted).\n\nAdvanced Filter (Data > Advanced) lets Priya set up a criteria range in a separate part of the sheet for complex conditions like 'High priority OR assigned to Rahul AND resolved after March 2024'. She can also use the filter to extract matching rows to a new location. After the filter is set, Priya copies just the visible rows and pastes them into a new sheet for the report — a common workflow in IT operations reporting.",
    funFact:
      "Ctrl+Shift+L is the keyboard shortcut to toggle filters on and off. Once you know this, you will never go through the Data tab again. Most Excel power users never click the ribbon for filtering.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "After applying a filter, Priya sees row numbers 1, 4, 9, 17, 23 in blue on the left side. What does the blue color mean?",
      options: [
        "Those rows have errors in them",
        "Those rows are selected and will be deleted",
        "Rows are filtered — other rows are hidden but not deleted",
        "Excel is recalculating formulas in those rows",
      ],
      correctAnswer:
        "Rows are filtered — other rows are hidden but not deleted",
      explanation:
        "Blue row numbers indicate active filtering — the rows between them are hidden, not deleted. All original data is still there; it is just temporarily invisible. Removing the filter (Data > Clear) restores all rows instantly.",
    },
  },
  {
    title: "Conditional Formatting: Highlighting Insights",
    content:
      "Priya prepares a weekly performance report showing each team member's ticket resolution rate. The manager wants overperformers (above 95%) highlighted in green, underperformers (below 70%) in red, and everyone else in yellow — so the entire team's status is visible at one glance without reading every number.\n\nConditional Formatting applies format rules automatically based on cell values. Home tab > Conditional Formatting > Highlight Cells Rules. For green: select the column, apply 'Greater Than 95' with green fill. For red: 'Less Than 70' with red fill. Excel applies the matching format and updates it live as data changes.\n\nColor Scales and Data Bars are even more visual. Color Scale applies a gradient: the highest value becomes deep green, the lowest becomes deep red, with everything in between shading automatically. Data Bars draw a mini bar chart inside the cell itself — longer bars for higher values. Priya uses Data Bars for the resolution time column so the manager can instantly see which tickets took longest without reading a single number. Icon Sets add arrows or circles: an up arrow for improving metrics, a down arrow for declining ones. These visual cues turn a boring table into an executive-ready dashboard.",
    funFact:
      "Conditional Formatting can be based on formulas, not just cell values. For example, =MOD(ROW(),2)=0 applied as a rule with a light gray fill creates perfect alternating row shading — sometimes called 'zebra striping' — which makes large tables much easier to read.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants cells in column D to show a mini bar inside each cell proportional to its value, without any color gradient. Which Conditional Formatting option should she use?",
      options: [
        "Color Scales",
        "Icon Sets",
        "Data Bars",
        "Highlight Cells Rules",
      ],
      correctAnswer: "Data Bars",
      explanation:
        "Data Bars draw a horizontal bar inside each cell, with bar length proportional to the value. They give a visual sense of magnitude without needing a separate chart column. Color Scales use gradient fills, and Icon Sets use symbols like arrows or traffic lights.",
    },
  },
  {
    title: "Pivot Tables: Summarizing Large Datasets",
    content:
      "Sneha from HR hands Priya a raw dataset: 1,500 rows of employee records with columns for Name, Department, Location, Salary, and Joining Date. She needs total headcount and average salary by department and location. Without Pivot Tables, Priya would need dozens of COUNTIF and AVERAGEIF formulas. With a Pivot Table, she is done in 90 seconds.\n\nCreating a Pivot Table: click inside the data, go to Insert > PivotTable, choose 'New Worksheet', click OK. A blank pivot table and a field panel appear. Drag 'Department' to Rows, 'Location' to Columns, 'Name' to Values (set to Count), and 'Salary' to Values (set to Average). Instantly, a matrix appears showing headcount and average salary for every department-location combination. No formulas, no manual work.\n\nThe magic of Pivot Tables is instant recalculation. When Sneha adds 50 more employees to the raw data, Priya just right-clicks the pivot table and selects 'Refresh' — all numbers update immediately. She can also drag fields in and out to change the view in seconds: remove Location from Columns to get a simple department summary, or add 'Joining Year' to see headcount trends over time. Pivot Tables are arguably the single most powerful feature in Excel for business analysts.",
    funFact:
      "The term 'pivot table' comes from the ability to rotate or 'pivot' data — moving rows to columns and columns to rows dynamically. Lotus 1-2-3 introduced a basic version, but Excel's implementation became the gold standard. Google Sheets calls them 'Pivot Tables' too, using the exact same concept.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya adds 50 new employees to her raw data. How does she update her Pivot Table to reflect the new records?",
      options: [
        "Delete and recreate the Pivot Table from scratch",
        "Right-click the Pivot Table and select Refresh",
        "Copy-paste the new rows into the Pivot Table directly",
        "Pivot Tables update automatically without any action",
      ],
      correctAnswer: "Right-click the Pivot Table and select Refresh",
      explanation:
        "Pivot Tables do not auto-update when source data changes. You must right-click the pivot table and select Refresh (or use Data > Refresh All). If you added rows beyond the original data range, you may also need to update the data source via PivotTable Analyze > Change Data Source.",
    },
  },
  {
    title: "Pivot Charts: Visualizing Pivot Data",
    content:
      "Priya has a beautiful Pivot Table showing department-wise headcount. Now her manager Arjun asks for a visual for the quarterly business review presentation. Pivot Charts are charts directly connected to a Pivot Table — they change dynamically when the pivot filters change.\n\nCreating a Pivot Chart: click anywhere inside the Pivot Table, go to PivotTable Analyze tab > PivotChart. Choose a chart type — a clustered bar chart for comparing departments, or a pie chart for showing percentage distribution. Excel creates a chart that has its own filter buttons matching the Pivot Table fields.\n\nThe real power is interactivity. Priya can click the Department filter in the chart and deselect 'IT Operations' — the chart instantly updates to exclude it. She can change the Pivot Table rows from 'Department' to 'Location' and the chart immediately shows location-wise distribution instead. This means one chart serves infinite views of the same data. For the QBR presentation, Priya creates a stacked bar Pivot Chart showing headcount by department AND location simultaneously — a visualization that would take hours to build manually in regular charts but takes 5 minutes with Pivot Charts.",
    funFact:
      "Pivot Charts retain all the interactive filter buttons that Pivot Tables have. During live presentations, you can click these filter buttons to show only relevant data while the chart updates in real time — making your presentation look dynamic and data-driven.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya changes the Pivot Table to show data by Location instead of Department. What happens to the connected Pivot Chart?",
      options: [
        "Nothing — the chart is independent once created",
        "The chart automatically updates to show location-based data",
        "The chart breaks and shows an error",
        "She must delete and recreate the chart",
      ],
      correctAnswer:
        "The chart automatically updates to show location-based data",
      explanation:
        "Pivot Charts are directly linked to their Pivot Table. Any change to the pivot table — whether filtering, reorganizing fields, or refreshing data — is immediately reflected in the pivot chart. This is what makes them powerful for live presentations and dynamic reports.",
    },
  },
  {
    title: "Data Validation: Controlling What Users Enter",
    content:
      "Priya builds a shared timesheet template for her team of 20 people. Within a week, the data is a mess: some people typed 'Mon', others 'Monday', some 'MON'. The Department column has '  IT  ' with extra spaces, 'it', 'IT', 'Information Technology' — all meaning the same thing but causing filter failures. She needs to control what people can enter before they enter it.\n\nData Validation (Data tab > Data Validation) lets Priya define rules for any cell or range. She selects the 'Day' column and sets Allow: List, Source: Mon,Tue,Wed,Thu,Fri. Now that cell shows a dropdown — users can only pick from the list. For the 'Hours Worked' column, she sets Allow: Decimal, Minimum: 0, Maximum: 24. If anyone types 25 or a negative number, Excel shows an error and blocks the entry.\n\nInput Messages and Error Alerts make this user-friendly. Input Message (shown when a user clicks the cell): 'Enter hours between 0 and 24'. Error Alert (shown when they violate the rule): 'Invalid hours! Please enter a number between 0 and 24.' Priya also adds a custom validation formula for dates: =AND(A2>=DATE(2024,1,1), A2<=TODAY()) ensures no future dates are entered in the timesheet. With these guardrails in place, the shared file stays clean automatically.",
    funFact:
      "Data Validation dropdowns that reference a range (instead of a hard-coded list) update automatically. If Priya stores department names in a named range called 'Departments', she can type =Departments as the source — and any new department added to that range immediately appears in the dropdown.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants to prevent her team from entering more than 10 hours of overtime in a single cell. Which Data Validation setting should she use?",
      options: [
        "Allow: Text Length, Maximum: 10",
        "Allow: Whole Number, Maximum: 10",
        "Allow: Date, Maximum: 10",
        "Allow: Custom, Formula: =A2<>10",
      ],
      correctAnswer: "Allow: Whole Number, Maximum: 10",
      explanation:
        "Allow: Whole Number with a Maximum of 10 restricts entry to whole numbers between whatever minimum you set and 10. This is the correct data type for hours (not text length, not date). If overtime can be in half-hours, use Decimal instead of Whole Number.",
    },
  },
  {
    title: "Named Ranges: Making Formulas Readable",
    content:
      "Rahul opens a shared workbook and sees this formula in cell H5: =VLOOKUP(B5, $Q$2:$S$200, 3, FALSE)*$X$1. What does $Q$2:$S$200 refer to? What is in $X$1? He has no idea without clicking each cell. This is what makes complex spreadsheets unmaintainable. Named Ranges fix this.\n\nA Named Range gives a meaningful name to a cell or range. Select cells Q2:S200 (the employee table), go to Formulas > Name Manager > New, type 'EmployeeTable'. Select X1 (the tax rate), name it 'TaxRate'. Now Rahul can rewrite the formula as: =VLOOKUP(B5, EmployeeTable, 3, FALSE)*TaxRate. Anyone can understand this instantly — no need to click around to decode references.\n\nNamed Ranges also prevent reference errors when rows/columns are inserted. If you insert a row before row 2, a hardcoded reference like $Q$2:$S$200 might shift incorrectly. But a Named Range automatically expands to include the new row if it is inserted within the range. Priya names all her key reference areas — BonusTable, TaxBrackets, TeamList — and uses these names throughout all formulas. When her manager reads the file three months later, the logic is self-documenting.",
    funFact:
      "You can use Named Ranges in navigation too. Press Ctrl+G or F5, type the name of a Named Range, and Excel jumps directly to that cell or range. In a workbook with dozens of sheets and thousands of rows, this is a massive time saver for navigating to key areas.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Priya names the cell containing the annual bonus rate as 'BonusRate'. She can now write =C2*________ instead of =C2*$G$1 in her bonus calculation formula.",
      correctAnswer: "BonusRate",
      explanation:
        "Once a cell is given a Named Range, you can use that name directly in formulas instead of the cell address. =C2*BonusRate is cleaner, self-documenting, and will not break if rows or columns are inserted — making it far better practice than hardcoded cell references.",
    },
  },
  {
    title: "Removing Duplicates and Cleaning Data",
    content:
      "Priya imports a vendor invoice list exported from the ERP system. Her SUMIF formula returns a total that is 30% higher than expected. After investigation, she discovers the export has hundreds of duplicate rows — the same invoice appearing 2-3 times due to an ERP bug. Before any analysis, data must be clean.\n\nRemoving Duplicates: select the data range, go to Data > Remove Duplicates. Excel lists all columns and asks which ones to check for duplicates. Checking all columns removes only rows that are 100% identical. Checking only 'Invoice ID' removes any row where the Invoice ID has already appeared, regardless of other columns. Excel reports: 'Found 234 duplicates. Remaining: 866 unique values.'\n\nData cleaning goes beyond duplicates. TRIM removes extra spaces: =TRIM(A2) turns '  Priya  ' into 'Priya'. PROPER capitalizes correctly: =PROPER(A2) turns 'PRIYA SHARMA' into 'Priya Sharma'. UPPER and LOWER convert to ALL CAPS or all lowercase. SUBSTITUTE replaces specific characters: =SUBSTITUTE(A2, \"&\", \"and\") fixes formatting inconsistencies. Text to Columns (Data > Text to Columns) splits data — turning 'Priya,IT,Mumbai' in one cell into three separate cells. Clean data is not optional — dirty data means wrong analysis, wrong decisions, and business losses.",
    funFact:
      "Data scientists report that they spend 60-80% of their time cleaning data, not analyzing it. In IT companies, data quality issues cost millions annually in incorrect decisions. Excel's data cleaning tools are your first line of defense against bad data.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya has employee names with inconsistent capitalization: 'priya sharma', 'RAHUL KUMAR', 'Arjun Singh'. Which function standardizes all names to 'Priya Sharma' format?",
      options: ["=UPPER(A2)", "=LOWER(A2)", "=PROPER(A2)", "=TRIM(A2)"],
      correctAnswer: "=PROPER(A2)",
      explanation:
        "PROPER capitalizes the first letter of each word and makes the rest lowercase. So 'RAHUL KUMAR' becomes 'Rahul Kumar' and 'priya sharma' becomes 'Priya Sharma'. UPPER makes everything uppercase, LOWER makes everything lowercase, and TRIM only removes extra spaces.",
    },
  },
  {
    title: "INDEX and MATCH: VLOOKUP's More Powerful Cousin",
    content:
      "Priya hits a wall with VLOOKUP. Her manager asks: 'Given an employee's name in column C, find their Employee ID in column A.' VLOOKUP only looks right — it cannot look left. Enter INDEX+MATCH, the combination that has no such limitation.\n\nMATCH finds the position of a value: =MATCH(\"Priya\", C2:C100, 0) returns the row number where 'Priya' appears. INDEX retrieves a value from a position: =INDEX(A2:A100, 5) returns the value in the 5th row of column A. Combine them: =INDEX(A2:A100, MATCH(\"Priya\", C2:C100, 0)) — find Priya's position in column C, then use that position to retrieve her ID from column A. VLOOKUP solved, direction-reversed.\n\nINDEX+MATCH has other advantages: it does not break when you insert or delete columns (VLOOKUP's col_index_num is positional and hard-codes the column number). It is slightly faster on large datasets. It can match across rows AND columns (a 2D lookup impossible with VLOOKUP): =INDEX(SalaryTable, MATCH(EmpID, IDColumn, 0), MATCH(Month, MonthRow, 0)) looks up a salary by both employee ID and month simultaneously. Priya uses this for a salary history report where rows are employees and columns are months.",
    funFact:
      "Microsoft introduced XLOOKUP in 2019 specifically to address VLOOKUP's limitations — including the left-lookup problem. But INDEX+MATCH still works in all Excel versions including 2007, while XLOOKUP requires Microsoft 365 or Excel 2021. Knowing INDEX+MATCH makes you compatible with every Excel version in corporate environments.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to find an employee's salary (column A) when given their email (column D). Why can't she use VLOOKUP here?",
      options: [
        "VLOOKUP does not work with text values",
        "VLOOKUP only looks from left to right, so it cannot return a value from a column to the left of the lookup column",
        "VLOOKUP requires the data to be sorted",
        "VLOOKUP only works within a single sheet",
      ],
      correctAnswer:
        "VLOOKUP only looks from left to right, so it cannot return a value from a column to the left of the lookup column",
      explanation:
        "VLOOKUP's table_array must have the lookup column as its first (leftmost) column. Since Salary is in column A and Email is in column D, the lookup column (D) is to the right of the return column (A). VLOOKUP cannot look left — INDEX+MATCH or XLOOKUP are the correct tools here.",
    },
  },
  {
    title: "COUNTIF and SUMIF: Conditional Counting",
    content:
      'Sneha needs a report: how many employees are in each department, and what is the total salary bill per department? She has one sheet with 500 rows. Without COUNTIF and SUMIF, this would require a filter for every department. With these two functions, a single formula gives each department\'s number in seconds.\n\nCOUNTIF counts rows matching one condition: =COUNTIF(B2:B501, "Engineering") counts all rows where column B equals \'Engineering\'. SUMIF adds values where a condition is met: =SUMIF(B2:B501, "Engineering", C2:C501) sums column C (salary) for all rows where column B is \'Engineering\'.\n\nCOUNTIFS and SUMIFS handle multiple conditions. Sneha wants engineering employees in Mumbai only: =COUNTIFS(B2:B501, "Engineering", D2:D501, "Mumbai"). She wants their total salary: =SUMIFS(C2:C501, B2:B501, "Engineering", D2:D501, "Mumbai"). AVERAGEIF and AVERAGEIFS work the same way for averages. Priya builds a summary table using these formulas — rows are departments, columns are locations — and populates every cell with a COUNTIFS formula. This is a lightweight alternative to a Pivot Table when the report structure is fixed and formulas need to be visible.',
    funFact:
      "COUNTIF supports wildcards. =COUNTIF(A2:A100, \"Priya*\") counts all cells starting with 'Priya'. =COUNTIF(A2:A100, \"*Manager*\") counts all cells containing 'Manager'. The asterisk (*) matches any sequence of characters, and the question mark (?) matches exactly one character.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Sneha wants to count employees in the 'HR' department (column B) who are in 'Chennai' (column D). The correct function to use is ________.",
      correctAnswer: "COUNTIFS",
      explanation:
        'COUNTIFS (with an S) handles multiple conditions. =COUNTIFS(B2:B501, "HR", D2:D501, "Chennai") counts rows where both conditions are true simultaneously. COUNTIF (without S) only handles one condition.',
    },
  },
  {
    title: "Nested IF: Multiple Conditions",
    content:
      'Priya needs to assign performance grades: A for score >= 90, B for score >= 75, C for score >= 60, and D for anything below 60. A single IF handles only two outcomes. Nested IFs stack multiple IFs to handle multiple outcomes.\n\nNested IF: =IF(D2>=90, "A", IF(D2>=75, "B", IF(D2>=60, "C", "D"))). Excel evaluates left to right: Is D2 >= 90? If yes, return A. If no, is D2 >= 75? If yes, return B. If no, is D2 >= 60? If yes, return C. Otherwise return D. The logic works because conditions are evaluated in decreasing order — once a condition is true, Excel returns that value and stops checking.\n\nCommon mistake: putting conditions in the wrong order. If Priya writes =IF(D2>=60, "C", IF(D2>=75, "B", IF(D2>=90, "A", "D"))), every score above 60 gets \'C\' because the first condition catches them all before reaching B or A. Always order from strictest to most lenient when nesting IFs. Modern Excel also offers IFS function: =IFS(D2>=90, "A", D2>=75, "B", D2>=60, "C", TRUE, "D"). IFS is easier to read and maintain — the TRUE at the end acts as the \'else\' case.',
    funFact:
      "Excel allows up to 64 levels of nesting in a formula. But readability breaks down fast after 3-4 levels. When you have more than 4 conditions, the IFS function (Excel 2019+) or a VLOOKUP with a reference table is much cleaner and easier to maintain.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        'Priya writes =IF(D2>=60, "Pass", IF(D2>=90, "Distinction", "Fail")). A student with 95 marks gets which result?',
      options: ["Distinction", "Pass", "Fail", "Error"],
      correctAnswer: "Pass",
      explanation:
        "Excel evaluates conditions left to right. Since 95 >= 60 is TRUE, the formula immediately returns 'Pass' without ever checking the second condition (>=90). The 'Distinction' condition is unreachable because it is nested inside the false branch of >=60. This is a classic nested IF ordering mistake.",
    },
  },
  {
    title: "TEXT Functions: Manipulating Strings in Excel",
    content:
      "Priya receives a database export where the employee's first name is in column A and last name is in column B. The report template needs a 'Full Name' column in 'Lastname, Firstname' format. She also needs to extract the domain from email addresses (everything after the @ symbol). Text functions are the tools for these string operations.\n\nCONCAT (or the & operator) joins text: =A2&\", \"&B2 produces 'Sharma, Priya'. LEN returns length: =LEN(A2) counts characters. UPPER, LOWER, PROPER convert case. LEFT, RIGHT, MID extract substrings: =LEFT(A2, 3) takes the first 3 characters; =RIGHT(A2, 5) takes the last 5; =MID(A2, 3, 4) extracts 4 characters starting from position 3.\n\nFor extracting the domain from 'priya@techcorp.com': find where @ appears using FIND: =FIND(\"@\", A2) returns 6. Then extract everything after it with MID: =MID(A2, FIND(\"@\", A2)+1, LEN(A2)). This returns 'techcorp.com'. SUBSTITUTE replaces text: =SUBSTITUTE(A2, \"_\", \" \") converts 'priya_sharma' to 'priya sharma'. TEXT formats numbers as text: =TEXT(C2, \"₹#,##0\") displays a number like 75000 as '₹75,000' — useful when concatenating numbers with text: =\"Salary: \"&TEXT(C2, \"₹#,##0\").",
    funFact:
      "The TEXTJOIN function (Excel 2019+) joins multiple cells with a delimiter in one formula: =TEXTJOIN(\", \", TRUE, A2:A10) joins all non-empty cells from A2 to A10 with ', '. Before TEXTJOIN, joining 10 cells required 9 & operators — a formula that broke when cells were empty.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to extract 'techcorp' from the email 'priya@techcorp.com'. Which combination of functions helps her extract the text between @ and .?",
      options: [
        "LEFT and RIGHT",
        "MID and FIND",
        "TRIM and LEN",
        "SUBSTITUTE and UPPER",
      ],
      correctAnswer: "MID and FIND",
      explanation:
        'FIND locates the position of @ and the position of the . before \'com\'. MID then extracts the text between those two positions. The formula would be =MID(A2, FIND("@",A2)+1, FIND(".",A2,FIND("@",A2))-FIND("@",A2)-1) — slightly complex, but this is how text parsing works in Excel without Power Query.',
    },
  },
  {
    title: "Date and Time Functions: Working with Dates",
    content:
      'Arjun needs a report showing: how many days each project has been running, which projects are overdue, and the number of working days remaining until each deadline. All of this requires date calculations — one of Excel\'s most practically useful skill areas for project managers and operations teams.\n\nTODAY() returns today\'s date. NOW() returns date and time. Subtracting dates works directly: =TODAY()-B2 gives days since the date in B2. DATEDIF calculates the difference in a specific unit: =DATEDIF(B2, TODAY(), "M") gives months, =DATEDIF(B2, TODAY(), "Y") gives years — used for employee tenure. EDATE adds months: =EDATE(B2, 6) returns the date 6 months after B2 — perfect for subscription expiry dates.\n\nNETWORKDAYS calculates working days excluding weekends: =NETWORKDAYS(B2, C2) gives working days between start and deadline. WORKDAY calculates a date N working days from a start: =WORKDAY(TODAY(), 30) gives the date 30 working days from now — useful for project deadlines. DATE, YEAR, MONTH, DAY extract components: =YEAR(B2) extracts the year from a date. Priya builds a project tracker where overdue projects are automatically flagged using =IF(TODAY()>C2, "OVERDUE", NETWORKDAYS(TODAY(), C2)&" days left").',
    funFact:
      "Excel stores all dates internally as numbers. January 1, 1900 = 1, January 2, 1900 = 2, and so on. Today's date (May 2026) is around 45,778. This is why you can add/subtract dates directly — it is just arithmetic on these serial numbers.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants to calculate an employee's subscription expiry date, which is exactly 45 days after the subscription start date in cell B2. Which formula is correct?",
      options: [
        "=TODAY()+45",
        "=B2+45",
        "=NETWORKDAYS(B2, 45)",
        "=EDATE(B2, 45)",
      ],
      correctAnswer: "=B2+45",
      explanation:
        "Since Excel stores dates as numbers, adding 45 to a date gives the date 45 calendar days later. =B2+45 is the simplest and most direct formula. =TODAY()+45 would ignore the start date in B2. EDATE adds months, not days. NETWORKDAYS calculates working days between two dates, not an end date.",
    },
  },
  {
    title: "Creating Charts: Bar, Pie, Line",
    content:
      "Priya has a summary table of monthly incident counts for Q1 2024. Her manager presents to the CTO weekly, and he needs visuals, not tables. Charts transform numbers into visual stories that executives can understand at a glance.\n\nCreating a chart: select the data range (include headers), go to Insert tab, choose a chart type. Bar/Column charts compare values across categories — perfect for 'incidents per department this month'. A clustered bar shows departments side by side; a stacked bar shows how parts make up a whole. Line charts show trends over time — 'incidents per month over 12 months' tells a story about whether the team is improving. Pie charts show proportions — 'share of incidents by severity' — but use them sparingly: pie charts become unreadable with more than 5 slices.\n\nChart customization matters for professional output. Double-click any element to format it. Add a descriptive title (not just 'Chart 1'). Remove gridlines if they are cluttering the visual. Use company color scheme for bars. Add Data Labels to show exact numbers. In the 'Design' tab, try different Chart Styles. Move the chart to its own sheet via Move Chart > New Sheet for a dedicated chart view. Priya saves the chart as an image (right-click > Save as Picture) to paste into PowerPoint presentations without reformatting.",
    funFact:
      "Research by professor Edward Tufte shows that pie charts are among the worst ways to show data because humans are poor at comparing angles. A bar chart of the same data is always more accurate to interpret. Tufte famously called pie charts 'the worst form of statistical graphics' — yet they remain the most popular chart type in business presentations.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to show how the number of support tickets has changed month-over-month for the past 12 months. Which chart type is most appropriate?",
      options: [
        "Pie Chart",
        "Clustered Bar Chart",
        "Line Chart",
        "Scatter Plot",
      ],
      correctAnswer: "Line Chart",
      explanation:
        "Line charts are ideal for showing trends over time — how a value changes across a continuous sequence. Month-by-month progression is a classic time series, and a line chart clearly shows increases, decreases, and patterns. Bar charts compare discrete categories; pie charts show proportions; scatter plots show correlation between two variables.",
    },
  },
  {
    title: "Sparklines: Mini Charts in Cells",
    content:
      "Priya builds a monthly performance dashboard with a table showing each team member's ticket resolution count for each of 12 months. The table is clean, but adding 20 full-size charts (one per team member) would make the sheet look chaotic. Sparklines are the solution: tiny charts that fit inside a single cell, right next to the data.\n\nInserting Sparklines: select the data range for one row (B2:M2 for 12 months), go to Insert > Sparklines > Line (or Column or Win/Loss). Choose the cell where you want the sparkline (say N2). A tiny line chart appears inside cell N2, showing the trend of that employee's 12 months at a glance. Copy the sparkline down for all rows — each row gets its own mini chart automatically.\n\nSparklines update automatically with data changes, just like regular charts. In the Sparkline Tools tab that appears when a sparkline is selected, Priya customizes colors, marks the highest point with a different color, and turns on 'Show Markers'. The Win/Loss sparkline type is great for boolean data — did each month hit its target or not. With sparklines, Priya's 20-row performance table gains a visual trend column that makes the entire team's monthly performance visible on one screen without scrolling or switching views.",
    funFact:
      "Sparklines were invented by data visualization expert Edward Tufte (the same person who criticized pie charts). He called them 'data-intense, design-simple, word-sized graphics.' Microsoft introduced them in Excel 2010, making Excel one of the first mainstream tools to include Tufte's concept.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants to show, in a single cell for each employee, whether they hit their monthly ticket targets (yes/no) for each of the 12 months. Which Sparkline type is most appropriate?",
      options: ["Line", "Column", "Win/Loss", "Pie"],
      correctAnswer: "Win/Loss",
      explanation:
        "Win/Loss sparklines show a two-state view: positive values appear as an upward bar (Win) and negative or zero values appear as a downward bar (Loss). For a hit/miss target scenario, this type clearly shows which months were successful and which were not, at a glance, without needing numbers.",
    },
  },
  {
    title: "Building a Professional Excel Dashboard",
    content:
      "Arjun challenges Priya: 'Can you build a dashboard that our CTO can open every Monday morning and see the entire team's performance in one view?' A professional Excel dashboard is a single-screen summary that combines charts, key metrics, and tables — all dynamically updated from a raw data sheet.\n\nDashboard design principles: use a dedicated 'Dashboard' sheet, separate from raw data sheets. Divide the sheet into zones: KPIs (large numbers at top), trend charts (middle), detailed breakdown table (bottom). Use Cell References to pull key numbers from other sheets instead of hardcoding — =Data!B2 pulls a value from cell B2 of the Data sheet. Use Pivot Tables and Pivot Charts as the engine behind each visual.\n\nPriya's CTO dashboard includes: 4 KPI boxes (Total Tickets, Resolved, Open, Average Resolution Time) using large font + conditional formatting for color; a line chart of weekly tickets over the last quarter; a bar chart of tickets by department; and a top 5 open tickets table. She protects the dashboard sheet (Review > Protect Sheet) so users cannot accidentally edit it. She hides all raw data and calculation sheets (right-click sheet tab > Hide). The final product looks like a polished BI tool — built entirely in Excel, with zero external software.",
    funFact:
      "Many Fortune 500 companies run their operations from Excel dashboards that have been in use for 10-15 years. Even with tools like Power BI, Tableau, and Looker available, Excel dashboards persist because every manager already has Excel, can open it instantly, and trusts it.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants the KPI 'Total Tickets This Week' on her Dashboard sheet to always show the latest value from cell B2 on the RawData sheet. What should she put in the KPI cell?",
      options: [
        "=B2",
        "=RawData!B2",
        "=Dashboard!B2",
        "=VLOOKUP(B2, RawData, 1, FALSE)",
      ],
      correctAnswer: "=RawData!B2",
      explanation:
        "To reference a cell from another sheet, use SheetName!CellAddress format. =RawData!B2 always pulls the current value from B2 on the RawData sheet. When RawData is updated, the Dashboard automatically shows the new value. =B2 would reference B2 on the current (Dashboard) sheet.",
    },
  },
  {
    title: "Power Query: Importing and Transforming Data",
    content:
      "Every Monday, Priya downloads three CSV files: one from the ticketing system, one from the HR system, and one from the finance system. She spends 2 hours copying, cleaning, and combining them. Her senior colleague Rahul shows her Power Query — and that 2-hour task becomes a 10-minute automated refresh.\n\nPower Query (Data > Get Data > From File > From CSV) imports data into a query editor where transformations are recorded as steps. Priya imports the ticketing CSV and applies: Remove Duplicates, Filter Rows (keep only current month), Change Type (ensure dates are recognized as dates), and Rename Columns. Every step is saved. Next Monday, she clicks Data > Refresh All — Power Query re-runs all steps on the new file automatically. No manual cleaning.\n\nMerge Queries combines tables like a SQL JOIN. Priya merges the ticketing data with the HR data on 'Employee ID' to add department and location information to each ticket — exactly like a VLOOKUP but more powerful and scalable. Append Queries stacks tables on top of each other — she appends 12 monthly files to create a full-year dataset with one click. Power Query transforms the repetitive manual data work of an analyst into a one-click automated pipeline. This is one of the most valuable Excel skills for business analysts in IT companies.",
    funFact:
      "Power Query was originally a separate Excel add-in called 'Data Explorer' released in 2013. It was so popular that Microsoft built it directly into Excel 2016 as 'Get and Transform'. Today, it is also the data engine behind Power BI — so learning Power Query in Excel gives you a head start with Power BI as well.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya has set up Power Query to clean and import Monday's data file. What happens when she clicks 'Refresh All' the following Monday with a new file?",
      options: [
        "Power Query forgets the previous settings and starts fresh",
        "Power Query re-runs all the saved transformation steps on the new data automatically",
        "She must manually redo all the cleaning steps on the new file",
        "The old data is overwritten without any cleaning",
      ],
      correctAnswer:
        "Power Query re-runs all the saved transformation steps on the new data automatically",
      explanation:
        "This is the core value of Power Query: all transformations (filtering, removing duplicates, changing types, renaming columns) are saved as a recorded sequence of steps. When you click Refresh All, Power Query re-executes every step on the new source data, producing a clean, transformed result without any manual intervention.",
    },
  },
  {
    title: "Introduction to Excel Macros",
    content:
      "Priya formats the same monthly report every time: merge cells, bold headers, apply currency format to salary column, set column widths, add borders. It takes 20 minutes every month. Macros automate repetitive tasks by recording your actions and replaying them with one click — no programming knowledge required to get started.\n\nRecording a macro: View tab > Macros > Record Macro. Give it a name (FormatMonthlyReport), assign a shortcut (Ctrl+Shift+M), choose to store it in 'This Workbook'. Now perform all the formatting steps. Stop recording (View > Macros > Stop Recording). Next month, open the raw report and press Ctrl+Shift+M — Excel replays every step in milliseconds.\n\nMacros are stored as VBA (Visual Basic for Applications) code. After recording, Priya can view the code (View > Macros > Edit) to understand what was recorded and make small tweaks. She does not need to write VBA from scratch — she reads what was generated and modifies values, like changing a hardcoded column width from 20 to 25. Over time, this exposure to VBA becomes a foundation for more powerful automation: loops that process hundreds of sheets, dialog boxes that ask users for input, and automatically emailing reports. For now, even basic macro recording is a significant productivity multiplier.",
    funFact:
      "VBA (Visual Basic for Applications) was released in 1993. It is one of the oldest programming languages still in active daily use. Despite newer tools like Python and Power Automate, VBA macros run inside millions of corporate Excel files globally and are a valued skill in finance, HR, and operations teams.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya records a macro to format her monthly report. Where is the recorded VBA code stored when she chooses 'This Workbook'?",
      options: [
        "In a separate .vba file on her desktop",
        "In Excel's global macro library accessible from all workbooks",
        "Inside the current Excel file, accessible only when that file is open",
        "On Microsoft's cloud servers",
      ],
      correctAnswer:
        "Inside the current Excel file, accessible only when that file is open",
      explanation:
        "When you store a macro in 'This Workbook', the VBA code is embedded in the .xlsm file (macro-enabled workbook). It is only available when that specific file is open. Storing in 'Personal Macro Workbook' instead makes macros available across all Excel files on that computer.",
    },
  },
  {
    title: "Excel for HR: Attendance and Payroll Tracking",
    content:
      "Sneha is the HR manager at a 150-person IT company. She uses Excel to manage monthly attendance and run the payroll calculation before sending data to the finance team. This lesson is a real-world walkthrough of how HR teams use Excel daily in IT companies.\n\nAttendance tracker structure: rows are employees, columns are working days of the month. Each cell holds P (Present), A (Absent), H (Half-day), or L (Leave). COUNTIF per row gives the count of each type: =COUNTIF(B2:AF2, \"P\") counts present days. A summary column calculates total working days, total absences, and leave balance. Conditional formatting highlights employees with more than 3 absences in red automatically.\n\nPayroll calculation links to the attendance tracker. The formula: =(Salary/TotalWorkingDays)*DaysWorked calculates pro-rated pay. Deductions: PF (12% of basic), Professional Tax (slab-based using nested IF), and Leave Without Pay (LWP) are calculated in separate columns. VLOOKUP pulls the monthly salary from the employee master sheet by employee ID. The final 'Net Pay' column is the sum of earnings minus deductions. A single formula change in the tax slab row updates every employee's professional tax instantly. This is how real payroll sheets work before the data goes into dedicated payroll software — Excel is the calculation engine.",
    funFact:
      "Most small and mid-sized IT companies (50-500 employees) use Excel for payroll even when they have an HRMS (HR Management System), because Excel gives the HR team full control to audit, tweak, and format the data before it is finalized. Excel is the 'working copy' and the HRMS is the 'official record.'",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha wants to calculate the number of leaves (L) taken by each employee from their attendance row (B2:AF2). Which formula should she use?",
      options: [
        '=SUM(B2:AF2, "L")',
        '=COUNTIF(B2:AF2, "L")',
        '=COUNT(B2:AF2, "L")',
        '=SUMIF(B2:AF2, "L")',
      ],
      correctAnswer: '=COUNTIF(B2:AF2, "L")',
      explanation:
        'COUNTIF counts cells matching a specific criterion. =COUNTIF(B2:AF2, "L") counts all cells in the row that contain the letter L (leave). COUNT only counts numbers. SUM adds numbers, not text. SUMIF adds numbers from a range based on criteria in another range — not suitable here since the values are text labels, not numbers.',
    },
  },
  {
    title: "Excel for IT Operations: Incident Reports and SLA Tracking",
    content:
      'Arjun manages the IT Operations team that handles production incidents. His team logs every incident in an Excel tracker, and each Monday he presents SLA compliance metrics to senior management. This is one of the most common real-world Excel use cases in IT operations.\n\nIncident tracker columns: Incident ID, Title, Severity (P1/P2/P3), Reported Date, Resolved Date, Assignee, Status, Resolution Time (hours), SLA Breach (Yes/No). The Resolution Time formula: =IF(E2<>"", (E2-D2)*24, (TODAY()-D2)*24) — if the incident is resolved, calculate the total hours; if still open, calculate hours elapsed so far.\n\nSLA rules are defined by severity: P1 must resolve in 4 hours, P2 in 8 hours, P3 in 24 hours. The SLA Breach column uses nested IF: =IF(C2="P1", IF(G2>4, "Breach", "OK"), IF(C2="P2", IF(G2>8, "Breach", "OK"), IF(G2>24, "Breach", "OK"))). Conditional formatting turns \'Breach\' cells red. COUNTIF generates the weekly summary: total incidents, open incidents, resolved, and breaches by severity. A Pivot Table with severity as rows and weeks as columns shows trends over time. Arjun\'s Monday report is now automated — he just pastes the new week\'s incidents, and every metric updates instantly.',
    funFact:
      "SLA stands for Service Level Agreement — a contractual commitment to resolve issues within a specified time. In IT, breaching SLAs can result in financial penalties for vendors and service credits for clients. Operations teams use Excel trackers because they are universally accessible, customizable, and do not require special software licenses to view.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs a count of all P1 incidents that breached SLA this week. His Severity is in column C and SLA Breach status is in column H. Which formula gives the count?",
      options: [
        '=COUNTIF(C2:C100, "P1")',
        '=COUNTIF(H2:H100, "Breach")',
        '=COUNTIFS(C2:C100, "P1", H2:H100, "Breach")',
        '=SUMIF(C2:C100, "P1", H2:H100)',
      ],
      correctAnswer: '=COUNTIFS(C2:C100, "P1", H2:H100, "Breach")',
      explanation:
        'COUNTIFS applies multiple conditions simultaneously. =COUNTIFS(C2:C100, "P1", H2:H100, "Breach") counts only rows where both Severity = P1 AND SLA Breach = Breach. COUNTIF with only one condition would count all P1s or all Breaches separately, not the intersection.',
    },
  },
  {
    title: "Excel Capstone: Employee Performance Dashboard",
    content:
      "This is your final Excel project. You will build a complete Employee Performance Dashboard that combines everything learned in this course — a real artifact you can showcase in interviews as proof of your Excel skills.\n\nProject scenario: Priya is now the lead analyst at TechCorp with a team of 20 employees. She needs a dashboard that the Operations Director opens every Friday to review team performance. The dashboard must show: total and per-person ticket resolution stats, SLA compliance rates, monthly trend, attendance summary, and top performers.\n\nStep-by-step build: Sheet 1 (RawData) — 20 employees, 3 months of daily ticket data (resolved, open, SLA breach). Sheet 2 (Calculations) — COUNTIFS and SUMIFS formulas for per-employee summaries, AVERAGEIF for resolution times, NETWORKDAYS for active working days. Sheet 3 (Attendance) — monthly attendance grid with COUNTIF for present/absent/leave. Sheet 4 (Dashboard) — 4 KPI cells using =Calculations!B2 references, a Pivot Chart for monthly trends, a Data Bar conditional formatting table for per-person performance, and a top 5 performers ranking using LARGE. Add slicers to filter by month. Protect the Dashboard sheet. Hide Calculations and Attendance sheets. The result is a professional dashboard that demonstrates SUM, IF, VLOOKUP, INDEX-MATCH, COUNTIFS, Pivot Tables, Charts, Conditional Formatting, Data Validation, and Power Query — all in one project.",
    funFact:
      "In job interviews for Business Analyst, Data Analyst, and IT Operations roles, being able to say 'I built an automated Excel dashboard for team performance tracking using Pivot Tables, COUNTIFS, and conditional formatting' — and then show it — immediately differentiates you from candidates who only list Excel as a skill on their resume.",
    xpReward: 150,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "After completing the capstone project, which feature makes the dashboard update automatically when new raw data is added each week?",
      options: [
        "Protect Sheet prevents any changes",
        "Formulas referencing the RawData sheet recalculate automatically, and Pivot Tables update after a Refresh",
        "The dashboard stores its own copy of the data independently",
        "Macros must run manually to trigger updates",
      ],
      correctAnswer:
        "Formulas referencing the RawData sheet recalculate automatically, and Pivot Tables update after a Refresh",
      explanation:
        "Cell reference formulas like =Calculations!B2 and =COUNTIFS(...) recalculate instantly when source data changes. Pivot Tables require a manual Refresh (right-click > Refresh or Data > Refresh All), but this is a single click that updates every Pivot Table and Pivot Chart in the workbook simultaneously. Together, these make the dashboard almost fully automated.",
    },
  },
];
