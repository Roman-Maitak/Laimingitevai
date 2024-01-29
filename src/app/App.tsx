import styles from "../style";
import {
  Billing,
  Buisness,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "../components";

const App = () => {
  return (
    <div className={`w-full`}>
      <header className="">
        <Navbar />
      </header>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} text-white`}> */}
      <Billing />
      <Stats />
      <Buisness />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
    //   </div>
    // </div>
  );
};

export default App;
