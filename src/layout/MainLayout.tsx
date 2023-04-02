import Header from "@components/Header";
import Nav from "@components/Nav";

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
