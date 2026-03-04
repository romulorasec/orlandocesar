"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigation } from "./navigation"

export default function StyleguideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-border/50 bg-[#FAFAF8] flex flex-col fixed top-[76px] left-0 h-[calc(100vh-76px)] overflow-y-auto z-40">

        {/* Brand Mark */}
        <div className="px-5 pt-5 pb-4">
          <Link href="/styleguide" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-[6px] bg-primary relative overflow-hidden shrink-0 shadow-xsmall">
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-secondary" />
            </div>
            <div>
              <p className="text-[12px] font-semibold leading-none text-foreground">Design System</p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-[0.1em] font-medium mt-1">
                v 1.0 · Orlando Cesar
              </p>
            </div>
          </Link>
        </div>

        <div className="mx-5 border-t border-border/40" />

        {/* Navigation */}
        <nav className="flex-1 px-3 py-5 space-y-5 overflow-y-auto">
          {navigation.map((section) => (
            <div key={section.title}>
              <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-muted-foreground/55 px-2 mb-1.5">
                {section.title}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-2 px-2 py-[6px] rounded-md text-[12.5px] transition-all duration-150",
                          isActive
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-foreground/55 font-medium hover:text-foreground hover:bg-muted/70"
                        )}
                      >
                        <span
                          className={cn(
                            "w-[5px] h-[5px] rounded-full shrink-0 transition-all duration-200",
                            isActive ? "bg-primary scale-125" : "bg-border/80"
                          )}
                        />
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="mx-5 border-t border-border/40" />
        <div className="px-5 py-3 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground/35 font-medium">2026</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
            <span className="text-[9px] text-muted-foreground/35 font-medium">Live</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-56 overflow-auto pt-[76px]">
        {children}
      </main>
    </div>
  )
}
