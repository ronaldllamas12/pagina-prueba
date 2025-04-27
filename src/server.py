from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Obtener el directorio base
        base_dir = os.path.dirname(os.path.abspath(__file__))
        # Limpiar la ruta
        path = path.lstrip('/')
        # Si es la raíz, servir index.html
        if not path:
            path = 'index.html'
        # Combinar con el directorio base
        return os.path.join(base_dir, path)

    def do_GET(self):
        try:
            # Obtener la ruta traducida
            path = self.translate_path(self.path)
            # Verificar si el archivo existe
            if not os.path.exists(path):
                self.send_error(404, "File not found")
                return
            # Servir el archivo
            self.path = path
            return super().do_GET()
        except Exception as e:
            self.send_error(500, str(e))

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

def run(server_class=HTTPServer, handler_class=CORSRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Servidor iniciado en http://localhost:{port}")
    print(f"Sirviendo archivos desde: {os.path.dirname(os.path.abspath(__file__))}")
    httpd.serve_forever()

if __name__ == '__main__':
    run() 