# Pet QR Tag Application

## Overview
A web application that allows users to create scannable QR codes containing their pet's contact information. When someone finds a lost pet and scans the QR code, they can immediately see the owner's contact details to reunite the pet with its family.

## Purpose
Help pet owners create safety tags with QR codes that link to emergency contact information. The QR codes can be printed and attached to pet collars or tags.

## Current State
**Status:** MVP Complete - Full-stack application with database persistence

**Core Features:**
- Form to enter pet information (name, phone number, address, notes)
- Generate unique QR codes for each pet
- Mobile-optimized view page for scanning QR codes
- Persistent database storage for pet records
- Download QR codes as PNG images

## Recent Changes
- **November 6, 2025**: Initial implementation
  - Created database schema for pets table
  - Implemented REST API endpoints for creating and retrieving pet records
  - Connected frontend to backend with TanStack Query
  - Added form validation and error handling

## Project Architecture

### Database Schema
**pets table:**
- `id` (UUID, primary key) - Unique identifier for each pet
- `petName` (text, required) - Pet's name
- `phoneNumber` (text, required) - Owner's contact phone number
- `address` (text, required) - Owner's address
- `notes` (text, optional) - Additional information like allergies, medications

### Backend (Express + PostgreSQL)
**API Endpoints:**
- `POST /api/pets` - Create a new pet record
- `GET /api/pets/:id` - Retrieve pet information by ID

**Technology Stack:**
- Express.js server
- PostgreSQL database with Drizzle ORM
- Zod for input validation

### Frontend (React + Vite)
**Pages:**
- `/` - Home page with pet information form
- `/qr/:id` - QR code display and download page
- `/view/:id` - Mobile-optimized pet information view (scanned from QR code)

**Key Components:**
- `PetForm` - Form for entering pet information
- `QRCodeDisplay` - Shows generated QR code with download functionality
- `PetInfoView` - Emergency contact page optimized for mobile viewing

**Technology Stack:**
- React with TypeScript
- TanStack Query for data fetching
- Wouter for routing
- Shadcn UI components
- Tailwind CSS for styling
- qrcode.react for QR code generation

## User Flow
1. User visits home page and fills out pet information form
2. On submit, pet record is saved to database
3. User is redirected to QR code page showing:
   - Scannable QR code
   - Pet information preview
   - Download button for QR code image
4. QR code links to `/view/:id` page
5. When scanned, displays mobile-friendly page with:
   - Pet's name
   - Tap-to-call phone button
   - Tap-to-navigate address button
   - Important notes (allergies, medications)

## Design Philosophy
- **Mobile-first:** QR scan view optimized for emergency situations
- **Accessibility:** Large touch targets, high contrast for emergency info
- **Simplicity:** Minimal friction to create QR codes
- **Clarity:** Instant understanding of purpose and actions
