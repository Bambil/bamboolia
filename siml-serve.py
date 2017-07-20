#!/usr/bin/env python3
# In The Name Of God
# ========================================
# [] File Name : siml-serve.py
#
# [] Creation Date : 20-07-2017
#
# [] Created By : Parham Alvani (parham.alvani@gmail.com)
# =======================================
import flask

app = flask.Flask(__name__)


@app.route('/model/<string:thing>', methods=['GET'])
def model_handler(thing):
    return "Hello World!"
