export class CreateDatasetDto {
  name: string
  datasets: CreateDatasetCriteriaDto[]
}

export class CreateDatasetCriteriaDto {
  criteria: {
    total_case: number
    total_population: number
    sanitation_rate: number
    clean_water_rate: number
    safe_house_rate: number
  }
  district: {
    id: number
  }
}
