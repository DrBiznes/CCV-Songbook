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
