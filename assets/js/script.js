


class Video{
    constructor(videoMusica, videoPelicula, videoSeries) {
        this._videoMusica = () => videoMusica;
        this._videoPelicula = () => videoPelicula;
        this._videoSeries = () => videoSeries;
    }

    get videoMusica(){
        return this._videoMusica();
    }

    get videoPelicula(){
        return this._videoPelicula();
    }

    get videoSeries(){
        return this._videoSeries();
    }

    mostrarMusica(){
        document.getElementById("musica").innerHTML;

    mostrarPelicula(){
        document.getElementById("peliculas").innerHTML; 
    }

    mostrarSeries(){
        document.getElementById("series").innerHTML;
    }
}


let musica = 'https://www.youtube.com/watch?v=D5Y11hwjMNs&ab_channel=CancanoCancano';
let pelicula = 'https://www.youtube.com/watch?v=MzfjyqN1l40&ab_channel=Maon';
let serie = 'https://www.youtube.com/watch?v=dKf-nmEzecA&ab_channel=IGN';




class Musica extends Video{
    constructor(videoMusica, videoPelicula, videoSeries){
        super(videoMusica, videoPelicula, videoSeries);
    }

    mostrarMusica(){
        document.getElementById("musica").innerHTML = `<iframe width="560" height="315" src=${this.videoMusica} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

class Pelicula extends Video{
    constructor(videoMusica, videoPelicula, videoSeries){
        super(videoMusica, videoPelicula, videoSeries);
    }

    mostrarPelicula(){
        document.getElementById("peliculas").innerHTML = `<iframe width="560" height="315" src="${this.videoPelicula}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

class Series extends Video{
    constructor(videoMusica, videoPelicula, videoSeries){
        super(videoMusica, videoPelicula, videoSeries);
    }

    mostrarSeries(){
        document.getElementById("series").innerHTML = `<iframe width="560" height="315" src="${this.videoSeries}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}


let videoM = new Musica(musica,pelicula,serie);
let videoP = new Pelicula(musica,pelicula,serie);
let videoS = new Series(musica,pelicula,serie);

videoM.mostrarMusica();
videoP.mostrarPelicula();
videoS.mostrarSeries();
