import React from 'react';

class Search extends React.Component {
    state={title:""};

    onSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state.title);
    }

    onChange = event => {
        event.preventDefault();
        const title = event.target.value;
        this.setState({title});
    }

    render(){
        return (
            <div className="searchbar">
                <form onSubmit={this.onSubmit}>
                    <div class="form">
                        <input onChange={this.onChange} type="text" placeholder="Search Music on Youtube"/>
                    </div>
                </form>
                <button onClick={this.onSubmit}>Search</button>
            </div>
        );
    }
}

export default Search;