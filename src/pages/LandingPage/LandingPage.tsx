import styles from "../../style";
import { Services } from "../../widgets/services/Services";
import Hero from "../../widgets/hero/Hero";
import CTA from "../../widgets/cta/CTA";

const LandingPage = () => {
  return (
    <main>
      <div className="snap-start scroll-mt-[12rem]">
        <div className={`bg-background ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>

      <div className="snap-start">
        <section
          className={`bg-background ${styles.flexCenter} h-screen w-full snap-start`}
        >
          <Services />
        </section>
      </div>

      <div className="snap-start scroll-mb-96">
        <section
          className={`bg-background  ${styles.flexCenter} h-screen w-full `}
        >
          <CTA />
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
