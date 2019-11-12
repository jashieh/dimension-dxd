# == Schema Information
#
# Table name: channels
#
#  id           :integer          not null, primary key
#  server_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  channel_name :string
#

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
