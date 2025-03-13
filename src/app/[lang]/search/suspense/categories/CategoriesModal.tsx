import Category from "@/components/material/Category/Category";
import CategorySelected from "@/components/material/CategorySelected/CategorySelected";
import Modal from "@/components/material/Modal/Modal";
import { getDictionary } from "@/dictionaries";
import categories from "@/services/categories";
import type { CategoriesT, CategoryT } from "@/services/categories/GET";
import Link from "next/link";

type Props = {
  search?: string;
  category?: CategoriesT;
  t: Pick<Awaited<ReturnType<typeof getDictionary>>, "error" | "search" | "categories">;
}

function translateCategory(name: CategoriesT | undefined, data: CategoryT[] | null): CategoryT | undefined {
  if (name && data) 
    return data.find(d => d.label === name)
  
  return undefined;
}

export default async function CategoriesModal({ search, category, t }: Props) {

  const categoriesData = await categories.GET();
  if (!categoriesData.success) {
    throw new Error(t.error.requests.categories);
  };

  const cat = translateCategory(category, categoriesData.data);

  return (
    <>
    {cat ? (
      <div className="flex items-center gap-2">
        <span>{t.search.filteringBy}</span>
        <CategorySelected 
          search={search ?? ""} 
          name={cat.name} 
          icon={cat.icon}
          altImage={t.categories.alt}
        />
      </div>
    ) : (
      <Modal button={{ name: t.search.modalButton, className: "w-fit" }}>
        <div className="grid gap-6">
          <h2 className="text-xl">{t.search.modalTitle}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {categoriesData &&
              categoriesData.data &&
              categoriesData.data.map((cat) => (
                <Link
                  key={cat.id}
                  href={{
                    pathname: "/search",
                    query: { search: search, category: cat.label },
                  }}
                >
                  <Category
                    name={cat.name} 
                    icon={cat.icon} 
                    altImage={t.categories.alt}
                  />
                </Link>
              ))}
          </div>
        </div>
      </Modal>
    )}
  </>
  )
}