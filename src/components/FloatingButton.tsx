import { useEffect, useState } from "react";

interface FloatingButtonProps {
  targetId?: string;
  onClick?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  targetId = "hero-section",
  onClick,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const targetBottom = targetElement.offsetTop + targetElement.offsetHeight;
      setShow(window.scrollY > targetBottom - 100); // Show after hero section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId]);

  if (!show) return null;

  return (
    <button
      onClick={
        onClick ??
        (() => {
          alert("Consultation Clicked!");
        })
      }
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white font-medium px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
    >
      Get Free Consultation
    </button>
  );
};

export default FloatingButton;
