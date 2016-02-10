# SIMP (Simple IoT Management Protocol)
## Management Requirements
### Management System/Architecture
- Support multiple device classes.
- Minimize state maintained on constrained devices.
- Support for lossy and unreliable links.

### Management Protocols
- Modular implementations with basic set of protocol primitives.
- Compact encoding of management data
- Protocol extensibility.

### Configuration Management
- Self-configuration capability
- Asynchronous Transaction Support
- Network reconfiguration

### Monitoring
- Device status monitoring

## Management of the Internet of Things

- SNMP on Constrained Devics
- CoAP Access to Management Data

### SNMP on Constrained Devics

#### Contiki-SNMP

* Contiki is an operating system for embedded devices
* SNMP engine (written in C) for constrained devices
* built on top of the Contiki uIPv6 stack (6LoWPAN)

## Management JSON File :)
First of all, see following sample:
```json
{
	"id": 1,
	"type": "light",
	"variables": [
		{
			"name": "light_intensity",
			"type": "int",
			"permission": "wr"
		},
		{
			"name": "reset"
			"type": "func",
			"parameters": [
				{
					"name": "interval",
					"type": "int"
				}
			],
			"retrun": "void"
		}
	]
}
```
In this sample you can see a IoT object definition of Light type 1, this light have
a read-writeable variable for light intensity and have a funtion for reset it after `interval`
seconds.
