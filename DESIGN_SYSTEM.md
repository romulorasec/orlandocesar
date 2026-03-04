# Design System Documentation

## Overview

A professional and accessible design system built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui. Features a blue and green color palette with complete design tokens, extensive component library, and comprehensive light and dark mode support.

## Color Palette

### Light Mode

Primary: #3B588A (Blue)
Secondary: #B1E158 (Green)
Accent: #537BA1 (Light Blue)
Destructive: #ef4444 (Red)
Background: #ffffff (White)
Foreground: #1a1a1a (Dark Gray)
Card: #ffffff
Muted: #F5F5F4
Border: #E3E3DF
Input: #F0F1EF

### Semantic Colors

Success: #22c55e (Light) / #4ade80 (Dark)
Warning: #eab308 (Light) / #facc15 (Dark)
Info: #3b82f6 (Light) / #60a5fa (Dark)

### Surface Tokens

Deep: #192940 — Dark navy surfaces
Warm: #F7F7F5 — Off-white panels
Dark: #0D1117 — Very dark sections
Darker: #111613 — Deepest dark sections

### Dark Mode

Primary: #537BA1 (Light Blue)
Secondary: #D4E886 (Light Green)
Accent: #6B8DB8 (Medium Blue)
Destructive: #f87171 (Lighter Red)
Background: #151715 (Very Dark)
Foreground: #FAFAFA (Light Gray)
Card: #2A2B29
Muted: #3E403D
Border: #3E403D
Input: #3E403D

### Grayscale Palette

0: #FFFFFF (White)
0.5: #FAFAFA
1: #F5F5F4
1.5: #F0F1EF
2: #EBEDE9
3: #E3E3DF
4: #D7DAD5
5: #CDDCCA
6: #AAABA2
7: #7B7E7A
8: #535651
8.5: #3E403D
9: #2A2B29
9.5: #151715
10: #000000 (Black)

## Shadow System

7 progressive shadow levels for elevation and depth:

xxsmall: 0 1px 2px 0 rgba(0, 0, 0, 0.04) - Subtle borders, hover states
xsmall: 0 1px 3px 0 rgba(0, 0, 0, 0.08) - Inputs, small cards
small: 0 4px 6px -1px rgba(0, 0, 0, 0.1) - Standard cards
medium: 0 10px 15px -3px rgba(0, 0, 0, 0.12) - Modals, elevated cards
large: 0 20px 25px -5px rgba(0, 0, 0, 0.15) - Floating panels
xlarge: 0 25px 50px -12px rgba(0, 0, 0, 0.18) - Important overlays
xxlarge: 0 35px 60px -15px rgba(0, 0, 0, 0.20) - Primary modals

## Typography

Font Family: DM Sans
Font Weights: 300 (Light), 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold)

Display Sizes:
- Display 1: 56px (3.5rem) - Weight 700 - Line Height 120%
- Display 2: 48px (3rem) - Weight 700 - Line Height 120%

Heading Sizes:
- H1: 40px (2.5rem) - Weight 700 - Line Height 120%
- H2: 36px (2.25rem) - Weight 700 - Line Height 120%
- H3: 32px (2rem) - Weight 700 - Line Height 120%
- H4: 24px (1.5rem) - Weight 600 - Line Height 140%
- H5: 20px (1.25rem) - Weight 600 - Line Height 140%
- H6: 18px (1.125rem) - Weight 600 - Line Height 140%

Body Text Sizes:
- Large: 18px (1.125rem) - Line Height 150%
- Base: 16px (1rem) - Line Height 150%
- Small: 14px (0.875rem) - Line Height 150%
- Extra Small: 12px (0.75rem) - Line Height 150%
- 2XS: 10px (0.625rem) - Line Height 150%

Letter Spacing:
- Tight: -0.02em (for displays)
- Normal: 0 (default)
- Wide: 0.02em (for emphasis)

CSS Classes: .display-1, .display-2, .h1-.h6, .body-lg, .body-base, .body-sm, .body-xs, .body-2xs

## Spacing and Border Radius

Border Radius: 0.75rem (12px) base
Variants:
- Small: calc(var(--radius) - 4px) = 8px
- Medium: calc(var(--radius) - 2px) = 10px
- Large: calc(var(--radius)) = 12px
- Extra Large: calc(var(--radius) + 4px) = 16px
- 2XL: calc(var(--radius) + 8px) = 20px
- 3XL: calc(var(--radius) + 12px) = 24px
- 4XL: calc(var(--radius) + 16px) = 28px

Spacing Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px

## Components

Button
- Variants: default (primary blue), secondary (green), accent (light blue), soft (muted), destructive (red), outline, ghost, link, text
- Shapes: pill-shaped (rounded-full), rectangular
- Sizes: sm (small/chip), default (medium), lg (large)
- Icon buttons: icon-xs, icon-sm, icon-lg (fully rounded)
- Icon positioning: icon-right, icon-left
- States: default, pressed, disabled
- Displays arrow icons on both sides (← Button →)

Badge
- Variants: default (primary), secondary, accent, dark, outline, destructive
- Features: closable with onClose callback, optional icon before label
- Properties: onClose, icon, closeIcon, disabled
- States: default, hover, disabled

Input
- Variants: filled (gray background), lined (border-bottom only)
- States: empty, filled, active (cyan border focus), error (red), validated (green)
- Features: helper text with state-based colors, left and right icons
- Input background: muted color
- Focus color (active): primary blue ring (for both filled and lined)
- Error state: destructive red border and ring
- Validated state: green-600 border and ring
- Supports all HTML input types: text, email, password, number, etc.

