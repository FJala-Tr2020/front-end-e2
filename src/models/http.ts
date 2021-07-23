export interface HttpClient<T> {
  getLeads(): Promise<T[]>;
}
