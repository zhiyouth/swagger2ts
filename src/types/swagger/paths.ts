import {
  RequestMethod, ResponseHttpCode, SwaggerRef,
} from "./base";

// paths
export type SwaggerPaths = {
  [key in string]: SwaggerPath;
}
type SwaggerPath = {
  [key in RequestMethod]?: {
    tags: string[];
    description?: string;
    summary: string;
    operationId: string;
    consumes: string[];
    produces: string[];
    parameters?: PathItemParameters;
    responses: PathItemResponses;
    responsesObject: PathItemResponsesObject;
    deprecated: boolean;
    'x-order': string;
  }
}

type PathItemParameters = {
  name: string;
  in: string;
  description: string;
  required: boolean;
  type?: string;
  schema?: SwaggerRef;
}[]

type PathItemResponses = {
  [key in ResponseHttpCode]?: {
    description: string;
    responseSchema?: SwaggerRef;
    schema?: SwaggerRef;
  }
}

type PathItemResponsesObject = PathItemResponses