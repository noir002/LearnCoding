class student:
    def__init__(self):
    print("INSIDE CLASS")
    print(x)
    def f(self):
        print("INSIDE CLASS")
    
s1=student()
s2=student()
print("OUTSIDE CLASS")
print(s1.x)
s1.f('JOHN',21)       
s2.f('JACK',19)

