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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [312,287,341,298,356,412] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [88,91,87,93,89,95] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [72,68,75,79,72,84] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [2800,3100,3400,3600,3700,3842] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [22,28,31,25,34,29] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [18,22,19,25,21,14] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [6,8,7,9,8,6] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [42,38,47,51,48,56] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [72,85,91,78,87,63] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [28,34,31,38,32,22] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [22400,28100,25600,31200,28450,19800] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [38,47,42,53,47,31] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [62000,71000,68000,84000,79000,92000] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [142000,168000,155000,182000,174000,198000] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [8200,9400,10100,11200,12000,12847] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [18,21,19,23,20,23] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [720000,735000,748000,762000,810000,840000] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [182,210,245,268,312,350] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [98000,104000,110000,116000,120000,124000] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [1200000,1380000,1240000,1520000,1640000,1840000] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [8400,9200,11000,10200,12400,9800] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [3980000,4100000,4150000,4200000,4280000,4280000] }
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
    chartData: { labels: ['Q1','Q2','Q3','Q4'], data: [18000000,22000000,19000000,25000000] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [68,72,79,81,74,88] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [32400,38200,35600,42100,42800,51200] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [3,4,5,6,7,8] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [280,312,295,342,318,264] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [98,112,105,127,118,89] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [78,82,85,88,90,91] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [24,31,28,38,34,42] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [32,28,41,38,44,48] }
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
    chartData: { labels: ['Q1','Q2','Q3','Q4'], data: [62,68,72,68] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [720,812,780,847,890,420] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [1820,2100,1980,2340,2180,2480] }
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
    chartData: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat'], data: [142,168,155,184,178,92] }
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
    chartData: { labels: ['Kharif 22','Rabi 22','Kharif 23','Rabi 23','Kharif 24','Rabi 24'], data: [280,310,295,340,318,360] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [2800,3100,3400,3200,3800,4200] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [12,15,14,18,16,18] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [38,42,45,41,48,51] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [82,74,68,71,65,64] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [1800000,2000000,2100000,2300000,2200000,2400000] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [88,90,91,93,94,94] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [24,28,30,31,33,34] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [520,548,572,601,628,648] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [44,50,55,58,60,61] }
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
    chartData: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], data: [72,75,78,80,82,84] }
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
            <th>ID</th><th>Name</th><th>Category</th><th>Date</th><th>Amount</th><th>Status</th><th>Actions</th>
          </tr></thead>
          <tbody>
            ${[1,2,3,4,5,6,7,8].map(i => `<tr>
              <td><code style="font-size:.75rem;background:#f3f4f6;padding:2px 6px;border-radius:4px">${sol.short.toUpperCase().slice(0,3)}-${1000+i}</code></td>
              <td><strong>Record ${i}</strong></td>
              <td><span class="badge badge-primary">Category ${i%3+1}</span></td>
              <td>${new Date(2024, i%12, i*2+1).toLocaleDateString('en-IN')}</td>
              <td>₹${(Math.floor(Math.random()*90000)+10000).toLocaleString('en-IN')}</td>
              <td><span class="badge ${['badge-success','badge-warning','badge-info'][i%3]}">${['Active','Pending','Processing'][i%3]}</span></td>
              <td>
                <button class="btn btn-outline btn-sm" onclick="EV.toast('Viewing record ${i}','info')">View</button>
                <button class="btn btn-secondary btn-sm" onclick="EV.toast('Record ${i} updated','success')">Edit</button>
              </td>
            </tr>`).join('')}
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
