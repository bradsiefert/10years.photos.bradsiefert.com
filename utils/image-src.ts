/** '../photos/places/01of70.jpg' → '/photos/places/01of70.jpg' */
export function normalizeImageSrc(src: string): string {
  const cleaned = src.replace(/^\.\.\//, '').replace(/^@\//, '')
  return cleaned.startsWith('/') ? cleaned : `/${cleaned}`
}
