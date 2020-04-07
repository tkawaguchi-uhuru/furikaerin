FactoryBot.define do
  factory :board do
    trait :as_kpt do
      before(:create) do |board|
        create(:category, :as_keep, board: board)
        create(:category, :as_problem, board: board)
        create(:category, :as_try, board: board)
      end
    end
  end
end
