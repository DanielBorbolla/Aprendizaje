class Tragamonedas:

    def __init__(self):
        self.pagos = 0

    def reporte(self):
        print(f"${self.pagos}")

    def realizar_pago(self, precio):
        self.pagos += precio
