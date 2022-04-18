export type SwaggerSchema = {
  originalRef: string;
    $ref: string;
}

export type SwaggerTag = {
  name: string;
  description: string;
}

export type SwaggerDataType = 'object' | 'array' | 'integer' | 'string' | string;

export type SwaggerFormat = 'int32' | 'date-time' | string;

export type RequestMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | string;

export type ResponseHttpCode = '200' | '201' | '401' | '403' | '404' 