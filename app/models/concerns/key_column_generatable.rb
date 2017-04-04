module KeyColumnGeneratable
  extend ActiveSupport::Concern

  included do
    validates :key, presence: true, length: { is: 10 }
    before_validation :set_key, on: :create
  end

  def to_key
    [key]
  end

  def to_param
    key
  end

  private

  def set_key
    self.key = SecureRandom.hex(5)
  end
end
