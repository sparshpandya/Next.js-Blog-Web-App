import { fetchCategories } from "@/actions/fetchCategories";
import Link from "next/link";

export default async function Categories() {
  const categories = await fetchCategories();
  return (
    <div className="eblog-right-side-post category2">
      <p className="title">Browse Categories</p>
      <div className="category-area">
        <ul className="category-wrapper">
          {categories && categories.length > 0 ? (
            categories.map((category) => {
              const { id, name } = category;

              return (
                <>
                  <li>
                    <div className="image-area">
                      <Link href={`/blog/categories/${id}`}>
                        <img src="/images/category/category-01.jpg" alt="" />
                      </Link>
                      <p className="text">
                        <Link href={`/blog/categories/${id}`}>{name}</Link>
                      </p>
                    </div>
                  </li>
                </>
              );
            })
          ) : (
            <p>No Categories</p>
          )}
        </ul>
      </div>
    </div>
  );
}
