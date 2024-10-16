"use client";
import { Input, Space, type GetProps } from "antd";
import { useState } from "react";
import "./searchbar.css";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export default function SearchBar({ setSearchBar }) {
  const [inputValue, setValue] = useState("");

  const onSearch: SearchProps["onSearch"] = () => {
    setValue("");
  };

  const handleInputChange = (e) => {
    setValue(e.target.value.toLowerCase().replace(/\s+/g, "-"));
    setSearchBar(e.target.value.toLowerCase().replace(/\s+/g, "-"));
  };

  return (
    <Space>
      <Search
        className="searchCon"
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
