export const site = {
  name: "The Soul Layer",
  tagline: "From data to something you can hold.",
  instagramHandle: "thesoullayer", // change to your real handle
  instagramUrl: "https://instagram.com/thesoullayer",
  youtubeUrl: "https://youtube.com",
  linkedinUrl: "https://linkedin.com",
  whatsappNumber: "", // optional, leave blank to hide
  founders: {
    names: ["Ankur", "Sumit"],
    story: [
      "Founded by Ankur and Sumit, The Soul Layer exists at the intersection of imagination and reality.",
      "As two college students fascinated by creation itself, we discovered a technology capable of turning ideas into physical form. What began as experimentation evolved into a mission to build independence, challenge the conventional path, and create products that carry personality, identity, and meaning.",
      "Every keychain, collectible, and custom creation begins as data and ends as something real.",
    ],
  },
};

export function instagramOrderLink(productName: string) {
  const message = `Hi! I'd like to order: ${productName}`;
  return `https://ig.me/m/${site.instagramHandle}?text=${encodeURIComponent(message)}`;
}