FormField
- Wrapper component combining input with label, helper text, and icons
- States: empty, filled, active, error, validated
- Properties: label, helperText, state, leftIcon, rightIcon, error
- Helper text colors: red (error), green (validated), gray (default)
- Icon colors: primary (default), red (error), green (validated)

Checkbox
- States: unchecked, checked, indeterminate, disabled
- Accessible with proper ARIA labels

Radio
- Single selection, disabled support
- Secondary color when selected

Toggle/Switch
- On/off states
- Secondary color when active

Tooltip
- Text and card-based variants
- Positioning control

Card
- Base component with CardHeader, CardContent, CardDescription, CardTitle
- Uses card background and text colors with borders

Alert
- Variants: default, destructive, success, warning, info
- Each variant has dark mode support
- Supports alert title and description

Select/Dropdown
- Radix UI based select component
- Accessible option selection
- Components: Select, SelectTrigger, SelectContent, SelectItem, SelectValue

Textarea
- Multi-line text input component
- Uses same focus ring as Input (primary blue)
- Styled with muted background and border
- Supports resize-y

## Project Structure

app/
├── globals.css - Design tokens (CSS variables for colors, typography, shadows, spacing)
├── layout.tsx - Root layout with DM Sans font
├── page.tsx - Welcome page with design summary
└── styleguide/
    ├── layout.tsx - Styleguide sidebar navigation layout
    ├── navigation.ts - Navigation configuration
    ├── page.tsx - Design tokens showcase with dark mode toggle
    └── components/
        ├── button/page.tsx - Button component showcase
        ├── card/page.tsx - Card component showcase
        ├── badge/page.tsx - Badge component showcase
        ├── alert/page.tsx - Alert component showcase
        ├── input/page.tsx - Forms and inputs showcase (filled, lined, select, textarea)
        ├── checkbox/page.tsx - Checkbox component showcase
        ├── radio/page.tsx - Radio component showcase
        ├── toggle/page.tsx - Toggle component showcase
        ├── tooltip/page.tsx - Tooltip component showcase
        ├── color/page.tsx - Complete color palette showcase
        └── shadow/page.tsx - Shadow system showcase

components/
├── ui/
│   ├── button.tsx - Button component with CVA variants
│   ├── badge.tsx - Badge component with CVA variants
│   ├── card.tsx - Card layout component
│   ├── alert.tsx - Alert component
│   ├── input.tsx - Input component with filled and lined variants
│   ├── form-field.tsx - FormField wrapper with state management
│   ├── checkbox.tsx - Checkbox component
│   ├── radio-group.tsx - Radio group component
│   ├── toggle.tsx - Toggle/switch component
│   ├── tooltip.tsx - Tooltip component
│   └── select.tsx - Select/dropdown component

## Usage

### CSS Variables

All design tokens are defined as CSS variables in app/globals.css:

:root defines light mode
.dark selector overrides for dark mode

Common variables:
--primary, --secondary, --accent, --destructive
--background, --foreground, --card, --card-foreground
--muted, --muted-foreground
--border, --input
--ring (focus color)
--shadow-xxsmall through --shadow-xxlarge (7 shadow levels)
--text-display-1, --text-display-2 (display sizes)
--text-h1 through --text-h6 (heading sizes)
--text-lg, --text-base, --text-sm, --text-xs, --text-2xs (body sizes)
--line-tight, --line-relaxed, --line-normal (line heights)
--fw-light, --fw-normal, --fw-medium, --fw-semibold, --fw-bold (font weights)
--letter-tight, --letter-normal, --letter-wide (letter spacing)

### Tailwind Classes

Use standard Tailwind classes combined with design system colors:

Color classes: bg-primary, text-secondary, border-accent, etc.
Typography classes: .display-1, .h1, .body-base, .text-semibold, etc.
Shadow classes: shadow-sm, shadow-md, shadow-lg, etc. (uses CSS variables)
Radius classes: rounded-none, rounded-sm, rounded-md, rounded-lg, rounded-xl, etc.

### Adding Components

npx shadcn@latest add [component-name]

Then:
1. Create component page at app/styleguide/components/[component-name]/page.tsx
2. Add entry to navigation.ts
3. Rebuild and view in styleguide

## Development

Install dependencies:
npm install

Start development server:
npm run dev

Build for production:
npm run build
npm run start

View styleguide at http://localhost:3000/styleguide

## Key Features

Light and dark mode support with automatic color adjustments
7-level shadow system for elevation and depth
15-level grayscale palette for precise neutral tones
Comprehensive typography system with 11 heading/display sizes and 5 body sizes
State-based input styling (empty, filled, active, error, validated)
Accessible form components with proper ARIA labels and keyboard navigation
Responsive component library using Tailwind CSS 4
CSS variable-based theming for dynamic customization
CVA (class-variance-authority) for component variant management
Radix UI primitives for accessible interactions

## Accessibility

WCAG AA compliant contrast ratios
Semantic HTML structure
Keyboard navigation support
ARIA labels and roles
Focus indicators using primary color
Color is never the only indicator (error states use icons and text)
Form field helper text for guidance

## Design Philosophy

Professional and accessible - Blue primary conveys trust and stability
Vibrant secondary (green) for positive actions and feedback
Comprehensive grayscale for neutral elements and hierarchy
Clear focus states with primary blue ring
Consistent spacing and sizing for predictable layouts
State-based visual feedback for user interactions
Dark mode support with adjusted colors for readability
