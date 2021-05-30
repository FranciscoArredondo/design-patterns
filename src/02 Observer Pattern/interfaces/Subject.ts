import Observer from "./Observer";

export default interface Subject {
  registerObserver(obs: Observer): void;
  removeObserver(obs: Observer): void;
  notifyObservers(): void;
}
