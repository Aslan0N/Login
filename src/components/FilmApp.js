import React, { Component } from "react";

export class FilmApp extends Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://upload.wikimedia.org/wikipedia/tr/9/94/Ba%C5%9Flang%C4%B1%C3%A7.jpg",
      title: "Inception",
      director: "Christopher Nolan",
      IMDB: "8,8/10",
    };
  }
  changeFilm = ()=>{
    this.setState({
      image:
      "https://upload.wikimedia.org/wikipedia/tr/f/fc/Prestij_f_1.jpg",
    title: "Prestige",
    director: "Christopher Nolan",
    IMDB: "8,5/10",
    })
  }
  render() {
    return (
      <>
        <div className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img width={200} src={this.state.image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">
                  {this.state.director}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {this.state.IMDB}
                  </small>
                </p>
                <button className="btn btn-primary" type="button" onClick={this.changeFilm}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FilmApp;
