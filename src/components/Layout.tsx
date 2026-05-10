import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { FloatingNav } from "./FloatingNav";
import { ScrollToTop } from "./ScrollToTop";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <ScrollToTop />
      <FloatingNav />
      <main className="app__main">{children}</main>
      <BottomNav />
    </div>
  );
}
