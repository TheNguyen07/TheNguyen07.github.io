export const education = [
  { school: "University of Tulsa — NSA Center of Excellence", degree: "M.S. Computer Engineering, Cyber Operations Specialization", meta: "Advanced Studies", when: "Expected May 2028", gpa: "4.000" },
  { school: "University of Tulsa — NSA Center of Excellence", degree: "B.S. Electrical & Computer Engineering, Cyber Operations Specialization", meta: "Undergraduate Studies", when: "Expected May 2027", gpa: "4.000" },
  { school: "Union High School, Tulsa, Oklahoma", degree: "High School Diploma", meta: "Salutatorian", when: "May 2023", gpa: "4.96 (Weighted)" },
]

export const courseworkNow = ["Electronics II & Laboratory", "Classical Control Theory and Applications", "Operating Systems"]
export const courseworkFall = ["Electric Power Systems", "Signal & Linear Systems", "Electronics I", "PCB Design Principles and Practice", "Embedded Systems in C"]
export const courseworkDone = ["Hardware Reverse Engineering", "Computer Organization and Microprocessors", "Introduction to Electromagnetics", "Linear Algebra and Matrix Theory", "Data Structures", "Electrical Circuit Analysis", "Basic Electrical Measurement Lab", "Differential Equations", "Digital Systems Principles", "Discrete Mathematics", "Fundamentals of Algorithms and Computer Applications", "General Physics I–III", "Statistical Methods for Scientists and Engineers", "Radio Frequency Signal Reverse Engineering", "Intro to Programming and Problem Solving", "Ethics in Computer Science and Engineering", "Calculus I–III", "Introduction to Statistics"]

export const armory = [
  { title: "Realms Traversed", icon: "tower", items: ["Windows 10 / 11", "Linux", "Ubuntu"] },
  { title: "Tongues Spoken to Machines", icon: "scroll", items: ["Java", "Python", "C / C++ (Embedded)", "JavaScript, HTML, CSS", "Lua, RobotC", "MATLAB, MIPS, VHDL", "Vue 3, Vuetify 3", "LaTeX"] },
  { title: "Instruments of the Craft", icon: "gem", items: ["Autodesk Inventor & Fusion 360", "AutoCAD, KiCAD, Altium Designer", "MATLAB Simulink & Simscape", "Hercules, VS Code, Arduino IDE", "Soldering Iron & Bench Tools"] },
  { title: "Spoken Tongues", icon: "sword", items: ["English", "Vietnamese"] },
]

export const quests = [
  { org: "University School, University of Tulsa", role: "Lab Assistant", when: "Fall 2025 – Present", text: "Assisted 7th-grade Computer Science and 8th-grade Computer Engineering classrooms, and helped organize STEM Club activities engaging students in hands-on projects." },
  { org: "U.S. Government, Washington D.C.", role: "Software Developer Intern", when: "Summer 2025", text: "Developed an AI-assisted application for data triage of a collection; supported engineering, integration, and product evaluation for a collaborative workgroup platform." },
  { org: "NCFI Laboratory, University of Tulsa", role: "Undergraduate Researcher", when: "Fall 2023 – May 2025", text: "Researched alternative-reality software for affordably re-creating digital crime scenes and reconstructing large areas for digital analysis of protection locations during event planning." },
  { org: "TURC Program, University of Tulsa", role: "Volunteer Java Programming Instructor", when: "Summer 2024", text: "Co-taught two Java courses to 37 incoming freshmen, giving students a head start that let them bypass introductory coursework and begin advanced classes in their first semester." },
  { org: "Junior TURC Program, University of Tulsa", role: "High School Researcher", when: "Summer 2022", text: "Helped migrate the Rayzor Hall keycard system from Arduino to STMicroelectronics, and helped design a physical adaptation of the VR game \u201cKeep Talking and Nobody Explodes.\u201d" },
  { org: "Information Technology Dept., Union Public Schools", role: "Information Technology Intern", when: "Fall 2022 – Spring 2023", text: "Provided in-person IT assistance to students, repaired hardware, and installed software." },
]

export const certifications = [
  { code: "GCIH", title: "SANS GIAC Incident Handler Certification", when: "Jan 2025 – Jan 2029", text: "Validates the ability to detect, respond to, and resolve computer security incidents — understanding common attack techniques, vectors, and tools, and defending against them." },
  { code: "TS/SCI", title: "TS/SCI Clearance", when: "Active", text: "Top Secret / Sensitive Compartmented Information security clearance." },
]

