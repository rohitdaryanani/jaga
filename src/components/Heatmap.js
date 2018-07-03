import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

const Heatmap = (props) => {
  const githubClassForValue =(value) => {
    if (!value) {
      return 'color-empty';
    }
    return `color-github-${value.count}`;
  };

  const customTitleForValue = (value) => {
    return value ? `You're hovering over ${value.date} with value ${value.count}` : null;
  };

  const customTooltipDataAttrs = { 'data-toggle': 'tooltip' };

  return (
    <div className="col-xs-12" style={{width: 520, marginLeft:50, marginTop:40}}>
      <CalendarHeatmap
        values={props.data}
        onClick={ (value) => { alert(value.count); }}
        classForValue={githubClassForValue}
        titleForValue={customTitleForValue}
        tooltipDataAttrs={customTooltipDataAttrs}
      />
    </div>
  );
};

export default Heatmap;