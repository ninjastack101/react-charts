/**
 * A function that accepts projects as an array of objects,
 * where each object has keys name and slug.
 * 
 * @param {Array.<Project>} projects Array of projects.
 * @returns  An array of objects with each object having id, label and to attribute.
 */
const formatProjectsForSidebar = projects =>
  projects.map(project => ({
    id: project.slug,
    to: project.slug,
    label: project.name,
  }));

export default formatProjectsForSidebar;
