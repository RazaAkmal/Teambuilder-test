export const formatPriceToYen = (price: number): string => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export interface SortOption {
  value: string;
  label: string;
}

export const sortOptions: SortOption[] = [
  { value: 'low-to-high', label: 'Price: Low to High' },
  { value: 'high-to-low', label: 'Price: High to Low' },
];

export const sortProductsByPrice = <T extends { price: number }>(
  products: T[],
  sortBy: string
): T[] => {
  if (!products || products.length === 0) return products;
  
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'low-to-high':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'high-to-low':
      return sortedProducts.sort((a, b) => b.price - a.price);
    default:
      return sortedProducts;
  }
};