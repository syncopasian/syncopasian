import logging

from flask import Flask, render_template, redirect, jsonify
import json

app = Flask(__name__)

@app.route('/data/<path:path>')
def serve_data(path):
    with open(f'static/data/{path}', 'r') as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path == '':
        return render_template('index.html')
    if path == 'rfp':
        return redirect('https://atlas.mit.edu/atlas/Main.action?tab=home&sub=group_my_reimburse')

    return render_template(path + '.html')

@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=7777, debug=True)

