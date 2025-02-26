import { describe, it, expect, beforeEach } from "vitest";
import { Album, Artist, MusicLibrary, Song } from "../src/ejercicio-2.ts"; // Asegúrate de importar correctamente

describe("Music Library Tests", () => {
  let library: MusicLibrary;
  let artist: Artist;
  let album: Album;
  let song1: Song;
  let song2: Song;

  beforeEach(() => {
    // Configuración de datos de prueba
    song1 = { name: "Song A", duration: 210, genres: ["Rock"], isSingle: false, plays: 5000 };
    song2 = { name: "Song B", duration: 180, genres: ["Pop"], isSingle: true, plays: 10000 };

    album = new Album("Album 1", 2023, [song1, song2]);

    artist = new Artist("Band X", 2000000, [album]);

    library = new MusicLibrary();
    library.addArtist(artist);
  });

  it("Debe agregar artistas correctamente", () => {
    expect(library.searchArtists("Band X")).toHaveLength(1);
  });

  it("Debe calcular correctamente el total de canciones de un artista", () => {
    expect(artist.getTotalSongs()).toBe(2);
  });

  it("Debe calcular correctamente la duración total de un álbum", () => {
    expect(album.getTotalDuration()).toBe(390);
  });

  it("Debe calcular correctamente el total de reproducciones de un álbum", () => {
    expect(album.getTotalPlays()).toBe(15000);
  });

  it("Debe calcular correctamente el total de reproducciones de un artista", () => {
    expect(artist.getTotalPlays()).toBe(15000);
  });

  it("Debe buscar un álbum por nombre", () => {
    expect(library.searchAlbums("Album 1")).toHaveLength(1);
  });

  it("Debe buscar una canción por nombre", () => {
    expect(library.searchSongs("Song A")).toHaveLength(1);
  });
});