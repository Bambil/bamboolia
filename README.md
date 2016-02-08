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

## Management of the Internet of Things

- SNMP on Constrained Devics
- CoAP Access to Management Data

### SNMP on Constrained Devics

#### Contiki-SNMP

* Contiki is an operating system for embedded devices
* SNMP engine (written in C) for constrained devices
* built on top of the Contiki uIPv6 stack (6LoWPAN)
