export interface IHotel {
    name: string;
    city: string;
    country: string;
    description: string;
    type: string;
    pricePerNight: number;
    starRating: number;
    facilities: string[];
    imageUrls: FileList[];
    adultCount: number;
    childCount: number;
}