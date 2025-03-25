import React, { ComponentProps, useState } from "react";
import "./styles.scss";

export type ISearchBar = {
  optionSearch: any;
  register:  any;
};

export const SearchBar = ({ 
  optionSearch,
  register
} :ISearchBar & ComponentProps<"input">) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className={`searchbar ${isFocused ? "focused" : ""}`}>
        <select name="" id="">
        {optionSearch?.map((opt: any) => {
          return (
            <option key={opt?.value} value={opt?.value}>
              {opt?.text}
            </option>
          );
        })}
        </select>
        <div className="line"></div>
        <input
          placeholder="Pesquise"
          type="search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </>
  );
};
