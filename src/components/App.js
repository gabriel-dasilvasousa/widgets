import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';

const items = [
    {
        title: 'React',
        content: 'JS Library frontend'
    },
    {
        title: 'Why use React?',
        content: 'React is one favorites libraries among enginners'
    },
    {
        title: 'How do you use React',
        content: 'Building Components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'Shades of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return(
        <div>
            <Dropdown 
                options={options}
                onSelectedChange={setSelected}
                selected={selected}
            />
        </div>
    );
};