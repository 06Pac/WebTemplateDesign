import React from 'react';
import Select from "react-select";

const SelectionL = (props) => {
    return (
        <Select
            options={props.options}
            // defaultInputValue={"select city"}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? '' : '',
                    background: 'darkgray',
                    color: 'black',

                }),
            }}/>
    );
};

export default SelectionL;