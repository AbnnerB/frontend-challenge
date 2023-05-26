import { FilterType } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";

export default function GetCategoryByType(type: FilterType) {
  if (type === FilterType.MUG) return "mugs";
  if (type === FilterType.SHIRT) return "t-shirts";
  return "";
}

export function getFieldPriority(priority: PriorityTypes) {
  if (priority === PriorityTypes.NEWS)
    return { field: "created_at", order: "ASC" };
  if (priority === PriorityTypes.BIGGEST_PRICE)
    return { field: "price_in_cents", order: "ASC" };
  if (priority === PriorityTypes.MINOR_PRICE)
    return { field: "price_in_cents", order: "DSC" };

  return { field: "sales", order: "DSC" };
}

export const mountQuery = (type: FilterType, priority: PriorityTypes) => {
  if (type === FilterType.ALL && priority === PriorityTypes.POPOULARITY) {
    return `
  query {
      allProducts(sortField : "sales", sortOrder: "DSC") {
          id
          name
          price_in_cents
          image_url
      }
  }`;
  }

  const sortSettings = getFieldPriority(priority);
  const categoryFilter = GetCategoryByType(type);

  return `
  query {
      allProducts(sortField : "${sortSettings.field}", sortOrder : "${
    sortSettings.order
  }", ${categoryFilter ? `filter: {category: "${categoryFilter}"}` : ""}
  ) {
        id
        name
        price_in_cents
        image_url
    }
  }`;
};
