class Person:
    # Class variable
    species = "Homo sapiens"

    # Constructor (initializer method)
    def __init__(self, name, age):
        # Instance variables
        self.name = name
        self.age = age

    # Instance method
    def say_hello(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

    # Class method
    @classmethod
    def get_species(cls):
        print(f"We belong to the species {cls.species}.")

    # Static method
    @staticmethod
    def is_adult(age):
        return age >= 18


# Creating instances of the Person class
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

# Accessing instance variables and calling instance method
print(person1.name)  # Output: Alice
person2.say_hello()  # Output: Hello, my name is Bob and I am 30 years old.

# Accessing class variable and calling class method
Person.get_species()  # Output: We belong to the species Homo sapiens.

# Calling static method
is_adult_result = Person.is_adult(20)
print(is_adult_result)  # Output: True

