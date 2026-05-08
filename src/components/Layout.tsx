import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { FloatingNav } from "./FloatingNav";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <FloatingNav />
      <main className="app__main">{children}</main>
      <BottomNav />
    </div>
  );
}
