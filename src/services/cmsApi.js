const API_URL = import.meta.env.VITE_CMS_API_URL || 'http://localhost:8055';

export const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/items/PortfolioWorks`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`);
  }
  
  const data = await response.json();
  return data.data;
};

export const fetchProjectImageUrl = (assetId) => {
  if (!assetId) return null;
  return `${API_URL}/assets/${assetId}`;
};

export const fetchProjectsWithImages = async () => {
  const projects = await fetchProjects();
  
  return projects.map(project => ({
    id: project.id,
    header: project.Title,
    description: project.Content,
    link: project.Link,
    specialLink: project.LinkSpecial,
    tag: project.Tag ? project.Tag[0] : null,
    date: project.Date,
    thumbnail: fetchProjectImageUrl(project.Thumbnail)
  }));
};

export const fetchLatestProjects = async (count = 2) => {
  const projects = await fetchProjectsWithImages();
  
  const sorted = [...projects].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  
  return sorted.slice(0, count);
};

export const fetchGalleryItems = async () => {
  const response = await fetch(`${API_URL}/items/PortfolioGallery`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch gallery: ${response.status}`);
  }
  
  const data = await response.json();
  return data.data;
};

export const fetchGalleryWithDetails = async () => {
  const items = await fetchGalleryItems();
  
  return items.map(item => ({
    id: item.id,
    header: item.Header,
    type: item.Type,
    description: item.Description,
    date: item.Date,
    link: item.Link,
    specialLink: item.LinkSpecial,
    rank: item.Rank,
    specialLinkHeader: item.SpecialLinkHeader
  }));
};

export const fetchAchievements = async () => {
  const items = await fetchGalleryWithDetails();
  return items.filter(item => item.type === 'Datathon');
};

export const fetchCertificates = async () => {
  const items = await fetchGalleryWithDetails();
  return items.filter(item => item.type === 'Certificate');
};
