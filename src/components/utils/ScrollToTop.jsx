import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har baar jab route ya page change hoga, view automatically top par chala jayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;