import { recipes, categories, ingredients } from './dataArrays';

export function getCategoryName(categoryId) {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.name : null;
}

