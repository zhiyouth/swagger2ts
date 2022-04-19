// { type: string; items: { originalRef: string; $ref: string; }; }
export type SwaggerRef = {
  originalRef?: string;
  $ref?: string;
  type?: string;
  items?: SwaggerRef;
}

export type SwaggerDataType = 'object' | 'array' | 'integer' | 'string';

export type SwaggerFormat = 'int32' | 'date-time' | 'int64' | 'double';

export type RequestMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export type ResponseHttpCode = '200' | '201' | '401' | '403' | '404';