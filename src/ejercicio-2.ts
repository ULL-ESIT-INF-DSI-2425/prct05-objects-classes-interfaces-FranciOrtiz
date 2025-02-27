
// Interfaz para representar una canción
export interface Song {
    name: string;
    duration: number; // en segundos
    genres: string[];
    isSingle: boolean;
    plays: number;
  }
  
// Clase que representa un disco o álbum
export class Album {
  constructor(
    public name: string,
    public year: number,
    public songs: Song[]
  ) {}
  
  getSongCount(): number {
    return this.songs.length;
  }
  
  getTotalDuration(): number {
    return this.songs.reduce((sum, song) => sum + song.duration, 0);
  }
  
  getTotalPlays(): number {
    return this.songs.reduce((sum, song) => sum + song.plays, 0);
  }
}
  
// Clase que representa un artista o grupo musical
export class Artist {
  constructor(
    public name: string,
    public monthlyListeners: number,
    public discography: Album[]
  ) {}
  
  getTotalSongs(): number {
    return this.discography.reduce((sum, album) => sum + album.getSongCount(), 0);
  }
  
  getTotalPlays(): number {
    return this.discography.reduce((sum, album) => sum + album.getTotalPlays(), 0);
  }
}
  
// Clase principal para gestionar la biblioteca musical
export class MusicLibrary {
  artists: Artist[] = [];
  
  addArtist(artist: Artist): void {
    this.artists.push(artist);
  }
  
  displayLibrary(): void {
    console.table(this.artists.map(a => ({
      Nombre: a.name,
      OyentesMensuales: a.monthlyListeners,
      TotalCanciones: a.getTotalSongs(),
      TotalReproducciones: a.getTotalPlays()
    })));
  }
  
  searchArtists(name: string): Artist[] {
    return this.artists.filter(artist => artist.name.toLowerCase().includes(name.toLowerCase()));
  }
  
  searchAlbums(name: string): Album[] {
    return this.artists.flatMap(artist => artist.discography).filter(album => album.name.toLowerCase().includes(name.toLowerCase()));
  }
  
  searchSongs(name: string): Song[] {
    return this.artists.flatMap(artist => artist.discography.flatMap(album => album.songs)).filter(song => song.name.toLowerCase().includes(name.toLowerCase()));
  }
}
