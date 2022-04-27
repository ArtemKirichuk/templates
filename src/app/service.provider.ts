import { DescriptionService } from "./description.service";
import { LoggerService } from "./logger.service";
import { UserService } from "./user.service";

const descServiceFactory = (logger: LoggerService, userService: UserService) =>
  new DescriptionService(logger, userService);

export const descServiceProvider =
  { 
    provide: {},
    useFactory: descServiceFactory,
    deps: [LoggerService, UserService]
  };