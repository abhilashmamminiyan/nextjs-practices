"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useCart } from "@/app/context/cartContext";
import { ProductService } from "@/app/services/products-services";
import CartToast from "../../components/cartToast";
import Link from "next/link";

export default function ProductDetailPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const params = useParams();
  const productId = Number(params.productId);

  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);

  
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await ProductService.getProductById(productId);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <p className="text-center py-5">Loading product...</p>;

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) addToCart(product);

    setTimeout(() => {
      setIsAdding(false);
      setShowToast(true); 
    }, 500);
  };

  return (
    <div className="py-4">
      <h3 className="mb-4">This is product detail page</h3>

      <div className="row">
        <div className="col-md-6">
          <Link href={`product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
            className="img-fluid object-fit-contain border rounded p-4 h-75"
          /></Link>
        </div>

        <div className="col-md-6">
          <Link href={`product/${product.id}`}>
          <h2 className="mb-3">{product.title}</h2>
          </Link>
          <div className="mb-3">
            <span className="badge bg-secondary">{product.category}</span>
          </div>

          <div className="mb-3">
            <span className="text-muted me-2">Rating:</span>
            <span className="fw-bold">
              {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
            </span>
          </div>

          <h3 className="text-success mb-4">${product.price?.toFixed(2)}</h3>

          <p className="mb-4">{product.description}</p>

          <div className="d-flex gap-3 mb-3">
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="fw-bold px-3">{quantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button
              className={`btn ${isAdding ? "btn-success" : "btn-warning"} flex-grow-1`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? "✓ Adding to Cart..." : "Add to Cart"}
            </button>
          </div>

          <button
            className="btn btn-outline-primary w-100"
            onClick={() => router.push("/products")}
          >
            Back to Products
          </button>
        </div>
      </div>

      {/* ✅ Toast notification */}
      <CartToast
        show={showToast}
        message="Item added to cart!"
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
