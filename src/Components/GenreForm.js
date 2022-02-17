import "../App.css";
import React from "react";

export default function GenreForm() {
    return (
        <form>
            <div className="formField">
                <label for="genreID">Genre ID:</label>
                    <input
                        type="text"
                        id="genreID"
                        name="genreID"
                        value="17000203001" />
            </div>
            <div className="formField">
                <label for="genreName">Genre Name:</label>
                    <input
                        type="text"
                        id="genreName"
                        name="genreName"
                        value="Space Western" />
            </div>
        </form>
    );
}