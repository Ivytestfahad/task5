import React, { useState } from "react";
import DataTable from 'react-data-table-component';

function App() {
    const [inputData, setInputData] = useState([
        {
            id: 1,
            title: '',
            year: '',
        },
        {
            id: 2,
            title: '',
            year: '',
        },
    ]);

    const handleTitleChange = (e, index) => {
        const { value } = e.target;
        const newData = [...inputData];
        newData[index] = { ...newData[index], title: value, year: value };
        setInputData(newData);
    };

    const columns = [
        {
            name: 'Title',
            cell: row => (
                <input
                    type="text"
                    value={row.title}
                    onChange={(e) => handleTitleChange(e, inputData.indexOf(row))}
                    style={{ width: '100px', marginRight: '10px', color: "black" }}
                />
            )
        },
        {
            name: 'Year',
            cell: row => (
                <span>{row.year}</span>
            )
        },
    ];

    return (
        <DataTable
            columns={columns}
            data={inputData}
        />
    );
}

export default App;
