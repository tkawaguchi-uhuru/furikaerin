class Board < ApplicationRecord
  validates :key, presence: true, length: { is: 10 }

  before_validation :set_key

  private

  def set_key
    begin
      self.key = SecureRandom.hex(5)
    end until self.class.where(key: self.key).count == 0
  end
end
