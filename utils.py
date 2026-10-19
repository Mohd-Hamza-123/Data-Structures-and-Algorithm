from numbers import Real

def is_number(value):
    return isinstance(value, Real) and not isinstance(value, bool)