"use client";

import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import BuilderSidebar from "./components/BuilderSidebar";

export default function Home() {
  return (
    <main>
      <Hero 
        title="Motion.Builder"
        subtitle="AI-Powered Animation Builder"
        accentColor="indigo"
      />
      <Capabilities 
        title="Capabilities"
        accentColor="indigo"
      />
    </main>
  );
}
