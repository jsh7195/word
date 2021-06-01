export interface WordsItem {
    text: string;
    second: number;
    spend: number;
    success: boolean;
}

export interface ClockType {
    limit: number;
    index: number;
    text: string;
  }

 export interface PointType {
    point: number;
 }

 export interface ButtonType {
    text: string;
    url: string;
    onClick?: any;
}