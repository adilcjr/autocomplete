Rails.application.routes.draw do

  resources :users, only: [:index]
  resources :messages, only: [:new]
  resources :cities, only: [:index]
  root to:'users#index'
end
