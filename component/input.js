import React from 'react';

export default function Input(props) {
    return (
        <div className={props.className}>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} 
                type={props.type} 
                name={props.name} 
                value={props.value} 
                defaultChecked={props.checked ?? false} 
            />
        </div>
    )
}
