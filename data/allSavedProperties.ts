export interface SavedProperty {
  id: string;
  city: string;
  adults: number;
  children: number;
  mainPic: any;
  title: string;
  recommendationIndex: number;
  rate: number;
  rateDesc: string;
  reviewCount: number;
  location: string;
  startDate: string;
  endDate: string;
}

export const ALL_SAVED_PROPERTIES: SavedProperty[] = [
  {
    id: '1',
    city: 'Tokyo',
    adults: 3,
    children: 0,
    mainPic: require('@/assets/images/properties/istockphoto-1990444472-2048x2048.jpg'),
    title: '星空と Riviere',
    recommendationIndex: 3,
    rate: 6.5,
    rateDesc: 'Pleasant',
    reviewCount: 2,
    location: 'Sumida Ward, Tokyo',
    startDate: 'Sat, Dec 20',
    endDate: 'Tue, Dec 23'
  },
  {
    id: '2',
    city: 'Tokyo',
    adults: 2,
    children: 0,
    mainPic: require('@/assets/images/properties/pexels-christa-grover-977018-1910472.jpg'),
    title: 'Six7 Asakusa',
    recommendationIndex: 3,
    rate: 8.1,
    rateDesc: 'Very Good',
    reviewCount: 85,
    location: 'Sumida Ward, Tokyo',
    startDate: 'Sat, Dec 14',
    endDate: 'Tue, Dec 21'
  },
  {
    id: '3',
    city: 'Osaka',
    adults: 2,
    children: 1,
    mainPic: require('@/assets/images/properties/pexels-hello-pipcke-1008732483-20285350.jpg'),
    title: 'Osaka Castle Hotel',
    recommendationIndex: 4,
    rate: 7.5,
    rateDesc: 'Good',
    reviewCount: 201,
    location: 'Osaka Castle, Osaka',
    startDate: 'Sat, Dec 20',
    endDate: 'Tue, Dec 29'
  },
]