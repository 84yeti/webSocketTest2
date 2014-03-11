require 'sinatra/base'

module Websockettest2
  class App < Sinatra::Base
    get "/" do
      erb :index
    end
  end
end
