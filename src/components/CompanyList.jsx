import React from "react";
import { Select } from "antd";
import companies from "../utility/companies.json";

const CompanyList = () => {
  const { Option } = Select;

  console.log(companies);
  const children = [];
  for (let i = 10; i < companies.length; i++) {
    children.push(<Option key={Math.random()}>{companies[i].industry}</Option>);
  }
  return (
    <div>
      <Select
        mode="multiple"
        size="large"
        placeholder="Select the Industry"
        style={{ width: "50vw" }}
        aria-autocomplete={true}
      >
        {children}
      </Select>
    </div>
  );
};

export default CompanyList;
