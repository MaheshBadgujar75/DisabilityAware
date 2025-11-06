import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false,
      multiplier: 1,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);
  return (
    <div ref={scrollRef} data-scroll-container className="app-root">
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
