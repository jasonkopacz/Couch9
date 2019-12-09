class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    if logged_in?
      @user = User.find(params[:id])
      @user.destroy
      render "api/users"
    else
      render json ["You are not logged in."]
    end
  end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :username, :email, :password, :age,
    :gender, :occupation, :about_me, :location_id, :languages => [], :education => [])
  end
end
