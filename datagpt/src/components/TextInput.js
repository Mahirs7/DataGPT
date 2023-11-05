// import { Configuration, OpenAIApi } from 'openai';
// import { useState } from 'react';
// import { arrayItems } from './Options';
import React from "react";
import './TextInput.css';

export const TextInput = ({ input, onInputUpdate }) => {

    const handleInputChange = (e) => {
        const newInput = e.target.value;
        onInputUpdate(newInput);
    };

    return (
        <div className="Form">
            <textarea 
            className="text-area"
            placeholder="Start writing to create a beautiful chart..."
            cols={100}
            rows={20}
            onChange={handleInputChange}
            value={input}
            />
        </div>
    );
};
