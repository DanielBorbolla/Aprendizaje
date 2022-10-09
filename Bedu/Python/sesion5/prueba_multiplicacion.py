import unittest
from calculadora import Calculadora


class PruebaAritmeticas(unittest.TestCase):

    def test_multiplicacion(self):
        calculadora = Calculadora()
        resultado = calculadora.multiplicacion(2, 4)
        assert resultado == 8


if __name__ == '__main__':
    unittest.main()
