import smtplib
from email.message import EmailMessage

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465
message = EmailMessage()
message.set_content("오늘은 한우촌 갈비탕 먹은 날 입니다.")

message["Subject"] = "0618 점심."
message["From"] = "98taek@gmail.com"
message["To"] = "imjt9345@naver.com"

smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login("98taek@gmail.com", "jobccxdjkrrygcra")
smtp.send_message(message)
smtp.quit()
