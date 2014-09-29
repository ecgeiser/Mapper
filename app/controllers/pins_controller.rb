class PinsController < ApplicationController

def index
	@pins = Pin.all
end

def create
	@pin = Pin.new(pin_params)
end

private

def pin_params
  params.require(:pin).permit(:longitude, :latitude)
end

end