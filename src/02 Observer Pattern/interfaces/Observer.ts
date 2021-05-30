import { WeatherDataType } from "./Types";

export default interface Observer {
  update(data: WeatherDataType): void;
  unsubscribe(): void;
}
