/**
 * Clase abstracta Comun, con las caracteristicas comunes de un alimento o bebida
 */
abstract class Comun {
  /**
   * Constructor principal de la clase abstracta comun
   * @param identificador Identificador asociado al alimento
   * @param nombre Nombre coloquial del alimento
   * @param info Información adicional acerca del alimento
   * @param nutriscore Valor en la escala del Nutriscore
   */
  constructor(private identificador: string, private nombre: string, private info: string, private nutriscore: string) {}
  /**
   * Getter que devuelve el valor del identificador
   * @returns Identificador del objeto Comun e hijos
   */
  getIdentificador(): string {
    return this.identificador;
  }
  /**
   * Getter que devuelve el nombre
   * @returns Nombre del objeto
   */
  getNombre(): string {
    return this.nombre;
  }
  /**
   * Getter de la información
   * @returns Información adicional
   */
  getInfo(): string {
    return this.info;
  }
  /**
   * Getter de su nota en el nutriscore
   * @returns Nutriscore del alimento
   */
  getNutriscore(): string {
    return this.nutriscore;
  }
  /**
   * Setter del identificador
   * @param nuevo_identificador Nuevo identificador del objeto 
   */
  setIdentificador(nuevo_identificador: string): void {
    this.identificador = nuevo_identificador;
  }
  /**
   * Setter del nombre del objeto
   * @param nuevo_nombre Nombre nuevo que tendrá el objeto
   */
  setNombre(nuevo_nombre: string): void {
    this.nombre = nuevo_nombre; 
  }
  /**
   * Setter de la información del objeto
   * @param nuevo_info Nueva información del objeto
   */
  setInfo(nuevo_info: string): void {
    this.info = nuevo_info;
  }
  /**
   * Setter del nutriscore
   * @param nuevo_nutriscore Nuevo nutriscore del objeto 
   */
  setNutriscore(nuevo_nutriscore: string): void {
    this.nutriscore = nuevo_nutriscore;
  }
  /**
   * Función abstracta que mostrará la información de manera distinta en función de quién herede de esta clase
   */
  abstract showInfo(): string;
}
/**
 * Clase Alimento, hija de la clase abstracta Comun
 */
export class Alimento extends Comun {
  /**
   * Constructor del alimento
   * @param identificador Same as Comun
   * @param nombre Same as Comun
   * @param info Same as Comun
   * @param nutriscore Same as Comun
   * @param peso Peso marcado en gr del alimento
   * @param textura Textura descrita del alimento
   */
  constructor(identificador: string, nombre: string, info: string, nutriscore: string, private peso: number, private textura: string) {
    super(identificador, nombre, info, nutriscore);
    this.peso = peso;
    this.textura = textura;
  }
  /**
   * Getter de la textura
   * @returns Atributo de la textura
   */
  getTextura(): string {
    return this.textura;
  }
  /**
   * Getter del peso
   * @returns Peso del alimento
   */
  getPeso(): number {
    return this.peso;
  }
  /**
   * Setter de la textura
   * @param nueva_textura Nueva textura del alimento 
   */
  setTextura(nueva_textura: string): void {
    this.textura = nueva_textura;
  }
  /**
   * Setter del peso
   * @param peso_nuevo Nuevo peso del alimento 
   */
  setPeso(peso_nuevo: number): void {
    this.peso = peso_nuevo;
  }
  /**
   * Función que muestra un string con los datos del alimento
   * @returns Cadena mostrando los atributos privados del alimento
   */
  showInfo(): string {
    let resultado: string;
    resultado = "Identificador:";
    resultado += this.getIdentificador();
    resultado += " Nombre:";
    resultado += this.getNombre();
    resultado += " Información:";
    resultado += this.getInfo();
    resultado += " Nutriscore:";
    resultado += this.getNutriscore();
    resultado += " Volumen:";
    resultado += this.getPeso();
    resultado += "gr.";
    resultado += " Textura:";
    resultado += this.getTextura();
    return resultado;    ;
  }
}
/**
 * Clase Bebida, Hija de la clase abstracta Comun
 */
export class Bebida extends Comun {
  /**
   * Constructor de la Bebida
   * @param identificador Same as Comun
   * @param nombre Same as Comun
   * @param info Same as Comun
   * @param nutriscore Same as Comun
   * @param volumen Volumen de la bebida en su recipiente
   * @param color Color de la bebida
   */
  constructor(identificador: string, nombre: string, info: string, nutriscore: string, private volumen: number, private color: string) {
    super(identificador, nombre, info, nutriscore);
    this.volumen = volumen;
    this.color = color;
  }
  /**
   * Getter del volumen
   * @returns Valor del atributo privado volumen
   */
  getVolumen(): number {
    return this.volumen;
  }
  /**
   * Getter del Color
   * @returns Valor del atributo privado color
   */
  getColor(): string {
    return this.color;
  }
  /**
   * Setter del volumen
   * @param nuevo_volumen Volumen nuevo de la bebida 
   */
  setVolumen(nuevo_volumen: number): void {
    this.volumen = nuevo_volumen;
  }
  /**
   * Setter del color
   * @param nuevo_color nuevo color de la bebida 
   */
  setColor(nuevo_color: string): void {
    this.color = nuevo_color;
  }
  /**
   * Función que muestra los datos de los atributos internos
   * @returns Cadena con los valores 
   */
  showInfo(): string {
    let resultado: string;
    resultado = "Identificador:";
    resultado += this.getIdentificador();
    resultado += " Nombre:";
    resultado += this.getNombre();
    resultado += " Información:";
    resultado += this.getInfo();
    resultado += " Nutriscore:";
    resultado += this.getNutriscore();
    resultado += " Volumen:";
    resultado += this.getVolumen();
    resultado += "ml.";
    resultado += " Color:";
    resultado += this.getColor();
    return resultado;    
  }
}

