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


@click.command()
@click.option('--load', prompt="SIML thing", help='Target SIML thing')
def load(load):
    with open(load, 'r') as f:
        try:
            t = yaml.load(f)
            click.echo(t)
        except yaml.YAMLError as e:
            click.echo(e)


if __name__ == '__main__':
    load()
