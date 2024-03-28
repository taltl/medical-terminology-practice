import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Select from "react-select";

function App() {

  const colors = [{label: 'green', value: 0}, {label: 'blue', value: 1}, {label: 'red', value: 2}, {label: 'yellow', value: 3}];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(ref.current){
      console.log("asd: ", ref.current);
      
      ref.current?.focus();
    }
  }, []);

  return (
    <div style={{backgroundColor:'blue', width: '300px', height: '300px'}} ref={ref}>
      <h2>שלום לכולם</h2>
      <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={colors[2]}
          // isDisabled={false}
          // isLoading={isLoading}
          // isClearable={true}
          isRtl={true}
          // isSearchable={isSearchable}
          name="color"
          options={colors}
        />
    </div>
  );
}

export default App;