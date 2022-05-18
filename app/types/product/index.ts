type ProductTypes = {
  id?: string;
  category?: string;
  details: {
    brand?: string;
    title?: string;
    description?: string;
    originalPrice?: number;
    discountPrice?: number;
  };
};

export type { ProductTypes };
