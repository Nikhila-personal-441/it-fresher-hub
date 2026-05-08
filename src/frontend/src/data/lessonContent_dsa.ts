// DSA Lesson Content for IT Fresher Hub
// 30 scenario-based lessons — moduleId: 'dsa'
import type { LessonContent } from "@/types";

export const DSA_LESSONS: LessonContent[] = [
  {
    title: "Why DSA? The Secret to Cracking Tech Interviews",
    content:
      "Rahul had a 7.8 GPA, knew Python, and could build REST APIs — yet he failed his first three placements. The interviewers weren't asking about frameworks; they were asking him to reverse a string in-place and find the second largest number in an array. He had no idea. That's when he discovered DSA.\n\nDSA stands for Data Structures and Algorithms. Data structures are organized ways to store data (arrays, trees, graphs), while algorithms are step-by-step instructions to process that data (sorting, searching). Together, they're the language of technical interviews at Google, Microsoft, Amazon, and every product company in India.\n\nHere's the brutal truth: interviewers don't care if you know React or Django. They care whether you can think logically under pressure. A candidate who solves problems efficiently in 20 minutes beats one who knows ten frameworks but can't find a loop in O(n). DSA is not theory — it's a skill that separates the hired from the rejected.",
    funFact:
      "Google, Amazon, Microsoft, and Meta use DSA problems in almost every engineering interview. Over 60% of software job rejections cite poor DSA performance. Mastering DSA can increase your salary offer by 30-40% at product companies.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul builds great web apps but keeps failing tech interviews. What's the most likely root cause?",
      options: [
        "His GPA is not high enough",
        "He lacks knowledge of Data Structures and Algorithms",
        "He doesn't know enough frameworks",
        "He needs to learn more databases",
      ],
      correctAnswer: "He lacks knowledge of Data Structures and Algorithms",
      explanation:
        "Product companies primarily test problem-solving via DSA in technical rounds. Frameworks and tools can be learned on the job, but logical thinking and algorithmic reasoning are evaluated in interviews.",
    },
  },
  {
    title: "Big O Notation: Measuring Algorithm Efficiency",
    content:
      "Imagine Rahul and Priya both write code to find a name in a phone book with 1 million entries. Rahul checks every name one by one. Priya opens the middle, decides which half to search, and repeats. Rahul might check 1,000,000 entries; Priya checks just 20. That difference is what Big O notation captures.\n\nBig O describes how an algorithm's time or space requirements grow as the input size grows. We write it as O(something) where the something describes the growth pattern. O(1) means constant — no matter how big the input, it always takes the same time. O(n) means linear — double the input, double the time. O(n²) means quadratic — double the input, quadruple the time.\n\nWhy does this matter? A function that runs in O(n²) is fine with 100 items — maybe 10,000 operations. But with 1 million items it's 1 trillion operations. Your program will freeze. Big O lets you predict this before you write a single line — and pick the right approach from the start.",
    funFact:
      "Big O notation was introduced by German mathematician Paul Bachmann in 1894 — 60 years before computers existed! He used it for number theory. Computer scientists borrowed it in the 1960s and it became the universal language of algorithm analysis.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's algorithm checks the middle of a sorted list, eliminates half, then repeats. What is the Big O complexity?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(log n)",
      explanation:
        "Each step eliminates half the remaining items. Starting with n=1,000,000: after step 1 → 500,000 → 250,000 ... → 1. That's log₂(1,000,000) ≈ 20 steps. This halving pattern is O(log n).",
    },
  },
  {
    title: "Time Complexity: O(1), O(n), O(n²) Explained",
    content:
      "Rahul is studying time complexity by comparing three different functions his senior wrote. The first function accesses array[0] — it always takes the same time regardless of array size. That's O(1): constant time. Checking if a number is even (n % 2 == 0) is also O(1). These are the fastest possible operations.\n\nThe second function loops through every element once: for item in array: print(item). If the array has 10 elements, it does 10 operations. With 1000 elements, 1000 operations. This grows linearly with input — that's O(n). Finding the maximum value in an unsorted array is O(n) because you must check every element.\n\nThe third function has a loop inside a loop: for i in array: for j in array: compare(i, j). For 10 elements that's 100 comparisons. For 100 elements it's 10,000 comparisons. For 1000 elements: 1,000,000 operations. This is O(n²) — quadratic. Bubble sort is the classic O(n²) algorithm. It works for small inputs but becomes unusable beyond a few thousand items.",
    funFact:
      "If an O(n²) algorithm takes 1 second for 1,000 items, it takes 17 minutes for 10,000 items and over 11 days for 1,000,000 items. An O(n log n) algorithm on the same data takes about 20 seconds for 1,000,000 items. Choosing the right complexity is life or death for production systems.",
    xpReward: 65,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "An algorithm that checks every pair of elements in an array of size n performs ___ comparisons, making it O(n²).",
      correctAnswer: "n squared",
      explanation:
        "For each of n elements, you compare against n other elements: n × n = n² total comparisons. This quadratic growth explains why nested loops over the same array are usually O(n²).",
    },
  },
  {
    title: "Space Complexity: Memory Matters",
    content:
      "During Rahul's interview at a mid-size Hyderabad startup, he solved the problem correctly but was rejected. Why? His solution created a copy of the entire input array inside the function — O(n) extra space — when the interviewer expected an in-place solution using O(1) space. Time complexity was equal; space complexity lost him the job.\n\nSpace complexity measures how much extra memory your algorithm uses as input size grows. O(1) space means your algorithm uses a fixed amount of memory regardless of input size (a few variables). O(n) space means memory grows linearly with input (like storing a copy of the array). O(n²) space means you're storing an n×n matrix.\n\nIn interviews, 'optimize for space' means reduce extra memory usage. Recursive algorithms often have hidden space complexity from the call stack — a recursive function called n times deep uses O(n) stack space even if it looks like O(1) at first glance. Always ask yourself: what extra memory does this solution create?",
    funFact:
      "The first iPhone had 128MB of RAM. Modern apps are often rejected from Apple's App Store if they exceed memory limits on older devices. Space complexity isn't academic — it directly determines whether your app runs on budget Android phones with 2GB RAM.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul reverses an array by creating a new array and filling it backwards. What is the space complexity?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: "O(n)",
      explanation:
        "Creating a new array of the same size as the input requires O(n) extra space. An in-place reversal (swapping elements using two pointers) would use O(1) space since it only needs a single temp variable.",
    },
  },
  {
    title: "Common Complexity Classes at a Glance",
    content:
      "Priya created a cheat sheet before her campus placement drives. She listed complexity classes from fastest to slowest: O(1) constant (hash map lookup), O(log n) logarithmic (binary search), O(n) linear (linear search), O(n log n) linearithmic (merge sort), O(n²) quadratic (bubble sort), O(2^n) exponential (brute-force recursion), O(n!) factorial (permutations of n items).\n\nThe jump from O(n log n) to O(n²) is massive in practice. Merge sort (O(n log n)) can sort 1 million items in seconds; bubble sort (O(n²)) would take hours. The jump from O(n²) to O(2^n) is catastrophic — O(2^n) for n=50 is more operations than atoms in the observable universe.\n\nFor interviews, acceptable solutions are usually O(n log n) or better. O(n²) may be accepted for simple problems or when asked 'give me a brute-force first.' O(2^n) or O(n!) solutions almost always signal that you need a completely different approach — usually dynamic programming or greedy algorithms.",
    funFact:
      "The Traveling Salesman Problem (find shortest route visiting n cities) has no known polynomial-time solution. The brute-force approach is O(n!) — for 20 cities that's 2.4 quintillion possibilities. Approximate algorithms using O(n²) or O(n² log n) are used in real GPS systems instead.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rank these from fastest to slowest for large inputs: O(n²), O(log n), O(n!), O(n log n)",
      options: [
        "O(log n) < O(n log n) < O(n²) < O(n!)",
        "O(n log n) < O(log n) < O(n²) < O(n!)",
        "O(log n) < O(n²) < O(n log n) < O(n!)",
        "O(n!) < O(n²) < O(n log n) < O(log n)",
      ],
      correctAnswer: "O(log n) < O(n log n) < O(n²) < O(n!)",
      explanation:
        "Smaller Big O = faster algorithm. O(log n) grows the slowest (halving at each step), then O(n log n) (merge sort), then O(n²) (nested loops), and O(n!) is the slowest — 20! = 2.4 quintillion operations.",
    },
  },
  {
    title: "Arrays: The Foundation of All Data Structures",
    content:
      "On Arjun's first day at TCS, his trainer asked him to write code to store 100 employee IDs. Arjun could have used 100 separate variables — but that's insane. Instead, he used an array: a contiguous block of memory where each slot holds one value and is accessed by its index. employees[0] is the first, employees[99] is the last.\n\nArrays are stored in contiguous memory, meaning all elements are next to each other in RAM. This makes index-based access O(1) — instant. The computer calculates the address: base_address + (index × element_size). employees[50] is found in one calculation, not by scanning through all previous elements.\n\nIn Java, arrays are fixed-size: int[] arr = new int[10]. In Python, lists are dynamic arrays that resize automatically. The key properties to remember: access by index O(1), search for a value O(n), insert at end O(1) amortized, insert in middle O(n) because all elements to the right must shift. Arrays are the backbone — almost every other data structure uses them internally.",
    funFact:
      "Python lists are not true arrays — they're dynamic arrays of object pointers. Each element is a pointer (8 bytes on 64-bit systems) to the actual object in memory. This is why Python lists can hold mixed types, but are slower than NumPy arrays which store actual values contiguously.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to access employee ID at position 47 in an array. What is the time complexity?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctAnswer: "O(1)",
      explanation:
        "Array access by index is O(1) because the memory address is calculated directly: base + (47 × element_size). No scanning needed — it's a direct jump to the memory location.",
    },
  },
  {
    title: "Array Operations: Insert, Delete, Search",
    content:
      "Sneha's interviewer at Infosys gave her a classic problem: 'Given an array of 1000 employee IDs, insert a new ID at position 500.' Sneha knew she couldn't just put it there — all 500 elements from position 500 to 999 need to shift right by one to make room. That's 500 operations, making insertion at an arbitrary position O(n).\n\nDeletion works similarly. Remove element at index 200: all elements from index 201 onwards must shift left. Again O(n). This is the fundamental weakness of arrays — insertion and deletion in the middle are expensive. But appending to the end? That's O(1) — just put the element at the next available slot.\n\nSearching an unsorted array requires checking every element: O(n). But if the array is sorted, you can use binary search: O(log n). The key insight for interviews: if you're doing many insertions/deletions in the middle, an array is the wrong choice. Use a linked list. If you need fast random access, arrays win. Always match the data structure to the operation you need most.",
    funFact:
      "Java's ArrayList doubles its capacity when full — not increases by 1. Starting at capacity 10: 10 → 20 → 40 → 80. This 'amortized O(1)' append means most appends are O(1) and occasional resizes are O(n), but averaged over n appends, each costs O(1). This is why dynamic arrays are practical despite resizing overhead.",
    xpReward: 65,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Inserting an element at the beginning of an array of n elements requires shifting ___ elements.",
      correctAnswer: "n",
      explanation:
        "All n existing elements must shift right by one position to make room at index 0. This is why insertion at the beginning of an array is O(n). In contrast, insertion at the end is O(1) since no shifting is needed.",
    },
  },
  {
    title: "The Two-Pointer Technique",
    content:
      "Rahul was asked: 'Find two numbers in a sorted array that add up to a target sum.' His first instinct: nested loops — check every pair. That's O(n²). His interviewer hinted: 'Can you do it in O(n)?' The answer was the two-pointer technique — one of the most powerful patterns in DSA interviews.\n\nPlace one pointer at the start (left) and one at the end (right). Compute the sum. If sum equals target, you found the pair. If sum is too small, move left pointer right (increase sum). If sum is too large, move right pointer left (decrease sum). Each step moves one pointer, so at most n steps total: O(n) time, O(1) space.\n\nTwo pointers work whenever you have a sorted array or need to compare elements from opposite ends. Classic problems: 'remove duplicates from sorted array,' 'container with most water,' 'palindrome check,' '3Sum.' The pattern works because the sorted order gives you information — moving a pointer in a specific direction guarantees you're moving toward the answer.",
    funFact:
      "The two-pointer technique is used in the Boyer-Moore majority vote algorithm, which finds the majority element in O(n) time and O(1) space. Netflix's recommendation algorithm uses similar 'scan from both ends' patterns to find matching pairs of viewer preferences.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Using two pointers on sorted array [1,3,5,7,9], target=10. Pointers start at 1 and 9, sum=10. What happens?",
      options: [
        "Move left pointer right",
        "Move right pointer left",
        "Return the pair (1, 9)",
        "Start over from the middle",
      ],
      correctAnswer: "Return the pair (1, 9)",
      explanation:
        "Sum equals target! When left + right == target, you've found the answer. Return indices or values. The two-pointer terminates here without checking any other pairs, making it O(n) total.",
    },
  },
  {
    title: "Sliding Window: Efficient Subarray Problems",
    content:
      "Priya's placement interview question: 'Find the maximum sum subarray of size k in an array of n numbers.' Her naive solution computed the sum of every k-sized window from scratch: O(n×k). For n=10,000 and k=1,000, that's 10 million operations. Her interviewer said 'there's a much better way.'\n\nThe sliding window technique: compute the sum of the first window once. Then slide the window right by adding the new element that enters and subtracting the element that leaves. Each slide is O(1) — just one addition and one subtraction. Total: O(n). The 'window' slides across the array like a frame, maintaining a running result.\n\nSliding window works for: maximum/minimum sum subarray of size k, longest substring with at most k distinct characters, minimum window substring. The key condition: you have a contiguous sequence (subarray or substring) and the window expands/contracts based on a condition. Master this pattern and you can crack dozens of LeetCode Medium problems that initially seem impossible.",
    funFact:
      "Sliding window is used in TCP/IP networking — your computer's TCP stack uses a 'receive window' to control how much data a sender can transmit before waiting for acknowledgment. Every time you download a file or stream Netflix, sliding window algorithms are managing the data flow.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Array is [2,1,5,1,3,2], k=3. First window sum = 2+1+5=8. Sliding right: what is the next window sum?",
      options: ["7", "9", "6", "8"],
      correctAnswer: "7",
      explanation:
        "Slide right: subtract the leftmost element (2) and add the new rightmost element (1). New sum = 8 - 2 + 1 = 7. Window is now [1,5,1]. This O(1) update is the core of the sliding window technique.",
    },
  },
  {
    title: "String Manipulation: Common Patterns",
    content:
      "Sneha was surprised — nearly 40% of her interview problems involved strings. 'Reverse a string,' 'check if palindrome,' 'find all anagrams,' 'longest common prefix.' Strings are just character arrays, and most string problems map to array techniques you already know.\n\nKey string operations in Python: s[::-1] reverses, s.lower() lowercases, ord(c) gets ASCII value. In Java: s.toCharArray() converts to array, StringBuilder for efficient concatenation (never use + in a loop — it creates O(n²) total copies). Common interview technique: convert string to character frequency map using a dictionary/hashmap.\n\nAnagram check: two strings are anagrams if their character frequency maps are equal. 'listen' and 'silent' both have the same letter counts. Build a frequency map for each string in O(n), compare in O(1) for fixed alphabets. Palindrome: compare character at position i with character at position n-1-i. Two pointers from opposite ends, checking inward — O(n) time, O(1) space. These two patterns solve dozens of string interview problems.",
    funFact:
      "The longest English word that's a perfect anagram of another word is 'schoolmaster' / 'the classroom' (ignoring spaces). Anagram-finding algorithms power spam filters — spammers rearrange words to bypass keyword detection, and ML models use character frequency vectors to catch them.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul checks if 'racecar' is a palindrome using two pointers. Starting with i=0, j=6, both point to 'r'. Next comparison is i=1, j=5. What characters are being compared?",
      options: ["'a' and 'a'", "'c' and 'e'", "'a' and 'c'", "'e' and 'c'"],
      correctAnswer: "'a' and 'a'",
      explanation:
        "'racecar': index 0='r', 1='a', 2='c', 3='e', 4='c', 5='a', 6='r'. At i=1, j=5: both are 'a'. They match! Continue: i=2, j=4 → both 'c'. Then i=3, j=3 → middle 'e'. All match → palindrome confirmed.",
    },
  },
  {
    title: "Singly Linked Lists: Dynamic Data Storage",
    content:
      "Arjun's team at Wipro needed to store a dynamically growing list of transaction records where insertions happen at the beginning constantly. Using an array would require shifting all elements on every insert — O(n). His senior suggested a linked list: each element (node) stores a value AND a pointer to the next node. Insert at the beginning? Just update two pointers: O(1).\n\nA singly linked list is a chain of nodes: Node { data: 42, next: -> Node }. The last node's next pointer is null (end of list). You only have the head (first node) reference. To reach any node, you must traverse from the head — so random access is O(n), unlike arrays. But insertions and deletions at known positions are O(1) once you have the pointer to the right node.\n\nIn Java: class Node { int data; Node next; }. In Python: node = {'data': 42, 'next': None}. Creating a linked list of 5 nodes: head → 1 → 2 → 3 → 4 → 5 → null. The 'pointer' is just a reference to the next node object. Linked lists trade O(1) access for O(1) insertion/deletion — use them when you insert/delete frequently and rarely need random access.",
    funFact:
      "Python's deque (double-ended queue) in the collections module is implemented as a doubly linked list. It's O(1) for append and appendleft operations. Python lists (dynamic arrays) are O(n) for insert at index 0. For queue-like usage, deque is 10-100x faster than a list.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to access the 5th element in a linked list. What is the time complexity?",
      options: ["O(1)", "O(log n)", "O(n)", "O(5)"],
      correctAnswer: "O(n)",
      explanation:
        "Linked lists have no index. To reach the 5th node, you start at head and follow next pointers: 1→2→3→4→5. In the worst case (last element), you traverse all n nodes. Random access is O(n) — this is the linked list's main disadvantage compared to arrays.",
    },
  },
  {
    title: "Linked List Operations: Insert and Delete",
    content:
      "Sneha's interviewer asked: 'Given a linked list 1→3→5→7→9, insert node 4 between 3 and 5.' With an array you'd shift elements. With a linked list, it's elegant: find node 3, set new_node.next = node_3.next (which is 5), then set node_3.next = new_node. Two pointer updates, O(1) once you're at the right position.\n\nDeletion is equally clean. Delete node 5 from 1→3→5→7→9: find node 3 (previous of 5), set node_3.next = node_5.next (which is 7). Node 5 is now unreachable — garbage collection handles the memory. Two operations, O(1).\n\nThe catch: 'once you're at the right position' requires O(n) traversal to find it. So total complexity for insert/delete at arbitrary position is O(n) — but the actual linking/unlinking is O(1). For the head node, insert/delete is truly O(1) because no traversal is needed. This is why linked lists shine for stacks (add/remove from front) and queues (add to back, remove from front).",
    funFact:
      "Java's LinkedList class implements both List and Deque interfaces. It's used internally by Java's garbage collector to maintain lists of object references. Understanding linked list operations directly helps you understand how Java manages memory — a topic that comes up in senior developer interviews.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To delete a node from a singly linked list, you update the ___ node's next pointer to skip the deleted node.",
      correctAnswer: "previous",
      explanation:
        "To delete node X, find the node before X (call it prev). Set prev.next = X.next. This bypasses X in the chain. X is now unreachable and will be garbage collected. You cannot delete a node by only having a reference to that node itself — you need the previous node.",
    },
  },
  {
    title: "Doubly Linked Lists",
    content:
      "Rahul noticed a problem with singly linked lists: you can only go forward. To delete a node, you need the previous node — requiring a backwards traversal from the head. A doubly linked list solves this by giving each node TWO pointers: next (forward) and prev (backward). Head → [null | 1 | →] → [← | 2 | →] → [← | 3 | null].\n\nWith a doubly linked list, deletion at a known node is truly O(1): target.prev.next = target.next; target.next.prev = target.prev. No traversal from head needed. Similarly, you can traverse backwards. This makes doubly linked lists ideal for LRU Cache (Least Recently Used) — a common interview problem where you need fast insertions, deletions, and order tracking simultaneously.\n\nThe tradeoff: doubly linked lists use more memory (two pointers per node vs one) and insertions require updating four pointers instead of two. In Java, LinkedList is doubly linked. Python's collections.deque is also doubly linked. The browser's back/forward button is a classic doubly linked list use case — each page has a prev and next page reference.",
    funFact:
      "The LRU Cache problem (design a cache with O(1) get and put) is one of the most frequently asked hard problems at FAANG companies. The optimal solution requires a doubly linked list combined with a hashmap — each operation is O(1). This problem alone has appeared in thousands of Amazon and Google interviews.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya has a doubly linked list and a reference to node X. She wants to delete X. How many pointer updates are needed?",
      options: [
        "1",
        "2",
        "4",
        "You cannot delete without traversing from head",
      ],
      correctAnswer: "4",
      explanation:
        "To delete node X: (1) X.prev.next = X.next, (2) X.next.prev = X.prev, then (3) X.prev = null, (4) X.next = null to clean up X itself. In practice, steps 3 and 4 are optional if the node is being discarded, but interviewers often expect all 4 for correctness.",
    },
  },
  {
    title: "Detecting Cycles in a Linked List",
    content:
      "Arjun's code at Capgemini was stuck in an infinite loop. The bug? A linked list where node 7's next pointer accidentally pointed back to node 3 — creating a cycle. To detect this programmatically, Arjun learned Floyd's Cycle Detection Algorithm: the 'tortoise and hare' approach.\n\nTwo pointers start at head. Slow (tortoise) moves one step at a time: slow = slow.next. Fast (hare) moves two steps: fast = fast.next.next. If there's NO cycle, fast will reach null and exit. If there IS a cycle, fast laps slow — they'll meet at the same node. Why? In a cycle, the relative speed difference is 1 step per iteration. They're guaranteed to meet within n iterations: O(n) time, O(1) space.\n\nFinding WHERE the cycle starts: when slow and fast meet, reset slow to head. Move both one step at a time. The node where they meet again is the cycle start. This mathematical property follows from modular arithmetic. It's an elegant O(n) solution with O(1) space — no hashset needed, which would be O(n) space.",
    funFact:
      "Floyd's algorithm is used in birthday attack cryptography — finding hash collisions. It's also used in pseudorandom number generators to detect when the sequence starts repeating (a 'cycle'). Robert Floyd, who invented it in 1967, also invented the Floyd-Warshall algorithm for shortest paths in graphs.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Floyd's cycle detection, after slow and fast pointers meet inside the cycle, what is the next step to find where the cycle begins?",
      options: [
        "Restart both pointers from head",
        "Reset slow to head, move both one step at a time until they meet",
        "Count the cycle length and restart",
        "Use a hashset to find the repeated node",
      ],
      correctAnswer:
        "Reset slow to head, move both one step at a time until they meet",
      explanation:
        "After the first meeting inside the cycle, reset slow to head. Move slow and fast both one step at a time. They meet exactly at the cycle start node. This works due to the mathematical property: distance from head to cycle start equals distance from meeting point to cycle start.",
    },
  },
  {
    title: "Reversing a Linked List",
    content:
      "Reversing a linked list is probably the most asked linked list question in Indian campus placements — Rahul saw it in TCS Digital, Wipro Elite, and Infosys Specialist interviews. The iterative approach uses three pointers: prev (starts null), curr (starts head), next (temporary).\n\nAlgorithm: while curr is not null: save next = curr.next, reverse curr.next = prev, advance prev = curr, advance curr = next. After the loop, prev is the new head. Visualize: 1→2→3→4→null becomes null←1←2←3←4, with 4 as the new head.\n\nThe recursive approach is elegant but tricky: reverse(head.next) reverses the rest, then head.next.next = head and head.next = null fixes the current node. Warning: recursive reversal uses O(n) stack space. For linked lists of 100,000 nodes, this risks a stack overflow. Iterative is always safer in production. Practice both — interviewers sometimes ask for both implementations to test depth of understanding.",
    funFact:
      "In-place linked list reversal is a fundamental operation in memory-constrained systems. Embedded systems (like your washing machine's controller) often manipulate linked lists in O(1) space because they have no heap allocator. The same 3-pointer technique Rahul learned is used in operating system kernel code.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In iterative linked list reversal, after processing all nodes, the variable ___ holds the new head of the reversed list.",
      correctAnswer: "prev",
      explanation:
        "When curr becomes null (end of original list), prev is pointing to the last node of the original list — which is now the first node of the reversed list. That's why we return prev as the new head.",
    },
  },
  {
    title: "Stacks: Last In, First Out",
    content:
      "On Sneha's first project at HCL, the undo feature in the text editor she was building used a stack. Every time the user typed a character, push it onto the stack. Ctrl+Z (undo)? Pop the top character. The most recently added character is removed first — Last In, First Out (LIFO).\n\nA stack has three core operations: push(element) — add to top, O(1). pop() — remove from top, O(1). peek() — view top without removing, O(1). In Java: Stack class or Deque interface. In Python: a list with .append() and .pop() works perfectly as a stack.\n\nReal-world applications: function call stack (when function A calls function B calls function C, the OS pushes activation records onto the call stack — C returns first, then B, then A — LIFO). Expression evaluation, backtracking algorithms, DFS graph traversal. The browser's back button is literally a stack. Every time you visit a page, it's pushed onto your history stack; clicking back pops it.",
    funFact:
      "Stack overflow — the error and the famous Q&A website — both reference the call stack. When recursive functions call themselves too many times, they exhaust the call stack memory (typically 1-8MB). Java throws StackOverflowError; Python raises RecursionError after default 1000 recursive calls.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha pushes A, B, C onto a stack in that order, then pops twice. What are the two popped values (in order)?",
      options: ["A, B", "B, C", "C, B", "A, C"],
      correctAnswer: "C, B",
      explanation:
        "Stack is LIFO. After pushing A, B, C: stack top is C. First pop returns C. Stack top is now B. Second pop returns B. LIFO means the last thing pushed (C) comes out first.",
    },
  },
  {
    title: "Using Stacks for Bracket Matching",
    content:
      "Rahul's interviewer at Zoho gave him this classic: 'Write a function to check if brackets in a string are balanced.' Input: '{[()]}' should return true. Input: '{[(])}' should return false. This is a textbook stack problem.\n\nAlgorithm: iterate through each character. If it's an opening bracket ({, [, (), push it. If it's a closing bracket, pop from the stack — the popped item MUST be the matching opening bracket. If the stack is empty when you try to pop (no matching opener) or the popped bracket doesn't match (like [ not matching ]) — return false. At the end, if the stack is empty, all brackets matched — return true.\n\nThis works because the most recently opened bracket must be the first to close — LIFO perfectly models bracket nesting. Interviewers love this problem because it tests if you instinctively think 'LIFO → stack.' Extensions: count minimum bracket additions to balance an invalid string, find the longest valid bracket substring. All use stacks.",
    funFact:
      "Compilers use bracket/parenthesis matching as part of lexical analysis — the first phase of compilation. Your Java or Python IDE's real-time syntax highlighting uses the exact same stack algorithm to instantly show mismatched brackets as you type. Every keystroke triggers a bracket-stack scan.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Checking '{[()]}': when we encounter ']', what should be on top of the stack?",
      options: ["'{'", "'['", "'('", "The stack is empty"],
      correctAnswer: "'['",
      explanation:
        "Processing '{[()]}': push '{', push '[', push '(', encounter ')' → pop '(' ✓, encounter ']' → pop '[' ✓, encounter '}' → pop '{' ✓. When we see ']', the most recently opened (and not yet closed) bracket is '[' — which correctly matches ']'.",
    },
  },
  {
    title: "Queues: First In, First Out",
    content:
      "Arjun observed something at his company's IT helpdesk: tickets were processed in the order they were submitted. First complaint filed, first resolved. This is a queue — First In, First Out (FIFO). The data structure mirrors real-world queues perfectly.\n\nQueue operations: enqueue(element) — add to the back, O(1). dequeue() — remove from front, O(1). front/peek() — view front element, O(1). In Python: from collections import deque; use deque.append() to enqueue and deque.popleft() to dequeue. In Java: Queue interface with LinkedList implementation.\n\nQueues are everywhere in computing: printer job queues (first document sent, first printed), CPU task scheduling (round-robin scheduler), BFS graph traversal (critical for finding shortest paths), keyboard buffer (characters typed are processed in order), web server request handling. The critical difference from stacks: new items go to the BACK, removal happens from the FRONT. If you use a regular Python list and pop(0) as a queue, that's O(n) — always use deque.",
    funFact:
      "CPU schedulers in operating systems use multiple queues simultaneously — a high-priority queue for system processes and a low-priority queue for background tasks. This multi-level queue scheduling is why pressing Ctrl+Alt+Delete still works even when your computer is 'frozen' — the OS task manager runs in a higher-priority queue.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun enqueues 1, 2, 3, then dequeues twice. What value is now at the front of the queue?",
      options: ["1", "2", "3", "The queue is empty"],
      correctAnswer: "3",
      explanation:
        "Queue is FIFO. Enqueue 1, 2, 3: front is 1. First dequeue removes 1 (front). Second dequeue removes 2. Now only 3 remains — it's at the front. FIFO means the first item enqueued (1) was removed first.",
    },
  },
  {
    title: "Implementing a Queue Using Two Stacks",
    content:
      "This is a classic interview problem Priya encountered at Flipkart: 'Implement a queue using only two stacks.' No built-in queue allowed. How? Use stack1 for enqueue and stack2 for dequeue. When dequeue is called and stack2 is empty, pour all elements from stack1 into stack2 (reversing their order). Then pop from stack2.\n\nVisualization: enqueue 1, 2, 3 → stack1: [1, 2, 3] (top=3). Dequeue: stack2 is empty, move all from stack1 → stack2: [3, 2, 1] (top=1). Pop from stack2 → returns 1 (correct FIFO!). Next dequeue: stack2 still has [3, 2] (top=2), so pop → returns 2. Correct!\n\nAmortized analysis: each element is pushed twice (once to stack1, once to stack2) and popped twice. Total operations = 4n for n elements = O(1) amortized per operation. This problem tests if you understand both stacks and amortized analysis — two concepts in one. It also appears as 'implement a stack using two queues' (reversed version).",
    funFact:
      "Amazon's SQS (Simple Queue Service) internally buffers messages in a way that mimics this two-buffer approach — a fast 'write buffer' receives new messages, and a 'read buffer' serves consumers. When the read buffer empties, a batch is moved from write buffer to read buffer, similar to the stack-to-stack transfer.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In the two-stack queue, elements are moved from stack1 to stack2 only when stack2 is ___ and a dequeue is requested.",
      correctAnswer: "empty",
      explanation:
        "This lazy transfer is key to the amortized O(1) efficiency. You don't transfer every time — only when stack2 runs out. Each element makes at most one journey from stack1 to stack2, keeping the total work proportional to n operations rather than n².",
    },
  },
  {
    title: "Priority Queues and Heaps",
    content:
      "Sneha's company processes customer support tickets differently: P0 (critical system outage) jumps to the front regardless of when it was submitted. P1 goes before P2, which goes before P3. A regular FIFO queue doesn't work here — she needs a priority queue, where dequeue always returns the highest-priority element.\n\nA heap is the standard implementation of a priority queue. A min-heap is a binary tree where every parent is smaller than its children — so the minimum is always at the root (O(1) access). Insertion: add to the bottom-right and 'bubble up' (swap with parent while smaller than parent): O(log n). Delete min: remove root, move last element to root, 'bubble down': O(log n).\n\nIn Python: import heapq. heapq.heappush(heap, item) and heapq.heappop(heap). For max-heap, negate values (push -x, pop -x). Classic heap problems: 'find K largest elements,' 'merge K sorted arrays,' 'top K frequent elements,' 'median of a data stream.' The last one uses two heaps simultaneously — a must-know for hard-level interviews.",
    funFact:
      "Dijkstra's shortest path algorithm (used in Google Maps) uses a min-heap priority queue. When you get directions, your phone runs a heap-based algorithm that processes road intersections in order of distance from your current location. The heap ensures you always expand the nearest unexplored junction first.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In a min-heap with elements [2, 5, 3, 8, 7, 4], what element is always at the root?",
      options: ["8", "2", "3", "4"],
      correctAnswer: "2",
      explanation:
        "In a min-heap, the root always contains the minimum element. Regardless of how the heap is structured internally, the element at the root (index 0 in array representation) is always the smallest. That's why peek() is O(1) — the answer is always right at position 0.",
    },
  },
  {
    title: "Binary Trees: The Branching Structure",
    content:
      "Rahul's senior at Accenture showed him the company's organizational chart — CEO at top, two VPs below, four directors below them. This hierarchical structure is exactly what a binary tree models: each node has at most two children (left and right). The top node is the root, nodes with no children are leaves.\n\nTree terminology: root (top node), parent (node above), child (node below), leaf (no children), height (longest path from root to leaf), depth (distance from root to a node). A perfect binary tree has all leaves at the same level. A complete binary tree fills levels left-to-right — used in heaps. A balanced tree has height O(log n) — critical for efficient search.\n\nIn Java: class TreeNode { int val; TreeNode left; TreeNode right; }. In Python: class TreeNode: def __init__(self, val): self.val = val; self.left = None; self.right = None. Why trees? Hierarchical data (file systems, HTML DOM, company org charts), databases (B-trees for indexes), decision trees in ML, expression evaluation. A binary tree is the parent concept for BST, heaps, and trie — understanding it unlocks all of them.",
    funFact:
      "Your computer's file system is a tree. The / (root) directory has children like /home and /usr. Each has subdirectories. Folder navigation apps like Windows Explorer traverse this tree structure. The 'tree' command in Linux prints this hierarchy visually — it literally displays a tree data structure.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A perfect binary tree has 4 levels (root at level 1). How many nodes does it have?",
      options: ["8", "15", "16", "7"],
      correctAnswer: "15",
      explanation:
        "A perfect binary tree with h levels has 2^h - 1 nodes. Level 1: 1 node (root). Level 2: 2. Level 3: 4. Level 4: 8. Total = 1+2+4+8 = 15 = 2^4 - 1. This formula is why binary trees have O(log n) height for n nodes — critical for BST efficiency.",
    },
  },
  {
    title: "Binary Search Trees (BST)",
    content:
      "Arjun's task at L&T Infotech: build a data structure to store employee IDs where searching, inserting, and deleting are all fast. A BST delivers: for any node, ALL values in the left subtree are smaller, ALL values in the right subtree are larger. Search: compare target with current node, go left if smaller, right if larger. Guaranteed to halve the search space each step: O(log n) for balanced trees.\n\nInsertion follows the same logic as search — go left/right until you find a null spot, insert there. Deletion has three cases: leaf node (just remove), one child (replace node with child), two children (replace with in-order successor — the smallest value in the right subtree — then delete the successor).\n\nThe catch: BSTs can become unbalanced. Insert 1, 2, 3, 4, 5 in order — you get a straight line (degenerate tree), and all operations degrade to O(n). This is why balanced BSTs (AVL trees, Red-Black trees) exist. Interview question: 'Given a sorted array, build a balanced BST' — always insert the middle element as root, recurse on left and right halves.",
    funFact:
      "Database indexes (like MySQL's InnoDB) use B-trees — a generalization of BSTs where each node has multiple keys and children. This allows storing millions of index entries with O(log n) lookups. When you add an INDEX to a SQL column, the database builds a B-tree behind the scenes — your SELECT queries become O(log n) instead of O(n) full table scans.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In a BST, the in-order traversal (left, root, right) visits nodes in ___ order.",
      correctAnswer: "ascending",
      explanation:
        "BST property guarantees: left subtree has smaller values, right subtree has larger values. In-order traversal (left first, then root, then right) naturally visits nodes from smallest to largest. This property is used to sort a BST in O(n) — just do in-order traversal.",
    },
  },
  {
    title: "Tree Traversals: BFS and DFS",
    content:
      "Sneha's Google interview included: 'Print all nodes level by level from root to leaves.' This is Breadth-First Search (BFS) — also called level-order traversal. Use a queue: enqueue root, then process nodes one by one, enqueuing their children. When you dequeue a node, you process it; by the time you get to depth 2, all depth-1 nodes have been processed.\n\nDepth-First Search (DFS) has three variants: Pre-order (root → left → right): good for copying a tree. In-order (left → root → right): gives BST nodes in sorted order. Post-order (left → right → root): good for deleting a tree (delete children before parent). All DFS variants use a stack — either explicit or the recursive call stack.\n\nWhen to use BFS vs DFS: BFS finds the shortest path in unweighted graphs — always use BFS for 'shortest path' or 'nearest' problems. DFS is better for 'does a path exist,' 'all possible paths,' or 'cycle detection.' In interview problems, if the question mentions 'nearest' or 'minimum number of steps,' your brain should immediately think queue and BFS.",
    funFact:
      "Web crawlers (like Googlebot) use BFS to discover web pages. Starting from a seed URL, they visit all linked pages (level 1), then all pages those link to (level 2), etc. BFS ensures crawlers discover pages close to popular seed URLs first, which tend to be more important. Your page's search ranking partly depends on BFS distance from major hubs.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to find the shortest path between two nodes in an unweighted tree. Which traversal should she use?",
      options: [
        "Pre-order DFS",
        "Post-order DFS",
        "In-order DFS",
        "BFS (level-order)",
      ],
      correctAnswer: "BFS (level-order)",
      explanation:
        "BFS explores nodes layer by layer — first all nodes 1 hop away, then 2 hops, then 3. When BFS first reaches the destination, the path taken is the shortest possible. DFS might find a long, winding path first. 'Shortest path' = BFS is a golden rule for interviews.",
    },
  },
  {
    title: "Balanced Trees: AVL and Red-Black Trees",
    content:
      "Rahul learned BSTs are fragile — insert sorted data and they degrade to O(n). Balanced trees automatically restructure themselves to maintain O(log n) height. Two classics: AVL trees and Red-Black trees.\n\nAVL trees maintain a strict balance factor: for every node, the height difference between left and right subtrees is at most 1. After each insertion or deletion, if the balance factor becomes ±2, the tree rotates to rebalance. Four rotation types: left, right, left-right, right-left. AVL trees are perfectly balanced — lookups are slightly faster — but rotations are costly, making insertions/deletions slightly slower.\n\nRed-Black trees use color (red/black) per node with 5 rules ensuring the longest path is at most 2x the shortest path — O(log n) height maintained more loosely. Fewer rotations needed, so insertions/deletions are faster. Java's TreeMap and TreeSet, C++'s std::map are Red-Black trees. For interviews: you rarely need to implement these — just know the guarantee (O(log n) always) and where they're used. The conceptual insight: self-balancing trees exist because BSTs fail on sorted input.",
    funFact:
      "Java's HashMap switched from linked lists to Red-Black trees in Java 8 for handling hash collisions. When a bucket has more than 8 elements (common in adversarial inputs), the bucket's linked list converts to a Red-Black tree, keeping lookups O(log n) instead of O(n). This 2014 change fixed a class of denial-of-service attacks against Java web servers.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "An AVL tree has a node with left subtree height 5 and right subtree height 3. Is this valid?",
      options: [
        "Yes, balance factor is 2 which is acceptable",
        "No, balance factor is 2, rebalancing needed",
        "Yes, any balance factor is fine",
        "No, AVL trees must be perfectly balanced",
      ],
      correctAnswer: "No, balance factor is 2, rebalancing needed",
      explanation:
        "AVL trees require balance factor (left height - right height) to be -1, 0, or +1. Here: 5 - 3 = 2, which violates the AVL property. The tree needs a rotation to restore balance. This is what makes AVL trees self-balancing — any insertion that causes |balance| = 2 triggers an automatic rotation.",
    },
  },
  {
    title: "Sorting Algorithms: Bubble and Insertion Sort",
    content:
      "Sneha was given 10 numbered cards and asked to sort them. She picked up the first card, compared it to each other card, and swapped when out of order. That's bubble sort — largest elements 'bubble up' to the right with each pass. After n passes, sorted. O(n²) comparisons worst case.\n\nBubble sort in Python: for i in range(n): for j in range(0, n-i-1): if arr[j] > arr[j+1]: arr[j], arr[j+1] = arr[j+1], arr[j]. It's simple but impractical for large datasets. One optimization: if no swaps occur in a pass, the array is already sorted — break early. Best case O(n) with this optimization.\n\nInsertion sort: take one element at a time and insert it into the correct position in the already-sorted left portion. Like sorting a hand of playing cards — pick a card and slide it left until it's in the right spot. O(n²) worst case but O(n) for nearly-sorted arrays. For small arrays (under 20 elements), insertion sort often beats quicksort due to low overhead. Java's Arrays.sort() uses insertion sort for subarrays smaller than 7 elements.",
    funFact:
      "Tim Sort — used in Python's sorted() and Java's Arrays.sort() for objects — is a hybrid of merge sort and insertion sort. It detects 'runs' (already sorted sequences) and uses insertion sort on them before merging. Timsort achieves O(n) on nearly-sorted arrays (common in real data) and O(n log n) worst case. It was invented by Tim Peters for Python 2.2 in 2002.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Bubble sort's time complexity is O(n²) in the worst case, but O(n) in the best case when the array is already ___ and the 'no-swap' optimization is used.",
      correctAnswer: "sorted",
      explanation:
        "With the optimization: if a complete pass has no swaps, the array is already sorted — break immediately. For a sorted input, the first pass has 0 swaps → stop after n-1 comparisons → O(n). Without this optimization, bubble sort always runs O(n²) regardless of input.",
    },
  },
  {
    title: "Efficient Sorting: Merge Sort and Quick Sort",
    content:
      "Rahul's placement prep highlighted two O(n log n) sorts: Merge Sort and Quick Sort. Both use divide-and-conquer — split the problem, solve parts, combine. Merge Sort: divide array in half recursively until single elements, then merge sorted halves. Merging two sorted halves takes O(n), and there are log n levels: total O(n log n). Guaranteed — no bad cases.\n\nQuick Sort: pick a pivot, partition array so all elements less than pivot are left, all greater are right. Recurse on left and right parts. Average case O(n log n), but worst case O(n²) if pivot is always the min/max (sorted array with naive pivot choice). Fix: random pivot or median-of-three pivot. QuickSort is typically 2-3x faster than MergeSort in practice due to better cache performance.\n\nTradeoffs: Merge Sort is stable (equal elements maintain original order), uses O(n) extra space. Quick Sort is in-place (O(log n) space for recursion stack), unstable. Java uses TimSort (merge-based) for objects (stability required). For primitive arrays, Java uses dual-pivot QuickSort. Python uses TimSort. Interview key point: 'guaranteed O(n log n)' = merge sort; 'practical fastest' = quicksort with good pivot.",
    funFact:
      "Tony Hoare invented QuickSort in 1959 when he was just 25 years old and trying to sort Russian words for a machine translation project. He later called it 'my greatest mistake' — not the algorithm, but a different error in a ALGOL 60 paper. QuickSort remains one of the most studied algorithms in computer science history.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha sorts an already-sorted array using QuickSort with the first element as pivot. What happens?",
      options: [
        "O(n log n) as expected",
        "O(n) since it's already sorted",
        "O(n²) worst case — pivot is always the minimum",
        "O(log n) with binary search optimization",
      ],
      correctAnswer: "O(n²) worst case — pivot is always the minimum",
      explanation:
        "With sorted input and first-element pivot: pivot is always the minimum. After partition: left side is empty, right side has n-1 elements. This is the worst case — n levels of recursion instead of log n. Solution: use random pivot or median-of-three to avoid this degenerate case.",
    },
  },
  {
    title: "Binary Search: The Divide and Conquer Approach",
    content:
      "Arjun's favorite party trick: 'Think of a number 1-1000. I'll guess it in 10 tries.' How? Each guess eliminates half the remaining possibilities. Guess 500 — too high? Now it's between 1-499. Guess 250 — too low? Now 251-499. This is binary search: O(log n). For 1000 numbers, at most 10 guesses (log₂(1000) ≈ 10).\n\nBinary search on a sorted array: left=0, right=n-1. While left &lt;= right: mid = left + (right-left)//2. If arr[mid] == target: return mid. If arr[mid] &lt; target: left = mid+1. If arr[mid] &gt; target: right = mid-1. Return -1 (not found). Note: use left + (right-left)//2 not (left+right)//2 to prevent integer overflow in Java.\n\nBeyond basic search: binary search on the answer — a powerful technique for problems like 'find minimum speed such that everyone reaches in time' or 'find minimum capacity to carry all packages.' The insight: the answer lies in a range, and for any answer x, you can check in O(n) if it works. Binary search on x: O(log(max)) total. This 'binary search on answer' pattern solves many hard problems elegantly.",
    funFact:
      "Binary search was described in 1946 but the first bug-free published version wasn't written until 1962 — a 16-year gap! Jon Bentley found in 1986 that 90% of programmers couldn't implement correct binary search in 2 hours. The subtle off-by-one errors make it harder than it looks. It's still a top interview test precisely because of this difficulty.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Binary search on a sorted array of 1,000,000 elements requires at most ___ comparisons.",
      correctAnswer: "20",
      explanation:
        "log₂(1,000,000) ≈ 19.9, so at most 20 comparisons. Each comparison halves the search space. Starting at 1,000,000: 500,000 → 250,000 → ... → 1. This is why binary search is O(log n) and why sorted arrays are so powerful for search.",
    },
  },
  {
    title: "Graphs: Nodes and Edges",
    content:
      "Priya's navigation app shows roads as lines connecting cities — that's a graph. Cities are nodes (vertices), roads are edges. Unlike trees, graphs can have cycles, multiple paths, and disconnected components. Graphs model everything: social networks (users = nodes, friendships = edges), internet (computers = nodes, links = edges), Google Maps (locations = nodes, roads = edges with weights).\n\nGraph types: undirected (edges have no direction, like Facebook friendship), directed/digraph (edges have direction, like Twitter follow — A follows B doesn't mean B follows A), weighted (edges have costs, like road distances), unweighted (just connections). Representation: adjacency matrix (n×n boolean array, O(n²) space, O(1) edge lookup) or adjacency list (each node has a list of neighbors, O(V+E) space, better for sparse graphs).\n\nKey graph problems in interviews: BFS shortest path (unweighted), Dijkstra shortest path (weighted), detect cycle, number of connected components (Union-Find), topological sort (task scheduling). Graphs are the hardest DSA topic but appear frequently in senior roles and product company interviews. Build comfort with BFS/DFS on graphs — those two patterns solve most graph problems.",
    funFact:
      "Facebook's social graph has 3 billion nodes (users) and hundreds of billions of edges (connections). LinkedIn's 'degrees of separation' feature (2nd, 3rd degree connections) runs BFS from your profile node. Google's PageRank algorithm (the original foundation of Google Search) treats the entire web as a directed graph and ranks pages by their 'importance' in that graph.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs to find the minimum number of friend recommendations to connect two strangers on a social network. Which algorithm should he use?",
      options: [
        "DFS from source node",
        "BFS from source node",
        "Dijkstra's algorithm",
        "Topological sort",
      ],
      correctAnswer: "BFS from source node",
      explanation:
        "BFS explores all nodes at distance 1 first, then distance 2, etc. When it reaches the target, the path found is guaranteed to be the shortest (fewest hops). This is 'degrees of separation' — exactly what LinkedIn shows you. DFS might find a longer, winding path first.",
    },
  },
  {
    title: "Dynamic Programming: Solving Overlapping Subproblems",
    content:
      "Sneha's recursive Fibonacci function was accepted for correctness but rejected for performance. fib(50) called fib(49) and fib(48). fib(49) called fib(48) and fib(47). fib(48) is computed twice! This redundancy explodes exponentially — O(2^n) for a simple problem. Dynamic programming (DP) eliminates this by storing results: if you've computed fib(48) once, store it and reuse it instantly.\n\nDP has two approaches: Memoization (top-down) — recursive with a cache. Before computing, check if answer is already stored. Store result after computing. Bottom-up (tabulation) — build solution from smallest subproblems upward. fib[0]=0, fib[1]=1, fib[2]=fib[1]+fib[0]=1, ... fib[n]. No recursion — just a loop. Often faster and avoids stack overflow.\n\nDP applies when: 1) Problem has optimal substructure (optimal solution uses optimal solutions to subproblems). 2) Subproblems overlap (same subproblems solved repeatedly). Classic DP problems: Fibonacci, Knapsack, Longest Common Subsequence, Longest Increasing Subsequence, Coin Change, Edit Distance. If you see 'minimum/maximum ways' or 'count all combinations,' think DP.",
    funFact:
      "Richard Bellman invented dynamic programming in the 1950s while working at RAND Corporation. He chose the name 'dynamic programming' deliberately to obscure the mathematical nature of his work from his boss, Secretary of Defense Wilson, who disliked mathematical research. The term has nothing to do with 'dynamic' or 'programming' in the modern sense.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Computing fib(10) recursively without memoization computes fib(3) how many times?",
      options: ["1", "3", "7", "21"],
      correctAnswer: "21",
      explanation:
        "Without memoization, fib(3) is recomputed every time it's needed by fib(5), fib(4), etc. The number of times fib(k) is called grows exponentially. fib(3) is called 21 times in computing fib(10). With memoization, it's computed exactly once and reused 20 times — reducing O(2^n) to O(n).",
    },
  },
  {
    title: "DSA Capstone: Solve 5 Classic Interview Problems",
    content:
      "Rahul's final preparation: solve 5 classic problems under interview conditions. Problem 1 — Two Sum: Given array and target, find indices of two numbers that add up to target. Optimal: hash map, O(n) time O(n) space. For each num, check if (target - num) exists in map. Problem 2 — Valid Parentheses: stack-based bracket matching, O(n). Problem 3 — Merge Two Sorted Lists: two-pointer merge, O(n+m). Problem 4 — Maximum Subarray (Kadane's Algorithm): track current sum and max sum, reset current to 0 when negative, O(n). Problem 5 — Number of Islands: BFS/DFS from each '1' cell, mark visited, count components, O(n×m).\n\nInterview strategy: (1) Clarify edge cases before coding. (2) State brute-force first, then optimize. (3) Write clean code with meaningful variable names. (4) Walk through a small example step by step. (5) State time and space complexity after writing. These 5 problems cover: hashmaps, stacks, linked lists, arrays/DP, and graphs — a complete DSA tour.\n\nFinal Rahul update: after 30 lessons, he cracked TCS Digital, Infosys Specialist, and Wipro Elite placements. His secret: DSA isn't about memorizing solutions — it's about recognizing patterns. Two pointers for sorted array pairs. Sliding window for contiguous sequences. Stack for LIFO problems. BFS for shortest path. DP for overlapping subproblems. Master the patterns, not the problems.",
    funFact:
      "LeetCode has over 2,700 problems. Research shows that solving 100-150 curated problems (covering all major patterns) is more effective than grinding all 2,700. Top companies recycle 50-100 core problems across interviews. Rahul's approach — learn patterns from 30 deep lessons and practice applying them — mirrors what top candidates do.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul faces this problem: 'Find maximum sum of any contiguous subarray.' Which algorithm/pattern should he use?",
      options: [
        "Sort the array and sum all positives",
        "Kadane's algorithm with O(n) time and O(1) space",
        "Dynamic programming with O(n) space",
        "Sliding window with fixed size k",
      ],
      correctAnswer: "Kadane's algorithm with O(n) time and O(1) space",
      explanation:
        "Kadane's algorithm: track current_sum (reset to 0 when negative) and max_sum (best seen so far). For each element: current_sum = max(element, current_sum + element); max_sum = max(max_sum, current_sum). O(n) time, O(1) space — optimal. This is a DP pattern compressed into O(1) space by recognizing you only need the previous state.",
    },
  },
];
