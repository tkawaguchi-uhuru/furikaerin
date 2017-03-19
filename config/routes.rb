Rails.application.routes.draw do
  resources :kpt_boards, only: %i(create), path: 'kpt'
  resources :boards, only: %i(show), param: :key
  root to: 'dashboards#show'
end
