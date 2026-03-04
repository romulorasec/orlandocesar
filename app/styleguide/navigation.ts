export interface NavItem {
  name: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: "Foundation",
    items: [
      { name: "Design Tokens", href: "/styleguide" },
      { name: "Colors", href: "/styleguide/components/color" },
      { name: "Shadows", href: "/styleguide/components/shadow" },
    ]
  },
  {
    title: "Forms",
    items: [
      { name: "Input", href: "/styleguide/components/input" },
      { name: "Checkbox", href: "/styleguide/components/checkbox" },
      { name: "Radio", href: "/styleguide/components/radio" },
      { name: "Toggle", href: "/styleguide/components/toggle" },
    ]
  },
  {
    title: "Data Display",
    items: [
      { name: "Button", href: "/styleguide/components/button" },
      { name: "Card", href: "/styleguide/components/card" },
      { name: "Badge", href: "/styleguide/components/badge" },
    ]
  },
  {
    title: "Feedback",
    items: [
      { name: "Alert", href: "/styleguide/components/alert" },
      { name: "Tooltip", href: "/styleguide/components/tooltip" },
    ]
  }
]
