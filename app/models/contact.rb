class Contact < MailForm::Base
  attribute :name, :validate=>true
  attribute :email, :validate =>  /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname, :captcha => true
  
  #Declare the email headers
  def headers
    {
      :subject => "Success Works LLC.",
      :to => "lauryndbrown@gmail.com",
      :from =>  %("#{name}" <#{email}>)
    }
  end
end