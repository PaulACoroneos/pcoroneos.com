export const TECH_TAGS = ["HTML", "CSS", "JavaScript", "Python"] as const;

export type TechTag = (typeof TECH_TAGS)[number];
