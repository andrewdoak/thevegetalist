import styles from "./NewPlotPage.module.css";

function NewPlotPage() {
  return (
    <div className={styles.NewPlotPage}>
      <h1 className={styles.h1}>New.</h1>
      <p className={styles.p}>
        This page will come pre-loaded with seeded vegetables displayed in a 4x8
        grid of garden squares. You MAY be able to edit N, S, E & W locations on
        this page. You may also be able to edit the direction of morning and
        afternoon sun.
      </p>
      <p className={styles.p}>
        You will be able to EDIT the squares on the page. There will be a link
        to a detail of the vegetable where you can edit what will be in that
        square.
      </p>
    </div>
  );
}

export default NewPlotPage;
