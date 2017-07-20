# In The Name Of God
# ========================================
# [] File Name : model.py
#
# [] Creation Date : 20-07-2017
#
# [] Created By : Parham Alvani (parham.alvani@gmail.com)
# =======================================


class Model:
    def __init__(self, name, package):
        self.name = name
        self.package = package
        self.attributes = []
        self.states = []
        self.settings = []

    def add_attribute(self, name, type):
        self.attributes.append((name, type))

    def add_state(self, name, type):
        self.states.append((name, type))

    def add_setting(self, name, type):
        self.settings.append((name, type))
