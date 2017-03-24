ruby '2.4.0'
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.0.rc1'
gem 'webpacker', github: 'rails/webpacker'
gem 'pg'
gem 'puma'
gem 'sassc-rails'
gem 'haml-rails'
gem 'hamlit'

gem 'uglifier'
gem 'turbolinks', '~> 5'
gem 'jb'
gem 'ranked-model'
gem 'font-awesome-rails'

group :development, :test do
  gem 'pry-byebug'
  gem 'capybara'
  gem 'poltergeist'
  gem 'factory_girl_rails'
end

group :development do
  gem 'web-console'
  gem 'listen'
  gem 'spring'
  gem 'spring-watcher-listen'
end

group :production do
  gem 'dalli'
  gem 'memcachier'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
