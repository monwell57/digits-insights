import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hero />
      <BlogSection />
    </main>
  );
}
