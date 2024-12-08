import * as React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  title: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-muted-foreground">
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <Link
            href={item.href}
            className={cn(
              "hover:text-foreground transition-colors",
              index === items.length - 1 && "text-foreground font-medium"
            )}
          >
            {item.title}
          </Link>
          {index < items.length - 1 && (
            <ChevronRight className="h-4 w-4 mx-2" />
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}