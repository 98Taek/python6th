from datetime import datetime
from datetime import date

dt = datetime(year=2023, month=6, day=9, hour=10, minute=37)
print(dt)
print(type(dt))

current_datetime = datetime.now()
print(current_datetime)

d = date(year=2023, month=6, day=9)
print(d)

current_day = date.today()
print(current_day)