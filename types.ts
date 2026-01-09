
export enum ViewState {
  INITIAL = 'INITIAL',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  SITE = 'SITE'
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
}

export interface GalleryItem {
  category: string;
  images: string[];
}
