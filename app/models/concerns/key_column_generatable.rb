module KeyColumnGeneratable
  extend ActiveSupport::Concern

  included do
    validates :key, presence: true, length: { is: 10 }
    before_validation :set_key
  end

  def to_key
    [key]
  end

  def to_param
    key
  end

  private

  def set_key
    begin
      self.key = SecureRandom.hex(5)
    end until self.class.where(key: self.key).count == 0
  end
end
