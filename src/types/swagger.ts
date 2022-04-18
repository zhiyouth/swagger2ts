import {
  RequestMethod,
  SwaggerDataType,
  SwaggerFormat,
  SwaggerSchema,
  SwaggerTag,
  ResponseHttpCode
} from "./base";

export type Swagger = {
  basePath: string;
  swagger: string;
  host: string;
  info: SwaggerInfo;
  tags: SwaggerTags;
  paths: SwaggerPaths;
  definitions: SwaggerDefinitions;
}

// info
type SwaggerInfo = {
  description: string;
  version: string;
  title: string,
  termsOfService: string
}

// tags
type SwaggerTags = Array<SwaggerTag>

// definitions
type SwaggerDefinitions = {
  [key in string]: {
    type: SwaggerDataType;
    properties: SwaggerDefinition
  } | SwaggerDefinitionItem
}
type SwaggerDefinition = {
  [key in string]: {
    type: SwaggerDataType;
    format: SwaggerFormat;
    description: string;
  }
}
type SwaggerDefinitionItem = {
  [key in string]: SwaggerDefinitionItem
} | {
  type: SwaggerDataType;
  items?: SwaggerDefinitionItem;
  description: string;
}


// paths
type SwaggerPaths = {
  [key in string]: SwaggerPath;
}
export type SwaggerPath = {
  [key in RequestMethod]: {
    tags: Array<string>;
    summary: string;
    operationId: string;
    consumes: Array<string>;
    produces: Array<string>;
    parameters: SwaggerPathParameter[];
    responses: {
      [key in ResponseHttpCode]: {
        description: string;
        responseSchema: SwaggerSchema;
      }
    };
    responsesObject: {
      [key in ResponseHttpCode]: {
        description: string;
        responseSchema: SwaggerSchema;
      }
    };
    deprecated: boolean;
    "x-order": string;
  }
}
export type SwaggerPathParameter = {
  type: string;
  in: string;
  name: string;
  description: string;
  required: boolean;
  schema: SwaggerSchema;
}