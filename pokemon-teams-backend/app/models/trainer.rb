class Trainer < ApplicationRecord
    has_many :pokemons

    def addPokemon
        if self.pokemons < 6
            name = Faker::Name.first_name
            species = Faker::Games::Pokemon.name
            pokemon = Pokemon.create(nickname: name, species: species, trainer_id: trainer.id)
            self.pokemons << pokemon
        end
    end

end
