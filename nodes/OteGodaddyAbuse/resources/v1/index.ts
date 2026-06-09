import type { INodeProperties } from 'n8n-workflow';

export const v1Description: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					]
				}
			},
			"options": [
				{
					"name": "Get Tickets",
					"value": "Get Tickets",
					"action": "List all abuse tickets ids that match user provided filters",
					"description": "List all abuse tickets ids that match user provided filters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/abuse/tickets"
						}
					}
				},
				{
					"name": "Create Ticket",
					"value": "Create Ticket",
					"action": "Create a new abuse ticket",
					"description": "Create a new abuse ticket",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/abuse/tickets"
						}
					}
				},
				{
					"name": "Get Ticket Info",
					"value": "Get Ticket Info",
					"action": "Return the abuse ticket data for a given ticket id",
					"description": "Return the abuse ticket data for a given ticket id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/abuse/tickets/{{$parameter[\"ticketId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/abuse/tickets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Tickets"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "The type of abuse.",
			"default": "A_RECORD",
			"type": "options",
			"options": [
				{
					"name": "A RECORD",
					"value": "A_RECORD"
				},
				{
					"name": "CHILD ABUSE",
					"value": "CHILD_ABUSE"
				},
				{
					"name": "CONTENT",
					"value": "CONTENT"
				},
				{
					"name": "FRAUD WIRE",
					"value": "FRAUD_WIRE"
				},
				{
					"name": "IP BLOCK",
					"value": "IP_BLOCK"
				},
				{
					"name": "MALWARE",
					"value": "MALWARE"
				},
				{
					"name": "NETWORK ABUSE",
					"value": "NETWORK_ABUSE"
				},
				{
					"name": "PHISHING",
					"value": "PHISHING"
				},
				{
					"name": "SPAM",
					"value": "SPAM"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Tickets"
					]
				}
			}
		},
		{
			"displayName": "Closed",
			"name": "closed",
			"description": "Is this abuse ticket closed?",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "closed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Tickets"
					]
				}
			}
		},
		{
			"displayName": "Source Domain Or Ip",
			"name": "sourceDomainOrIp",
			"description": "The domain name or ip address the abuse originated from",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceDomainOrIp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Tickets"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"description": "The brand/company the abuse is targeting. ie: brand name/bank name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "target",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Tickets"
					]
				}
			}
		},
		{
			"displayName": "Created Start",
			"name": "createdStart",
			"description": "The earliest abuse ticket creation date to pull abuse tickets for",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdStart",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Tickets"
					]
				}
			}
		},
		{
			"displayName": "Created End",
			"name": "createdEnd",
			"description": "The latest abuse ticket creation date to pull abuse tickets for",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdEnd",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Tickets"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of abuse ticket numbers to return.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Tickets"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The earliest result set record number to pull abuse tickets for",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Tickets"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/abuse/tickets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Create Ticket"
					]
				}
			}
		},
		{
			"displayName": "Info",
			"name": "info",
			"type": "string",
			"default": "",
			"description": "Additional information that may assist the abuse investigator. ie: server logs or email headers/body for SPAM",
			"routing": {
				"send": {
					"property": "info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Create Ticket"
					]
				}
			}
		},
		{
			"displayName": "Info URL",
			"name": "infoUrl",
			"type": "string",
			"default": "",
			"description": "Reporter URL if housing additional information that may assist the abuse investigator",
			"routing": {
				"send": {
					"property": "infoUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Create Ticket"
					]
				}
			}
		},
		{
			"displayName": "Intentional",
			"name": "intentional",
			"type": "boolean",
			"default": false,
			"description": "Do you believe this is intentional abuse by the domain holder?",
			"routing": {
				"send": {
					"property": "intentional",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Create Ticket"
					]
				}
			}
		},
		{
			"displayName": "Proxy",
			"name": "proxy",
			"type": "string",
			"default": "",
			"description": "The Proxy information required to view the abuse being reported. ie: Specific IP used, or country of IP viewing from",
			"routing": {
				"send": {
					"property": "proxy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Create Ticket"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "",
			"description": "The URL or IP where live abuse content is located at. ie: https://www.example.com/bad_stuff/bad.php",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Create Ticket"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "string",
			"default": "",
			"description": "The brand/company the abuse is targeting. ie: brand name/bank name",
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Create Ticket"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "A_RECORD",
			"description": "The type of abuse being reported.",
			"options": [
				{
					"name": "A RECORD",
					"value": "A_RECORD"
				},
				{
					"name": "CHILD ABUSE",
					"value": "CHILD_ABUSE"
				},
				{
					"name": "CONTENT",
					"value": "CONTENT"
				},
				{
					"name": "FRAUD WIRE",
					"value": "FRAUD_WIRE"
				},
				{
					"name": "IP BLOCK",
					"value": "IP_BLOCK"
				},
				{
					"name": "MALWARE",
					"value": "MALWARE"
				},
				{
					"name": "NETWORK ABUSE",
					"value": "NETWORK_ABUSE"
				},
				{
					"name": "PHISHING",
					"value": "PHISHING"
				},
				{
					"name": "SPAM",
					"value": "SPAM"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Create Ticket"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/abuse/tickets/{ticketId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Ticket Info"
					]
				}
			}
		},
		{
			"displayName": "Ticket ID",
			"name": "ticketId",
			"required": true,
			"description": "A unique abuse ticket identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"v1"
					],
					"operation": [
						"Get Ticket Info"
					]
				}
			}
		},
];
