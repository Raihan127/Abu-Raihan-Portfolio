      const currentYear = document.getElementById("year");
      currentYear.textContent = new Date().getFullYear();

      const revealTargets = document.querySelectorAll(
        ".section-head, .about-grid, .skill, .project, .timeline-card, .contact-box",
      );
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if ("IntersectionObserver" in window && !prefersReducedMotion) {
        const observer = new IntersectionObserver(
          (entries, activeObserver) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                activeObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12 },
        );

        revealTargets.forEach((element, index) => {
          element.classList.add("reveal");
          element.style.transitionDelay = `${(index % 4) * 80}ms`;
          observer.observe(element);
        });
      }