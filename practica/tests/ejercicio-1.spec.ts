import {describe, test, expect} from "vitest"
import {Pokedex, Pokemon, Combat} from "../src/ejercicio-1.ts"

const Pichu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", {ataque: 55, defensa: 40, velocidad: 90, hp: 100});
const squirtle = new Pokemon("Squirtle", 9, 0.5, "agua", {ataque: 48, defensa: 65, velocidad: 43, hp: 44});
const pokedex = new Pokedex();
const combate = new Combat(Pichu, squirtle);

describe("Prueba de funcionamiento de la clase Pokemon", () => {
  test("Creación del bicho y constructor correcto", () => {
    expect(Pichu.nombre).toBe("Pikachu");
    expect(Pichu.tipo).toBe("eléctrico");
    expect(Pichu.stats).toStrictEqual({ataque: 55, defensa: 40, velocidad: 90, hp: 100});
    expect(Pichu.altura).toEqual(0.4);
    expect(Pichu.peso).toEqual(6);
  });
});

describe("Prueba de funcionamiento de la clase Pokedex", () => {
  test("Introducción y búsquedad de bichos de bolsillo", () => {
    pokedex.agregarPokemon(squirtle);
    expect(pokedex.buscarPorNombre("squirtle")).toBe(squirtle);
    pokedex.agregarPokemon(Pichu);
    expect(pokedex.buscarPorNombre("Pikachu")).toBe(Pichu);
  });

  test("Búsqueda por tipo", () => {
    expect(pokedex.buscarPorTipo("agua")).toStrictEqual([squirtle]);
  });
});

describe("Pruebas de los combates", () => {
  test("Pruebas de cálculo de efectividad", () => {
    expect(combate.calcularEfectividad(Pichu, squirtle)).toBe(2);
    expect(combate.calcularEfectividad(squirtle, Pichu)).toBe(0.5);
    expect(combate.calcularEfectividad(Pichu, Pichu)).toBe(1);
  });
  
  test("Prueba de resultado combate", () => {
    expect(combate.start()).toStrictEqual(console.log(`\n Pikachu gana el combate!`));
  });
});

