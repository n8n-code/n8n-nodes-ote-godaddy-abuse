import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { v1Description } from './resources/v-1';

export class OteGodaddyAbuse implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ote-godaddy-abuse',
		name: 'N8nDevOteGodaddyAbuse',
		icon: { light: 'file:./ote-godaddy-abuse.svg', dark: 'file:./ote-godaddy-abuse.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'GoDaddy Abuse API Terms of Use:GoDaddy’s Abuse API is provided to simplify and standardize the abuse reporting experience. To help us streamline the review of abuse reports, you..',
		defaults: { name: 'ote-godaddy-abuse' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOteGodaddyAbuseApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "V 1",
					"value": "V 1",
					"description": ""
				}
			],
			"default": ""
		},
		...v1Description
		],
	};
}
