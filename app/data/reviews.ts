export interface Review {
  id: number;
  title: string;
  description: string;
  rating: number;
  image: string;
}

export const reviews: Review[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: "Kenaikan Harga Ram Dipicu Oleh AI Boom?",
  description:
    "siapa sangka permintaan pasar untuk perangkat ini melonjak dari semester lalu.",
  rating: 4,
  image: "/ram.jpg", // simpan di folder public
}));
