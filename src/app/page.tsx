import Content from "@/components/content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-neutral-900">
      <Content />
      <Footer />
    </div>
  );
}
