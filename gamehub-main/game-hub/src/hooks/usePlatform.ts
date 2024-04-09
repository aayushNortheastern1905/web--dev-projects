import useData from "./useData"
import { Platform } from "./useGame"

const usePlatform = (selectedPlatform: Platform | null) => useData<Platform>("platforms/lists/parents")

export default usePlatform