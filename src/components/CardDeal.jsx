import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Track your lifts <br className="sm:block hidden" /> with built in graphs.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Tracking your progress has never been easier. Use our built in graphs to get insight on how you're progressing.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
    <img src={card} alt="billing" className="w-[100%] h-[100%] rounded-[10px]" />
    </div>
  </section>
);

export default CardDeal;
