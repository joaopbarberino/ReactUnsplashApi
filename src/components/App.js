// Importar pacotes e dependências
import React from 'react';
import Unsplash from '../api/unsplash'

// Importar componentes
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: [], nenhumaRequest: true};
    onSearchSubmit = async (term, page) => {
        const response = await Unsplash.get('/search/photos', {
            // Especifica os parametros que serão recebidos pela API
            params: { query: term, per_page: 50, page: page }
        });

        this.setState({ images: response.data.results, nenhumaRequest: false });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} nenhumaRequest = {this.state.nenhumaRequest} />
            </div>
        );
    }
}

export default App;