json.extract! pet, :id, :species, :name, :mood, :treat, :play, :talk, :to_pet, :pet_happy, :pet_sad, :pet_neutral, :game_id, :created_at, :updated_at
json.url pet_url(pet, format: :json)