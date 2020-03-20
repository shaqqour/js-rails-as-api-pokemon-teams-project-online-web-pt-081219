class TrainersController < ApplicationController

    def index
        trainers = Trainer.all
        render json: trainers.to_json(
            :include => { :pokemons => { only: [:species, :nickname] } },
            :only => [:name]
        )
    end

    def edit
        byebug
    end

end
