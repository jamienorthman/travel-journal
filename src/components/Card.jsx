import React from 'react';

export function Card(props) {
    console.log(props)
    return (
        <div className="card-container">
            <img src={props.img} />
            <div className="card-info">
                <div className="location-info">
                    <p className="country">
                        <i className="fa-solid fa-location-dot"></i>
                         {props.location}
                    </p>
                    <a href={props.wikiInfoUrl} target="_blank">Read more on Avatar Wiki</a>
                </div>
                <h1>{props.title}</h1>
                <p className="duration">{props.startDate} – {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}
