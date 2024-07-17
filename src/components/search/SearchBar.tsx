"use client";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import { useState, useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
import "./searchbar.css";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export default function SearchBar({setSearchBar}) {
  const [inputValue, setValue] = useState("");
  const { light, dark, isLightTheme } = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark;

  const onSearch: SearchProps["onSearch"] = () => {
    setValue("");
  }

  const handleInputChange = (e) => {
    setValue(e.target.value.toLowerCase().replace(/\s+/g, '-'));
    setSearchBar(e.target.value.toLowerCase().replace(/\s+/g, '-'));
  };

  return (
    <Space>
      <Search
      className={isLightTheme ? "searchCon" : "dark searchCon"}
      placeholder="Search here by title" 
      onSearch={onSearch}
      onChange={handleInputChange}
      enterButton="Search"
      allowClear={true}
      size="large"
      />
    </Space>
  );
}
