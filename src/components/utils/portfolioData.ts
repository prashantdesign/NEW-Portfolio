export interface Project {
  title: string;
  category: string;
  tools: string;
  image: string; // This can be a GDrive link or a local path
}

// Function to convert GDrive links to direct image links
export const processGDriveLink = (url: string): string => {
  if (!url) return "";

  // Check if it's a google drive link
  if (url.includes("drive.google.com")) {
    // Regex to extract the file ID
    // Matches formats like:
    // https://drive.google.com/file/d/1X-xxx/view
    // https://drive.google.com/open?id=1X-xxx
    const idMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);

    if (idMatch && idMatch[1]) {
      // return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
      // Google drive uc proxy sometimes blocks hotlinking for large files, a better alternative for images:
      return `https://lh3.googleusercontent.com/d/${idMatch[1]}=w1000?authuser=0`;
    }
  }

  // If not a gdrive link or parsing failed, return original URL
  return url;
};

// Paste your projects here.
// Top 6 will be shown on the main page.
// All projects will be shown in the Full Portfolio view.
export const allProjects: Project[] = [
  {
    title: "Brand Identity Design",
    category: "Branding",
    tools: "Illustrator, Photoshop, Figma",
    image: "https://lh3.googleusercontent.com/d/1TtYsU4Z0kbTCSJsN2h7f8wGv8Zt5Pdah",
  },
  {
    title: "Amazon A+ Content",
    category: "E-Commerce",
    tools: "Photoshop, Canva, Midjourney",
    image: "https://lh3.googleusercontent.com/d/1sSPnZnKS6GZjthgidZjf6jm0WTUPxDa8",
  },
  {
    title: "Social Media Campaign",
    category: "Marketing",
    tools: "Photoshop, AI Tools",
    image: "https://lh3.googleusercontent.com/d/1t6LLJ2vRvQ-wNpX1pIR7-Lu01prJqxfq",
  },
  {
    title: "Product Packaging",
    category: "Print Design",
    tools: "Illustrator, InDesign",
    image: "https://lh3.googleusercontent.com/d/1nkao2km-y9lXxHjKdRbWr1SqXA-Kyw6W",
  },
  {
    title: "Digital Ads",
    category: "Advertisement",
    tools: "Photoshop, Canva",
    image: "https://lh3.googleusercontent.com/d/1-GJ0JF_4qObITHkRgtPuXpLFygHdRI2C",
  },
  // Add more projects here
];

export const top6Projects = allProjects.slice(0, 6);
