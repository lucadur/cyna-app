import PropTypes from "prop-types";
import useSortedServices from "../../hooks/useSortedServices";
import ProductCard from "./ProductCard";

const CategoryProductList = ({ element }) => {
  // 1.State
  // 2.Function
  // 3.Others
  const sortedProducts = useSortedServices(element);
  // 4.Render
  return (
    <main className="mt-6">
      <h2>Produits et Services</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </section>
    </main>
  );
};

CategoryProductList.propTypes = {
  element: PropTypes.object.isRequired,
};

export default CategoryProductList;
