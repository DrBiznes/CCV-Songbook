export interface Song {
  slug: string;
  title: string;
  category: string;
  page: number;
  source_page_range?: string;
  transcription: string;
  notes?: string;
  audio_url?: string;
  abc?: string;
  metadata?: Record<string, unknown>;
}

export interface SongIndexEntry {
  file: string;
  title: string;
  category: string;
  page: number;
  source_page_range?: string;
}
