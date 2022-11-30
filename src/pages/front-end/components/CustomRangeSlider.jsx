import React from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const CustomRangeSlider = ({ values, setValues, min, max, step }) => {
    return (
        <div className='custom_range_slider'>
            <RangeSlider min={min} max={max} step={step} onInput={(e) => { setValues([e[0], e[1]]) }} />
            <span className='min '>min</span>
            <span className='zero'>{values[0]}</span>
            <span className='max_num'>{values[1]} </span>
            <span className='max '>max</span>
        </div>
    )
}

export default CustomRangeSlider