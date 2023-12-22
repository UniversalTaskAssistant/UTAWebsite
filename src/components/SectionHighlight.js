import { useEffect } from "react";

const useActiveSectionHighlighting = (sectionIds) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the corresponding `Nav.Link` for the section in view.
            const navLink = document.querySelector(
              `.nav-link[href="${entry.target.id}"]`
            );
            if (navLink) {
              // Remove active class from all nav links
              document.querySelectorAll(".nav-link.active").forEach((link) => {
                link.classList.remove("active");
              });
              // Add active class to the current nav link
              navLink.classList.add("active");
            }
          }
        });
      },
      { rootMargin: "0px", threshold: 0.5 } // Threshold of 0.5 means at least 50% of the item is visible
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds]);
};

export default useActiveSectionHighlighting;
