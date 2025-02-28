export interface ShowImage {
  medium: string;
  original: string;
}

export interface IShow {
  id: number;
  name: string;
  summary: string;
  image: ShowImage;
}

export interface IShowApi {
  score: number;
  show: IShow;
}
