(() => {
  "use strict";
  const config = window.portfolioConfig || {};
  const projects = Array.isArray(window.portfolioProjects) ? window.portfolioProjects : [];
  const $ = (selector) => document.querySelector(selector);

  // Update profile photo only when the local image exists.
  const photo = $("#profilePhoto");
  const placeholder = $("#profilePlaceholder");
  if (photo && placeholder) {
    photo.addEventListener("load", () => {
      photo.hidden = false;
      placeholder.hidden = true;
    });
    photo.addEventListener("error", () => {
      photo.hidden = true;
      placeholder.hidden = false;
    });
    photo.src = config.photoPath || "assets/profile.jpg";
  }

  // Keep profile links and contact information driven by projects.js.
  document.querySelectorAll('a[href="https://github.com/etanshusangwan"]').forEach((link) => {
    if (config.github) link.href = config.github;
  });
  const linkedinLink = document.querySelector(".linkedin-link");
  if (linkedinLink) {
    if (config.linkedin) {
      linkedinLink.href = config.linkedin;
      linkedinLink.title = "LinkedIn profile";
    } else {
      linkedinLink.hidden = true;
    }
  }
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.href = `mailto:${config.email || ""}`;
  });

  const projectGrid = $("#projectGrid");
  const safeUrl = (value) => {
    if (!value) return "";
    try {
      const parsed = new URL(value, window.location.href);
      return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
    } catch (_) { return ""; }
  };
  const makeLink = (label, url, secondary = false) => {
    const clean = safeUrl(url);
    if (!clean) return `<span class="project-link disabled" aria-label="${label}: not available yet">${label} · Soon</span>`;
    return `<a class="project-link${secondary ? " secondary" : ""}" href="${clean}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  };
  const projectCard = (project) => {
    const isLive = project.status === "Live";
    const tags = (project.technologies || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
    const previewClass = project.preview === "expense" ? "preview-expense" : "";
    return `
      <article class="project-card">
        <div class="project-preview ${previewClass}" aria-hidden="true">
          <div class="mini-window"><div class="mini-top"><i></i><i></i><i></i></div>
            <div class="mini-metrics"><span></span><span></span><span></span></div><div class="mini-chart"></div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-meta"><span class="project-status ${isLive ? "" : "progress"}">${escapeHtml(project.status || "In progress").toUpperCase()}</span><span class="project-category">${escapeHtml(project.category || "Project")}</span></div>
          <h3>${escapeHtml(project.title || "Untitled project")}</h3>
          <p>${escapeHtml(project.description || "")}</p>
          <div class="tag-list">${tags}</div>
          <div class="project-actions">${makeLink("Live Demo", project.liveUrl)}${makeLink("GitHub", project.githubUrl, true)}</div>
        </div>
      </article>`;
  };
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }
  if (projectGrid) {
    projectGrid.innerHTML = projects.map(projectCard).join("");
    const count = projects.length.toString().padStart(2, "0");
    if ($("#projectCount")) $("#projectCount").textContent = count;
    if ($("#projectCountLabel")) $("#projectCountLabel").textContent = `${count} PROJECT${projects.length === 1 ? "" : "S"}`;
  }

  const skillList = $("#skillList");
  if (skillList) {
    skillList.innerHTML = (config.skills || []).map((skill) =>
      `<div class="skill-pill"><span>✦</span><div>${escapeHtml(skill.name)}<br><small>${escapeHtml(skill.level || "Learning")}</small></div></div>`
    ).join("");
  }

  // Mobile navigation.
  const sidebar = $("#sidebar");
  const menuToggle = $("#menuToggle");
  if (sidebar && menuToggle) {
    menuToggle.addEventListener("click", () => {
      const open = sidebar.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    sidebar.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      sidebar.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Active navigation and section label.
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sectionLabel = $("#currentSection");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      if (sectionLabel) {
        const active = navLinks.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
        if (active) sectionLabel.textContent = active.textContent.trim();
      }
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  document.querySelectorAll(".section-anchor").forEach((section) => sectionObserver.observe(section));

  // A local theme preference for the current browser session.
  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      themeToggle.setAttribute("aria-pressed", String(document.body.classList.contains("light-mode")));
    });
  }

  const copyButton = $("#copyEmail");
  const copyStatus = $("#copyStatus");
  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(config.email || "");
        if (copyStatus) copyStatus.textContent = "Email copied.";
      } catch (_) {
        if (copyStatus) copyStatus.textContent = `Email: ${config.email || ""}`;
      }
    });
  }
  if ($("#year")) $("#year").textContent = new Date().getFullYear();
})();
