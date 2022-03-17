import React from "react";
import TrackKey from "./TrackKey";

const TrackList = (props) => (
    <div id="tracks">
        <h2>Tracks</h2>
        {props.tracks.length > 0 && (
            <table className="pure-table pure-table-bordered pure-table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Play</th>
                        <th>Artists</th>
                        <th>Title</th>
                        <th>Genres</th>
                        <th>Release date</th>
                        <th>Tempo</th>
                        <th>Popularity</th>
                        <th>Main artist popularity</th>
                        <th>Key</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tracks.map((track, i) => (
                        <tr key={track.spotify_id}>
                            <td>{i + 1}</td>
                            <td>
                                <a href={track.preview_url}>PLAY</a>
                            </td>
                            <td>
                                {track.all_artists.map((artist, i) => (
                                    <span key={i}>
                                        {i > 0 && ", "}
                                        {artist}
                                    </span>
                                ))}
                            </td>
                            <td>{track.name}</td>
                            <td>
                                {track.genres.map((genre, i) => (
                                    <span key={i}>
                                        {i > 0 && ", "}
                                        {genre}
                                    </span>
                                ))}
                            </td>

                            <td>{track.release_date}</td>
                            <td>{track.tempo}</td>
                            <td>{track.popularity}</td>
                            <td>{track.main_artist_popularity}</td>
                            <td>
                                <TrackKey trackKey={track.key} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
);

export default TrackList;
