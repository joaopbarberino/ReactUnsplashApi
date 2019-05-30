import React from 'react';

let pageControl = 1,
    buttonNext = 1,
    buttonPrevious = 2;

class SearchBar extends React.Component {
    state = { term: '', page: pageControl }
    onFormSubmit = (e) => {

        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    updatePageNumber = async (button) => {
        if (button === 1) {
            pageControl += 1;
        }
        if (button === 2) {
            pageControl = pageControl === 1 ? 1 : pageControl -= 1;
        }
        await this.setState({ page: pageControl })
        this.props.onSubmit(this.state.term, this.state.page);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" style={{marginBottom: "10px"}} onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label><h3>Image Search</h3></label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
                <div className="ui fluid buttons">
                    <button onClick={() => this.updatePageNumber(buttonPrevious)} className="ui labeled icon large button">
                        <i className="left chevron icon"></i>
                        Previous page
                </button>
                    <button onClick={() => this.updatePageNumber(buttonNext)} className="ui right labeled icon large button">
                        Next page
                    <i className="right chevron icon"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;