# Pet QR Tag - Design Guidelines

## Design Approach
**System-Based Approach**: Clean, form-focused design inspired by modern utility applications like Notion and Linear. Emphasis on clarity, trust, and mobile-first scanning experience.

**Core Principles:**
- Instant clarity on purpose
- Frictionless form completion
- QR code prominence and printability
- Emergency-optimized mobile view

---

## Typography

**Font Family:** Inter (Google Fonts)
- Primary: Inter (400, 500, 600)

**Hierarchy:**
- Page Titles: text-3xl font-semibold (32px)
- Section Headers: text-xl font-semibold (20px)
- Form Labels: text-sm font-medium (14px)
- Body Text: text-base (16px)
- Helper Text: text-sm text-gray-600 (14px)
- Emergency Info (Mobile View): text-2xl font-semibold (24px)

---

## Layout System

**Spacing Units:** Tailwind units 2, 4, 6, 8, 12, 16
- Form field gaps: space-y-6
- Section padding: p-8, p-6 on mobile
- Container margins: mx-auto max-w-2xl

**Breakpoints:**
- Mobile-first design
- Desktop form: max-w-xl centered
- Mobile scan view: full-width with px-6

---

## Component Library

### Form Entry Page
**Layout:**
- Centered card (max-w-xl) with subtle border
- Page header: "Create Pet Safety Tag"
- Subheading: "Generate a scannable QR code with your pet's contact information"

**Form Fields:**
1. Pet's Name (required) - Large text input with placeholder
2. Phone Number (required) - Tel input with format helper
3. Address (required) - Textarea (2-3 rows)
4. Additional Notes - Textarea (3-4 rows) with placeholder: "Allergies, medications, behavioral notes..."

**Field Design:**
- Rounded borders (rounded-lg)
- Generous padding (p-4)
- Clear focus states with ring
- Labels above inputs with required indicators

**Primary Action:**
- Full-width button: "Generate QR Code"
- Prominent, high-contrast

### QR Code Display Page
**Layout:**
- Two-column desktop (QR left, details right)
- Stacked mobile

**QR Section:**
- Large QR code (300x300px minimum)
- White background card with padding
- Download button below: "Download QR Code"
- Helper text: "Print this code for your pet's collar or tag"

**Information Preview:**
- Display all entered information in readable card
- Edit button to modify details
- "Create Another Tag" secondary action

### Mobile Scan Landing Page (Critical)
**Emergency-First Design:**
- Full-screen, high-contrast layout
- Immediate visibility of critical info
- Large touch-friendly phone number (tap-to-call)
- Large touch-friendly address (tap-to-map)

**Structure:**
1. Top banner: Large pet's name with paw icon
2. Primary CTA: Phone number as large, tappable button
3. Address in card with map icon
4. Notes section if present (allergies in warning-style card)
5. Footer: "Powered by [App Name]"

**Touch Targets:** Minimum 48px height for all interactive elements

---

## Icons
**Library:** Heroicons (CDN)
- Phone: phone-solid
- Location: map-pin-solid  
- Pet: Custom paw print or heart icon
- Edit: pencil-solid
- Download: arrow-down-tray-solid

---

## Images
No hero images needed. This is a utility application focused on function over marketing.

**Optional:** Small pet-related illustration or icon in the form header for warmth (keep minimal).

---

## Accessibility
- All form inputs with proper labels and ARIA attributes
- High contrast ratios for emergency information
- Focus indicators on all interactive elements
- Touch targets 48px minimum on mobile view
- Screen reader friendly QR code alt text

---

## Key Interactions
- Form validation with inline error messages
- Success state after QR generation
- Copy-to-clipboard for URL
- Smooth transitions between form and QR display (no animations beyond simple fades)
- Print-optimized QR code view

---

## Mobile Scan View Priority
This is the most critical screen - design for emergency scenarios:
- Load instantly (minimal assets)
- Information hierarchy: Pet Name → Phone → Address → Notes
- Large, readable fonts (minimum 18px body text)
- Single column, scrollable
- No distractions or unnecessary UI chrome