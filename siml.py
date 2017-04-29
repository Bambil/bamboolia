#!/usr/bin/env python3
# In The Name Of God
# ========================================
# [] File Name : siml.py
#
# [] Creation Date : 27-04-2017
#
# [] Created By : Parham Alvani (parham.alvani@gmail.com)
# =======================================
import click
import yaml
import os

models = {}


def load(package):
    for root, dirs, files in os.walk(package):
        for model_file in files:
            with open(os.path.join(root, model_file), 'r') as f:
                try:
                    model = yaml.load(f)
                    if model['package'] != '.%s' % root.replace('/', '.'):
                        continue
                    click.echo('%s.%s' % (model['package'], model['name']))
                    models['%s.%s' % (model['package'], model['name'])] = model
                except Exception:
                    pass
        for model_package in dirs:
            load(model_package)


@click.command()
@click.option('--package', prompt="SIML package", help='Target SIML package')
def load_cmd(package):
    load(package)


if __name__ == '__main__':
    load_cmd()
