
import { useState } from 'react';

export default function useForm(callback, defaults){
    const [inputs, setInputs] = useState(defaults);

    const handleInputs = (event) => {
        console.log('Event', event.target.value);
        console.log('Event', event.target.id);
        setInputs({
            ...inputs,
           [event.target.id]:event.target.value
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(inputs);
        console.log(callback);
        callback(inputs);
    }

    return {
        inputs,
        handleInputs,
        handleSubmit,
    };

}