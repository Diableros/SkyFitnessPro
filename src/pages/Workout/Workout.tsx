import WorkoutSelect from "@/components/WorkoutSelect"
import { mockData } from "../Home/mockData"

const exampleData = mockData[1]

const Workout = () => {
  return <WorkoutSelect course={exampleData} />
}

export default Workout
