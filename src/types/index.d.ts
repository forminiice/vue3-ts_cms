interface IFilters {
  formatTime: (value: string) => string
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $filters: IFilters
  }
}

export {}
