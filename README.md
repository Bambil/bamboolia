# Bamboolia

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

![bamboo](https://img.shields.io/badge/bambil-bamboo-orange.svg?style=flat-square)
![Docker Automated build](https://img.shields.io/docker/automated/ibamboo/bamboolia.svg?style=flat-square)
[![](https://images.microbadger.com/badges/image/ibamboo/bamboolia.svg)](https://microbadger.com/images/ibamboo/bamboolia "Get your own image badge on microbadger.com")

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
