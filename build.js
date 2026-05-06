#!/usr/bin/env node
/**
 * Everything Platform — Solution File Generator
 * Generates all HTML demos and markdown docs for all 30 solutions
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname);

// ─── Solution Catalog ──────────────────────────────────────────────────────────
const SOLUTIONS = [
  // EDUCATION
  {
    id: 'education/library-management', skip: true, // already built
    name: 'Library Management System', emoji: '📚', short: 'LibraryMS',
    tagline: 'Digitize your library — track books, manage borrowings, eliminate manual registers.',
    color: '#2563eb', color2: '#0891b2',
    category: 'Education',
    target: 'Colleges, Schools, Public Libraries',
    problem: 'Manual registers cause lost book records, zero real-time availability, and missed overdue follow-ups.',
    stats: [
      { label: 'Total Books', value: '2,847', icon: '📚' },
      { label: 'Available', value: '2,341', icon: '✅' },
      { label: 'Borrowed', value: '506', icon: '📤' },
      { label: 'Overdue', value: '23', icon: '⚠️' },
    ],
    sections: ['Dashboard','Books','Members','Borrowings','Returns','Reports'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [312,287,341,298,356,412] },
    useCase: "Library Ops",
    difficulty: "intermediate",
    tableColumns: ["ISBN","Book Title","Author","Borrower","Due Date","Status"],
    mockRows: [["978-0-13-110362-7","The Pragmatic Programmer","David Thomas","Rahul Mehta","15 May 2026","Borrowed"],["978-0-20-168020-0","Clean Code","Robert C. Martin","Priya Sharma","18 May 2026","Borrowed"],["978-0-59-651798-1","JavaScript: The Good Parts","Douglas Crockford","Arjun Nair","02 May 2026","Overdue"],["978-0-13-235088-4","Design Patterns","Gang of Four","Meera Patel","01 May 2026","Overdue"],["978-1-49-190395-1","Learning Python","Mark Lutz","—","—","Available"],["978-0-13-468599-1","The Mythical Man-Month","Frederick Brooks","—","—","Available"],["978-0-13-275143-5","SICP","Abelson & Sussman","Kavya Reddy","20 May 2026","Borrowed"],["978-0-32-178001-1","Art of Computer Programming","Donald Knuth","—","—","Available"]],
    features: [{"icon":"📚","title":"Catalog Management","desc":"Digitize your entire collection with ISBN scanning, cover images, and rich metadata."},{"icon":"🔄","title":"Borrow & Return","desc":"Issue and receive books with automated due date calculation and renewal workflows."},{"icon":"👤","title":"Member Portal","desc":"Self-service portal to search availability, reserve titles, and view history."},{"icon":"⚠️","title":"Overdue Alerts","desc":"Automated email and SMS reminders sent 3 days, 1 day, and on overdue date."},{"icon":"💳","title":"Fine Collection","desc":"Automated fine calculation with Razorpay integration for online penalty payment."},{"icon":"📊","title":"Reports","desc":"Circulation reports, popular titles, department-wise usage, and collection health."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Fine collection and membership fee payments online"},{"icon":"📧","name":"SendGrid","purpose":"Overdue reminders and reservation confirmation emails"},{"icon":"☁️","name":"AWS S3","purpose":"E-book and digital resource file storage"},{"icon":"📱","name":"Twilio","purpose":"SMS alerts for due dates and availability"}]
  },

  {
    id: 'education/student-information-system',
    name: 'Student Information System', emoji: '🏫', short: 'StudentIS',
    tagline: 'Admissions, grades, attendance, timetable, and parent communication in one platform.',
    color: '#0891b2', color2: '#2563eb',
    category: 'Education',
    target: 'Schools, Colleges, Universities',
    problem: 'Student records are scattered across registers, spreadsheets, and noticeboards — parents have no visibility.',
    stats: [
      { label: 'Total Students', value: '1,240', icon: '🎓' },
      { label: 'Present Today', value: '1,089', icon: '✅' },
      { label: 'Avg Grade', value: 'B+', icon: '📊' },
      { label: 'Pending Fees', value: '₹2.4L', icon: '💰' },
    ],
    sections: ['Dashboard','Students','Attendance','Grades','Timetable','Reports'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [88,91,87,93,89,95] },
    useCase: "Academic Admin",
    difficulty: "intermediate",
    tableColumns: ["Roll No","Student Name","Class","Attendance %","Fee Status","Status"],
    mockRows: [["2024-001","Aarav Sharma","X-A","94%","Paid","Active"],["2024-002","Diya Mehta","X-A","87%","Paid","Active"],["2024-003","Rohan Nair","X-B","72%","Pending","Active"],["2024-004","Ananya Gupta","IX-A","98%","Paid","Active"],["2024-005","Karan Patel","IX-B","65%","Overdue","Active"],["2024-006","Ishaan Verma","VIII-A","91%","Paid","Active"],["2024-007","Siya Reddy","VIII-B","83%","Paid","Active"],["2024-008","Arjun Singh","VII-A","76%","Pending","Active"]],
    features: [{"icon":"🎓","title":"Student Profiles","desc":"Complete student records with photos, contact info, documents, and academic history."},{"icon":"📋","title":"Attendance Tracker","desc":"Daily biometric or manual attendance with parent SMS alerts on absence."},{"icon":"📝","title":"Grade Management","desc":"Mark entry, grade cards, rank lists, and progress reports per term."},{"icon":"📅","title":"Timetable Builder","desc":"Drag-and-drop class scheduling with teacher conflict detection."},{"icon":"👨‍👩‍👧","title":"Parent Portal","desc":"Real-time grades, attendance, and fee status visible to parents via mobile."},{"icon":"📊","title":"Reports","desc":"Board submission formats, custom analytics, and school-wide dashboards."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Online fee collection with automated receipts"},{"icon":"📧","name":"SendGrid","purpose":"Report cards, notices and parent communications"},{"icon":"📱","name":"Twilio","purpose":"Attendance SMS and emergency parent alerts"},{"icon":"☁️","name":"AWS S3","purpose":"Student documents, certificates and media storage"}]
  },
  {
    id: 'education/online-exam-portal',
    name: 'Online Exam Portal', emoji: '📝', short: 'ExamPortal',
    tagline: 'MCQ and subjective exams, auto-grading, timer, result publishing, and certificates.',
    color: '#7c3aed', color2: '#2563eb',
    category: 'Education',
    target: 'Schools, Colleges, Training Institutes, Certification Bodies',
    problem: 'Paper exams are costly, time-consuming to grade, and prone to leaks and malpractice.',
    stats: [
      { label: 'Active Exams', value: '3', icon: '📝' },
      { label: 'Total Candidates', value: '456', icon: '👥' },
      { label: 'Avg Score', value: '72%', icon: '📊' },
      { label: 'Pass Rate', value: '84%', icon: '✅' },
    ],
    sections: ['Dashboard','Exams','Question Bank','Results','Certificates'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [72,68,75,79,72,84] },
    useCase: "Exam Delivery",
    difficulty: "intermediate",
    tableColumns: ["Exam ID","Exam Name","Subject","Candidates","Avg Score","Status"],
    mockRows: [["EX-001","Mid-Term Mathematics","Mathematics","124","74%","Completed"],["EX-002","Physics Unit Test 3","Physics","98","68%","Completed"],["EX-003","English Grammar Assessment","English","156","81%","Active"],["EX-004","Chemistry Final Exam","Chemistry","112","—","Scheduled"],["EX-005","History Board Mock","History","89","72%","Completed"],["EX-006","Computer Science Practical","CS","67","88%","Active"],["EX-007","Biology Revision Test","Biology","134","65%","Scheduled"],["EX-008","Economics Paper 1","Economics","78","—","Scheduled"]],
    features: [{"icon":"📋","title":"Question Bank","desc":"Tagged MCQ and subjective questions with difficulty levels and chapter mapping."},{"icon":"⏱️","title":"Exam Scheduler","desc":"Schedule exams with auto-login links, time windows, and seat allocation."},{"icon":"🤖","title":"Auto-Grading","desc":"Instant MCQ grading with partial marks support for subjective answers."},{"icon":"📢","title":"Result Publisher","desc":"One-click result release with rank list, toppers, and analytics."},{"icon":"🏆","title":"Certificates","desc":"Auto-generated PDF certificates with QR verification for passed candidates."},{"icon":"🔒","title":"Anti-Cheat","desc":"Tab-switch detection, full-screen lock, and webcam proctoring integration."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & real-time locks"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"Result emails, admit cards, and certificate delivery"},{"icon":"☁️","name":"AWS S3","purpose":"Question PDFs, answer sheets, and certificate storage"},{"icon":"💳","name":"Razorpay","purpose":"Exam registration and certification fees"},{"icon":"📱","name":"Twilio","purpose":"OTP verification for secure exam login"}]
  },
  {
    id: 'education/learning-management-system',
    name: 'Learning Management System', emoji: '🖥️', short: 'LearnMS',
    tagline: 'Course builder, video lessons, quizzes, progress tracking, and instructor dashboards.',
    color: '#16a34a', color2: '#2563eb',
    category: 'Education',
    target: 'EdTech Companies, Corporates, Training Institutes, Universities',
    problem: 'Learning content is spread across YouTube, WhatsApp, and email — with no progress tracking or accountability.',
    stats: [
      { label: 'Active Courses', value: '48', icon: '🖥️' },
      { label: 'Enrolled Learners', value: '3,842', icon: '👥' },
      { label: 'Avg Completion', value: '67%', icon: '📊' },
      { label: 'Certificates Issued', value: '1,247', icon: '🏆' },
    ],
    sections: ['Dashboard','Courses','My Learning','Assignments','Discussions','Reports'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [2800,3100,3400,3600,3700,3842] },
    useCase: "eLearning",
    difficulty: "advanced",
    tableColumns: ["Course ID","Course Name","Instructor","Enrolled","Completion %","Status"],
    mockRows: [["CRS-001","Full Stack Web Development","Rahul Mehta","842","67%","Active"],["CRS-002","Data Science with Python","Dr. Priya Sharma","1240","54%","Active"],["CRS-003","Digital Marketing Masterclass","Ankit Verma","634","78%","Active"],["CRS-004","Financial Accounting Basics","CA Meera Joshi","421","89%","Active"],["CRS-005","UI/UX Design Fundamentals","Kavya Reddy","387","45%","Active"],["CRS-006","Machine Learning A-Z","Dr. Arjun Nair","918","61%","Active"],["CRS-007","English Communication Skills","Sana Khan","523","82%","Active"],["CRS-008","Cloud Computing with AWS","Vikram Singh","298","—","Draft"]],
    features: [{"icon":"🏗️","title":"Course Builder","desc":"Drag-and-drop lesson builder with video, PDF, quiz, and assignment blocks."},{"icon":"🎥","title":"Video Lessons","desc":"Adaptive video player with notes, speed control, and chapter bookmarks."},{"icon":"❓","title":"Quizzes","desc":"Auto-graded quizzes with hints, explanations, and retry limits."},{"icon":"📈","title":"Progress Tracking","desc":"Per-learner progress dashboard with completion certificates on 100%."},{"icon":"💬","title":"Discussion Forum","desc":"Course Q&A threads, announcements, and peer review workflows."},{"icon":"🏆","title":"Certificates","desc":"Branded PDF certificates with QR verification issued on course completion."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"☁️","name":"AWS CloudFront","purpose":"Video CDN for low-latency streaming"}],
    integrations: [{"icon":"☁️","name":"AWS S3","purpose":"Video, PDF, and course asset storage at scale"},{"icon":"💳","name":"Razorpay","purpose":"Course fees, subscriptions, and EMI payments"},{"icon":"📧","name":"SendGrid","purpose":"Enrollment confirmations, reminders, and certificates"},{"icon":"📹","name":"Zoom","purpose":"Live class sessions embedded directly in course player"}]
  },

  // AUTOMOTIVE
  {
    id: 'automotive/car-dealer-service',
    name: 'Car Dealer Service Management', emoji: '🚗', short: 'DealerPro',
    tagline: 'End-to-end dealer workflow: lead capture → test drive → sale → delivery → after-service.',
    color: '#dc2626', color2: '#d97706',
    category: 'Automotive',
    target: 'Authorized Car Dealerships, Multi-brand Showrooms',
    problem: 'Dealers use spreadsheets for leads, paper job cards for service — leading to lost prospects and poor customer experience.',
    stats: [
      { label: 'Total Leads', value: '148', icon: '👥' },
      { label: 'Test Drives (Week)', value: '12', icon: '🚗' },
      { label: 'Cars Sold (Month)', value: '34', icon: '✅' },
      { label: 'Service Queue', value: '7', icon: '🔧' },
    ],
    sections: ['Dashboard','Leads','Inventory','Test Drives','Sales','Service'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [22,28,31,25,34,29] },
    useCase: "Dealer Ops",
    difficulty: "intermediate",
    tableColumns: ["Lead ID","Customer","Vehicle Model","Salesperson","Test Drive","Status"],
    mockRows: [["LD-001","Arjun Kapoor","Maruti Swift VXi","Vikram Singh","05 May 2026","New Lead"],["LD-002","Sunita Reddy","Hyundai Creta SX","Ravi Patel","04 May 2026","Test Drive Done"],["LD-003","Mohan Sharma","Tata Nexon EV","Anita Kumar","06 May 2026","Scheduled"],["LD-004","Priya Nair","Honda City ZX","Deepak Rao","—","Negotiation"],["LD-005","Rajesh Iyer","Kia Seltos HTX","Vikram Singh","03 May 2026","Booked"],["LD-006","Kavya Menon","Mahindra XUV700","Ravi Patel","—","New Lead"],["LD-007","Amit Joshi","Toyota Fortuner","Anita Kumar","07 May 2026","Scheduled"],["LD-008","Neha Gupta","Maruti Baleno","Deepak Rao","02 May 2026","Delivered"]],
    features: [{"icon":"📞","title":"Lead Capture","desc":"Web forms, walk-in registration, and third-party lead imports in one pipeline."},{"icon":"🚗","title":"Test Drive Scheduling","desc":"Calendar-based test drive booking with automated confirmation SMS."},{"icon":"📦","title":"Inventory Management","desc":"Live vehicle stock with variant, colour, and accessory tracking."},{"icon":"📊","title":"Sales Pipeline","desc":"Kanban-style deal progression from inquiry to delivery with conversion metrics."},{"icon":"🔧","title":"After-Sales CRM","desc":"Service reminders, warranty tracking, and customer satisfaction follow-ups."},{"icon":"📈","title":"Analytics","desc":"Salesperson leaderboard, model-wise sales, and target-vs-actual dashboards."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Booking deposit and accessory payment collection"},{"icon":"📧","name":"SendGrid","purpose":"Quotation emails and delivery note dispatch"},{"icon":"📱","name":"Twilio","purpose":"Test drive reminders and post-sale follow-up SMS"},{"icon":"☁️","name":"AWS S3","purpose":"RC, insurance, and agreement document storage"}]
  },
  {
    id: 'automotive/fleet-management',
    name: 'Fleet Management System', emoji: '🚛', short: 'FleetMS',
    tagline: 'Track your entire fleet — vehicles, drivers, trips, fuel, and maintenance in one place.',
    color: '#d97706', color2: '#dc2626',
    category: 'Automotive',
    target: 'Logistics Companies, Transport Operators, Corporate Fleets',
    problem: 'Fleet managers lack real-time visibility on vehicle status, driver compliance, and maintenance schedules.',
    stats: [
      { label: 'Fleet Size', value: '47', icon: '🚛' },
      { label: 'On Trip', value: '12', icon: '🟢' },
      { label: 'In Maintenance', value: '3', icon: '🔧' },
      { label: 'Idle', value: '32', icon: '⏸️' },
    ],
    sections: ['Dashboard','Vehicles','Drivers','Trips','Maintenance','Fuel Logs'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [18,22,19,25,21,14] },
    useCase: "Fleet Ops",
    difficulty: "intermediate",
    tableColumns: ["Vehicle No","Driver Name","Route","Trip Status","Fuel (L)","Last Service"],
    mockRows: [["MH-12-AB-1234","Ramesh Kumar","Mumbai → Pune","On Trip","45","12 Apr 2026"],["DL-01-CD-5678","Suresh Yadav","Delhi → Agra","Idle","—","28 Apr 2026"],["KA-03-EF-9012","Mohan Singh","Bengaluru Loop","On Trip","32","01 May 2026"],["TN-07-GH-3456","Rajan Pillai","Chennai → Madurai","Completed","61","15 Apr 2026"],["GJ-05-IJ-7890","Dinesh Patel","Ahmedabad Local","In Maintenance","—","03 May 2026"],["MH-14-KL-2345","Vikas Thakur","Pune → Nashik","On Trip","28","20 Apr 2026"],["UP-32-MN-6789","Rajesh Mishra","Lucknow Loop","Idle","—","10 May 2026"],["RJ-14-OP-0123","Bharat Sharma","Jaipur → Jodhpur","Completed","54","05 May 2026"]],
    features: [{"icon":"📍","title":"Real-time Tracking","desc":"GPS-based live vehicle location with route replay and geofence alerts."},{"icon":"👤","title":"Driver Management","desc":"Driver profiles, licence expiry alerts, behaviour scoring, and trip logs."},{"icon":"🔧","title":"Maintenance Scheduler","desc":"PMS-based service reminders with vendor integration and cost tracking."},{"icon":"⛽","title":"Fuel Logs","desc":"Fuel fill records, mileage calculation, and theft detection via consumption anomaly."},{"icon":"📊","title":"Trip Reports","desc":"Trip summary, distance, halt time, idle time, and client billing exports."},{"icon":"📋","title":"Compliance","desc":"RC, insurance, fitness, and permit expiry tracker with advance reminders."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Real-time data buffer"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"📡","name":"MQTT","purpose":"Low-latency IoT/GPS device protocol"}],
    integrations: [{"icon":"📱","name":"Twilio","purpose":"Driver alerts, breakdown notifications, and SOS messaging"},{"icon":"📧","name":"SendGrid","purpose":"Daily fleet reports and compliance expiry notices"},{"icon":"☁️","name":"AWS S3","purpose":"Trip logs, compliance documents, and dashcam footage"},{"icon":"💳","name":"Razorpay","purpose":"Fuel card integration and vendor payment processing"}]
  },
  {
    id: 'automotive/auto-repair-workshop',
    name: 'Auto Repair Workshop', emoji: '🔧', short: 'WorkshopPro',
    tagline: 'Manage job cards, spare parts, billing, and mechanics — all from one dashboard.',
    color: '#4b5563', color2: '#d97706',
    category: 'Automotive',
    target: 'Independent Workshops, Multi-brand Service Centers',
    problem: 'Workshops manage job cards on paper, losing track of parts, billing errors, and customer follow-up.',
    stats: [
      { label: 'Open Jobs', value: '23', icon: '🔧' },
      { label: 'Completed Today', value: '8', icon: '✅' },
      { label: 'Parts Value', value: '₹4.2L', icon: '📦' },
      { label: 'Revenue Today', value: '₹28,500', icon: '💰' },
    ],
    sections: ['Dashboard','Job Cards','Parts','Mechanics','Billing'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [6,8,7,9,8,6] },
    useCase: "Workshop Ops",
    difficulty: "starter",
    tableColumns: ["Job ID","Customer","Vehicle","Mechanic","Service Type","Status"],
    mockRows: [["JOB-001","Suresh Patel","MH-01-CD-5678 (Swift)","Ravi Verma","Full Engine Service","In Progress"],["JOB-002","Anjali Mehta","KA-03-AB-1122 (Creta)","Sanjay Rao","Brake Pad Replacement","Completed"],["JOB-003","Rakesh Nair","DL-04-XY-9900 (Nexon)","Ravi Verma","Electrical Fault Diagnosis","Pending"],["JOB-004","Sunita Sharma","MH-12-PQ-4455 (City)","Arun Kumar","AC Gas Refill","Completed"],["JOB-005","Mohan Iyer","TN-07-RS-2233 (Verna)","Sanjay Rao","Tyre Rotation","In Progress"],["JOB-006","Priya Joshi","GJ-01-TU-6677 (Baleno)","Arun Kumar","Denting & Painting","Pending"],["JOB-007","Vikram Singh","UP-32-VW-8899 (XUV)","Ravi Verma","Oil & Filter Change","Completed"],["JOB-008","Deepa Reddy","RJ-14-AB-0011 (Fortuner)","Sanjay Rao","Suspension Check","In Progress"]],
    features: [{"icon":"📋","title":"Job Card Manager","desc":"Digital job cards with customer sign-off, photo evidence, and service history."},{"icon":"📦","title":"Parts Inventory","desc":"Spare parts stock with auto-reorder triggers and supplier PO generation."},{"icon":"👨‍🔧","title":"Mechanic Assignment","desc":"Skill-based job assignment with bay availability and workload balancing."},{"icon":"🧾","title":"Billing","desc":"GST-compliant invoices with parts + labour breakup and Razorpay payment link."},{"icon":"📱","title":"Customer History","desc":"Full vehicle service history visible to service advisors and customers."},{"icon":"⭐","title":"Feedback","desc":"Post-service rating collection via SMS link with escalation for low scores."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Billing payment links and advance collection"},{"icon":"📱","name":"Twilio","purpose":"Job status SMS and vehicle ready notifications"},{"icon":"📧","name":"SendGrid","purpose":"Invoice delivery and service reminder emails"},{"icon":"☁️","name":"AWS S3","purpose":"Job card photos, invoices, and RC document storage"}]
  },
  {
    id: 'automotive/vehicle-rental',
    name: 'Vehicle Rental System', emoji: '🔑', short: 'RentWheels',
    tagline: 'Bookings, contracts, damage tracking, and invoicing for rental businesses.',
    color: '#0891b2', color2: '#7c3aed',
    category: 'Automotive',
    target: 'Car Rental Companies, Bike Rental Startups',
    problem: 'Manual booking registers lead to double bookings, missed returns, and revenue leakage.',
    stats: [
      { label: 'Available', value: '18', icon: '🟢' },
      { label: 'Active Rentals', value: '9', icon: '🔑' },
      { label: 'Revenue (Month)', value: '₹1.82L', icon: '💰' },
      { label: 'Overdue Returns', value: '2', icon: '⚠️' },
    ],
    sections: ['Dashboard','Fleet','Bookings','Customers','Returns','Finance'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [42,38,47,51,48,56] },
    useCase: "Rental Ops",
    difficulty: "starter",
    tableColumns: ["Booking ID","Customer","Vehicle","From Date","To Date","Status"],
    mockRows: [["RNT-001","Priya Nair","Swift Dzire (KA-01-AB-1234)","01 May 2026","05 May 2026","Active"],["RNT-002","Arjun Mehta","Honda City (MH-02-CD-5678)","03 May 2026","07 May 2026","Active"],["RNT-003","Sunita Sharma","Innova Crysta (DL-03-EF-9012)","06 May 2026","10 May 2026","Confirmed"],["RNT-004","Rakesh Patel","Maruti Swift (GJ-04-GH-3456)","10 Apr 2026","12 Apr 2026","Completed"],["RNT-005","Meera Iyer","Hyundai Creta (TN-05-IJ-7890)","08 May 2026","11 May 2026","Confirmed"],["RNT-006","Vikas Rao","Mahindra Scorpio (RJ-06-KL-0123)","02 May 2026","03 May 2026","Overdue"],["RNT-007","Kavya Joshi","Tata Nexon (KA-07-MN-4567)","12 May 2026","15 May 2026","Confirmed"],["RNT-008","Deepak Singh","Toyota Fortuner (UP-08-OP-8901)","01 May 2026","04 May 2026","Completed"]],
    features: [{"icon":"📅","title":"Booking Calendar","desc":"Availability calendar with conflict prevention and multi-vehicle booking."},{"icon":"🚗","title":"Fleet Availability","desc":"Real-time fleet status with maintenance blackout periods and utilisation rates."},{"icon":"📄","title":"Contract Generator","desc":"Auto-generated rental agreements with customer signature and ID upload."},{"icon":"🔍","title":"Damage Tracking","desc":"Pre/post-rental photo inspection linked to security deposit deductions."},{"icon":"🧾","title":"Invoicing","desc":"GST invoices with per-day rates, extras, and fuel adjustment calculation."},{"icon":"👤","title":"Customer Portal","desc":"Customers view bookings, upload documents, and make payments online."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Rental payments, security deposit hold and refund"},{"icon":"📧","name":"SendGrid","purpose":"Booking confirmation and invoice delivery"},{"icon":"📱","name":"Twilio","purpose":"Pickup reminder and overdue return alerts"},{"icon":"☁️","name":"AWS S3","purpose":"Rental contracts, ID proofs, and inspection photos"}]
  },

  // HEALTHCARE
  {
    id: 'healthcare/hospital-management',
    name: 'Hospital Management System', emoji: '🏥', short: 'HospitalMS',
    tagline: 'OPD, IPD, billing, pharmacy, and lab — fully integrated hospital operations.',
    color: '#dc2626', color2: '#7c3aed',
    category: 'Healthcare',
    target: 'Multi-specialty Hospitals, Nursing Homes',
    problem: 'Hospitals run disconnected systems for OPD, billing, pharmacy, and lab — causing errors and delays.',
    stats: [
      { label: 'OPD Today', value: '87', icon: '👨‍⚕️' },
      { label: 'IPD Beds Occupied', value: '34/50', icon: '🛏️' },
      { label: 'Lab Pending', value: '12', icon: '🧪' },
      { label: 'Revenue Today', value: '₹1.24L', icon: '💰' },
    ],
    sections: ['Dashboard','OPD','IPD','Pharmacy','Lab','Billing'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [72,85,91,78,87,63] },
    useCase: "Hospital Ops",
    difficulty: "advanced",
    tableColumns: ["Patient ID","Patient Name","Ward","Doctor","Admission Date","Status"],
    mockRows: [["PAT-001","Kavya Reddy","General - Bed 4","Dr. Arjun Nair","28 Apr 2026","Admitted"],["PAT-002","Suresh Iyer","Cardiac ICU - Bed 2","Dr. Priya Sharma","01 May 2026","Critical"],["PAT-003","Meera Patel","Maternity - Bed 7","Dr. Sunita Rao","03 May 2026","Admitted"],["PAT-004","Rajesh Kumar","Orthopaedic - Bed 3","Dr. Vikram Singh","04 May 2026","Admitted"],["PAT-005","Ananya Mehta","Paediatric - Bed 1","Dr. Deepa Joshi","02 May 2026","Admitted"],["PAT-006","Mohan Sharma","General - Bed 9","Dr. Arjun Nair","05 May 2026","Admitted"],["PAT-007","Priya Nair","Surgical - Bed 5","Dr. Priya Sharma","30 Apr 2026","Discharged"],["PAT-008","Arjun Gupta","Neurology - Bed 6","Dr. Sunita Rao","05 May 2026","Admitted"]],
    features: [{"icon":"🏥","title":"OPD Management","desc":"Doctor scheduling, token queue, prescription printing, and patient history."},{"icon":"🛏️","title":"IPD & Wards","desc":"Bed allocation, ward rounds, nursing notes, and diet chart management."},{"icon":"💊","title":"Pharmacy Integration","desc":"Direct prescription-to-pharmacy workflow with stock deduction and billing."},{"icon":"🧪","title":"Lab Orders","desc":"Doctor-initiated lab orders, sample tracking, and result delivery to ward."},{"icon":"🧾","title":"Billing","desc":"Itemised bills with insurance TPA claims, GST, and Razorpay payment."},{"icon":"📅","title":"Doctor Scheduling","desc":"Doctor availability calendar, appointment limits, and shift management."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🏥","name":"HL7 FHIR","purpose":"Healthcare interoperability standard"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Patient billing, insurance co-pay, and advance payments"},{"icon":"📱","name":"Twilio","purpose":"Appointment reminders and discharge notifications"},{"icon":"☁️","name":"AWS S3","purpose":"Medical records, imaging reports, and prescription PDFs"},{"icon":"📧","name":"SendGrid","purpose":"Discharge summaries and follow-up appointment emails"}]
  },
  {
    id: 'healthcare/clinic-appointment',
    name: 'Clinic Appointment System', emoji: '📅', short: 'ClinicPro',
    tagline: 'Online booking, doctor scheduling, patient records, and billing for clinics.',
    color: '#16a34a', color2: '#0891b2',
    category: 'Healthcare',
    target: 'Clinics, Polyclinics, Specialist Practices',
    problem: 'Clinics rely on phone booking and paper registers — causing missed appointments and no patient history.',
    stats: [
      { label: "Today's Appointments", value: '32', icon: '📅' },
      { label: 'Waiting', value: '8', icon: '⏳' },
      { label: 'Completed', value: '19', icon: '✅' },
      { label: 'Revenue', value: '₹18,400', icon: '💰' },
    ],
    sections: ['Dashboard','Appointments','Patients','Doctors','Billing'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [28,34,31,38,32,22] },
    useCase: "Clinic Booking",
    difficulty: "starter",
    tableColumns: ["Appt ID","Patient Name","Doctor","Date","Time Slot","Status"],
    mockRows: [["APT-001","Meera Sharma","Dr. Sunil Joshi","05 May 2026","10:30 AM","Confirmed"],["APT-002","Rohan Patel","Dr. Anita Rao","05 May 2026","11:00 AM","In Progress"],["APT-003","Sunita Reddy","Dr. Sunil Joshi","05 May 2026","11:30 AM","Pending"],["APT-004","Arjun Mehta","Dr. Kavya Nair","06 May 2026","09:00 AM","Confirmed"],["APT-005","Priya Kumar","Dr. Anita Rao","06 May 2026","10:00 AM","Confirmed"],["APT-006","Deepak Iyer","Dr. Sunil Joshi","04 May 2026","03:00 PM","Completed"],["APT-007","Kavya Singh","Dr. Kavya Nair","07 May 2026","09:30 AM","Confirmed"],["APT-008","Rajan Sharma","Dr. Anita Rao","03 May 2026","04:30 PM","Completed"]],
    features: [{"icon":"📅","title":"Online Booking","desc":"Patient self-booking via web with real-time slot availability and instant confirmation."},{"icon":"📆","title":"Doctor Calendar","desc":"Doctor-wise availability with leave blocking and emergency slot management."},{"icon":"📋","title":"Patient Records","desc":"Medical history, past prescriptions, allergies, and vitals in one view."},{"icon":"📱","title":"SMS Reminders","desc":"Automated appointment reminders 24 hours and 2 hours before visit."},{"icon":"🧾","title":"Billing","desc":"Consultation fee collection with GST invoice and insurance details capture."},{"icon":"🔁","title":"Follow-up Tracker","desc":"Doctor-initiated follow-up scheduling with patient notification workflow."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📱","name":"Twilio","purpose":"Appointment reminders and cancellation alerts via SMS"},{"icon":"💳","name":"Razorpay","purpose":"Consultation fee and advance payment collection"},{"icon":"📧","name":"SendGrid","purpose":"Prescription PDFs and follow-up reminders by email"},{"icon":"☁️","name":"AWS S3","purpose":"Patient records, lab reports, and prescription storage"}]
  },
  {
    id: 'healthcare/pharmacy-management',
    name: 'Pharmacy Management System', emoji: '💊', short: 'PharmaMS',
    tagline: 'Drug inventory, expiry tracking, prescription management, and GST billing.',
    color: '#7c3aed', color2: '#16a34a',
    category: 'Healthcare',
    target: 'Standalone Pharmacies, Hospital Pharmacies, Medical Stores',
    problem: 'Pharmacies lose revenue to expired stock, stock-outs, and billing errors without proper tracking.',
    stats: [
      { label: 'Total Medicines', value: '1,247', icon: '💊' },
      { label: 'Low Stock', value: '34', icon: '⚠️' },
      { label: 'Expiring (30d)', value: '18', icon: '📅' },
      { label: "Today's Sales", value: '₹28,450', icon: '💰' },
    ],
    sections: ['Dashboard','Medicines','Sales Counter','Prescriptions','Expiry Tracker'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [22400,28100,25600,31200,28450,19800] },
    useCase: "Pharmacy Ops",
    difficulty: "intermediate",
    tableColumns: ["Drug Code","Medicine Name","Category","Stock Units","Expiry Date","Status"],
    mockRows: [["MED-001","Paracetamol 500mg","Analgesic","2,400","Dec 2026","Active"],["MED-002","Amoxicillin 250mg Caps","Antibiotic","840","Jun 2026","Active"],["MED-003","Metformin 500mg","Anti-diabetic","1,200","Mar 2027","Active"],["MED-004","Atorvastatin 10mg","Statin","380","Sep 2026","Low Stock"],["MED-005","Omeprazole 20mg","Antacid","96","Apr 2026","Expiring"],["MED-006","Azithromycin 500mg","Antibiotic","24","Feb 2026","Expiring"],["MED-007","Cetirizine 10mg","Antihistamine","1,800","Jan 2027","Active"],["MED-008","Pantoprazole 40mg","Antacid","0","Nov 2026","Out of Stock"]],
    features: [{"icon":"💊","title":"Drug Inventory","desc":"Real-time stock levels with batch tracking, location mapping, and reorder alerts."},{"icon":"📅","title":"Expiry Tracker","desc":"30/60/90-day expiry dashboard with FEFO dispensing enforcement."},{"icon":"📋","title":"Prescription Manager","desc":"Doctor prescription scanning, drug interaction check, and dispensing workflow."},{"icon":"🧾","title":"GST Billing","desc":"POS counter billing with HSN codes, GST slabs, and insurance claim support."},{"icon":"⚠️","title":"Reorder Alerts","desc":"Configurable minimum stock triggers with auto-generated supplier purchase orders."},{"icon":"🏭","title":"Supplier Portal","desc":"Purchase order management, GRN entry, and payment tracking for vendors."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Counter billing and insurance co-pay collection"},{"icon":"📧","name":"SendGrid","purpose":"Low stock alerts and purchase order emails to suppliers"},{"icon":"☁️","name":"AWS S3","purpose":"Prescription scans, invoices, and batch document storage"},{"icon":"📊","name":"Tally","purpose":"Accounting sync for purchases, sales, and GST returns"}]
  },
  {
    id: 'healthcare/lab-reports-portal',
    name: 'Lab Reports Portal', emoji: '🧪', short: 'LabPortal',
    tagline: 'Sample tracking, test management, digital report delivery, and billing for labs.',
    color: '#0891b2', color2: '#dc2626',
    category: 'Healthcare',
    target: 'Diagnostic Labs, Pathology Centers, Hospital Labs',
    problem: 'Labs lose patient trust with delayed reports and manual data entry errors.',
    stats: [
      { label: 'Samples Today', value: '47', icon: '🧪' },
      { label: 'Pending Tests', value: '23', icon: '⏳' },
      { label: 'Reports Ready', value: '19', icon: '✅' },
      { label: 'Revenue', value: '₹32,100', icon: '💰' },
    ],
    sections: ['Dashboard','Samples','Test Catalog','Reports','Billing'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [38,47,42,53,47,31] },
    useCase: "Lab Operations",
    difficulty: "intermediate",
    tableColumns: ["Sample ID","Patient Name","Test Name","Collected","Ready By","Status"],
    mockRows: [["LAB-001","Rohit Sharma","CBC - Complete Blood Count","05 May 2026","05 May 2026 4PM","Processing"],["LAB-002","Meera Patel","Lipid Profile","05 May 2026","06 May 2026 9AM","Processing"],["LAB-003","Arjun Nair","HbA1c - Glycated Haemoglobin","04 May 2026","05 May 2026","Completed"],["LAB-004","Sunita Rao","Thyroid Profile (T3,T4,TSH)","04 May 2026","05 May 2026","Completed"],["LAB-005","Deepak Iyer","Urine Routine & Microscopy","05 May 2026","05 May 2026 6PM","Processing"],["LAB-006","Kavya Mehta","Dengue NS1 Antigen","05 May 2026","05 May 2026 2PM","Completed"],["LAB-007","Priya Singh","Liver Function Test (LFT)","05 May 2026","06 May 2026 10AM","Processing"],["LAB-008","Rajan Kumar","Covid-19 RT-PCR","03 May 2026","04 May 2026","Completed"]],
    features: [{"icon":"🧪","title":"Sample Collection","desc":"Sample registration with barcode labelling, collection centre mapping, and SLA tracking."},{"icon":"🔬","title":"Test Assignment","desc":"Auto-routing to analyser or manual bench based on test type and urgency."},{"icon":"📝","title":"Result Entry","desc":"Structured result entry with reference range highlights and critical value flags."},{"icon":"📤","title":"Digital Report Delivery","desc":"PDF reports delivered via SMS and email with QR-based verification."},{"icon":"🧾","title":"Billing","desc":"Package and individual test billing with insurance claim generation."},{"icon":"✅","title":"Quality Control","desc":"Internal QC samples, delta check alerts, and repeat test workflows."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📱","name":"Twilio","purpose":"Report ready SMS with download link to patients"},{"icon":"📧","name":"SendGrid","purpose":"PDF report delivery and appointment follow-up emails"},{"icon":"💳","name":"Razorpay","purpose":"Lab fee collection and home sample collection payments"},{"icon":"☁️","name":"AWS S3","purpose":"Report PDFs and historical result archive storage"}]
  },

  // RETAIL
  {
    id: 'retail/inventory-pos',
    name: 'Inventory & POS System', emoji: '🛒', short: 'RetailPOS',
    tagline: 'Multi-store inventory management with point-of-sale billing and barcode support.',
    color: '#d97706', color2: '#16a34a',
    category: 'Retail',
    target: 'Retail Stores, Supermarkets, Electronics Shops, Pharmacies',
    problem: 'Retailers lose money to shrinkage, stock-outs, and billing errors without real-time inventory visibility.',
    stats: [
      { label: 'Total SKUs', value: '3,247', icon: '📦' },
      { label: 'Low Stock Items', value: '34', icon: '⚠️' },
      { label: "Today's Sales", value: '₹84,320', icon: '💰' },
      { label: 'Pending Orders', value: '12', icon: '📋' },
    ],
    sections: ['Dashboard','Inventory','POS Terminal','Purchases','Reports'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [62000,71000,68000,84000,79000,92000] },
    useCase: "Retail Ops",
    difficulty: "intermediate",
    tableColumns: ["SKU","Product Name","Category","Stock","MRP (₹)","Status"],
    mockRows: [["SKU-1001","Amul Gold Milk 1L","Dairy","240","68","Active"],["SKU-1002","Britannia Good Day Biscuits 200g","Bakery","180","40","Active"],["SKU-1003","Surf Excel Matic 2kg","Detergent","24","420","Low Stock"],["SKU-1004","Fortune Sunflower Oil 1L","Edible Oil","0","148","Out of Stock"],["SKU-1005","Colgate MaxFresh 150g","Oral Care","96","89","Active"],["SKU-1006","Maggi Noodles 12-pack","Instant Food","310","156","Active"],["SKU-1007","Dettol Handwash 500ml","Hygiene","18","120","Low Stock"],["SKU-1008","Haldirams Aloo Bhujia 1kg","Snacks","54","280","Active"]],
    features: [{"icon":"📦","title":"Multi-store Inventory","desc":"Centralised stock visibility across all branches with inter-store transfer."},{"icon":"🏪","title":"Barcode POS","desc":"Fast billing counter with barcode scan, GST auto-calculation, and UPI payment."},{"icon":"📋","title":"Purchase Orders","desc":"Supplier-wise PO generation, GRN entry, and payment tracking."},{"icon":"⚠️","title":"Low-Stock Alerts","desc":"Configurable reorder points with auto-PO suggestion for fast-moving SKUs."},{"icon":"📊","title":"Daily Reports","desc":"Category-wise sales, shrinkage analysis, and end-of-day reconciliation."},{"icon":"🏭","title":"Supplier Management","desc":"Vendor catalogue, price comparison, and credit term management."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"POS UPI, card, and wallet payment acceptance"},{"icon":"📧","name":"SendGrid","purpose":"Purchase orders and daily report emails to management"},{"icon":"📊","name":"Tally","purpose":"Accounting sync for purchases, sales, and GST returns"},{"icon":"☁️","name":"AWS S3","purpose":"Invoice PDFs and GRN document storage"}]
  },
  {
    id: 'retail/ecommerce-dashboard',
    name: 'E-Commerce Dashboard', emoji: '🏪', short: 'CommerceMgr',
    tagline: 'Manage orders, products, customers, returns, and analytics for your online store.',
    color: '#2563eb', color2: '#d97706',
    category: 'Retail',
    target: 'Online Sellers, D2C Brands, Marketplace Sellers',
    problem: 'Sellers juggling orders across multiple channels have no unified dashboard for operations and analytics.',
    stats: [
      { label: "Today's Orders", value: '234', icon: '📦' },
      { label: 'Revenue', value: '₹1.82L', icon: '💰' },
      { label: 'Pending Shipment', value: '67', icon: '🚚' },
      { label: 'Returns', value: '8', icon: '↩️' },
    ],
    sections: ['Dashboard','Orders','Products','Customers','Returns','Coupons'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [142000,168000,155000,182000,174000,198000] },
    useCase: "eCommerce Mgmt",
    difficulty: "intermediate",
    tableColumns: ["Order ID","Customer","Product","Amount (₹)","City","Status"],
    mockRows: [["ORD-5001","Ananya Gupta","Nike Air Max 270","8,499","Mumbai","Shipped"],["ORD-5002","Rahul Mehta","Apple AirPods Pro 2nd Gen","24,999","Delhi","Delivered"],["ORD-5003","Priya Sharma","Fossil Gen 6 Smartwatch","18,995","Bengaluru","Processing"],["ORD-5004","Arjun Patel","Dyson V12 Vacuum","45,900","Chennai","Confirmed"],["ORD-5005","Meera Nair","Levi's 511 Slim Jeans","3,499","Pune","Shipped"],["ORD-5006","Deepak Iyer","boAt Rockerz 550","1,799","Hyderabad","Delivered"],["ORD-5007","Sunita Rao","Philips Air Fryer 4.1L","7,995","Jaipur","Returned"],["ORD-5008","Vikram Singh","Sony 65\" 4K OLED TV","1,24,990","Ahmedabad","Processing"]],
    features: [{"icon":"📦","title":"Order Management","desc":"Multi-channel order ingestion, fulfilment workflow, and SLA-based prioritisation."},{"icon":"🏷️","title":"Product Catalog","desc":"Rich product listings with variants, images, SEO, and bulk import/export."},{"icon":"👤","title":"Customer Portal","desc":"Order tracking, return initiation, wishlist, and loyalty points view."},{"icon":"↩️","title":"Returns","desc":"Return/refund workflow with reason capture, QC, and automated refund trigger."},{"icon":"🎟️","title":"Coupon Engine","desc":"Code and cart-based discounts with usage limits and category restrictions."},{"icon":"📊","title":"Analytics","desc":"Revenue trends, top products, customer cohorts, and channel attribution."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🔍","name":"Elasticsearch","purpose":"Fast product and order search"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Checkout payments, UPI, EMI, and refund processing"},{"icon":"📧","name":"SendGrid","purpose":"Order confirmation, shipment, and return status emails"},{"icon":"🚚","name":"Shiprocket","purpose":"Multi-courier logistics, tracking, and label generation"},{"icon":"☁️","name":"AWS S3","purpose":"Product images, invoices, and return documents"}]
  },
  {
    id: 'retail/loyalty-program',
    name: 'Customer Loyalty Program', emoji: '🎁', short: 'LoyaltyHub',
    tagline: 'Points engine, tier management, reward redemption, and campaign builder.',
    color: '#7c3aed', color2: '#dc2626',
    category: 'Retail',
    target: 'Retail Chains, Restaurants, E-commerce, Petrol Pumps',
    problem: 'Businesses lack tools to reward repeat customers, leading to high churn and no customer stickiness.',
    stats: [
      { label: 'Total Members', value: '12,847', icon: '👥' },
      { label: 'Active Members', value: '8,234', icon: '🟢' },
      { label: 'Points Issued Today', value: '45,230', icon: '⭐' },
      { label: 'Redemptions Today', value: '₹8,400', icon: '🎁' },
    ],
    sections: ['Dashboard','Members','Tiers','Transactions','Campaigns'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [8200,9400,10100,11200,12000,12847] },
    useCase: "Customer Loyalty",
    difficulty: "starter",
    tableColumns: ["Member ID","Customer Name","Tier","Points Balance","Last Purchase","Status"],
    mockRows: [["MBR-001","Deepa Krishnan","Gold","12,450","03 May 2026","Active"],["MBR-002","Rajan Patel","Platinum","34,200","01 May 2026","Active"],["MBR-003","Ananya Mehta","Silver","4,800","28 Apr 2026","Active"],["MBR-004","Suresh Kumar","Bronze","1,240","15 Apr 2026","Active"],["MBR-005","Priya Nair","Gold","8,960","04 May 2026","Active"],["MBR-006","Mohan Sharma","Platinum","51,300","02 May 2026","Active"],["MBR-007","Kavya Iyer","Silver","3,120","10 Apr 2026","Active"],["MBR-008","Arjun Gupta","Bronze","680","01 Mar 2026","Inactive"]],
    features: [{"icon":"⭐","title":"Points Engine","desc":"Configurable earn rates per category, channel, and payment method."},{"icon":"🏆","title":"Tier Management","desc":"Bronze/Silver/Gold/Platinum tiers with automatic upgrade and downgrade logic."},{"icon":"🎁","title":"Reward Redemption","desc":"Points-to-discount redemption at POS, online, and through partner brands."},{"icon":"📢","title":"Campaign Builder","desc":"Targeted bonus point campaigns by tier, segment, or product category."},{"icon":"👥","title":"Customer Segments","desc":"RFM-based segmentation for personalised offers and re-engagement triggers."},{"icon":"📊","title":"Analytics","desc":"Programme ROI, redemption rates, churn risk, and tier migration reports."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Points ledger cache & real-time balance"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"Campaign emails, tier upgrade congratulations, and offers"},{"icon":"📱","name":"Twilio","purpose":"Promotional SMS and OTP for redemption at counter"},{"icon":"💳","name":"Razorpay","purpose":"Voucher issuance and partner cashback settlement"},{"icon":"☁️","name":"AWS S3","purpose":"Campaign assets, member reports, and tier certificates"}]
  },
  {
    id: 'retail/supplier-portal',
    name: 'Supplier Portal', emoji: '📦', short: 'SupplierHub',
    tagline: 'Purchase orders, goods receipt, vendor management, and payment tracking.',
    color: '#16a34a', color2: '#2563eb',
    category: 'Retail',
    target: 'Retailers, Distributors, FMCG Companies',
    problem: 'Manual PO processes cause delivery delays, invoice disputes, and payment tracking chaos.',
    stats: [
      { label: 'Active Suppliers', value: '47', icon: '🏭' },
      { label: 'Open POs', value: '23', icon: '📋' },
      { label: 'Pending Approval', value: '8', icon: '⏳' },
      { label: 'Payable (Month)', value: '₹12.4L', icon: '💰' },
    ],
    sections: ['Dashboard','Suppliers','Purchase Orders','GRN','Payments'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [18,21,19,23,20,23] },
    useCase: "Procurement",
    difficulty: "intermediate",
    tableColumns: ["PO Number","Supplier Name","Amount (₹)","Items","Expected Date","Status"],
    mockRows: [["PO-2401","Hindustan Unilever Ltd","4,82,000","48 SKUs","10 May 2026","Pending"],["PO-2402","ITC Limited","2,14,500","32 SKUs","08 May 2026","Confirmed"],["PO-2403","Nestle India","98,000","18 SKUs","07 May 2026","Delivered"],["PO-2404","Dabur India Ltd","1,36,000","24 SKUs","12 May 2026","Pending"],["PO-2405","Marico Industries","72,000","14 SKUs","09 May 2026","Confirmed"],["PO-2406","Godrej Consumer Products","1,88,000","28 SKUs","06 May 2026","Delivered"],["PO-2407","Procter & Gamble India","3,24,000","42 SKUs","15 May 2026","Pending"],["PO-2408","Britannia Industries","64,000","16 SKUs","05 May 2026","Rejected"]],
    features: [{"icon":"🏭","title":"Supplier Onboarding","desc":"Vendor registration, document verification, and credit term configuration."},{"icon":"📋","title":"PO Management","desc":"PO creation, approval workflow, amendment tracking, and PDF dispatch."},{"icon":"📥","title":"GRN Processing","desc":"Goods receipt with quantity verification, quality inspection, and discrepancy flags."},{"icon":"💰","title":"Payment Tracking","desc":"Invoice matching, payment scheduling, and early settlement discount calculation."},{"icon":"✅","title":"Quality Checks","desc":"Incoming quality inspection with rejection workflow and supplier scorecards."},{"icon":"📊","title":"Analytics","desc":"Supplier performance, on-time delivery rate, and spend analysis reports."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"PO dispatch, GRN confirmations, and payment notices"},{"icon":"💳","name":"Razorpay","purpose":"Vendor payment disbursement and advance processing"},{"icon":"📊","name":"Tally","purpose":"Accounts payable sync and GST reconciliation"},{"icon":"☁️","name":"AWS S3","purpose":"GRN documents, invoices, and quality reports storage"}]
  },

  // REAL ESTATE
  {
    id: 'real-estate/property-management',
    name: 'Property Management System', emoji: '🏠', short: 'PropManager',
    tagline: 'Properties, tenants, rent collection, and maintenance — all managed digitally.',
    color: '#d97706', color2: '#0891b2',
    category: 'Real Estate',
    target: 'Property Management Companies, Individual Landlords, Builders',
    problem: 'Landlords struggle to track rent payments, maintenance requests, and lease renewals across multiple properties.',
    stats: [
      { label: 'Total Properties', value: '34', icon: '🏠' },
      { label: 'Occupied', value: '28', icon: '✅' },
      { label: 'Vacant', value: '6', icon: '🔑' },
      { label: 'Rent Due (Month)', value: '₹8.4L', icon: '💰' },
    ],
    sections: ['Dashboard','Properties','Tenants','Rent Collection','Maintenance'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [720000,735000,748000,762000,810000,840000] },
    useCase: "Property Ops",
    difficulty: "intermediate",
    tableColumns: ["Property ID","Property Name","Tenant","Monthly Rent (₹)","Due Date","Status"],
    mockRows: [["PROP-001","Flat 4B, Lotus Tower, Pune","Suresh Kumar","28,000","01 May 2026","Paid"],["PROP-002","Shop 12, MG Road, Bengaluru","Ananya Mehta (RetailCo)","65,000","01 May 2026","Paid"],["PROP-003","Villa 3, Palm Meadows, Hyderabad","Rajesh Nair","45,000","01 May 2026","Overdue"],["PROP-004","Office 201, Cyber City, Gurugram","TechStart Pvt Ltd","1,20,000","01 May 2026","Paid"],["PROP-005","Flat 7A, Sea Breeze, Mumbai","Priya Iyer","52,000","01 May 2026","Pending"],["PROP-006","Warehouse B2, MIDC, Pune","LogiCorp India","95,000","01 May 2026","Paid"],["PROP-007","Flat 2C, Green Acres, Chennai","Deepak Sharma","22,000","01 May 2026","Paid"],["PROP-008","Shop 5, Saket Mall, Delhi","Kavya Fashions","80,000","01 May 2026","Overdue"]],
    features: [{"icon":"🏠","title":"Property Listings","desc":"Complete property database with photos, documents, AMC details, and valuation."},{"icon":"👥","title":"Tenant Management","desc":"Tenant KYC, agreement tracking, co-occupant records, and communication log."},{"icon":"💰","title":"Rent Collection","desc":"Online rent payment with Razorpay, automated receipts, and arrears tracking."},{"icon":"🔧","title":"Maintenance Tickets","desc":"Tenant-raised tickets with contractor assignment, SLA, and cost tracking."},{"icon":"📄","title":"Lease Tracking","desc":"Lease expiry alerts, renewal workflow, and escalation clause management."},{"icon":"📊","title":"Reports","desc":"Occupancy rate, rental yield, maintenance cost, and income tax schedules."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Rent collection with automatic receipt generation"},{"icon":"📱","name":"Twilio","purpose":"Due date reminders and maintenance status SMS"},{"icon":"📧","name":"SendGrid","purpose":"Rent receipts, NOC letters, and lease renewal notices"},{"icon":"☁️","name":"AWS S3","purpose":"Agreement PDFs, property photos, and NOC documents"}]
  },
  {
    id: 'real-estate/construction-tracker',
    name: 'Construction Project Tracker', emoji: '🏗️', short: 'BuildTrack',
    tagline: 'Project milestones, BOQ, contractor payments, and material tracking for builders.',
    color: '#4b5563', color2: '#d97706',
    category: 'Real Estate',
    target: 'Construction Companies, Real Estate Developers, Project Management Firms',
    problem: 'Construction projects overrun budgets and timelines due to poor milestone tracking and contractor management.',
    stats: [
      { label: 'Active Projects', value: '6', icon: '🏗️' },
      { label: 'On Track', value: '4', icon: '✅' },
      { label: 'Delayed', value: '2', icon: '⚠️' },
      { label: 'Total Budget', value: '₹24.7 Cr', icon: '💰' },
    ],
    sections: ['Dashboard','Projects','Milestones','BOQ','Contractors','Payments'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [182,210,245,268,312,350] },
    useCase: "Project Mgmt",
    difficulty: "advanced",
    tableColumns: ["Project ID","Project Name","Site Location","Contractor","Budget (₹ Cr)","Status"],
    mockRows: [["PROJ-001","Skyline Residency - Tower A","Wakad, Pune","Agarwal Constructions","12.4","On Track"],["PROJ-002","Green Valley Villas Phase 2","Whitefield, Bengaluru","Sharma Builders","28.7","Delayed"],["PROJ-003","Metro Square Commercial Hub","Andheri, Mumbai","Tata Projects Ltd","45.2","On Track"],["PROJ-004","Sunrise Heights Phase 1","Sector 62, Noida","DLF Construction","18.9","On Track"],["PROJ-005","Blue Lagoon Apartments","Hebbal, Bengaluru","Brigade Group","33.1","Delayed"],["PROJ-006","Royal Enclave Row Houses","Hadapsar, Pune","Kolte Patil","9.8","On Track"],["PROJ-007","Tech Park Tower B","Hinjewadi, Pune","L&T Construction","67.4","On Track"],["PROJ-008","Coastal Breeze Resort","Alibaug, Maharashtra","Oberoi Realty","22.6","Blocked"]],
    features: [{"icon":"📍","title":"Milestone Tracker","desc":"WBS-based milestone planning with % completion, delay flags, and critical path."},{"icon":"📋","title":"BOQ Management","desc":"Bill of Quantities with material rates, quantity revisions, and cost variance."},{"icon":"💰","title":"Contractor Payments","desc":"RA bill processing, retention deductions, and milestone-linked payment release."},{"icon":"📦","title":"Material Tracking","desc":"Material indent, GRN, site consumption, and wastage reconciliation."},{"icon":"📸","title":"Site Reports","desc":"Daily progress photos, labour count, weather log, and client MIS reports."},{"icon":"💼","title":"Budget Control","desc":"Approved vs committed vs actual cost with forecast-to-complete dashboard."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Contractor RA bill payments and vendor advances"},{"icon":"📧","name":"SendGrid","purpose":"Progress report dispatch and payment advices"},{"icon":"☁️","name":"AWS S3","purpose":"Drawing revisions, photos, and contract documents"},{"icon":"📱","name":"Twilio","purpose":"Site alerts, quality deviations, and safety incident SMS"}]
  },
  {
    id: 'real-estate/rental-portal',
    name: 'Rental Portal', emoji: '🔑', short: 'RentEase',
    tagline: 'Owner & tenant portals with online agreements, maintenance tickets, and payment history.',
    color: '#2563eb', color2: '#16a34a',
    category: 'Real Estate',
    target: 'Property Owners, Tenant, Real Estate Brokers',
    problem: 'Rental agreements are paper-based, maintenance requests go untracked, and rent payments are unorganized.',
    stats: [
      { label: 'Total Listings', value: '8', icon: '🏠' },
      { label: 'Occupied', value: '6', icon: '✅' },
      { label: 'Vacant', value: '2', icon: '🔑' },
      { label: 'Monthly Income', value: '₹1.24L', icon: '💰' },
    ],
    sections: ['Dashboard','Listings','Applications','Agreements','Maintenance'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [98000,104000,110000,116000,120000,124000] },
    useCase: "Rental Mgmt",
    difficulty: "starter",
    tableColumns: ["Listing ID","Property","Area","Monthly Rent (₹)","Tenant","Status"],
    mockRows: [["LST-001","2BHK Apartment","Koramangala, Bengaluru","32,000","Vikram Nair","Occupied"],["LST-002","3BHK Villa","Banjara Hills, Hyderabad","55,000","—","Vacant"],["LST-003","1BHK Studio","Andheri West, Mumbai","28,000","Priya Sharma","Occupied"],["LST-004","Commercial Office 1200sqft","Connaught Place, Delhi","1,20,000","TechCorp Pvt Ltd","Occupied"],["LST-005","2BHK Apartment","Kothrud, Pune","18,000","Arjun Mehta","Occupied"],["LST-006","Independent House 4BHK","Alwarpet, Chennai","65,000","—","Vacant"],["LST-007","1BHK Apartment","Salt Lake, Kolkata","12,000","Meera Roy","Occupied"],["LST-008","Shop 800sqft","FC Road, Pune","40,000","Kavya Fashions","Occupied"]],
    features: [{"icon":"🏠","title":"Property Listings","desc":"Rich property listings with photos, amenities, floor plans, and map location."},{"icon":"📝","title":"Application Management","desc":"Tenant application pipeline with document collection and verification workflow."},{"icon":"📄","title":"Digital Agreements","desc":"E-stamp rental agreement generation with digital signature and registration."},{"icon":"🔧","title":"Maintenance Tickets","desc":"Tenant-raised repair tickets with progress tracking and contractor assignment."},{"icon":"💰","title":"Payment History","desc":"Rent ledger, advance deposit tracker, and downloadable payment certificates."},{"icon":"👤","title":"Tenant Portal","desc":"Tenant self-service for rent payment, receipts, maintenance, and notices."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Online rent payment with automated receipt generation"},{"icon":"📧","name":"SendGrid","purpose":"Agreement emails, receipt PDFs, and maintenance updates"},{"icon":"📱","name":"Twilio","purpose":"Rent due reminders and maintenance status SMS"},{"icon":"☁️","name":"AWS S3","purpose":"Agreement PDFs, tenant ID, and property documents"}]
  },

  // FINANCE
  {
    id: 'finance/invoice-billing',
    name: 'Invoice & Billing System', emoji: '🧾', short: 'InvoicePro',
    tagline: 'Quotation to invoice workflow, GST, payment tracking, and aging reports.',
    color: '#16a34a', color2: '#2563eb',
    category: 'Finance',
    target: 'SMEs, Freelancers, Agencies, Service Businesses',
    problem: 'Manual billing leads to GST errors, late payments, and no visibility into cash flow.',
    stats: [
      { label: 'Total Invoices', value: '1,247', icon: '🧾' },
      { label: 'Paid', value: '₹18.4L', icon: '✅' },
      { label: 'Outstanding', value: '₹6.2L', icon: '⏳' },
      { label: 'Overdue', value: '₹1.8L', icon: '⚠️' },
    ],
    sections: ['Dashboard','Invoices','Quotations','Payments','Clients'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [1200000,1380000,1240000,1520000,1640000,1840000] },
    useCase: "Billing Ops",
    difficulty: "intermediate",
    tableColumns: ["Invoice No","Client Name","Amount (₹)","Due Date","GST %","Status"],
    mockRows: [["INV-2401","TechSoft Solutions Pvt Ltd","1,24,500","15 May 2026","18%","Pending"],["INV-2402","Sharma & Associates","48,000","10 May 2026","18%","Paid"],["INV-2403","Global Exports India","2,36,800","20 May 2026","0%","Pending"],["INV-2404","Meera Consultants LLP","72,000","08 May 2026","18%","Overdue"],["INV-2405","Raj Enterprises","31,500","12 May 2026","12%","Paid"],["INV-2406","BlueSky Technologies","89,000","25 May 2026","18%","Pending"],["INV-2407","Patel Trading Co","18,200","05 May 2026","5%","Overdue"],["INV-2408","NextGen Solutions","1,84,000","30 May 2026","18%","Pending"]],
    features: [{"icon":"📝","title":"Quotation Builder","desc":"Professional quotations with line items, tax, discounts, and client branding."},{"icon":"🧾","title":"GST Invoice Generator","desc":"GSTIN-compliant invoices with HSN codes, tax breakup, and e-Invoice."},{"icon":"💰","title":"Payment Tracking","desc":"Payment receipt entry, partial payments, TDS, and outstanding aging reports."},{"icon":"📊","title":"Aging Reports","desc":"0-30, 31-60, 61-90, 90+ day aging buckets with collection priority flags."},{"icon":"👤","title":"Client Portal","desc":"Clients view invoices, download PDFs, and pay online via payment link."},{"icon":"📄","title":"PDF Export","desc":"Branded invoice and statement PDFs with digital signature for dispatch."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Payment link generation and automatic payment reconciliation"},{"icon":"📧","name":"SendGrid","purpose":"Invoice delivery, payment reminders, and receipt emails"},{"icon":"☁️","name":"AWS S3","purpose":"Invoice PDFs, supporting documents, and statement storage"},{"icon":"📊","name":"Tally","purpose":"Bi-directional accounting sync for sales ledger and GST returns"}]
  },
  {
    id: 'finance/expense-tracker',
    name: 'Expense Tracker', emoji: '💳', short: 'ExpenseFlow',
    tagline: 'Employee expense claims, approval workflow, budget vs actual, and category analysis.',
    color: '#d97706', color2: '#dc2626',
    category: 'Finance',
    target: 'Corporates, Mid-size Companies, Startups',
    problem: 'Employees submit paper receipts weeks late; managers have no visibility into budget burn rate.',
    stats: [
      { label: 'Pending Claims', value: '4', icon: '⏳' },
      { label: 'Approved (Month)', value: '₹12,400', icon: '✅' },
      { label: 'Budget Used', value: '68%', icon: '📊' },
      { label: 'Rejected', value: '1', icon: '❌' },
    ],
    sections: ['Dashboard','My Expenses','Approvals','Budget','Reports'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [8400,9200,11000,10200,12400,9800] },
    useCase: "Expense Control",
    difficulty: "starter",
    tableColumns: ["Claim ID","Employee","Category","Amount (₹)","Submitted","Status"],
    mockRows: [["EXP-001","Priya Sharma","Travel - Flight","18,400","03 May 2026","Pending Approval"],["EXP-002","Arjun Mehta","Client Entertainment","8,200","02 May 2026","Approved"],["EXP-003","Kavya Nair","Hotel Accommodation","12,600","01 May 2026","Approved"],["EXP-004","Rohit Patel","Office Supplies","3,400","04 May 2026","Pending Approval"],["EXP-005","Meera Sharma","Travel - Cab","2,800","03 May 2026","Rejected"],["EXP-006","Deepak Iyer","Software Subscription","9,999","01 May 2026","Approved"],["EXP-007","Sunita Rao","Training Material","6,500","30 Apr 2026","Approved"],["EXP-008","Vikram Singh","Conference Registration","22,000","28 Apr 2026","Pending Approval"]],
    features: [{"icon":"📸","title":"Expense Submission","desc":"Mobile receipt capture with OCR auto-fill, category tagging, and policy check."},{"icon":"✅","title":"Approval Workflow","desc":"Multi-level approval routing by amount, category, and department hierarchy."},{"icon":"📊","title":"Budget vs Actual","desc":"Real-time department budget consumption with forecast and over-spend alerts."},{"icon":"🧾","title":"Receipt Upload","desc":"Cloud-based receipt storage with audit-ready retrieval and GST extraction."},{"icon":"📈","title":"Category Analysis","desc":"Spend breakdown by category, project, cost centre, and time period."},{"icon":"📤","title":"Export","desc":"One-click Excel and PDF export for Finance review and accounting entry."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"Approval notifications and rejection reason emails"},{"icon":"💳","name":"Razorpay","purpose":"Employee reimbursement disbursement to bank accounts"},{"icon":"☁️","name":"AWS S3","purpose":"Receipt images and supporting document storage"},{"icon":"💬","name":"Slack","purpose":"Approval requests and budget alerts in team channels"}]
  },
  {
    id: 'finance/payroll-management',
    name: 'Payroll Management System', emoji: '👔', short: 'PayrollMS',
    tagline: 'Salary computation, PF/ESI/TDS, payslip generation, and bank transfer files.',
    color: '#2563eb', color2: '#7c3aed',
    category: 'Finance',
    target: 'Companies with 10–5000 employees, HR Teams',
    problem: 'Manual payroll calculation is error-prone, time-consuming, and non-compliant with changing tax rules.',
    stats: [
      { label: 'Total Employees', value: '234', icon: '👥' },
      { label: 'Payroll (Month)', value: '₹42.8L', icon: '💰' },
      { label: 'PF Liability', value: '₹5.1L', icon: '🏦' },
      { label: 'TDS (Month)', value: '₹3.2L', icon: '📋' },
    ],
    sections: ['Dashboard','Employees','Payroll Run','Payslips','Tax'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [3980000,4100000,4150000,4200000,4280000,4280000] },
    useCase: "Payroll Ops",
    difficulty: "advanced",
    tableColumns: ["Emp ID","Employee Name","Department","Gross Pay (₹)","Deductions (₹)","Status"],
    mockRows: [["EMP-001","Ankit Verma","Engineering","95,000","18,240","Processed"],["EMP-002","Priya Sharma","Product Management","88,000","16,800","Processed"],["EMP-003","Rahul Mehta","Sales","72,000","12,960","Processed"],["EMP-004","Kavya Nair","Human Resources","65,000","11,700","Processed"],["EMP-005","Arjun Patel","Finance","78,000","14,820","Processed"],["EMP-006","Meera Iyer","Marketing","68,000","12,240","Pending"],["EMP-007","Deepak Singh","Operations","54,000","9,720","Pending"],["EMP-008","Sunita Rao","Customer Success","59,000","10,620","Pending"]],
    features: [{"icon":"💰","title":"Salary Computation","desc":"CTC breakup, allowances, variable pay, and increment processing with revision history."},{"icon":"📋","title":"PF/ESI/TDS Calculation","desc":"Statutory deduction calculation with monthly challans and annual returns."},{"icon":"📄","title":"Payslip Generator","desc":"Branded payslips emailed automatically with detailed earnings and deductions."},{"icon":"🏦","title":"Bank Transfer File","desc":"NEFT/IMPS transfer file generation for bulk salary disbursement via bank portal."},{"icon":"📊","title":"Form 16","desc":"Auto-generated Form 16A and 16B for all employees at financial year end."},{"icon":"✅","title":"Compliance","desc":"PF, ESI, PT, TDS filing dashboards with due date reminders and penalty tracker."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Salary disbursement, reimbursements, and advance payments"},{"icon":"📧","name":"SendGrid","purpose":"Payslip delivery and Form 16 distribution to employees"},{"icon":"☁️","name":"AWS S3","purpose":"Form 16, payslip archive, and compliance document storage"},{"icon":"📊","name":"Tally","purpose":"Salary journal entry sync and statutory payment accounting"}]
  },
  {
    id: 'finance/budget-planner',
    name: 'Corporate Budget Planner', emoji: '📊', short: 'BudgetIQ',
    tagline: 'Annual budget creation, department allocation, variance tracking, and forecasting.',
    color: '#7c3aed', color2: '#16a34a',
    category: 'Finance',
    target: 'CFOs, Finance Teams, Department Heads',
    problem: 'Budgets are built in Excel, shared by email, and reviewed quarterly with no real-time visibility.',
    stats: [
      { label: 'FY Budget', value: '₹8.4 Cr', icon: '📊' },
      { label: 'Spent YTD', value: '₹5.2 Cr', icon: '💰' },
      { label: 'Variance', value: '-₹0.3 Cr', icon: '📉' },
      { label: 'Pending Approvals', value: '3', icon: '⏳' },
    ],
    sections: ['Dashboard','Annual Budget','Departments','Actuals','Variance'],
    chartData: { labels: ['Q1','Q2','Q3','Q4'], data: [18000000,22000000,19000000,25000000] },
    useCase: "Financial Planning",
    difficulty: "advanced",
    tableColumns: ["Dept ID","Department","Annual Budget (₹)","Spent YTD (₹)","Variance (₹)","Status"],
    mockRows: [["DEPT-001","Engineering","1,20,00,000","78,40,000","+41,60,000","On Track"],["DEPT-002","Sales & Marketing","85,00,000","62,30,000","+22,70,000","On Track"],["DEPT-003","Human Resources","42,00,000","38,50,000","+3,50,000","At Risk"],["DEPT-004","Operations","68,00,000","54,20,000","+13,80,000","On Track"],["DEPT-005","Finance & Legal","32,00,000","28,90,000","+3,10,000","At Risk"],["DEPT-006","Customer Success","28,00,000","18,40,000","+9,60,000","On Track"],["DEPT-007","Product Management","55,00,000","48,70,000","+6,30,000","At Risk"],["DEPT-008","R&D","96,00,000","44,20,000","+51,80,000","On Track"]],
    features: [{"icon":"📊","title":"Budget Creation","desc":"Top-down and bottom-up annual budget building with version control and approvals."},{"icon":"🏢","title":"Department Allocation","desc":"Budget envelope allocation by department with reallocation workflow and limits."},{"icon":"📉","title":"Variance Tracking","desc":"Real-time budget vs actual with drill-down to transaction level for any line item."},{"icon":"🔮","title":"Forecast Engine","desc":"Rolling forecast with seasonality adjustments and what-if scenario modelling."},{"icon":"✅","title":"Approval Workflow","desc":"Multi-level budget amendment approvals with audit trail and change log."},{"icon":"📋","title":"Board Reports","desc":"One-click board-ready financial decks with charts, trend analysis, and commentary."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"Budget alerts, variance reports, and board report distribution"},{"icon":"💬","name":"Slack","purpose":"Real-time over-budget alerts and approval notifications"},{"icon":"☁️","name":"AWS S3","purpose":"Board presentation decks and audit report archives"},{"icon":"📊","name":"Tally","purpose":"Actuals sync from accounting system for real-time variance"}]
  },

  // HOSPITALITY
  {
    id: 'hospitality/hotel-management',
    name: 'Hotel Management System', emoji: '🏨', short: 'HotelMS',
    tagline: 'Reservations, check-in/out, housekeeping, F&B, and billing — full front-desk control.',
    color: '#d97706', color2: '#7c3aed',
    category: 'Hospitality',
    target: 'Hotels, Resorts, Boutique Properties, Service Apartments',
    problem: 'Hotels run front desk on spreadsheets — leading to overbooking, poor housekeeping coordination, and billing errors.',
    stats: [
      { label: 'Occupancy Today', value: '74%', icon: '🏨' },
      { label: 'Check-ins Today', value: '18', icon: '✅' },
      { label: 'Check-outs', value: '12', icon: '👋' },
      { label: 'Revenue Today', value: '₹1.84L', icon: '💰' },
    ],
    sections: ['Dashboard','Reservations','Front Desk','Rooms','Housekeeping','Billing'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [68,72,79,81,74,88] },
    useCase: "Hotel Ops",
    difficulty: "advanced",
    tableColumns: ["Res ID","Guest Name","Room No","Check-in","Check-out","Status"],
    mockRows: [["RES-001","Mr. Raj Malhotra","204 - Deluxe King","05 May 2026","08 May 2026","Checked In"],["RES-002","Ms. Priya Kapoor","301 - Suite","04 May 2026","06 May 2026","Checked In"],["RES-003","Mr. Arjun & Mrs. Nair","102 - Superior Twin","06 May 2026","10 May 2026","Confirmed"],["RES-004","Mr. Suresh Reddy","401 - Presidential Suite","07 May 2026","09 May 2026","Confirmed"],["RES-005","Ms. Meera Sharma","205 - Deluxe Queen","03 May 2026","05 May 2026","Checked Out"],["RES-006","Mr. Vikram Iyer","103 - Standard Twin","05 May 2026","07 May 2026","Checked In"],["RES-007","Mr. Deepak Gupta","302 - Junior Suite","08 May 2026","12 May 2026","Confirmed"],["RES-008","Ms. Kavya Menon","201 - Deluxe Sea View","04 May 2026","04 May 2026","Checked Out"]],
    features: [{"icon":"📅","title":"Reservation Management","desc":"OTA sync, direct booking engine, group block, and wait-list management."},{"icon":"🏨","title":"Front Desk","desc":"Check-in/out, room assignment, key card issuance, and guest profile CRM."},{"icon":"🛏️","title":"Housekeeping","desc":"Room status board, cleaning assignment, lost & found, and linen tracking."},{"icon":"🍽️","title":"F&B Management","desc":"Restaurant reservations, in-room dining orders, and minibar charge posting."},{"icon":"🧾","title":"Billing","desc":"Folio management, room tariff plans, advance payment, and invoice split."},{"icon":"🌙","title":"Night Audit","desc":"Automated night audit with room revenue posting, tax calculation, and reconciliation."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Online advance payments, UPI, and card settlement"},{"icon":"📱","name":"Twilio","purpose":"Booking confirmation and check-out SMS to guests"},{"icon":"📧","name":"SendGrid","purpose":"Folio invoice, welcome email, and post-stay survey"},{"icon":"☁️","name":"AWS S3","purpose":"Guest documents, ID scans, and audit report archives"}]
  },
  {
    id: 'hospitality/restaurant-pos',
    name: 'Restaurant POS System', emoji: '🍽️', short: 'RestoPOS',
    tagline: 'Table management, KOT, menu builder, billing, and kitchen display.',
    color: '#dc2626', color2: '#d97706',
    category: 'Hospitality',
    target: 'Restaurants, Cafes, Food Courts, Cloud Kitchens',
    problem: 'Restaurants lose orders, face KOT delays, and have billing disputes due to manual processes.',
    stats: [
      { label: 'Tables Active', value: '14/30', icon: '🍽️' },
      { label: 'Orders Today', value: '187', icon: '📋' },
      { label: 'Revenue Today', value: '₹42,800', icon: '💰' },
      { label: 'Avg Bill', value: '₹229', icon: '🧾' },
    ],
    sections: ['Dashboard','Tables','New Order','Menu','Billing','Kitchen'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [32400,38200,35600,42100,42800,51200] },
    useCase: "Restaurant Ops",
    difficulty: "starter",
    tableColumns: ["Order ID","Table No","Items Ordered","Amount (₹)","Server","Status"],
    mockRows: [["ORD-001","Table 5","Dal Makhani, Butter Naan ×2, Lassi","640","Ramesh Kumar","Served"],["ORD-002","Table 12","Chicken Tikka, Jeera Rice, Raita","920","Anita Sharma","In Progress"],["ORD-003","Table 3","Paneer Butter Masala, Roti ×4","480","Suresh Yadav","Pending"],["ORD-004","Table 8","Biryani (Veg), Raita, Gulab Jamun","560","Ramesh Kumar","Billed"],["ORD-005","Takeaway","Chole Bhature, Mango Lassi","320","Anita Sharma","Completed"],["ORD-006","Table 1","Mutton Rogan Josh, Garlic Naan ×3","1,240","Suresh Yadav","Served"],["ORD-007","Table 7","Masala Dosa, Filter Coffee ×2","280","Ramesh Kumar","Billed"],["ORD-008","Delivery","Pizza Margherita, Garlic Bread","580","—","Out for Delivery"]],
    features: [{"icon":"🍽️","title":"Table Management","desc":"Interactive floor plan with real-time table status, merge, and split capability."},{"icon":"📋","title":"KOT System","desc":"Instant Kitchen Order Tickets printed at station with course-wise firing."},{"icon":"📖","title":"Menu Builder","desc":"Category-wise menu with modifiers, combos, seasonal items, and pricing tiers."},{"icon":"🧾","title":"Billing with GST","desc":"CGST/SGST split billing with digital and print receipt, and split payment."},{"icon":"👨‍🍳","title":"Kitchen Display","desc":"Real-time KDS replacing paper KOT for faster and error-free kitchen execution."},{"icon":"📊","title":"Daily Reports","desc":"Item-wise sales, server performance, void analysis, and end-of-day summary."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Real-time order state management"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"UPI, card, and wallet payment acceptance at counter"},{"icon":"📧","name":"SendGrid","purpose":"Daily sales report to owner and manager email"},{"icon":"🛵","name":"Swiggy/Zomato API","purpose":"Aggregator order sync directly into POS queue"},{"icon":"☁️","name":"AWS S3","purpose":"Menu PDFs, daily reports, and audit log archives"}]
  },
  {
    id: 'hospitality/event-management',
    name: 'Event Management Platform', emoji: '🎉', short: 'EventMgr',
    tagline: 'Plan and execute events — venues, vendors, guests, budget, and timelines.',
    color: '#7c3aed', color2: '#dc2626',
    category: 'Hospitality',
    target: 'Event Management Companies, Wedding Planners, Corporate Event Teams',
    problem: 'Event managers juggle vendor calls, guest lists, and budgets across WhatsApp and Excel — losing track and overspending.',
    stats: [
      { label: 'Upcoming Events', value: '8', icon: '🎉' },
      { label: 'This Month', value: '3', icon: '📅' },
      { label: 'Guests Managed', value: '1,247', icon: '👥' },
      { label: 'Revenue Pipeline', value: '₹34.2L', icon: '💰' },
    ],
    sections: ['Dashboard','Events','Venues','Vendors','Guests','Budget'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [3,4,5,6,7,8] },
    useCase: "Event Ops",
    difficulty: "intermediate",
    tableColumns: ["Event ID","Event Name","Client","Venue","Event Date","Status"],
    mockRows: [["EVT-001","Sharma Wedding Reception","Arun Sharma Family","Taj Lands End, Mumbai","12 May 2026","Confirmed"],["EVT-002","TechCorp Annual Summit","TechCorp India Ltd","Grand Hyatt, Bengaluru","20 May 2026","Planning"],["EVT-003","Gupta 50th Birthday Gala","Sunita Gupta","ITC Maratha, Mumbai","18 May 2026","Confirmed"],["EVT-004","Meera-Arjun Engagement","Reddy Family","Leela Palace, Chennai","08 May 2026","In Progress"],["EVT-005","Pharma Product Launch","Cipla Ltd","JW Marriott, Pune","25 May 2026","Planning"],["EVT-006","College Alumni Meet 2026","IIT Bombay Alumni","Hotel Trident, Mumbai","15 May 2026","Confirmed"],["EVT-007","Patel Rajat Mahotsav","Patel Family","Ahmedabad Convention Ctr","22 May 2026","Planning"],["EVT-008","HR Conclave 2026","SHRM India","The Lalit, New Delhi","30 May 2026","Inquiry"]],
    features: [{"icon":"📅","title":"Event Planning","desc":"Master event timeline with milestones, checklist, and stakeholder assignments."},{"icon":"🏛️","title":"Venue Booking","desc":"Venue inventory, availability calendar, layout selection, and contract management."},{"icon":"🤝","title":"Vendor Management","desc":"Caterer, decorator, AV, and photographer coordination with PO and payment tracking."},{"icon":"👥","title":"Guest List","desc":"Invitation management, RSVP tracking, dietary preferences, and seating plan."},{"icon":"💰","title":"Budget Tracker","desc":"Event budget with advance payments, vendor invoices, and actual vs estimated view."},{"icon":"⏱️","title":"Timeline Manager","desc":"Day-of schedule with run-of-show, BEO, and real-time status updates."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Client advance collection and vendor payment disbursement"},{"icon":"📧","name":"SendGrid","purpose":"Vendor contracts, guest invitations, and event briefs"},{"icon":"📱","name":"Twilio","purpose":"Guest RSVP reminders and day-of schedule SMS"},{"icon":"☁️","name":"AWS S3","purpose":"Event documents, contracts, and photo gallery storage"}]
  },

  // LOGISTICS
  {
    id: 'logistics/delivery-tracker',
    name: 'Delivery Tracker', emoji: '🚚', short: 'DeliverIT',
    tagline: 'Order to delivery workflow — driver assignment, status updates, POD, and notifications.',
    color: '#0891b2', color2: '#2563eb',
    category: 'Logistics',
    target: 'Last-mile Delivery Companies, E-commerce Logistics, Courier Services',
    problem: 'No real-time visibility on delivery status leads to customer complaints and no proof of delivery.',
    stats: [
      { label: "Today's Orders", value: '342', icon: '📦' },
      { label: 'Out for Delivery', value: '187', icon: '🚚' },
      { label: 'Delivered', value: '143', icon: '✅' },
      { label: 'Failed', value: '12', icon: '❌' },
    ],
    sections: ['Dashboard','Orders','Drivers','Routes','POD','Reports'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [280,312,295,342,318,264] },
    useCase: "Last Mile Ops",
    difficulty: "intermediate",
    tableColumns: ["Order ID","Customer Name","Delivery Address","Driver","Zone","Status"],
    mockRows: [["DEL-5001","Kavita Menon","42 Linking Road, Bandra, Mumbai","Suresh Yadav","Zone A - Western","Out for Delivery"],["DEL-5002","Rajan Patel","B-12 Sector 18, Noida","Mohan Sharma","Zone B - NCR","Delivered"],["DEL-5003","Ananya Gupta","15 MG Road, Bengaluru","Arjun Kumar","Zone C - South","Out for Delivery"],["DEL-5004","Deepak Iyer","7 Anna Nagar, Chennai","Ramesh Raj","Zone D - TN","Failed"],["DEL-5005","Priya Sharma","C-45 Satellite, Ahmedabad","Dinesh Patel","Zone E - GJ","Delivered"],["DEL-5006","Vikram Singh","22 Civil Lines, Jaipur","Bharat Meena","Zone F - RJ","Out for Delivery"],["DEL-5007","Meera Nair","Park Street 8, Kolkata","Sanjay Das","Zone G - WB","Pending"],["DEL-5008","Suresh Reddy","Banjara Hills, Hyderabad","Kiran Rao","Zone H - TS","Out for Delivery"]],
    features: [{"icon":"📦","title":"Order Assignment","desc":"Auto-assign orders to nearest available driver with capacity and zone constraints."},{"icon":"📱","title":"Driver App","desc":"Mobile app for drivers to accept, navigate, capture POD, and collect COD."},{"icon":"📍","title":"GPS Tracking","desc":"Live driver location shared with customers via tracking link."},{"icon":"📸","title":"POD Capture","desc":"Photo and OTP-based proof of delivery with geo-tagged timestamp."},{"icon":"📲","title":"Customer Notifications","desc":"Automated SMS and WhatsApp updates at dispatch, out-for-delivery, and delivered."},{"icon":"📊","title":"Delivery Analytics","desc":"First-attempt delivery rate, zone performance, and driver efficiency dashboards."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Real-time driver state and order queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"📡","name":"MQTT","purpose":"Low-latency GPS telemetry from driver devices"}],
    integrations: [{"icon":"📱","name":"Twilio","purpose":"Customer delivery status SMS and OTP-POD verification"},{"icon":"📧","name":"SendGrid","purpose":"Dispatch manifests and daily performance reports"},{"icon":"☁️","name":"AWS S3","purpose":"POD photos and delivery proof document archive"},{"icon":"💳","name":"Razorpay","purpose":"COD collection reconciliation and driver settlement"}]
  },
  {
    id: 'logistics/warehouse-management',
    name: 'Warehouse Management System', emoji: '🏭', short: 'WarehouMS',
    tagline: 'Bin locations, inbound/outbound, pick-pack-ship, cycle count, and putaway rules.',
    color: '#4b5563', color2: '#0891b2',
    category: 'Logistics',
    target: 'Warehouses, 3PL Providers, Distribution Centers',
    problem: 'Manual warehouse operations cause picking errors, misplaced inventory, and slow order fulfillment.',
    stats: [
      { label: 'Total SKUs', value: '8,247', icon: '📦' },
      { label: 'Inbound Today', value: '34', icon: '📥' },
      { label: 'Outbound Today', value: '127', icon: '📤' },
      { label: 'Utilization', value: '78%', icon: '📊' },
    ],
    sections: ['Dashboard','Inbound','Inventory','Outbound','Cycle Count'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [98,112,105,127,118,89] },
    useCase: "Warehouse Ops",
    difficulty: "advanced",
    tableColumns: ["Item ID","Product Name","Bin Location","Qty Received","Qty Dispatched","Status"],
    mockRows: [["WH-001","Sony 65\" OLED TV","Rack-B2-Shelf-3","24","18","Active"],["WH-002","Apple iPhone 15 Pro 256GB","Rack-A1-Shelf-1","150","142","Active"],["WH-003","Bosch Front Load Washer 7kg","Rack-C4-Shelf-2","36","30","Active"],["WH-004","Nike Air Max 270 - Size 10","Rack-D3-Shelf-4","200","198","Low Stock"],["WH-005","Tupperware Modular Set","Rack-E1-Shelf-1","500","487","Active"],["WH-006","Dell XPS 15 Laptop","Rack-A2-Shelf-2","45","45","Out of Stock"],["WH-007","Whirlpool 360L Double Door Fridge","Rack-B4-Shelf-1","18","12","Active"],["WH-008","Prestige Induction Cooktop","Rack-F2-Shelf-3","80","76","Active"]],
    features: [{"icon":"📍","title":"Bin Management","desc":"3D warehouse mapping with bin locations, weight limits, and ABC classification."},{"icon":"📥","title":"Inbound Processing","desc":"ASN-based receiving, barcode verification, QC inspection, and putaway confirmation."},{"icon":"📤","title":"Pick-Pack-Ship","desc":"Wave picking, packing slip generation, and carrier handover with tracking number."},{"icon":"🔢","title":"Cycle Count","desc":"Zone-based cycle count schedules with variance investigation and adjustment."},{"icon":"🗺️","title":"Putaway Rules","desc":"Product-specific putaway strategies: FIFO, FEFO, and zone-affinity rules."},{"icon":"📊","title":"Inventory Reports","desc":"Stock accuracy, turn rate, ageing, and pick productivity dashboards."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Real-time bin state and task queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"📡","name":"MQTT","purpose":"Handheld scanner and IoT device connectivity"}],
    integrations: [{"icon":"📱","name":"Twilio","purpose":"Low-stock alerts and critical inventory notifications"},{"icon":"📧","name":"SendGrid","purpose":"Dispatch notes, cycle count reports, and alerts"},{"icon":"☁️","name":"AWS S3","purpose":"GRN documents, packing slips, and audit reports"},{"icon":"💳","name":"Razorpay","purpose":"Vendor payment processing and advance tracking"}]
  },
  {
    id: 'logistics/supply-chain-portal',
    name: 'Supply Chain Portal', emoji: '🔗', short: 'ChainMgr',
    tagline: 'Vendor onboarding, PO lifecycle, shipment tracking, compliance, and analytics.',
    color: '#2563eb', color2: '#4b5563',
    category: 'Logistics',
    target: 'Manufacturing Companies, FMCG, Importers/Exporters',
    problem: 'Supply chain visibility gaps lead to production stoppages, delayed shipments, and vendor payment disputes.',
    stats: [
      { label: 'Active Vendors', value: '134', icon: '🏭' },
      { label: 'Open POs', value: '87', icon: '📋' },
      { label: 'In Transit', value: '23', icon: '🚢' },
      { label: 'On-Time Delivery', value: '91%', icon: '✅' },
    ],
    sections: ['Dashboard','Vendors','Purchase Orders','Shipments','Compliance'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [78,82,85,88,90,91] },
    useCase: "SCM & Procurement",
    difficulty: "advanced",
    tableColumns: ["PO ID","Vendor Name","Product","Quantity","Expected Date","Status"],
    mockRows: [["SCM-001","Tata Steel Ltd","HR Steel Coils - 2mm","200 MT","15 May 2026","In Transit"],["SCM-002","Reliance Industries","HDPE Granules Grade P","50 MT","12 May 2026","Confirmed"],["SCM-003","Asian Paints Supplier","Titanium Dioxide Powder","10 MT","08 May 2026","Delivered"],["SCM-004","Godrej Agrovet","Soybean Meal 48% Protein","100 MT","20 May 2026","Pending"],["SCM-005","JSW Steel","MS Plates 6mm","75 MT","18 May 2026","In Transit"],["SCM-006","BASF India","Epoxy Resin - LY1564","5 MT","10 May 2026","Delivered"],["SCM-007","Hindalco Industries","Aluminium Sheets 1.5mm","30 MT","22 May 2026","Confirmed"],["SCM-008","Coromandel International","DAP Fertiliser 50kg","500 Bags","25 May 2026","Pending"]],
    features: [{"icon":"🏭","title":"Vendor Onboarding","desc":"Supplier registration, document verification, category approval, and rating setup."},{"icon":"📋","title":"PO Lifecycle","desc":"PO creation, approval routing, amendment tracking, and acknowledgement."},{"icon":"🚢","title":"Shipment Tracking","desc":"Multi-modal shipment visibility with milestone updates and delay alerts."},{"icon":"📄","title":"Compliance Management","desc":"Quality certificates, COA, import/export docs, and regulatory compliance tracking."},{"icon":"📊","title":"Analytics","desc":"On-time delivery, vendor scorecard, spend analysis, and supply risk dashboard."},{"icon":"⚠️","title":"Risk Monitor","desc":"Single-source dependency alerts, geopolitical risk flags, and alternative supplier suggestions."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🔀","name":"Kafka","purpose":"Event streaming for high-volume supply chain events"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"PO dispatch, shipment alerts, and compliance notices"},{"icon":"📱","name":"Twilio","purpose":"Critical shipment delay alerts via SMS"},{"icon":"☁️","name":"AWS S3","purpose":"Compliance certificates, contracts, and shipping docs"},{"icon":"💳","name":"Razorpay","purpose":"Vendor advance payments and invoice settlement"}]
  },

  // HR
  {
    id: 'hr/recruitment-ats',
    name: 'Recruitment ATS', emoji: '🤝', short: 'HireFlow',
    tagline: 'Job postings, applicant tracking, interview scheduling, and offer management.',
    color: '#7c3aed', color2: '#2563eb',
    category: 'Human Resources',
    target: 'HR Teams, Recruitment Agencies, Startups',
    problem: 'Hiring teams track candidates in spreadsheets — losing applicants, missing follow-ups, and hiring slowly.',
    stats: [
      { label: 'Open Positions', value: '18', icon: '💼' },
      { label: 'Applications', value: '342', icon: '👥' },
      { label: 'Interviews (Week)', value: '24', icon: '🗓️' },
      { label: 'Offers Made', value: '6', icon: '✅' },
    ],
    sections: ['Dashboard','Jobs','Candidates','Interviews','Offers','Onboarding'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [24,31,28,38,34,42] },
    useCase: "Talent Acquisition",
    difficulty: "intermediate",
    tableColumns: ["App ID","Candidate Name","Position","Current Round","Interviewer","Status"],
    mockRows: [["APP-001","Neha Joshi","Senior Frontend Engineer","Technical Round 2","Rahul Mehta","In Progress"],["APP-002","Arjun Patel","Product Manager","Final HR Round","Priya Sharma","In Progress"],["APP-003","Kavya Reddy","Data Analyst","Coding Test","Ankit Verma","Pending"],["APP-004","Siddharth Rao","DevOps Engineer","Offer Stage","Meera Nair","Completed"],["APP-005","Deepika Mehta","UX Designer","Portfolio Review","Rahul Mehta","In Progress"],["APP-006","Rohit Kumar","Backend Engineer","Technical Round 1","Ankit Verma","In Progress"],["APP-007","Ishaan Sharma","Sales Manager","Business Case","Priya Sharma","Pending"],["APP-008","Sunita Iyer","Finance Analyst","Offer Accepted","Meera Nair","Completed"]],
    features: [{"icon":"📢","title":"Job Posting","desc":"One-click posting to LinkedIn, Naukri, and careers page with application form."},{"icon":"📊","title":"Application Pipeline","desc":"Kanban pipeline view with stage-wise SLA, bulk actions, and source tracking."},{"icon":"📅","title":"Interview Scheduler","desc":"Calendar integration, panel availability sync, and automated interview invites."},{"icon":"📝","title":"Offer Management","desc":"Offer letter generation, digital acceptance, and background verification trigger."},{"icon":"🤝","title":"Onboarding","desc":"Pre-joining document collection, IT access requests, and day-1 checklist."},{"icon":"📈","title":"Analytics","desc":"Time-to-hire, source effectiveness, offer acceptance rate, and pipeline health."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"Candidate communication, interview invites, and offer letters"},{"icon":"💬","name":"Slack","purpose":"Interviewer reminders and hiring manager notifications"},{"icon":"☁️","name":"AWS S3","purpose":"Resume storage, offer letters, and assessment documents"},{"icon":"🔗","name":"LinkedIn API","purpose":"Job posting sync and candidate profile enrichment"}]
  },
  {
    id: 'hr/leave-management',
    name: 'Leave Management System', emoji: '📅', short: 'LeaveMS',
    tagline: 'Leave policies, approval workflows, balance tracking, and team calendar.',
    color: '#16a34a', color2: '#0891b2',
    category: 'Human Resources',
    target: 'HR Teams, Companies of All Sizes',
    problem: 'Leave requests via email cause approval delays, balance confusion, and no team calendar visibility.',
    stats: [
      { label: 'On Leave Today', value: '12', icon: '🏖️' },
      { label: 'Pending Approvals', value: '7', icon: '⏳' },
      { label: 'Avg Balance', value: '14.2 days', icon: '📅' },
      { label: 'Leave This Month', value: '48', icon: '📊' },
    ],
    sections: ['Dashboard','My Leaves','Team Calendar','Approvals','Policy','Reports'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [32,28,41,38,44,48] },
    useCase: "Leave Admin",
    difficulty: "starter",
    tableColumns: ["Leave ID","Employee Name","Leave Type","From Date","To Date","Status"],
    mockRows: [["LVE-001","Aditya Kumar","Casual Leave","06 May 2026","07 May 2026","Pending Approval"],["LVE-002","Priya Sharma","Sick Leave","04 May 2026","05 May 2026","Approved"],["LVE-003","Rahul Mehta","Earned Leave","12 May 2026","16 May 2026","Pending Approval"],["LVE-004","Kavya Nair","Work from Home","05 May 2026","05 May 2026","Approved"],["LVE-005","Arjun Patel","Paternity Leave","10 May 2026","24 May 2026","Approved"],["LVE-006","Meera Iyer","Casual Leave","08 May 2026","08 May 2026","Rejected"],["LVE-007","Deepak Singh","Earned Leave","19 May 2026","23 May 2026","Pending Approval"],["LVE-008","Sunita Rao","Sick Leave","03 May 2026","03 May 2026","Approved"]],
    features: [{"icon":"📋","title":"Leave Policy Engine","desc":"Configurable leave types, accrual rules, carry-forward limits, and encashment."},{"icon":"✅","title":"Application Workflow","desc":"Employee application → manager approval → HR record with email notifications."},{"icon":"📊","title":"Balance Tracker","desc":"Real-time leave balance per employee with YTD utilisation and projections."},{"icon":"📅","title":"Team Calendar","desc":"Team leave calendar showing who is away to help managers plan coverage."},{"icon":"🗓️","title":"Holiday Master","desc":"National, regional, and company-specific holiday list with automatic exclusion."},{"icon":"📈","title":"Reports","desc":"Absenteeism trends, department-wise leave patterns, and compliance reports."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"Approval/rejection notifications and leave balance emails"},{"icon":"💬","name":"Slack","purpose":"Leave request alerts in manager channels"},{"icon":"☁️","name":"AWS S3","purpose":"Medical certificates and leave policy document storage"},{"icon":"💳","name":"Razorpay","purpose":"Leave encashment and LTA payment processing"}]
  },
  {
    id: 'hr/performance-review',
    name: 'Performance Review System', emoji: '⭐', short: 'PerformIQ',
    tagline: 'Goal setting, 360° feedback, appraisal cycles, ratings, and increment planning.',
    color: '#d97706', color2: '#7c3aed',
    category: 'Human Resources',
    target: 'HR Teams, People Managers, Corporate Employees',
    problem: 'Annual reviews are subjective, inconsistent, and based on recency bias — demotivating employees.',
    stats: [
      { label: 'Total Employees', value: '234', icon: '👥' },
      { label: 'Reviews Pending', value: '47', icon: '⏳' },
      { label: 'Goals Completed', value: '68%', icon: '🎯' },
      { label: 'High Performers', value: '32', icon: '⭐' },
    ],
    sections: ['Dashboard','Goals','Reviews','Feedback','Ratings','Increments'],
    chartData: { labels: ['Q1','Q2','Q3','Q4'], data: [62,68,72,68] },
    useCase: "Performance Mgmt",
    difficulty: "advanced",
    tableColumns: ["Review ID","Employee Name","Manager","Review Period","Rating","Status"],
    mockRows: [["REV-001","Siddharth Rao","Priya Sharma","Q4 FY 2025-26","4.2 / 5","Completed"],["REV-002","Ananya Mehta","Rahul Mehta","Q4 FY 2025-26","3.8 / 5","Completed"],["REV-003","Arjun Patel","Kavya Nair","Q4 FY 2025-26","—","In Progress"],["REV-004","Meera Iyer","Priya Sharma","Q4 FY 2025-26","4.5 / 5","Completed"],["REV-005","Deepak Singh","Rahul Mehta","Q4 FY 2025-26","—","Pending"],["REV-006","Kavya Reddy","Kavya Nair","Q4 FY 2025-26","3.5 / 5","Completed"],["REV-007","Rohit Kumar","Priya Sharma","Q4 FY 2025-26","—","In Progress"],["REV-008","Sunita Rao","Rahul Mehta","Q4 FY 2025-26","4.0 / 5","Completed"]],
    features: [{"icon":"🎯","title":"Goal Setting","desc":"SMART goal creation with cascading from company OKRs and mid-year check-ins."},{"icon":"🔄","title":"360° Feedback","desc":"Peer, subordinate, and manager feedback with anonymity controls."},{"icon":"📊","title":"Appraisal Cycles","desc":"Annual, bi-annual, and probation review cycles with configurable forms."},{"icon":"⚖️","title":"Rating Normalization","desc":"Bell-curve calibration with manager overrides and moderation workflow."},{"icon":"💰","title":"Increment Planning","desc":"Increment recommendation linked to ratings with budget envelope enforcement."},{"icon":"📈","title":"Reports","desc":"Performance distribution, high-performer identification, and increment impact reports."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"Review cycle launch, reminder, and completion emails"},{"icon":"💬","name":"Slack","purpose":"Review deadline reminders and feedback request notifications"},{"icon":"☁️","name":"AWS S3","purpose":"Appraisal forms, goal sheets, and increment letters"},{"icon":"💳","name":"Razorpay","purpose":"Increment and bonus disbursement processing"}]
  },

  // GOVERNMENT
  {
    id: 'government/citizen-services',
    name: 'Citizen Services Portal', emoji: '🏛️', short: 'GovServe',
    tagline: 'Online form submission, document upload, application tracking, and payments.',
    color: '#1d4ed8', color2: '#16a34a',
    category: 'Government',
    target: 'Municipal Corporations, State Departments, Public Sector Units',
    problem: 'Citizens stand in queues for certificates; there is no online submission or application status tracking.',
    stats: [
      { label: 'Applications Today', value: '847', icon: '📋' },
      { label: 'Pending Processing', value: '234', icon: '⏳' },
      { label: 'Approved Today', value: '512', icon: '✅' },
      { label: 'Avg Processing Time', value: '2.4 days', icon: '⏱️' },
    ],
    sections: ['Dashboard','Applications','Services Catalog','Status Tracker','Payments'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [720,812,780,847,890,420] },
    useCase: "e-Governance",
    difficulty: "intermediate",
    tableColumns: ["App ID","Citizen Name","Service Type","Submitted","Processing Officer","Status"],
    mockRows: [["GOV-001","Ramesh Patil","Birth Certificate","03 May 2026","Smt. Lata Desai","Under Review"],["GOV-002","Sunita Sharma","Income Certificate","01 May 2026","Shri. Ravi Kulkarni","Approved"],["GOV-003","Mohan Iyer","Domicile Certificate","04 May 2026","Smt. Lata Desai","Pending"],["GOV-004","Priya Nair","Caste Certificate","30 Apr 2026","Shri. Anant Joshi","Approved"],["GOV-005","Arjun Gupta","Trade Licence Renewal","02 May 2026","Shri. Ravi Kulkarni","Under Review"],["GOV-006","Kavya Mehta","Marriage Certificate","05 May 2026","Smt. Lata Desai","Pending"],["GOV-007","Deepak Rao","Building Plan Approval","28 Apr 2026","Shri. Anant Joshi","Rejected"],["GOV-008","Vikram Singh","Death Certificate","05 May 2026","Shri. Ravi Kulkarni","Approved"]],
    features: [{"icon":"📋","title":"Service Catalog","desc":"Self-service directory of all government services with eligibility and document guide."},{"icon":"📝","title":"Application Submission","desc":"Online form filling with field validation, document upload, and auto-acknowledgement."},{"icon":"📄","title":"Document Upload","desc":"Secure document upload with Aadhaar-based digital signature verification."},{"icon":"🔍","title":"Status Tracker","desc":"Application status at each stage with expected processing time and officer details."},{"icon":"💳","name":"Payment Gateway","desc":"Government fee collection via UPI, netbanking, with e-challan generation."},{"icon":"👮","title":"Officer Portal","desc":"Officer-facing dashboard with queue management, approval workflow, and SLA monitor."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Government fee collection with e-challan and receipt"},{"icon":"📧","name":"SendGrid","purpose":"Application status updates and approval notices by email"},{"icon":"☁️","name":"AWS S3","purpose":"Citizen documents and approved certificate storage"},{"icon":"📱","name":"Twilio","purpose":"Status update SMS at each processing stage"}]
  },
  {
    id: 'government/document-management',
    name: 'Document Management System', emoji: '📋', short: 'DocVault',
    tagline: 'Document classification, version control, access permissions, and audit trail.',
    color: '#4b5563', color2: '#1d4ed8',
    category: 'Government',
    target: 'Government Offices, Legal Departments, Compliance Teams',
    problem: 'Documents are stored in physical files and shared drives with no version control or audit trail.',
    stats: [
      { label: 'Total Documents', value: '24,847', icon: '📄' },
      { label: 'Uploaded Today', value: '124', icon: '📤' },
      { label: 'Pending Review', value: '47', icon: '⏳' },
      { label: 'Storage Used', value: '2.4 TB', icon: '💾' },
    ],
    sections: ['Dashboard','Documents','Categories','Approvals','Audit Log'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [1820,2100,1980,2340,2180,2480] },
    useCase: "Records Mgmt",
    difficulty: "intermediate",
    tableColumns: ["Doc ID","Document Title","Department","Version","Last Updated","Status"],
    mockRows: [["DOC-001","Annual Budget Report FY 2025-26","Finance Department","v3.2","02 May 2026","Published"],["DOC-002","Municipal Solid Waste SOP","Public Health Dept","v1.8","30 Apr 2026","Under Review"],["DOC-003","Employee Conduct Rules 2024","Human Resources","v2.0","15 Apr 2026","Published"],["DOC-004","Road Construction Tender TEN-24-56","Public Works Dept","v1.0","04 May 2026","Draft"],["DOC-005","Water Supply Expansion Plan","Engineering Dept","v2.3","01 May 2026","Approved"],["DOC-006","RTI Disclosure Schedule","Legal Department","v4.1","28 Apr 2026","Published"],["DOC-007","Street Light Maintenance Contract","Administration","v1.1","03 May 2026","Under Review"],["DOC-008","Town Planning Zoning Map 2026","Planning Department","v5.0","05 May 2026","Published"]],
    features: [{"icon":"🗂️","title":"Document Classification","desc":"Hierarchical folder structure with metadata tags, retention policies, and access classes."},{"icon":"🔄","title":"Version Control","desc":"Full version history with diff view, rollback, and change author tracking."},{"icon":"🔒","title":"Access Permissions","desc":"Role-based access with department-level and document-level permission controls."},{"icon":"🔍","title":"Full-Text Search","desc":"Elasticsearch-powered search across document content, metadata, and comments."},{"icon":"📋","title":"Audit Trail","desc":"Immutable access and modification log for regulatory compliance and RTI."},{"icon":"✅","title":"Workflow Approvals","desc":"Multi-stage document review and approval with digital signature and e-stamp."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🔍","name":"Elasticsearch","purpose":"Full-text document content search"}],
    integrations: [{"icon":"☁️","name":"AWS S3","purpose":"Encrypted document storage with versioning and lifecycle"},{"icon":"📧","name":"SendGrid","purpose":"Review notifications, approval alerts, and publication notices"},{"icon":"💬","name":"Slack","purpose":"Urgent document approval requests in officer channels"},{"icon":"📱","name":"Twilio","purpose":"Critical document approval and RTI deadline SMS reminders"}]
  },
  {
    id: 'government/municipal-grievance',
    name: 'Municipal Grievance System', emoji: '📢', short: 'CivicAlert',
    tagline: 'Citizen complaint submission, department routing, SLA tracking, and resolution.',
    color: '#dc2626', color2: '#1d4ed8',
    category: 'Government',
    target: 'Municipal Corporations, Local Bodies, District Administrations',
    problem: 'Citizen complaints go untracked, are routed to wrong departments, and are never resolved with accountability.',
    stats: [
      { label: 'Complaints Today', value: '184', icon: '📢' },
      { label: 'In Progress', value: '347', icon: '🔄' },
      { label: 'Resolved (Month)', value: '1,242', icon: '✅' },
      { label: 'SLA Breach', value: '23', icon: '⚠️' },
    ],
    sections: ['Dashboard','Complaints','Departments','SLA Monitor','Reports'],
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [142,168,155,184,178,92] },
    useCase: "Civic Redressal",
    difficulty: "intermediate",
    tableColumns: ["Complaint ID","Citizen Name","Ward No","Category","Assigned To","Status"],
    mockRows: [["CMP-001","Suresh Nair","Ward 14","Pothole / Road Damage","Jr. Engineer Patil","In Progress"],["CMP-002","Priya Mehta","Ward 7","Broken Street Light","Electrical Dept Head","Resolved"],["CMP-003","Mohan Sharma","Ward 22","Garbage Not Collected","Sanitation Inspector","Pending"],["CMP-004","Kavya Iyer","Ward 3","Stray Dog Menace","Animal Welfare Officer","In Progress"],["CMP-005","Rajan Patel","Ward 18","Illegal Construction","Enforcement Officer","Pending"],["CMP-006","Sunita Reddy","Ward 11","Water Pipeline Leakage","Water Works JE","Resolved"],["CMP-007","Arjun Kumar","Ward 9","Encroachment on Footpath","Enforcement Officer","In Progress"],["CMP-008","Deepa Joshi","Ward 5","Mosquito Breeding Ground","Health Inspector","Pending"]],
    features: [{"icon":"📢","title":"Complaint Submission","desc":"Web and mobile complaint filing with geo-tag, photo upload, and instant token."},{"icon":"🔀","title":"Department Routing","desc":"Auto-routing to correct department based on complaint category and ward."},{"icon":"⏱️","title":"SLA Tracking","desc":"Category-wise SLA definition with breach escalation to senior officers."},{"icon":"📣","title":"Escalation Rules","desc":"Automatic escalation on SLA breach with notification to ward officer and commissioner."},{"icon":"✅","title":"Resolution Workflow","desc":"Officer resolution entry with photo proof and citizen satisfaction rating."},{"icon":"📊","title":"Reports","desc":"Ward-wise pending complaints, SLA compliance, category heat map, and trend analysis."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📱","name":"Twilio","purpose":"Complaint receipt, status updates, and resolution SMS"},{"icon":"📧","name":"SendGrid","purpose":"SLA breach escalation emails to senior officers"},{"icon":"☁️","name":"AWS S3","purpose":"Complaint photos, resolution evidence, and reports"},{"icon":"💳","name":"Razorpay","purpose":"E-challan payments for compounding fees and penalties"}]
  },

  // AGRICULTURE
  {
    id: 'agriculture/farm-management',
    name: 'Farm Management System', emoji: '🌾', short: 'FarmMS',
    tagline: 'Plot tracking, crop cycles, input costs, yield recording, and soil health management.',
    color: '#16a34a', color2: '#d97706',
    category: 'Agriculture',
    target: 'Farmers, Agri-businesses, FPOs, Cooperative Societies',
    problem: 'Farmers have no digital record of input costs vs yield, making it impossible to measure profitability per crop.',
    stats: [
      { label: 'Total Plots', value: '24', icon: '🌾' },
      { label: 'Active Crops', value: '18', icon: '🌱' },
      { label: 'Season Spend', value: '₹4.2L', icon: '💰' },
      { label: 'Expected Yield', value: '340 Qtl', icon: '📊' },
    ],
    sections: ['Dashboard','Plots','Crops','Inputs','Harvest','Reports'],
    chartData: { labels: ['Kharif 22','Rabi 22','Kharif 23','Rabi 23','Kharif 24','Rabi 24'], data: [280,310,295,340,318,360] },
    useCase: "Farm Ops",
    difficulty: "starter",
    tableColumns: ["Plot ID","Plot Name","Active Crop","Area (Acres)","Irrigation Status","Status"],
    mockRows: [["PLT-001","North Field A","Wheat Var. HD-2967","4.5","Drip - Next: 07 May","Active"],["PLT-002","South Field B","Soybean - Kharif","6.2","Sprinkler - Done","Active"],["PLT-003","East Block C","Sugarcane - Ratoon","8.0","Flood - Overdue","Active"],["PLT-004","West Plot D","Tomato - Hybrid","2.5","Drip - Done","Active"],["PLT-005","Central Field E","Onion - Rabi","3.8","Sprinkler - Next: 08 May","Active"],["PLT-006","Orchard Block F","Mango - Alphonso","5.0","Drip - Done","Active"],["PLT-007","Nursery G","Paddy Seedlings","1.2","Flood - Done","Active"],["PLT-008","Hill Terrace H","Turmeric - Organic","2.0","Drip - Next: 09 May","Active"]],
    features: [{"icon":"🗺️","title":"Plot Management","desc":"GIS-based field mapping with soil type, ownership, lease, and survey details."},{"icon":"🌱","title":"Crop Cycle Tracking","desc":"Season-wise sowing, growth stage, and harvest records with variety management."},{"icon":"💰","title":"Input Cost Logger","desc":"Seed, fertiliser, pesticide, and labour cost recording per plot per season."},{"icon":"📊","title":"Yield Recording","desc":"Harvest quantity logging with quality grade, market price, and profit calculation."},{"icon":"🧪","title":"Soil Health","desc":"Soil test result storage with deficiency alerts and fertiliser recommendation."},{"icon":"📈","title":"Profitability Reports","desc":"Cost vs revenue, season-wise P&L, and plot-wise productivity benchmarking."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📱","name":"Twilio","purpose":"Irrigation and pesticide schedule alerts in local language"},{"icon":"📧","name":"SendGrid","purpose":"Season summary reports and soil test result emails"},{"icon":"☁️","name":"AWS S3","purpose":"Farm documents, soil reports, and FPO agreement storage"},{"icon":"💳","name":"Razorpay","purpose":"Input purchase payments and FPO subscription fees"}]
  },
  {
    id: 'agriculture/agri-market-portal',
    name: 'Agri Market Portal', emoji: '📈', short: 'AgriMart',
    tagline: 'Farmer listings, buyer discovery, mandi rates, trade matching, and payment settlement.',
    color: '#d97706', color2: '#16a34a',
    category: 'Agriculture',
    target: 'Farmers, Traders, Mandis, Agri-startups',
    problem: 'Farmers are forced to sell at mandi middlemen prices with no direct buyer access or price transparency.',
    stats: [
      { label: 'Registered Farmers', value: '4,247', icon: '🌾' },
      { label: 'Active Listings', value: '342', icon: '📋' },
      { label: 'Trades This Week', value: '128', icon: '🤝' },
      { label: 'Trade Value', value: '₹18.4L', icon: '💰' },
    ],
    sections: ['Dashboard','Listings','Buyers','Mandi Rates','Trades','Payments'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [2800,3100,3400,3200,3800,4200] },
    useCase: "Agri Trading",
    difficulty: "intermediate",
    tableColumns: ["Listing ID","Farmer Name","Commodity","Quantity (Qtl)","Price (₹/Qtl)","Status"],
    mockRows: [["MKT-001","Ramesh Patil","Soybean - Grade A","80","4,200","Active Listing"],["MKT-002","Suresh Yadav","Wheat - HD-2967","150","2,350","Active Listing"],["MKT-003","Mohan Singh","Cotton - Shankar 6","60","6,800","Sold"],["MKT-004","Priya Devi","Tomato - Hybrid","40","2,100","Active Listing"],["MKT-005","Kavya Reddy","Turmeric - Organic","25","12,500","Negotiating"],["MKT-006","Arjun Patel","Groundnut - Bold","90","5,400","Sold"],["MKT-007","Deepak Sharma","Onion - Red Nasik","200","1,800","Active Listing"],["MKT-008","Sunita Bai","Maize - Yellow","120","2,050","Active Listing"]],
    features: [{"icon":"👨‍🌾","title":"Farmer Registration","desc":"Farmer KYC with Aadhaar, land records, and bank account verification."},{"icon":"📋","title":"Commodity Listings","desc":"Grade-wise produce listing with photos, quantity, and expected price."},{"icon":"🔍","title":"Buyer Discovery","desc":"Verified buyer network with search by commodity, grade, and location."},{"icon":"📈","title":"Mandi Rate Tracker","desc":"Live mandi rates from AGMARKNET integration for price benchmarking."},{"icon":"🤝","title":"Trade Matching","desc":"AI-assisted buyer-seller matching with negotiation chat and deal confirmation."},{"icon":"💰","title":"Payment Settlement","desc":"Razorpay-powered secure trade payment with digital payment receipt."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💳","name":"Razorpay","purpose":"Secure trade payment and early payment financing"},{"icon":"📱","name":"Twilio","purpose":"Price alert SMS and trade confirmation in Hindi/regional"},{"icon":"📧","name":"SendGrid","purpose":"Trade confirmations and payment receipts via email"},{"icon":"☁️","name":"AWS S3","purpose":"Trade documents, weighment slips, and farmer certificates"}]
  },
  {
    id: 'agriculture/crop-tracking',
    name: 'Crop Tracking System', emoji: '💧', short: 'CropTrack',
    tagline: 'Season-wise tracking, pesticide schedules, irrigation logs, and harvest prediction.',
    color: '#0891b2', color2: '#16a34a',
    category: 'Agriculture',
    target: 'Large Farms, FPOs, Agricultural Universities, Agri-tech Startups',
    problem: 'Irregular irrigation, missed pesticide schedules, and no harvest prediction leads to crop losses.',
    stats: [
      { label: 'Active Crops', value: '18', icon: '🌱' },
      { label: 'Irrigation Due', value: '4', icon: '💧' },
      { label: 'Pest Alerts', value: '2', icon: '⚠️' },
      { label: 'Harvest in 30 days', value: '6', icon: '🌾' },
    ],
    sections: ['Dashboard','Crops','Irrigation Log','Pesticide Schedule','Alerts','Harvest'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [12,15,14,18,16,18] },
    useCase: "Crop Intelligence",
    difficulty: "intermediate",
    tableColumns: ["Crop ID","Crop Name","Plot","Growth Stage","Next Action","Status"],
    mockRows: [["CRP-001","Wheat Var. HD-2967","North Field A","Heading Stage","Irrigation on 07 May","On Track"],["CRP-002","Soybean Kharif","South Field B","Vegetative V6","Fertiliser 09 May","On Track"],["CRP-003","Sugarcane Ratoon","East Block C","Grand Growth","Irrigation Overdue","At Risk"],["CRP-004","Tomato Hybrid","West Plot D","Fruiting Stage","Spray on 06 May","On Track"],["CRP-005","Onion Rabi","Central Field E","Bulbing Stage","Irrigation 08 May","On Track"],["CRP-006","Alphonso Mango","Orchard Block F","Fruit Development","No action needed","On Track"],["CRP-007","Paddy Seedlings","Nursery G","14 DAS","Transplanting 10 May","On Track"],["CRP-008","Organic Turmeric","Hill Terrace H","Rhizome Formation","Spray on 09 May","Pest Alert"]],
    features: [{"icon":"📅","title":"Season-wise Tracking","desc":"Crop calendar with sowing date, expected harvest, and critical growth stage alerts."},{"icon":"💊","title":"Pesticide Scheduler","desc":"Spray schedule with dosage calculator, worker safety interval, and re-entry notice."},{"icon":"💧","title":"Irrigation Logs","desc":"Irrigation date, method, quantity, and soil moisture tracking with schedule alerts."},{"icon":"🌱","title":"Growth Stage Monitor","desc":"Stage-by-stage crop development tracking with image upload and expert commentary."},{"icon":"🌾","title":"Harvest Prediction","desc":"Machine learning yield forecast based on stage, weather, and historical data."},{"icon":"⚠️","title":"Alerts","desc":"Pest outbreak alerts, weather warnings, and government advisory notifications."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"📡","name":"IoT / MQTT","purpose":"Soil sensor and weather station data ingestion"}],
    integrations: [{"icon":"📱","name":"Twilio","purpose":"Pest alerts, irrigation reminders in local language via SMS"},{"icon":"📧","name":"SendGrid","purpose":"Season summary and advisory report emails"},{"icon":"☁️","name":"AWS S3","purpose":"Field photos, soil data, and crop records storage"},{"icon":"💳","name":"Razorpay","purpose":"Input purchases and agri-advisory subscription payments"}]
  },

  // SOFTWARE
  {
    id: 'software/project-management',
    name: 'Project Management', emoji: '📋', short: 'ProjectHub',
    tagline: 'Agile boards, sprint planning, milestone tracking, and team velocity — all in one workspace.',
    color: '#6366f1', color2: '#8b5cf6',
    category: 'Software',
    target: 'Software Teams, Product Companies, Agencies, Startups',
    problem: 'Teams juggle Slack threads, emails, and spreadsheets to track tasks — sprints slip and deadlines are missed.',
    stats: [
      { label: 'Active Projects', value: '14', icon: '📋' },
      { label: 'Open Tasks', value: '287', icon: '✅' },
      { label: 'Sprint Velocity', value: '48 pts', icon: '⚡' },
      { label: 'On-Time Delivery', value: '91%', icon: '🎯' },
    ],
    sections: ['Dashboard','Board','Backlog','Sprints','Milestones','Reports'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [38,42,45,41,48,51] },
    useCase: "Agile PM",
    difficulty: "intermediate",
    tableColumns: ["Task ID","Task Title","Assignee","Sprint","Priority","Status"],
    mockRows: [["PM-001","User Authentication Module","Priya Sharma","Sprint 4","High","In Progress"],["PM-002","Dashboard Redesign","Rahul Mehta","Sprint 4","Medium","Review"],["PM-003","API Rate Limiting","Arjun Patel","Sprint 4","High","Completed"],["PM-004","Email Notification Service","Kavya Nair","Sprint 4","Low","In Progress"],["PM-005","Mobile Responsive Layout","Deepak Singh","Sprint 5","Medium","Pending"],["PM-006","Payment Gateway Integration","Meera Iyer","Sprint 4","Critical","In Progress"],["PM-007","Unit Test Coverage 80%","Rohit Kumar","Sprint 5","Medium","Pending"],["PM-008","CI/CD Pipeline Setup","Ankit Verma","Sprint 4","High","Completed"]],
    features: [{"icon":"📋","title":"Agile Board","desc":"Kanban and Scrum boards with swimlanes, WIP limits, and blocker flags."},{"icon":"🏃","title":"Sprint Planning","desc":"Story point estimation, velocity-based sprint capacity, and backlog grooming."},{"icon":"🏁","title":"Milestone Tracker","desc":"Roadmap timeline with milestone dependencies and on-track/at-risk status."},{"icon":"⚡","title":"Team Velocity","desc":"Sprint velocity charts, burndown graphs, and predictability metrics."},{"icon":"📉","title":"Burndown Charts","desc":"Real-time sprint burndown with ideal line and scope-change markers."},{"icon":"🗺️","title":"Roadmap View","desc":"Quarter-wise release roadmap with epic grouping and stakeholder sharing."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🔌","name":"WebSockets","purpose":"Real-time board updates across team members"}],
    integrations: [{"icon":"💬","name":"Slack","purpose":"Task updates, sprint start/end, and blocker notifications"},{"icon":"🐙","name":"GitHub","purpose":"Commit and PR linking to tasks for traceability"},{"icon":"📧","name":"SendGrid","purpose":"Sprint review summaries and stakeholder reports"},{"icon":"☁️","name":"AWS S3","purpose":"Attachment storage for tasks and sprint documents"}]
  },
  {
    id: 'software/bug-tracker',
    name: 'Bug & Issue Tracker', emoji: '🐛', short: 'BugDesk',
    tagline: 'Triage, assign, and resolve issues with priority queues, status workflows, and release linking.',
    color: '#dc2626', color2: '#f97316',
    category: 'Software',
    target: 'QA Teams, Dev Teams, Product Companies, SaaS Businesses',
    problem: 'Bugs pile up in spreadsheets and chat — no priority, no owner, no SLA, no audit trail.',
    stats: [
      { label: 'Open Bugs', value: '64', icon: '🐛' },
      { label: 'Critical', value: '5', icon: '🔴' },
      { label: 'Fixed This Week', value: '28', icon: '✅' },
      { label: 'Avg Resolution', value: '1.8 days', icon: '⏱️' },
    ],
    sections: ['Dashboard','Issues','My Queue','Releases','Reports','Settings'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [82,74,68,71,65,64] },
    useCase: "Issue Tracking",
    difficulty: "intermediate",
    tableColumns: ["Bug ID","Title","Reporter","Assigned To","Severity","Status"],
    mockRows: [["BUG-001","Login page crashes on Safari 17","Meera Patel","Arjun Singh","Critical","Open"],["BUG-002","Payment modal freezes on slow 3G","Rohit Kumar","Priya Sharma","High","In Progress"],["BUG-003","CSV export missing last 10 rows","Kavya Nair","Deepak Iyer","Medium","In Progress"],["BUG-004","Dark mode toggle resets on page refresh","Ankit Verma","Rahul Mehta","Low","Open"],["BUG-005","API returns 500 on null invoice ID","Arjun Singh","Meera Patel","Critical","Resolved"],["BUG-006","Email notifications sent in duplicate","Priya Sharma","Rohit Kumar","High","In Progress"],["BUG-007","Search bar lag above 10k records","Sunita Rao","Kavya Nair","Medium","Open"],["BUG-008","Dashboard chart wrong on Firefox 125","Deepak Iyer","Ankit Verma","Low","Resolved"]],
    features: [{"icon":"🔍","title":"Issue Triage","desc":"Incoming bug classification with severity, affected module, and reproduction steps."},{"icon":"📊","title":"Priority Queue","desc":"SLA-based priority queues with critical bug escalation and SLA breach alerts."},{"icon":"🔄","title":"Status Workflow","desc":"Configurable Open → In Progress → Review → Resolved → Closed workflow."},{"icon":"🔗","title":"Release Linking","desc":"Bug-to-release mapping for release notes and regression prevention."},{"icon":"⏱️","title":"SLA Tracking","desc":"Resolution SLA by severity with breach notifications and manager escalation."},{"icon":"📋","title":"Audit Trail","desc":"Full activity log: assignments, comments, status changes, and time tracking."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💬","name":"Slack","purpose":"Critical bug alerts and SLA breach notifications"},{"icon":"🔭","name":"Sentry","purpose":"Error tracking auto-creates bugs from production exceptions"},{"icon":"🐙","name":"GitHub","purpose":"Bi-directional issue sync and fix commit linking"},{"icon":"📧","name":"SendGrid","purpose":"SLA breach escalation and weekly bug trend reports"}]
  },
  {
    id: 'software/api-developer-portal',
    name: 'API Developer Portal', emoji: '🔌', short: 'APIPortal',
    tagline: 'API key management, interactive docs, rate limit monitoring, sandbox testing, and webhook logs.',
    color: '#0891b2', color2: '#6366f1',
    category: 'Software',
    target: 'SaaS Companies, Platform Teams, API-first Businesses, Fintechs',
    problem: 'Developers waste hours hunting undocumented endpoints; API keys are shared over email with no audit.',
    stats: [
      { label: 'Active API Keys', value: '1,240', icon: '🔑' },
      { label: 'Requests / Day', value: '2.4M', icon: '📡' },
      { label: 'Avg Latency', value: '48ms', icon: '⚡' },
      { label: 'Uptime', value: '99.97%', icon: '✅' },
    ],
    sections: ['Dashboard','API Keys','Documentation','Sandbox','Analytics','Webhooks'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [1800000,2000000,2100000,2300000,2200000,2400000] },
    useCase: "API Management",
    difficulty: "advanced",
    tableColumns: ["Key ID","App Name","API Key Owner","Requests / Day","Rate Limit","Status"],
    mockRows: [["KEY-001","PayFlow Mobile App","Vikram Mehta","48,240","100k/day","Active"],["KEY-002","RetailSuite ERP","Ananya Corp","12,800","50k/day","Active"],["KEY-003","HealthTrack SaaS","Dr. Priya Systems","8,420","25k/day","Active"],["KEY-004","AgriConnect Platform","FarmTech India","34,100","75k/day","Active"],["KEY-005","LMS Integration","EduPro Pvt Ltd","6,200","10k/day","Suspended"],["KEY-006","GovServices API","NIC Integration","98,400","200k/day","Active"],["KEY-007","Analytics Dashboard","DataLens Inc","21,300","50k/day","Active"],["KEY-008","Mobile Banking App","FinServe Bank","1,84,200","500k/day","Active"]],
    features: [{"icon":"🔑","title":"API Key Management","desc":"Key generation, rotation, scope assignment, and IP allowlist per application."},{"icon":"📖","title":"Interactive Docs","desc":"OpenAPI-powered live documentation with try-it-out and code snippet generator."},{"icon":"🧪","title":"Sandbox Testing","desc":"Isolated sandbox environment with mock data for development and testing."},{"icon":"📊","title":"Rate Limit Monitor","desc":"Real-time usage charts with threshold alerts and automatic throttle rules."},{"icon":"🔔","title":"Webhook Logs","desc":"Webhook delivery status, payload browser, retry controls, and failure alerts."},{"icon":"📈","title":"Analytics","desc":"Endpoint popularity, latency percentiles, error rates, and consumer segmentation."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Rate limit counters and API key cache"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🌐","name":"Kong Gateway","purpose":"API gateway for routing, auth, and rate limiting"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"Key rotation reminders and usage threshold breach alerts"},{"icon":"💬","name":"Slack","purpose":"Rate limit breach and API downtime notifications"},{"icon":"☁️","name":"AWS S3","purpose":"OpenAPI specs, SDK packages, and documentation assets"},{"icon":"🔭","name":"Sentry","purpose":"API error monitoring and consumer-level error grouping"}]
  },
  {
    id: 'software/qa-test-management',
    name: 'QA Test Management', emoji: '🧪', short: 'TestLab',
    tagline: 'Test case library, execution runs, defect linking, coverage reports, and regression suite tracking.',
    color: '#16a34a', color2: '#0891b2',
    category: 'Software',
    target: 'QA Teams, SDET Engineers, Release Managers, Product Companies',
    problem: 'Test cases live in spreadsheets, defects in chat — coverage is unknown and regressions ship to production.',
    stats: [
      { label: 'Total Test Cases', value: '2,184', icon: '🧪' },
      { label: 'Pass Rate', value: '94.2%', icon: '✅' },
      { label: 'Open Defects', value: '18', icon: '🐛' },
      { label: 'Coverage', value: '87%', icon: '📊' },
    ],
    sections: ['Dashboard','Test Cases','Test Runs','Defects','Coverage','Reports'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [88,90,91,93,94,94] },
    useCase: "Quality Assurance",
    difficulty: "intermediate",
    tableColumns: ["Test ID","Test Case Name","Module","Last Run","Result","Status"],
    mockRows: [["TC-001","Verify user login with valid credentials","Authentication","04 May 2026","Passed","Active"],["TC-002","Verify login fails with wrong password","Authentication","04 May 2026","Passed","Active"],["TC-003","Verify payment processes via Razorpay","Payments","03 May 2026","Failed","Active"],["TC-004","Verify invoice PDF downloads correctly","Billing","04 May 2026","Passed","Active"],["TC-005","Verify bulk CSV import under 5000 rows","Import","02 May 2026","Passed","Active"],["TC-006","Verify dashboard loads within 2 seconds","Performance","04 May 2026","Failed","Active"],["TC-007","Verify role-based access for Admin","Permissions","04 May 2026","Passed","Active"],["TC-008","Verify forgot password email delivery","Auth / Email","03 May 2026","Passed","Active"]],
    features: [{"icon":"📚","title":"Test Case Library","desc":"Hierarchical test case organisation by module, type, and priority with BDD support."},{"icon":"▶️","title":"Execution Runs","desc":"Planned and ad-hoc test runs with pass/fail capture, screenshot, and notes."},{"icon":"🐛","title":"Defect Linking","desc":"One-click defect filing from failed test with automatic context pre-fill."},{"icon":"📊","title":"Coverage Reports","desc":"Feature coverage matrix, risk coverage heat map, and test debt dashboard."},{"icon":"🔁","title":"Regression Suite","desc":"Tagged regression suites auto-triggered on each build with trend comparison."},{"icon":"🔗","title":"CI Integration","desc":"GitHub Actions, Jenkins, and Azure DevOps integration for pipeline gate control."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"💬","name":"Slack","purpose":"Test failure alerts and regression run completion reports"},{"icon":"🐙","name":"GitHub","purpose":"PR test gate enforcement and coverage badge generation"},{"icon":"📧","name":"SendGrid","purpose":"Test execution summary and defect trend reports"},{"icon":"🔭","name":"Sentry","purpose":"Production defect back-linking to failed test cases"}]
  },
  {
    id: 'software/devops-dashboard',
    name: 'DevOps Release Dashboard', emoji: '🚀', short: 'DevOpsPro',
    tagline: 'CI/CD pipeline status, environment deployments, rollback controls, incident alerts, and uptime.',
    color: '#f97316', color2: '#6366f1',
    category: 'Software',
    target: 'DevOps Engineers, SREs, Platform Teams, Tech Startups',
    problem: 'Deployments happen via SSH, rollbacks are manual, and teams learn about outages from angry customers.',
    stats: [
      { label: 'Deployments / Week', value: '34', icon: '🚀' },
      { label: 'Success Rate', value: '97.1%', icon: '✅' },
      { label: 'Open Incidents', value: '1', icon: '🔴' },
      { label: 'Avg Deploy Time', value: '3.2 min', icon: '⏱️' },
    ],
    sections: ['Dashboard','Pipelines','Deployments','Environments','Incidents','Uptime'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [24,28,30,31,33,34] },
    useCase: "DevOps & SRE",
    difficulty: "advanced",
    tableColumns: ["Deploy ID","Service Name","Environment","Triggered By","Version","Status"],
    mockRows: [["DEP-001","payment-service","Production","Rahul Mehta","v2.4.1","Success"],["DEP-002","user-auth-api","Staging","Priya Sharma","v1.8.3","Success"],["DEP-003","notification-worker","Production","Arjun Patel","v3.1.0","Failed"],["DEP-004","analytics-service","QA","Kavya Nair","v1.2.0","Success"],["DEP-005","billing-engine","Production","Deepak Singh","v4.0.2","In Progress"],["DEP-006","search-indexer","Staging","Meera Iyer","v2.0.1","Success"],["DEP-007","email-gateway","Production","Rohit Kumar","v1.5.4","Rolled Back"],["DEP-008","report-generator","QA","Ankit Verma","v1.1.0","Success"]],
    features: [{"icon":"🔄","title":"Pipeline Visibility","desc":"Real-time CI/CD pipeline status with stage-level logs and failure diagnosis."},{"icon":"🚀","title":"Deployment Manager","desc":"One-click deploys, canary releases, blue-green, and scheduled maintenance windows."},{"icon":"🌍","title":"Environment Control","desc":"Environment promotion workflow from dev → staging → production with approvals."},{"icon":"↩️","title":"Rollback","desc":"One-click version rollback with health check validation and rollback audit log."},{"icon":"🚨","title":"Incident Alerts","desc":"Automated incident creation on deploy failure with PagerDuty escalation."},{"icon":"📊","title":"Uptime Monitor","desc":"Service uptime tracking with SLA dashboard, downtime log, and MTTR metrics."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"☸️","name":"Kubernetes","purpose":"Container orchestration and deployment target"}],
    integrations: [{"icon":"💬","name":"Slack","purpose":"Deploy notifications, failure alerts, and incident channels"},{"icon":"🔔","name":"PagerDuty","purpose":"On-call escalation routing for production incidents"},{"icon":"☁️","name":"AWS CloudWatch","purpose":"Infrastructure metrics, log aggregation, and alarms"},{"icon":"📧","name":"SendGrid","purpose":"Incident post-mortems and release announcement emails"}]
  },
  {
    id: 'software/tech-docs-wiki',
    name: 'Tech Documentation Wiki', emoji: '📖', short: 'TechDocs',
    tagline: 'Markdown wiki, versioned pages, full-text search, team spaces, API reference, and changelogs.',
    color: '#7c3aed', color2: '#6366f1',
    category: 'Software',
    target: 'Engineering Teams, Open-source Projects, Product Companies, Dev Agencies',
    problem: 'Documentation lives in outdated Google Docs, tribal knowledge stays in Slack, and new hires are lost for weeks.',
    stats: [
      { label: 'Total Pages', value: '648', icon: '📄' },
      { label: 'Team Spaces', value: '12', icon: '🏢' },
      { label: 'Searches / Day', value: '840', icon: '🔍' },
      { label: 'Pages Updated (Week)', value: '47', icon: '✏️' },
    ],
    sections: ['Dashboard','Pages','Spaces','Search','Changelog','Settings'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [520,548,572,601,628,648] },
    useCase: "Knowledge Base",
    difficulty: "starter",
    tableColumns: ["Page ID","Page Title","Author","Space","Last Updated","Status"],
    mockRows: [["PG-001","Getting Started with the Payment API","Priya Sharma","Engineering","03 May 2026","Published"],["PG-002","Database Schema Reference v4.2","Arjun Patel","Engineering","02 May 2026","Published"],["PG-003","Deployment Runbook - Production","Rahul Mehta","DevOps","01 May 2026","Published"],["PG-004","Onboarding Guide for New Engineers","Kavya Nair","HR & People","04 May 2026","Draft"],["PG-005","API Rate Limiting Policy","Deepak Singh","Platform","30 Apr 2026","Published"],["PG-006","Incident Response Playbook","Meera Iyer","SRE","28 Apr 2026","Published"],["PG-007","Product Roadmap H2 2026","Rohit Kumar","Product","03 May 2026","Published"],["PG-008","Security Hardening Checklist","Ankit Verma","Security","05 May 2026","Review"]],
    features: [{"icon":"📝","title":"Markdown Wiki","desc":"Rich markdown editor with tables, code blocks, diagrams, and live preview."},{"icon":"🔄","title":"Version Control","desc":"Full page revision history with diff view, restore, and contributor attribution."},{"icon":"🔍","title":"Full-Text Search","desc":"Elasticsearch-powered search across all pages, code snippets, and comments."},{"icon":"🏢","title":"Team Spaces","desc":"Department-specific spaces with custom permissions and page templates."},{"icon":"🔌","title":"API Reference","desc":"OpenAPI spec renderer with code samples in multiple languages."},{"icon":"📋","title":"Changelog","desc":"Release notes management with versioned changelogs and subscriber notifications."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🔍","name":"Elasticsearch","purpose":"Full-text page content search index"}],
    integrations: [{"icon":"💬","name":"Slack","purpose":"Page update notifications in team channels"},{"icon":"🐙","name":"GitHub","purpose":"Code snippet sync and automatic API doc generation"},{"icon":"📧","name":"SendGrid","purpose":"Weekly digest emails and changelog subscriber updates"},{"icon":"☁️","name":"AWS S3","purpose":"Image uploads, attachments, and media file storage"}]
  },
  {
    id: 'software/code-review-portal',
    name: 'Code Review Portal', emoji: '🔍', short: 'ReviewBoard',
    tagline: 'Pull request workflows, inline comments, approval gates, code quality metrics, and merge controls.',
    color: '#8b5cf6', color2: '#0891b2',
    category: 'Software',
    target: 'Engineering Teams, Dev Agencies, Open-source Maintainers, CTOs',
    problem: 'Code ships without review, inline feedback is lost in chat, and quality metrics are invisible to leadership.',
    stats: [
      { label: 'Open PRs', value: '23', icon: '🔀' },
      { label: 'Avg Review Time', value: '4.1 hrs', icon: '⏱️' },
      { label: 'Merged This Week', value: '61', icon: '✅' },
      { label: 'Code Quality', value: 'A-', icon: '⭐' },
    ],
    sections: ['Dashboard','Pull Requests','My Reviews','Approvals','Metrics','Settings'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [44,50,55,58,60,61] },
    useCase: "Code Quality",
    difficulty: "intermediate",
    tableColumns: ["PR ID","PR Title","Author","Reviewers","Lines Changed","Status"],
    mockRows: [["PR-001","feat: Add JWT refresh token rotation","Arjun Singh","Priya Sharma, Rahul M.","+ 248 / - 12","In Review"],["PR-002","fix: Resolve race condition in payment flow","Priya Sharma","Arjun Singh","+ 34 / - 28","Approved"],["PR-003","refactor: Extract common API middleware","Rahul Mehta","Kavya Nair","+ 180 / - 210","In Review"],["PR-004","feat: Add CSV bulk import with validation","Kavya Nair","Deepak Singh","+ 420 / - 18","In Review"],["PR-005","fix: Dashboard chart NaN on empty dataset","Deepak Singh","Meera Iyer","+ 12 / - 8","Merged"],["PR-006","test: Add unit tests for billing module","Meera Iyer","Rohit Kumar","+ 840 / - 0","Approved"],["PR-007","chore: Upgrade dependencies to Nov 2025","Rohit Kumar","Ankit Verma","+ 42 / - 39","In Review"],["PR-008","feat: Dark mode for admin dashboard","Ankit Verma","Arjun Singh","+ 680 / - 120","Merged"]],
    features: [{"icon":"🔀","title":"PR Dashboard","desc":"All open pull requests with age, reviewer load, and merge readiness overview."},{"icon":"💬","title":"Inline Comments","desc":"Line-level code comments with suggestion blocks and resolution tracking."},{"icon":"🚪","title":"Approval Gates","desc":"Configurable minimum approvers, required reviewers, and auto-dismiss stale approvals."},{"icon":"📊","title":"Code Quality Metrics","desc":"Complexity, duplication, coverage delta, and security hotspot tracking per PR."},{"icon":"🔒","title":"Merge Controls","desc":"Branch protection rules, CI status gates, and conflict prevention enforcement."},{"icon":"📈","title":"Review Analytics","desc":"Review turnaround time, reviewer throughput, and PR size trend dashboards."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"🐙","name":"GitHub","purpose":"PR sync, status checks, and merge webhook integration"},{"icon":"💬","name":"Slack","purpose":"Review request notifications and approval alerts"},{"icon":"📧","name":"SendGrid","purpose":"Review digest emails and team quality reports"},{"icon":"🔍","name":"SonarQube","purpose":"Code quality, security hotspot, and coverage metrics"}]
  },
  {
    id: 'software/software-license-manager',
    name: 'Software License Manager', emoji: '🔐', short: 'LicenseVault',
    tagline: 'Track SaaS subscriptions, seat allocations, renewal alerts, vendor contracts, and spend analytics.',
    color: '#6366f1', color2: '#dc2626',
    category: 'Software',
    target: 'IT Managers, Finance Teams, CIOs, Enterprise Procurement',
    problem: 'Companies pay for unused seats, miss renewal deadlines, and have zero visibility into total SaaS spend.',
    stats: [
      { label: 'Active Licenses', value: '84', icon: '🔐' },
      { label: 'Monthly Spend', value: '₹4.2L', icon: '💰' },
      { label: 'Renewing in 30 days', value: '6', icon: '⏰' },
      { label: 'Unused Seats', value: '127', icon: '⚠️' },
    ],
    sections: ['Dashboard','Licenses','Vendors','Renewals','Spend Analytics','Alerts'],
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [72,75,78,80,82,84] },
    useCase: "SaaS Governance",
    difficulty: "intermediate",
    tableColumns: ["License ID","Product Name","Vendor","Seats Allocated","Renewal Date","Status"],
    mockRows: [["LIC-001","GitHub Enterprise","GitHub Inc.","150 seats","30 Jun 2026","Active"],["LIC-002","Jira Software Cloud","Atlassian","200 seats","15 Sep 2026","Active"],["LIC-003","Slack Business+","Salesforce","250 seats","01 Aug 2026","Active"],["LIC-004","AWS Business Support","Amazon Web Services","N/A (Usage)","31 Mar 2027","Active"],["LIC-005","Figma Organization","Figma Inc.","45 seats","20 May 2026","Renewing Soon"],["LIC-006","Zoom Enterprise","Zoom Video","100 seats","30 Jul 2026","Active"],["LIC-007","SonarQube Developer","SonarSource","10 seats","30 Jun 2026","Renewing Soon"],["LIC-008","Datadog APM Pro","Datadog Inc.","N/A (Hosts)","30 Sep 2026","Active"]],
    features: [{"icon":"📋","title":"License Catalog","desc":"Centralised SaaS inventory with contract terms, billing model, and owner assignment."},{"icon":"👥","title":"Seat Allocation","desc":"Department-wise seat assignment with utilisation rate and unused seat detection."},{"icon":"🔔","title":"Renewal Alerts","desc":"90/60/30-day renewal reminders with budget approval workflow trigger."},{"icon":"📄","title":"Vendor Contracts","desc":"Contract repository with e-signature, SLA terms, and support level details."},{"icon":"📊","title":"Spend Analytics","desc":"Monthly SaaS spend by category, vendor, and department with trend forecasting."},{"icon":"⚠️","title":"Unused Seat Detection","desc":"Last-login-based idle seat detection with deprovisioning recommendation and savings estimate."}],
    stack: [{"icon":"⚛️","name":"React 18","purpose":"Component UI framework"},{"icon":"🟢","name":"Node.js 20","purpose":"REST API runtime"},{"icon":"🐘","name":"PostgreSQL 15","purpose":"Primary relational database"},{"icon":"⚡","name":"Redis 7","purpose":"Session cache & job queue"},{"icon":"🔷","name":"TypeScript 5","purpose":"Type-safe full-stack code"},{"icon":"🐳","name":"Docker","purpose":"Containerised deployment"}],
    integrations: [{"icon":"📧","name":"SendGrid","purpose":"Renewal reminders and spend digest emails to IT managers"},{"icon":"💬","name":"Slack","purpose":"Unused seat alerts and renewal approvals in IT channels"},{"icon":"☁️","name":"AWS S3","purpose":"Contract PDFs, invoices, and compliance document storage"},{"icon":"💳","name":"Razorpay","purpose":"License renewal payments and annual subscription processing"}]
  },
];

// ─── HTML Demo Generator ────────────────────────────────────────────────────────
function generateHTML(sol) {
  const navItems = sol.sections.map((s, i) =>
    `<li><a href="#" onclick="showSection('${s.replace(/\s+/g,'-').toLowerCase()}');return false;" id="nav-${s.replace(/\s+/g,'-').toLowerCase()}" class="${i===0?'active':''}">${s}</a></li>`
  ).join('\n        ');

  const statsHTML = sol.stats.map(s => `
      <div class="stat-card">
        <div class="stat-label">${s.icon} ${s.label}</div>
        <div class="stat-value">${s.value}</div>
      </div>`).join('');

  const tableSection = `
    <div id="section-${sol.sections[1].replace(/\s+/g,'-').toLowerCase()}" class="section hidden">
      <div class="flex items-center justify-between" style="margin-bottom:1.5rem">
        <div>
          <h2 style="font-size:1.25rem;font-weight:700">${sol.sections[1]}</h2>
          <p style="font-size:.875rem;color:var(--color-gray-500)">Manage and track ${sol.sections[1].toLowerCase()}</p>
        </div>
        <button class="btn btn-primary" onclick="EV.toast('Feature coming soon!','info')">+ Add New</button>
      </div>
      <div style="margin-bottom:1rem">
        <input type="text" class="form-input" placeholder="Search ${sol.sections[1].toLowerCase()}..." style="max-width:320px" oninput="searchTable(this.value,'main-table')"/>
      </div>
      <div class="table-wrap">
        <table id="main-table">
          <thead><tr>
            ${sol.tableColumns.map(c=>`<th>${c}</th>`).join('')}<th>Actions</th>
          </tr></thead>
          <tbody>
            ${(sol.mockRows||[]).map((row)=>{
              const statusVal=row[row.length-1];
              const sm={'Active':'badge-success','Completed':'badge-success','Resolved':'badge-success','Verified':'badge-success','Paid':'badge-success','Delivered':'badge-success','Admitted':'badge-success','On Track':'badge-success','Occupied':'badge-success','Booked':'badge-success','Borrowed':'badge-success','Available':'badge-success','Processing':'badge-warning','In Progress':'badge-warning','Pending':'badge-warning','Review':'badge-warning','Open':'badge-warning','Confirmed':'badge-warning','Scheduled':'badge-warning','New Lead':'badge-warning','On Trip':'badge-warning','Low Stock':'badge-warning','Expiring':'badge-warning','Delayed':'badge-warning','Draft':'badge-warning','Critical':'badge-danger','Overdue':'badge-danger','Blocked':'badge-danger','Rejected':'badge-danger','Out of Stock':'badge-danger','Vacant':'badge-danger','Inactive':'badge-danger'};
              const bc=sm[statusVal]||'badge-info';
              return `<tr>${row.map((cell,j)=>j===0?`<td><code style="font-size:.75rem;background:#f3f4f6;padding:2px 6px;border-radius:4px">${cell}</code></td>`:j===row.length-1?`<td><span class="badge ${bc}">${cell}</span></td>`:`<td>${cell}</td>`).join('')}<td><button class="btn btn-outline btn-sm" onclick="EV.toast('Viewing ${row[0]}','info')">View</button> <button class="btn btn-secondary btn-sm" onclick="EV.toast('${row[0]} updated','success')">Edit</button></td></tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;

  const otherSections = sol.sections.slice(2).map(s => `
    <div id="section-${s.replace(/\s+/g,'-').toLowerCase()}" class="section hidden">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.5rem">${s}</h2>
      <div class="card" style="padding:3rem;text-align:center;color:var(--color-gray-400)">
        <div style="font-size:3rem;margin-bottom:1rem">${sol.emoji}</div>
        <p style="font-size:1rem;font-weight:600;color:var(--color-gray-600)">${s} Module</p>
        <p style="margin-top:.5rem">Full ${s.toLowerCase()} functionality for ${sol.name}</p>
        <button class="btn btn-primary" style="margin-top:1.5rem" onclick="EV.toast('${s} module loaded!','success')">Load ${s}</button>
      </div>
    </div>`).join('');

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${sol.name} — Everything Platform</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="../../_shared/css/design-system.css"/>
<style>
.section { animation: fadeIn .2s ease; }
@keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
.stat-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:1rem; margin-bottom:2rem; }
.back-link { display:inline-flex; align-items:center; gap:.5rem; font-size:.875rem; color:var(--color-gray-500); text-decoration:none; margin-bottom:1.5rem; }
.back-link:hover { color:var(--color-primary); }
</style>
</head>
<body>
<div class="app-layout">
  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="sidebar-logo">${sol.emoji} ${sol.short}</div>
    <div style="padding:.5rem .75rem .25rem;font-size:10px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,.35);text-transform:uppercase;margin-top:.5rem">Navigation</div>
    <nav>
      <ul class="sidebar-nav">
        ${navItems}
      </ul>
    </nav>
    <div style="margin-top:auto;padding:1rem 1.5rem;border-top:1px solid rgba(255,255,255,.08)">
      <div style="font-size:.75rem;color:rgba(255,255,255,.4)">Everything Platform</div>
      <div style="font-size:.7rem;color:rgba(255,255,255,.25);margin-top:2px">${sol.category} Solution</div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="main-content">
    <a href="../../index.html" class="back-link">← Back to Catalog</a>

    <!-- Dashboard -->
    <div id="section-dashboard" class="section">
      <div class="topbar">
        <div>
          <div class="topbar-title">${sol.name}</div>
          <div class="topbar-sub">${sol.tagline}</div>
        </div>
        <div style="display:flex;gap:.75rem;align-items:center">
          <button class="btn btn-outline btn-sm" data-theme-toggle>🌙 Theme</button>
          <button class="btn btn-primary btn-sm" onclick="EV.toast('Report generated!','success')">📊 Export</button>
        </div>
      </div>

      <!-- Stats -->
      <div class="stat-grid">
        ${statsHTML}
      </div>

      <!-- Chart + Quick Actions -->
      <div style="display:grid;grid-template-columns:2fr 1fr;gap:1.5rem;margin-top:1rem">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Activity Overview</div>
            <div class="card-sub">Performance for last 6 periods</div>
          </div>
          <canvas id="mainChart" width="500" height="200" style="width:100%;height:200px"></canvas>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Quick Actions</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:.75rem">
            ${sol.sections.slice(1, 5).map(s =>
              `<button class="btn btn-outline" onclick="showSection('${s.replace(/\s+/g,'-').toLowerCase()}')" style="justify-content:flex-start">${sol.emoji} Go to ${s}</button>`
            ).join('')}
            <button class="btn btn-primary" onclick="EV.toast('Welcome to ${sol.name}!','success')">🚀 Get Started</button>
          </div>
        </div>
      </div>
    </div>

    ${tableSection}
    ${otherSections}
  </main>
</div>

<script src="../../_shared/js/demo-utils.js"></script>
<script>
const sections = ${JSON.stringify(sol.sections.map(s => s.replace(/\s+/g,'-').toLowerCase()))};

function showSection(id) {
  sections.forEach(s => {
    const el = document.getElementById('section-'+s);
    const nav = document.getElementById('nav-'+s);
    if(el) el.classList.add('hidden');
    if(nav) nav.classList.remove('active');
  });
  const target = document.getElementById('section-'+id);
  const navTarget = document.getElementById('nav-'+id);
  if(target) target.classList.remove('hidden');
  if(navTarget) navTarget.classList.add('active');
}

function searchTable(q, tableId) {
  const rows = document.querySelectorAll('#'+tableId+' tbody tr');
  rows.forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(q.toLowerCase()) ? '' : 'none';
  });
}

// Draw bar chart
window.addEventListener('load', () => {
  const labels = ${JSON.stringify(sol.chartData.labels)};
  const data   = ${JSON.stringify(sol.chartData.data)};
  const canvas = document.getElementById('mainChart');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.clientWidth || 500;
  const H = 200;
  canvas.width = W; canvas.height = H;
  const pad = {top:20,right:20,bottom:40,left:60};
  const chartW = W-pad.left-pad.right;
  const chartH = H-pad.top-pad.bottom;
  const max = Math.max(...data)*1.15||1;
  const barW = (chartW/labels.length)*0.55;
  const gap   = chartW/labels.length;
  const bg = getComputedStyle(document.body).backgroundColor || '#f9fafb';
  ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);
  // Grid
  ctx.strokeStyle='#e5e7eb'; ctx.lineWidth=1;
  for(let i=0;i<=4;i++){
    const y=pad.top+(chartH/4)*i;
    ctx.beginPath(); ctx.moveTo(pad.left,y); ctx.lineTo(W-pad.right,y); ctx.stroke();
    ctx.fillStyle='#9ca3af'; ctx.font='10px Inter,sans-serif'; ctx.textAlign='right';
    ctx.fillText(Math.round(max*(1-i/4)).toLocaleString('en-IN'), pad.left-6, y+4);
  }
  // Bars
  labels.forEach((lbl,i)=>{
    const bH=(data[i]/max)*chartH;
    const x=pad.left+gap*i+(gap-barW)/2;
    const y=pad.top+chartH-bH;
    ctx.fillStyle='${sol.color}';
    ctx.beginPath();
    if(ctx.roundRect) ctx.roundRect(x,y,barW,bH,[4,4,0,0]); else ctx.rect(x,y,barW,bH);
    ctx.fill();
    ctx.fillStyle='#6b7280'; ctx.font='11px Inter,sans-serif'; ctx.textAlign='center';
    ctx.fillText(lbl, x+barW/2, H-pad.bottom+16);
  });
});
</script>
</body>
</html>`;
}

// ─── Markdown Generators ────────────────────────────────────────────────────────
function generateREADME(sol) {
  return `# ${sol.name}

> ${sol.tagline}

**Category:** ${sol.category} | **Status:** Demo Ready | **Tier:** 2

---

## Overview

The ${sol.name} is a comprehensive solution designed for ${sol.target}. It addresses the core challenge of ${sol.problem.toLowerCase()}

This solution provides a fully interactive HTML prototype demonstrating the complete workflow — from onboarding to reporting — without requiring any backend setup.

## Problem Statement

${sol.problem} This results in operational inefficiencies, revenue loss, and poor user experience.

## Key Features

${sol.sections.slice(1).map(s => `- **${s}**: Fully functional ${s.toLowerCase()} module with data management and reporting`).join('\n')}
- **Dashboard**: Real-time KPI overview with charts and quick actions
- **Search & Filter**: Instant search across all data tables
- **Export**: One-click data export to CSV/PDF
- **Notifications**: In-app toast notifications and email/SMS alerts
- **Dark Mode**: Built-in dark/light theme toggle
- **Responsive**: Works on desktop, tablet, and mobile

## Demo

Open \`index.html\` in any modern browser. No server required.

\`\`\`bash
# Simply open the file
open index.html
# or
python3 -m http.server 3000  # then visit http://localhost:3000
\`\`\`

## Tech Stack (Production Recommendation)

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript + Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | PostgreSQL |
| Cache | Redis |
| Auth | JWT + OAuth2 |
| Hosting | AWS / GCP / Azure |

## Folder Structure

\`\`\`
${sol.id}/
├── index.html          # Interactive demo
├── README.md           # This file
├── PITCH.md            # Business pitch document
├── FEATURES.md         # Feature list with priorities
├── ROADMAP.md          # Development roadmap
├── TECH-STACK.md       # Architecture guide
└── docs/               # Additional documentation
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/new-feature\`
3. Commit changes: \`git commit -m 'Add new feature'\`
4. Push and create a Pull Request

## License

MIT License — Free to use for commercial and personal projects.

---

*Part of the [Everything Platform](../../index.html) — Enterprise Solution Catalog*
`;
}

function generatePITCH(sol) {
  return `# ${sol.name} — Business Pitch

---

## Executive Summary

The **${sol.name}** is an enterprise-grade digital solution for ${sol.target}. It eliminates manual, paper-based processes and replaces them with a unified, real-time management platform — delivering measurable ROI within the first quarter of deployment.

---

## Problem Statement

${sol.problem}

**Current Pain Points:**
- Manual data entry leading to errors and duplication
- No real-time visibility into operations and KPIs
- Disconnected tools (WhatsApp, Excel, paper registers)
- Compliance gaps and audit trail missing
- High dependency on individual staff knowledge

**Market Context:**
India has over 1 million businesses in the ${sol.category} sector. Less than 15% have adopted purpose-built software. The remaining 85% rely on legacy tools, creating a massive digitization opportunity.

---

## Our Solution

A comprehensive, cloud-ready platform that manages ${sol.sections.slice(1).map(s => s.toLowerCase()).join(', ')} — all from a single dashboard.

**What makes it different:**
- Purpose-built for ${sol.target}
- Works offline and online
- No training required — intuitive UI
- Configurable workflows
- Real-time notifications and alerts

---

## Key Features

${sol.sections.map((s,i) => `${i+1}. **${s}**: ${i===0 ? 'Real-time KPI tracking with visual charts and alerts' : `Complete ${s.toLowerCase()} lifecycle management`}`).join('\n')}

---

## Target Clients

| Segment | Size | Annual Value |
|---------|------|-------------|
| Small ${sol.category} Business | 1–10 users | ₹30,000–60,000/yr |
| Mid-size Enterprise | 10–50 users | ₹1.2L–3.6L/yr |
| Large Enterprise | 50+ users | ₹6L–24L/yr |

**Ideal First Customers:** ${sol.target}

---

## ROI & Benefits

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Admin hours/week | 20 hrs | 5 hrs | **75% reduction** |
| Data errors/month | 45 | 3 | **93% reduction** |
| Report generation time | 4 hours | 5 minutes | **98% faster** |
| Compliance readiness | 40% | 95% | **2.4x improvement** |

**Payback Period:** 3–6 months

---

## Implementation Timeline

| Phase | Duration | Deliverables |
|-------|----------|-------------|
| Discovery & Setup | Week 1–2 | Requirements, data migration plan |
| Core Implementation | Week 3–6 | All P0 features live |
| Training & UAT | Week 7–8 | Staff training, bug fixes |
| Go-Live | Week 9 | Production launch |
| Hypercare | Week 10–12 | Support, optimizations |

---

## Pricing Model

| Plan | Users | Price/Month | Features |
|------|-------|-------------|---------|
| Starter | Up to 5 | ₹2,499 | Core modules |
| Professional | Up to 20 | ₹7,499 | All modules + Reports |
| Enterprise | Unlimited | ₹19,999 | Custom workflows + API + SLA |

*Annual billing: 2 months free*

---

## Why Now?

- Digital India initiative pushing SME digitization
- GST compliance requiring digital audit trails
- Post-COVID preference for digital-first operations
- Affordable cloud infrastructure enabling SaaS at ₹X/month

---

*Part of the [Everything Platform](../../index.html) — Enterprise Solution Catalog*
`;
}

function generateFEATURES(sol) {
  return `# ${sol.name} — Feature List

**Version:** 1.0 | **Last Updated:** ${new Date().toLocaleDateString('en-IN')}

---

## Priority Definitions

| Priority | Description | Must Ship? |
|----------|-------------|-----------|
| **P0** | Must Have — MVP blocker | Yes, before launch |
| **P1** | Should Have — High value | Yes, within 3 months |
| **P2** | Nice to Have — Enhancement | Roadmap item |

---

## P0 — Must Have (MVP)

${sol.sections.slice(1).map((s,i) => `### ${i+1}. ${s} Module
- Create, read, update, delete (CRUD) for all ${s.toLowerCase()} records
- Search and filter by multiple criteria
- Status management with workflow transitions
- Basic reporting for ${s.toLowerCase()}
- Data validation and error handling
`).join('')}
### Core Platform
- User authentication (login/logout)
- Role-based access control (Admin/Manager/Staff)
- Dashboard with key metrics
- Audit log for all changes
- Data backup and restore

---

## P1 — Should Have

- **Notifications**: SMS/Email alerts for critical events
- **Bulk Operations**: Import/export via Excel/CSV
- **Advanced Reports**: Date range, custom filters, PDF export
- **Multi-branch Support**: Manage multiple locations
- **Mobile Responsive**: Full functionality on smartphones
- **Dark Mode**: System-level theme support
- **API Access**: REST API for integrations
- **Custom Fields**: Add business-specific data fields
- **Scheduled Reports**: Auto-email weekly/monthly summaries
- **Approval Workflows**: Multi-level approval chains

---

## P2 — Nice to Have

- **Mobile App**: Native iOS/Android application
- **AI Insights**: Anomaly detection and trend predictions
- **WhatsApp Integration**: Notifications via WhatsApp Business API
- **Barcode/QR Support**: Scan-based data entry
- **Offline Mode**: Works without internet, syncs when connected
- **Multi-language**: Hindi, Tamil, Telugu, Marathi support
- **Custom Branding**: White-label with client logo/colors
- **SSO Integration**: Google/Microsoft login
- **Webhook Support**: Real-time event notifications to external systems
- **Advanced Analytics**: Business intelligence dashboards

---

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Page Load Time | < 2 seconds |
| Uptime SLA | 99.9% |
| Data Encryption | AES-256 at rest, TLS 1.3 in transit |
| Concurrent Users | 500+ |
| Data Retention | 7 years |
| GDPR/DPDP Compliance | Required |

---

*Part of the [Everything Platform](../../index.html)*
`;
}

function generateROADMAP(sol) {
  return `# ${sol.name} — Development Roadmap

---

## Overview

| Phase | Name | Duration | Status |
|-------|------|----------|--------|
| Phase 1 | MVP | 6 weeks | Planning |
| Phase 2 | Enhanced | 8 weeks | Roadmap |
| Phase 3 | Advanced | 6 weeks | Roadmap |

---

## Phase 1 — MVP (Weeks 1–6)

**Goal:** Launch a working system that handles the core daily workflow.

### Week 1–2: Foundation
- [ ] Project setup, CI/CD pipeline
- [ ] Database schema design
- [ ] Authentication system (login, roles, permissions)
- [ ] Base UI components and design system

### Week 3–4: Core Modules
${sol.sections.slice(1, 4).map(s => `- [ ] ${s} module — CRUD + basic workflow`).join('\n')}
- [ ] Dashboard with live KPI widgets
- [ ] Basic search and filter

### Week 5–6: Polish & Launch
- [ ] Data validation and error handling
- [ ] Basic reports (PDF/CSV export)
- [ ] User guide and training docs
- [ ] UAT with pilot client
- [ ] Production deployment

**MVP Deliverable:** Fully functional core system deployed and tested.

---

## Phase 2 — Enhanced (Weeks 7–14)

**Goal:** Add notifications, multi-user capabilities, and advanced reporting.

### Modules
${sol.sections.slice(4).map(s => `- [ ] ${s} module — full feature set`).join('\n')}
- [ ] SMS/Email notification engine (Twilio + SendGrid)
- [ ] Bulk import/export (Excel/CSV)
- [ ] Advanced report builder with date filters
- [ ] Multi-branch/location support
- [ ] Mobile-responsive optimization
- [ ] API documentation (Swagger)
- [ ] Approval workflow engine

**Phase 2 Deliverable:** Enterprise-ready platform with integrations.

---

## Phase 3 — Advanced (Weeks 15–20)

**Goal:** Analytics, mobile app, AI features, and ecosystem integrations.

- [ ] Native mobile app (React Native — iOS + Android)
- [ ] Offline mode with background sync
- [ ] AI-powered insights and anomaly detection
- [ ] WhatsApp Business API integration
- [ ] Advanced analytics and BI dashboards
- [ ] Custom workflow builder (no-code)
- [ ] Marketplace/API ecosystem
- [ ] White-label customization
- [ ] Multi-language support (Hindi, Tamil, Telugu)
- [ ] SOC 2 / ISO 27001 compliance audit

**Phase 3 Deliverable:** Market-leading, AI-enhanced platform.

---

## Release Schedule

\`\`\`
Week:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
       |--Phase 1 MVP---------|---Phase 2 Enhanced---------|--Phase 3 Advanced--|
       ^                      ^                             ^
       Start               Beta Launch                  V2 Launch
\`\`\`

---

*Part of the [Everything Platform](../../index.html)*
`;
}

function generateTECHSTACK(sol) {
  return `# ${sol.name} — Technical Architecture

---

## Architecture Overview

\`\`\`
┌─────────────────────────────────────────────┐
│                  CLIENTS                    │
│   Browser (React)  │  Mobile (React Native) │
└────────────┬────────────────────┬───────────┘
             │ HTTPS/WSS          │
┌────────────▼────────────────────▼───────────┐
│              API GATEWAY (Kong/Nginx)        │
│         Rate Limiting │ Auth │ Routing       │
└────────────┬──────────────────────┬──────────┘
             │                      │
┌────────────▼──────────┐  ┌────────▼──────────┐
│   Core API Service    │  │  Background Jobs   │
│   (Node.js/Express)   │  │  (Bull + Redis)    │
└────────────┬──────────┘  └────────┬──────────┘
             │                      │
┌────────────▼──────────────────────▼──────────┐
│                  DATA LAYER                  │
│  PostgreSQL (Primary)  │  Redis (Cache/Queue) │
│  S3 (File Storage)     │  Elasticsearch (Search)│
└─────────────────────────────────────────────┘
             │
┌────────────▼──────────────────────────────────┐
│              EXTERNAL SERVICES                │
│  Twilio (SMS) │ SendGrid (Email) │ Razorpay    │
└───────────────────────────────────────────────┘
\`\`\`

---

## Frontend Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.x | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| React Query | 5.x | Data fetching + caching |
| React Hook Form | 7.x | Form management |
| Recharts | 2.x | Data visualization |
| React Router | 6.x | Client-side routing |
| Vite | 5.x | Build tool |

---

## Backend Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 20.x LTS | Runtime |
| Express.js | 4.x | HTTP framework |
| TypeScript | 5.x | Type safety |
| Prisma | 5.x | ORM |
| Passport.js | — | Authentication |
| Bull | 4.x | Job queues |
| Winston | — | Logging |
| Zod | — | Validation |

---

## Database

| Database | Use Case |
|---------|---------|
| **PostgreSQL 15** | Primary data store — transactional data |
| **Redis 7** | Session cache, job queues, rate limiting |
| **AWS S3** | File and document storage |
| **Elasticsearch** | Full-text search |

---

## Infrastructure

| Component | Tool | Provider |
|-----------|------|---------|
| Cloud | EC2 / Cloud Run | AWS / GCP |
| Container | Docker + Compose | — |
| Orchestration | Kubernetes (EKS) | AWS |
| CI/CD | GitHub Actions | GitHub |
| Monitoring | Prometheus + Grafana | Self-hosted |
| APM | Datadog / New Relic | SaaS |
| CDN | CloudFront | AWS |
| DNS | Route 53 | AWS |

---

## Security

- **Authentication**: JWT (15-min expiry) + Refresh Tokens (7 days)
- **Authorization**: RBAC with row-level security in PostgreSQL
- **Encryption**: AES-256 at rest, TLS 1.3 in transit
- **API Security**: Rate limiting, CORS, Helmet.js, input sanitization
- **Secrets Management**: AWS Secrets Manager / HashiCorp Vault
- **Vulnerability Scanning**: Snyk, OWASP ZAP in CI pipeline
- **Compliance**: DPDP Act (India), GDPR-ready

---

## Performance Targets

| Metric | Target |
|--------|--------|
| API Response Time (p95) | < 200ms |
| Page Load Time | < 1.5s |
| Database Query Time (p95) | < 50ms |
| Uptime SLA | 99.9% |
| Max Concurrent Users | 1,000+ |

---

*Part of the [Everything Platform](../../index.html)*
`;
}

// ─── Template Detail Page ────────────────────────────────────────────────────────
function generateTEMPLATEPAGE(sol) {
  const catLabel = sol.id.split('/')[0].replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
  const diffDots = {'starter':'●○○','intermediate':'●●○','advanced':'●●●'}[sol.difficulty||'intermediate']||'●●○';
  const related = SOLUTIONS.filter(s=>!s.skip && s.id!==sol.id && s.id.split('/')[0]===sol.id.split('/')[0]).slice(0,3);
  const extServices = (sol.integrations||[]).map(i=>i.name).join(' / ') || 'SendGrid / Twilio / Razorpay';
  const envVars = (sol.integrations||[]).map(i=>`${i.name.toUpperCase().replace(/[^A-Z0-9]/g,'_')}_API_KEY=`).join('\n');
  const stackPills = (sol.stack||[]).map(t=>`<span class="tp-pill">${t.icon} ${t.name}</span>`).join('');
  const featureCards = (sol.features||[]).map(f=>`<div class="tp-feat-card"><div class="tp-feat-icon">${f.icon}</div><div class="tp-feat-title">${f.title}</div><div class="tp-feat-desc">${f.desc}</div></div>`).join('');
  const stackCards = (sol.stack||[]).map(t=>`<div class="tp-stack-card"><div class="tp-stack-icon">${t.icon}</div><div><div class="tp-stack-name">${t.name}</div><div class="tp-stack-purpose">${t.purpose}</div></div></div>`).join('');
  const integCards = (sol.integrations||[]).map(i=>`<div class="tp-integ-card"><div class="tp-integ-icon">${i.icon}</div><div><div class="tp-integ-name">${i.name}</div><div class="tp-integ-why">${i.purpose}</div></div></div>`).join('');
  const relCards = related.map(r=>`<a href="../${r.id.split('/')[1]||r.id}/template.html" class="tp-rel-card"><div class="tp-rel-icon">${r.icon}</div><div class="tp-rel-name">${r.name}</div><div class="tp-rel-tag">${r.tagline||r.desc.slice(0,60)+'…'}</div><span class="tp-rel-cta">View Template →</span></a>`).join('');
  const sideIntegList = (sol.integrations||[]).map(i=>`<div class="tp-side-integ">${i.icon} ${i.name}</div>`).join('');
  const bulletFeats = (sol.features||[]).slice(0,4).map(f=>`<li>${f.icon} ${f.title}</li>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${sol.name} — Template | Everything Platform</title>
<link rel="stylesheet" href="../../_shared/css/design-system.css">
<style>
:root{--tp-bg:#fafafa;--tp-bg2:#ffffff;--tp-border:#e5e7eb;--tp-text1:#111827;--tp-text2:#6b7280;--tp-accent:#FA5D29;--tp-nav:60px;}
*{box-sizing:border-box;margin:0;padding:0;}
body{background:var(--tp-bg);color:var(--tp-text1);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding-top:var(--tp-nav);}
a{color:inherit;text-decoration:none;}
/* NAV */
.tp-nav{position:fixed;top:0;left:0;right:0;height:var(--tp-nav);background:#fff;border-bottom:1px solid var(--tp-border);display:flex;align-items:center;justify-content:space-between;padding:0 2rem;z-index:100;}
.tp-nav-back{font-size:.8rem;color:var(--tp-text2);display:flex;align-items:center;gap:.4rem;transition:color 150ms;}
.tp-nav-back:hover{color:var(--tp-accent);}
.tp-nav-title{font-size:.9rem;font-weight:600;display:flex;align-items:center;gap:.5rem;}
.tp-nav-demo{font-size:.78rem;font-weight:600;background:var(--tp-accent);color:#fff;padding:.35rem .9rem;border-radius:6px;transition:opacity 150ms;}
.tp-nav-demo:hover{opacity:.85;}
/* HERO */
.tp-hero{display:grid;grid-template-columns:55fr 45fr;gap:3rem;align-items:center;min-height:520px;max-width:1200px;margin:0 auto;padding:4rem 2rem;}
.tp-hero-cat{display:inline-flex;gap:.5rem;align-items:center;margin-bottom:1rem;}
.tp-cat-badge{font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;background:var(--tp-accent);color:#fff;padding:.22rem .55rem;border-radius:4px;}
.tp-diff-badge{font-size:.68rem;text-transform:uppercase;letter-spacing:.06em;border:1px solid var(--tp-border);color:var(--tp-text2);padding:.22rem .55rem;border-radius:4px;}
.tp-hero h1{font-size:2.25rem;font-weight:800;line-height:1.2;margin-bottom:.875rem;color:var(--tp-text1);}
.tp-hero-desc{font-size:1rem;color:var(--tp-text2);line-height:1.6;margin-bottom:1.25rem;}
.tp-hero-feats{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.35rem .75rem;margin-bottom:1.5rem;font-size:.85rem;color:var(--tp-text2);}
.tp-hero-feats li::before{content:'✓ ';color:var(--tp-accent);font-weight:700;}
.tp-hero-actions{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:1.5rem;}
.tp-btn-primary{font-size:.85rem;font-weight:600;background:var(--tp-accent);color:#fff;padding:.55rem 1.25rem;border-radius:7px;transition:opacity 150ms;}
.tp-btn-primary:hover{opacity:.85;}
.tp-btn-ghost{font-size:.85rem;font-weight:500;border:1px solid var(--tp-border);color:var(--tp-text2);padding:.55rem 1.25rem;border-radius:7px;transition:border-color 150ms,color 150ms;}
.tp-btn-ghost:hover{border-color:var(--tp-text2);color:var(--tp-text1);}
.tp-stack-pills{display:flex;flex-wrap:wrap;gap:.4rem;}
.tp-pill{font-size:.7rem;background:#f3f4f6;border:1px solid var(--tp-border);color:var(--tp-text2);padding:.22rem .55rem;border-radius:5px;}
/* IFRAME PREVIEW */
.tp-preview-wrap{background:#fff;border:1px solid var(--tp-border);border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.07);position:relative;}
.tp-preview-bar{background:#f9fafb;border-bottom:1px solid var(--tp-border);padding:.5rem .75rem;display:flex;align-items:center;gap:.5rem;}
.tp-preview-dot{width:10px;height:10px;border-radius:50%;}
.tp-preview-url{flex:1;background:#fff;border:1px solid var(--tp-border);border-radius:5px;font-size:.68rem;color:var(--tp-text2);padding:.2rem .5rem;text-align:center;}
.tp-iframe{width:100%;height:420px;border:none;display:block;transform-origin:top left;transform:scale(0.72);width:138.9%;height:583px;margin-bottom:-166px;}
.tp-preview-label{position:absolute;bottom:.75rem;right:.75rem;font-size:.62rem;background:rgba(0,0,0,.6);color:#fff;padding:.2rem .5rem;border-radius:4px;letter-spacing:.04em;text-transform:uppercase;}
/* SECTIONS */
.tp-section{max-width:1200px;margin:0 auto;padding:3.5rem 2rem;}
.tp-section-title{font-size:1.4rem;font-weight:700;margin-bottom:.4rem;}
.tp-section-sub{font-size:.9rem;color:var(--tp-text2);margin-bottom:2rem;}
/* WHAT YOU'LL BUILD */
.tp-feats{background:#fff;border-top:1px solid var(--tp-border);border-bottom:1px solid var(--tp-border);}
.tp-feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}
.tp-feat-card{background:#fafafa;border:1px solid var(--tp-border);border-radius:10px;padding:1.25rem;}
.tp-feat-icon{font-size:1.5rem;margin-bottom:.6rem;}
.tp-feat-title{font-size:.9rem;font-weight:700;margin-bottom:.35rem;}
.tp-feat-desc{font-size:.8rem;color:var(--tp-text2);line-height:1.5;}
/* ARCHITECTURE */
.tp-arch{background:#fff;border-top:1px solid var(--tp-border);border-bottom:1px solid var(--tp-border);}
.tp-arch-diagram{display:flex;flex-direction:column;gap:.5rem;font-family:monospace;}
.tp-arch-row{display:flex;align-items:center;gap:.4rem;flex-wrap:wrap;}
.tp-arch-box{border:1px solid var(--tp-border);background:#fff;border-radius:7px;padding:.5rem .875rem;font-size:.78rem;font-weight:600;white-space:nowrap;}
.tp-arch-arrow{color:#9ca3af;font-size:.78rem;padding:0 .1rem;}
.tp-arch-step{width:18px;height:18px;background:var(--tp-accent);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;flex-shrink:0;}
/* 2-COL LAYOUT */
.tp-main{max-width:1200px;margin:0 auto;padding:3rem 2rem;display:grid;grid-template-columns:1fr 280px;gap:3rem;align-items:start;}
/* STACK GRID */
.tp-stack-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.875rem;margin-bottom:3rem;}
.tp-stack-card{background:#fff;border:1px solid var(--tp-border);border-radius:9px;padding:1rem;display:flex;align-items:flex-start;gap:.75rem;}
.tp-stack-icon{font-size:1.4rem;flex-shrink:0;}
.tp-stack-name{font-size:.85rem;font-weight:700;margin-bottom:.2rem;}
.tp-stack-purpose{font-size:.75rem;color:var(--tp-text2);}
/* INTEGRATIONS */
.tp-integ-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.875rem;margin-bottom:3rem;}
.tp-integ-card{background:#fff;border:1px solid var(--tp-border);border-radius:9px;padding:1rem;display:flex;align-items:flex-start;gap:.75rem;}
.tp-integ-icon{font-size:1.3rem;flex-shrink:0;}
.tp-integ-name{font-size:.85rem;font-weight:700;margin-bottom:.2rem;}
.tp-integ-why{font-size:.75rem;color:var(--tp-text2);line-height:1.45;}
/* GETTING STARTED */
.tp-gs-step{display:flex;gap:1rem;margin-bottom:1.5rem;align-items:flex-start;}
.tp-gs-num{width:28px;height:28px;background:var(--tp-accent);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;flex-shrink:0;margin-top:.1rem;}
.tp-gs-body{flex:1;}
.tp-gs-title{font-size:.9rem;font-weight:700;margin-bottom:.4rem;}
.tp-gs-desc{font-size:.8rem;color:var(--tp-text2);margin-bottom:.5rem;}
.tp-code{background:#111827;color:#e5e7eb;border-radius:8px;padding:1rem 1.25rem;font-size:.78rem;font-family:'Courier New',monospace;line-height:1.6;overflow-x:auto;white-space:pre;}
.tp-code .cm{color:#6b7280;}
/* FILE TREE */
.tp-filetree{background:#111827;color:#e5e7eb;border-radius:8px;padding:1.25rem 1.5rem;font-size:.78rem;font-family:'Courier New',monospace;line-height:1.8;margin-bottom:3rem;}
.tp-filetree .dir{color:#93c5fd;}.tp-filetree .file{color:#d1d5db;}.tp-filetree .comment{color:#6b7280;}
/* ASIDE */
.tp-aside{position:sticky;top:80px;}
.tp-aside-card{background:#fff;border:1px solid var(--tp-border);border-radius:12px;padding:1.5rem;margin-bottom:1rem;}
.tp-aside-emoji{font-size:2rem;margin-bottom:.5rem;}
.tp-aside-name{font-size:1rem;font-weight:700;margin-bottom:.2rem;}
.tp-aside-cat{font-size:.75rem;color:var(--tp-text2);margin-bottom:1rem;}
.tp-aside-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;font-size:.8rem;}
.tp-aside-label{color:var(--tp-text2);}
.tp-aside-val{font-weight:600;}
.tp-aside-pills{display:flex;flex-wrap:wrap;gap:.3rem;margin-top:.25rem;}
.tp-aside-btn{display:block;width:100%;text-align:center;font-size:.85rem;font-weight:600;background:var(--tp-accent);color:#fff;padding:.65rem;border-radius:7px;margin-top:1rem;transition:opacity 150ms;}
.tp-aside-btn:hover{opacity:.85;}
.tp-aside-link{display:block;text-align:center;font-size:.78rem;color:var(--tp-text2);margin-top:.75rem;}
.tp-aside-link:hover{color:var(--tp-text1);}
.tp-side-integ{font-size:.78rem;color:var(--tp-text2);padding:.3rem 0;border-bottom:1px solid var(--tp-border);}
.tp-side-integ:last-child{border:none;}
/* RELATED */
.tp-related{background:#fff;border-top:1px solid var(--tp-border);}
.tp-rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;}
.tp-rel-card{background:#fafafa;border:1px solid var(--tp-border);border-radius:10px;padding:1.25rem;display:flex;flex-direction:column;gap:.4rem;transition:box-shadow 200ms;}
.tp-rel-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.08);}
.tp-rel-icon{font-size:1.6rem;}
.tp-rel-name{font-size:.9rem;font-weight:700;}
.tp-rel-tag{font-size:.78rem;color:var(--tp-text2);line-height:1.4;flex:1;}
.tp-rel-cta{font-size:.78rem;font-weight:600;color:var(--tp-accent);margin-top:.25rem;}
/* FOOTER */
.tp-footer{text-align:center;padding:2rem;font-size:.78rem;color:var(--tp-text2);border-top:1px solid var(--tp-border);}
@media(max-width:900px){
  .tp-hero{grid-template-columns:1fr;}.tp-preview-wrap{display:none;}
  .tp-main{grid-template-columns:1fr;}.tp-aside{position:static;}
  .tp-feat-grid{grid-template-columns:1fr 1fr;}.tp-rel-grid{grid-template-columns:1fr 1fr;}
  .tp-stack-grid{grid-template-columns:1fr 1fr;}
}
@media(max-width:600px){
  .tp-feat-grid,.tp-rel-grid,.tp-integ-grid,.tp-stack-grid{grid-template-columns:1fr;}
}
</style>
</head>
<body>

<!-- NAV -->
<nav class="tp-nav">
  <a href="../../index.html" class="tp-nav-back">← Everything Catalog</a>
  <div class="tp-nav-title">${sol.icon} ${sol.name}</div>
  <a href="index.html" class="tp-nav-demo">Live Demo ↗</a>
</nav>

<!-- HERO -->
<section class="tp-hero">
  <div>
    <div class="tp-hero-cat">
      <span class="tp-cat-badge">${catLabel}</span>
      <span class="tp-diff-badge">${sol.difficulty||'intermediate'}</span>
    </div>
    <h1>${sol.name}</h1>
    <p class="tp-hero-desc">${sol.tagline||sol.desc}</p>
    <ul class="tp-hero-feats">
      ${bulletFeats}
    </ul>
    <div class="tp-hero-actions">
      <a href="index.html" class="tp-btn-primary">▶ Live Demo</a>
      <a href="README.md" class="tp-btn-ghost">📖 Docs</a>
    </div>
    <div class="tp-stack-pills">${stackPills}</div>
  </div>
  <div class="tp-preview-wrap">
    <div class="tp-preview-bar">
      <div class="tp-preview-dot" style="background:#ef4444"></div>
      <div class="tp-preview-dot" style="background:#f59e0b"></div>
      <div class="tp-preview-dot" style="background:#22c55e"></div>
      <div class="tp-preview-url">localhost:3000 — ${sol.name}</div>
    </div>
    <iframe src="index.html" class="tp-iframe" title="${sol.name} preview" scrolling="no"></iframe>
    <div class="tp-preview-label">Interactive Demo</div>
  </div>
</section>

<!-- WHAT YOU'LL BUILD -->
<section class="tp-feats">
  <div class="tp-section">
    <div class="tp-section-title">What You'll Build</div>
    <div class="tp-section-sub">Six production-ready modules included out of the box</div>
    <div class="tp-feat-grid">${featureCards}</div>
  </div>
</section>

<!-- ARCHITECTURE -->
<section class="tp-arch">
  <div class="tp-section">
    <div class="tp-section-title">Architecture Overview</div>
    <div class="tp-section-sub">Scalable 3-tier architecture designed for production workloads</div>
    <div class="tp-arch-diagram">
      <div class="tp-arch-row">
        <div class="tp-arch-box">🌐 Browser / PWA</div>
        <div class="tp-arch-arrow"><span class="tp-arch-step">1</span> →</div>
        <div class="tp-arch-box">⚡ CDN / Nginx</div>
        <div class="tp-arch-arrow"><span class="tp-arch-step">2</span> →</div>
        <div class="tp-arch-box">🔀 API Gateway</div>
        <div class="tp-arch-arrow"><span class="tp-arch-step">3</span> →</div>
        <div class="tp-arch-box">🖥️ App Server (Node.js)</div>
      </div>
      <div class="tp-arch-row" style="margin-left:12rem;">
        <div class="tp-arch-arrow">↓ <span class="tp-arch-step">4</span></div>
        <div style="width:4rem"></div>
        <div class="tp-arch-arrow">↓ <span class="tp-arch-step">5</span></div>
      </div>
      <div class="tp-arch-row" style="margin-left:10.5rem;">
        <div class="tp-arch-box">⚡ Redis Cache</div>
        <div style="width:2rem"></div>
        <div class="tp-arch-box">🐘 PostgreSQL DB</div>
      </div>
      <div class="tp-arch-row" style="margin-left:12rem;">
        <div class="tp-arch-arrow">↓ <span class="tp-arch-step">6</span></div>
        <div style="width:4rem"></div>
        <div class="tp-arch-arrow">↓ <span class="tp-arch-step">7</span></div>
      </div>
      <div class="tp-arch-row" style="margin-left:9.5rem;">
        <div class="tp-arch-box">⚙️ Background Jobs</div>
        <div style="width:1rem"></div>
        <div class="tp-arch-box">☁️ S3 / File Store</div>
      </div>
      <div class="tp-arch-row" style="margin-left:9.5rem;">
        <div class="tp-arch-arrow">↓ <span class="tp-arch-step">8</span></div>
      </div>
      <div class="tp-arch-row" style="margin-left:8.5rem;">
        <div class="tp-arch-box" style="border-color:var(--tp-accent);color:var(--tp-accent);">🔌 External: ${extServices}</div>
      </div>
    </div>
  </div>
</section>

<!-- MAIN 2-COL -->
<div class="tp-main">
  <article>
    <!-- TECH STACK -->
    <div class="tp-section-title" style="margin-bottom:.4rem">Tech Stack</div>
    <div class="tp-section-sub">Battle-tested tools chosen for reliability and developer experience</div>
    <div class="tp-stack-grid">${stackCards}</div>

    <!-- INTEGRATIONS -->
    <div class="tp-section-title" style="margin-bottom:.4rem">Integrations</div>
    <div class="tp-section-sub">Pre-built connectors for essential third-party services</div>
    <div class="tp-integ-grid">${integCards}</div>

    <!-- GETTING STARTED -->
    <div class="tp-section-title" style="margin-bottom:1.5rem">Getting Started</div>

    <div class="tp-gs-step">
      <div class="tp-gs-num">1</div>
      <div class="tp-gs-body">
        <div class="tp-gs-title">Prerequisites</div>
        <div class="tp-gs-desc">Node.js 20+, PostgreSQL 15, Redis 7, Git</div>
      </div>
    </div>

    <div class="tp-gs-step">
      <div class="tp-gs-num">2</div>
      <div class="tp-gs-body">
        <div class="tp-gs-title">Clone & Install</div>
        <pre class="tp-code"><span class="cm"># Clone the repository</span>
git clone https://github.com/ikppramesh/everything.git
cd everything/${sol.id}
npm install</pre>
      </div>
    </div>

    <div class="tp-gs-step">
      <div class="tp-gs-num">3</div>
      <div class="tp-gs-body">
        <div class="tp-gs-title">Configure Environment</div>
        <pre class="tp-code">cp .env.example .env
<span class="cm"># Edit .env with your values:</span>
DATABASE_URL=postgresql://user:pass@localhost:5432/${sol.short.toLowerCase()}
REDIS_URL=redis://localhost:6379
JWT_SECRET=change-me-in-production
${envVars}</pre>
      </div>
    </div>

    <div class="tp-gs-step">
      <div class="tp-gs-num">4</div>
      <div class="tp-gs-body">
        <div class="tp-gs-title">Run Development Server</div>
        <pre class="tp-code">npm run dev
<span class="cm"># App runs at http://localhost:3000</span>
<span class="cm"># Admin panel at http://localhost:3000/admin</span></pre>
      </div>
    </div>

    <div class="tp-gs-step">
      <div class="tp-gs-num">5</div>
      <div class="tp-gs-body">
        <div class="tp-gs-title">Deploy to Production</div>
        <pre class="tp-code">npm run build
<span class="cm"># Deploy with Docker:</span>
docker compose up -d
<span class="cm"># Or deploy to Vercel / Railway / Render</span></pre>
      </div>
    </div>

    <!-- FILE TREE -->
    <div class="tp-section-title" style="margin-bottom:1rem">Project Structure</div>
    <div class="tp-filetree"><span class="dir">${sol.short.toLowerCase()}/</span>
├── <span class="dir">src/</span>
│   ├── <span class="dir">routes/</span>       <span class="comment"># Express route handlers</span>
│   ├── <span class="dir">controllers/</span>  <span class="comment"># Business logic</span>
│   ├── <span class="dir">models/</span>       <span class="comment"># Database schemas</span>
│   ├── <span class="dir">jobs/</span>         <span class="comment"># Background workers</span>
│   └── <span class="dir">middleware/</span>   <span class="comment"># Auth, validation, logging</span>
├── <span class="dir">frontend/</span>
│   ├── <span class="dir">components/</span>   <span class="comment"># Reusable UI components</span>
│   └── <span class="dir">pages/</span>        <span class="comment"># Page-level components</span>
├── <span class="dir">db/</span>
│   ├── <span class="file">schema.sql</span>    <span class="comment"># Database schema</span>
│   └── <span class="file">seed.sql</span>      <span class="comment"># Sample data</span>
├── <span class="file">docker-compose.yml</span>
├── <span class="file">.env.example</span>
└── <span class="file">package.json</span></div>
  </article>

  <!-- ASIDE -->
  <aside class="tp-aside">
    <div class="tp-aside-card">
      <div class="tp-aside-emoji">${sol.icon}</div>
      <div class="tp-aside-name">${sol.name}</div>
      <div class="tp-aside-cat">${catLabel}</div>
      <div class="tp-aside-row"><span class="tp-aside-label">Use Case</span><span class="tp-aside-val">${sol.useCase||catLabel}</span></div>
      <div class="tp-aside-row"><span class="tp-aside-label">Difficulty</span><span class="tp-aside-val">${diffDots}</span></div>
      <div style="margin-top:.5rem;font-size:.75rem;color:var(--tp-text2);margin-bottom:.35rem;">Stack</div>
      <div class="tp-aside-pills">${stackPills}</div>
      <a href="index.html" class="tp-aside-btn">▶ Live Demo</a>
      <a href="../../index.html" class="tp-aside-link">← All Templates</a>
    </div>
    ${sideIntegList ? `<div class="tp-aside-card"><div style="font-size:.75rem;font-weight:700;margin-bottom:.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--tp-text2);">Integrations</div>${sideIntegList}</div>` : ''}
  </aside>
</div>

<!-- RELATED -->
${related.length ? `<section class="tp-related">
  <div class="tp-section">
    <div class="tp-section-title">Related Templates</div>
    <div class="tp-section-sub">More templates in the ${catLabel} category</div>
    <div class="tp-rel-grid">${relCards}</div>
  </div>
</section>` : ''}

<footer class="tp-footer">
  Part of the <a href="../../index.html" style="color:var(--tp-accent);font-weight:600;">Everything Platform</a> — ${sol.name} Template
</footer>

</body>
</html>`;
}

// ─── Main Build Runner ──────────────────────────────────────────────────────────
let created = 0;
let skipped = 0;

SOLUTIONS.forEach(sol => {
  if (sol.skip) {
    console.log(`⏭️  Skipping ${sol.id} (already built)`);
    skipped++;
    return;
  }

  const dir = path.join(BASE, sol.id);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const files = {
    'index.html':    generateHTML(sol),
    'template.html': generateTEMPLATEPAGE(sol),
    'README.md':     generateREADME(sol),
    'PITCH.md':      generatePITCH(sol),
    'FEATURES.md':   generateFEATURES(sol),
    'ROADMAP.md':    generateROADMAP(sol),
    'TECH-STACK.md': generateTECHSTACK(sol),
  };

  Object.entries(files).forEach(([filename, content]) => {
    fs.writeFileSync(path.join(dir, filename), content, 'utf8');
    console.log(`  ✅ ${sol.id}/${filename}`);
    created++;
  });

  console.log(`📦 Built: ${sol.name}`);
});

console.log(`\n🎉 Done! Created ${created} files, skipped ${skipped} solutions.`);
