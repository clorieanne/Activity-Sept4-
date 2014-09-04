import math

def make_exponentiater(e):
    return lambda(x): math.pow(x,e)
	
square = make_exponentiater(2)