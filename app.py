from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('root', 'index.html')

@app.route('/root/images/<filename>')
def serve_root_images(filename):
    return send_from_directory('root/images', filename)

@app.route('/root/scripts/<filename>')
def serve_root_scripts(filename):
    return send_from_directory('root/scripts', filename)

@app.route('/root/pages/<filename>')
def serve_root_pages(filename):
    return send_from_directory('root/pages', filename)

@app.route('/root/<filename>')
def serve_root(filename):
    return send_from_directory('root',filename)

if __name__ == '__main__':
    app.run(debug=True)
