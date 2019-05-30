import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    if (props.images.length === 0 && props.nenhumaRequest) {
        return (
            <div className="ui segment">
                <h3>Faça uma pesquisa!</h3>
            </div>
        );
    } else if (props.images.length === 0 && !props.nenhumaRequest) {
        return (
            <div className="ui segment">
                <h3>Não há mais resultados</h3>
            </div>
        );
    } else return (
        <div className="image-list">{props.images.map((img) => <ImageCard key={img.id} image={img} />)}</div>
    );
}

export default ImageList;