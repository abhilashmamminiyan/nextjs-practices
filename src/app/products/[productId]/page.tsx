import { ProductService } from '@/app/services/products-services';
import React from 'react';

export async function generateMetaData(props:any){
  console.log("generateMetaData: ", props);
  const productId = props.params.productId;
  var product;
  if(productId){
    product = await ProductService.getProductById(productId);
    return {
      title: product.title
    }
  }
  return {
    title:"Product Detail Page"
  }
}

export default async function ProductDetail (props: any) {

const {productId} = await props.params;
var product;

if (productId) {
    product = await ProductService.getProductById(productId)
}

return (<div>
    <h3>{product.title}</h3>
</div>
)
}