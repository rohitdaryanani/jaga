import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

const Heatmap = props => {
  const githubClassForValue = value => {
    if (!value) {
      return 'color-empty';
    }
    return `color-github-${value.count}`;
  };

  function customTitleForValue(value) {
    return value
      ? `You're hovering over ${value.date} with value ${value.count}`
      : null;
  }

  function customOnClick(value) {
    if (value) {
      alert(`Clicked on ${value.date} with value ${value.count}`);
    }
  }

  const customTooltipDataAttrs = { 'data-toggle': 'tooltip' };
  return (
    <div
      className="col-xs-12"
      style={{ width: 520, marginLeft: 50, marginTop: 40 }}
    >
      <CalendarHeatmap
        values={props.data}
        classForValue={githubClassForValue}
        titleForValue={customTitleForValue}
        tooltipDataAttrs={customTooltipDataAttrs}
        onClick={customOnClick}
      />
    </div>
  );
};

export default Heatmap;
