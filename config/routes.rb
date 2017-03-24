Rails.application.routes.draw do
  resources :kpt_boards, only: %i(create), path: 'kpt'
  resources :boards, only: %i(show), param: :key do
    resources :categories, only: %i(), param: :key do
      resources :cards, only: %i(create update destroy), param: :key, shallow: true
    end
  end
  root to: 'dashboards#show'
end
