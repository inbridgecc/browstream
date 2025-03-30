export interface ClientOptions {
  server: {
    /**
     * The URL of the server
     * @example 'http://127.0.0.1:8080'
     */
    url: string;
    /**
     * Authentication key of the server (optional)
     */
    key?: string;
  };
}
