"use client";

import { useRouter } from "next/navigation";

export default function GotoCartButton() {
  const router = useRouter();
  return (
    <div className="my-2">
      <button
        className="btn btn-warning me-3"
        onClick={() => {
          router.push("/carts");
        }}
      >
        Go to Cart (push)
      </button>
      <button className="btn btn-danger"
        onClick={() => {
            router.replace('/carts')
        }}>Go to Cart (replace)
        </button>
    </div>
  );
}
