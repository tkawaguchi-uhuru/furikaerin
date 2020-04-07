FactoryBot.define do
  factory :category do
    board

    trait :as_keep do
      title { 'keep' }
    end

    trait :as_problem do
      title { 'problem' }
    end

    trait :as_try do
      title { 'try' }
    end
  end
end
