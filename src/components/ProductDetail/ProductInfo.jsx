// 1.State :
// 2.Functions:
// 3. Others

// Render
const ProductInfo = ({ product }) => {
  return (
    <div className="mt-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <span className="block mt-4 text-2xl font-semibold text-green-600">
        {product.prix}€
      </span>
      <span
        className={`block mt-2 text-sm font-semibold ${
          product.disponible ? "text-green-500" : "text-red-500"
        }`}
      >
        {product.disponible ? "Disponible immédiatement" : "Indisponible"}
      </span>
    </div>
  );
};

export default ProductInfo;
