import { useBoundStore } from '../../store'
import { Button } from './Button'

export type TimeRangeType = 'long_term' | 'medium_term' | 'short_term'

const TimeRangeButtons = (): JSX.Element => {
  const timeRange = useBoundStore((state) => state.timeRange)
  const setTimeRange = useBoundStore((state) => state.setTimeRange)

  return (
    <div role="button" className="btn-group gap-2">
      <Button
        intent={timeRange === 'long_term' ? 'secondary' : 'outline'}
        size="small"
        className="text-xs font-medium sm:text-sm"
        onClick={() => setTimeRange('long_term')}
      >
        All Time
      </Button>
      <Button
        intent={timeRange === 'medium_term' ? 'secondary' : 'outline'}
        size="small"
        className="text-xs font-medium sm:text-sm"
        onClick={() => setTimeRange('medium_term')}
      >
        6 Months
      </Button>
      <Button
        intent={timeRange === 'short_term' ? 'secondary' : 'outline'}
        size="small"
        className="text-xs font-medium sm:text-sm"
        onClick={() => setTimeRange('short_term')}
      >
        This Month
      </Button>
    </div>
  )
}

export default TimeRangeButtons
