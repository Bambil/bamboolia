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
                m = yaml.load(f)
                if m['package'] != '.%s' % model_root.replace('/', '.'):
                    raise Exception()
                model = Model(package=m['package'], name=m['name'])
                for a in m['attributes']:
                    model.add_attribute(a['name'], a['type'])
                return model
                # models['%s.%s' % (model['package'], model['name'])] = model
            except Exception:
                pass
