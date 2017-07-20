# In The Name Of God
# ========================================
# [] File Name : parser.py
#
# [] Creation Date : 20-07-2017
#
# [] Created By : Parham Alvani (parham.alvani@gmail.com)
# =======================================
import os
import yaml

from .model import Model


class SIMLParser:
    @staticmethod
    def parse(model_root, model_file):
        with open(os.path.join(model_root, model_file), 'r') as f:
            try:
                model = yaml.load(f)
                if model['package'] != '.%s' % model_root.replace('/', '.'):
                    raise Exception()
                return Model()
                # models['%s.%s' % (model['package'], model['name'])] = model
            except Exception:
                pass
