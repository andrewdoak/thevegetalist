import { useState } from "react";
import styles from "./AddVegForm.module.css";
import { addOneVegetable } from "../../utilities/vegetables-api";

export default function AddVegForm(props) {
  const [vegetable, setVegetable] = useState({
    type: "",
    variety: "",
    img: "",
    perSF: "1",
    seedStarted: "",
    seedGerminated: "",
    daysToHarvest: "",
    link: "",
    sortOrder: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setVegetable({ ...vegetable, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const createdVegetable = await addOneVegetable(vegetable);
      // setVegetable(createdVegetable);
    } catch {
      setError("Could not add your new vegetable. Try again.");
    }
  }
  /* 
  type: "tomato",
  variety: "atomic purple",
  img: "imgURL",
  perSF: "1",
  seedStarted: "5/31/23",
  seedGerminated: "6/6/23",
  daysToHarvest: "75",
  link: "vegURL",
  */
  return (
    <div>
      {/* className="form-container" */}
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* <h4>Add Vegetable</h4> */}
          {/* VEGETABLE TYPE */}
          <label className={styles.label}>Type (e.g. Tomato)</label>
          <input
            className={styles.input}
            type="text"
            name="type"
            value={vegetable.type}
            onChange={handleChange}
            required
          />
          {/* VEGETABLE VARIETY */}
          <label className={styles.label}>Variety (e.g. Atomic Grape)</label>
          <input
            className={styles.input}
            type="text"
            name="variety"
            value={vegetable.variety}
            onChange={handleChange}
            required
          />
          {/* VEGETABLES PER/SF */}
          <label className={styles.label}>
            #/Square Foot (See instructions)
          </label>
          {/* TODO: Check if the required etc. are right. */}
          <select
            className={styles.dropDown}
            name="perSF"
            onChange={handleChange}
            defaultValue={1}
            required
          >
            <option value="1">1</option>
            <option value="4">4</option>
            <option value="9">9</option>
            <option value="16">16</option>
          </select>
          {/* SEED STARTED */}
          <label className={styles.label}>Day Seed Started</label>
          <input
            className={styles.input}
            type="datetime-local"
            name="seedStarted"
            value={vegetable.seedStarted}
            onChange={handleChange}
            required
          />
          {/* SEED GERMINATED */}
          <label className={styles.label}>Day Seed Sprouted</label>
          <input
            className={styles.input}
            type="datetime-local"
            name="seedGerminated"
            value={vegetable.seedGerminated}
            onChange={handleChange}
            required
          />
          {/* DAYS TO HARVEST */}
          {/* TODO: is this text or a number? */}
          <label className={styles.label}>Ready in (# of days)</label>
          <input
            className={styles.input}
            type="number"
            name="daysToHarvest"
            value={vegetable.daysToHarvest}
            onChange={handleChange}
            required
          />
          <label className={styles.label}>Square #1-32. (ideally)</label>
          <input
            className={styles.input}
            type="number"
            name="sortOrder"
            value={vegetable.sortOrder}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Veg</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
