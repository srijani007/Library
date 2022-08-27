export interface Book{
    BookId: Number;
    Logo : string ;
    Title : string;
    Category : string;
    Price : Number;
    AuthorName : string;
    Publisher : string;
    PublishedDate : Date;
    Content : string;
    Active : string;
    CreatedDate : Date;
    ModifiedDate : Date;
}

export interface Getbookbyid{
    BookId: Number;
}