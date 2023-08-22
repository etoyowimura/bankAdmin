import { AutoComplete, Input } from "antd";
import React, { useCallback, useState } from "react";

const SearchOptions = ({
  SearchResult,
  onSelect,
  placeholder,
  defaultValue,
}: {
  SearchResult: any;
  onSelect: any;
  placeholder: string;
  defaultValue?: string | undefined;
}) => {
  const [options, setOptions] = useState<Array<any>>([]);

  const debounce = (func: any) => {
    let timer: any;
    return function (...args: any) {
      // const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func(args[0]);
      }, 1000);
    };
  };

  const optimizedFn = useCallback(() => {
    const handleSearch = async (value: any) => {
      if (value) {
        let data = await SearchResult(value);
        setOptions(data);
      } else {
        setOptions([]);
      }
    };

    return debounce(handleSearch);
  }, [SearchResult]);

  return (
    <AutoComplete
      popupMatchSelectWidth={false}
      style={{ width: 300 }}
      options={options}
      onSelect={onSelect}
      onSearch={optimizedFn}
      defaultValue={defaultValue}
      onChange={onSelect}
    >
      <Input.Search allowClear placeholder={placeholder} enterButton />
    </AutoComplete>
  );
};

export default SearchOptions;
