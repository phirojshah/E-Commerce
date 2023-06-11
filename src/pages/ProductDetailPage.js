import React from "react";
import NavBar from "../features/navbar/NavBar";
import ProductDetail from "../features/product-list/components/ProductDetail";

function ProductDetailPage() {
  return (
    <div>
      <NavBar>
        <ProductDetail />
      </NavBar>
    </div>
  );
}

export default ProductDetailPage;
