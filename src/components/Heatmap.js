import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

const Heatmap = (props) => {
  const githubClassForValue =(value) => {
    if (!value) {
      return 'color-empty';
    }
    return `color-github-${value.count}`;
  };
  return (
    <div style={{width: 800}}>
      <CalendarHeatmap
        values={props.data}
        onClick={ (value) => { alert(value.count); }}
        classForValue={githubClassForValue}
      />
    </div>
  );
};

export default Heatmap;