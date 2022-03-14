import React from "react";

const TrackList = (props) => (
    <div id="tracks">
        <h2>Tracks</h2>
        {props.tracks.length > 0 && (
            <table className="pure-table pure-table-bordered pure-table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Play</th>
                        {/* <th>Main artist</th> */}
                        <th>Artists</th>
                        <th>Title</th>
                        <th>Genres</th>
                        <th>Release date</th>
                        <th>Tempo</th>
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
                            {/* <td>{track.main_artist}</td> */}
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
                            <td>{track.key}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
);

export default TrackList;
