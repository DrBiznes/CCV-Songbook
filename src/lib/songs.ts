import type { Song } from "./types";

type RawSong = Omit<Song, "slug">;

const modules = import.meta.glob<RawSong>("../data/songs/*.json", {
  eager: true,
  import: "default",
});

function slugFromPath(path: string): string {
  const base = path.split("/").pop() ?? path;
  return base.replace(/\.json$/, "");
}

function bySong(a: Song, b: Song): number {
  if (a.page !== b.page) return a.page - b.page;
  return a.title.localeCompare(b.title);
}

export const allSongs: Song[] = Object.entries(modules)
  .map(([path, raw]) => ({ ...raw, slug: slugFromPath(path) }))
  .sort(bySong);

export const songsBySlug: Record<string, Song> = Object.fromEntries(
  allSongs.map((s) => [s.slug, s]),
);

export function songsAlphabetical(): Song[] {
  return [...allSongs].sort((a, b) =>
    a.title.localeCompare(b.title, "en", { sensitivity: "base" }),
  );
}

export function categories(): string[] {
  return Array.from(new Set(allSongs.map((s) => s.category))).sort();
}

export function songsInCategory(category: string): Song[] {
  return allSongs.filter((s) => s.category === category);
}

export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/[\/&]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function categoryFromSlug(slug: string): string | undefined {
  return categories().find((c) => categorySlug(c) === slug);
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function commonPrefixLen(a: string, b: string): number {
  let i = 0;
  const max = Math.min(a.length, b.length);
  while (i < max && a[i] === b[i]) i++;
  return i;
}

export function lyricsWithoutTitle(song: Song): string {
  const text = song.transcription;
  if (!text) return text;
  const splitIdx = text.indexOf("\n\n");
  if (splitIdx === -1) return text;
  const header = text.slice(0, splitIdx);
  const rest = text.slice(splitIdx + 2);
  const nh = normalize(header);
  const nt = normalize(song.title);
  if (!nh || !nt) return text;
  const cp = commonPrefixLen(nh, nt);
  const shorter = Math.min(nh.length, nt.length);
  if (cp >= 5 && cp / shorter >= 0.6) {
    return rest.replace(/^\s+/, "");
  }
  return text;
}
