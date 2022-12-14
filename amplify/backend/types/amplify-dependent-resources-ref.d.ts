export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "awsamplifycognito95952029": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "graphql": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "predictions": {
        "translateTexta2e157cd": {
            "region": "string",
            "sourceLang": "string",
            "targetLang": "string"
        }
    },
    "function": {
        "GraphQLResolverFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}