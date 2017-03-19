Rails.application.routes.draw do
  resources :kpt_boards, only: %i(create), path: 'kpt'
  root to: 'dashboards#show'
end
