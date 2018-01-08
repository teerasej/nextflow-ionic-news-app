import { DateTime } from "ionic-angular/components/datetime/datetime";

export interface INewsInfo {
    id: string;
    title: string;
    imageUrl: string;
    content: string;
    createdDate: DateTime;
}
