json.extract! pet, :id, :species, :name, :mood, :treat, :play, :talk, :to_pet, :created_at, :updated_at
json.url pet_url(pet, format: :json)
