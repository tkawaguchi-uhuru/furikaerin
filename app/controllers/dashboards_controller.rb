class DashboardsController < ApplicationController
  def show
    @boards = Board.order(id: :desc).all
  end
end
