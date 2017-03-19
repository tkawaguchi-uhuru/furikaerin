FactoryGirl.define do
  factory :card do
    board

    trait :on_keep do
      category { create(:category, :as_keep) }
      title "I've been studying English every day"
    end

    trait :card_on_problem do
      category { create(:category, :as_problem) }
      title "I'm a night owl"
    end

    trait :card_on_try do
      category { create(:category, :as_try) }
      title "I'll be an early bird"
    end
  end
end
