import { about } from './about';
import { contact } from './contact';
import { projects } from './projects';
import { resume } from './resume';

export const content = {
  about: {
    title: 'About Me',
    html: about.paragraphs.map(p => `<p>${p}</p>`).join('\n      ')
  },
  resume: {
    title: 'Resume',
    html: `
      <div style="width: 100%; height: 70vh; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; background: #f5f5f5;">
        <iframe 
          src="${resume.pdfPath}" 
          width="100%" 
          height="100%" 
          style="border: none;"
          title="Resume PDF">
        </iframe>
      </div>
      <a href="${resume.pdfPath}" download style="display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600; transition: background 0.2s;">
        Download PDF
      </a>
      </div>
    `
  },
  projects: {
    title: 'Projects',
    html: `
      <div class="projects-grid">
        ${projects.map(project => `
        <div class="project-card ${project.splitDescription ? 'project-card--split' : ''}">
          <div class="project-image" style="aspect-ratio: ${project.aspectRatio ?? '2 / 3'}; flex-basis: ${project.imageWidth ?? '30%'}; max-width: ${project.imageMaxWidth ?? '280px'};">
            <img src="${project.image}" alt="${project.title}" onerror="this.parentElement.innerHTML='Image placeholder'" style="transform: scale(${project.imageScale ?? 1});">
          </div>
          <div class="project-info">
            <div class="project-header">
              <h3 class="project-title">${project.title}</h3>
              ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="github-link">GitHub →</a>` : ''}
            </div>
            ${project.splitDescription
              ? `${project.description.slice(0, 1).map(paragraph => `<p class=\"project-description\">${paragraph}</p>`).join('')}`
              : project.description.map(paragraph => `<p class=\"project-description\">${paragraph}</p>`).join('')}
          </div>
          ${project.splitDescription
            ? `<div class=\"project-desc-rest\">${project.description.slice(1).map(paragraph => `<p class=\"project-description\">${paragraph}</p>`).join('')}</div>`
            : ''}
        </div>`).join('\n\n        ')}
      </div>
    `
  },
  contact: {
    title: 'Contact',
    html: `
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>GitHub:</strong> ${contact.github}</p>
      <p><strong>LinkedIn:</strong> ${contact.linkedin}</p>
      <p>${contact.message}</p>
    `
  }
};
