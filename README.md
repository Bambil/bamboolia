# Bamboolia

## Things
Bamboolia defines things model with following properties:

| Property      | Description                      |
|:-------------:|:-------------------------------- |
| name          | model name                       |
| package       | dot separated model package name |
| attributes    | **Read Only** Fairly static properties of a modeled object |
| statistics    | **Read Only** Useful information about what a system has been doing |
| states        | **Read Only** The current condition of a system |
| settings      | **Write Only** Value of system parameters |

Each model in the Bamboolia referenced by:

```
.package.name
```

And for better understanding of the Bamboolia let's define lamp in this awesome language:

```yaml
---
name: lamp
package: .standard

attributes:
  - name: vendor
    type: string
settings:
  - name: on
    type: boolean
```

## Up and Running

```sh
sudo docker run --rm --name mongo -p 27017:27017 mongo
```
