import React, { Component } from 'react';
import { Slider } from 'antd';
import { allKanas } from '../kanas';
import { SliderValue } from 'antd/lib/slider';

type KanaLevelSelectorProps = {
    maxKanaIndex: number;

    onMaxKanaIndexChange: (maxKanaIndex: number) => void;
}

let marks = {
    5:  {label: 'aiueo', style: {color: "white"}},
    10: {label: 'k-', style: {color: "white"}},
    15: {label: 's-', style: {color: "white"}},
    20: {label: 't-', style: {color: "white"}},
    25: {label: 'n-', style: {color: "white"}},
    30: {label: 'h-', style: {color: "white"}},
    35: {label: 'm-', style: {color: "white"}},
    38: {label: 'y-', style: {color: "white"}},
    43: {label: 'r-', style: {color: "white"}},
    45: {label: 'w-', style: {color: "white"}},
    46: {label: 'n ', style: {color: "white"}},
};

class KanaLevelSelector extends Component<KanaLevelSelectorProps, {}> {

    constructor(props: KanaLevelSelectorProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(sliderValue: SliderValue) {
        if(typeof sliderValue === 'number') {
            this.props.onMaxKanaIndexChange(sliderValue);
        }
        
    }

    render() {
        return <div> 
            <Slider 
                marks={marks}
                min={1}
                max={allKanas.length}
                onChange={this.onChange}
                value={this.props.maxKanaIndex} 
            />
        </div>;
    }
}

export default KanaLevelSelector;
