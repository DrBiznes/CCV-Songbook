import type { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main className="app__main">{children}</main>
      <BottomNav />
    </div>
  );
}
