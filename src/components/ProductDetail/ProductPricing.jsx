import PropTypes from "prop-types";
import { MOCK_PricingOptions } from "../../mock/MOCKS_DATA.jsx";
import CardProductPricing from "./CardProductPricing.jsx";

const ProductPricing = ({ product }) => {
  if (!product) {
    return null;
  }

  // 1.State :
  // 2.Functions:
  const pricingOptions = MOCK_PricingOptions;

  const sortedPricingOptions = pricingOptions.sort((a, b) => {
    if (a.available === b.available) {
      return a.available - b.available;
    } else {
      return b.available - a.available;
    }
  });
  // 3. Others

  // 4.Render
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-primary">
        Tarifs du service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedPricingOptions.map((option, index) => (
          <CardProductPricing option={option} product={product} key={index} />
        ))}
      </div>
    </div>
  );
};
ProductPricing.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPricing;
