import React from 'react';

function SearchButton(props) {
    console.log(props);
    return (
        <button className="searchButton" id="search" onClick={props.focusOn}>
            <i className="ri-search-line"/>
        </button>
    );
}

function YoutubeButton(props) {
    return (
        <button className="searchYTButton" onClick={props.onYTSearch}>
                <i className="ri-youtube-line"/>
        </button>
    );
}

function SpotifyButton(props) {
    return (
        <button className="searchSpotifyButton" onClick={props.onSpotifySearch}>
            <i className="ri-spotify-line" />
        </button>
    );
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:"",
            focus: false,
        };
    }

    focusOn = () => {
        console.log(this.state.focus);
        document.getElementsByClassName("searchInput")[0].classList.add("open");
        this.setState({focus: true});
    }

    onSubmit = destination => event => {
        event.preventDefault();
        if (destination === "youtube")
            this.props.onYTSearch(this.state.title);
        else
            this.props.onSpotifySearch(this.state.title);
    }

    onChange = event => {
        event.preventDefault();
        const title = event.target.value;
        this.setState({title});
    }

    onFocus = event => {
        this.setState({focus: true});
    }

    onBlur = event => {
        this.setState({focus: false});
    }

    render() {
        const focus = this.state.focus;
        let buttons;
        if (focus)
            buttons = [<YoutubeButton/>,<SpotifyButton/>];
        else
            buttons = <SearchButton focusOn={this.focusOn}/>;
        return (
            
        <div className="searchBox">

            <input className="searchInput" onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} type="text" name="" placeholder="Search"/>
            
            {buttons}


            
        </div>
        );
    }
}

export default Search;