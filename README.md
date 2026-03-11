# CrackGoal

**CrackGoal** is a mock test platform designed for students preparing for competitive engineering entrance exams such as JEE Main, JEE Advanced, and WBJEE.

The platform provides realistic exam simulations, subject-wise practice tests, scheduled live mock exams, and ranking systems to help students practice in an environment similar to the real examination interface.

---

# Project Goal

The primary goal of CrackGoal is to create an affordable and realistic online testing environment where students can:

* Practice full-length mock tests
* Attempt subject-wise practice tests
* Participate in live scheduled mock exams
* View rankings and compare performance with other students
* Analyze strengths and weaknesses through performance analytics

The first development phase focuses on building a **high-quality landing page** with professional UI and smooth animations.

---

# Tech Stack

Frontend
React.js
TailwindCSS
Framer Motion (animations)

Backend (planned)
Supabase (Authentication + PostgreSQL Database + Realtime)

Deployment
Vercel

---

# Landing Page Requirements

The landing page must be modern, clean, and focused on credibility for exam preparation.

Important design rules:

• No gradient colors
• Use solid professional color palettes
• Smooth but subtle animations
• Dark mode and bright mode support
• Fully responsive layout

---

# Color System

## Dark Mode

Background: #0B0F14
Surface: #121821
Card: #1B2430
Primary Accent: #3A86FF
Secondary Accent: #00C2A8
Text Primary: #E6EDF3
Text Secondary: #9DA7B3
Borders: #263040

## Bright Mode

Background: #F6F8FB
Surface: #FFFFFF
Card: #F1F4F9
Primary Accent: #2F6DF6
Secondary Accent: #00A991
Text Primary: #1A1F2B
Text Secondary: #4A5568
Borders: #DCE3ED

---

# Typography

Primary Font: Inter
Secondary Font: Space Grotesk

The design should prioritize readability and a professional academic feel.

---

# Landing Page Sections

## 1. Navigation Bar

Fixed top navigation bar.

Left:
CrackGoal logo text

Right:
Features
Live Tests
Pricing
Leaderboard

Buttons:
Login
Get Started

Also include a **Dark/Bright mode toggle switch**.

Navbar should include a subtle blur effect and smooth hover animations.

---

## 2. Hero Section

Full screen hero section.

Left side:

Headline
Train Like the Real Exam

Subheading
CrackGoal helps JEE and WBJEE aspirants practice with realistic mock tests, live competitions, and performance insights.

Buttons
Start Free Mock
View Live Tests

Right side:

Animated mock exam interface card displaying

Timer
Question palette
Multiple choice question

The card should have a subtle floating animation.

---

## 3. Dynamic Background

Hero section should include a subtle **particle network animation**.

Small dots connected by thin lines moving slowly.

Implementation should use **HTML Canvas**.

Particles should adapt color depending on theme.

---

## 4. Stats Section

Three statistic cards displaying:

Mock Tests Available
500+

Active Students
1000+

Weekly Live Tests
Every Sunday

Cards should animate upward on scroll.

---

## 5. Features Section

Grid of six feature cards.

Features:

Real Exam Interface
Live Mock Competitions
Subject-wise Practice
Instant Ranking
Performance Analytics
Affordable Test Packs

Cards should include hover animations and subtle lift effects.

---

## 6. Live Mock Section

Display upcoming live exam.

Example:

WBJEE Live Mock
Starts in 02:15:20

Include a dynamic countdown timer.

Button:
Register for Live Test

---

## 7. Pricing Section

Three pricing tiers.

WBJEE Pack – ₹69
3 Full Mocks
3 Subject Tests
2 Live Mocks

JEE Main Pack – ₹99
4 Full Mocks
6 Subject Tests
2 Live Mocks

JEE Advanced Pack – ₹129
5 Full Mocks
8 Subject Tests
2 Live Mocks

Center card should be visually emphasized.

---

## 8. Leaderboard Preview

Example leaderboard table:

Rank | Student | Score
1 | Aryan | 268
2 | Riya | 251
3 | Karan | 243

Include subtle scrolling animation.

---

## 9. Footer

Footer should contain:

Product
Features
Pricing
Live Tests

Company
About
Contact

Social links.

---

# Animation Guidelines

Animations should be implemented using Framer Motion.

Recommended animations:

Hero text fade-in
Scroll reveal effects
Hover card lift animation
Floating UI mockup
Smooth transitions between dark and bright modes

Animations must remain subtle and professional.

---

# Responsiveness

Landing page must support:

Desktop
Tablet
Mobile

On smaller screens:

Navbar should transform into a hamburger menu with slide-out navigation.

---

# Design Philosophy

The design must feel like a **serious exam preparation platform**, not a flashy marketing website.

Focus on:

Clarity
Structure
Trust
Professional aesthetics

Avoid:

Gradients
Overly bright colors
Distracting animations

---

# Future Features (Next Development Phase)

User authentication
Mock test engine
Live scheduled exams
Leaderboard ranking system
Performance analytics dashboard

---

# Project Vision

CrackGoal aims to become an affordable, accessible testing platform where students can practice in an environment that closely replicates real competitive examinations.

Practice. Compete. Crack It.
