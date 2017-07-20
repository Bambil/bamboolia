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
import os

from siml.parser import SIMLParser

app = flask.Flask(__name__)
models = []


def load(package):
    for root, dirs, files in os.walk(package):
        for file in files:
            models.append(SIMLParser.parse(root, file))

        for model_package in dirs:
            load(model_package)


load('packages')
print(models)


@app.route('/model/<string:thing>', methods=['GET'])
def model_handler(thing):
    return "Hello World!"
