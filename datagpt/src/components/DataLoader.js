import React, { useState } from "react";
import './DataLoader.css';
   
export function DataLoader() {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);

    const fileReader = new FileReader();

    const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    };

    const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
        const values = i.split(",");
        const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
        }, {});
        return obj;
    });

    setArray(array);
    };

    const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
        fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
        };

        fileReader.readAsText(file);
    }
    };

    const headerKeys = Object.keys(Object.assign({}, ...array));

    return (
    <div style={{
        textAlign: "center",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
        }}>
        <form style={{
            display: 'flex',
            flexDirection: 'row',
            justifySelf: 'center',
            textAlign: 'center',
            width: 280,
        }}>
        <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
            color={'transparent'}
            style={{width: 130, marginRight: 20}}
        />
        <button
            onClick={(e) => {
            handleOnSubmit(e);
            }}
            className='Submit-button'
        >
            <p>
                Submit
            </p>
        </button>
        </form>
        <br />
        <table>
        <thead>
            <tr key={"header"}>
            {headerKeys.map((key) => (
                <th>{key}</th>
            ))}
            </tr>
        </thead>

        <tbody>
            {array.map((item) => (
            <tr key={item.id}>
                {Object.values(item).map((val) => (
                <td>{val}</td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
}