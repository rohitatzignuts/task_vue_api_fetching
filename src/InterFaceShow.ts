
export interface Show {
    id: number;
    image: { original: string };
    name: string;
    rating: { rating: number };
    genres: string[];
    summary: string;
    officialSite: string | null; // Ensure officialSite can be null
}