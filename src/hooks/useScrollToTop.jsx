import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const useScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setShowScroll(window.pageYOffset > 400);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <FiChevronUp
            className="scrollToTop"
            onClick={backToTop}
            aria-label="Revenir en haut"
            role="button"
            tabIndex={0}
            style={{
                height: 45,
                width: 45,
                borderRadius: 50,
                right: 50,
                bottom: 50,
                display: showScroll ? "flex" : "none",
                padding: 5,
            }}
        />
    );
};

export default useScrollToTop;
