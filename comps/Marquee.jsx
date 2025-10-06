import styles from "../styles/Marquee.module.css";
import Products from "../app/Products";
import { memo } from "react";

const Marquee = ({ products }) => {
  console.log("marquee");
  
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="mt-20">
      <h1 className="text-center text-secondary text-xl font-extrabold">
        You may also like
      </h1>

      <section className="mt-10 relative h-52 sm:h-96 w-full overflow-hidden">
        <div className={`${styles.marqueeContainer}`}>
          <div className={`${styles.marqueeContent}`}>
            {products.map((product) => (
              <div key={`${product._id}-1`} className="flex-shrink-0">
                <Products gap={"mr-5"} products={product} />
              </div>
            ))}
            {products.map((product) => (
              <div key={`${product._id}-2`} className="flex-shrink-0">
                <Products gap={"mr-5"} products={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Marquee);
