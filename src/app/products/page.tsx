import { Metadata } from "next";
import ProductCard from "../components/product-card/ProductCard";
import { ProductService } from "../services/products-services";
import { cookies, headers } from "next/headers";
import GotoCartButton from "../components/GotoCartButton";
import Link from "next/link";
import { Suspense } from "react";
import ProductList from "../components/ProductList";

async function getProducts() {
  const productResp = await ProductService.getProducts();
  return productResp;
}

export const metaData: Metadata = {
  title:"Products List Page"
}

export default async function products(props:any) {
  const products = await getProducts();

  console.log("Products page executed", props);
  const cookieList = await cookies();
  const tokenCookie = cookieList.get('authToken');
  console.log("token is :", tokenCookie, tokenCookie?.value);

  const headerList = await headers();
  const referer = headerList.get('referer');
  console.log("Referer is :", referer);
  console.log("User-Agent",headerList.get('user-Agent'));
  console.log("Host",headerList.get('Host'));

  return (
    <div>
      <GotoCartButton />
      <h3>Products List</h3>
      <Link href="#recommended" prefetch={false}>Go to Recommended Section</Link>
      <Suspense fallback={<span style={{color: 'red'}}>Loading...</span>}>
        <ProductList />
      </Suspense>
      
      <h3 id="recommended">Recommended Products</h3>
      
    </div>
  );
}
