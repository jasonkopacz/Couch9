class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        if @review.save
          render "api/reviews/show"
        else
          render json: @review.errors.full_messages, status: 422
        end
      end

      def index
        @user = User.find(params[:user_id])
        
        @reviews_as_host = Review.where("host_id = ?", @user.id)
        @reviews_for_host = Review.where("author_id = ?", @user.id)
        @reviews_from_host = Review.where("author_id != ? AND surfer_id = ?", @user.id, @user.id)
        # @reviews_from_host = Review.where("author_id != mine AND surfer_id = id",
        # {mine: @user.id, id: @user.id})
        # debugger
      end
    
      def show
        @review = Review.find(params[:id])
      end
    
      def destroy
        if logged_in?
          @review = Review.find(params[:id])
          @review.destroy
          render "api/users"
        else
          render json ["You are not logged in."]
        end
      end
end
