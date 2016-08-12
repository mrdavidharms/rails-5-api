class Api::V1::TodosController < ApplicationController
  def index
    render json: Todo.all
  end
end
