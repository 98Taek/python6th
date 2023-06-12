class Vehicle:

    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start_engine(self):
        return "The engine is running!"


class Car(Vehicle):
    def start_engine(self):
        return super().start_engine() + " It's a car engine."


my_car = Car("Kia", "K7", 2023)
print(my_car.start_engine())