export const feats = [
  {
    title: "Personal Portfolio Website",
    when: "Ongoing",
    text: "Designed and deployed a personal portfolio using HTML, CSS, JavaScript, and Bootstrap, with responsive layouts and version control via GitHub Pages.",
    link: "TheNguyen07.github.io",
    details: [
      "This site began as a way to have a single, professional home for coursework, research, and project write-ups that didn't fit neatly into a resume. It's built with hand-written HTML, CSS, and JavaScript on top of the Bootstrap grid, which made it possible to keep the layout responsive across desktop and mobile without pulling in a heavier framework.",
      "The build focuses on the fundamentals: semantic markup, accessible navigation, and interactive touches like smooth scrolling and collapsible project sections. Everything is tracked with Git and deployed automatically through GitHub Pages, so updates go live as soon as they're pushed.",
      "It's an evolving project — as new coursework and research wrap up, it gets folded back into the site, making it a living record of skills as they're gained rather than a static snapshot."
    ],
  },
  {
    title: "Projectile Trajectory Simulation",
    when: "Fall 2025",
    text: "Programmed in MARS MIPS assembly and C to calculate time-of-flight, maximum height, and trajectory angle, validating results across both implementations with a full report.",
    details: [
      "This project modeled artillery-style projectile motion by implementing the same physics twice, once in MIPS assembly using the MARS simulator, and once in C, in order to compare how a low-level and a high-level implementation handle the same numerical problem.",
      "The core of the work was applying the standard equations of motion — decomposing initial velocity into horizontal and vertical components, then solving for time-of-flight, maximum height, and impact angle based on user-supplied launch conditions. Getting the MIPS version right meant being deliberate about register usage, floating-point instructions, and manual control flow that C normally handles for free.",
      "After both versions were working, results were cross-validated against each other and against hand-calculated expected values to catch rounding or logic errors. The process, findings, and any discrepancies between implementations were documented in a professional report, including an error analysis discussing where and why the two approaches diverged."
    ],
  },
  {
    title: "Reverse-Engineered PCB",
    when: "Fall 2025",
    text: "Reverse engineered a custom PCB and rebuilt its functionality on an FPGA board using VHDL.",
    details: [
      "Starting from a physical circuit board with no accompanying schematic, this project involved tracing signal paths, identifying components, and inferring the board's logic purely from its physical layout and observed behavior — a core skill in hardware reverse engineering and embedded security work.",
      "Once the board's functionality was understood, the next step was translating that behavior into VHDL and implementing it on an FPGA, effectively rebuilding the original circuit's logic in a reconfigurable hardware description rather than fixed silicon.",
      "The project reinforced the connection between physical circuit design and hardware description languages, and highlighted how much can be learned about a device's function just from careful physical and electrical inspection."
    ],
  },
  {
    title: "Single-Port Read/Write Memory Design",
    when: "Spring 2024",
    text: "Designed a 16×4-bit memory device from a 64-bit shift register, address counter, and supporting logic, verifying operation with LEDs and 7-segment displays.",
    details: [
      "This lab focused on building a working memory device entirely from discrete digital logic components — no pre-built memory ICs. The design centered on a 64-bit shift register organized as 16 addressable 4-bit words, paired with an address counter to select which word was being read or written.",
      "Address comparison logic was built using XNOR and AND gates to decode the correct memory location, while T flip-flops handled clock division to keep read and write timing synchronized. Read and write operations themselves were routed through multiplexers and D flip-flops to control data flow into and out of the shift register.",
      "Verification was done the hands-on way: LEDs and 7-segment displays showed live read/write results, which made it possible to catch and debug timing hazards and logic errors directly by observing the hardware's behavior rather than relying only on simulation."
    ],
  },
  {
    title: "University RFID Analysis",
    when: "Fall 2023",
    text: "Capstone project reverse engineering TU ID card systems; identified three vulnerabilities and proposed lock-bit password protection, hardware reinforcement, and card-number obfuscation.",
    details: [
      "This capstone research project examined the security of the university's RFID-based ID card system from both the software and hardware sides, treating it as a real-world case study in access-control vulnerabilities.",
      "The analysis identified three distinct weaknesses spanning how card data was stored, how card numbers could be inferred or exposed, and how physical hardware could be tampered with to bypass intended protections.",
      "For each vulnerability, a corresponding mitigation was proposed and documented: enabling password protection with lock bits to prevent unauthorized rewrites, reinforcing the physical hardware against tampering, and obfuscating card numbers to make them harder to harvest or predict. The findings were compiled into a formal report intended to inform potential security improvements to the system."
    ],
  },
]

export const honors = [
  { title: "IEEE TU Chapter — President", when: "May 2024 – Present", text: "Led the university chapter, working with the Department Chair to help improve the college." },
  { title: "Student Government Association Senator", when: "Sept 2024 – Jan 2025", text: "College of Engineering and Computer Science Senator." },
  { title: "Eta Kappa Nu (HKN)", when: "Apr 2024 – Present", text: "Honor society member." },
  { title: "President's Honor Roll, University of Tulsa", when: "Jan 2024 – Present", text: "Given to full-time students maintaining a 4.0 term GPA." },
  { title: "Alan Paller Cyber Scholarship", when: "Jan 2024 – Present", text: "Prestigious scholarship for excellence in cyber studies and a commitment to serve with the federal government or OPM-approved organizations." },
  { title: "University of Tulsa Presidential Scholarship", when: "Aug 2023 – Present", text: "Full-tuition scholarship for high-achieving students." },
  { title: "AP Scholar with Distinction", when: "Jul 2023", text: "Average score of 3.5+ across all AP exams, with 3+ on five or more exams." },
  { title: "Oklahoma Academic Scholar", when: "May 2023", text: "Awarded for a 3.7+ GPA or top-10% class rank with qualifying ACT/SAT scores." },
  { title: "Tulsa Engineering Scholarship", when: "May 2023 – Present", text: "Scholarship for high-achieving engineering majors." },
  { title: "FTC State Championship Control Award, sponsored by ARM Inc.", when: "Feb 2023", text: "Awarded to teams demonstrating innovative sensor use and autonomous robot control." },
  { title: "Salutatorian, Union High School", when: "May 2023", text: "Top 2% of a graduating class of 1,075 students." },
]


