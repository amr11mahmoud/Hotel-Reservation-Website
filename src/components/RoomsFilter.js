import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import { SectionTitle } from "./SectionTitle";
//Get all unique values

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  // map to JSX
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <SectionTitle title="search rooms" />
      <form action="" className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}

        {/* select guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of guest  */}
      </form>
    </section>
  );
}
