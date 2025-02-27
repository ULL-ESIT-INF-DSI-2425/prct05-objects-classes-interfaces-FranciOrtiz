
import {describe, test, expect} from "vitest"
import {Alimento, Bebida} from "../src/ejercicio-mod.ts"

describe("Creación de una Bebida", () => {
  test("Creación básica de un objeto Bebida", () => {
    let coca_cola = new Bebida("1234", "coca_cola", "riconudo", "A", 580, "Marrón Negrizo");
    expect(coca_cola.getIdentificador()).toBe("1234");
    expect(coca_cola.getNombre()).toBe("coca_cola");
    expect(coca_cola.getInfo()).toBe("riconudo");
    expect(coca_cola.getNutriscore()).toBe("A");
    expect(coca_cola.getVolumen()).toEqual(580);
    expect(coca_cola.getColor()).toBe("Marrón Negrizo");
  });

  test("Cambio de los valores mediante setter Bebida", () => {
    let coca_cola = new Bebida("1234", "coca_cola", "riconudo", "A", 580, "Marrón Negrizo");
    expect(coca_cola.getIdentificador()).toBe("1234");
    coca_cola.setIdentificador("4321");
    expect(coca_cola.getIdentificador()).toBe("4321");
    expect(coca_cola.getNombre()).toBe("coca_cola");
    coca_cola.setNombre("CocaCola");
    expect(coca_cola.getNombre()).toBe("CocaCola");
    expect(coca_cola.getInfo()).toBe("riconudo");
    coca_cola.setInfo("Cafeina");
    expect(coca_cola.getInfo()).toBe("Cafeina");
    expect(coca_cola.getNutriscore()).toBe("A");
    coca_cola.setNutriscore("C");
    expect(coca_cola.getNutriscore()).toBe("C");
    expect(coca_cola.getVolumen()).toEqual(580);
    coca_cola.setVolumen(250);
    expect(coca_cola.getVolumen()).toEqual(250);
    expect(coca_cola.getColor()).toBe("Marrón Negrizo");
    coca_cola.setColor("Azul");
    expect(coca_cola.getColor()).toBe("Azul");
  });

});
describe("Creación de una Alimento", () => {
    test("Creación básica de un objeto Alimento", () => {
      let chocapic = new Alimento("1234", "chocapic", "riconudo", "A", 580, "Rugoso");
      expect(chocapic.getIdentificador()).toBe("1234");
      expect(chocapic.getNombre()).toBe("chocapic");
      expect(chocapic.getInfo()).toBe("riconudo");
      expect(chocapic.getNutriscore()).toBe("A");
      expect(chocapic.getPeso()).toEqual(580);
      expect(chocapic.getTextura()).toBe("Rugoso");
    });
  
    test("Cambio de los valores mediante setter Alimento", () => {
      let coca_colo = new Alimento("1234", "coca_cola", "riconudo", "A", 580, "Suave");
      expect(coca_colo.getIdentificador()).toBe("1234");
      coca_colo.setIdentificador("4321");
      expect(coca_colo.getIdentificador()).toBe("4321");
      expect(coca_colo.getNombre()).toBe("coca_cola");
      coca_colo.setNombre("CocaCola");
      expect(coca_colo.getNombre()).toBe("CocaCola");
      expect(coca_colo.getInfo()).toBe("riconudo");
      coca_colo.setInfo("Cafeina");
      expect(coca_colo.getInfo()).toBe("Cafeina");
      expect(coca_colo.getNutriscore()).toBe("A");
      coca_colo.setNutriscore("C");
      expect(coca_colo.getNutriscore()).toBe("C");
      expect(coca_colo.getPeso()).toEqual(580);
      coca_colo.setPeso(250);
      expect(coca_colo.getPeso()).toEqual(250);
      expect(coca_colo.getTextura()).toBe("Suave");
      coca_colo.setTextura("Azul");
      expect(coca_colo.getTextura()).toBe("Azul");
    });
});

describe("Shows", () => {
  test("Show de alimento", () => {
    let coca_colo = new Alimento("1234", "coca_colo", "riconudo", "A", 580, "Suave");
    expect(coca_colo.showInfo()).toBe("Identificador:1234 Nombre:coca_colo Información:riconudo Nutriscore:A Volumen:580gr. Textura:Suave");
  });

  test("Show de Bebida", () => {
    let coca_cola = new Bebida("1234", "coca_cola", "riconudo", "A", 580, "Marrón Negrizo");
    expect(coca_cola.showInfo()).toBe("Identificador:1234 Nombre:coca_cola Información:riconudo Nutriscore:A Volumen:580ml. Color:Marrón Negrizo");
  });
});