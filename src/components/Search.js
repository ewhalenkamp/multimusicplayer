import React from 'react';

class Search extends React.Component {
    state={title:""};

    onSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state.title);
    }

    onChange = event => {
        const title = event.target.value;
        this.setState({title});
        console.log(this.state.title);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div class="form">
                        <input onChange={this.onChange} type="text" placeholder="Search Music on Youtube"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;