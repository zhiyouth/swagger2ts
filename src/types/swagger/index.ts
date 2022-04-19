import { SwaggerDefinitions } from "./definitions";
import { SwaggerInfo } from "./info";
import { SwaggerPaths } from "./paths";
import { SwaggerTags } from "./tags";

export type Swagger = {
  basePath: string;
  swagger: string;
  host: string;
  info: SwaggerInfo;
  tags: SwaggerTags;
  paths: SwaggerPaths;
  definitions: SwaggerDefinitions;
}



