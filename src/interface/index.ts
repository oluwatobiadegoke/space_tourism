export type Routes = {
  id: string;
  name: string;
  to: string;
};

type Images = {
  png: string;
  webp: string;
};

export interface DestinationProps {
  description: string;
  distance: string;
  name: string;
  travel: string;
  images: Images;
}

export interface CrewProps {
  bio: string;
  images: Images;
  name: string;
  role: string;
}

export interface TechProps {
  description: string;
  images: {
    landscape: string;
    portrait: string;
  };
  name: string;
}

export type DataType = {
  crew: CrewProps[];
  destinations: DestinationProps[];
  technology: TechProps[];
};
