/**
 * admin-config.js
 *
 * Human-readable field mapping for the Myelektra Content Editor.
 * Maps JSON paths in content-config.json to user-friendly labels,
 * descriptions, and preview types, grouped by page and section.
 *
 * To add a new editable field:
 *   1. Add it to content-config.json
 *   2. Add an entry here with its page, section, label, and JSON path
 *   3. The editor will automatically render it in the form
 *
 * Structure:
 *   pages[].page        — Page name (shown as tab / card)
 *   pages[].icon        — Emoji icon for the card
 *   pages[].sections[].name        — Section name within the page
 *   pages[].sections[].fields[].path        — JSON dot-path to value in content-config.json
 *   pages[].sections[].fields[].label       — Human-readable field label
 *   pages[].sections[].fields[].description — Help text shown below the input
 *   pages[].sections[].fields[].type        — "text" | "textarea" | "url" | "phone"
 *   pages[].sections[].fields[].placeholder — Input placeholder text
 */

const ADMIN_FIELD_MAP = [
  // ═══════════════════════════════════════════════
  // 🏠 Homepage
  // ═══════════════════════════════════════════════
  {
    page: "Homepage",
    icon: "\u{1F3E0}",
    sections: [
      {
        name: "Hero",
        description: "The main banner at the top of the homepage",
        fields: [
          { path: "homepage.hero.badge",         label: "Badge Text",        desc: "Small label above the main headline", type: "text" },
          { path: "homepage.hero.headline",       label: "Headline",          desc: "Main title — the highlighted portion will be auto-colored", type: "textarea" },
          { path: "homepage.hero.headlineHighlight", label: "Highlighted Text", desc: "Portion of the headline to highlight in gradient color", type: "text" },
          { path: "homepage.hero.subtitle",       label: "Subtitle",          desc: "Paragraph below the headline", type: "textarea" },
          { path: "homepage.hero.ctaPrimary.label",  label: "Primary CTA Button", desc: "Main call-to-action button text", type: "text" },
          { path: "homepage.hero.ctaPrimary.path",   label: "Primary CTA Link",    desc: "Link path (e.g., /consultation)", type: "text" },
          { path: "homepage.hero.ctaSecondary.label", label: "Secondary CTA Button", desc: "Second call-to-action button text", type: "text" },
          { path: "homepage.hero.ctaSecondary.path",  label: "Secondary CTA Link",  desc: "Link path (e.g., /about)", type: "text" },
        ]
      },
      {
        name: "Journey Cards",
        description: "The 'Revenue Growth Journey' section — 5 cards explaining the process",
        fields: [
          { path: "homepage.journey.sectionLabel", label: "Section Label",    desc: "Small label above the journey headline", type: "text" },
          { path: "homepage.journey.headline",     label: "Headline",         desc: "Main title for the journey section", type: "text" },
          { path: "homepage.journey.intro",        label: "Intro Paragraph",  desc: "Description text before the cards", type: "textarea" },
          { path: "homepage.journey.cards.0.title",       label: "Card 1 — Title",       desc: "Revenue Intelligence", type: "text" },
          { path: "homepage.journey.cards.0.description", label: "Card 1 — Description", type: "text" },
          { path: "homepage.journey.cards.1.title",       label: "Card 2 — Title",       desc: "AI-Assisted Prospecting", type: "text" },
          { path: "homepage.journey.cards.1.description", label: "Card 2 — Description", type: "text" },
          { path: "homepage.journey.cards.2.title",       label: "Card 3 — Title",       desc: "Human SDR Engagement", type: "text" },
          { path: "homepage.journey.cards.2.description", label: "Card 3 — Description", type: "text" },
          { path: "homepage.journey.cards.3.title",       label: "Card 4 — Title",       desc: "HubSpot CRM", type: "text" },
          { path: "homepage.journey.cards.3.description", label: "Card 4 — Description", type: "text" },
          { path: "homepage.journey.cards.4.title",       label: "Card 5 — Title",       desc: "Revenue Operations", type: "text" },
          { path: "homepage.journey.cards.4.description", label: "Card 5 — Description", type: "text" },
        ]
      },
      {
        name: "Achievements",
        description: "The 'What We Help You Achieve' section — 5 achievement items",
        fields: [
          { path: "homepage.achievements.headline", label: "Headline", desc: "Main title for the achievements section", type: "text" },
          { path: "homepage.achievements.items.0.title",       label: "Item 1 — Title",       type: "text" },
          { path: "homepage.achievements.items.0.description", label: "Item 1 — Description", type: "text" },
          { path: "homepage.achievements.items.1.title",       label: "Item 2 — Title",       type: "text" },
          { path: "homepage.achievements.items.1.description", label: "Item 2 — Description", type: "text" },
          { path: "homepage.achievements.items.2.title",       label: "Item 3 — Title",       type: "text" },
          { path: "homepage.achievements.items.2.description", label: "Item 3 — Description", type: "text" },
          { path: "homepage.achievements.items.3.title",       label: "Item 4 — Title",       type: "text" },
          { path: "homepage.achievements.items.3.description", label: "Item 4 — Description", type: "text" },
          { path: "homepage.achievements.items.4.title",       label: "Item 5 — Title",       type: "text" },
          { path: "homepage.achievements.items.4.description", label: "Item 5 — Description", type: "text" },
        ]
      },
      {
        name: "Solutions Overview",
        description: "The solutions section headline on the homepage",
        fields: [
          { path: "homepage.solutionsOverview.headline", label: "Headline", desc: "Title above the solution cards", type: "text" },
        ]
      },
      {
        name: "Country Targeting",
        description: "The 'One Country. One Focused Campaign.' section",
        fields: [
          { path: "homepage.countryTargeting.headline",       label: "Headline",       type: "text" },
          { path: "homepage.countryTargeting.intro",          label: "Intro Text",     desc: "Description before the country cards", type: "text" },
          { path: "homepage.countryTargeting.maxContactsNote", label: "Max Contacts Note", type: "text" },
          { path: "homepage.countryTargeting.personasLabel",   label: "Personas Label",  type: "text" },
          { path: "homepage.countryTargeting.disclaimer",      label: "Disclaimer",     type: "textarea" },
        ]
      },
      {
        name: "Other Sections (Homepage)",
        fields: [
          { path: "homepage.industriesSection.headline",  label: "Industries Section Headline", type: "text" },
          { path: "homepage.experience.headline",          label: "Client Logos Headline",       desc: "Title above the client logo marquee", type: "text" },
          { path: "homepage.whyMyelektraSection.headline", label: "Why Myelektra Headline",      type: "text" },
        ]
      },
      {
        name: "Academy Teaser",
        description: "The Myelektra Academy promotional section on the homepage",
        fields: [
          { path: "homepage.academyTeaser.headline",      label: "Headline",       type: "text" },
          { path: "homepage.academyTeaser.subheadline",   label: "Subheadline",    type: "text" },
          { path: "homepage.academyTeaser.description",   label: "Description",    type: "textarea" },
          { path: "homepage.academyTeaser.ctaLabel",      label: "CTA Button",     type: "text" },
          { path: "homepage.academyTeaser.ctaPath",       label: "CTA Link",       desc: "Link path", type: "text" },
          { path: "homepage.academyTeaser.pricing.publicClasses.price",      label: "Public Classes — Price",      type: "text" },
          { path: "homepage.academyTeaser.pricing.publicClasses.per",        label: "Public Classes — Per",        type: "text" },
          { path: "homepage.academyTeaser.pricing.publicClasses.badgeLabel", label: "Public Classes — Badge",      type: "text" },
          { path: "homepage.academyTeaser.pricing.corporateTraining.price",      label: "Corporate Training — Price",      type: "text" },
          { path: "homepage.academyTeaser.pricing.corporateTraining.per",        label: "Corporate Training — Per",        type: "text" },
          { path: "homepage.academyTeaser.pricing.corporateTraining.badgeLabel", label: "Corporate Training — Badge",      type: "text" },
        ]
      },
      {
        name: "Final CTA",
        description: "The bottom call-to-action section on the homepage",
        fields: [
          { path: "homepage.finalCta.headline",    label: "Headline",      type: "text" },
          { path: "homepage.finalCta.body",        label: "Body Text",     type: "textarea" },
          { path: "homepage.finalCta.subheadline", label: "Subheadline",   type: "text" },
          { path: "homepage.finalCta.subbody",     label: "Sub-body Text", type: "textarea" },
          { path: "homepage.finalCta.ctaLabel",    label: "CTA Button",    type: "text" },
          { path: "homepage.finalCta.ctaPath",     label: "CTA Link",      type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 💡 Solutions (5 Solutions)
  // ═══════════════════════════════════════════════
  {
    page: "Solutions",
    icon: "\u{1F4A1}",
    sections: [
      {
        name: "Revenue Intelligence",
        fields: [
          { path: "solutions.0.name",        label: "Solution Name",        type: "text" },
          { path: "solutions.0.price",       label: "Price",                desc: "E.g. '[Book Meeting for Pricing] per project'", type: "text" },
          { path: "solutions.0.description", label: "Description",          type: "textarea" },
          { path: "solutions.0.bestFor",     label: "Best For",             type: "textarea" },
          { path: "solutions.0.cta",         label: "CTA Button Text",      type: "text" },
          { path: "solutions.0.features.0",  label: "Feature 1",            type: "text" },
          { path: "solutions.0.features.1",  label: "Feature 2",            type: "text" },
          { path: "solutions.0.features.2",  label: "Feature 3",            type: "text" },
          { path: "solutions.0.features.3",  label: "Feature 4",            type: "text" },
          { path: "solutions.0.steps.0.title",       label: "Step 1 — Title",       desc: "Discover", type: "text" },
          { path: "solutions.0.steps.0.description", label: "Step 1 — Description", type: "textarea" },
          { path: "solutions.0.steps.1.title",       label: "Step 2 — Title",       desc: "Identify", type: "text" },
          { path: "solutions.0.steps.1.description", label: "Step 2 — Description", type: "textarea" },
          { path: "solutions.0.steps.2.title",       label: "Step 3 — Title",       desc: "Deliver", type: "text" },
          { path: "solutions.0.steps.2.description", label: "Step 3 — Description", type: "textarea" },
        ]
      },
      {
        name: "Pipeline Builder",
        fields: [
          { path: "solutions.1.name",        label: "Solution Name",        type: "text" },
          { path: "solutions.1.price",       label: "Price",                desc: "E.g. 'USD x,xxx per month'", type: "text" },
          { path: "solutions.1.description", label: "Description",          type: "textarea" },
          { path: "solutions.1.bestFor",     label: "Best For",             type: "textarea" },
          { path: "solutions.1.cta",         label: "CTA Button Text",      type: "text" },
          { path: "solutions.1.features.0",  label: "Feature 1",            type: "text" },
          { path: "solutions.1.features.1",  label: "Feature 2",            type: "text" },
          { path: "solutions.1.features.2",  label: "Feature 3",            type: "text" },
          { path: "solutions.1.features.3",  label: "Feature 4",            type: "text" },
          { path: "solutions.1.steps.0.title",       label: "Step 1 — Title",       desc: "Setup", type: "text" },
          { path: "solutions.1.steps.0.description", label: "Step 1 — Description", type: "textarea" },
          { path: "solutions.1.steps.1.title",       label: "Step 2 — Title",       desc: "Engage", type: "text" },
          { path: "solutions.1.steps.1.description", label: "Step 2 — Description", type: "textarea" },
          { path: "solutions.1.steps.2.title",       label: "Step 3 — Title",       desc: "Qualify", type: "text" },
          { path: "solutions.1.steps.2.description", label: "Step 3 — Description", type: "textarea" },
          { path: "solutions.1.steps.3.title",       label: "Step 4 — Title",       desc: "Report", type: "text" },
          { path: "solutions.1.steps.3.description", label: "Step 4 — Description", type: "textarea" },
        ]
      },
      {
        name: "Revenue Engine (Most Popular)",
        fields: [
          { path: "solutions.2.name",        label: "Solution Name",        type: "text" },
          { path: "solutions.2.price",       label: "Price",                type: "text" },
          { path: "solutions.2.description", label: "Description",          type: "textarea" },
          { path: "solutions.2.bestFor",     label: "Best For",             type: "textarea" },
          { path: "solutions.2.cta",         label: "CTA Button Text",      type: "text" },
          { path: "solutions.2.features.0",  label: "Feature 1",            type: "text" },
          { path: "solutions.2.features.1",  label: "Feature 2",            type: "text" },
          { path: "solutions.2.features.2",  label: "Feature 3",            type: "text" },
          { path: "solutions.2.features.3",  label: "Feature 4",            type: "text" },
          { path: "solutions.2.steps.0.title",       label: "Step 1 — Title",       desc: "Build", type: "text" },
          { path: "solutions.2.steps.0.description", label: "Step 1 — Description", type: "textarea" },
          { path: "solutions.2.steps.1.title",       label: "Step 2 — Title",       desc: "Operate", type: "text" },
          { path: "solutions.2.steps.1.description", label: "Step 2 — Description", type: "textarea" },
          { path: "solutions.2.steps.2.title",       label: "Step 3 — Title",       desc: "Optimize", type: "text" },
          { path: "solutions.2.steps.2.description", label: "Step 3 — Description", type: "textarea" },
          { path: "solutions.2.steps.3.title",       label: "Step 4 — Title",       desc: "Report", type: "text" },
          { path: "solutions.2.steps.3.description", label: "Step 4 — Description", type: "textarea" },
        ]
      },
      {
        name: "AI Adoption Journey",
        fields: [
          { path: "solutions.3.name",        label: "Solution Name",        type: "text" },
          { path: "solutions.3.price",       label: "Price",                type: "text" },
          { path: "solutions.3.description", label: "Description",          type: "textarea" },
          { path: "solutions.3.bestFor",     label: "Best For",             type: "textarea" },
          { path: "solutions.3.cta",         label: "CTA Button Text",      type: "text" },
          { path: "solutions.3.features.0",  label: "Feature 1",            type: "text" },
          { path: "solutions.3.features.1",  label: "Feature 2",            type: "text" },
          { path: "solutions.3.features.2",  label: "Feature 3",            type: "text" },
          { path: "solutions.3.features.3",  label: "Feature 4",            type: "text" },
          { path: "solutions.3.steps.0.title",       label: "Step 1 — Title",       desc: "Assess", type: "text" },
          { path: "solutions.3.steps.0.description", label: "Step 1 — Description", type: "textarea" },
          { path: "solutions.3.steps.1.title",       label: "Step 2 — Title",       desc: "Pilot", type: "text" },
          { path: "solutions.3.steps.1.description", label: "Step 2 — Description", type: "textarea" },
          { path: "solutions.3.steps.2.title",       label: "Step 3 — Title",       desc: "Implement", type: "text" },
          { path: "solutions.3.steps.2.description", label: "Step 3 — Description", type: "textarea" },
          { path: "solutions.3.steps.3.title",       label: "Step 4 — Title",       desc: "Learn Together", type: "text" },
          { path: "solutions.3.steps.3.description", label: "Step 4 — Description", type: "textarea" },
        ]
      },
      {
        name: "Fractional Revenue Office",
        fields: [
          { path: "solutions.4.name",        label: "Solution Name",        type: "text" },
          { path: "solutions.4.price",       label: "Price",                type: "text" },
          { path: "solutions.4.description", label: "Description",          type: "textarea" },
          { path: "solutions.4.bestFor",     label: "Best For",             type: "textarea" },
          { path: "solutions.4.cta",         label: "CTA Button Text",      type: "text" },
          { path: "solutions.4.features.0",  label: "Feature 1",            type: "text" },
          { path: "solutions.4.features.1",  label: "Feature 2",            type: "text" },
          { path: "solutions.4.features.2",  label: "Feature 3",            type: "text" },
          { path: "solutions.4.features.3",  label: "Feature 4",            type: "text" },
          { path: "solutions.4.steps.0.title",       label: "Step 1 — Title",       desc: "Strategize", type: "text" },
          { path: "solutions.4.steps.0.description", label: "Step 1 — Description", type: "textarea" },
          { path: "solutions.4.steps.1.title",       label: "Step 2 — Title",       desc: "Lead", type: "text" },
          { path: "solutions.4.steps.1.description", label: "Step 2 — Description", type: "textarea" },
          { path: "solutions.4.steps.2.title",       label: "Step 3 — Title",       desc: "Scale", type: "text" },
          { path: "solutions.4.steps.2.description", label: "Step 3 — Description", type: "textarea" },
          { path: "solutions.4.steps.3.title",       label: "Step 4 — Title",       desc: "Report", type: "text" },
          { path: "solutions.4.steps.3.description", label: "Step 4 — Description", type: "textarea" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 📄 Solutions Page
  // ═══════════════════════════════════════════════
  {
    page: "Solutions Page",
    icon: "\u{1F4C4}",
    sections: [
      {
        name: "Hero",
        fields: [
          { path: "solutionsPage.hero.headline", label: "Headline", type: "text" },
          { path: "solutionsPage.hero.subtitle", label: "Subtitle", type: "textarea" },
        ]
      },
      {
        name: "Labels & CTA",
        fields: [
          { path: "solutionsPage.includedLabel", label: "Included Label", desc: "E.g. 'Included:'", type: "text" },
          { path: "solutionsPage.popularBadge",  label: "Popular Badge",  desc: "E.g. 'Most Popular'", type: "text" },
          { path: "solutionsPage.cta.headline",      label: "CTA Headline",    type: "text" },
          { path: "solutionsPage.cta.body",          label: "CTA Body",        type: "textarea" },
          { path: "solutionsPage.cta.buttonLabel",   label: "CTA Button",     type: "text" },
          { path: "solutionsPage.cta.buttonPath",    label: "CTA Link",       type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 📋 Solution Detail Page
  // ═══════════════════════════════════════════════
  {
    page: "Solution Detail Page",
    icon: "\u{1F4CB}",
    sections: [
      {
        name: "Labels",
        fields: [
          { path: "solutionDetailPage.breadcrumb.home",          label: "Breadcrumb — Home",         type: "text" },
          { path: "solutionDetailPage.breadcrumb.solutions",     label: "Breadcrumb — Solutions",    type: "text" },
          { path: "solutionDetailPage.includedHeadline",         label: "What's Included Headline",  type: "text" },
          { path: "solutionDetailPage.bestForHeadline",          label: "Best For Headline",         type: "text" },
          { path: "solutionDetailPage.howItWorksHeadline",       label: "How It Works Headline",     type: "text" },
          { path: "solutionDetailPage.ctaPrefix",                label: "CTA Prefix",                desc: "E.g. 'Ready to Get Started with'", type: "text" },
          { path: "solutionDetailPage.ctaSuffix",                label: "CTA Suffix",                type: "text" },
          { path: "solutionDetailPage.ctaBody",                  label: "CTA Body Text",             type: "textarea" },
          { path: "solutionDetailPage.relatedSolutionsHeadline", label: "Related Solutions Headline", type: "text" },
          { path: "solutionDetailPage.notFoundMessage",          label: "Not Found Message",         type: "text" },
          { path: "solutionDetailPage.notFoundBackLink",         label: "Not Found Back Link",       type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🏭 Industries
  // ═══════════════════════════════════════════════
  {
    page: "Industries",
    icon: "\u{1F3ED}",
    sections: [
      {
        name: "Manufacturing",
        fields: [
          { path: "industries.0.name",        label: "Industry Name",     type: "text" },
          { path: "industries.0.description", label: "Description",       type: "textarea" },
          { path: "industries.0.personas.0",  label: "Persona 1",         type: "text" },
          { path: "industries.0.personas.1",  label: "Persona 2",         type: "text" },
          { path: "industries.0.personas.2",  label: "Persona 3",         type: "text" },
          { path: "industries.0.personas.3",  label: "Persona 4",         type: "text" },
          { path: "industries.0.personas.4",  label: "Persona 5",         type: "text" },
        ]
      },
      {
        name: "SaaS and Technology",
        fields: [
          { path: "industries.1.name",        label: "Industry Name",     type: "text" },
          { path: "industries.1.description", label: "Description",       type: "textarea" },
          { path: "industries.1.personas.0",  label: "Persona 1",         type: "text" },
          { path: "industries.1.personas.1",  label: "Persona 2",         type: "text" },
          { path: "industries.1.personas.2",  label: "Persona 3",         type: "text" },
          { path: "industries.1.personas.3",  label: "Persona 4",         type: "text" },
          { path: "industries.1.personas.4",  label: "Persona 5",         type: "text" },
        ]
      },
      {
        name: "Banking and Financial Services",
        fields: [
          { path: "industries.2.name",        label: "Industry Name",     type: "text" },
          { path: "industries.2.description", label: "Description",       type: "textarea" },
          { path: "industries.2.personas.0",  label: "Persona 1",         type: "text" },
          { path: "industries.2.personas.1",  label: "Persona 2",         type: "text" },
          { path: "industries.2.personas.2",  label: "Persona 3",         type: "text" },
          { path: "industries.2.personas.3",  label: "Persona 4",         type: "text" },
          { path: "industries.2.personas.4",  label: "Persona 5",         type: "text" },
        ]
      },
      {
        name: "BPO and Business Services",
        fields: [
          { path: "industries.3.name",        label: "Industry Name",     type: "text" },
          { path: "industries.3.description", label: "Description",       type: "textarea" },
          { path: "industries.3.personas.0",  label: "Persona 1",         type: "text" },
          { path: "industries.3.personas.1",  label: "Persona 2",         type: "text" },
          { path: "industries.3.personas.2",  label: "Persona 3",         type: "text" },
          { path: "industries.3.personas.3",  label: "Persona 4",         type: "text" },
          { path: "industries.3.personas.4",  label: "Persona 5",         type: "text" },
        ]
      },
      {
        name: "Professional Services and Consulting",
        fields: [
          { path: "industries.4.name",        label: "Industry Name",     type: "text" },
          { path: "industries.4.description", label: "Description",       type: "textarea" },
          { path: "industries.4.personas.0",  label: "Persona 1",         type: "text" },
          { path: "industries.4.personas.1",  label: "Persona 2",         type: "text" },
          { path: "industries.4.personas.2",  label: "Persona 3",         type: "text" },
          { path: "industries.4.personas.3",  label: "Persona 4",         type: "text" },
          { path: "industries.4.personas.4",  label: "Persona 5",         type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🌍 Industries Page
  // ═══════════════════════════════════════════════
  {
    page: "Industries Page",
    icon: "\u{1F30D}",
    sections: [
      {
        name: "Hero & CTA",
        fields: [
          { path: "industriesPage.hero.headline",        label: "Headline",          type: "text" },
          { path: "industriesPage.hero.subtitle",         label: "Subtitle",          type: "textarea" },
          { path: "industriesPage.personasHeadline",      label: "Personas Headline", type: "text" },
          { path: "industriesPage.cta.headline",          label: "CTA Headline",      type: "text" },
          { path: "industriesPage.cta.body",              label: "CTA Body",          type: "textarea" },
          { path: "industriesPage.cta.buttonLabel",       label: "CTA Button",        type: "text" },
          { path: "industriesPage.cta.buttonPath",        label: "CTA Link",          type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🔄 How It Works
  // ═══════════════════════════════════════════════
  {
    page: "How It Works",
    icon: "\u{1F504}",
    sections: [
      {
        name: "Hero & Labels",
        fields: [
          { path: "howItWorks.hero.headline",       label: "Headline",            type: "text" },
          { path: "howItWorks.hero.subtitle",        label: "Subtitle",            type: "textarea" },
          { path: "howItWorks.summaryHeadline",      label: "Summary Headline",    type: "text" },
          { path: "howItWorks.outputLabel",          label: "Output Label",        type: "text" },
        ]
      },
      {
        name: "Step 1 — Discover",
        fields: [
          { path: "howItWorks.steps.0.title",       label: "Title",       type: "text" },
          { path: "howItWorks.steps.0.description", label: "Description", type: "textarea" },
          { path: "howItWorks.steps.0.output",      label: "Output",      type: "text" },
        ]
      },
      {
        name: "Step 2 — Identify",
        fields: [
          { path: "howItWorks.steps.1.title",       label: "Title",       type: "text" },
          { path: "howItWorks.steps.1.description", label: "Description", type: "textarea" },
          { path: "howItWorks.steps.1.output",      label: "Output",      type: "text" },
        ]
      },
      {
        name: "Step 3 — Research",
        fields: [
          { path: "howItWorks.steps.2.title",       label: "Title",       type: "text" },
          { path: "howItWorks.steps.2.description", label: "Description", type: "textarea" },
          { path: "howItWorks.steps.2.output",      label: "Output",      type: "text" },
        ]
      },
      {
        name: "Step 4 — Validate",
        fields: [
          { path: "howItWorks.steps.3.title",       label: "Title",       type: "text" },
          { path: "howItWorks.steps.3.description", label: "Description", type: "textarea" },
          { path: "howItWorks.steps.3.output",      label: "Output",      type: "text" },
        ]
      },
      {
        name: "Step 5 — Build the System",
        fields: [
          { path: "howItWorks.steps.4.title",       label: "Title",       type: "text" },
          { path: "howItWorks.steps.4.description", label: "Description", type: "textarea" },
          { path: "howItWorks.steps.4.output",      label: "Output",      type: "text" },
        ]
      },
      {
        name: "Step 6 — Engage",
        fields: [
          { path: "howItWorks.steps.5.title",       label: "Title",       type: "text" },
          { path: "howItWorks.steps.5.description", label: "Description", type: "textarea" },
          { path: "howItWorks.steps.5.output",      label: "Output",      type: "text" },
        ]
      },
      {
        name: "Step 7 — Qualify",
        fields: [
          { path: "howItWorks.steps.6.title",       label: "Title",       type: "text" },
          { path: "howItWorks.steps.6.description", label: "Description", type: "textarea" },
          { path: "howItWorks.steps.6.output",      label: "Output",      type: "text" },
        ]
      },
      {
        name: "Step 8 — Grow",
        fields: [
          { path: "howItWorks.steps.7.title",       label: "Title",       type: "text" },
          { path: "howItWorks.steps.7.description", label: "Description", type: "textarea" },
          { path: "howItWorks.steps.7.output",      label: "Output",      type: "text" },
        ]
      },
      {
        name: "CTA Section",
        fields: [
          { path: "howItWorks.cta.headline",      label: "CTA Headline",    type: "text" },
          { path: "howItWorks.cta.body",          label: "CTA Body",        type: "textarea" },
          { path: "howItWorks.cta.buttonLabel",   label: "CTA Button",      type: "text" },
          { path: "howItWorks.cta.buttonPath",    label: "CTA Link",        type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 💰 Pricing Page
  // ═══════════════════════════════════════════════
  {
    page: "Pricing Page",
    icon: "\u{1F4B0}",
    sections: [
      {
        name: "Hero & CTA",
        fields: [
          { path: "pricingPage.hero.headline",           label: "Headline",       type: "text" },
          { path: "pricingPage.hero.subtitle",            label: "Subtitle",       type: "textarea" },
          { path: "pricingPage.popularBadge",             label: "Popular Badge",  type: "text" },
          { path: "pricingPage.comparisonHeadline",       label: "Comparison Headline", type: "text" },
          { path: "pricingPage.cta.headline",             label: "CTA Headline",   type: "text" },
          { path: "pricingPage.cta.body",                 label: "CTA Body",       type: "textarea" },
          { path: "pricingPage.cta.buttonLabel",          label: "CTA Button",     type: "text" },
          { path: "pricingPage.cta.buttonPath",           label: "CTA Link",       type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 📚 Academy
  // ═══════════════════════════════════════════════
  {
    page: "Academy",
    icon: "\u{1F4DA}",
    sections: [
      {
        name: "Hero",
        fields: [
          { path: "academy.hero.headline",     label: "Headline",    type: "text" },
          { path: "academy.hero.subheadline",  label: "Subheadline", type: "text" },
          { path: "academy.hero.description",  label: "Description", type: "textarea" },
        ]
      },
      {
        name: "Topics",
        fields: [
          { path: "academy.topicsHeadline",  label: "Topics Headline", type: "text" },
          { path: "academy.topicsSubtitle",  label: "Topics Subtitle", type: "text" },
          { path: "academy.topics.0",  label: "Topic 1",  type: "text" },
          { path: "academy.topics.1",  label: "Topic 2",  type: "text" },
          { path: "academy.topics.2",  label: "Topic 3",  type: "text" },
          { path: "academy.topics.3",  label: "Topic 4",  type: "text" },
          { path: "academy.topics.4",  label: "Topic 5",  type: "text" },
          { path: "academy.topics.5",  label: "Topic 6",  type: "text" },
          { path: "academy.topics.6",  label: "Topic 7",  type: "text" },
          { path: "academy.topics.7",  label: "Topic 8",  type: "text" },
          { path: "academy.topics.8",  label: "Topic 9",  type: "text" },
          { path: "academy.topics.9",  label: "Topic 10", type: "text" },
        ]
      },
      {
        name: "Pricing — Public Classes",
        fields: [
          { path: "academy.pricingHeadline",          label: "Pricing Section Headline", type: "text" },
          { path: "academy.publicClasses.name",       label: "Name",        type: "text" },
          { path: "academy.publicClasses.price",      label: "Price",       type: "text" },
          { path: "academy.publicClasses.priceDetail", label: "Price Detail", type: "text" },
          { path: "academy.publicClasses.features.0", label: "Feature 1",   type: "text" },
          { path: "academy.publicClasses.features.1", label: "Feature 2",   type: "text" },
          { path: "academy.publicClasses.features.2", label: "Feature 3",   type: "text" },
          { path: "academy.publicClasses.features.3", label: "Feature 4",   type: "text" },
          { path: "academy.publicClasses.cta",        label: "CTA Button",  type: "text" },
          { path: "academy.publicClasses.ctaPath",    label: "CTA Link",    type: "text" },
        ]
      },
      {
        name: "Pricing — Corporate Training",
        fields: [
          { path: "academy.corporateTraining.name",       label: "Name",          type: "text" },
          { path: "academy.corporateTraining.price",      label: "Price",         type: "text" },
          { path: "academy.corporateTraining.priceDetail", label: "Price Detail", type: "text" },
          { path: "academy.corporateTraining.features.0", label: "Feature 1",     type: "text" },
          { path: "academy.corporateTraining.features.1", label: "Feature 2",     type: "text" },
          { path: "academy.corporateTraining.features.2", label: "Feature 3",     type: "text" },
          { path: "academy.corporateTraining.features.3", label: "Feature 4",     type: "text" },
          { path: "academy.corporateTraining.cta",        label: "CTA Button",    type: "text" },
          { path: "academy.corporateTraining.ctaPath",    label: "CTA Link",      type: "text" },
          { path: "academy.corporateTraining.badge",      label: "Badge",         type: "text" },
        ]
      },
      {
        name: "Final CTA",
        fields: [
          { path: "academy.cta.headline",      label: "CTA Headline",    type: "text" },
          { path: "academy.cta.body",          label: "CTA Body",        type: "textarea" },
          { path: "academy.cta.buttonLabel",   label: "CTA Button",      type: "text" },
          { path: "academy.cta.buttonPath",    label: "CTA Link",        type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 👤 About Page
  // ═══════════════════════════════════════════════
  {
    page: "About Page",
    icon: "\u{1F464}",
    sections: [
      {
        name: "Hero",
        fields: [
          { path: "aboutPage.hero.headline", label: "Headline", type: "text" },
          { path: "aboutPage.hero.subtitle",  label: "Subtitle", type: "textarea" },
        ]
      },
      {
        name: "Story",
        fields: [
          { path: "aboutPage.story.label",      label: "Label",       type: "text" },
          { path: "aboutPage.story.headline",   label: "Headline",    type: "text" },
          { path: "aboutPage.story.paragraph1", label: "Paragraph 1", type: "textarea" },
          { path: "aboutPage.story.paragraph2", label: "Paragraph 2", type: "textarea" },
          { path: "aboutPage.story.paragraph3", label: "Paragraph 3", type: "textarea" },
        ]
      },
      {
        name: "Stats",
        fields: [
          { path: "aboutPage.stats.0.value", label: "Stat 1 — Value", desc: "E.g. '10+'", type: "text" },
          { path: "aboutPage.stats.0.label", label: "Stat 1 — Label", type: "text" },
          { path: "aboutPage.stats.1.value", label: "Stat 2 — Value", type: "text" },
          { path: "aboutPage.stats.1.label", label: "Stat 2 — Label", type: "text" },
          { path: "aboutPage.stats.2.value", label: "Stat 3 — Value", type: "text" },
          { path: "aboutPage.stats.2.label", label: "Stat 3 — Label", type: "text" },
          { path: "aboutPage.stats.3.value", label: "Stat 4 — Value", type: "text" },
          { path: "aboutPage.stats.3.label", label: "Stat 4 — Label", type: "text" },
        ]
      },
      {
        name: "Mission & CTA",
        fields: [
          { path: "aboutPage.mission.label",    label: "Mission Label",    type: "text" },
          { path: "aboutPage.mission.headline", label: "Mission Headline", type: "text" },
          { path: "aboutPage.mission.body",     label: "Mission Body",     type: "textarea" },
          { path: "aboutPage.cta.headline",     label: "CTA Headline",     type: "text" },
          { path: "aboutPage.cta.body",         label: "CTA Body",         type: "textarea" },
          { path: "aboutPage.cta.buttonLabel",  label: "CTA Button",       type: "text" },
          { path: "aboutPage.cta.buttonPath",   label: "CTA Link",         type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 📞 Contact Page
  // ═══════════════════════════════════════════════
  {
    page: "Contact Page",
    icon: "\u{1F4DE}",
    sections: [
      {
        name: "Hero & Info",
        fields: [
          { path: "contactPage.hero.headline", label: "Headline", type: "text" },
          { path: "contactPage.hero.subtitle",  label: "Subtitle", type: "textarea" },
          { path: "contactPage.officeHeadline", label: "Office Headline", type: "text" },
          { path: "contactPage.contactInfoHeadline", label: "Contact Info Headline", type: "text" },
          { path: "contactPage.hoursHeadline",  label: "Hours Headline", type: "text" },
          { path: "contactPage.ctaButtons.0.label", label: "CTA 1 — Button Text", type: "text" },
          { path: "contactPage.ctaButtons.1.label", label: "CTA 2 — Button Text", type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 📅 Consultation Page
  // ═══════════════════════════════════════════════
  {
    page: "Consultation Page",
    icon: "\u{1F4C5}",
    sections: [
      {
        name: "Hero & Sidebar",
        fields: [
          { path: "consultationPage.hero.headline",      label: "Headline",      type: "text" },
          { path: "consultationPage.hero.subtitle",       label: "Subtitle",      type: "textarea" },
          { path: "consultationPage.scheduleHeadline",    label: "Schedule Headline", type: "text" },
          { path: "consultationPage.scheduleSubtitle",    label: "Schedule Subtitle", type: "text" },
          { path: "consultationPage.sidebarWhatToExpect.headline",       label: "What to Expect Headline", type: "text" },
          { path: "consultationPage.sidebarWhatToExpect.items.0.title",       label: "Expectation 1 — Title",        type: "text" },
          { path: "consultationPage.sidebarWhatToExpect.items.0.description", label: "Expectation 1 — Description",  type: "text" },
          { path: "consultationPage.sidebarWhatToExpect.items.1.title",       label: "Expectation 2 — Title",        type: "text" },
          { path: "consultationPage.sidebarWhatToExpect.items.1.description", label: "Expectation 2 — Description",  type: "text" },
          { path: "consultationPage.sidebarQuickLinks.headline", label: "Quick Links Headline", type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 💬 Get Quote Page
  // ═══════════════════════════════════════════════
  {
    page: "Get Quote Page",
    icon: "\u{1F4AC}",
    sections: [
      {
        name: "Hero & Form",
        fields: [
          { path: "getQuotePage.hero.headline",      label: "Headline",         type: "text" },
          { path: "getQuotePage.hero.subtitle",       label: "Subtitle",         type: "textarea" },
          { path: "getQuotePage.formHeadline",        label: "Form Headline",    type: "text" },
          { path: "getQuotePage.formSubtitle",        label: "Form Subtitle",    type: "text" },
          { path: "getQuotePage.sidebar.headline",    label: "Sidebar Headline", type: "text" },
          { path: "getQuotePage.sidebar.items.0",     label: "Sidebar Item 1",   type: "text" },
          { path: "getQuotePage.sidebar.items.1",     label: "Sidebar Item 2",   type: "text" },
          { path: "getQuotePage.sidebar.items.2",     label: "Sidebar Item 3",   type: "text" },
          { path: "getQuotePage.sidebar.items.3",     label: "Sidebar Item 4",   type: "text" },
          { path: "getQuotePage.cta.headline",        label: "CTA Headline",     type: "text" },
          { path: "getQuotePage.cta.body",            label: "CTA Body",         type: "textarea" },
          { path: "getQuotePage.cta.buttonLabel",     label: "CTA Button",       type: "text" },
          { path: "getQuotePage.cta.buttonPath",      label: "CTA Link",         type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🏢 Brand & Company Info
  // ═══════════════════════════════════════════════
  {
    page: "Brand & Company",
    icon: "\u{1F3E2}",
    sections: [
      {
        name: "General Info",
        fields: [
          { path: "brand.company",     label: "Company Name",       type: "text" },
          { path: "brand.domain",      label: "Domain",             type: "text" },
          { path: "brand.tagline",     label: "Tagline",            type: "text" },
          { path: "brand.subTagline",  label: "Sub-tagline",        type: "text" },
          { path: "brand.positioning", label: "Positioning",        type: "text" },
          { path: "brand.phone",       label: "Phone Number",       type: "phone" },
          { path: "brand.email",       label: "Email",              type: "text" },
          { path: "brand.hours",       label: "Business Hours",     type: "text" },
        ]
      },
      {
        name: "Address",
        fields: [
          { path: "brand.address.line1",    label: "Address Line 1", type: "text" },
          { path: "brand.address.line2",    label: "Address Line 2", type: "text" },
          { path: "brand.address.country",  label: "Country",        type: "text" },
        ]
      },
      {
        name: "Social Media",
        fields: [
          { path: "brand.social.linkedin",  label: "LinkedIn URL",  type: "url" },
          { path: "brand.social.instagram", label: "Instagram URL", type: "url" },
        ]
      },
      {
        name: "Founder",
        fields: [
          { path: "brand.founder.name",       label: "Founder Name",  type: "text" },
          { path: "brand.founder.title",       label: "Founder Title", type: "text" },
          { path: "brand.founder.photo",       label: "Photo URL",     type: "url" },
          { path: "brand.founder.linkedin",    label: "LinkedIn URL",  type: "url" },
          { path: "brand.founder.instagram",   label: "Instagram URL", type: "url" },
        ]
      },
      {
        name: "Logo",
        fields: [
          { path: "brand.logo.catboxUrl",      label: "Logo URL (CDN)",     type: "url" },
          { path: "brand.logo.localFile",      label: "Logo Local Path",    type: "text" },
          { path: "brand.logo.localFileWeebly", label: "Logo Weebly Path",  type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🧭 Navigation
  // ═══════════════════════════════════════════════
  {
    page: "Navigation",
    icon: "\u{1F9ED}",
    sections: [
      {
        name: "Header CTA Button",
        fields: [
          { path: "navigation.headerCta",     label: "CTA Button Text", type: "text" },
          { path: "navigation.headerCtaPath", label: "CTA Link Path",   type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // ⚙️ Global Settings
  // ═══════════════════════════════════════════════
  {
    page: "Global Settings",
    icon: "\u{2699}\u{FE0F}",
    sections: [
      {
        name: "Floating CTA",
        fields: [
          { path: "global.floatingCta.text",          label: "Text",             type: "text" },
          { path: "global.floatingCta.buttonLabel",   label: "Button Label",     type: "text" },
          { path: "global.floatingCta.buttonPath",    label: "Button Link",      type: "text" },
          { path: "global.floatingCta.showAfterScrollPx", label: "Show After (px)", desc: "Scroll distance in pixels", type: "text" },
        ]
      },
      {
        name: "Cookie Banner",
        fields: [
          { path: "global.cookieBanner.text",           label: "Banner Text",   type: "textarea" },
          { path: "global.cookieBanner.acceptLabel",    label: "Accept Button", type: "text" },
          { path: "global.cookieBanner.learnMoreLabel", label: "Learn More",    type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // ❓ Why Myelektra (6 Differentiators)
  // ═══════════════════════════════════════════════
  {
    page: "Why Myelektra",
    icon: "\u2753",
    sections: [
      {
        name: "Differentiator 1",
        fields: [
          { path: "whyMyelektra.0.title",       label: "Title",       type: "text" },
          { path: "whyMyelektra.0.description", label: "Description", type: "textarea" },
        ]
      },
      {
        name: "Differentiator 2",
        fields: [
          { path: "whyMyelektra.1.title",       label: "Title",       type: "text" },
          { path: "whyMyelektra.1.description", label: "Description", type: "textarea" },
        ]
      },
      {
        name: "Differentiator 3",
        fields: [
          { path: "whyMyelektra.2.title",       label: "Title",       type: "text" },
          { path: "whyMyelektra.2.description", label: "Description", type: "textarea" },
        ]
      },
      {
        name: "Differentiator 4",
        fields: [
          { path: "whyMyelektra.3.title",       label: "Title",       type: "text" },
          { path: "whyMyelektra.3.description", label: "Description", type: "textarea" },
        ]
      },
      {
        name: "Differentiator 5",
        fields: [
          { path: "whyMyelektra.4.title",       label: "Title",       type: "text" },
          { path: "whyMyelektra.4.description", label: "Description", type: "textarea" },
        ]
      },
      {
        name: "Differentiator 6",
        fields: [
          { path: "whyMyelektra.5.title",       label: "Title",       type: "text" },
          { path: "whyMyelektra.5.description", label: "Description", type: "textarea" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🌏 Countries (7 Target Countries)
  // ═══════════════════════════════════════════════
  {
    page: "Target Countries",
    icon: "\u{1F30F}",
    sections: [
      {
        name: "Indonesia",
        fields: [
          { path: "countries.0.name",       label: "Country Name", type: "text" },
          { path: "countries.0.personas.0", label: "Persona 1",    type: "text" },
          { path: "countries.0.personas.1", label: "Persona 2",    type: "text" },
          { path: "countries.0.personas.2", label: "Persona 3",    type: "text" },
          { path: "countries.0.personas.3", label: "Persona 4",    type: "text" },
          { path: "countries.0.personas.4", label: "Persona 5",    type: "text" },
        ]
      },
      {
        name: "Malaysia",
        fields: [
          { path: "countries.1.name",       label: "Country Name", type: "text" },
          { path: "countries.1.personas.0", label: "Persona 1",    type: "text" },
          { path: "countries.1.personas.1", label: "Persona 2",    type: "text" },
          { path: "countries.1.personas.2", label: "Persona 3",    type: "text" },
          { path: "countries.1.personas.3", label: "Persona 4",    type: "text" },
          { path: "countries.1.personas.4", label: "Persona 5",    type: "text" },
        ]
      },
      {
        name: "Singapore",
        fields: [
          { path: "countries.2.name",       label: "Country Name", type: "text" },
          { path: "countries.2.personas.0", label: "Persona 1",    type: "text" },
          { path: "countries.2.personas.1", label: "Persona 2",    type: "text" },
          { path: "countries.2.personas.2", label: "Persona 3",    type: "text" },
          { path: "countries.2.personas.3", label: "Persona 4",    type: "text" },
          { path: "countries.2.personas.4", label: "Persona 5",    type: "text" },
        ]
      },
      {
        name: "Australia",
        fields: [
          { path: "countries.3.name",       label: "Country Name", type: "text" },
          { path: "countries.3.personas.0", label: "Persona 1",    type: "text" },
          { path: "countries.3.personas.1", label: "Persona 2",    type: "text" },
          { path: "countries.3.personas.2", label: "Persona 3",    type: "text" },
          { path: "countries.3.personas.3", label: "Persona 4",    type: "text" },
          { path: "countries.3.personas.4", label: "Persona 5",    type: "text" },
        ]
      },
      {
        name: "Europe",
        fields: [
          { path: "countries.4.name",       label: "Country Name", type: "text" },
          { path: "countries.4.personas.0", label: "Persona 1",    type: "text" },
          { path: "countries.4.personas.1", label: "Persona 2",    type: "text" },
          { path: "countries.4.personas.2", label: "Persona 3",    type: "text" },
          { path: "countries.4.personas.3", label: "Persona 4",    type: "text" },
          { path: "countries.4.personas.4", label: "Persona 5",    type: "text" },
        ]
      },
      {
        name: "United States",
        fields: [
          { path: "countries.5.name",       label: "Country Name", type: "text" },
          { path: "countries.5.personas.0", label: "Persona 1",    type: "text" },
          { path: "countries.5.personas.1", label: "Persona 2",    type: "text" },
          { path: "countries.5.personas.2", label: "Persona 3",    type: "text" },
          { path: "countries.5.personas.3", label: "Persona 4",    type: "text" },
          { path: "countries.5.personas.4", label: "Persona 5",    type: "text" },
        ]
      },
      {
        name: "Middle East",
        fields: [
          { path: "countries.6.name",       label: "Country Name", type: "text" },
          { path: "countries.6.personas.0", label: "Persona 1",    type: "text" },
          { path: "countries.6.personas.1", label: "Persona 2",    type: "text" },
          { path: "countries.6.personas.2", label: "Persona 3",    type: "text" },
          { path: "countries.6.personas.3", label: "Persona 4",    type: "text" },
          { path: "countries.6.personas.4", label: "Persona 5",    type: "text" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 📝 Footer & Disclaimer
  // ═══════════════════════════════════════════════
  {
    page: "Footer & Legal",
    icon: "\u{1F4DD}",
    sections: [
      {
        name: "Copyright & Disclaimer",
        fields: [
          { path: "footer.copyright", label: "Copyright Text", desc: "Use {year} as placeholder for current year", type: "text" },
          { path: "disclaimer",       label: "Disclaimer",     type: "textarea" },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🖼️ Client Logos (40+ Logo URLs)
  // ═══════════════════════════════════════════════
  {
    page: "Client Logos",
    icon: "\u{1F5BC}\u{FE0F}",
    sections: [
      {
        name: "Client Logos",
        description: "Logo URLs for the client logo marquee. Edit only if you need to change a logo image.",
        fields: [
          { path: "clientLogos.0.src",  label: "1 — 1Datapipe",     type: "url" },
          { path: "clientLogos.1.src",  label: "2 — Adins",         type: "url" },
          { path: "clientLogos.2.src",  label: "3 — Armourzero",    type: "url" },
          { path: "clientLogos.3.src",  label: "4 — Bigbox",        type: "url" },
          { path: "clientLogos.4.src",  label: "5 — Cacafly",       type: "url" },
          { path: "clientLogos.5.src",  label: "6 — Codemi",        type: "url" },
          { path: "clientLogos.6.src",  label: "7 — Convergence",   type: "url" },
          { path: "clientLogos.7.src",  label: "8 — Daiko",         type: "url" },
          { path: "clientLogos.8.src",  label: "9 — DataOn",        type: "url" },
          { path: "clientLogos.9.src",  label: "10 — Disprz",       type: "url" },
          { path: "clientLogos.10.src", label: "11 — Epicor",       type: "url" },
          { path: "clientLogos.11.src", label: "12 — Evolusi 3D",   type: "url" },
          { path: "clientLogos.12.src", label: "13 — Flexofast",    type: "url" },
          { path: "clientLogos.13.src", label: "14 — Fujifilm",     type: "url" },
          { path: "clientLogos.14.src", label: "15 — Funding Societies", type: "url" },
          { path: "clientLogos.15.src", label: "16 — Geek Hunter",  type: "url" },
          { path: "clientLogos.16.src", label: "17 — Hexagon",      type: "url" },
          { path: "clientLogos.17.src", label: "18 — Honeywell",    type: "url" },
          { path: "clientLogos.18.src", label: "19 — Ideoworks",    type: "url" },
          { path: "clientLogos.19.src", label: "20 — Integrated Retail", type: "url" },
          { path: "clientLogos.20.src", label: "21 — Liberty Society", type: "url" },
          { path: "clientLogos.21.src", label: "22 — Lindungihutan", type: "url" },
          { path: "clientLogos.22.src", label: "23 — Lion Parcel",  type: "url" },
          { path: "clientLogos.23.src", label: "24 — Metrodata",    type: "url" },
          { path: "clientLogos.24.src", label: "25 — Mileapp",      type: "url" },
          { path: "clientLogos.25.src", label: "26 — Moodah",       type: "url" },
          { path: "clientLogos.26.src", label: "27 — Myrobin",      type: "url" },
          { path: "clientLogos.27.src", label: "28 — Parker Hannifin", type: "url" },
          { path: "clientLogos.28.src", label: "29 — Practo",       type: "url" },
          { path: "clientLogos.29.src", label: "30 — PTI Group",    type: "url" },
          { path: "clientLogos.30.src", label: "31 — Qiscus",       type: "url" },
          { path: "clientLogos.31.src", label: "32 — Ruangguru",    type: "url" },
          { path: "clientLogos.32.src", label: "33 — Runchise",     type: "url" },
          { path: "clientLogos.33.src", label: "34 — Shipper",      type: "url" },
          { path: "clientLogos.34.src", label: "35 — SOS",          type: "url" },
          { path: "clientLogos.35.src", label: "36 — Staffinc",     type: "url" },
          { path: "clientLogos.36.src", label: "37 — The Class Foundation", type: "url" },
          { path: "clientLogos.37.src", label: "38 — Tjetak",       type: "url" },
          { path: "clientLogos.38.src", label: "39 — Turnitin",     type: "url" },
          { path: "clientLogos.39.src", label: "40 — Zilingo",      type: "url" },
        ]
      },
    ]
  },
];
