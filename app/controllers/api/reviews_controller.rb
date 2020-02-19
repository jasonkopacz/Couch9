class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @user_id = current_user.id
        if @review.save
          render "api/reviews/show"
        else
          render json: @review.errors.full_messages, status: 422
          
        end
      end

      def index
        @user = User.find(params[:user_id])
      
        @reviews_as_host_from_surfer = Review.where("host_id = ? AND author_id != ? AND surfer_id != ?", @user.id, @user.id, @user.id)
        # @reviews_as_host_for_surfer = Review.where("host_id = ? AND author_id = ?", @user.id, @user.id)
        @reviews_for_host = Review.where("author_id = ? AND host_id != ?", @user.id, @user.id)
        @reviews_from_host = Review.where("author_id != ? AND surfer_id = ? AND host_id != ?", @user.id, @user.id, @user.id)
        # debugger
        render "api/reviews/index"
        
        # @reviews_from_host = Review.where("author_id != mine AND surfer_id = id",
        # {mine: @user.id, id: @user.id})
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

      private

      def review_params
        params.require(:review).permit(:body, :recommended, :surfer_id,
          :host_id, :author_id, :yes, :no, :surf, :host)
      end
end
