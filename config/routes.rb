Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  resources :kpt_boards, only: %i(create), path: 'kpt'
  resources :boards, only: %i(show), param: :key, path: 'b' do
    resources :categories, only: %i(), param: :key do
      resources :cards, only: %i(create update destroy), param: :key, shallow: true
    end
  end
  root to: 'dashboards#show'
end
