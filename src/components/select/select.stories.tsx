// import { action } from '@storybook/addon-actions';
// import { action } from 'storybook/actions';
// import { action } from '@storybook/addon-actions'
import { Select } from './select'
import { useState } from 'react';


export default {
    title: 'Select',
    component: Select
}

export const BaseExample = () => {

    const [value, setValue] = useState('2')

    return <Select onChange={setValue}

        value={value}
        items={[
            { value: '1', title: 'Misk' },
            { value: '2', title: 'Kiew' },
            { value: '3', title: 'Warszawa' },
            { value: '4', title: 'Grodno' },
        ]} />
} 