class Spin < ApplicationRecord
    serialize :values, type: Array, coder: JSON
end
