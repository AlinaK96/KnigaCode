import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './table.module.css'

const Table = () => {

    //const ARCHIVE__URL = 'http://172.30.9.164/archive/get'
    //const [tableData, setTableData] = useState([])

    const [tableData, setTableData] = useState([
        { id: 1, firstName: 'Фамилия', lastName: 'Имя', middleName: 'Отчество', day: 15, month: 7, year: 1990, mission: 6, cry1: 8, cry2: 1, sense1: 3, sense2: 6, mask1: 7, mask2:9, resourse1: 3, resourse2: 4 },
        { id: 2, firstName: 'Фамилия', lastName: 'Имя', middleName: 'Отчество', day: 15, month: 7, year: 1990, mission: 6, cry1: 8, cry2: 1, sense1: 3, sense2: 6, mask1: 7, mask2:9, resourse1: 3, resourse2: 4 },
        { id: 3, firstName: 'Фамилия', lastName: 'Имя', middleName: 'Отчество', day: 15, month: 7, year: 1990, mission: 6, cry1: 8, cry2: 1, sense1: 3, sense2: 6, mask1: 7, mask2:9, resourse1: 3, resourse2: 4 },
        { id: 4, firstName: 'Фамилия', lastName: 'Имя', middleName: 'Отчество', day: 15, month: 7, year: 1990, mission: 6, cry1: 8, cry2: 1, sense1: 3, sense2: 6, mask1: 7, mask2:9, resourse1: 3, resourse2: 4 },
        { id: 5, firstName: 'Фамилия', lastName: 'Имя', middleName: 'Отчество', day: 15, month: 7, year: 1990, mission: 6, cry1: 8, cry2: 1, sense1: 3, sense2: 6, mask1: 7, mask2:9, resourse1: 3, resourse2: 4 },
        { id: 6, firstName: 'Фамилия', lastName: 'Имя', middleName: 'Отчество', day: 15, month: 7, year: 1990, mission: 6, cry1: 8, cry2: 1, sense1: 3, sense2: 6, mask1: 7, mask2:9, resourse1: 3, resourse2: 4 },
        { id: 7, firstName: 'Фамилия', lastName: 'Имя', middleName: 'Отчество', day: 15, month: 7, year: 1990, mission: 6, cry1: 8, cry2: 1, sense1: 3, sense2: 6, mask1: 7, mask2:9, resourse1: 3, resourse2: 4 },
        { id: 8, firstName: 'Фамилия', lastName: 'Имя', middleName: 'Отчество', day: 15, month: 7, year: 1990, mission: 6, cry1: 8, cry2: 1, sense1: 3, sense2: 6, mask1: 7, mask2:9, resourse1: 3, resourse2: 4 },
    ]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const videoCategory = await axios.get(ARCHIVE__URL);
    //             setTableData(videoCategory.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const tableHeaders = [
        { id: 1, name: 'Фамилия', backgroundColor: '#efde72' },
        { id: 2, name: 'Имя', backgroundColor: '#efde72' },
        { id: 3, name: 'Отчество', backgroundColor: '#efde72' },
        { id: 4, name: 'день', backgroundColor: '#efde72' },
        { id: 5, name: 'месяц', backgroundColor: '#efde72' },
        { id: 6, name: 'год', backgroundColor: '#efde72' },
        { id: 7, name: 'МИССИЯ', backgroundColor: '#b2d384' },
        { id: 9, name: 'ПЛАЧ', backgroundColor: '#af3303' },
        { id: 10, name: 'ПЛАЧ', backgroundColor: '#af3303' },
        { id:11, name: 'СУТЬ', backgroundColor: '#af3303' },
        { id: 12, name: 'СУТЬ', backgroundColor: '#af3303' },
        { id: 13, name: 'ОБЛИК', backgroundColor: '#b2d384' },
        { id: 14, name: 'ОБЛИК', backgroundColor: '#b2d384' },
        { id: 15, name: 'РЕСУРС', backgroundColor: '#378b6f' },
        { id: 16, name: 'РЕСУРС', backgroundColor: '#378b6f' },
    ];

    const handleDeleteRow = (id) => {
        const updatedTableData = tableData.filter((row) => row.id !== id);
        setTableData(updatedTableData);
    };

    function seeCalc(item) {
        console.log(item);
    }

    return (
        <div className={classes.page__container}>
            {tableData.length === 0 ? 
                <h2 style={{ color: 'white'}} >Здесь будет храниться история ваших расчётов</h2> : 
                <table className={classes.custom__table}>
                    <thead>
                        <tr>
                            {tableHeaders.map((header) => (
                                <th key={header.id} style={{ backgroundColor: header.backgroundColor }} >
                                {header.name}
                                </th>
                            ))}
                            <th>
                                <img src="/img/svg/edit.svg" alt="edit" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id} onClick={() => seeCalc(row.id)}>
                                <td>{row.firstName}</td>
                                <td>{row.lastName}</td>
                                <td>{row.middleName}</td>
                                <td>{row.day}</td>
                                <td>{row.month}</td>
                                <td>{row.year}</td>
                                <td>{row.mission}</td>
                                <td>{row.cry1}</td>
                                <td>{row.cry2}</td>
                                <td>{row.sense1}</td>
                                <td>{row.sense2}</td>
                                <td>{row.mask1}</td>
                                <td>{row.mask2}</td>
                                <td>{row.resourse1}</td>
                                <td>{row.resourse2}</td>
                                <td onClick={() => handleDeleteRow(row.id)}>
                                    <img src="/img/svg/bin.svg" alt="bin" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
};

export default Table;
