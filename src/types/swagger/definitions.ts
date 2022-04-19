import { SwaggerDataType, SwaggerFormat, SwaggerRef } from "./base";

// definitions
export type SwaggerDefinitions = {
  [key in string]: {
    type: SwaggerDataType;
    properties?: SwaggerDefinition
    required?: string[];
    additionalProperties?: {
      type: string
    }
  }
}
type SwaggerDefinition = {
  [key in string]: {
    type: SwaggerDataType;
    description: string;
    format?: SwaggerFormat;
    example?: string | number;
    additionalProperties?: {
      type: string;
    }
  } | SwaggerRef
}