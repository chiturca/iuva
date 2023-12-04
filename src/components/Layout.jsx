import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center h-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
