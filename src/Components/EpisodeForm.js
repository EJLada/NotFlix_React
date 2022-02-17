import "../App.css";
import React from "react";

export default function EpisodeForm() {
    return(
        <form>
            <div className="formField">
                <label for="seriesID">Series ID:</label>
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value="10846290217" />
            </div>
            <div className="formField">
                <label for="episodeID">Episode ID:</label>
                    <input
                        type="text"
                        id="episodeID"
                        name="episodeID"
                        value="159930210041" />
            </div>
            <div className="formField">
                <label for="episodeTitle">Episode Title:</label>
                    <input
                        type="text"
                        id="episodeTitle"
                        name="episodeTitle"
                        value="The Child" />
            </div>
            <div className="formField">
                <label for="releaseDate">Release Date</label>
                <input
                    type="date"
                    id="releaseDate"
                    name="releaseDate"
                    value="2020-11-12"/>
            </div>
            <div className="formField">
                <label for="previousEpisode">Previous Episode</label>
                <select name="previousEpisode" id="previousEpisode">
                    <option name="option from DB here" selected>Huckleberry</option>
                </select>
            </div>
            <div className="formField">
                <label for="nextEpisode">Next Episode</label>
                <select name="nextEpisode" id="nextEpisode">
                    <option name="option from DB here" selected>Null</option>
                </select>
            </div>
            <div className="formField">
                <label for="fileSource">Source File</label>
                <input
                    type="text"
                    id="fileSource"
                    name="fileSource"
                    value="chickynuggies.m4a"/>
            </div>
        </form>
    );
}