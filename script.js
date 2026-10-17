document.addEventListener("DOMContentLoaded", () => {
  // Set profile info
  if (window.portfolioData) {
    const { profile, projects, skills } = window.portfolioData;

    // Header & Hero text
    const headerName = document.getElementById("header-name");
    const heroTagline = document.getElementById("hero-tagline");
    if (headerName && profile.name) headerName.textContent = profile.name;
    if (heroTagline && profile.tagline) heroTagline.textContent = profile.tagline;

    // Current Year
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Render Projects
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer && Array.isArray(projects)) {
      projectsContainer.innerHTML = projects.map(proj => {
        const badgeClass = proj.accent === 'emerald' ? 'badge-emerald' : 
                           proj.accent === 'purple' ? 'badge-purple' : 'badge-cyan';
        
        const cardAccentVar = proj.accent === 'emerald' ? 'var(--accent-emerald)' : 
                              proj.accent === 'purple' ? 'var(--accent-purple)' : 'var(--accent-cyan)';
        
        const cardGlowVar = proj.accent === 'emerald' ? 'var(--accent-emerald-glow)' : 
                            proj.accent === 'purple' ? 'var(--accent-purple-glow)' : 'var(--accent-cyan-glow)';

        const highlightsHtml = proj.highlights && proj.highlights.length ? `
          <ul class="project-highlights">
            ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        ` : '';

        const tagsHtml = proj.tags && proj.tags.length ? `
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
        ` : '';

        return `
          <article class="project-card" style="--card-accent: ${cardAccentVar}; --card-glow: ${cardGlowVar};">
            <div class="card-top">
              <span class="card-badge ${badgeClass}">${proj.badge || proj.category}</span>
              <div class="card-icon">⚡</div>
            </div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-tagline">${proj.tagline}</p>
            <p class="project-desc">${proj.description}</p>
            ${highlightsHtml}
            ${tagsHtml}
            <div class="card-actions">
              <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="action-link link-live">
                <span>View Demo</span>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="action-link link-code">
                <span>Source</span>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            </div>
          </article>
        `;
      }).join('');
    }

    // Render Skills
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer && Array.isArray(skills)) {
      skillsContainer.innerHTML = skills.map(group => `
        <div class="skill-category-card">
          <h4 class="skill-category-title">
            <span>🔹</span>
            <span>${group.category}</span>
          </h4>
          <div class="skill-pill-list">
            ${group.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    // Render Footer Links
    const socialLinks = document.getElementById("social-links");
    if (socialLinks && profile.socials) {
      const links = [];
      if (profile.githubUsername) {
        links.push(`<a href="https://github.com/${profile.githubUsername}" target="_blank">GitHub</a>`);
      } else if (profile.socials.github) {
        links.push(`<a href="${profile.socials.github}" target="_blank">GitHub</a>`);
      }
      if (profile.socials.linkedin) links.push(`<a href="${profile.socials.linkedin}" target="_blank">LinkedIn</a>`);
      if (profile.socials.twitter) links.push(`<a href="${profile.socials.twitter}" target="_blank">X / Twitter</a>`);
      if (profile.email) links.push(`<a href="mailto:${profile.email}">Email</a>`);
      
      socialLinks.innerHTML = links.join('');
    }
  }
});
