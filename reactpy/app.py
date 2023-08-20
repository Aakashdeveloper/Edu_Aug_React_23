from flask import Flask, render_template

app = Flask(__name__, static_folder="build/static", template_folder="build")

@app.route('/')
def test():
    return render_template('index.html')

print('Starting Flask')

app.run(host='0.0.0.0')