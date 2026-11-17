export type ChapterStatus = "published" | "upcoming";

export interface ChapterReference {
  id: number;
  authors: string;
  year: string;
  title: string;
  publication: string;
  url: string;
  doi?: string;
}

export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
      dropcap?: boolean;
    }
  | {
      type: "heading";
      number?: string;
      text: string;
      subtitle?: string;
      id: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "pullquote";
      quote: string;
      attribution?: string;
    }
  | {
      type: "highlight";
      label?: string;
      text: string;
    }
  | {
      type: "list";
      intro?: string;
      ordered?: boolean;
      items: {
        title?: string;
        body: string;
      }[];
    }
  | {
      type: "math";
      label: string;
      title: string;
      formulaLatex?: string;
      formulaDisplay: string;
      variables: { symbol: string; meaning: string }[];
      walkthrough: string[];
      conclusion?: string;
      isHypothetical?: boolean;
    }
  | {
      type: "visual";
      visualId:
        | "calculator-vs-ai"
        | "who-does-what-better"
        | "two-paths-learning"
        | "time-distribution-chart"
        | "four-real-world-scenarios"
        | "dependence-cycle";
      figureNumber: string;
      title: string;
      caption: string;
      disclaimer?: string;
    };

export interface ChapterMeta {
  chapterNumber: number;
  chapterCode: string; // e.g., "01"
  slug: string; // e.g., "chapter1"
  routePath: string; // e.g., "/afterthoughts/chapter1"
  category: string; // e.g., "ARTIFICIAL INTELLIGENCE"
  title: string;
  subtitle?: string;
  editorialSummary?: string;
  publishedAt?: string;
  readingTime?: string;
  wordCount?: number;
  status: ChapterStatus;
}

export interface ChapterDocument extends ChapterMeta {
  coverCaption?: string;
  blocks: ContentBlock[];
  closingReflection: {
    quote: string;
    finalQuestion: string;
  };
  authorNote: string;
  hashtags: string[];
  references: ChapterReference[];
}
