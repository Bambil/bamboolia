# Bamboolia

## Things
Defines things model with following properties.
Each model referenced by:

```
.package.name
```

| Property      | Description                      |
|:-------------:|:-------------------------------- |
| name          | model name                       |
| package       | dot separated model package name |
| attributes    | **Read Only** Fairly static properties of a modeled object |
| statistics    | **Read Only** Useful information about what a system has been doing |
| states        | **Read Only** The current condition of a system |
| settings      | **Write Only** Value of system parameters |
