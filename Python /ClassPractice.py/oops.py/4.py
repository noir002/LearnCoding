class DemoClass:
    a=10
    
    def showvalue(self):
        self.c=self.a*self.a
        print(self.c)

    def __init__(self):
        print("Hello")
        self.d=self.a*self.a*self.a
        print(self.d)

    


object=DemoClass()
object.showvalue()       