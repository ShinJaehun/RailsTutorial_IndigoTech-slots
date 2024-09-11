class UpdateMoneyJob < ApplicationJob
  queue_as :default

  def perform(money)
    # Do something later
    sleep 2
    Spin.new.broadcast_update_to("slot-machine", target: "money", partial: "home/money", locals: { money: money})

  end
end
