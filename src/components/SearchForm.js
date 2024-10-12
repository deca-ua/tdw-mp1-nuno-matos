import React from "react";
import Select from "react-select";

const SearchForm = ({
  artist,
  setArtist,
  song,
  setSong,
  artistOptions,
  songOptions,
  fetchArtistSuggestions,
  fetchSongsForArtist,
  setSongOptions,
  setLyrics,
  setPreviewUrl,
  setArtistOptions,
  loading,
  handleSearch,
}) => {
  return (
    <div>
      <Select
  className="mb-3"
  placeholder="Artist name"
  options={artistOptions}
  value={artistOptions.find((option) => option.value === artist) || null}
  onChange={(option) => {
    if (option) {
      setArtist(option.value);
      fetchSongsForArtist(option.value); // Fetch songs for selected artist
    } else {
      setArtist("");
    }
    setSong(""); // Clear song when artist changes
    setSongOptions([]); // Clear song options when artist changes
  }}
  onInputChange={(input) => {
    fetchArtistSuggestions(input);
  }}
  isClearable
/>


      <Select
        className="mb-3"
        placeholder="Song name"
        options={songOptions}
        value={songOptions.find((option) => option.value === song) || null} // Set selected value
        onChange={(option) => {
          if (option) {
            setSong(option.value); // Set song if option exists
          } else {
            setSong(""); // Clear song if option is null
          }
        }}
        isClearable
        isDisabled={!artist} // Disable the song dropdown when no artist is selected
      />

      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-danger me-2"
          onClick={handleSearch}
          disabled={loading || !artist || !song}
        >
          {loading ? "Searching..." : "Search"}
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setLyrics("");
            setArtist("");
            setSong("");
            setPreviewUrl(null);
            setArtistOptions([]); // Clear artist options
            setSongOptions([]); // Clear song options
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default SearchForm;