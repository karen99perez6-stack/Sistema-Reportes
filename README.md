
# avance-2import { useState } from "react";

export default function ProductCard({ product }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="product-card">
      {imgFailed || !product.image ? (
        <div className="product-card__placeholder">💄</div>
      ) : (
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={() => setImgFailed(true)} // algunas imágenes de la API están rotas
        />
      )}
      <h4>{product.name}</h4>
      <p className="product-card__brand">{product.brand}</p>
      <p>{product.price ? `$${product.price.toFixed(2)}` : "Precio no disponible"}</p>

      <div className="product-card__colors">
        {product.colors.map((c) => (
          <span
            key={c.hex_value}
            title={c.colour_name}
            style={{ background: c.hex_value }}
            className="color-dot"
          />
        ))}
      </div>
    </article>
  );
}
