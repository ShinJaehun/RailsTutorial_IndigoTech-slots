class HomeController < ApplicationController
  def index
    if !session[:money]
      session[:money] = 0
    end
  end
end
