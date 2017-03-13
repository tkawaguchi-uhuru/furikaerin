require 'application_system_test_case'

class UsersTest < ApplicationSystemTestCase
  test 'visiting the root' do
    visit root_url

    within 'body' do
      assert has_content? 'hi'
    end
  end
end
