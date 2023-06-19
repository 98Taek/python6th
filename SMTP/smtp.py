import smtplib
from email.message import EmailMessage
import imghdr
import re

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465


def send_email(addr):
    reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
    if bool(re.match(reg, addr)):
        smtp.send_message(message)
        print("정상적으로 이메일을 발송되었습니다.")
    else:
        print('유효한 이메일 주소가 아닙니다.')


message = EmailMessage()
message.set_content("오늘 저녁밥 뭐 해줄거야")

message["Subject"] = "0618 저녁밥은 뭘 먹을까."
message["From"] = "98taek@gmail.com"
message["To"] = "imjt9345@naver.com"

with open("lunch.png", "rb") as image:
    image_file = image.read()

image_type = imghdr.what('lunch', image_file)
message.add_attachment(image_file, maintype='image', subtype=image_type)

smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login("98taek@gmail.com", "jobccxdjkrrygcra")

send_email('imjt9345@naver.com')
smtp.quit()
