import React from 'react';
import Accordion from './Accordion';
import Search from './Search'

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

export default () => {
    return(
        <Search />
    );
};