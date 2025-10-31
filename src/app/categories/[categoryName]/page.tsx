import ProductCard from "@/app/components/product-card/ProductCard";
import { ProductService } from "@/app/services/products-services";

export default async function CategoryProduct(props: any) {
  console.log("params", props);

  const myParams = props.params;
  const categoryName = decodeURIComponent(myParams.categoryName);
  var productList;

  if (categoryName) {
    productList = await ProductService.getProductsByCategory(categoryName);
  }

  return (
    <div>
      category : <h1>{categoryName.toUpperCase()}</h1>
      <br />
      <h3>{categoryName} Products</h3>
      <div className="d-flex flex-wrap gap-2">
        {productList.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
