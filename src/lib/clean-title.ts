/** Strips trailing parenthetical suffixes from post titles for display.
 *  e.g. "Two Sum" → "Two Sum"
 *  Does not affect RSS feed or MDX source files.
 */
export function cleanTitle(title: string): string {
  return title.replace(/\s*\([^)]*\)\s*$/, "").trim();
}
