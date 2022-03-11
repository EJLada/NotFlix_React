import '../App.css';
import React from "react";
import SeriesForm from "../Components/SeriesForm";
import SeriesTable from "../Components/SeriesTable";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Series( { setSeriesToEdit }) {
    const [series, setSeries] = useState([]);
    const [oneSeries, setOneSeries] = useState({ seriesID: "", title: "", contentRating: "" });
    
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setOneSeries(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const loadSeries = async () => {
        const response = await fetch('/series');
        const data = await response.json();
        setSeries(data.series);
    }

    const addSeries = async () => {
        const newSeries = oneSeries;
        const response = await fetch('/series', {
            method: 'POST',
            body: JSON.stringify(newSeries),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the series");
        } else {
            alert(`Failed to add series, status code = ${response.status}`);
        }
        loadSeries();
    }
    
    const filterSeries = async () => {
        let header = {};
        let url = '/series';
        for (const [key, value] of Object.entries(oneSeries)) {
            if (value !== "") {
                header[key] = value;
            }
        }
        url += '?' + (new URLSearchParams(header)).toString()
        const response = await fetch(url);
        const data = await response.json();
        setSeries(data.series);
        loadSeries();
    }

    const editSeries = async (seriesToEdit) => {
        setSeriesToEdit(seriesToEdit);
        let url = `/series/${seriesToEdit.seriesID}`;
        navigate(url);
    }

    const deleteSeries = async (_id) => {
        const response = await fetch(`/series/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            alert('Successfully deleted series');
        } else {
            console.error(`Failed to delete series with id=${_id}, status code = ${response.status}`);
        }
        loadSeries();
    }

    useEffect(() => {
        loadSeries();
    }, [])

    return (
        <div className="page">
            <h2>Series Management</h2>
            <SeriesForm series={oneSeries} handleChange={handleChange}/>
            <button type='button' onClick={addSeries}>ADD NEW SERIES</button>
            <button type='button' onClick={filterSeries}>FILTER SERIES</button>
            <button type='button' onClick={loadSeries}>CLEAR ALL FILTERS</button>
            <SeriesTable series={series} onDelete={deleteSeries} onEdit={editSeries}/>
        </div>
    );
}