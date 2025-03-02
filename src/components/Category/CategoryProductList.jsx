import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const CategoryProductList = ({ element }) => {
  return (
    <main className="mt-6">
      <h2>Produits du service</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {element.products.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </section>
    </main>
  );
};
CategoryProductList.propTypes = {
  element: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        prix: PropTypes.number.isRequired,
        disponible: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CategoryProductList;
