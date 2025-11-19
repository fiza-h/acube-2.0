<!--
Sync Impact Report
==================
Version change: N/A → 1.0.0
Modified principles: None (initial version)
Added sections: All sections (initial constitution)
Removed sections: None
Templates requiring updates:
  ✅ .specify/templates/plan-template.md (reviewed - compatible)
  ✅ .specify/templates/spec-template.md (reviewed - compatible)
  ✅ .specify/templates/tasks-template.md (reviewed - compatible)
Follow-up TODOs: None
-->

# ACube Talent Marketplace Constitution

## Core Principles

### I. Design Fidelity

The application MUST match the design specifications from the PRD exactly. All visual elements, layouts, and user interface components MUST be implemented as specified without deviation unless explicitly approved.

**Rationale**: Maintaining design consistency ensures brand identity and user experience quality match stakeholder expectations. The PRD serves as the single source of truth for all design decisions.

### II. Theme Consistency

All pages and components MUST use the Dark/Navy Blue/White color scheme as specified. The navigation bar MUST follow vector.io inspiration, and overall design inspiration MUST be derived from https://highfive.global/.

**Rationale**: Visual consistency across the platform creates a professional appearance and reinforces brand recognition. The specified color palette and design inspiration provide clear guidelines for all UI implementation.

### III. Content Accuracy

All content including headlines, subheads, CTAs, section titles, and descriptive text MUST match the PRD verbatim. Navigation items MUST be exactly: "Case Studies", "About Us", "Join Our Talent Pool", "Hire Top Talent".

**Rationale**: Precise content implementation ensures marketing messages and user guidance are delivered as intended by stakeholders. Any content deviation could misrepresent the service offering.

### IV. Contact Information Integrity

The contact email (team@acube-tech.com) and Calendly link (https://calendly.com/absaarmalik15/30min) MUST be correctly integrated in the "Hire Now" section without modification.

**Rationale**: Accurate contact information is critical for lead generation and business operations. Any error could result in lost business opportunities.

### V. Talent Categories Completeness

The platform MUST display all five specified talent categories: AI/ML Engineers, Software Developers, UI/UX Designers, Product Managers, and Marketing & Ops Roles.

**Rationale**: Complete representation of talent categories ensures users understand the full service offering and can find the talent type they need.

## Landing Page Structure

The landing page MUST contain exactly these sections in order:

1. **Hero Section**: Headline "Hire world-class remote talent — build faster, spend smarter." with subhead "We connect startups with vetted global professionals in tech and beyond, helping you scale at up to 70% lower cost." and CTAs "Explore Talent" and "Hire Now"

2. **How It Works Section**: Three-step process displayed as:
   - Step 1: Tell us what you need
   - Step 2: Get matched with vetted professionals
   - Step 3: Start building — we handle the rest

3. **Talent Categories Section**: Grid layout showing all five talent categories

4. **Talent Showcase Section**: Display format similar to highfive.global with variations, using dummy data

All sections MUST appear in this exact sequence without omissions or additions.

## Form Implementation Requirements

**Join Talent Pool Form**: MUST implement a "high five similar form" as specified in the PRD when users navigate to "Join Our Talent Pool".

**Hire Now Contact**: MUST display contact details (team@acube-tech.com and Calendly link) rather than a form.

## Development Workflow

### Approval Gate

No implementation may deviate from PRD specifications without explicit stakeholder approval. All design decisions MUST reference the PRD as the authoritative source.

### Dummy Data Standards

Where dummy data is required (Talent Showcase section), it MUST be realistic, professional, and aligned with the talent categories specified. Placeholder content MUST be clearly marked for future replacement with production data.

### Testing Requirements

All implemented features MUST be tested to verify:
- Content matches PRD exactly (character-by-character for critical text)
- Contact links function correctly
- Color scheme matches specification
- Navigation structure is complete and functional
- Responsive design maintains layout integrity across devices

## Governance

This constitution supersedes all other development guidelines for the ACube Talent Marketplace project. Any amendments require:

1. Documentation of the proposed change
2. Explicit approval from project stakeholders
3. Update of this constitution with incremented version number
4. Propagation of changes to dependent templates and documentation

All development work MUST verify compliance with these principles before considering a feature complete. Complexity must be justified against the PRD requirements—if the PRD does not specify a feature or technical approach, simpler solutions are preferred.

**Version**: 1.0.0 | **Ratified**: 2025-11-19 | **Last Amended**: 2025-11-19
