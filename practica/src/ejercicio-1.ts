
type PokemonType = "fuego" | "agua" | "hierba" | "eléctrico";

interface Stats {
  ataque: number;
  defensa: number;
  velocidad: number;
  hp: number;
}

export class Pokemon {
  constructor(
    public nombre: string,
    public peso: number,
    public altura: number,
    public tipo: PokemonType,
    public stats: Stats
  ) {}
}

export class Pokedex {
  private pokemons: Pokemon[] = [];

  agregarPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  buscarPorTipo(tipo: PokemonType): Pokemon[] {
    let resultado: Pokemon[] = [];
    this.pokemons.forEach(p => {
      if (p.tipo === tipo) {
        resultado.push(p);
      }
    });
    return resultado;
  }

  buscarPorNombre(nombre: string): Pokemon | undefined {
    return this.pokemons.find((p) => p.nombre.toLowerCase() === nombre.toLowerCase());
  }

  mostrarPokemons(): void {
    this.pokemons.forEach((p) => console.log(p));
  }
}

export class Combat {
  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {}
  calcularEfectividad(atacante: Pokemon, defensor: Pokemon): number {
    const efectividad: Record<PokemonType, Record<PokemonType, number>> = {
      fuego: { hierba: 2, agua: 0.5, eléctrico: 1, fuego: 1 },
      agua: { hierba: 0.5, eléctrico: 0.5, fuego: 2, agua: 1 },
      hierba: { fuego: 0.5, agua: 2, eléctrico: 1, hierba: 1 },
      eléctrico: { agua: 2, fuego: 1, hierba: 1, eléctrico: 1 },
    };
    return efectividad[atacante.tipo][defensor.tipo];
  }

  calcularDaño(atacante: Pokemon, defensor: Pokemon): number {
    const efectividad = this.calcularEfectividad(atacante, defensor);
    return Math.round(50 * (atacante.stats.ataque / defensor.stats.defensa) * efectividad);
  }

  start(): void {
    let p1Hp = this.pokemon1.stats.hp;
    let p2Hp = this.pokemon2.stats.hp;
    let turno = 1;

    console.log(`¡Comienza el combate entre ${this.pokemon1.nombre} y ${this.pokemon2.nombre}!`);
    
    while (p1Hp > 0 && p2Hp > 0) {
      console.log(`\n--- Turno ${turno} ---`);
      const daño1 = this.calcularDaño(this.pokemon1, this.pokemon2);
      p2Hp = Math.max(0, p2Hp - daño1);
      console.log(`${this.pokemon1.nombre} ataca a ${this.pokemon2.nombre} causando ${daño1} de daño. HP restante: ${p2Hp}`);
      
      if (p2Hp === 0) {
        console.log(`\n${this.pokemon1.nombre} gana el combate!`);
        break;
      }

      const daño2 = this.calcularDaño(this.pokemon2, this.pokemon1);
      p1Hp = Math.max(0, p1Hp - daño2);
      console.log(`${this.pokemon2.nombre} ataca a ${this.pokemon1.nombre} causando ${daño2} de daño. HP restante: ${p1Hp}`);
      
      if (p1Hp === 0) {
        console.log(`\n${this.pokemon2.nombre} gana el combate!`);
        break;
      }
      
      turno++;
    }
  }
}